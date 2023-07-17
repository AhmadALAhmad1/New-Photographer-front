import React from "react";
import "./Skeleton.css";
const Skeleton = () => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="card__skeleton"></div>
          <div className="card__title"></div>
          <div className="card__description"></div>
        </div>{" "}
        <div className="card">
          <div className="card__skeleton"></div>
          <div className="card__title"></div>
          <div className="card__description"></div>
        </div>{" "}
        <div className="card">
          <div className="card__skeleton"></div>
          <div className="card__title"></div>
          <div className="card__description"></div>
        </div>
      </div>
    </>
  );
};

export default Skeleton;
