import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import uuid from 'node-uuid';
import BookService from '../../../services/book.service';
import BookRead from './BookRead';
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
        <div className='container mediaCard'>
            <div style={{ textAlign: 'center' }}>{!genre ? <h1>All books</h1> : <h1>{genre}</h1>}</div>


            <div style={{ textAlign: 'center', paddingTop: '5vh' }}>
                <input
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder='Search by book name, author or year...'
                    className='search-bar'
                />
                <Row>
                    {books
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .filter(el => {
                            if (el.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return true;
                            } else if (el.author.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return true;
                            } else if (el.year.toString().includes(searchTerm)) {
                                return true;
                            } else { return false; }
                        })
                        .filter(el => genre ? el.genre === genre : true)
                        .map(x => <BookRead key={uuid()} book={x} />)
                    }
                </Row>
            </div >
        </div>
    );
};

export default BookAll;