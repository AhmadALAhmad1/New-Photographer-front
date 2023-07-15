import React from "react";
// import Options from "./imageList/Options";

const GalleryDashboardCard = (props) => {
  return (
    <div className="pgallery-card-container">
      <div className="gallery-card">
        <div className="gallery-card" onClick={props.onClick}>
          <img
            className="pcardimg"
            style={{ width: "30rem" }}
            src={`data:image/jpeg;base64,${props.image}`}
            alt="no image"
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryDashboardCard;
