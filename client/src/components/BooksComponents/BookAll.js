import React, { useEffect, useState } from 'react';

import BookRead from './BookRead';

import BookService from '../../services/book.service';

const BookAll = () => {
    const [books, setBooks] = useState([]);

    console.log(books);

    useEffect(() => {
        fetch(BookService.bookAll())
            .then(res => res.json())
            .then(book => setBooks(book));
    }, []);

    return (
        <div className='container'>
            <h1>All books</h1>
            { books.map(x => <BookRead game={x} />) }
        </div>
    );
};

export default BookAll;