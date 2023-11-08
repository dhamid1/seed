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
<<<<<<< Updated upstream
        <li>

          <NavLink to= "/LoginPage">Log In</NavLink>
        </li>


          <NavLink to= "/signout">Sign out</NavLink>
        </li>

      </ul>
=======
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
       
>>>>>>> Stashed changes
    </nav>
  )
}
