import React, { useEffect, useState } from 'react';

import BookRead from './BookRead';

import BookService from '../../../services/book.service';

const BookAll = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        BookService.bookAll()
            .then(res => res.data)
            .then(book => setBooks(book));
    }, []);

    return (
        <div className='container'>
            <h1>All books</h1>
            {books.map(x => <BookRead book={x} />)}
        </div>
    );
};

export default BookAll;