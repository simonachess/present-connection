import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function RecordDetails() {

    const [data, setData] = useState([]);
    let params = useParams();

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${params.id}`;
        axios.get(url).then(res => {
            setData(res.data)
        });
    }, [params.id])



    return (
        <div className="main-container ">
            <div className="page-title">
                <h1>Record details</h1>
            </div>
            <div className="details-container">
                <div className="record-item">
                    <span className="item-key-style">ID: </span>
                    <p>{data.id}</p>
                </div><div className="record-item">
                    <span className="item-key-style">User ID: </span>
                    <p>{data.userId}</p>
                </div>
                <div className="record-item">
                    <span className="item-key-style">Title: </span>
                    <p>{data.title}</p>
                </div>
                <div className="record-item">
                    <span className="item-key-style">Body: </span>
                    <p>{data.body}</p>
                </div>
                <button><Link to="/">Back to List</Link></button>
            </div>
        </div>
    )
}
