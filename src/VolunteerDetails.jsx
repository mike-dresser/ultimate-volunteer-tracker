import React, { useState, useEffect } from 'react';
import PointEntriesForm from './PointEntriesForm';
import { useOutletContext } from 'react-router-dom';

function VolunteerDetails({ volunteerDetail, showDetails, setShowDetails }) {
  const [loggedIn, setLoggedIn] = useOutletContext();
  const { name, pronouns, image, role, email } = volunteerDetail;
  const [pointEntries, setPointEntries] = useState(
    volunteerDetail.pointEntries
  );

  function renderEntries(entries) {
    return (
      <form>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Event</th>
              <th>Role</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {entries.length ? (
              entries.map((entry, index) => {
                return (
                  <tr key={index}>
                    <td>{entry.date}</td>
                    <td>{entry.event}</td>
                    <td>{entry.volunteerRole}</td>
                    <td>{entry.points}</td>
                  </tr>
                );
              })
            ) : (
              <em>No events added yet!</em>
            )}
            {loggedIn && (
              <PointEntriesForm
                volunteer={volunteerDetail}
                setPointEntries={setPointEntries}
              />
            )}
          </tbody>
        </table>
      </form>
    );
  }

  function closeDetails(e) {
    e.stopPropagation();
    if (e.target.className === 'closeButton' || e.target.className === 'modal')
      setShowDetails(-1);
  }

  return (
    <div
      className={showDetails === -1 ? 'modal hidden' : 'modal'}
      onClick={closeDetails}
    >
      <div className="volunteerDetails">
        <span className="closeButton" onClick={closeDetails}>
          ✖️
        </span>
        <div className="detailsTop">
          <div>
            <h2>{name}</h2>
            <p>
              <em>{role}</em>
            </p>
            <p>{pronouns}</p>
            <p>{email}</p>
          </div>

          <img
            src={image}
            onError={({ currentTarget }) => {
              currentTarget.src =
                '/src/assets/person_FILL0_wght400_GRAD0_opsz24.svg';
            }}
            alt={name}
          />
        </div>
        <p className="points">
          {volunteerDetail.pointEntries.reduce((total, entry) => {
            return total + entry.points;
          }, 0)}{' '}
          pts
        </p>
        <div className="pointEntries">{renderEntries(pointEntries)}</div>
      </div>
    </div>
  );
}

export default VolunteerDetails;
