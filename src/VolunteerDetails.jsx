import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function VolunteerDetails() {
  const { id } = useParams();
  const [volunteer, setVolunteer] = useState({});
  const { name, pronouns, image, role, email, total } = volunteer;

  useEffect(() => {
    fetch(`http://localhost:3000/users/${id}`)
      .then((res) => res.json())
      .then((volunteerDetails) => {
        renderDetails(volunteerDetails);
      });
  }, []);

  function renderDetails(volunteer) {
    setVolunteer(volunteer);
    pointTotal(volunteer);

    function pointTotal(volunteer) {
      let total = volunteer.pointEntries.reduce((total, entry) => {
        return total + entry.points;
      }, 0);
      setVolunteer({ ...volunteer, total: total });
    }
  }

  return (
    <div className="volunteerDetails">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{pronouns}</p>
      <p>{email}</p>
      <p>{total}pts</p>
    </div>
  );
}

export default VolunteerDetails;
