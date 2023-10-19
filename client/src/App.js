// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import { Myjournal } from './Pages/myjournal';
import { LoginPage } from './Pages/login';
import { Navbar } from './Pages/Navbar';
import { AccountPage } from './Pages/Account';
import AboutUsPage from './Pages/AboutUsPage';
import ContactUsPage from './Pages/ContactUs'; // Import your ContactUsPage component
import BottomNavbar from './Pages/BottomNavbar.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Myjournal" element={<Myjournal />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Account" element={<AccountPage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        <Route path="/ContactUs" element={<ContactUsPage />} /> {/* Add the "Contact Us" route */}
       
      </Routes>
      <BottomNavbar />
    </div>
  );
}

export default App;
