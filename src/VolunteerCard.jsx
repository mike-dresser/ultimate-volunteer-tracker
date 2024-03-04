import React from 'react'

function VolunteerCard({volunteer}) {

    const { name, pronouns, image, role, email, total } = volunteer;

    function pointTotal(volunteer) {
        let total = volunteer.pointEntries.reduce((total, entry) => {
          return total + entry.points;
        }, 0);
        volunteer.total = total
      }

      pointTotal(volunteer)

  return ( 
    <div className="volunteerCard" >
        <div className='imageFrame'><img src={image} alt={name} /></div>
        <h2>{name}</h2>
        <p>
            <em>{role}</em>
        </p>
        <p>{pronouns}</p>
        <p>{email}</p>
        <p className="score">{total} pts</p>
    </div>
  )
}

export default VolunteerCard
