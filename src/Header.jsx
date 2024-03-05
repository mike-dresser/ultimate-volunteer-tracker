import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/volunteers">
        <img src="/src/assets/home icon.webp" alt="home" />
      </Link>
      <a href="#">Login to Edit</a>
    </header>
  );
}

export default Header;
