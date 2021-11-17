const {drive} = require('../config/googleAPI.config');
const { Readable } = require('stream');

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
    const {file} = req.files
    try {
      const response = drive.files.create({
        requestBody: {
          name: file.name,
          mimeType: file.mimetype
        },
        media: {
          mimeType: file.mimetype,
          body: Readable.from(file.data)
        }
      });
  
      res.status(200).send("Uploaded successfuly");
  
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
