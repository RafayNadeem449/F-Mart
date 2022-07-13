import React from "react";
import "../DisplayMain.css";
import { Carousel } from "react-bootstrap";

function GalleryStart() {
  return (
    <div>
        <Carousel>
  <Carousel.Item>
    <img
      id='img1'
      className="d-block w-100"
      src="./Gallery1.jpg"
      alt="First slide"
      style={{width:'100px'}}
    />
    <Carousel.Caption  className="Desc">
      <h1>OUR GALLERY</h1>
      <p>Memories</p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
    </div>
  );
}

export default GalleryStart;
