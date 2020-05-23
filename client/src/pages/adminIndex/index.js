import React, { useEffect, useState } from "react";
import { DownloadOutlined } from "@ant-design/icons";
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
function AdminIndex(props) {
  const { RangePicker } = DatePicker;
  const columns = [
    {
      title: "物资ID",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "物资名称",
      key: "name",
      dataIndex: "name",
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
      title: "物资数量",
      key: "number",
      dataIndex: "number",
    },
    {
      title: "申领人数",
      key: "phonenum",
      dataIndex: "phonenum",
      render: (text, record) => (
        <>
          <Button
            type="link"
            onClick={() => {
              setIsApplyDetail(true);
            }}
          >
            {text}
          </Button>
        </>
      ),
    },
    {
      title: "操作",
      key: "action",
      render: (text, record) => (
        <>
          <Button type="link">随机抽取中签</Button>
          <Button
            type="link"
            onClick={() => {
              setIsWinDetail(true);
            }}
          >
            查看中签信息
          </Button>
        </>
      ),
    },
  ];
  const dataSource = [
    {
      id: "1",
      name: "防疫专项",
      detail: "N95口罩、消毒水",
      pushtime: "2020-05-20",
      endtime: "2020-05-21",
      number: "100",
      phonenum: "250",
    },
    {
      id: "2",
      name: "政府发放",
      detail: "医用口罩、雨衣",
      pushtime: "2020-05-22",
      endtime: "2020-05-28",
      number: "100",
      phonenum: "250",
    },
    {
      id: "3",
      name: "企业福利",
      detail: "手套，帐篷",
      pushtime: "2020-06-22",
      endtime: "2020-08-28",
      number: "100",
      phonenum: "250",
    },
  ];
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
      title: "申领时间",
      key: "applytime",
      dataIndex: "applytime",
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
      applytime: "2020-05-20 15:30",
    },
    {
      nikename: "usero2",
      username: "大张伟",
      cardID: "36415495656",
      phone: "139784515",
      email: "178156@qq.com",
      address: "深圳市南山区深圳湾一号",
      applytime: "2020-05-20 15:30",
    },
    {
      nikename: "usero3",
      username: "林俊杰",
      cardID: "36415495656",
      phone: "139784515",
      email: "178156@qq.com",
      address: "深圳市南山区深圳湾一号",
      applytime: "2020-05-20 15:30",
    },
  ];
  const [IsModal, setIsModal] = useState(false);
  const [IsApplyDetail, setIsApplyDetail] = useState(false);
  const [IsWinDetail, setIsWinDetail] = useState(false);
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
        <div>
          <Button
            type="primary"
            onClick={() => {
              setIsModal(true);
            }}
          >
            发布物资
          </Button>
          <RangePicker
            style={{ marginBottom: 20, marginLeft: 20 }}
            placeholder={["发布时间", "到期时间"]}
          />
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
     
      {/* 发布物资 */}
      <Modal
        title="物资发布信息填写"
        visible={IsModal}
        onOk={submitSuccess}
        onCancel={submitCancel}
      >
        <Form>
          <Form.Item
            label="物资名称"
            name="name"
            rules={[{ required: true, message: "请填写物资名称!" }]}
          >
            <Input size="default" />
          </Form.Item>
          <Form.Item
            label="物资详情"
            name="detail"
            rules={[{ required: true, message: "请填写物资详情!" }]}
          >
            <Input size="default" />
          </Form.Item>
          <Form.Item
            label="物资数量"
            name="number"
            rules={[{ required: true, message: "请填写物资数量!" }]}
          >
            <Input size="default" />
          </Form.Item>

          <Form.Item
            label="过期时间"
            name="endtime"
            rules={[{ required: true, message: "请填写过期时间!" }]}
          >
            <DatePicker placeholder="过期时间" />
          </Form.Item>
        </Form>
      </Modal>
      
      
      {/* 申领人数详情 */}
      <Modal
        title="防疫专项物资申领人数详情"
        visible={IsApplyDetail}
        style={{ marginRight: "10%" }}
        width="75%"
        onOk={() => {
          setIsApplyDetail(false);
        }}
        onCancel={() => {
          setIsApplyDetail(false);
        }}
      >
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
      </Modal>

      {/* 中签者人数详情 */}
      <Modal
        title="防疫专项物资中签者详情"
        visible={IsWinDetail}
        style={{ marginRight: "10%" }}
        width="75%"
        onOk={() => {
          setIsWinDetail(false);
        }}
        onCancel={() => {
          setIsWinDetail(false);
        }}
      >
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          style={{ marginBottom: 15 }}
        >
          导出
        </Button>
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
      </Modal>
    </div>
  );
}
export default AdminIndex;
