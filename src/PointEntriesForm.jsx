import React, { useState } from 'react';

function PointEntriesForm({ volunteer, setPointEntries }) {
  const [newPointEntry, setNewPointEntry] = useState({
    date: '',
    event: '',
    volunteerRole: '',
    points: 0,
  });

  function submitNewPointEntry(e) {
    e.preventDefault();
    const updatedEntries = [...volunteer.pointEntries, newPointEntry];
    fetch(`http://localhost:3000/users/${volunteer.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({ pointEntries: updatedEntries }),
    })
      .then((res) => res.json())
      .then((updatedRecord) => {
        console.log(updatedRecord.pointEntries);
        setPointEntries(updatedRecord.pointEntries);
        setNewPointEntry({
          date: '',
          event: '',
          volunteerRole: '',
          points: 0,
        });
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
          <input
            type="text"
            placeholder="Event"
            value={newPointEntry.event}
            onChange={(e) =>
              setNewPointEntry({ ...newPointEntry, event: e.target.value })
            }
          />
        </td>
        <td>
          <input
            type="text"
            placeholder="Role"
            value={newPointEntry.volunteerRole}
            onChange={(e) =>
              setNewPointEntry({
                ...newPointEntry,
                volunteerRole: e.target.value,
              })
            }
          />
        </td>
        <td>
          <input
            type="text"
            placeholder="Points"
            value={newPointEntry.points}
            onChange={(e) =>
              setNewPointEntry({
                ...newPointEntry,
                points: parseInt(e.target.value),
              })
            }
          />
        </td>
      </tr>

      <tr>
        <td>
          <input type="submit" name="Submit" onClick={submitNewPointEntry} />
        </td>
      </tr>
    </>
  );
}

export default PointEntriesForm;
