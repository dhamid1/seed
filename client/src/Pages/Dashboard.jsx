// Dashboard.jsx

import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [userData, setUserData] = useState(null); // State to hold user data

  useEffect(() => {
    // Fetch user data when the component mounts
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      // Send a request to your server to fetch user data
      const response = await fetch('/api/user-data'); // Adjust the endpoint
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        // Handle the error, e.g., redirect to login
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      // Handle the error
    }
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      {userData ? (
        <div>
          <p>Welcome, {userData.username}!</p>
          {/* Display user-specific content here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
