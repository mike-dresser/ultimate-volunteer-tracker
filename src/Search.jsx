import React from 'react';

function Search({ search, setSearch }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search Volunteers"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
