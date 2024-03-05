import React, { useState, useEffect } from 'react';
import VolunteerCard from './VolunteerCard';
import Search from './Search';

function VolunteerGrid() {
  const [search, setSearch] = useState('');
  const [volunteers, setVolunteers] = useState([]);

  let searchedVolunteers = volunteers.filter((volunteer) =>
    volunteer.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then((res) => res.json())
      .then((data) => setVolunteers(data));
  }, []);

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <div className="volunteerGrid">
        {searchedVolunteers.map((volunteer) => (
          <VolunteerCard key={volunteer.id} volunteer={volunteer} />
        ))}
      </div>
    </>
  );
}

export default VolunteerGrid;
