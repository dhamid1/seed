<<<<<<< Updated upstream
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {Navbar} from "./Pages/Navbar";
import { Routes,Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { Myjournal } from "./Pages/myjournal";

import { LoginPage } from "./Pages/login";






=======
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
>>>>>>> Stashed changes

function App() {
 
  return (
    <div className="App">


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>


      <Navbar/>
      <Routes>
<<<<<<< Updated upstream
        <Route path = "/" element = {<HomePage/>} />
        <Route path = "/Myjournal" element = {<Myjournal/>} />

        <Route path = "/LoginPage" element = {<LoginPage/>} />
=======
        <Route path="/" element={<HomePage />} />
        <Route path="/Myjournal" element={<Myjournal />} />
        {/* Pass isLoggedIn and setLoggedIn to the LoginPage component */}
        <Route path="/LoginPage" element={<LoginPage isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/Account" element={<AccountPage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        <Route path="/ContactUs" element={<ContactUsPage />} />
        <Route path="/Settings" element={<Settings/>}/>
>>>>>>> Stashed changes
      </Routes>
      

      </Routes>
      
    </div>
  );
}

export default App;