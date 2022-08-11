import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AuthService from './services/auth.service';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Profile from './components/Profile';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
import Visitors from './components/Visitors';

import BoardUser from './components/Boards/BoardUser';
import BoardModerator from './components/Boards/BoardModerator';
import BoardAdmin from './components/Boards/BoardAdmin';

import BookGenres from './components/BooksComponents/BookGenres';
import BookAll from './components/BooksComponents/Read/BookAll';
import BookMyBooks from './components/BooksComponents/Read/BookMyBooks';
import BookPdfViewer from './components/BooksComponents/Read/BookPdfViewer';
import BookCreate from './components/BooksComponents/Create/BookCreate';
import BookUpdate from './components/BooksComponents/Update/BookUpdate';
import BookDelete from './components/BooksComponents/Delete/BookDelete';

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  let navigate = useNavigate();
  let query = useQuery();
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes('ROLE_MODERATOR'));
      setShowAdminBoard(user.roles.includes('ROLE_ADMIN'));
    }
  }, []);

  const logOut = () => {
    AuthService.logout().navigate('/');
  };

  return (
    <div>
      <nav className='navbar navbar-expand navbar-dark bg-dark ml-auto upper-navbar'>
        <Link to={'/'} className='navbar-brand grow'>
          <spam className="logoName">TheBookcase</spam>
        </Link>
        <div className='navbar-nav mr-auto'>
          <li className='nav-item grow'>
            <Link to={'/home'} className='nav-link'>
              Home
            </Link>
          </li>

          {showModeratorBoard && (
            <li className='nav-item'>
              <Link to={'/mod'} className='nav-link'>
                Moderator Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className='nav-item'>
              <Link to={'/admin'} className='nav-link'>
                Admin Board
              </Link>
            </li>
          )}

          {/*currentUser && (
            <li className='nav-item'>
              <Link to={'/user'} className='nav-link'>
                User
              </Link>
            </li>
          )*/}

          <li className='nav-item grow'>
            <Link to={'/book/all'} className='nav-link'>
              All Books
            </Link>
          </li>

          <NavDropdown
            id='nav-dropdown'
            title='Genres'
            menuVariant='dark'
            className='grow dropdown'
          >
            {BookGenres.map(el => <Link to={`/book/all?genreUrl=${el}`}>{el}</Link>)}
          </NavDropdown>
        </div>

        {currentUser ? (
          <div className='navbar-nav ml-auto'>

            {currentUser && (
              <li className='nav-item grow'>
                <Link to={'/book/create'} className='nav-link'>
                  Create Book
                </Link>
              </li>
            )}
            <li className='nav-item grow'>
              <Link to={'/book/mybooks'} className='nav-link'>
                My Books
              </Link>
            </li>
            {/*<li className='nav-item'>
              <Link to={'/profile'} className='nav-link'>
                Profile
              </Link>
            </li>*/}
            <li className='nav-item'>
              <Link to={'*'} className='nav-link welcome'>
                <span className='welcomeUser'>Welcome </span>{currentUser.username} !
              </Link>
            </li>
            <li className='nav-item grow'>
              <a href='/login' className='nav-link' onClick={logOut}>
                Log Out
              </a>
            </li>
          </div>
        ) : (
          <div className='navbar-nav ml-auto'>
            <li className='nav-item grow'>
              <Link to={'/login'} className='nav-link'>
                Login
              </Link>
            </li>

            <li className='nav-item grow'>
              <Link to={'/register'} className='nav-link'>
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className='container mt-3'>
        <Routes>
          <Route path='*' element={<ErrorPage />} />
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/user' element={<BoardUser />} />
          <Route exact path='/mod' element={<BoardModerator />} />
          <Route exact path='/admin' element={<BoardAdmin />} />
          <Route exact path='/book/create' element={<BookCreate />} />
          <Route exact path='/book/all' element={<BookAll genre={query.get('genreUrl')} />} />
          <Route exact path='/book/mybooks' element={<BookMyBooks />} />
          <Route exact path='/book/read' element={<BookPdfViewer />} />
          <Route exact path='/book/edit/:id' element={<BookUpdate />} />
          <Route exact path='/book/delete/:id' element={<BookDelete />} />
          <Route exact path='/visitors' element={<Visitors />} />
          
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;