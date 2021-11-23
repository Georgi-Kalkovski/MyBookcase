import React, { useState, useRef } from "react";
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Select from 'react-validation/build/select';
import CheckButton from 'react-validation/build/button';
import BookGenres from "./BookGenres";
import BookService from "../../../services/book.service";

const CreateBook = (props) => {
    const form = useRef();
    const checkBtn = useRef();
    const bookCover = useRef();
    const bookFile = useRef();

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

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            BookService.bookUpload(name, author, year, genre, bookCover, bookFile).then(
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
        }
    };

    return (
        <div className='col-md-12'>
            <div className='card card-container'>
                <Form onSubmit={handleCreate}>
                    <h1>Create Book</h1>

                    <label>Enter Book Name:
                        <Input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Book name..."
                        />
                    </label>

                    <label>Enter Book Author:
                        <Input
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            placeholder="Book author..."
                        />
                    </label>

                    <label>Enter Book Year:
                        <Input
                            type="number"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            placeholder="Book year..."
                        />
                    </label>

                    <label>Enter Book Genre:
                        <Select
                            multiple={false}
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                        >
                            {BookGenres.map(el => <option value={el}>{el}</option>)}
                        </Select>
                    </label>

                    <label>Enter Book Cover Image:
                        <Input
                            ref={bookCover}
                            type="file"
                        />
                    </label>
                    <label>Enter Book File (.epub):
                        <Input
                            ref={bookFile}
                            type="file"
                        />
                    </label>
                    <div className='form-group'>
                        <button className='btn btn-primary btn-block'>Submit</button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default CreateBook;