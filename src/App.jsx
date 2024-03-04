import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header.jsx';
import Search from './Search.jsx';
import Footer from './Footer.jsx';
import { Outlet } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [volunteers, setVolunteers] = useState([]);

  let searchedVolunteers = volunteers.filter((volunteer)=>volunteer.name.toLowerCase().includes(search.toLowerCase()))

  useEffect(()=>{
    fetch("http://localhost:3000/users")
      .then((res)=> res.json())
      .then((data)=>setVolunteers(data))
  }, [])

  console.log(volunteers)

  return (
    <>
      <Header />

      <Search search={search} setSearch={setSearch}/>
      <Outlet context={[searchedVolunteers, setVolunteers]} />
      <Footer />
    </>
  );
}

export default App;
