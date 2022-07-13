import React from "react";
// import Header from "./Home/Header";
import "./App.css";
// import Footer from "./Footer";
// import DisplayMain from "./Home/DisplayMain";
// import { ProgressBar } from "react-bootstrap";
// import Content from "./Home/Content";
// import Categories from "./Home/Categories";
// import Overlap from "./Home/Overlap";
// import {BrowserRouter as Router } from "react-router-dom";
import About from "./About";
import ContactUS from "./Contactus";
import Gallery from "./Gallery"
import Home from "./Home";
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
// } from 'react-router-dom';
//import Catalogue from "./Catalogue";

import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contactus" element={<ContactUS />}/>
          <Route path="/gallery" element={<Gallery />} />

        </Routes>
      </Router>

      {/* <div>
            
        <Header/>
        
      
        
        </div>
        <DisplayMain/>
        <hr/>
        <div>
        <Overlap/>
        </div>
         <div>
             <hr/>
            <Categories/>
         </div>
        <div>
        <Content/>
        </div>
         
            <footer>
            <Footer/>
            </footer>
        
        */}
    </React.Fragment>
  );
}
export default App;
