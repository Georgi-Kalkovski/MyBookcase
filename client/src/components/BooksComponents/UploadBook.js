//import axios from 'axios';

//import React, { Component } from 'react';

const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

const CLIENT_ID = '1084997358965-56b0s7612k713j870dnl3j2n69p4g6bk.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const REFRESH_TOKEN = '1//04tqhFC6khX6SCgYIARAAGAQSNwF-L9IrMRur2TERX-69-PhIXoF58p5e5ljYHeUAqtNfqCi5_fd_f449vO41JUrEOfk6ft3Radg';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
  version: 'v3',
  auth: oauth2Client
});

const filePath = path.join(__dirname, 'logo192.png');

async function uploadBook() {
  try {
    const response = await drive.files.create({
      requestBody: {
        name: 'logo.png',
        mimeType: 'image/png'
      },
      media: {
        mimeType: 'image/png',
        body: fs.createReadStream(filePath)
      }
    });

    console.log(response.data);

  } catch (error) {
    console.log(error.message);
  }
}

export default uploadBook();

/*
class App extends Component {

  state = {

    // Initially, no file is selected
    selectedFile: null
  };

  // On file select (from the pop up)
  onFileChange = event => {

    // Update the state
    this.setState({ selectedFile: event.target.files[0] });

  };

  // On file upload (click the upload button)
  onFileUpload = () => {

    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);
  };

  // File content to be displayed after
  // file upload is complete
  fileData = () => {

    if (this.state.selectedFile) {

      return (
        <div>
          <h2>File Details:</h2>

          <p>File Name: {this.state.selectedFile.name}</p>


          <p>File Type: {this.state.selectedFile.type}</p>


          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>

        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  render() {

    return (
      <div>
        <h1>
          GeeksforGeeks
        </h1>
        <h3>
          File Upload using React!
        </h3>
        <div>
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>
            Upload!
          </button>
        </div>
        {this.fileData()}
      </div>
    );
  }
}

export default App;

*/