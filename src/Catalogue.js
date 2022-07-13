import React from 'react'
import { Card } from 'react-bootstrap';
import "./Catalogue.css";

const Catalogue = () => {
  return (
    <React.Fragment>
    <Card>
    <Card.Body>
      <Card.Text>
        <h1 className='Main'>About F Mart</h1>
        <p className='des'>A little about us and a brief history of how we started.
            <br></br>
F Mart is a one-stop supermarket chain that aims to offer customers a wide range of basic home and personal products under one roof. Each F Mart store stocks home utility products - including food, toiletries, beauty products, garments, kitchenware and more - available at competitive prices that our customers appreciate. Our core objective is to offer customers good products at great value.</p>
      </Card.Text>
    </Card.Body>
    <Card.Img  className="fimage" variant="bottom" style={{height:"400px" , width:"800px" , marginLeft:'18%',marginRight:'50%', borderRadius:'16px'}} src="./Fmart.jpg" />
  </Card>
</React.Fragment>
    
)
  
}

export default Catalogue;