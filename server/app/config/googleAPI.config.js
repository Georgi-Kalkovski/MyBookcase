const fs = require('fs');
const path = require('path');
const readline = require('readline');
const {google} = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/drive'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const token = fs.readFileSync(path.resolve(__dirname, 'token.json'), 'utf8');

const credentials = fs.readFileSync(path.resolve(__dirname, 'credentials.json'), 'utf8');
const {installed: { client_secret, client_id, redirect_uris }} = JSON.parse(credentials);
const oauth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
if (token) {
  oauth2Client.setCredentials(JSON.parse(token));
} else {
  getAccessToken(oauth2Client, () => {});
}


/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oauth2Client, callback) {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oauth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oauth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oauth2Client);
    });
  });
}
//console.log(oauth2Client);
module.exports = {
  drive: google.drive({
    version: 'v3',
    auth: oauth2Client
  }),
}