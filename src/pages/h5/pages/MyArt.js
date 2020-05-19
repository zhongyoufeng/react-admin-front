import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

export default function MyArt(props){
    return (<>
        <div style={{margin: 10, display:"flex", flexWrap:"wrap"}}>
            {props.data.map((item) => {
                return (
                    <Link to={{pathname:"/home/h5Detail", query:{value:item.id}}} style={{margin:10}}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={item.imgUrl} />}
                        >
                            <Meta title={item.title}/>
                        </Card>
                    </Link>
                )
            })}
        </div>
    </>)
}