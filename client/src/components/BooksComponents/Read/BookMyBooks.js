import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import uuid from 'node-uuid';
import AuthService from '../../../services/auth.service';
import BookService from '../../../services/book.service';
import BookRead from './BookRead';

const BookMyBooks = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        BookService.bookMyBooks()
            .then(res => res.data)
            .then(book => setBooks(book));
    }, []);
    
    const user = AuthService.getCurrentUser();

    return (
        <div style={{ textAlign: 'center' }}>{<h1>My books</h1>}
            <div className='container mediaCard' style={{ textAlign: 'center', paddingTop: '5vh' }}>
                <input
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder='Search by book name, author or year...'
                    className='search-bar'
                />
                <Row>
                    {books
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .filter(el => user ? el.userId === user.id : true)
                        .filter(el => {
                            if (el.name.includes(searchTerm)) {
                                return true;
                            } else if (el.author.includes(searchTerm)) {
                                return true;
                            } else if (el.year.toString().includes(searchTerm)) {
                                return true;
                            } else { return false; }
                        })
                        .map(x => <BookRead key={uuid()} book={x} />)
                    }
                </Row>
            </div>
        </div>
    );
};

export default BookMyBooks;