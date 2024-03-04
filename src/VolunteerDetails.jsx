import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PointEntriesForm from './PointEntriesForm';

function VolunteerDetails() {
  const { id } = useParams();
  const [volunteer, setVolunteer] = useState({});
  const [pointEntries, setPointEntries] = useState([]);

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
    renderEntries(volunteer.pointEntries);

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
              {entries.map((entry) => {
                return (
                  <tr>
                    <td>{entry.date}</td>
                    <td>{entry.event}</td>
                    <td>{entry.volunteerRole}</td>
                    <td>{entry.points}</td>
                  </tr>
                );
              })}
              <PointEntriesForm />
            </tbody>
          </table>
        </form>
      );
      setPointEntries(result);
    }
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
