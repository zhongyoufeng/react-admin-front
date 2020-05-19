import { Menu } from 'antd';
import React from 'react';
import './menu-list.css';
import {Link} from 'react-router-dom';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const { SubMenu } = Menu;

export default function MenuList(props) {

    return (
        <Menu
            className="menu-list"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={props.collapsed}
        >
            {props.menuData.map((item)=>{
                if(item.hasOwnProperty('subs')){
                    return ( <SubMenu
                        key={item.index}
                        title={
                            <span>
                                    <IconFont type={item.icon}/>
                                    <span>{item.title}</span>
                            </span>
                        }
                    >
                        {item.subs.map((subItem)=>{
                            return (<Menu.Item key={subItem.index}>
                                <span>
                                    <Link to={subItem.link} className="link">
                                        {subItem.title}
                                    </Link>
                                </span>
                            </Menu.Item>)
                        })}
                    </SubMenu>)
                }else{
                    return (<Menu.Item key={item.index}>
                        <IconFont type={item.icon}/>
                        <span>
                            <Link to={item.link} className="link">
                                {item.title}
                            </Link>
                        </span>
                    </Menu.Item>)
                }
            })}
        </Menu>
    );
}
