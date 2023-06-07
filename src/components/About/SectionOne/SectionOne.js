import React from 'react'
import CardSectionOne from './CardSectionOne'
import { useState, useEffect } from "react";
import axios from "axios";

const url = "http://localhost:5000/api/about/";


function SectionOne() {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        getAllInfo();
      }, []);

      const getAllInfo = async() => {
        await axios
          .get(`${url}`)
          .then((response) => {
            setInfo(response.data);
          })
          .catch((error) => console.error(`Error: ${error}`));
      };
      const filteredCards = info.filter((object) => object.section === "1");
      const cards = filteredCards.map((object) => {
        console.log(object);
        return (
            <CardSectionOne
              title={object.title}
              description={object.description}
              key={object.id}
              image={object.image}
            />
          );
        });
  return (
    <div>
      {cards}
    </div>
  )
}

export default SectionOne
// const url = "http://localhost:5000/api/about/";


// function SectionOne() {
//    const [info, setInfo] = useState([]);

//   useEffect(() => {
//     getAllInfo();
//   }, []);

//    const getAllInfo = () => {
//     axios
//       .get(`${url}`)
//       .then((response) => {
//         setInfo(response.data);
//       })
//       .catch((error) => console.error(`Error: ${error}`));
//   };
// const filteredCards = info.filter((object) => object.section === "2");
//    const cards = filteredCards.slice(startIndex, startIndex + numItems).map((object) => {
