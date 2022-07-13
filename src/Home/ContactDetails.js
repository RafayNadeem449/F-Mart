import React from 'react'
import { Row,Col,Container } from 'react-bootstrap';
import { Form,Button } from 'react-bootstrap';
import "./ContactDetail.css";

const ContactDetails = () => {
  return (
    <React.Fragment >
        <Container className="DET">
  <Row>
    <Col>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicName">
  
    <Form.Control type="name" placeholder="Enter your First Name" style={{width:'350px'}}/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicName">
 
    <Form.Control type="name" placeholder="Enter your Second Name" style={{width:'350px'}}/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
   
    <Form.Control type="email" placeholder="Enter your Email" style={{width:'350px'}}/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
  
    <Form.Control type="password" placeholder="Enter Your Password" style={{width:'350px'}} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicMessage">
    <Form.Control type="Message" placeholder="Please Write Your Message" style={{width:'350px' ,height:'150px'}}/>
    
  </Form.Group>
  
  <Button className="But" variant="warning" type="submit">
    Submit
  </Button>
</Form>
    </Col>
    <Col>
    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.0890474247553!2d55.27100301437828!3d25.20021933776338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f428121560e95%3A0xc2924dde702d7845!2sF%20Mart!5e0!3m2!1sen!2s!4v1647349408184!5m2!1sen!2s" width="600" height="420" allowFullScreen="" loading="lazy" title='Maps'></iframe>
    </Col>
  </Row>
  </Container>
    </React.Fragment>
  )
}
export default ContactDetails;
