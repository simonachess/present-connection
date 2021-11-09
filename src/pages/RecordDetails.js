import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function RecordDetails() {

    const [data, setData] = useState([]);
    let params = useParams();


    const url = `https://jsonplaceholder.typicode.com/posts/${params.id}`;
    axios.get(url).then(res => {
        setData(res.data)
    });


    return (
        <div className="main-container ">
            <div className="details-container">
                <h1>Record details</h1>
                <div className="details-subcontainer">
                    <div className="window-img"></div>
                    <div className="flower-img"></div>
                    <div className="cat-img"></div>
                    <div className="record-item"><span className="item-key-style">ID: </span><p>{data.id}</p></div>
                    <div className="record-item"><span className="item-key-style">User ID: </span><p>{data.userId}</p></div>
                    <div className="record-item"><span className="item-key-style">Title: </span><p>{data.title}</p></div>
                    <div className="record-item"><span className="item-key-style">Body: </span><p>{data.body}</p></div>
                </div>
                <button className="back-button"><Link to="/">Back to List</Link></button>
            </div>
        </div>
    )
}
