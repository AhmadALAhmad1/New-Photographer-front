import React from 'react'
import heroImage from '../images/Hero.png';
import Header from './Header.jsx';
import './About/AboutHeader/AboutHeader.css'


export function GalleryHero() {
  const style = {
    backgroundColor: "black",
    backgroundImage: heroImage,
    minHeight: "500px",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (

    <div className='galleryHero'>
      <div className="about--header-parallax" style={style}>
        <Header />

      </div>
    </div>
  )
}


