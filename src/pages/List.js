import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from './../components/Pagination';
import { quotesData } from "../data/ChessQuotes";
import './../App.css'

export default function List() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const url = 'https://jsonplaceholder.typicode.com/posts';
            const res = await axios.get(url);
            setData(res.data);
            setLoading(false);
        }
        fetchPosts();
    }, [])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (loading) {
        return <p>Loading...</p>
    }

    const randomQuote = quotesData[Math.floor(Math.random() * quotesData.length)]

    return (
        <div className="main-container">
            <div className="upper-section">
                <h1>List page</h1>
                <div className="link-new-record">
                    <Link to="new-record"><button>New Record</button></Link>
                </div>
            </div>
            <div className="posts-container">
                <div className="lamp-img"></div>
                <div className="cactus-img"></div>
                <div className="note-img">
                </div>
                <div className="note-text">
                    <p>{randomQuote.quote}</p>
                    <small>-- {randomQuote.author} --</small>
                </div>
                {currentPosts.map((item, index) => {
                    return (
                        <div key={index} className="post-item">
                            <span className="item-id">{item.id}</span>
                            <Link to={{ pathname: `record-details/${index + 1}` }} >
                                {item.title}
                            </Link>
                        </div>
                    )
                })}
            </div>
            <div className="pages-container">
                <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate} />
            </div>
            <div className="footer">
                <a href="https://www.linkedin.com/in/simona-limontaite-33781513/"><img src="https://img.icons8.com/dusk/64/000000/linkedin--v1.png" alt="linked in profile" /></a>
                <a href="https://github.com/simonachess"><img src="https://img.icons8.com/dusk/64/000000/github.png" alt="github profile" /></a>
                <a href="https://icons8.com/"><img src="https://img.icons8.com/dusk/64/000000/ok.png" alt="icons by icons8" title="Icons by Icons8" />
                </a>
            </div>
        </div>
    )
}
