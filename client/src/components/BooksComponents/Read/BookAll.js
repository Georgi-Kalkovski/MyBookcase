import React, { useEffect, useState } from 'react';
import uuid from 'node-uuid';
import { Row } from 'react-bootstrap';

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
                    <Row>
                        {books.map(x => <BookRead key={uuid()} book={x} />)}
                    </Row>
        </div>
    );
};

export default BookAll;