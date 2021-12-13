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

exports.getBoard = async (req,res) => {
  Book.find({_id: req.params.id}).exec((err, book) => {
    if (err) {
      return handleError(err);
    }

    return res.status(200).json(book)
  })
}

exports.readBoard = async (req, res) => {
  await res.status(200).send("Read Content.");
  return drive.files.list({
    q: `'${folderId}' in parents`
  })
    .then(function (response) {
      // Handle the results here (response.result has the parsed body).
      console.log("Response", response);
    },
      function (err) { console.error("Execute error", err); });
};

exports.createBoard = async (req, res) => {
  const { bookCover, bookFile } = req.files;
  let fileMetadata;

  try {

    const filesList = await drive.files.list({
      q: `'${folderId}' in parents`
    });
    
    if (filesList.data.files.find(x => x.name === bookCover.name)) {
      throw new Error('file exists');
    } else if (bookCover.mimetype !== 'image/png' && bookCover.mimetype !== 'image/jpeg') {
      throw new Error('file wrong mime');
    }
    
    if (filesList.data.files.find(x => x.name === bookFile.name)) {
      throw new Error('file exists');
    } else if (bookFile.mimetype !== 'application/pdf') {
      throw new Error('file wrong mime');
    }

    // IMAGE
    fileMetadata = {
      name: bookCover.name,
      parents: [folderId]
    };
    const { data: {id: imageId} } = await drive.files.create({
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
    })


    // FILE
    fileMetadata = {
      name: bookFile.name,
      parents: [folderId]
    };
    const { data: { id: fileId } } = await drive.files.create({
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
    })

    console.log(imageId)
    console.log(fileId)
    const book = new Book({
      userId: req.body.userId,
      name: req.body.bookName,
      author: req.body.bookAuthor,
      year: req.body.bookYear,
      genre: req.body.bookGenre,
      imageUrl: 'https://drive.google.com/uc?export=view&id=' + imageId,
      fileUrl: `https://drive.google.com/file/d/` + fileId + '/preview',
    });
    await book.save();
    return res.status(200).json(book);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Upload failed");
  }
}

exports.editBoard = async (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  Book.findByIdAndUpdate(req.params.id, req.body, (err, book) => {
    if (err) {
      return handleError(err);
    }

    return res.status(200).json(book)
  })
};

exports.deleteBoard = (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  Book.findByIdAndDelete(req.params.id, req.body, (err, book) => {
    if (err) {
      return handleError(err);
    }

    return res.status(200).json(book)
  })
};
