import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL + "/api/book/";

const bookUpload = (formData) => {
    return axios.post(API_URL + "upload", formData, {
        headers: authHeader(),
      });
};

export default {
    bookUpload
  };