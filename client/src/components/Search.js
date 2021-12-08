import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './BooksComponents/Read/BookRead';
import BookService from '../services/book.service';
  
const App = () => {
  const [books, setBooks] = useState([]);
    useEffect(() => {
        BookService.bookAll()
            .then(res => res.data)
            .then(book => setBooks(book));
    }, []);

  const [myOptions, setMyOptions] = useState([]);
  console.log(books);
  const getDataFromAPI = () => {
    console.log("Options Fetched from API");
  
    fetch('all').then((response) => {
      return response.then(console.log(response));
    }).then((res) => {
      console.log(res.data);
      for (var i = 0; i < res.data.length; i++) {
        myOptions.push(res.data[i].employee_name);
      }
      setMyOptions(myOptions);
    });
  };
  
  return (
    <div style={{marginRight: '50%'}}>
      <Autocomplete
        style={{ width: 500 }}
        freeSolo
        autoComplete
        autoHighlight
        options={myOptions}
        renderInput={(params) => (
          <TextField {...params}
            onChange={getDataFromAPI}
            variant="outlined"
            label="Search Box"
          />
        )}
      />
    </div>
  );
};
  
export default App;