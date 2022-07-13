import React from 'react'
import Header from './Home/Header';
import AboutStart from './Home/AboutStart';
import Vision from './Home/Vision';
import Footer from './Home/Footer';
import AboutOverlap from './Home/AboutOverlap';
import Brand from './Home/Brand';
import NewOverlap from './Home/NewOverlap';
import GroupOverlap from './Home/GroupOverlap';
import Exper from './Home/Exper';


 function About() {
  return (
    <React.Fragment>
      <Header/>
      <AboutStart/>
      <AboutOverlap/>
      <hr/>
      <Brand/>
      <hr/>
      <NewOverlap/>
      <Vision/>
      <GroupOverlap/>
      <Exper/>
       <Footer/>
      
       </React.Fragment>
  )
}
export default About;