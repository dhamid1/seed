import React from 'react';
import './HomePage.css'; // Import a CSS file for styling

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="header">
        <h1>Welcome to SEED!</h1>
        <p>A Place to Nurture Your Love</p>
      </div>
      <div className="content">
        <div className="feature">
          <h2>Journal</h2>
          <p>Journal together and individially to grow with the Seeds you are going to plant.</p>
        </div>
        <div className="feature">
          <h2>Articles </h2>
          <p>Articles are a great way to find information on issues you are facing as a couple. Browse through the collection of free
            resources that will provide you with advice on certain issues.
          </p>
        </div>
        <div className="feature">
          <h2>Schedules</h2>
          <p>Plant and Grow a schedule together that you can both actively edit and custmonize together.</p>
        </div>
      </div>
    </div>
  );
};
// this page will change the home page to whatever we want! if we want to link 
//stuff just let me know and ill look around
export default HomePage;
