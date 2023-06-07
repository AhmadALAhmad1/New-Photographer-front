import React from "react";

export const SideImage = ({
  key,
  image,
  className,
  width,
  height,
  containerWidth = "100%",
}) => {
  if(!image) return null;
  return (
    <img
      key={key}
      src={`data:image/jpeg;base64,${image}`}
      alt="sideImage"
      className={className}
      style={{
        width: `calc(${containerWidth} - 0px)`,
        aspectRatio: width && height ? `${width}/${height}` : 'auto',
        height: "auto",
      }}
    />
  );
};
