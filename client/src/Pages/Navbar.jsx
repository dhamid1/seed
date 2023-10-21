import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate} from 'react-router'; 
import './Navbar.css';

export const Navbar = ({ isLoggedIn, onLogout }) => {
  const history = useNavigate();
  const handleLogout = () => {
    onLogout();
    history.apply('/LoginPage');
  };
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
/////////////////////
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
//         {(
//           <li>
//             <NavLink to="/Myjournal">My Journal</NavLink>
//           </li>
//         )}
//         <li>
//           <NavLink to="/LoginPage">Log In</NavLink>
//         </li>
//         { (
//           <li>
//             <NavLink to="/Account">Account</NavLink>
//           </li>
//         )}
//         {(
//           <li>
//             <NavLink to="/Profile">Profile</NavLink>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// };
