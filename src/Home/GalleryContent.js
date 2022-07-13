import React from "react";
import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";

function GalleryContent() {
  return (
    <div>
       <CardGroup>
  <Card>
    <Card.Img variant="top" src="./G1.avif" style={{height:'400px'}} />
    <Card.Body>
      <Card.Title style={{textAlign:'center', fontFamily:"'Raleway', sans-serif;", color:"#e1ba12", fontWeight:'bolder'}}>Customer Service</Card.Title>
      <Card.Text style={{textAlign:'center', fontFamily:"'Raleway', sans-serif;"}}>
        The Service is provided by us to you by Love. Customer's satisfaction is our main concern.
        Customer is our main concern.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="./g2.jpg" style={{height:'400px'}} />
    <Card.Body>
      <Card.Title style={{textAlign:'center', fontFamily:"'Raleway', sans-serif;", color:"#e1ba12", fontWeight:'bolder'}}>Quality</Card.Title>
      <Card.Text style={{textAlign:'center', fontFamily:"'Raleway', sans-serif;"}}>
        There is no compromise on quality. We are committed to quality.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="G3.jpg"  style={{height:'400px'}}/>
    <Card.Body>
      <Card.Title style={{textAlign:'center', fontFamily:"'Raleway', sans-serif;", color:"#e1ba12", fontWeight:'bolder'}}>Speedy Delivery</Card.Title>
      <Card.Text style={{textAlign:'center', fontFamily:"'Raleway', sans-serif;"}}>
        Our delivery is fast and reliable. Delivery is our main concern.Delivery gets deliever to you in first 10 minutes in the available time in the specified areas.
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>

<CardGroup>
  <Card>
    <Card.Img variant="top" src="./G4.avif" style={{height:'400px'}} />
    <Card.Body>
      <Card.Title style={{textAlign:'center', fontFamily:"'Raleway', sans-serif;", color:"#e1ba12", fontWeight:'bolder'}}>COVID Times</Card.Title>
      <Card.Text style={{textAlign:'center', fontFamily:"'Raleway', sans-serif;"}}>
        Our Store provided by us is safe and secure. We are committed to safety. We are committed to safety. Safety is our main concern. We kept special care for our customers and our staff to keep them safe from the deadly virus.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="./G5.jpg" style={{height:'400px'}} />
    <Card.Body>
      <Card.Title style={{textAlign:'center', fontFamily:"'Raleway', sans-serif;", color:"#e1ba12", fontWeight:'bolder'}}>Contributions</Card.Title>
      <Card.Text style={{textAlign:'center', fontFamily:"'Raleway', sans-serif;"}}>
       We believe in the power of contributions. We are committed to contributions. We are committed to contributions. By contibuting we have the power to change the world. We shared many smiles with the less previleged people.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="G6.jpg"  style={{height:'400px'}}/>
    <Card.Body>
      <Card.Title style={{textAlign:'center', fontFamily:"'Raleway', sans-serif;", color:"#e1ba12", fontWeight:'bolder'}}>Our Future Plans</Card.Title>
      <Card.Text style={{textAlign:'center', fontFamily:"'Raleway', sans-serif;"}}>
        We expect to open our stores in Future by expanding our services for our dear customers.
        <br></br>
        <b>Upcoming Stores</b>
        <ul>
            <li>Burj Khalifa</li>
            <li>Jumeirah Beach</li>
            <li>Dubai Mall</li>
            <li>Al Barsha</li>
            <li>Packages Mall</li>
        </ul>
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>

    </div>
  )
}

export default GalleryContent;
