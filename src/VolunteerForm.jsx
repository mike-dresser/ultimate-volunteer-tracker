import React, {useState} from 'react';

function VolunteerForm() {

  const [newVolunteer, setNewVolunteer] = useState({           
  "name" : "",
  "pronouns" : "",
  "image" : "",
  "role" : "",
  "email" : "",
  "pointEntries" : [] },
   )

   
   function handleSubmit(e) {
     e.preventDefault()
     
     console.log(newVolunteer)

     fetch("http://localhost:3000/users", {
     method: "POST",
     headers: {
      "Content-Type" : "Application/JSON"
      },
      body: JSON.stringify(newVolunteer),
     })
    //     .then((res)=>res.json())
    //     .then((data)=>setNewVolunteer([...newVolunteer, data]));

    
   }
     

  return (
    <div>
      <h1>New Volunteer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text" 
          name="name" 
          placeholder="Volunteer Name" 
          value={newVolunteer.name} 
          onChange={(e)=>setNewVolunteer({...newVolunteer, name: e.target.value})}>
        </input>
        <input
          type="text" 
          name="pronouns" 
          placeholder="(Pronouns)" 
          value={newVolunteer.pronouns} 
          onChange={(e)=>setNewVolunteer({...newVolunteer, pronouns: e.target.value})}>
        </input>
        <input
          type="text" 
          name="role" 
          placeholder="Role" 
          value={newVolunteer.role} 
          onChange={(e)=>setNewVolunteer({...newVolunteer, role: e.target.value})}>
        </input>
        <input
          type="text" 
          name="email" 
          placeholder="Email" 
          value={newVolunteer.email} 
          onChange={(e)=>setNewVolunteer({...newVolunteer, email: e.target.value})}>
        </input>
        <input
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={newVolunteer.image} 
          onChange={(e)=>setNewVolunteer({...newVolunteer, image: e.target.value})}>
        </input>
        <button type="submit">Add Volunteer</button>
      </form>
    </div>
  );
}

export default VolunteerForm;
