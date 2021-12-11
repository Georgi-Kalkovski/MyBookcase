import React, { useEffect, useState } from 'react';
import uuid from 'node-uuid';
import { Row } from 'react-bootstrap';

import BookRead from './BookRead';
import BookService from '../../../services/book.service';

const BookMyBooks = ({ userId }) => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    console.log(userId);
    useEffect(() => {
        BookService.bookMyBooks()
            .then(res => res.data)
            .then(book => setBooks(book));
    }, []);

    return (
        <div className='container' style={{ textAlign: 'center', paddingTop: '5vh' }}>
            <input
            
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder='Search for a name!'
            />
            <Row>
                {books
                    .filter(el => userId ? el.userId === userId.id : true)
                    .filter(el => searchTerm ? el.name.includes(searchTerm) : true)
                    .map(x => <BookRead key={uuid()} book={x} />)}
            </Row>
        </div>
    );
};

export default BookMyBooks;