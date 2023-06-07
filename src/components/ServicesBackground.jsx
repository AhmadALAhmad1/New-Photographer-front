import React from "react";
import backgroundServices from "../images/ba.jpg";
import { Parallax } from "react-parallax";
import icon1 from "../images/icon-1.svg";
import icon2 from "../images/icon-2.svg";
import icon3 from "../images/icon-3.svg";
import icon4 from "../images/icon-4.svg";
import icon5 from "../images/icon-5.svg";
import icon6 from "../images/icon-6.svg";
import { ServicesFeature } from "../components/ServicesFeature";
import AboutHeader from "./About/AboutHeader/AboutHeader";
import ba from './About/AboutHeader/ba.jpg';

export const  ServicesBackground = () => {
  return (
    <div>
     <AboutHeader backgroundImage={ba}/>
        <div className="features" id="feature">
            <ServicesFeature
              imageSrc={icon1}
              title="Photography"
              text="Photography bibendum eros amet vacun the vulputate in the vitae miss."
            />
            <ServicesFeature
              imageSrc={icon2}
              title="Videography"
              text="Videography bibendum eros amen vacun the vulputate in the vitae miss."
            />
            <ServicesFeature
              imageSrc={icon3}
              title="Photo Retouching"
              text="Photo Retouching
            bibendum eros amet vacun the vulputate in the vitae miss."
            />
            <ServicesFeature
              imageSrc={icon4}
              title="Aerial Photography"
              text="Aerial Photography
            bibendum eros amet vacun the vulputate in the vitae miss."
            />
            <ServicesFeature
              imageSrc={icon5}
              title="Lightning Setup"
              text="Lightning Setup
            bibendum eros amet vacun the vulputate in the vitae miss."
            />
            <ServicesFeature
              imageSrc={icon6}
              title="Video Color Grading"
              text="Video Color Grading
            bibendum eros amet vacun the vulputate in the vitae miss."
            />
        </div>
      
    </div>
  );
};
