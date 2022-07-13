import React from 'react'
import { Carousel } from 'react-bootstrap';
import "../DisplayMain.css";

function DisplayMain() {
  return (
    <React.Fragment>
        <Carousel>
        <Carousel.Item>
    <img
      id='img1'
      className="d-block w-100"
      src="./INTRO.jpg"
      alt="First slide"
    />
    <Carousel.Caption className='Desc'>
      <h1>WELCOME TO FMART</h1>
      <p>Here at F Mart, the comfort is the top priority.</p>
    </Carousel.Caption>
  </Carousel.Item>

  
  <Carousel.Item>
    <img
         id='img2'
      className="d-block w-100"
      src="./Grocery2.avif"
      alt="Second slide"
    />

    <Carousel.Caption className='Desc'>
      <h1>GOOD QUALITY AND QUANTITY</h1>
      <p>At F Mart, we place strong emphasis on excellence in customer service.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      id='img3'
      className="d-block w-100"
      src="./Grocery3.avif"
      alt="Third slide"
    />

    <Carousel.Caption className='Desc'>
      <h1>THE NEAREST IN DOWNTOWN</h1>
      <p>The Access of the Store is the Closest to Downtown.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      id='img1'
      className="d-block w-100"
      src="./Grocery1.avif"
      alt="First slide"
    />
    <Carousel.Caption className='Desc'>
      <h1>FRUITS & VEGETABLE</h1>
      <p>Fruits & Vegetables to lead a fruitful life.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </React.Fragment>
  )
}

export default DisplayMain;
