import React, { useEffect, useState } from 'react';
import uuid from 'node-uuid';
import { Row } from 'react-bootstrap';
import Select from "react-validation/build/select";

import BookRead from './BookRead';
import BookService from '../../../services/book.service';
import './BookAll.css';

const BookAll = ({ name, genre }) => {
    const [books, setBooks] = useState([], '');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        BookService.bookAll()
            .then(res => res.data)
            .then(book => setBooks(book));
    }, []);

    return (
        <div className='container'>
            <div style={{ textAlign: 'center' }}>{!genre ? <h1>All books</h1> : <h1>{genre}</h1>}</div>


            <div style={{ textAlign: 'center', paddingTop: '5vh' }}>
                <input
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder='Search for a book!'
                    className='search-bar'
                />
                <Row>
                    {books
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .filter(el => {
                            if (el.name.includes(searchTerm)) {
                                return true;
                            } else if (el.author.includes(searchTerm)) {
                                return true;
                            } else if (typeof searchTerm == 'number') {
                                if (el.year.includes(searchTerm)) {
                                    return true;
                                }
                            } else { return false; }
                        })
                        .map(x => <BookRead key={uuid()} book={x} />)
                    }
                </Row>
            </div >
        </div>
    );
};

export default BookAll;