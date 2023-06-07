import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const LinkdinIcon = () => {
  return (
    <div>
      <a href="https://www.linkedin.com/in/jay-khawand-83531b137/?originalSubdomain=lb">
        <FontAwesomeIcon
          icon={faLinkedin}
          size="lg"
          className="linkedin-icon"
        />
      </a>
    </div>
  );
};
