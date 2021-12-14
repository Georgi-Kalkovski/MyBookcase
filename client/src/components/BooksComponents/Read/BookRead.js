import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import loader from '../../../loader.svg';
import './BookRead.css';

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
                <div className='card-buttons'>
                    {book.summary !== ""
                        ? <Popup trigger={<button className='btn'>Summary</button>} position='top left'>
                            {close => (
                                <div
                                    style={{
                                        backgroundColor: '#212529',
                                        color: '#AD9B80',
                                        border: '3px solid #AD9B80',
                                        borderRadius: '5px',
                                        padding: '10px',
                                        margin: '0 20% 0 0',

                                    }}>
                                    {book.summary}
                                </div>
                            )}
                        </Popup>
                        : '' /*console.log(book.name + ' doesn\'t belong to the user')*/}

                    <div>
                        {book.userId === userId
                            ? <Link to={`/book/edit/${book._id}`}>
                                <button class='btn-warning card-button'>
                                    Edit
                                </button>
                            </Link>

                            : '' /*console.log(book.name + ' doesn\'t belong to the user')*/}
                        {book.userId === userId
                            ? <Link to={`/book/delete/${book._id}`}>
                                <button class='btn-danger card-button'>
                                    Delete
                                </button>
                            </Link>
                            : '' /*console.log(book.name + ' doesn\'t belong to the user')*/}
                    </div>
                    {/*<Card.Text className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></Card.Text>*/}

                </div>
            </Card.Body>
        </Card >
    );
};

export default BookRead;