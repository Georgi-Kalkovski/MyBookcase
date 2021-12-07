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

import BoardUser from './components/Boards/BoardUser';
import BoardModerator from './components/Boards/BoardModerator';
import BoardAdmin from './components/Boards/BoardAdmin';

import BookGenres from './components/BooksComponents/Create/BookGenres';
import BookCreate from './components/BooksComponents/Create/BookCreate';
import BookAll from './components/BooksComponents/Read/BookAll';
import BookPdfViewer from './components/BooksComponents/Read/BookPdfViewer';

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
      <nav className='navbar navbar-expand navbar-dark bg-dark ml-auto'>
        <Link to={'/'} className='navbar-brand'>
          MyBookcase
        </Link>
        <div className='navbar-nav mr-auto'>
          <li className='nav-item'>
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

          {currentUser && (
            <li className='nav-item'>
              <Link to={'/user'} className='nav-link'>
                User
              </Link>
            </li>
          )}

          <li className='nav-item'>
            <Link to={'/book/all'} className='nav-link'>
              All Books
            </Link>
          </li>

          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Genres"
            menuVariant="dark"
          >
            {BookGenres.map(el => <NavDropdown.Item href={`/book/all?genreUrl=${el}`}>{el}</NavDropdown.Item>)}
          </NavDropdown>
        </div>

        {currentUser ? (
          <div className='navbar-nav ml-auto'>

            {currentUser && (
              <li className='nav-item'>
                <Link to={'/book/create'} className='nav-link'>
                  Create Book
                </Link>
              </li>
            )}
            <li className='nav-item'>
              <Link to={'/profile'} className='nav-link'>
                My Bookcase
              </Link>
            </li>
            <li className='nav-item'>
              <p className='nav-link welcomeName'>
                Welcome {currentUser.username} !
              </p>
            </li>
            <li className='nav-item'>
              <a href='/login' className='nav-link' onClick={logOut}>
                Log Out
              </a>
            </li>
          </div>
        ) : (
          <div className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link to={'/login'} className='nav-link'>
                Login
              </Link>
            </li>

            <li className='nav-item'>
              <Link to={'/register'} className='nav-link'>
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className='container mt-3'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route path='/user' element={<BoardUser />} />
          <Route path='/mod' element={<BoardModerator />} />
          <Route path='/admin' element={<BoardAdmin />} />
          <Route path='/book/create' element={<BookCreate />} />
          <Route path='/book/all' element={<BookAll genre={query.get('genreUrl')} />} />
          <Route path='/book/read' element={<BookPdfViewer />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;