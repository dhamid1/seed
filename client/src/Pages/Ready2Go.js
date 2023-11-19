import React from 'react';
import HBanner from '../components/HBanner' ; // Import a CSS file for styling
import '../Pages/Ready2Go.css'; // Updated path for HomePage.css
import '../Pages/HomePage.css'; // Updated path for HomePage.css

const Ready2Go = () => {
  return (
    <>
    <div className="ready2go">
        <header>
   <HBanner />
    </header>
    <div>
      <div className='featureContainer'>
        <div className='readyContainer'> 
        <h2 className='readyTitle'> Ready 2 Go?</h2>

          <div className='readybtnCenter'>
            <button id = "ready2goButton" className='ready2goBtn' >
             Ready?
            </button>
          </div>

        </div>

      </div>
    </div>

    </div>
    </>
  );
};
// this page will change the home page to whatever we want! if we want to link 
//stuff just let me know and ill look around
export default Ready2Go;
