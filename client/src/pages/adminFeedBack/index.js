import React, { useEffect, useState } from "react";
import { Card, Button, Table, message, Pagination } from "antd";
const AdminFeedbackForm = () => {
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
    },
    {
      title: "操作",
      key: "action",
      render: (text, record) => (
        <>
          <Button
            type="link"
            onClick={() => {
              delSuggest(record.id);
            }}
          >
            删除
          </Button>
        </>
      ),
    },
  ];
  const [SuggestList, setSuggestList] = useState([]);
  const [PageIndex, setPageIndex] = useState(1);
  const [TotalCount, setTotalCount] = useState(0);
  async function getAllSuggestList() {
    let params = {
      page: PageIndex,
    };
    let res = await window.$get("sys/suggest/list", params);
    if (res.code == 0) {
      setSuggestList(res.page.list);
      setPageIndex(res.page.currPage);
      setTotalCount(res.page.totalCount);
    } else {
      message.error("获取反馈列表失败！");
    }
  }
  async function delSuggest(id) {
    let params = {
      ids: [id],
    };
    let res = await window.$post("sys/suggest/delete", params);
    if (res.code == 0) {
      message.success("删除成功！");
      getAllSuggestList();
    } else {
      message.error("删除失败！");
    }
  }
  useEffect(() => {
    getAllSuggestList();
  }, [PageIndex]);
  return (
    <>
      <Card style={{ margin: 10 }} title="历史反馈记录" hoverable>
        <Table
          columns={columns}
          dataSource={SuggestList}
          pagination={false}
          style={{ marginBottom: "20px" }}
        />
        <Pagination
          defaultCurrent={PageIndex}
          total={TotalCount}
          showTotal={(total, range) => `共${total}条`}
          onChange={(page, size) => {
            setPageIndex(page);
          }}
        />
      </Card>
    </>
  );
};

export default function AdminFeedback() {
  return (
    <div>
      <AdminFeedbackForm />
    </div>
  );
}
