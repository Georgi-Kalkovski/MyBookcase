const mongoose = require("mongoose");

const Book = mongoose.model(
  "Book",
  new mongoose.Schema({
    id: String,
    userId: String,
    name: String,
    author: String,
    genre: String,
    year: Number,
    imageUrl:String,
    fileUrl:String,
  })
);

module.exports = Book;