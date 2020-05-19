import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

export default function BaseSelect(props){
    const handleChange = (value) => {
        props.SelectValue(value);
    }
    return (
        <>
        <div>
            {props.label}
        </div>
        <div>
        <Select defaultValue={props.defaultValue} style={{ width: 120,marginRight:10}} onChange={handleChange}>
          {props.Options.map((item) => {
              return (<Option value={item.value} key={item.key}>
                {item.value}
              </Option>);
          })}
        </Select>
        </div>
      </>
    );
}