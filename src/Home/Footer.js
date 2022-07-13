import React from 'react'
import "../Footer.css";
import { Card, CardGroup} from "react-bootstrap";
import {BsFillAlarmFill } from 'react-icons/bs';
import {FaHome} from 'react-icons/fa';
import {BsFillTelephoneFill , BsFillPhoneFill} from 'react-icons/bs';
import {FiMail} from 'react-icons/fi';
import {AiFillFacebook} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineTwitter , AiFillYoutube} from 'react-icons/ai';




const Footer = () => {
  return (
    <React.Fragment>
        <CardGroup style={{height:'300px'}} className='Cards'>
  <Card>
    
    <Card.Body className='FootMain'>
      <Card.Title  className='title'>F Mart</Card.Title>
      <Card.Text className='FootText'>
      F mart is a one-stop supermarket chain that aims to offer customers a wide range of basic home and personal products under one roof. Each FMart store stocks home utility products.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    
    <Card.Body className='FootMain'>
      <Card.Title className='title'>Head Office Address</Card.Title>
      <Card.Text className='FootText'>
      <FaHome className='al'/>
      Bay Square, Building 2, office 202, Business Bay, P.O. Box: 50603, Dubai, UAE
      <br></br>
      <br></br>
      <BsFillAlarmFill className='al'/>
      9:00 AM to 5:30 PM
    Saturday to Thursday
    (Friday Closed)
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Body className='FootMain' >
      <Card.Title className='title'>Contact Info</Card.Title>
      <Card.Text className='FootText' >
        <BsFillTelephoneFill className='al'/>
      +971 4 271 4800
      <br></br>
      <br></br>
      <BsFillPhoneFill className='al'/>
      +971 4 271 4801
      <br></br>
      <br></br>
      <FiMail className='al'/>
      info@fmart.ae
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Body className='FootMain'>
      <Card.Title className='title'>Follow Us On </Card.Title>
      <Card.Text className='FootText' id='info'>
        <a href='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiTvNzGqrn2AhWrR_EDHdHDDUQQFnoECAcQAQ&url=https%3A%2F%2Fwww.facebook.com%2F&usg=AOvVaw2q27ov2cpCynr72DmuSqEz'>
        <AiFillFacebook className='Facebook' size={40}/>
          </a>
          
      <br></br>
      <br></br>
      <a href='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjh35Oaqrn2AhXqQvEDHXzSBb4QFnoECAgQAQ&url=https%3A%2F%2Fwww.instagram.com%2F&usg=AOvVaw1cBeRoOpMhZ3-x5M1sA3Fm' >
      <AiOutlineInstagram className='Instagram' size={40}/>
        </a>
        
      <br></br>
      <br></br>
      <a href='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjX3umCqrn2AhWpSvEDHS2SDNIQFnoECAUQAQ&url=https%3A%2F%2Ftwitter.com%2F%3Flang%3Den&usg=AOvVaw1Sd3B-_cNZOLSmhw9z2lOm' >
      <AiOutlineTwitter className='Twitter' size={40}/>
        </a>
      <br></br>
      <br></br>
      <a href='https://www.youtube.com/'>
       <AiFillYoutube className='Youtube' size={40} 
       />
       </a>
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>
   <p className='End'>Copyright © 2022 Fmart. All Rights Reserved. 
   <br></br>
   Privacy Policy | Terms & Conditions
   </p>
    </React.Fragment>
  )
}
export default Footer;
