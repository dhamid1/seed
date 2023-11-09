import React from 'react';
import './AboutUsPage.css';
import amongUS from './amongUS.png'; // Import the image

const AboutUsPage = () => {
  

  // Helper function to get a random integer between min (inclusive) and max (exclusive)
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

<<<<<<< Updated upstream
  // Define an array of people with their names and image sources
  const people = [
    { name: 'Person 1', image: amongUS },
    { name: 'Person 2', image: amongUS },
    { name: 'Person 3', image: amongUS },
    { name: 'Person 4', image: amongUS },
    { name: 'Person 5', image: amongUS },
  ];

=======
>>>>>>> Stashed changes
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Us</h1>
<<<<<<< Updated upstream
        <h2 style={{ marginLeft: '-1350px' }}>Mission Statement</h2>
        <p style={{ marginLeft: '-1350px' }}>This is the About Us page. You can replace this with your actual content.</p>
        <p style={{ marginLeft: '-1350px' }}>This is the About Us page. You can replace this with your actual content.</p>
        <p style={{ marginLeft: '-1350px' }}>This is the About Us page. You can replace this with your actual content.</p>
        <p style={{ marginLeft: '-1350px' }}>This is the About Us page. You can replace this with your actual content.</p>
        <h2 style={{ marginTop: '-175px' }}>About the Team</h2>
        <p>This is the About Us page. You can replace this with your actual content.</p>
        <p>This is the About Us page. You can replace this with your actual content.</p>
        <p>This is the About Us page. You can replace this with your actual content.</p>
        <p>This is the About Us page. You can replace this with your actual content.</p>
        <p>This is the About Us page. You can replace this with your actual content.</p>
        <h2 style={{ marginRight: '-1350px', marginTop: '-210px' }}>Services</h2>
        <p style={{ marginRight: '-1350px', marginTop: '30px' }}>Fix your depression!</p>
        <p style={{ marginRight: '-1350px', marginTop: '30px' }}>Fix your depression!</p>
        <p style={{ marginRight: '-1350px', marginTop: '30px' }}>Fix your depression!</p>
        <p style={{ marginRight: '-1350px', marginTop: '30px' }}>Fix your depression!</p>
        <p style={{ marginRight: '-1350px', marginTop: '30px' }}>Fix your depression!</p>

        <div className="name-cards">
          {people.map((person, index) => (
            <div key={`person${index}`} className="person-card">
              <p>{person.name}</p>
              <img src={person.image} alt={person.name} />
            </div>
=======
        <h2 className="mission-statement" style={{ marginLeft: '5px' }}>Mission Statement</h2>
        <p>This is the About Us page. You can replace this with your actual content.</p>
        <h2>About the Team</h2>
        <p>This is the About Us page. You can replace this with your actual content.</p>
        <h2>Our Services</h2>
        <p>Our team consists of 3 Asians, 1 Mexican, and 1 African. We are a very diverse team.</p>
        <div className="seeds">
          {seedPositions.map((position, index) => (
            <div
              key={`seed${index}`}
              className={`seed seed${index + 1}`}
              style={{ backgroundPosition: `${position.x}px ${position.y}px` }}
            />
>>>>>>> Stashed changes
          ))}
       
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
