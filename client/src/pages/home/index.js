import React, { useState } from "react";
import { Layout, Menu, Dropdown, Avatar } from "antd";
import MenuList from "../../component/Menu/MenuList";
import { Link } from "react-router-dom";
import { MenuData } from "./data";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
  UserOutlined
} from "@ant-design/icons";
import "./home.css";
import ContentIndex from "../../router/ContentIndex";
const { Header, Content } = Layout;
const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/" key="loginout">
        退出
      </Link>
    </Menu.Item>
  </Menu>
);
export const HomeIndex = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div>
      <Header className="home-header">
        <div onClick={toggleCollapsed} className="home-header-item">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
          )}
        </div>
        <span className="home-title">物资申领系统</span>
        <div className="header-right">
          <div className="home-header-menu">
            <Dropdown overlay={menu}>
              <Link
                className="ant-dropdown-link"
                onClick={e => e.preventDefault()}
                key="user"
              >
                user01 <DownOutlined />
              </Link>
            </Dropdown>
          </div>
        </div>
      </Header>
      <div className="home-content">
        <MenuList menuData={MenuData} collapsed={collapsed} />
        <Content className="home-main">
          <ContentIndex />
        </Content>
      </div>
    </div>
  );
};