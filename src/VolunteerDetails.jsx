import React, { useState, useEffect } from 'react';
import PointEntriesForm from './PointEntriesForm';

function VolunteerDetails({ volunteerDetail }) {
  console.log(volunteerDetail);
  const { name, pronouns, image, role, email } = volunteerDetail;
  const [pointEntries, setPointEntries] = useState(
    volunteerDetail.pointEntries
  );

  // renderEntries(volunteerDetail.pointEntries);

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
            {entries.map((entry, index) => {
              return (
                <tr key={index}>
                  <td>{entry.date}</td>
                  <td>{entry.event}</td>
                  <td>{entry.volunteerRole}</td>
                  <td>{entry.points}</td>
                </tr>
              );
            })}
            <PointEntriesForm
              volunteer={volunteerDetail}
              setPointEntries={setPointEntries}
            />
          </tbody>
        </table>
      </form>
    );
  }

  return (
    <div className="volunteerDetails">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>
        <em>{role}</em>
      </p>
      <p>{pronouns}</p>
      <p>{email}</p>
      <p className="points">
        {volunteerDetail.pointEntries.reduce((total, entry) => {
          return total + entry.points;
        }, 0)}{' '}
        pts
      </p>
      <div className="pointEntries">{renderEntries(pointEntries)}</div>
    </div>
  );
}

export default VolunteerDetails;
