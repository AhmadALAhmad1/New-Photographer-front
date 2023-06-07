import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../styles/GalleryHero.css";
import { GalleryHero } from '../components/GalleryHero'
import {GalleryNavD} from '../Dashboard/GalleryNavD'
import {GalleryCard }from "../components/GalleryCard"
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Options from '../components/imageList/Options';

export const GalleryDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('Architecture');
  const [photos, setPhotos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(1);
 
  useEffect(() => {
     axios({
      url:'http://localhost:5000/api/gallery/get', 
      method: 'GET',
      headers: {
        'Content-Type': 'multipart/form-data',
     },
    })
      .then((res) => setPhotos(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredCards = photos.filter((item) => {
    return (item.category === selectedCategory);
  });
  const cards = filteredCards.slice(0, 3).map((item) => {
    return (
      <GalleryCard
        key={item._id}
        image={item.image}
        category={item.category}
        onClick={() => setIsOpen(true)}
        
      />
    );
  });
  
  return (
    <div style={{ backgroundColor: "rgba(29,27,27,255)"  }}>
      <GalleryHero />
      <GalleryNavD handleSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <section className="pcards-list" style={{ display: 'flex' }}>{cards}</section>
    
      {isOpen && photos[imgIndex] && (
        <div>
             <Lightbox
        mainSrc={`data:image/jpeg;base64,${photos[imgIndex].image}`}
        nextSrc={`data:image/jpeg;base64,${photos[(imgIndex + 1) % photos.length].image}`}
        prevSrc={`data:image/jpeg;base64,${photos[(imgIndex + photos.length - 1) % photos.length].image}`}
        onCloseRequest={() => setIsOpen(false)}
        onMovePrevRequest={() => setImgIndex((imgIndex + photos.length - 1) % photos.length)}
        onMoveNextRequest={() => setImgIndex((imgIndex + 1) % photos.length)}
        toolbarButtons={[<Options id={photos[imgIndex]._id} />]}

       >
        
        </Lightbox>
        </div>
     
)}

    </div>
  )
}
