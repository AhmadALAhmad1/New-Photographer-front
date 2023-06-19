import { faBehance } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const BehanceIcon = () => {
  return (
    <div>
      <a href="https://www.behance.net/jaykhawand_">
        <FontAwesomeIcon icon={faBehance} size="lg" className="behance-icon" />
      </a>
    </div>
  );
};
