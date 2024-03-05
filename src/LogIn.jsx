import React from 'react'

function LogIn() {
  return (
    <div>
      <form className='logIn'>
        <input
            type="text" 
            name="User Name" 
            placeholder="User" >
        </input>
        <input
            type="text" 
            name="Password" 
            placeholder="Password" >
        </input>
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default LogIn
