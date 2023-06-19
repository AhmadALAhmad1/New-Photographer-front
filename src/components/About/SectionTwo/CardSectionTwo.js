import React from "react";
import "./SectionTwo.css";
import img from "./Card.png"
function CardSectionTwo(props) {
  return (
    <div className="about--section-two-card-container">
      <img
        src={img}
        alt="section-two-background"
      />
      <div className="overlay-text">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default CardSectionTwo;
