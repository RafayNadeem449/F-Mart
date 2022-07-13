import React from "react";
import "../DisplayMain.css";
import { Carousel } from "react-bootstrap";
import "./ContactDetail.css";

function ContactusStart() {
  return (
    <div>
        <Carousel>
  <Carousel.Item>
    <img
      id='img1'
      className="d-block w-100 this"
      src="./contact.jpg"
      alt="First slide"
      // style={{width:'100px'}}
    />
    <Carousel.Caption  className="Desc">
      <h1>Contact US</h1>
      <p>We are Committed to service and are available 24/7 for your service.</p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
    </div>
  );
}

export default ContactusStart;
