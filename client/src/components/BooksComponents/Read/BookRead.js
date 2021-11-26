import './BookRead.css';
import {Card} from 'react-bootstrap';
const BookRead = ({
    book
}) => {
    return (
        <Card>
            <img class="card-img-top img-thumbnail" src={book.imageUrl} alt="Card image cap" />
            <Card.Body>
                <h5 class="card-title">{book.name}</h5>
                <p class="card-text">{book.author}</p>
                <p class="card-text">{book.year}</p>
                <p class="card-text">{book.genre}</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </Card.Body>
        </Card>
    );
};

export default BookRead;