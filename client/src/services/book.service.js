import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL + "/api/book/";

const bookUpload = (formData) => {
  return axios.post(API_URL + "upload", {
    formData
  });
};

export default {
    bookUpload
  };