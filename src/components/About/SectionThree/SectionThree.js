import React from 'react'
import EvenItem from './EvenItem'
import OddItem from './OddItem'
import './SectionThree.css'
import { useState, useEffect } from "react";
import axios from "axios";

// const url = `https://jayy-pos5.onrender.com/api/about/`;

function SectionThree() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getAllInfo();
  }, []);

  const getAllInfo = async () => {

    try {

      const response = await axios.get('https://jayy-pos5.onrender.com/api/about/');
      setInfo(response.data);
      console.log(response);
      // console.log(response.data)
 

    } catch (error) {
      
      console.error(`Error: ${error}`);
    }
  };
  const filteredCards = info.filter((object) => object.section === "3");

  const cards = filteredCards.map((object, index) => {
    if (index % 2 === 1) {
      return (
        <EvenItem
          title={object.title}
          description={object.description}
          key={object.id}
          image={object.image}
        />
      );
    } else if (index % 2 === 0) {
      return (
        <OddItem
          title={object.title}
          description={object.description}
          key={object.id}
          image={object.image}
        />
      );
    }
    return null;
  });

  return (
    <div className='about--section-three-container-even-odd'>
      {cards}
    </div>
  );
}

export default SectionThree;