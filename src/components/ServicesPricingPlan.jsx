import React from "react";

export const ServicesPricingPlan = ({
  id,
  title,
  price,
  description,
  imageSrc
}) => {

  return (
    <div key={id} className="services-pricing-plan">
      <div className="services-pricing-plan-content">
        <div className="pricing-background">
          <img
            src={`data:image/jpeg;base64,${imageSrc}`}
            alt="imgSrc"
            className="img-pricing"
          />
        </div>
        <div className="pricing-body">
          <h2>{title}</h2>
          <h1>{price}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
