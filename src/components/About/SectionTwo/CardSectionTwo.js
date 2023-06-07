import React from "react";
import "./SectionTwo.css";

function CardSectionTwo(props) {
  return (
    <div className="about--section-two-card-container">
      <img
        src={`data:image/jpeg;base64,${props.image}`}
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
