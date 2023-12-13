import React from 'react';
import './HomePage.css'; // Import a CSS file for styling
import coupleHead from './Images/coupleHeader_02.png';
import rgIphone from './Images/ready2go_phone.png';
import rgCouple from './Images/ready2go_couple.png';
import quizImage from './Images/quiz_image.gif';
import resCouple from './Images/resourceCouple.png';
import communityImg from './Images/community_image.gif';
import familyImg from './Images/familyNightIdeas_image.gif';



const HomePage = () => {
  return (
    <div className="homepage">
     
      <div className="header">
        <div className="featureHeaderContainer">
        <img src={coupleHead} className="couplepicHeader" alt="Header Couple"/>
        <p className='headerText'> Release and Organize your thoughts
through Journaling and experience clarity
in communication.</p>
<button className='buttonHeader'>Create Account</button>
</div>
      </div>  


      <div className="content">
        <div className='featureContainer'>
        <div className="r2g feature">
        <img src={rgIphone} className="r2gphone" alt="Header Couple"/>
        <img src={rgCouple} className="r2gcouple" alt="Header Couple"/>
        </div>
        </div>

        <div className="quiz feature">
          <div className="featureContainer">
          <img src={quizImage} className="quizImg featureImageLeft" alt="Header Couple"/>
          <h2 className='featureTitle' >Quiz</h2>
          <p className='featureText BurntOrange'>Plant and Grow a schedule together that you can both actively edit and custmonize together.</p>
        
          </div>
        </div>

        <div className="resource feature">
          <div className="featureContainer">
          <img src={resCouple} className="resourceCouple featureImageLeft" alt="Header Couple"/>
          <h2 className='featureTitle'>Healthy Communication Resources </h2>
          <p className='featureText'>Here is an archive of resources for couples and family activies.    
          </p>
          
        </div>
        </div>

        <div className="Community feature">
          <div className="featureContainer">
          <img src={communityImg} className="communityImage featureImageRight" alt="Header Couple"/>
          <h2 className='featureTitle'>Healthy Communication Resources </h2>
          <p className='featureText'>Discover couples and family night games. Family night once a week is a 
            healthy way to bring couples and familyes closer.    
          </p>
        </div>
        </div>

        <div className="Family feature">
          <div className="featureContainer">
          <img src={familyImg} className="familyGame featureImageLeft" alt="Header Couple"/>
          <h2 className='featureTitle'>Family Game Night Ideas </h2>
          <p className='featureText'>Discover couples and family night games. Family night once a week is a 
            healthy way to bring couples and familyes closer.    
          </p>
        </div>
        </div>

        <div className="Family feature">
          <div className="featureContainer">
            
          
        </div>
        </div>

      </div>
    </div>
  );
};
// this page will change the home page to whatever we want! if we want to link 
//stuff just let me know and ill look around
export default HomePage;
