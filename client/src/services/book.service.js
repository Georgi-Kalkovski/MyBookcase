import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.REACT_APP_API_URL + '/api/book/';

const bookRead = () => {
  return axios.get(API_URL + 'read');
};

const bookGet = id => {
  return axios.get(API_URL + 'get/' + id);
};

const bookAll = () => {
  return axios.get(API_URL + 'all');
};

const bookMyBooks = () => {
  return axios.get(API_URL + 'mybooks');
};

const bookCreate = (formData) => {
  return axios.post(API_URL + 'create', formData, {
    headers: authHeader(),
  });
};

const bookUpdate = (id, formData) => {
  return axios.patch(API_URL + 'edit/' + id, formData, {
    headers: authHeader(),
  });
};

const bookDelete = (id) => {
  return axios.delete(API_URL + 'delete/' + id, {
    headers: authHeader(),
  });
};


export default {
  bookRead,
  bookGet,
  bookAll,
  bookMyBooks,
  bookCreate,
  bookUpdate,
  bookDelete,
};