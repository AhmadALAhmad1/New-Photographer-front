import React from "react";

export const ServicesFeature = ({ imageSrc, title, text }) => {
  return (
    <div className="feature-item">
      <img src={imageSrc} alt="featureImage" className="icon-services" />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};