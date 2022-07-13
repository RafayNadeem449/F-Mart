import React from 'react'
import "../Categories.css";
import { Card,CardGroup } from 'react-bootstrap';

 const Categories = () => {
  return (
    <React.Fragment>
     <div className='all'>
     <hr style={{color:'#e1ba12'}}/>
         <h3 className='STORE'>STORE CATEGORIES</h3>
         <p className='item'>Key Items</p>
         <hr style={{color:'#e1ba12'}}/>
         <CardGroup>
  <Card className='all'>
    <Card.Img variant="top" src="./HouseHoldCare.jpg"  className='tasweer .img-fluid' />
    <Card.Body>
      <Card.Title className='txt'>House Hold Care</Card.Title>
      
    </Card.Body>
   
  </Card>
  <Card className='all'>
    <Card.Img variant="top" src="./MeatPoultryFish.jpg" className='tasweer .img-fluid' />
    <Card.Body>
      <Card.Title className='txt'>Meat Poultry Fish</Card.Title>
      
    </Card.Body>
    
  </Card>

  <Card className='all'>
    <Card.Img variant="top" src="./Juices.jpg" className='tasweer .img-fluid' />
    <Card.Body>
      <Card.Title className='txt'>Fresh Juices and Drinks</Card.Title>
      
    </Card.Body>
    
  </Card>


  <Card className='all'>
    <Card.Img variant="top" src="./SugarTeaCoffee.jpg"  className='tasweer .img-fluid'/>
    <Card.Body>
      <Card.Title className='txt'>Sugar Tea Coffee</Card.Title>
      
    </Card.Body>
    
  </Card>
</CardGroup>
     </div>



    </React.Fragment>
  )
}

export default Categories;
