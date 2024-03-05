import React from 'react';
import { Link } from 'react-router-dom';
import LogIn from './LogIn';

function Header({ loggedIn, setLoggedIn }) {
  return (
    <header>
      <Link to="volunteers">
        <img src="/src/assets/home icon.webp" alt="home" />
      </Link>
      {loggedIn ? (
        'Welcome, Syd!'
      ) : (
        <a href="#" onClick={() => setLoggedIn(true)}>
          Login to Edit Points
        </a>
      )}
    </header>
  );
}

export default Header;
