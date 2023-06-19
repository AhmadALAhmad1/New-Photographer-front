import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export const FacebookIcon = () => {
  return (
    <div>
      <a href="https://www.facebook.com/JayKhawand/">
        <FontAwesomeIcon
          icon={faFacebook}
          size="lg"
          className="facebook-icon"
        />
      </a>
    </div>
  );
};
