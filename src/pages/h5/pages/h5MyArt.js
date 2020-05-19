import React from 'react';
import MyArt from './MyArt';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const data = [{
    id:111111111,
    imgUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title:"Europe Street beat"
},{
    id:111111112,
    imgUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title:"Europe Street beat"
},{
    id:111111113,
    imgUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title:"Europe Street beat"
},{
    id:111111114,
    imgUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title:"Europe Street beat"
},{
    id:111111115,
    imgUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title:"Europe Street beat"
},{
    id:111111116,
    imgUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title:"Europe Street beat"
},{
    id:111111117,
    imgUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title:"Europe Street beat"
},{
    id:111111118,
    imgUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title:"Europe Street beat"
},{
    id:111111119,
    imgUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title:"Europe Street beat"
}]

export default function H5MyArt(){
    return(
        <>
            <Link to="/home/h5Detail">
                <Button type="primary" style={{margin:5}}>创建</Button>
            </Link>
            <MyArt data={data}/>
        </>
    )
}
