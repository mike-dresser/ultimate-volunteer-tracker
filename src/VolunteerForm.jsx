import React, { useState } from 'react';

function VolunteerForm() {
  const [newVolunteer, setNewVolunteer] = useState({
    name: '',
    pronouns: '',
    image: '',
    role: '',
    email: '',
    pointEntries: [],
  });

  function handleSubmit(e) {
    e.preventDefault();

    console.log(newVolunteer);

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(newVolunteer),
    });
    //     .then((res)=>res.json())
    //     .then((data)=>setNewVolunteer([...newVolunteer, data]));
  }

  return (
    <div className="newVolunteer">
      <h1>New Volunteer</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name </label>
        <input
          type="text"
          name="name"
          placeholder="Johnny Disc"
          value={newVolunteer.name}
          onChange={(e) =>
            setNewVolunteer({ ...newVolunteer, name: e.target.value })
          }
        ></input>

        <label htmlFor="pronouns">Pronouns </label>
        <input
          type="text"
          name="pronouns"
          placeholder="(They/Them)"
          value={newVolunteer.pronouns}
          onChange={(e) =>
            setNewVolunteer({ ...newVolunteer, pronouns: e.target.value })
          }
        ></input>

        <label htmlFor="role">Org Role </label>
        <input
          type="text"
          name="role"
          placeholder="General"
          value={newVolunteer.role}
          onChange={(e) =>
            setNewVolunteer({ ...newVolunteer, role: e.target.value })
          }
        ></input>

        <label htmlFor="email">Email </label>
        <input
          type="text"
          name="email"
          placeholder="johnny.disc@discny.org"
          value={newVolunteer.email}
          onChange={(e) =>
            setNewVolunteer({ ...newVolunteer, email: e.target.value })
          }
        ></input>

        <label htmlFor="image">Image URL </label>
        <input
          type="text"
          name="image"
          placeholder="http:// ... .jpg"
          value={newVolunteer.image}
          onChange={(e) =>
            setNewVolunteer({ ...newVolunteer, image: e.target.value })
          }
        ></input>

        <button type="submit">Add Volunteer</button>
      </form>
    </div>
  );
}

export default VolunteerForm;
