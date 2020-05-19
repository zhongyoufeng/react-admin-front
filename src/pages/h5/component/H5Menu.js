import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

export default function H5Menu(){
    const [current, setCurrent] = useState('all');

    const handleClick = e => {
        setCurrent(e.key);
    };

    return (<>
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="all">
                <Link to='/home/h5/all'>所有</Link>
            </Menu.Item>
            <Menu.Item key="myArt">
                <Link to='/home/h5/myArt'>我的作品</Link>
            </Menu.Item>
            <Menu.Item key="myData">
                <Link to='/home/h5/myData'>我的数据</Link>
            </Menu.Item>
        </Menu>
    </>);
}
