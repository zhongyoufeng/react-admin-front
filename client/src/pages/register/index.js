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
  const validateMessages = {
    required: "改项必填！",
    types: {
      email: "邮箱格式错误，请重新输入！",
      number: "数字格式错误，请重新输入！",
    },
    number: {
      range: "超过最大长度",
    },
  };
  return (
    <div className="page-register">
      <div className="canvasBox">
        <CanvasBack row={12} col={8} />
      </div>
      <div className="registerBox show">
        <Form validateMessages={validateMessages}>
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
            <Form.Item
              name="confirmpassword"
              rules={[
                { required: true, message: "请再次输入密码" },
                { max: 18, message: "最大长度18个字符" },
              ]}
            >
              <Input
                prefix={<KeyOutlined style={{ fontSize: 13 }} />}
                size="large"
                type="confirmpassword"
                placeholder="请再次输入密码"
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
