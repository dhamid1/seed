import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
          <Link to = "/" className= "title">SEED</Link>
        
      <ul>
        
        <li>
          <NavLink to= "/Myjournal">My Journal</NavLink>
        </li>
        <li>
          <NavLink to= "/signout">Sign out</NavLink>
        </li>
      </ul>
    </nav>
  )
}
