import React from 'react';
import "./BottomNavbar.css";

const navbarStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: '#333',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-around',
  padding: '10px 0',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
};

const BottomNavbar = () => {
  return (
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
  );
};

export default BottomNavbar;
