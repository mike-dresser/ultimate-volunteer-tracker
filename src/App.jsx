import { useState } from 'react';
import './App.css';
import Header from './Header.jsx';
import Search from './Search.jsx';
import { Outlet } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      {/* <Search /> */}
      <Outlet />
    </>
  );
}

export default App;
