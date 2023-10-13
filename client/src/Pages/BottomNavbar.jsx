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
      <a style={linkStyle} href="#about">
        About SEED
      </a>
      <a style={linkStyle} href="#contact">
        Contact us
      </a>
    </div>
  );
};

export default BottomNavbar;
