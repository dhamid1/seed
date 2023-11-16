import React from 'react';
import './AboutUsPage.css';
import amongUS from './amongUS.png'; // Import the image
import Dawood from './Dawood.jpg'; // Import the image
import Roshian from './Roshian.jpg'; // Import the image
import Jose from './Jose.jpg'; // Import the image
import Newton from './Newton.jpg'; //Import the image
import Novoa from './Novoa.jpg'; //Import the image

const AboutUsPage = () => {
  

  // Helper function to get a random integer between min (inclusive) and max (exclusive)
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // Define an array of people with their names and image sources
  const people = [
    { name: 'Dawood', image: Dawood, about: 'Hi, My name is Dawood. I am senior student at Towson University persuing a bachelor’s degree in Computer Science.' },
    { name: 'Roshian', image: Roshian, about: 'Hello, my name is Roshan Puri. I am senior at Towson University. I am majoring in computer science. I will be graduating coming spring. Looking forward to graduation.' },
    { name: 'Jose', image: Jose, about: 'My name is Jose, and my focus is cybersecurity. I enjoy making applications more secure and ensure that only those authorized to view the data view it.' },
    { name: 'Newton', image: Newton, about: 'My name is Newton, named after the guy who invented gravity. I am a computer science major. I own 6 goldfish and 1 frog named Dog.' },
    { name: 'Novoa', image: Novoa, about: 'I am a current Computer Science student at Towson University, passionately expanding my expertise in the software engineering as a professional web designer. In my quest to enhance online experiences, Ive conceptualized Seed, a website dedicated to fostering healthy relationships. Outside the world of technology, I indulge in my love for music as a flutist, performing with the Baltimore Flute Choir in my spare time.' },
  ];

  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Us</h1>
        <h2> Mission Statement</h2>
        <p>
        Welcome to Seed, where love blossoms and relationships flourish! Founded
        by Novoa Champion and crafted with care by the talented Odyssey team
        from Towson University under the guidance of Dr. Lin Deng, Seed is more
        than just an app—it's a garden of growth for your relationship.
      </p>
      <p>
        At Seed, we believe that everyone deserves a chance to nurture their
        love, even when therapists are not affordable. Our unique garden-themed
        platform lets you and your partner plant the seeds of understanding,
        communication, and support. Watch as your concerns transform into
        blooming flowers, symbolizing the progress you make together.
      </p>
      <p>
        With features like interactive quizzes, valuable resources on abuse, and
        self-improvement tools like affirmations, Seed empowers you to cultivate not
        only your relationship but also a positive bond with yourself, friends,
        coworkers, and family. Your partner becomes your accountability ally, guiding
        each other towards emotional maturity and mental well-being.
      </p>

      <p>
        Seed also offers a personal journal, a sacred space where you can reflect,
        grow, and share your thoughts. For deeper connection, explore the couples
        journal, where your entries are visible to your partner, fostering openness
        and understanding in your relationship.
      </p>

      <p>
        We understand the importance of balance in relationships. That's why we've
        introduced 'Ready to Go,' a feature that allows you to gracefully exit social
        events without pressure. When both partners are ready, it's time to leave,
        ensuring a stress-free departure.
      </p>

      <p>
        Join our thriving community and embark on a journey of love, growth, and
        healthy connections. Seed is here to foster stronger, happier relationships,
        one blossom at a time. Start planting the seeds of love today!
      </p>

      
      <h2> Meet The Handsome Team</h2>
        <div className="name-cards">
          {people.map((person, index) => (
            <div key={`person${index}`} className="person-card">
              <p>{person.name}</p>
              <img src={person.image} alt={person.name} />
              <p>{person.about}</p>
              <p>┈-=-=-=-=-┈-=-=-=-=-┈-=-=-=-=-⋞ 〈 ⏣ 〉 ⋟-=-=-=-=-┈-=-=-=-=-┈-=-=-=-=-┈</p>
            </div>
          ))}
       
        </div>
        <p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;