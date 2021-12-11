import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './BookRead.css';
import loader from '../../../loader.svg';
import { Button } from 'semantic-ui-react';

const BookRead = ({ book }) => {
    const navigate = useNavigate();
    const [loaded, setLoaded] = useState(false);
    const userId = JSON.parse(localStorage.getItem('user'))?.id;
    return (

        <Card >
            <div>
                {
                    loaded ? null : (<img className='booksLoader' src={loader} />)
                }
                <Card.Img src={book.imageUrl}
                    alt='Card image cap'
                    style={loaded ? {} : { display: 'none' }}
                    onLoad={() => setLoaded(true)}
                    onClick={() => navigate('/book/read?fileUrl=' + encodeURIComponent(book.fileUrl), { state: { fileUrl: book.fileUrl } })}
                />
            </div>
            <Card.Body>
                <Card.Title
                    className='card-title'
                    onClick={() => navigate('/book/read?fileUrl=' + encodeURIComponent(book.fileUrl), { state: { fileUrl: book.fileUrl } })}
                >
                    {book.name}
                </Card.Title>
                <Card.Text>{book.author}</Card.Text>
                <Card.Text>{book.year}</Card.Text>
                <Card.Text>{book.genre}</Card.Text>
                <div className="card-buttons">
                    {book.userId === userId
                        ? <Link to={`/book/edit/${book._id}`}>
                            <button class="btn-warning">
                                <p>Edit</p>
                            </button>
                        </Link>
                        
                        :  '' /*console.log(book.name + ' doesn\'t belong to the user')*/}
                    {book.userId === userId
                        ? <Link to={`/book/delete/${book._id}`}>
                            <button class="btn-danger">
                                <p>Delete</p>
                            </button>
                        </Link>
                        : '' /*console.log(book.name + ' doesn\'t belong to the user')*/}
                </div>
                {/*<Card.Text className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></Card.Text>*/}
            </Card.Body>
        </Card >
    );
};

export default BookRead;