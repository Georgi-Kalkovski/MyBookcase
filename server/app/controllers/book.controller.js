const { drive } = require('../config/googleAPI.config');
const { Readable } = require('stream');
var folderId = '1xtWpdTyrEstu9ciO4tV5ZHGjajwbf21R';
const db = require("../models");
const Book = db.book;

exports.booksAccess = (req, res) => {
  //res.status(200).send("All Books Content.");
  return drive.files.list({
    q: `'${folderId}' in parents`
  })
    .then(function (response) {
      // Handle the results here (response.result has the parsed body).
      const array = response.data.files;
      console.log(array);
      res.send(array);
    },
      function (err) { console.error("Execute error", err); });
};

exports.myBooksAccess = (req, res) => {
  res.status(200).send("My Books Content.");
};

exports.readBoard = (req, res) => {
  //res.status(200).send("Read Content.");
  return drive.files.list({
    q: `'${folderId}' in parents`
  })
    .then(function (response) {
      // Handle the results here (response.result has the parsed body).
      console.log("Response", response);
    },
      function (err) { console.error("Execute error", err); });
};

exports.createBoard = (req, res) => {
  const book = new Book({
    userId: req.body.userId,
    name: req.body.bookName,
    author: req.body.bookAuthor,
    year: req.body.bookYear,
    genre: req.body.bookGenre,
  });
  book.save();
  console.log(req.body)
  console.log(req.files)
  console.log(book)
  res.send('asd')
  return;
}

exports.uploadBoard = (req, res) => {
  const { file } = req.files
  // console.log(file.mimetype)
  // console.log(file.name)
  try {

    drive.files.list({
      q: `'${folderId}' in parents`
    }).then(result => {
      if (result.data.files.find(x => x.name === file.name)) {
        throw new Error('file exists');
      } else if (file.mimetype !== 'application/epub+zip') {
        throw new Error('file wrong mime');
      }

      var fileMetadata = {
        name: file.name,
        parents: [folderId]
      };
      const response = drive.files.create({
        requestBody: {
          resource: fileMetadata,
          name: file.name,
          mimeType: file.mimetype,
          parents: [folderId]
        },
        media: {
          mimeType: file.mimetype,
          body: Readable.from(file.data),
          parents: [folderId]
        }
      });

      res.status(200).send("Uploaded successfuly");
    }).catch(error => {
      console.log(error);
      res.status(400).send(error.message);
    });

  } catch (error) {
    console.log(error);
    res.status(400).send("Upload failed");
  }
};

exports.editBoard = (req, res) => {
  res.status(200).send("Edit Content.");
};

exports.deleteBoard = (req, res) => {
  res.status(200).send("Delete Content.");
};
