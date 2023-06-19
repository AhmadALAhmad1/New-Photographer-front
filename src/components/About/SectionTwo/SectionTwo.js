import React, { useState } from "react";
import CardSectionTwo from "./CardSectionTwo";
import data from "./data";
import "./SectionTwo.css";
import { Button } from "@mui/material";

const SectionTwo = () => {
  const numItems = 3;
  const [startIndex, setStartIndex] = useState(0);
  const filteredCards = data.filter((object) => object.section === "2");
  const cards = filteredCards
    .slice(startIndex, startIndex + numItems)
    .map((object) => (
      <CardSectionTwo
        title={object.title}
        description={object.description}
        key={object.id}
        image={object.image}
      />
    ));

  const handlePrevClick = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, filteredCards.length - numItems)
    );
  };

  const prevButtonDisabled = startIndex === 0;
  const nextButtonDisabled = startIndex + numItems >= filteredCards.length;

  return (
    <div className="About-Section2-Body">
      <div className="about--section-two-container">
        <h1>Professional Team</h1>
        <hr className="horizontal" />
        <p>Quisque sed tellus nullam biben the volutpat dignissim pretium.</p>
        <div className="test">
          <Button
            disabled={prevButtonDisabled}
            className="carousel-control-prev"
            variant="contained"
            color="primary"
            onClick={handlePrevClick}
          >
            {"«"}
          </Button>

          <div className="team-cards">{cards}</div>

          <Button
            disabled={nextButtonDisabled}
            className="carousel-control-next"
            variant="contained"
            color="primary"
            onClick={handleNextClick}
          >
            {"»"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
