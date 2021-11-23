import React, { useState, useRef } from "react";
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Select from 'react-validation/build/select';
import CheckButton from 'react-validation/build/button';
import BookGenres from "./BookGenres";

const CreateBook = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");

    return (
        <div className='col-md-12'>
            <div className='card card-container'>
                <Form>
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
                        <Select multiple={false}>
                            {BookGenres.map(el => <option value={el}>{el}</option>)}
                        </Select>
                    </label>

                    <label>Enter Book Cover Image:
                        <Input
                            type="file"
                        />
                    </label>
                    <label>Enter Book File (.epub):
                        <Input
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