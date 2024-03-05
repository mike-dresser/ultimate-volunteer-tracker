import React, { useState } from 'react';
import PointEntriesForm from './PointEntriesForm';

function VolunteerDetails({ volunteerDetail }) {
  const [volunteer, setVolunteer] = useState(volunteerDetail);
  const [pointEntries, setPointEntries] = useState([]);

  const { name, pronouns, image, role, email, total } = volunteerDetail;

  pointTotal(volunteer);
  renderEntries(volunteer.pointEntries);
  function renderDetails(volunteer) {
    entries.map((entry, index) => {
      return (
        <tr key={index}>
          <td>{entry.date}</td>
          <td>{entry.event}</td>
          <td>{entry.volunteerRole}</td>
          <td>{entry.points}</td>
        </tr>
      );
    });
  }
  function pointTotal(volunteer) {
    let total = volunteer.pointEntries.reduce((total, entry) => {
      return total + entry.points;
    }, 0);
    setVolunteer({ ...volunteer, total: total });
  }

  function renderEntries(entries) {
    const result = (
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
            {renderDetails()}
            <PointEntriesForm
              volunteer={volunteer}
              setPointEntries={setPointEntries}
            />
          </tbody>
        </table>
      </form>
    );
    setPointEntries(result);
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
      <p className="points">{total} pts</p>
      <div className="pointEntries">{pointEntries}</div>
    </div>
  );
}

export default VolunteerDetails;
