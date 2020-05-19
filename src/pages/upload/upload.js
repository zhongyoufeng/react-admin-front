import React from 'react';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import './index.css';

const { Dragger } = Upload;

const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} 文件上传成功.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} 文件上传失败.`);
        }
    },
};

export default function UploadPic(){
    return (<div className="upload-pic">
        <div className="upload-font">图片上传</div>
        <Dragger {...props}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-text">
                单击或将文件拖到该区域以上传</p>
            <p className="ant-upload-hint">
                支持单次或批量上传。严格禁止上传公司数据或其他文件
            </p>
        </Dragger>
    </div>)
}
