import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NewRecord() {

    const [title, setTitle] = useState('');
    const [userId, setUserId] = useState('');
    const [text, setText] = useState('');
    const [isPending, setIsPending] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        console.log(title, text, userId);

        setIsPending(true);

        const newRecor = {
            userId: userId,
            title: title,
            text: text
        };
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newRecor),
        }).then(() => {
            console.log('New record added', newRecor);
            setIsPending(false);
        })
    }

    return (
        <div className="main-container">
            <div className="page-title">
                <h1>New Record</h1>
            </div>
            <div className="new-record-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="user-id">User ID</label>
                    <input type="number"
                        id="user-id"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        placeholder="User id..."
                        required />
                    <label htmlFor="title">Title</label>
                    <input type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title here..."
                        required />
                    <label htmlFor="text">Text field</label>
                    <textarea id="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Add new task here...">
                    </textarea>
                    <span></span>
                    {!isPending && <button type="submit">Add</button>}
                    {isPending && <button type="submit" disabled>Adding...</button>}
                </form>
            </div>
            <button><Link to="/">Back to List</Link></button>
        </div>
    )
}
