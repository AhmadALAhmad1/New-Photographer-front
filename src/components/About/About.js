import React from "react";
import AboutHeader from "./AboutHeader/AboutHeader";
// import SectionOne from "./SectionOne/SectionOne";
// import SectionThree from "./SectionThree/SectionThree";
import SectionTwo from "./SectionTwo/SectionTwo";
import image from "../../images/ba.jpg";
import CardSectionOne from "./SectionOne/CardSectionOne";

function About() {
  return (
    <div>
      <AboutHeader backgroundImage={image} />
      <CardSectionOne />
      <SectionTwo />
      {/* <SectionThree /> */}
    </div>
  );
}

export default About;
