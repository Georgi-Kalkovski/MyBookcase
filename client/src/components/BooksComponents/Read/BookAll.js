import React, { useEffect, useState } from 'react';

import BookRead from './BookRead';
import { Row, Col } from 'react-bootstrap';
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
                        {books.map(x => <BookRead book={x} />)}
                    </Row>
        </div>
    );
};

export default BookAll;