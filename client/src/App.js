import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import { Myjournal } from './Pages/myjournal';
import  Ready2Go  from './Pages/Ready2Go';
import { LoginPage } from './Pages/login';
import { Navbar } from './Pages/Navbar';
import { AccountPage } from './Pages/Account';
import AboutUsPage from './Pages/AboutUsPage';
import ContactUsPage from './Pages/ContactUs';
import BottomNavbar from './Pages/BottomNavbar.jsx';

function App() {
  // Manage authentication status using state
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout actions here, such as clearing the token or state
    setLoggedIn(false); // Update the login state
  };

  // Pass the `setLoggedIn` function to the LoginPage component
  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Myjournal" element={<Myjournal />} />
        {/* Pass isLoggedIn and setLoggedIn to the LoginPage component */}
        <Route path="/Ready2Go" element={<Ready2Go />} />
        <Route path="/LoginPage" element={<LoginPage isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/Account" element={<AccountPage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        <Route path="/ContactUs" element={<ContactUsPage />} />
      </Routes>
      <BottomNavbar />
    </div>
  );
}

export default App;
