import React from 'react';
import './Ready2Go.css'; // Import a CSS file for styling
import './HomePage.css'; // Import a CSS file for styling

const Ready2Go = () => {
  return (
    <div className="ready2go">
        <header>
    Hello World
    </header>
    <div className='r2gBox'>
      <h2 >Ready 2 Go?</h2>
        <button className= "ready2goBtn">
            Ready?
        </button>
    </div>
    </div>
  );
};
// this page will change the home page to whatever we want! if we want to link 
//stuff just let me know and ill look around
export default Ready2Go;
