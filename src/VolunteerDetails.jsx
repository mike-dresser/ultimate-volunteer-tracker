import React, { useState } from 'react';
import PointEntriesForm from './PointEntriesForm';
import { useOutletContext } from 'react-router-dom';

function VolunteerDetails({ volunteerDetail, showDetails, setShowDetails }) {
  const [loggedIn, setLoggedIn] = useOutletContext();
  const { id, name, pronouns, image, role, email } = volunteerDetail;
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
                    <td>
                      <div className="pointsField">
                        {entry.points}
                        {loggedIn && (
                          <span onClick={() => deletePointEntry(index)}>
                            ✖️
                          </span>
                        )}{' '}
                      </div>
                    </td>
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

  function deleteVolunteer() {
    if (
      confirm('Are you sure you want to permanently delete this volunteer?')
    ) {
      fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE',
      });
      window.location.href = '/volunteers';
    }
  }

  function deletePointEntry(deleteIndex) {
    if (confirm('Are you sure you want to permanently delete this entry?')) {
      fetch(`http://localhost:3000/users/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'Application/JSON',
        },
        body: JSON.stringify({
          pointEntries: volunteerDetail.pointEntries.filter((entry) => {
            return volunteerDetail.pointEntries.indexOf(entry) !== deleteIndex;
          }),
        }),
      })
        .then((res) => res.json())
        .then((updated) => setPointEntries(updated.pointEntries));
    }
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
            <button onClick={deleteVolunteer}>Delete Volunteer</button>
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
