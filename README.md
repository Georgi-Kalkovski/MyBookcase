

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

`All Books`, `Genres` and `My Books` work almost the same. the differences are in the names...

Using the `Create Book` page, when registered, takes you to a form where you can submit only when filling it with the right information. There is a verification. The book name and the author are string between 2 characters and 200 for the book, 100 for the author. The year is number between 1 and current year. The genre is a select options with 'Unknown' as a default. The cover image must be in format .jpg/.jpeg or .png only. The file must be .pdf format only.<br/>
`Edit` page works as expected. It validates the data. Only the name, author, year and the genre can be changed, so be careful about those files you are uploading...<br/>
`Delete`... it deletes.

The images and pdf files are uploaded to `Google Drive`. There is a check if there is already a file with the same name inside the Google Drive folder where the magic is happening.

After the files are uploaded to Google Drive, the entity is uploaded to `MongoDB`.

I've made cool looking `Footer` with all my platforms (please like, share and subscribe). There's an Arrow Up function as well and it takes you up to the top.

 🔨 Built With
 --
 
- TODO: NEED TO BE FILLED 

## 🖼️ Preview:

- TODO: NEED TO BE FILLED


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

### 🤝🏻  &nbsp;Connect with Me

<a href="https://www.linkedin.com/in/georgi-kalkovski/"><img src="https://img.shields.io/badge/-Georgi%20Kalkovski-0A66C2?style=flat&logo=linkedin&logoColor=white"/></a>
<a href="mailto:g.kalkovski.92@gmail.com"><img src="https://img.shields.io/badge/-g.kalkovski.92@gmail.com-EA4335?style=flat&logo=gmail&logoColor=white"/></a>
<a href="https://www.facebook.com/georgi.kalkovski"><img src="https://img.shields.io/badge/-Georgi%20Kalkovski-1877F2?style=flat&logo=facebook&logoColor=white"/></a>
<a href="https://discord.com/users/242250226545590274"><img src="https://img.shields.io/badge/-Terter%238298-5865F2?style=flat&logo=discord&logoColor=white"/></a>

<!--  <a href="https://www.reddit.com/user/TerterBG"><img src="https://img.shields.io/badge/-Reddit-FF4500?style=flat&logo=reddit&logoColor=white"/></a> -->
