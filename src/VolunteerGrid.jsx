import React, { useState, useEffect } from 'react';
import VolunteerCard from './VolunteerCard';
import Search from './Search';
import VolunteerDetails from './VolunteerDetails';

function VolunteerGrid() {
  const [search, setSearch] = useState('');
  const [volunteers, setVolunteers] = useState([]);
  const [showDetails, setShowDetails] = useState(-1);

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
          <VolunteerCard
            key={volunteer.id}
            volunteer={volunteer}
            setShowDetails={setShowDetails}
          />
        ))}
      </div>
      {showDetails !== -1 && (
        <VolunteerDetails
          showDetails={showDetails}
          setShowDetails={setShowDetails}
          volunteerDetail={
            volunteers.filter((volunteer) => {
              return volunteer.id === showDetails;
            })[0]
          }
        />
      )}
    </>
  );
}

export default VolunteerGrid;
