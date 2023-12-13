import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Images from './Images/seed_logo.png';
import { useNavigate} from 'react-router'; 
import './Navbar.css';
import { styled} from '@mui/material';

const Image = styled('img')({
width: '200px',
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

      <li>
            <NavLink to="/AskAI">AskAI</NavLink>
      </li>


      {isLoggedIn && (
          <li>
            <NavLink to="/Ready2Go">Ready2Go</NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <NavLink to="/Myjournal">Journal</NavLink>
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
