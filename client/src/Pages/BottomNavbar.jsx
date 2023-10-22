import React from 'react';
import "./BottomNavbar.css";
import Images from './Images/footer_cloud.png'

const navbarStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  height: 40,
  width: '100%',
  backgroundColor: '#464552',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-around',
  padding: '10px 0',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
};
const HeaderImage = () => {
  return (
    <img
      src={Images} // Replace with the actual image path
      alt="Header Image"
      style={{
        width: '100%',
        maxWidth: '100%',
        marginTop: '20px',
        position: 'absolute',
      }}
    />
  );
};
const BottomNavbar = () => {
  return (
    <div><HeaderImage/>
    <div style={navbarStyle}>
      <a style={linkStyle} href="#home">
        Home
      </a>
      <a style={linkStyle} href="/AboutUs"> {/* Link to the "About Us" page */}
  About SEED
</a>
      <a style={linkStyle} href="/ContactUs"> {/* Link to the "Contact Us" page */}
        Contact Us
      </a>
      <a style={linkStyle} href="tel:988"> {/* Add the suicide hotline number */}
        Suicide Hotline: 988
      </a>
    </div>
    </div>
  );
};

export default BottomNavbar;
