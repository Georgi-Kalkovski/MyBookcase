

# 📚 MyBookcase
A place where you can upload your books and share them with your friends.<br/>
The project allows you to Read books online without the need of downloading them.

Accessing books can be done by the pages `Home`, `All Books`, choosing a genre from the `Genres` dropdown menu, and if you register you'll be able to access your created books from the `My Books` page.

The project have `Register`/`Login` functionality.<br/>

Unregistered Visitors can access the pages: `Home`, `All Books`, `Genres`, `Read`.

If the Visitor registers, he'll become User. The User can access the pages: `Home`, `All Books`, `Genres`, `Read`, `Create Book`, `My Books`, `Edit`, `Delete` (`Edit` and `Delete` only if the User is the creator of the book).

The project works mainly with Cards made to be like book covers. On each book Card you'll see the book's cover image, the name of the book, the author of it, the year and the genre.

You can also access a `Search` functionality via the pages `All Books`, `Genres`, `My Books`. You can search by the name, author or the year of the book.

`Home` page gives you four random books for flavor.

`All Books`, `Genres` and `My Books` work almost the same. the differences are in the names... If you are the creator of a book, you will see the `Edit` and `Delete` buttons on the card. Both Visitors and Users can see the `Summary` button which activates a summary popup.

Using the `Create Book` page, when registered, takes you to a form where you can submit only when filling it with the right information. There is a verification. The book name and the author are string between 2 characters and 200 for the book, 100 for the author. The year is number between 1 and current year. The genre is a select options with 'Unknown' as a default. The cover image must be in format .jpg/.jpeg or .png only. The file must be .pdf format only.<br/>
`Edit` page works as expected. It validates the data. Only the name, author, year and the genre can be changed, so be careful about those files you are uploading...<br/>
`Delete`... it deletes.

The images and pdf files are uploaded to `Google Drive`. There is a check if there is already a file with the same name inside the Google Drive folder where the magic is happening.

After the files are uploaded to Google Drive, the entity is uploaded to `MongoDB`.

Trying to access a wrong page, the site takes you to the `Error Page`.

I've made cool looking `Footer` with all my platforms (please like, share and subscribe). There's an Arrow Up function as well and it takes you up to the top.

## 🖼️ Preview:

### Home Page

![Home](https://i.imgur.com/zx6WBrF.png)

### All/My/Genre Books Page

![All](https://i.imgur.com/7riGTqs.png)

### Error Page

![Error404](https://i.imgur.com/eOi0vWG.png)

### Search option

![Search](https://i.imgur.com/ocTmcnQ.png)

### Summary Popup

![Summary](https://i.imgur.com/Ca67OeF.png)

### Book Viewer vs Book Owner

![VvO](https://i.imgur.com/5IM7BbG.png)

### Create Book Page

![Create](https://i.imgur.com/7Am4bbW.png)

### Edit Book Page

![Edit](https://i.imgur.com/gae5mfl.png)

### Delete Book Page

![Delete](https://i.imgur.com/Ne4qLvj.png)

### Footer platforms links

![Platforms](https://i.imgur.com/Wp08RMU.png)

### Unactive/Active(Hovered) ArrowUp function

![UnactiveArrowUp](https://i.imgur.com/dPx2N7n.png)
![ActiveArrowUp](https://i.imgur.com/CqFqzfv.png)

 🔨 Built With
 --
 
- IDE:
  - [Visual Studio Code](https://code.visualstudio.com/ "Visual Studio Code")
- Front-End Framework:
  - [ReactJS library](https://reactjs.org/ "ReactJS library")
- Database:
  - [MongoDB](https://www.mongodb.com/ "MongoDB")
- Web Servers:
  - [Heroku](https://id.heroku.com/ "Heroku")
  - [Heroku App Service](https://thebookcase.herokuapp.com/ "Heroku App Service")
  - [Heroku Api Database](https://thebookcase-api.herokuapp.com/ "Heroku Api Database")
- Back-End:
  - [Node.js](https://nodejs.org/en/ "Node.js")
- Front-End:
  - [ReactJS library](https://reactjs.org/ "ReactJS library")
  - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript "JavaScript")
- Markup Languages:
  - [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML "HTML5")
  - [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS "CSS3")|
- NPM packages (front-end):
  - [react](https://www.npmjs.com/package/react "react")
  - [react-router-dom](https://www.npmjs.com/package/react-bootstrap "react-router-dom")
  - [react-validation](https://www.npmjs.com/package/react-validation "react-validation")
  - [react-bootstrap](https://www.npmjs.com/package/react-bootstrap "react-bootstrap")
  - [node-uuid](https://www.npmjs.com/package/node-uuid "node-uuid")
  - [reactjs-popup](https://www.npmjs.com/package/reactjs-popup "reactjs-popup")
  - [axios](https://www.npmjs.com/package/axios "axios")
- NPM packages (back-end)
  - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken "jsonwebtoken")
  - [bcryptjs](https://www.npmjs.com/package/bcryptjs "bcryptjs")
  - [mongoose](https://www.npmjs.com/package/mongoose "mongoose")
  - [express](https://www.npmjs.com/package/express "express")
  - [body-parser](https://www.npmjs.com/package/body-parser "body-parser")
  - [cors](https://www.npmjs.com/package/cors "cors")
  - [express-fileupload](https://www.npmjs.com/package/express-fileupload "express-fileupload")
  - [googleapis](https://www.npmjs.com/package/googleapis "googleapis")
- Node.js modules (back-end)
  - fs  
  - path
  - readline
  - stream
- Additionals:
  - [Google Drive](https://www.google.com/drive/ "Google Drive")
  - [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG "SVG")
  - [SimpleIcons](https://simpleicons.org/ "SimpleIcons")
  - [Loading.io](https://loading.io/ "Loading.io")
  - [Basic Skeleton by Bezkoder](https://www.bezkoder.com/react-node-mongodb-auth/ "Basic Skeleton by Bezkoder")
  - [Error Page 404 by JuliaSS](https://codepen.io/JuliaSS/pen/ZMaXQV "Error Page 404")
  - [Shields.io](https://shields.io/ "Shields.io")
  - [Imgur.com](https://imgur.com/ "Imgur.com")
- Testing
  - TODO: No tests yet!

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

### 🤝🏻  &nbsp;Connect with Me

<a href="https://www.linkedin.com/in/georgi-kalkovski/"><img src="https://img.shields.io/badge/-Georgi%20Kalkovski-0A66C2?style=flat&logo=linkedin&logoColor=white"/></a>
<a href="mailto:g.kalkovski.92@gmail.com"><img src="https://img.shields.io/badge/-g.kalkovski.92@gmail.com-EA4335?style=flat&logo=gmail&logoColor=white"/></a>
<a href="https://www.facebook.com/georgi.kalkovski"><img src="https://img.shields.io/badge/-Georgi%20Kalkovski-1877F2?style=flat&logo=facebook&logoColor=white"/></a>
<a href="https://discord.com/users/242250226545590274"><img src="https://img.shields.io/badge/-Terter%238298-5865F2?style=flat&logo=discord&logoColor=white"/></a>

<!--  <a href="https://www.reddit.com/user/TerterBG"><img src="https://img.shields.io/badge/-Reddit-FF4500?style=flat&logo=reddit&logoColor=white"/></a> -->
