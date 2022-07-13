import React from 'react'
import ContactDetails from './Home/ContactDetails';
import ContactusStart from './Home/ContactusStart';
import Header from './Home/Header';
import Footer from "./Footer";
import "./Header.css";

 const Contactus = () => {
  return (
    <div>
       <Header/>
       <ContactusStart/>
       <ContactDetails/>
      <Footer/>
    </div>
  )
}
export default Contactus;