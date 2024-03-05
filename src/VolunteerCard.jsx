import React from 'react';
import VolunteerDetails from './VolunteerDetails';

function VolunteerCard({ volunteer, setShowDetails, showDetails }) {
  const { name, pronouns, image, role, email, total } = volunteer;

  function showCard(id) {
    setShowDetails(id);
  }

  function pointTotal(volunteer) {
    let total = volunteer.pointEntries.reduce((total, entry) => {
      return total + entry.points;
    }, 0);
    volunteer.total = total;
  }

  pointTotal(volunteer);

  return (
    <div onClick={() => showCard(volunteer.id)} className="volunteerCard">
      <div className="imageFrame">
        <img src={image} alt={name} />
      </div>
      <h2>{name}</h2>
      <p>
        <em>{role}</em>
      </p>
      <p>{pronouns}</p>
      <p>{email}</p>
      <p className="score">{total} pts</p>
    </div>
  );
}

export default VolunteerCard;
