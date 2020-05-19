import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import {
  UserOutlined,
  KeyOutlined,
  ContactsOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import CanvasBack from "../../component/CanvasBack/index.js";
import LogoImg from "../logo.png";
import "./index.less";
const RegisterIndex = (props) => {
  return (
    <div className="page-register">
      <div className="canvasBox">
        <CanvasBack row={12} col={8} />
      </div>
      <div className="registerBox show">
        <Form>
          <div className="title">
            <img src={LogoImg} alt="logo" />
            <span>物资申领系统-注册</span>
          </div>
          <div>
            <Form.Item
              name="nikename"
              rules={[
                { max: 12, message: "最大长度为12位字符" },
                {
                  required: true,
                  whitespace: true,
                  message: "请输入用户名",
                },
              ]}
            >
              <Input
                prefix={<TeamOutlined style={{ fontSize: 13 }} />}
                size="large"
                id="nikename"
                placeholder="请输入用户名"
              />
            </Form.Item>

            <Form.Item
              name="username"
              rules={[
                { max: 12, message: "最大长度为12位字符" },
                {
                  required: true,
                  whitespace: true,
                  message: "请输入真实姓名",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined style={{ fontSize: 13 }} />}
                size="large"
                id="username"
                placeholder="请输入真实姓名"
              />
            </Form.Item>

            <Form.Item
              name="cardID"
              rules={[
                { max: 40, message: "最大长度为40位字符" },
                {
                  required: true,
                  whitespace: true,
                  message: "请输入身份证号",
                },
              ]}
            >
              <Input
                prefix={<ContactsOutlined style={{ fontSize: 13 }} />}
                size="large"
                id="cardID"
                placeholder="请输入身份证号"
              />
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[
                { max: 11, message: "最大长度为11位字符" },
                {
                  required: true,
                  whitespace: true,
                  message: "请输入手机号",
                },
              ]}
            >
              <Input
                prefix={<PhoneOutlined style={{ fontSize: 13 }} />}
                size="large"
                id="phone"
                placeholder="请输入手机号"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                { max: 40, message: "最大长度为40位字符" },
                {
                  required: true,
                  whitespace: true,
                  message: "请输入邮箱",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined style={{ fontSize: 13 }} />}
                size="large"
                id="email"
                placeholder="请输入邮箱"
              />
            </Form.Item>
            <Form.Item
              name="address"
              rules={[
                { max: 40, message: "最大长度为40位字符" },
                {
                  required: true,
                  whitespace: true,
                  message: "请输入住宅地址",
                },
              ]}
            >
              <Input
                prefix={<EnvironmentOutlined style={{ fontSize: 13 }} />}
                size="large"
                id="address"
                placeholder="请输入住宅地址"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "请输入密码" },
                { max: 18, message: "最大长度18个字符" },
              ]}
            >
              <Input
                prefix={<KeyOutlined style={{ fontSize: 13 }} />}
                size="large"
                type="password"
                placeholder="请输入密码"
              />
            </Form.Item>
            <div className="register-btn-box">
              <a
                onClick={() => {
                  props.history.push("/login");
                }}
              >
                已有账号，去登录
              </a>
              <div>
                <Button className="submit-btn" type="primary" size="large">
                  注册
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
export const Register = withRouter(RegisterIndex);
