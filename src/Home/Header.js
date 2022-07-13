import React from "react";
import "../Header.css";
import { Nav } from "react-bootstrap";
//import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
// import About from "../About";
// import Gallery from "../Gallery";
// import Contactus from "../Contactus";

import { Link } from "react-router-dom"
// import {Route,Routes} from 'react-router-dom'

function Header() {
  return (
    
    <>
    <Navbar  fixed="top" bg="dark" expand="lg" className="op">
          
      {/* <Container style={{height:'50px'}}> */}

           
        <Navbar.Brand href="/"  >  
        <img
        id="Fmart"
        src="/logo.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="LOGO"
        
      />
            </Navbar.Brand >
            
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav"  >
          <Nav className="me-auto top" >
            
            <Nav.Link as={Link} to={"/"} style={{color:"yellow"}} className="check">Home</Nav.Link>
            <Nav.Link as={Link} to={"/about"}   style={{color:"yellow"}} className="check">About</Nav.Link>
            <Nav.Link as={Link} to={"/contactus"}   style={{color:"yellow"}} className="check">Contact-Us</Nav.Link>
            <Nav.Link as={Link} to={"/gallery"}    style={{color:"yellow"}} className="check">Gallery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
       
      {/* </Container> */}
   
    </Navbar>
    {/* <div>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
      </Routes>
    </div> */}
    
    </>
  );
}

export default Header;
