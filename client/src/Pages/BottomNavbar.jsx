import React from 'react';
import "./BottomNavbar.css";
import Images from './Images/footer_cloud.png'

const navbarStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  height: 40,
  width: '100%',
  backgroundColor: '#464552',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-around',
  padding: '10px 0',
  zIndex: 1,
};

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
};

const headerImageStyle = {
  position: 'fixed', // Set position to fixed
  width: '100%',
  maxWidth: '100%',
  bottom: 59, // Adjust to the desired position
  zIndex: 1,
  height: 60,
};

const HeaderImage = () => {
  return (
    <img
      src={Images} // Replace with the actual image path
      alt="Header Image"
      style={headerImageStyle}
    />
  );
};

const BottomNavbar = () => {
  return (
    <div>
      <HeaderImage />
      <div style={navbarStyle}>
        <a style={linkStyle} href="/">
          Home
        </a>
        <a style={linkStyle} href="/AboutUs">
          About SEED
        </a>
        <a style={linkStyle} href="/ContactUs">
          Contact Us
        </a>
        <a>
          Suicide Hotline: 988
        </a>
      </div>
    </div>
  );
};

export default BottomNavbar;
