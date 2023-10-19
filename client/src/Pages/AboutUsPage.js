import React from 'react';
import './AboutUsPage.css';

const AboutUsPage = () => {
  // Generate random positions for each seed
  const seedPositions = [
    { x: getRandomInt(100, 800), y: getRandomInt(100, 600) },
    { x: getRandomInt(100, 800), y: getRandomInt(100, 600) },
    { x: getRandomInt(100, 800), y: getRandomInt(100, 600) },
  ];

  // Helper function to get a random integer between min (inclusive) and max (exclusive)
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>This is the About Us page. You can replace this with your actual content.</p>
        <div className="seeds">
          {seedPositions.map((position, index) => (
            <div
              key={`seed${index}`}
              className={`seed seed${index + 1}`}
              style={{ backgroundPosition: `${position.x}px ${position.y}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
