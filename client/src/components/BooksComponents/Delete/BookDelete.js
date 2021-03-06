import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AuthService from '../../../services/auth.service';
import BookService from '../../../services/book.service';
import { Card } from 'react-bootstrap';
import Form from 'react-validation/build/form';
import Button from 'react-validation/build/button';
import CheckButton from 'react-validation/build/button';
import ErrorPage from '../../ErrorPage';
import './BookDelete.css';
import dotsSvg from '../../../dots.svg';

const DeleteBook = () => {


    const form = useRef();
    const checkBtn = useRef();
    const navigate = useNavigate('/home');
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [genre, setGenre] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState('');
    const [book, setBook] = useState({});
    let params = useParams();

    useEffect(() => {
        BookService.bookGet(params.id)
            .then(res => res.data)
            .then(book => setBook(book[0]));
    }, []);

    useEffect(() => {
        if (book._id) {
            setName(book.name);
            setAuthor(book.author);
            setYear(book.year);
            setGenre(book.genre);
            setImageUrl(book.imageUrl);
        }
    }, [book]);

    const handleDelete = (e) => {
        e.preventDefault();

        setMessage('');
        setSuccessful(false);

        const userId = JSON.parse(localStorage.getItem('user'))?.id;
        const formData = new FormData(e.target);
        formData.append('userId', userId);

        if (checkBtn.current.context._errors.length === 0) {
            e.target.querySelector('div.form-group.SvgDiv > button.btn.edit-button').style.display = 'none';
            e.target.querySelector('div.form-group.SvgDiv > button.btn-danger.delete-button').style.display = 'none';
            e.target.querySelector('div.form-group.SvgDiv > img').style.display = 'block';

            BookService.bookDelete(params.id, formData).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                    setTimeout(() => { navigate('/book/mybooks'); }, 1000);
                },
                (error) => {

                    e.target.querySelector('div.form-group.SvgDiv > button.btn.edit-button').style.display = 'none';
                    e.target.querySelector('div.form-group.SvgDiv > button.btn-danger.delete-button').style.display = 'none';
                    e.target.querySelector('div.form-group.SvgDiv > img').style.display = 'block';
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setMessage(resMessage);
                    setSuccessful(false);
                }
            );
        };
    };
    const user = AuthService.getCurrentUser();
    if (!user) {
        return (
            <>
                <ErrorPage />
            </>
        );
    } else if (user.id === book.userId) {
        return (
            <div className='col-md-12 centered'>
                <div className='card card-container mediaCard'>
                    <h1>Delete Book</h1>
                    <Form onSubmit={handleDelete} ref={form}>
                            <div class='delete-card'>
                                <Card.Img src={imageUrl}></Card.Img>
                                <h6>Book Name:
                                    <h4>{name}</h4>
                                </h6>

                                <h6>Book Author:
                                    <h5>{author}</h5>
                                </h6>

                                <h6>Book Year:
                                    <h5>{year}</h5>
                                </h6>

                                <h6>Book Genre:
                                    <h5>{genre}</h5>
                                </h6>
                                <div className='form-group SvgDiv centered'>
                                    <img src={dotsSvg} className='createSvg' style={{ display: 'none' }} alt="save" />
                                    <button type="button" onClick={() => navigate(-1)} className='btn edit-button'>Back</button>
                                    <Button className='btn-danger delete-button'>Delete</Button>
                                </div>
                            </div>
                        {message && (
                            <div className='form-group'>
                                <div
                                    className={successful ? 'alert alert-success' : 'alert alert-danger'}
                                    role='alert'
                                >
                                    {message}
                                </div>
                            </div>
                        )}
                        <CheckButton onClick={() => redirectIfTrue(successful, navigate)} style={{ display: 'none' }} ref={checkBtn} />
                    </Form>
                </div>
            </div>
        );
    } else {
        return (
            <>
                <ErrorPage />
            </>
        );
    }
};

export default DeleteBook;



function redirectIfTrue(successful, navigate) {
    if (successful === true) {
        return navigate;
    }
}