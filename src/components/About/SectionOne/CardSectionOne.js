import React from "react";
import "./SectionOne.css";
import { sectionOneData } from './Data';
import { AiOutlineCheckCircle } from 'react-icons/ai';

function CardSectionOne(props) {
  return (
    <div className="about--section-one-container">
      <div className="About-Section1-L">
        <h2 className="about--section-one-title">{sectionOneData.title}</h2>
        <h4 className="about--section-one-description">{sectionOneData.description}</h4>
        <ul className="ul-section-one">
          {sectionOneData.listItems.map((item, index) => (
            <li className="li-section-one" key={index}>
              <AiOutlineCheckCircle className="check-icon" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="Image-Container">
        <img
          className="About-Section1-R"
          src={sectionOneData.imagePath}
          alt="section-one-background"
        />
      </div>
    </div>
  );
}

export default CardSectionOne;
