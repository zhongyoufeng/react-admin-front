import React, {useState} from 'react';
import { Layout, Menu, Dropdown, Avatar} from 'antd';
import MenuList from '../../component/Menu/MenuList';
import { Link } from 'react-router-dom';
import { MenuData } from './data';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined,
    MessageOutlined,
    DownOutlined,
    UserOutlined
} from '@ant-design/icons';
import './home.css';
import ContentIndex from '../../router/ContentIndex';

const { Header, Content } = Layout;

const menu = (<Menu>
    <Menu.Item>
        <Link to='/'>退出</Link>
    </Menu.Item>
</Menu>);

export const HomeIndex = () => {

    const [collapsed, setCollapsed] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const handleFullScreen = () => {
        let element = document.documentElement;
        if (fullscreen) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        } else {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.webkitRequestFullScreen) {
                element.webkitRequestFullScreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.msRequestFullscreen) {
                // IE11
                element.msRequestFullscreen();
            }
        }
        setFullscreen(!fullscreen);
    }

    return (
        <div>
            <Header className="home-header">
                <div onClick={toggleCollapsed} className="home-header-item">
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </div>
                <span className="home-title">后台管理系统</span>
                <div className="header-right">
                    <div onClick={handleFullScreen} className="home-header-item">
                        {React.createElement(fullscreen ? FullscreenExitOutlined : FullscreenOutlined)}
                    </div>
                    <div>
                        <Link to='/home/messages'><MessageOutlined /></Link>
                    </div>
                    <div className='home-header-menu'>
                        <Avatar size={42} icon={<UserOutlined />} style={{marginRight:10}}/>
                        <Dropdown overlay={menu} >
                            <Link className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                admin <DownOutlined />
                            </Link>
                        </Dropdown>
                    </div>
                </div>
            </Header>
            <div className="home-content">
                <MenuList menuData={MenuData} collapsed={collapsed}/>
                <Content className="home-main">
                    <ContentIndex/>
                </Content>
            </div>
        </div>
    )
}
