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
        imageUrl: 'https://drive.google.com/file/d/' + imageId[0] + '/view?usp=sharing',
        fileUrl: 'https://drive.google.com/file/d/' + fileId[0] + '/view?usp=sharing',
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
