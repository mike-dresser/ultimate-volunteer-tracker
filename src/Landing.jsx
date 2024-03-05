import React from 'react';
import LogIn from './LogIn';



function Landing() {
  return(
    <>
    {/* <div className='video'>
      <video src={video} autoPlay loop muted />
    </div> */}
      <img id='html-background-image' alt="Ultimate Community" src='https://d36m266ykvepgv.cloudfront.net/uploads/media/zFWfHuiqin/s-1170-878/img-2326.jpg'/>
      <div className='landingText'>
        <h1>DiscNY Volunteer Tracker</h1>
        <p>Use your volunteer hours to pay for play!</p>
        <LogIn />
      </div>
    </>
  );
}

export default Landing;
