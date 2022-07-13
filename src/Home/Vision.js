import React from 'react'
import { Row,Col,Container } from 'react-bootstrap';
import "./Vision.css"


const Vision = () => {
  return (
    <React.Fragment >
          <div className='DET' 
          style={{backgroundImage:"URL('./Grocery3.avif')",
         
        }}
          >
          <hr></hr>
        <Container >
          <div className='Aft' style={{opacity:1}}>
            
  <Row>
    <Col>
            <img variant="top" alt='Vision' src="./Vision.jpg"  style={{width:"100%", height:'500px' , borderRadius:'14px'}}/>
              
    </Col>
    <Col>
    <div >
    <h2 style={{color:" #e1ba12", textAlign:"center", marginTop:'120px'}}>OUR VISION</h2>
            <p>
              To be recognized for the quality of the products and service in
              store. Whether it is freshly baked healthy food options or
              everyday grocery items; choose the best to be kept in our store
              and at a right price. To be strategically located in order to
              offer maximum convenience to both working and residential
              communities. To expand and launch a chain of 100 stores by 2025.
            </p>
            </div>
    </Col>
  </Row>
  </div>
  </Container>
    <hr></hr>
    </div>
    </React.Fragment>
  )
}
export default Vision;





