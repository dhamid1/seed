import React from 'react';
import '../Pages/HomePage.css'; // Updated path for HomePage.css
import '../Pages/Navbar.css';
import coupleHead from '../Pages/Images/coupleHeader_02.png'; // Path for the image


const HBanner = () => {
return (
    
    <div className="header">
        <div className="featureHeaderContainer">
            <img src={coupleHead} className="couplepicHeader" alt="Header Couple"/>
            <p className='headerText'> SEED growing relationships with healthy habits!</p>
            <button className='buttonHeader'>Check out Our Resources</button>
        </div>
    </div>  
    
);

};

export default HBanner;