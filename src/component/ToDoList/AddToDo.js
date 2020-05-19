import React,{useState} from 'react';
import { Drawer, Form, Button, Col, Row, Input, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './index.css';

export default function AddTodo(props){

    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState([]);
    const [des, setDes] = useState('');

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const onSubmit = () => {
        props.onSubmit({
            user:'admin',
            des: des,
            fromDate: date[0],
            toDate: date[1],
            label: 1,
            todoState:0
        });
        setVisible(false);
    };

    return (
        <>
        <Button type="primary" onClick={showDrawer}>
          <PlusOutlined /> 新增事项
        </Button>
        <Drawer
          title="创建事项"
          width={360}
          destroyOnClose={true}
          onClose={onClose}
          visible={visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button
                onClick={onClose}
                style={{ marginRight: 8 }}
              >
                取消
              </Button>
              <Button onClick={onSubmit} type="primary">
                提交
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="dateTime"
                  label="时间"
                  rules={[{ required: true, message: '请选择时间' }]}
                >
                  <DatePicker.RangePicker
                    style={{ width: '100%' }}
                    onChange = {(value,formatString) => (setDate(formatString))}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="事项"
                  rules={[
                    {
                      required: true,
                      message: '请输入代办事项',
                    },
                  ]}
                >
                  <Input.TextArea
                      onChange={({target: {value}})=>{setDes(value)}}
                      rows={4}/>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
        </>
    )
}
