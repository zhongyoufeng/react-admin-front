import React, { useEffect, useState } from "react";
import "./index.css";
import {
  Form,
  Input,
  Select,
  Card,
  Button,
  Table,
  Modal,
  Pagination,
  message
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
const { Option } = Select;
const { TextArea } = Input;
const RegistrationForm = () => {
  const [form] = Form.useForm();
  const [IsModal, setIsModal] = useState(false);
  const [email,setemail]=useState("");
  const [phone,setphone]=useState("");
  const [content,setcontent]=useState("")
  const columns = [
    {
      title: "物资ID",
      key: "id",
      dataIndex: "id"
    },
    {
      title: "物资名称",
      key: "name",
      dataIndex: "name"
    },
    {
      title: "物资详情",
      key: "detail",
      dataIndex: "detail"
    },
    {
      title: "发布时间",
      key: "pushtime",
      dataIndex: "pushtime"
    },
    {
      title: "到期时间",
      key: "endtime",
      dataIndex: "endtime"
    },
    {
      title: "物资数量",
      key: "number",
      dataIndex: "number"
    },
    {
      title: "申领人数",
      key: "phonenum",
      dataIndex: "phonenum"
    },
    {
      title: "操作",
      key: "action",
      render: (text, record) => (
        <>
          <Button type="link">删除</Button>
        </>
      )
    }
  ];
  const dataSource = [
    {
      id: "1",
      name: "防疫专项",
      detail: "N95口罩、消毒水",
      pushtime: "2020-05-20",
      endtime: "2020-05-21",
      number: "100",
      phonenum: "250"
    },
    {
      id: "2",
      name: "政府发放",
      detail: "医用口罩、雨衣",
      pushtime: "2020-05-22",
      endtime: "2020-05-28",
      number: "100",
      phonenum: "250"
    },
    {
      id: "3",
      name: "企业福利",
      detail: "手套，帐篷",
      pushtime: "2020-06-22",
      endtime: "2020-08-28",
      number: "100",
      phonenum: "250"
    }
  ];
  const submitSuccess =async () => {
    if(email==""||phone==""||content==""){
      message.error("请填写必填字段！")
      return
    }
    let params={
      content,
      phone,
      email
    }
    const pushFeedBackRes=await window.$post("sys/suggest/save",params)
    
    setIsModal(false);
  };
  const submitCancel = () => {
    setIsModal(false);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  return (
    <>
      <Card style={{ margin: 10 }} title="历史反馈记录" hoverable>
        <div>
          <Button
            type="primary"
            style={{ marginBottom: "20px" }}
            onClick={() => {
              setIsModal(true);
            }}
          >
            新增反馈
          </Button>
        </div>
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          style={{ marginBottom: "20px" }}
        />
        <Pagination
          defaultCurrent={1}
          total={3}
          showTotal={(total, range) => `共${total}条`}
        />
      </Card>

      {/* 建议反馈信息填写 */}
      <Modal
        title="建议反馈信息填写"
        visible={IsModal}
        footer={[
          <Button key="back" onClick={submitCancel}>
            取消
          </Button>,
          <Button key="submit" type="primary" onClick={submitSuccess}>
            发布
          </Button>
        ]}
      >
        <Form
          name="push"
          initialValues={{
            prefix: "86"
          }}
        >
          <Form.Item
            label="邮箱地址"
            name="email"
            rules={[
              {
                type: "email",
                message: "请正确填写邮箱格式"
              },
              {
                required: true,
                message: "请填写邮箱地址"
              }
            ]}
          >
            <Input size="default" id="email" value={email} onChange={({target})=>{setemail(target.value)}}/>
          </Form.Item>
          <Form.Item
            name="phone"
            label="手机号码"
            rules={[
              {
                required: true,
                message: "请输入手机号码！"
              }
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: "100%"
              }}
              value={phone}
              onChange={({target})=>{setphone(target.value)}}
            />
          </Form.Item>
          <Form.Item
            label="建议反馈"
            name="content"
            rules={[{ required: true, message: "建议或反馈!" }]}
          >
            <TextArea rows={4} id="content" value={content} onChange={({target})=>{setcontent(target.value)}} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default function Feedback() {
  return (
    <div>
      <RegistrationForm />
    </div>
  );
}
