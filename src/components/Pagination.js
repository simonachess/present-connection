import React from 'react'

export default function Pagination({ postsPerPage, totalPosts, paginate }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            {pageNumbers.map(number => {
                return (
                    <span className="page-number" key={number} >
                        <button onClick={() => paginate(number)}>{number}</button>
                    </span>
                )
            })}
        </div>
    )
}
