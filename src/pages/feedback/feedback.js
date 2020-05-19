import React from 'react';
import './index.css';

import {
    Form,
    Input,
    Tooltip,
    Cascader,
    Select,
    Checkbox,
    Button,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;
const residences = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];

const RegistrationForm = () => {
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    return (
        <Form
            className="feedback-form"
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                residence: ['Zhejiang', 'Hangzhou', 'Xihu'],
                prefix: '86',
            }}
            scrollToFirstError
        >   <div style={{fontSize:30,textAlign: "center",marginBottom:20}}>
                问题反馈
        </div>
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: '您输入的E-mail的格式不正确!',
                    },
                    {
                        required: true,
                        message: '请输入你的E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="nickname"
                label={
                    <span>
            姓名&nbsp;
                        <Tooltip title="你希望别人能够联系你吗?">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
                }
                rules={[
                    {
                        required: true,
                        message: '请输入你的名字!',
                        whitespace: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="residence"
                label="居住地"
                rules={[
                    {
                        type: 'array',
                        required: true,
                        message: '请选择你的居住地',
                    },
                ]}
            >
                <Cascader options={residences} />
            </Form.Item>

            <Form.Item
                name="phone"
                label="手机号码"
                rules={[
                    {
                        required: true,
                        message: '请输入手机号码！',
                    },
                ]}
            >
                <Input
                    addonBefore={prefixSelector}
                    style={{
                        width: '100%',
                    }}
                />
            </Form.Item>

            <Form.Item
                name="feedback-text"
                label="问题反馈"
            >
                <TextArea rows={4} />
            </Form.Item>

            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject('您要先选择同意'),
                    },
                ]}
            >
                <Checkbox>
                    我同意这个<span href="">协议</span>
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    提交
                </Button>
            </Form.Item>
        </Form>
    );
};

export default function Feedback(){
    return (
        <div>
            <RegistrationForm />
        </div>
    )
}
