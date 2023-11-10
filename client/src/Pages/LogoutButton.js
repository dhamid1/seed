import React from 'react';
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const history = useNavigate();

  const handleLogout = () => {
    // Use history to navigate to another route
    history.replace('/loginPage');
    
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default MyComponent;
