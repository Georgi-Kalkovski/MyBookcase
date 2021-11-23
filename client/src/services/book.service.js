import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.REACT_APP_API_URL + '/api/book/';

const bookRead = () => {
  return axios.get(API_URL + 'read');
};

const bookAll = () => {
  return axios.get(API_URL + 'all');
};

const bookCreate = (formData) => {
  return axios.post(API_URL + 'create', formData, {
    headers: authHeader(),
  });
};
const bookUpload = (formData) => {
  return axios.post(API_URL + 'upload', formData, {
    headers: authHeader(),
  });
};


export default {
  bookRead,
  bookAll,
  bookCreate,
  bookUpload
};