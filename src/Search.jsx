import React from 'react';

function Search({search, setSearch}) {
  return (
    <input 
    className="search" 
    type="text" 
    placeholder="Search Volunteers" 
    value={search}
    onChange={(e)=>setSearch(e.target.value)} />
  );
}

export default Search;
