import React from "react";
import AboutHeader from "./AboutHeader/AboutHeader";
import SectionOne from "./SectionOne/SectionOne";
import SectionThree from "./SectionThree/SectionThree";
import SectionTwo from "./SectionTwo/SectionTwo";
import ba from "./AboutHeader/ba.jpg";

function About() {
  return (
    <div>
      <AboutHeader backgroundImage={ba} />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}

export default About;
