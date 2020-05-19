import React from 'react';
import { Table } from 'antd';

export default function BasicToDoList(props){
    return (<Table columns={props.columns} dataSource={props.data} />)
}

