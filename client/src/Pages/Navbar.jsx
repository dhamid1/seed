import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = ({ isLoggedIn }) => {
  return (
    <nav>
      <Link to="/" className="title">
        SEED
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
        {isLoggedIn ? (
          <li>
            <NavLink to="/Profile">Profile</NavLink>
          </li>
        ) : (
          // Optionally, you can add a "Register" link when not logged in.
          <li>
            <NavLink to="/Register">Register</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
