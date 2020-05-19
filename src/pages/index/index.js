import React,{ useEffect } from 'react';
import { Card, Button, Tag } from 'antd';
import {connect} from 'react-redux';
import ToDoListCalendar from '../../component/ToDoList/ToDoListCalendar';
import BasicToDoList from '../../component/ToDoList/BasicToDoList';
import AddToDo from '../../component/ToDoList/AddToDo';

function Index(props) {
    const {dispatch} = props;

    const columns = [
        {
            title: '事项',
            dataIndex: 'des',
            key: 'des',
        },
        {
            title: '开始时间',
            key: 'fromDate',
            dataIndex: 'fromDate',
        },
        {
            title: '结束时间',
            key: 'toDate',
            dataIndex: 'toDate',
        },
        {
            title: '优先级',
            key: 'label',
            dataIndex: 'label',
        },
        {
            title: '状态',
            key: 'todoState',
            render: (text, record) => (
                <>
                    {record.todoState === '1' ?
                        <Tag color="green">已完成</Tag>
                        : <Tag color="red">未完成</Tag>}
                </>
            )
        },
        {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <>
                    <Button onClick={handleDelete.bind(this,record.key)}>删除</Button>
                    {record.todoState === '1' ? null : <Button onClick={handleUpdate.bind(this,record.key)}>完成</Button>}
                </>
            ),
        },
    ];

    const handleDelete = (key) => {
        dispatch({
            type:'TODOLIST_DELETE_UPDATE',
            payload:{
                key: key
            }
        })
    };

    const handleUpdate = (key) => {
        dispatch({
            type:'TODOLIST_UPDATE',
            payload:{
                key: key,
                todoState: '1',
            }
        })
    };

    const handleSubmit = (params) => {
        dispatch({
            type:'TODOLIST_ADD_UPDATE',
            payload: params
        });
    }

    useEffect(()=>{
        dispatch({
            type: 'TODOLIST_GET_UPDATE'
        })
    },[dispatch]);

    return (
        <div>
            <Card
                style={{margin:10}}
                title = "日历"
                hoverable>
                <AddToDo onSubmit={handleSubmit.bind(this)}/>
                <ToDoListCalendar data={props.data}/>
            </Card>
            <Card
                style={{margin:10}}
                title = "待办事项"
                hoverable>
                <BasicToDoList  columns={columns} data={props.data}/>
            </Card>
        </div>
    )
}
export default connect(state=>{return (state.toDoList)})(Index);
