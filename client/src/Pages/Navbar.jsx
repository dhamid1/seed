import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Images from './Images/seed_logo.png';
import { useNavigate} from 'react-router'; 
import './Navbar.css';
import { styled} from '@mui/material';

const Image = styled('img')({
width: 'auto',
});

export const Navbar = ({ isLoggedIn, onLogout }) => {
  const history = useNavigate();
  const handleLogout = () => {
    onLogout();
    history.apply('/LoginPage');
  };
  return (
    <nav>
      <Link to="/" className="title">
        <Image src={Images} alt="logo"/>
      </Link>
      <ul>
        {isLoggedIn && (
          <li>
            <NavLink to="/Myjournal">My Journal</NavLink>
          </li>
        )}
        <li>
          <NavLink to="/LoginPage">Log In</NavLink>
        </li>
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
       </ul>
      {isLoggedIn && (
        <button onClick={handleLogout}>Logout</button>
      )}
    </nav>
  );
};
