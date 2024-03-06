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
        <img
          src={image}
          onError={({ currentTarget }) => {
            currentTarget.src =
              '/src/assets/person_FILL0_wght400_GRAD0_opsz24.svg';
          }}
          alt={name}
        />
      </div>
      <div className="details">
        <h2>{name}</h2>
        <em>{role}</em>
        <br />
        {pronouns} <br />
        {email} <br />
        <p className="score">{total} pts</p>
      </div>
    </div>
  );
}

export default VolunteerCard;
