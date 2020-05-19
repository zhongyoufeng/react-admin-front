import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import CanvasBack from "../../component/CanvasBack/index.js";
import LogoImg from "../logo.png";
import "./index.less";

const LoginIndex = (props) => {
  const onFinish = (values) => {
    props.history.push("/home");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="page-login">
      <div className="canvasBox">
        <CanvasBack row={12} col={8} />
      </div>
      <div className="loginBox show">
        <Form>
          <div className="title">
            <img src={LogoImg} alt="logo" />
            <span>物资申领系统-登录</span>
          </div>
          <div>
            <Form.Item
              name="username"
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
                prefix={<UserOutlined style={{ fontSize: 13 }} />}
                size="large"
                id="username"
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
            <div className="login-btn-box">
              <a
                onClick={() => {
                  props.history.push("/adminlogin");
                }}
              >
                切换管理员登录
              </a>
              <div>
                <Button
                  className="submit-btn"
                  size="small"
                  onClick={() => {
                    props.history.push("/register");
                  }}
                >
                  注册
                </Button>
                <Button className="submit-btn" size="small" type="primary">
                  登录
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
export const Login = withRouter(LoginIndex);
