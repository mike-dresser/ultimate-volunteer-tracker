import { useState } from 'react';
import './App.css';
import Header from './Header.jsx';
import Search from './Search.jsx';
import { Outlet } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  let searchedVolunteers = volunteers.filter((volunteer)=>volunteer.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <Header />

      <Search search={search} setSearch={setSearch}/>

      <Outlet />
    </>
  );
}

export default App;
