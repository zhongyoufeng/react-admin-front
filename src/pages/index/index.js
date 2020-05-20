import React, { useEffect, useState } from "react";
import { Card, Button, Tag, Table, Pagination, Modal, Form, Input,DatePicker } from "antd";
import { connect } from "react-redux";
function Index(props) {
    const { RangePicker } = DatePicker;
  const columns = [
    {
      title: "物资ID",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "物资详情",
      key: "detail",
      dataIndex: "detail",
    },
    {
      title: "发布时间",
      key: "pushtime",
      dataIndex: "pushtime",
    },
    {
      title: "到期时间",
      key: "endtime",
      dataIndex: "endtime",
    },
    {
      title: "状态",
      key: "status",
      dataIndex: "status",
      render: (text, record) => (
        <>
          <span>
            {text == 1
              ? "未申领"
              : text == 2
              ? "已中签，待发货"
              : "已过期，不可申领"}
          </span>
        </>
      ),
    },
    {
      title: "操作",
      key: "action",
      render: (text, record) => (
        <>
          <Button
            type="link"
            disabled={record.status != 1 ? true : false}
            onClick={() => {
              setIsModal(true);
            }}
          >
            申请领用
          </Button>
        </>
      ),
    },
  ];
  const dataSource = [
    {
      id: "1",
      detail: "N95口罩、消毒水",
      pushtime: "2020-05-20",
      endtime: "2020-05-21",
      status: "1",
    },
    {
      id: "2",
      detail: "医用口罩、雨衣",
      pushtime: "2020-05-22",
      endtime: "2020-05-28",
      status: "2",
    },
    {
      id: "3",
      detail: "手套，帐篷",
      pushtime: "2020-06-22",
      endtime: "2020-08-28",
      status: "3",
    },
  ];
  const [IsModal, setIsModal] = useState(false);
  const submitSuccess = () => {
    setIsModal(false);
  };
  const submitCancel = () => {
    setIsModal(false);
  };
  useEffect(() => {}, []);

  return (
    <div>
      <Card style={{ margin: 10 }} title="物资申领列表" hoverable>
      <RangePicker style={{ marginBottom: 20 }} placeholder={["发布时间","到期时间"]}/>
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
      <Modal
        title="物资申领信息填写"
        visible={IsModal}
        onOk={submitSuccess}
        onCancel={submitCancel}
      >
        <Form>
          <Form.Item
            label="真实姓名"
            name="username"
            rules={[{ required: true, message: "请填写真实姓名!" }]}
          >
            <Input size="default" />
          </Form.Item>
          <Form.Item
            label="身份证号"
            name="cardID"
            rules={[{ required: true, message: "请填写身份证号!" }]}
          >
            <Input size="default" />
          </Form.Item>
          <Form.Item
            label="手机号码"
            name="phone"
            rules={[{ required: true, message: "请填写手机号码!" }]}
          >
            <Input size="default" />
          </Form.Item>
          <Form.Item
            label="住宅地址"
            name="address"
            rules={[{ required: true, message: "请填写住宅地址!" }]}
          >
            <Input size="default" />
          </Form.Item>

          <Form.Item
            label="邮箱地址"
            name="email"
            rules={[{ required: true, message: "请填写邮箱地址!" }]}
          >
            <Input size="default" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
export default connect((state) => {
  return state.toDoList;
})(Index);
