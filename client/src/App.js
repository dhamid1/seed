import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {Navbar} from "./Pages/Navbar";
import { Routes,Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { Myjournal } from "./Pages/myjournal";

import { LoginPage } from "./Pages/login";







function App() {
 
  return (
    <div className="App">


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>


      <Navbar/>
      <Routes>
        <Route path = "/" element = {<HomePage/>} />
        <Route path = "/Myjournal" element = {<Myjournal/>} />

        <Route path = "/LoginPage" element = {<LoginPage/>} />
      </Routes>
      

      </Routes>
      
    </div>
  );
}

export default App;