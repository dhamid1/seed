import React from 'react';
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const history = useNavigate();

  const handleNavigate = () => {
    // Use history to navigate to another route
    history.push('/loginPage');
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default MyComponent;
