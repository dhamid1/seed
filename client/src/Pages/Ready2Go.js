import React from 'react';
import './Ready2Go.css'; // Import a CSS file for styling

// function oneReady(){
//     console.log("hello");
// };

const Ready2Go = () => {
  return (
    <div className="ready2go">
        <header>
    Hello World
    </header>
    <div>
        <button id = "ready" >
            Ready?
        </button>
    </div>
    </div>
  );
};
//document.getElementById("ready").addEventListener("click", oneReady)
// this page will change the home page to whatever we want! if we want to link 
//stuff just let me know and ill look around
export default Ready2Go;
