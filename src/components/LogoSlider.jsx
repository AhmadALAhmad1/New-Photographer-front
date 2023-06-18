import "./LogoSlider.scss";
import React, { useEffect } from "react";
import brand1 from "../images/brand-1 (1).png";
import brand2 from "../images/brand-2.png"
import brand3 from "../images/brand-3.png"
import brand4 from "../images/brand-4.png"
// Rest of your code

function LogoSlider() {

  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
      "--marquee-elements-displayed",
    );
    const marqueeContent = document.querySelector("ul.marquee-content");

    root.style.setProperty(
      "--marquee-elements",
      marqueeContent.children.length,
    );

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  }, []);

  return (
    <div className="marquee">
      <ul className="marquee-content">
        <li>
          <i>
            <img src={brand1} />
          </i>
        </li>
        <li>
          <i>
            <img src={brand2} />
          </i>
        </li>
        <li>
          <i>
            <img src={brand3} />
          </i>
        </li>
        <li>
          <i>
            <img src={brand4} />
          </i>
        </li>
      
      </ul>
    </div>
  );
}

export default LogoSlider;
