import React from 'react';

import { Input } from 'antd';
import BaseSelect from '../../../component/Select/BaseSelect';

const { Search } = Input;
const Options = [{value:'option1',key:'1'},{value:'option2',key:'2'}]

export default function SearchBar(){
    
    const handleSelect = (value) => {
        console.log(value);
    }

    return(<div style={{marginLeft:20,marginTop:10,display:'flex',alignItems:'center'}}>

        <BaseSelect label='类型：' Options={Options} defaultValue="option1" SelectValue={ handleSelect.bind(this) }/>

        <BaseSelect label='类型：' Options={Options} defaultValue="option1" SelectValue={ handleSelect.bind(this) }/>

        <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
        />
    </div>)
}
