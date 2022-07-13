import React from "react";
import "../DisplayMain.css";
import { Carousel } from "react-bootstrap";

function AboutStart() {
  return (
    <div>
        <Carousel>
  <Carousel.Item>
    <img
      id='img1'
      className="d-block w-100"
      src="./Grocery4.avif"
      alt="First slide"
     
    />
    <Carousel.Caption  className="Desc">
      <h1>About F MART</h1>
      <p>The Name of Trust and Relibility</p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
    </div>
  );
}

export default AboutStart;

