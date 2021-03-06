import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import uuid from 'node-uuid';
import BookService from '../services/book.service';
import BookRead from '../components/BooksComponents/Read/BookRead';

const BookAll = ({ name, genre }) => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        BookService.bookAll()
            .then(res => res.data)
            .then(book => setBooks(book));
    }, []);

    const shuffledBoosk = shuffle(books);

    return (
        <div className='container mediaCard' style={{ textAlign: 'center', paddingTop: '3vh' }}>
            <h5 style={{marginBottom:'-12px'}}>Welcome to </h5><spam className="logoName" style={{fontSize: '55px'}}>TheBookcase</spam>
            <h5 style={{ }}>A place where you can upload your books and share them with your friends.</h5>
            <h6 style={{ paddingTop: '6vh' }}>Looking for something to read? Here are four random books to get you started!</h6>


            <div>
                <Row>
                    {shuffledBoosk
                        .slice(0, 4)
                        .map(x => <BookRead key={uuid()} book={x} />)
                    }
                </Row>
            </div >
        </div>
    );
};

export default BookAll;

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}