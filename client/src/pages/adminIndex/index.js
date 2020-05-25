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
  message,
} from "antd";
import moment from "moment";
function AdminIndex(props) {
  const { RangePicker } = DatePicker;
  const [form] = Form.useForm();
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
  const startTime = moment(
    new Date().getTime() - 7 * 60 * 60 * 24 * 1000
  ).format("YYYY-MM-DD");
  const endTime = moment(new Date().getTime()).format("YYYY-MM-DD");
  const [IsModal, setIsModal] = useState(false);
  const [IsApplyDetail, setIsApplyDetail] = useState(false);
  const [MaterialsList, setMaterialsList] = useState([]);
  const [ApplyList, setApplyList] = useState([]);
  const [IsWinDetail, setIsWinDetail] = useState(false);
  const [QueryPageIndex, setQueryPageIndex] = useState(1);
  const [QueryTotalCount, setQueryTotalCount] = useState(0);
  async function onFinish(value) {
    let { details, quantity, title, expireDate } = value;
    expireDate = moment(expireDate).format("YYYY-MM-DD hh:mm:ss");
    let params = {
      details,
      quantity,
      title,
      expireDate,
    };
    let res = await window.$post("sys/materials/save", params);
    if (res.code == 0) {
      message.success("发布物资信息成功！");
      setIsModal(false);
      setTimeout(() => {
        QueryMaterialsList();
      }, 2000);
    } else {
      message.error("发布物资信息失败！");
    }
  }
  async function QueryMaterialsList(startDate, endDate) {
    let params = {
      startDate: startDate || startTime,
      endDate: endDate || endTime,
      page: QueryPageIndex,
    };
    let res = await window.$get("sys/materials/list", params);
    if (res.code == 0) {
      setMaterialsList(res.page.list);
      setQueryPageIndex(res.page.currPage);
      setQueryTotalCount(res.page.totalCount);
    } else {
      message.error("查询物资列表失败！");
    }
  }
  function submitTime(time) {
    let startDate = moment(time[0]).format("YYYY-MM-DD");
    let endDate = moment(time[1]).format("YYYY-MM-DD");
    QueryMaterialsList(startDate, endDate);
  }
  async function DelMaterials(id) {
    let params = {
      ids: [id],
    };
    let res = await window.$post("sys/materials/delete", params);
    if (res.code == 0) {
      message.success("删除成功！");
      setTimeout(() => {
        QueryMaterialsList();
      }, 2000);
    } else {
      message.success("删除失败！");
    }
  }
  async function ExportMaterials(materialsId) {
    let params = {
      materialsId,
    };
    let res = await window.$post("sys/materials/export", params);
  }
  async function ExtractMaterials(materialsId) {
    let params = {
      materialsId,
    };
    let res = await window.$post("sys/materials/extract", params);
  }
  useEffect(() => {
    QueryMaterialsList();
  }, [QueryPageIndex]);

  return (
    <div>
      <Card style={{ margin: 10 }} title="物资申领列表" hoverable>
        <div>
          <Button
            style={{ marginRight: 10 }}
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
            defaultValue={[
              moment(startTime, "YYYY-MM-DD"),
              moment(endTime, "YYYY-MM-DD"),
            ]}
            style={{ marginBottom: 20 }}
            placeholder={["发布时间", "到期时间"]}
            onChange={submitTime}
          />
        </div>
        <Table
          columns={columns}
          dataSource={MaterialsList}
          pagination={false}
          style={{ marginBottom: "20px" }}
        />
        <Pagination
          defaultCurrent={QueryPageIndex}
          total={QueryTotalCount}
          showTotal={(total, range) => `共${total}条`}
        />
      </Card>

      {/* 发布物资 */}
      <Modal
        title="物资发布信息填写"
        visible={IsModal}
        footer={null}
        style={{ height: "20%" }}
      >
        <Form form={form} name="updateuser" onFinish={onFinish}>
          <Form.Item
            label="物资名称"
            name="title"
            rules={[{ required: true, message: "请填写物资名称!" }]}
          >
            <Input size="default" id="title" />
          </Form.Item>
          <Form.Item
            label="物资详情"
            name="details"
            rules={[{ required: true, message: "请填写物资详情!" }]}
          >
            <Input size="default" id="details" />
          </Form.Item>
          <Form.Item
            label="物资数量"
            name="quantity"
            rules={[{ required: true, message: "请填写物资数量!" }]}
          >
            <Input size="default" id="quantity" />
          </Form.Item>

          <Form.Item
            label="过期时间"
            name="expireDate"
            rules={[{ required: true, message: "请填写过期时间!" }]}
          >
            <DatePicker
              placeholder="过期时间"
              id="expireDate"
              showTime={{
                hideDisabledOptions: true,
                defaultValue: [
                  moment("00:00:00", "HH:mm:ss"),
                  moment("11:59:59", "HH:mm:ss"),
                ],
              }}
              format="YYYY-MM-DD HH:mm:ss"
            />
          </Form.Item>
          <Form.Item>
            <Button
              style={{ marginRight: 25 }}
              onClick={() => {
                setIsModal(false);
              }}
            >
              取消
            </Button>
            <Button type="primary" htmlType="submit">
              提交修改
            </Button>
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
          dataSource={ApplyList}
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
          dataSource={ApplyList}
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
