import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Images from './Images/seed_logo.png';
import { useNavigate } from 'react-router';
import './Navbar.css';
import { styled } from '@mui/material';
import settingsIcon from './Images/settings.png';

const Image = styled('img')({
  width: 'auto',
});

export const Navbar = ({ isLoggedIn, onLogout }) => {
  const history = useNavigate();
  const handleLogout = () => {
    onLogout();
    history('/Myjournal'); // Use history('/LoginPage') to navigate to the login page
  };

  return (
    <nav>
      <Link to="/" className="title">
        <Image src={Images} alt="logo" />
      </Link>
      <ul>

        {isLoggedIn && (
          <li>
            <NavLink to="/Myjournal">My Journal</NavLink>
          </li>
        )}
        {/* Conditionally render the "Login" link */}
        {!isLoggedIn && (
          <li>
            <NavLink to="/LoginPage">Log In</NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <NavLink to="/Account">Account</NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <NavLink to="/Profile">Profile</NavLink>
          </li>
        )}
        {isLoggedIn && (
        <li>
          <NavLink to="/Settings">
            <img src={settingsIcon} alt="Settings" style={{ width: '32px', height: '32px' }} />
          </NavLink>
        </li>
        )}

        {isLoggedIn && (
          <li>
            <NavLink onClick={handleLogout}>Logout</NavLink>
          </li>
        )}
        

      </ul>

    </nav>
  );
};