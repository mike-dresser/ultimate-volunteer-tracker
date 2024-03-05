import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header({ loggedIn, setLoggedIn }) {
  const navigate = useNavigate();
  return (
    <header>
      <Link to="volunteers">
        <img src="/src/assets/home icon.webp" alt="home" />
      </Link>
      {loggedIn ? (
        <div>
          <span>Welcome, Syd! </span>
          <br />
          <button onClick={() => navigate('./form')}>Add New Volunteer</button>
          <br />
          <button onClick={() => setLoggedIn(false)}>Log Out</button>
        </div>
      ) : (
        <a href="#" onClick={() => setLoggedIn(true)}>
          Login to Edit Points
        </a>
      )}
    </header>
  );
}

export default Header;
