// export {Header as Header } from  "./Header"
// export {Footer as Footer } from  "./Footer"
// export {DisplayMain as DisplayMain } from  "./DisplayMain"
// export {Overlap as Overlap } from  "./Overlap"
// export {Content as Content } from  "./Content"
// export {Categories as Categories } from  "./Categories"
// export {ContactUS as ContactUS } from  "./ContactUS"
// export {About as About } from  "./About"
// export {Gallery as Gallery } from  "./Gallery"

import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import Header from './Header'
import DisplayMain from './DisplayMain'
import Overlap from './Overlap'
import Categories from './Categories'
import Content from './Content'
import Footer from './Footer'


const Home = () => {
  return (
    <div>

        <Header />
        <br></br>
        <br></br>
        
        <ProgressBar variant="warning" now={100} />    
        <DisplayMain />
        <Overlap />
        <Categories />
        <Content />
        <Footer />


    </div>
  )
}

export default Home