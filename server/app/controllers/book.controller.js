const { drive } = require('../config/googleAPI.config');
const { Readable } = require('stream');
var folderId = '1xtWpdTyrEstu9ciO4tV5ZHGjajwbf21R';
const db = require("../models");
const Book = db.book;

exports.allBoard = (req, res) => {
  //res.status(200).send("All Books Content.");
  Book.find({}).exec(function (err, books) {
    if (err) {
      return handleError(err);
    }
    return res.status(200).json(books);
  });
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
  const { bookCover, bookFile } = req.files;
  const imageId = [];
  const fileId = [];

  async function waiting() {
    try {

      // IMAGE
      drive.files.list({
        q: `'${folderId}' in parents`
      }).then(result => {
        if (result.data.files.find(x => x.name === bookCover.name)) {
          return new Error('file exists');
        } else if (bookCover.mimetype !== 'image/png' && bookCover.mimetype !== 'image/jpeg') {
          return new Error('file wrong mime');
        }

        var fileMetadata = {
          name: bookCover.name,
          parents: [folderId]
        };
        const response = drive.files.create({
          requestBody: {
            resource: fileMetadata,
            name: bookCover.name,
            mimeType: bookCover.mimetype,
            parents: [folderId]
          },
          media: {
            mimeType: bookCover.mimetype,
            body: Readable.from(bookCover.data),
            parents: [folderId]
          }
        }).then(x => imageId.push(x.data.id));

      }).catch(error => {
        console.log(error);
        return res.status(400).send(error.message);
      });

      // FILE
      drive.files.list({
        q: `'${folderId}' in parents`
      }).then(result => {
        if (result.data.files.find(x => x.name === bookFile.name)) {
          return new Error('file exists');
        } else if (bookFile.mimetype !== 'application/epub+zip') {
          return new Error('file wrong mime');
        }

        var fileMetadata = {
          name: bookFile.name,
          parents: [folderId]
        };
        const response = drive.files.create({
          requestBody: {
            resource: fileMetadata,
            name: bookFile.name,
            mimeType: bookFile.mimetype,
            parents: [folderId]
          },
          media: {
            mimeType: bookFile.mimetype,
            body: Readable.from(bookFile.data),
            parents: [folderId]
          }
        }).then(x => fileId.push(x.data.id));

      }).catch(error => {
        console.log(error);
        return res.status(400).send(error.message);
      });
      const sleep = ms => new Promise(res => setTimeout(res, ms))
      await sleep(10000);
      const book = new Book({
        userId: req.body.userId,
        name: req.body.bookName,
        author: req.body.bookAuthor,
        year: req.body.bookYear,
        genre: req.body.bookGenre,
        imageUrl: 'https://drive.google.com/uc?export=view&id=' + imageId[0],
        fileUrl: `https://epubreader.1bestlink.net/?state=%7B%22ids%22:%5B%22` + fileId[0] + `"%5D,"action":"open","userId":"118121111252291907177","resourceKeys":%7B%7D%7D`,
      });
      console.log(imageId)
      console.log(fileId)
      book.save();
      return;
    } catch (error) {
      console.log(error);
      return res.status(400).send("Upload failed");
    }
  }
  waiting();
}

exports.editBoard = (req, res) => {
  res.status(200).send("Edit Content.");
};

exports.deleteBoard = (req, res) => {
  res.status(200).send("Delete Content.");
};
