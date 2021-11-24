import React, { useState, useRef } from "react";
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

        const userId = JSON.parse(localStorage.getItem('user'))?.id;
        const formData = new FormData(form.current);
        formData.append('userId', userId);

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

    return (
        <div className='col-md-12'>
            <div className='card card-container'>
                <form onSubmit={handleCreate} ref={form}>
                    <h1>Create Book</h1>

                    <label>Enter Book Name:
                        <input
                            name="bookName"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Book name..."
                        />
                    </label>

                    <label>Enter Book Author:
                        <input
                            name="bookAuthor"
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            placeholder="Book author..."
                        />
                    </label>

                    <label>Enter Book Year:
                        <input
                            name="bookYear"
                            type="number"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            placeholder="Book year..."
                        />
                    </label>

                    <label>Enter Book Genre:
                        <select
                            name="bookGenre"
                            multiple={false}
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                        >
                            {BookGenres.map(el => <option value={el}>{el}</option>)}
                        </select>
                    </label>

                    <label>Enter Book Cover Image:
                        <input
                            name="bookCover"
                            ref={bookCover}
                            type="file"
                        />
                    </label>
                    <label>Enter Book File (.epub):
                        <input
                            name="bookFile"
                            ref={bookFile}
                            type="file"
                        />
                    </label>
                    <div className='form-group'>
                        <button className='btn btn-primary btn-block'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateBook;