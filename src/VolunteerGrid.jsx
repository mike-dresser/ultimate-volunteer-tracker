import React from 'react'
import VolunteerCard from './VolunteerCard'
import { useOutletContext } from 'react-router-dom'

function VolunteerGrid() {

    const [searchedVolunteers, setVolunteers] = useOutletContext()

  return (
    <div className="volunteerGrid">
      {searchedVolunteers.map((volunteer)=> <VolunteerCard key={volunteer.id} volunteer={volunteer}/>)}
    </div>
  )
}

export default VolunteerGrid
