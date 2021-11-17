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
    res.status(200).send("Upload Content.");
  };

  exports.editBoard = (req, res) => {
    res.status(200).send("Edit Content.");
  };

  exports.deleteBoard = (req, res) => {
    res.status(200).send("Delete Content.");
  };
