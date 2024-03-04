import React, { useState } from 'react';

function PointEntriesForm() {
  const [newPointEntry, setNewPointEntry] = useState({
    date: '',
    event: '',
    volunteerRole: '',
    points: 0,
  });

  function submitNewPointEntry() {
    const updatedEntries = [...volunteer.pointEntries, newPointEntry];
    fetch(`http://localhost:3000/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({ ...volunteer, pointEntries: updatedEntries }),
    });
  }

  return (
    <>
      <tr>
        <td>
          <input
            type="text"
            placeholder="Date"
            value={newPointEntry.date}
            onChange={(e) =>
              setNewPointEntry({ ...newPointEntry, date: e.target.value })
            }
          />
        </td>
        <td>
          <input type="text" placeholder="Event" value={newPointEntry.event} />
        </td>
        <td>
          <input
            type="text"
            placeholder="Role"
            value={newPointEntry.volunteerRole}
          />
        </td>
        <td>
          <input
            type="text"
            placeholder="Points"
            value={newPointEntry.points}
          />
        </td>
      </tr>

      <tr>
        <td>
          <input type="submit" name="Submit" />
        </td>
      </tr>
    </>
  );
}

export default PointEntriesForm;
