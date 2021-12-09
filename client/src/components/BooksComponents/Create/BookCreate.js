import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select";
import Button from "react-validation/build/button";
import CheckButton from "react-validation/build/button";
import { useNavigate } from "react-router-dom";
import BookGenres from "../BookGenres";
import BookService from "../../../services/book.service";
import './BookCreate.css';


const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const vbookname = (value) => {
    if (value.length < 2 || value.length > 200) {
        return (
            <div className="alert alert-danger" role="alert">
                The book name must be between 3 and 200 characters.
            </div>
        );
    }
};

const vbookauthor = (value) => {
    if (value.length < 2 || value.length > 100) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

const vbookyear = (value) => {
    if (value < 1 || value >= new Date().getFullYear()) {
        return (
            <div className="alert alert-danger" role="alert">
                Year must be between 1 and {new Date().getFullYear()}.
            </div>
        );
    }
};

const vbookimage = (value) => {
    if (!value.toLowerCase().endsWith('.jpg') && !value.toLowerCase().endsWith('.jpeg') && !value.toLowerCase().endsWith('.png')) {
        return (
            <div className="alert alert-danger" role="alert">
                Your image must be in jpg,jpeg or png format.
            </div>
        );
    }
};

const vbookfile = (value) => {
    if (!value.endsWith('.pdf')) {
        return (
            <div className="alert alert-danger" role="alert">
                Your file must be in pdf format.
            </div>
        );
    }
};

const CreateBook = (props) => {
    const form = useRef();
    const checkBtn = useRef();
    const bookCover = useRef();
    const bookFile = useRef();
    const navigate = useNavigate('/home');

    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState('');

    const handleCreate = (e) => {
        e.preventDefault();

        setMessage('');
        setSuccessful(false);

        const userId = JSON.parse(localStorage.getItem('user'))?.id;
        const formData = new FormData(e.target);
        formData.append('userId', userId);

        if (checkBtn.current.context._errors.length === 0) {
            BookService.bookCreate(formData).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                },
                (error) => {
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

    return (
        <div className='col-md-12 centered'>
            <div className='card card-container'>
                <h1>Create Book</h1>
                <Form onSubmit={handleCreate} ref={form}>
                    {!successful && (
                        <div>
                            <div className="form-group">
                                <label>Enter Book Name: <span className="star">*</span>
                                    <Input
                                        name="bookName"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Book name..."
                                        validations={[required, vbookname]}
                                    />
                                </label>
                            </div>

                            <div className="form-group">
                                <label>Enter Book Author: <span className="star">*</span>
                                    <Input
                                        name="bookAuthor"
                                        type="text"
                                        value={author}
                                        onChange={(e) => setAuthor(e.target.value)}
                                        placeholder="Book author..."
                                        validations={[required, vbookauthor]}
                                    />
                                </label>
                            </div>

                            <div className="form-group">
                                <label>Enter Book Year: <span className="star">*</span>
                                    <Input
                                        name="bookYear"
                                        type="number"
                                        value={year}
                                        onChange={(e) => setYear(e.target.value)}
                                        placeholder="Book year..."
                                        validations={[required, vbookyear]}
                                    />
                                </label>
                            </div>

                            <div className="form-group">
                                <label>Enter Book Genre: <span className="star">*</span>
                                    <Select
                                        name="bookGenre"
                                        multiple={false}
                                        value={genre}
                                        onChange={(e) => setGenre(e.target.value)}
                                    >
                                        {BookGenres.map(el => <option value={el}>{el}</option>)}
                                    </Select>
                                </label>
                            </div>

                            <div className="form-group">
                                <label>Enter Book Cover Image: <span className="star">*</span>
                                    <Input
                                        name="bookCover"
                                        ref={bookCover}
                                        type="file"
                                        validations={[required, vbookimage]}
                                    />
                                </label>
                            </div>

                            <div className="form-group">
                                <label>Enter Book File (.pdf): <span className="star">*</span>
                                    <Input
                                        name="bookFile"
                                        ref={bookFile}
                                        type="file"
                                        validations={[required, vbookfile]}
                                    />
                                </label>
                            </div>
                            <div className='form-group'>
                                <Button className='btn btn-block'>Submit</Button>
                            </div>
                        </div>
                    )}
                    {message && (
                        <div className="form-group">
                            <div
                                className={successful ? "alert alert-success" : "alert alert-danger"}
                                role="alert"
                            >
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton onClick={() => redirectIfTrue(successful, navigate)} style={{ display: "none" }} ref={checkBtn} />
                </Form>
            </div>
        </div>
    );
};

export default CreateBook;



function redirectIfTrue(successful, navigate) {
    if (successful === true) {
        return navigate;
    }
}