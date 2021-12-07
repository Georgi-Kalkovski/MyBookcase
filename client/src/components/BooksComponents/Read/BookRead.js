import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Card } from 'react-bootstrap';
import './BookRead.css';
import loader from '../../../loader.svg';

const BookRead = ({
    book
}) => {
    const navigate = useNavigate();
    const [loaded, setLoaded] = useState(false);
    return (

        <Card onClick={() => navigate('/book/read?fileUrl=' + encodeURIComponent(book.fileUrl), { state: { fileUrl: book.fileUrl } })}>
            <div>
                {
                    loaded ? null : (<img className="booksLoader" src={loader} />)
                }
                <Card.Img src={book.imageUrl}
                    alt="Card image cap"
                    style={loaded ? {} : { display: 'none' }}
                    onLoad={() => setLoaded(true)}
                />
            </div>
            <Card.Body>
                <Card.Title className="card-title">{book.name}</Card.Title>
                <Card.Text className="card-text">{book.author}</Card.Text>
                <Card.Text className="card-text">{book.year}</Card.Text>
                <Card.Text className="card-text">{book.genre}</Card.Text>
                {/*<Card.Text className="card-text"><small className="text-muted">Last updated 3 mins ago</small></Card.Text>*/}
            </Card.Body>
        </Card>
    );
};

export default BookRead;