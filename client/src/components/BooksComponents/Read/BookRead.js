import { Card } from 'react-bootstrap';
import './BookRead.css';
import BookEpubViewer from './BookEpubViewer';

const BookRead = ({
    book
}) => {
    
    return (
        <Card onClick={BookEpubViewer(book)}>
            <Card.Img src={book.imageUrl} alt="Card image cap" />
            <Card.Body>
                <Card.Title class="card-title">{book.name}</Card.Title>
                <Card.Text class="card-text">{book.author}</Card.Text>
                <Card.Text class="card-text">{book.year}</Card.Text>
                <Card.Text class="card-text">{book.genre}</Card.Text>
                <Card.Text class="card-text"><small class="text-muted">Last updated 3 mins ago</small></Card.Text>
            </Card.Body>
        </Card>
    );
};

export default BookRead;