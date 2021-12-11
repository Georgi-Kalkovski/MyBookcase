import React, { useEffect, useState } from 'react';
import uuid from 'node-uuid';
import { Row } from 'react-bootstrap';

import BookRead from './BookRead';
import BookService from '../../../services/book.service';

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
            <div style={{ textAlign: 'center'}}>{!genre ? <h1>All books</h1> : <h1>{genre}</h1>}</div>
            

            <div style={{ textAlign: 'center', paddingTop: '5vh' }}>
                <input
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder='Search for a name!'
                />

                <Row>
                    {books
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .filter(el => genre ? el.genre === genre : true)
                        .filter(el => searchTerm ? el.name.includes(searchTerm) : true)
                        .map(x => <BookRead key={uuid()} book={x} />)
                    }
                </Row>
            </div >
        </div>
    );
};

export default BookAll;