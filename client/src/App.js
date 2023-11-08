
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {Navbar} from "./Pages/Navbar";
import { Routes,Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { Myjournal } from "./Pages/myjournal";

import { LoginPage } from "./Pages/login";





import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import { Myjournal } from './Pages/myjournal';
import { LoginPage } from './Pages/login';
import { Navbar } from './Pages/Navbar';
import { AccountPage } from './Pages/Account';
import AboutUsPage from './Pages/AboutUsPage';
import ContactUsPage from './Pages/ContactUs';
import BottomNavbar from './Pages/BottomNavbar.jsx';


function App() {
  // Manage authentication status using state
  const [isLoggedIn, setLoggedIn] = useState(false);


import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import { Myjournal } from './Pages/myjournal';
import { LoginPage } from './Pages/login';
import { Navbar } from './Pages/Navbar';
import { AccountPage } from './Pages/Account';
import AboutUsPage from './Pages/AboutUsPage';
import ContactUsPage from './Pages/ContactUs';
import BottomNavbar from './Pages/BottomNavbar.jsx';
import Settings from './Pages/Settings';
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

        <Route path = "/" element = {<HomePage/>} />
        <Route path = "/Myjournal" element = {<Myjournal/>} />

        <Route path = "/LoginPage" element = {<LoginPage/>} />

        <Route path="/" element={<HomePage />} />
        <Route path="/Myjournal" element={<Myjournal />} />
        {/* Pass isLoggedIn and setLoggedIn to the LoginPage component */}
        <Route path="/LoginPage" element={<LoginPage isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/Account" element={<AccountPage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        <Route path="/ContactUs" element={<ContactUsPage />} />

        <Route path="/Settings" element={<Settings/>}/>

      </Routes>
      


      </Routes>
      <BottomNavbar />
    </div>
  );
}

export default App;
