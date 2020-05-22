import React, { useEffect, useState } from "react";
import {
  Card,
  Button,
  Table,
  Pagination,
  Modal,
  Form,
  Input,
  DatePicker,
} from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';
function AdminUserInfoIndex(props) {
  const { RangePicker } = DatePicker;
  const { confirm } = Modal;
  function showDeleteConfirm() {
    confirm({
      title: '确定删除改用户信息?',
      icon: <ExclamationCircleOutlined />,
      content: '',
      okText: '确认',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  const applyColums = [
    {
      title: "用户名",
      key: "nikename",
      dataIndex: "nikename",
    },
    {
      title: "真实姓名",
      key: "username",
      dataIndex: "username",
    },
    {
      title: "身份证号",
      key: "cardID",
      dataIndex: "cardID",
    },
    {
      title: "手机号",
      key: "phone",
      dataIndex: "phone",
    },
    {
      title: "邮箱地址",
      key: "email",
      dataIndex: "email",
    },
    {
      title: "住宅地址",
      key: "address",
      dataIndex: "address",
    },
    {
      title: "操作",
      key: "operation",
      render: (text, record) => (
        <>
          <Button type="link" onClick={showDeleteConfirm}>删除</Button>
        </>
      ),
    },
  ];
  const applyDataSource = [
    {
      nikename: "usero1",
      username: "周杰伦",
      cardID: "36415495656",
      phone: "139784515",
      email: "178156@qq.com",
      address: "深圳市南山区深圳湾一号",
    },
    {
      nikename: "usero2",
      username: "大张伟",
      cardID: "36415495656",
      phone: "139784515",
      email: "178156@qq.com",
      address: "深圳市南山区深圳湾一号",
    },
    {
      nikename: "usero3",
      username: "林俊杰",
      cardID: "36415495656",
      phone: "139784515",
      email: "178156@qq.com",
      address: "深圳市南山区深圳湾一号",
    },
  ];

  useEffect(() => {}, []);

  return (
    <div>
      <Card style={{ margin: 10 }} title="用户信息列表" hoverable>
        <Table
          columns={applyColums}
          dataSource={applyDataSource}
          pagination={false}
          style={{ marginBottom: "20px" }}
        />
        <Pagination
          defaultCurrent={1}
          total={3}
          showTotal={(total, range) => `共${total}条`}
        />
      </Card>
    </div>
  );
}
export default AdminUserInfoIndex;
