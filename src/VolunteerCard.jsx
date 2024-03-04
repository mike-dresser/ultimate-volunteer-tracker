import React from 'react'
import {useNavigate} from 'react-router-dom'

function VolunteerCard({volunteer}) {

    const { name, pronouns, image, role, email, total } = volunteer;
    const navigate = useNavigate()
    
    function showCard(id) {
      navigate(`/volunteer/${id}`)

      console.log(id)
    }
    
    function pointTotal(volunteer) {
        let total = volunteer.pointEntries.reduce((total, entry) => {
          return total + entry.points;
        }, 0);
        volunteer.total = total
      }

      pointTotal(volunteer)

  return ( 
    <div onClick={()=> showCard(volunteer.id)} className="volunteerCard" >
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
