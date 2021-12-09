import React, { useEffect, useState } from 'react';
import uuid from 'node-uuid';
import { Row } from 'react-bootstrap';

import BookRead from './BookRead';
import BookService from '../../../services/book.service';

const BookMyBooks = ( { userId } ) => {
    const [books, setBooks] = useState([]);
    console.log(userId);
    useEffect(() => {
        BookService.bookMyBooks()
            .then(res => res.data)
            .then(book => setBooks(book));
    }, []);

    return (
        <div className='container'>
                    <Row>
                        {books.filter(el => userId ? el.userId === userId.id : true).map(x => <BookRead key={uuid()} book={x} />)}
                    </Row>
        </div>
    );
};

export default BookMyBooks;