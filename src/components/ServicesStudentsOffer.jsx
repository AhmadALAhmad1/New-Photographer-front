import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const ServicesStudentsOffer = ({ title, description, icon }) => {
  return (
    <div className="services-student-offer">
      <div className="offer-body">
        {icon && <FontAwesomeIcon icon={icon} className="icon-services" id="icons"/>}
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
