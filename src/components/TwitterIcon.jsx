import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const TwitterIcon = () => {
  return (
    <div>
      <a href="https://twitter.com/JayKhawand">
        <FontAwesomeIcon icon={faTwitter} size="lg" className="twitter-icon" />
      </a>
    </div>
  );
};
