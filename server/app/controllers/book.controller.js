const { drive } = require('../config/googleAPI.config');
const { Readable } = require('stream');
var folderId = '1xtWpdTyrEstu9ciO4tV5ZHGjajwbf21R';

exports.booksAccess = (req, res) => {
  res.status(200).send("All Books Content.");
};

exports.myBooksAccess = (req, res) => {
  res.status(200).send("My Books Content.");
};

exports.readBoard = (req, res) => {
  res.status(200).send("Read Content.");
};

exports.uploadBoard = (req, res) => {
  const { file } = req.files
  console.log(file.mimetype)
  console.log(file.name)
  try {
    if (file.mimetype == 'application/epub+zip') {
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
    };
  } catch (error) {
    console.log(error.message);

    res.status(400).send("Upload failed");
  }
};

exports.editBoard = (req, res) => {
  res.status(200).send("Edit Content.");
};

exports.deleteBoard = (req, res) => {
  res.status(200).send("Delete Content.");
};
