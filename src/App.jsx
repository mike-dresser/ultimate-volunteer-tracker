import './App.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

      <Outlet />
      <Footer />
    </>
  );
}

export default App;
