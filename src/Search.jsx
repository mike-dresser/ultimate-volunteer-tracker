import React from 'react';
import {useNavigate} from 'react-router-dom'

function Search({search, setSearch}) {

  const navigate = useNavigate()
    

  return (
    <div className="search">
      <input 
      type="text" 
      placeholder="Search Volunteers" 
      value={search}
      onChange={(e)=>setSearch(e.target.value)} />
      <button onClick={()=>navigate("./form")}>Add New Volunteer</button>
    </div>
  );
}

export default Search;
