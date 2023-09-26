import React from "react";
import logo from "./logo.svg";
import "./App.css";
<<<<<<< Updated upstream
=======
import {Navbar} from "./Pages/Navbar";
import { Routes,Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { Myjournal } from "./Pages/myjournal";
import { LoginPage } from "./Pages/login";


>>>>>>> Stashed changes

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
<<<<<<< Updated upstream
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
=======
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<HomePage/>} />
        <Route path = "/Myjournal" element = {<Myjournal/>} />
        <Route path = "/LoginPage" element = {<LoginPage/>} />
      </Routes>
      
>>>>>>> Stashed changes
    </div>
  );
}

export default App;