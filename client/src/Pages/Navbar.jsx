// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import './Navbar.css';

// export const Navbar = ({ isLoggedIn }) => {
//   return (
//     <nav>
//       <Link to="/" className="title">
//         SEED
//       </Link>
//       <ul>
//         {isLoggedIn && (
//           <li>
//             <NavLink to="/Myjournal">My Journal</NavLink>
//           </li>
//         )}
//         <li>
//           <NavLink to="/LoginPage">Log In</NavLink>
//         </li>
//         {isLoggedIn && (
//           <li>
//             <NavLink to="/Account">Account</NavLink>
//           </li>
//         )}
//         {isLoggedIn && (
//           <li>
//             <NavLink to="/Profile">Profile</NavLink>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// };
/////////////////////
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
        {(
          <li>
            <NavLink to="/Myjournal">My Journal</NavLink>
          </li>
        )}
        <li>
          <NavLink to="/LoginPage">Log In</NavLink>
        </li>
        { (
          <li>
            <NavLink to="/Account">Account</NavLink>
          </li>
        )}
        {(
          <li>
            <NavLink to="/Profile">Profile</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
