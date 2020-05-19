import React from 'react';
import { Calendar, Badge } from 'antd';
import './index.css';

export default function ToDoListCalendar(props){

  const {data} = props;

  const listData = [];

  const toListData = () =>{
     data.forEach((item)=>{
       let fromDate_re = new Date(item.fromDate).getTime();
       let toDate_re = new Date(item.toDate).getTime();
       while(fromDate_re <= toDate_re){
         listData.push({
           date: (new Date(fromDate_re)).getDate(),
           month: (new Date(fromDate_re)).getMonth()+1,
           des: item.des,
           todoState: item.todoState
         });
         fromDate_re = fromDate_re + 24*60*60*1000;
       }
     })
  };

  function getListData(value) {
    const data = [];
    listData.forEach((item)=>{
      if(item.date === value.date() && item.month === value.month()+1){
        data.push(item)
      }
    });
    return data;
  }

  function dateCellRender(value) {
    const toData = getListData(value);
    return (
        <ul className="events">
          {toData.map(item => (
              <li key={item.des}>
                {item.todoState ===  '1' ?
                    <Badge status="success" text={item.des} />
                    : <Badge status="error" text={item.des} />}
              </li>
          ))}
        </ul>
    );
  }
  toListData();
  return(
    <>
      <Calendar dateCellRender={dateCellRender} />
    </>
  )
}

