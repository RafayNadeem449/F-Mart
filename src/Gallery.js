import React from 'react'
import Footer from './Home/Footer';
import GalleryContent from './Home/GalleryContent';
import GalleryStart from './Home/GalleryStart';
import Header from './Home/Header';

function Gallery() {
  return (
    <div>
     <Header/>
     <GalleryStart/>
     <GalleryContent/>
     
     <Footer/>


    </div>
  )
}

export default Gallery;
