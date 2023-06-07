import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
export const InstagramIcon = () => {
  return (
    <div>
      <a href="https://www.instagram.com/jaykhawand/?hl=en">
        <FontAwesomeIcon
          icon={faInstagram}
          size="lg"
          className="instagram-icon"
        />
      </a>
    </div>
  );
};
