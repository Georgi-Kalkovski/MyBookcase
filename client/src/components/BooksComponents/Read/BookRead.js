import { Card } from 'react-bootstrap';
import './BookRead.css';
import { useNavigate } from "react-router-dom";

const BookRead = ({
    book
}) => {
    const navigate = useNavigate();
    
    return (
        <Card onClick={() => navigate('/book/read?fileUrl='+encodeURIComponent(book.fileUrl))}>
            <Card.Img src={book.imageUrl} alt="Card image cap" />
            <Card.Body>
                <Card.Title className="card-title">{book.name}</Card.Title>
                <Card.Text className="card-text">{book.author}</Card.Text>
                <Card.Text className="card-text">{book.year}</Card.Text>
                <Card.Text className="card-text">{book.genre}</Card.Text>
                <Card.Text className="card-text"><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
            </Card.Body>
        </Card>
    );
};

export default BookRead;