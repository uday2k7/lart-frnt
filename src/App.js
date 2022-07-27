import React from "react";
//import { Routes, withRouter } from "react-router-dom";
//import React from "react";
import Header from "./components/Header";

import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import Contactus from "./components/Contactus";
import Privacy from "./components/Privacy";
import Artists from "./components/Artists";
import Auctions from "./components/Auctions";
import Luddspaces from "./components/Luddspaces";
import Register from "./components/Register";
import Login from "./components/Login";

import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
  //Router,
  
} from "react-router-dom";
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";*/

function App() {
  return (
    
    <div className="App">
    <BrowserRouter> 
      <Header />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="artists" element={ <Artists/> } />
        <Route path="auctions" element={ <Auctions/> } />
        <Route path="luddspaces" element={ <Luddspaces/> } />
        <Route path="about-us" element={ <About/> } />
        <Route path="contact-us" element={ <Contactus/> } />
        <Route path="privacy" element={ <Privacy/> } /> 
        <Route path="register" element={ <Register/> } /> 
        <Route path="login" element={ <Login/> } />        
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
    
  );
}

export default App;
