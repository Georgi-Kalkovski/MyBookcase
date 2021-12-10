import React, { useEffect, useState } from 'react';
import uuid from 'node-uuid';
import { Row } from 'react-bootstrap';

import BookRead from './BookRead';
import BookService from '../../../services/book.service';
import BookSearch from '../BookSearch';

const BookAll = ({ name, genre }) => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        BookService.bookAll()
            .then(res => res.data)
            .then(book => setBooks(book));
    }, []);

    return (
        <div className='container'>
            {!genre ? <h1>All books</h1> : <h1>{genre}</h1>}
            {/*<BookSearch>*/}
                <Row>
                    {books.sort((a, b) => a.name.localeCompare(b.name)).filter(el => genre ? el.genre === genre : true).map(x => <BookRead key={uuid()} book={x} />)}
                </Row>
            {/*</BookSearch>*/}
        </div >
    );
};

export default BookAll;