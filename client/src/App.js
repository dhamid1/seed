import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { Myjournal } from "./Pages/myjournal";
import { LoginPage } from "./Pages/login";
import { Navbar } from "./Pages/Navbar";
import BottomNavbar from "./Pages/BottomNavbar";

  
  
  
  function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Myjournal" element={<Myjournal />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>

      
      <BottomNavbar />
    </div>
  );
}

export default App;
