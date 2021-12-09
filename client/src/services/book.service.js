import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.REACT_APP_API_URL + '/api/book/';

const bookRead = () => {
  return axios.get(API_URL + 'read');
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

const bookUpdate = (formData) => {
  return axios.patch(API_URL + 'edit/61adb903be23718a6bb58cbc', formData, {
    headers: authHeader(),
  });
};


export default {
  bookRead,
  bookAll,
  bookMyBooks,
  bookCreate,
  bookUpdate,
};