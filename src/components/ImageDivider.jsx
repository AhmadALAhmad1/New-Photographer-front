// import React, { useState } from "react";
// import { SideImage } from "./SideImage";

// export const ImageDivider = ({ img1, img2 }) => {
//   const [percentage, setPercentage] = useState(50);

//   const handleMouseMove = (e) => {
//     setPercentage((e.clientX / window.innerWidth) * 100);
//   };

//   if (!img1 || !img2) return null;

//   return (

//     <section className="section-4">
//       {/* <div
//         className="image-container"
//         style={{
//           width: `${percentage}%`,
//           backgroundImage: `url(http://localhost:5000/${img1})`,
//         }}
//       ></div> */}
//       {/* <SideImage
//         key={img1.id}
//         className="section-4-img-1"
//         image={img1.image}
//         width={img1.width}
//         height={img1.height}
//         imageWidth={`${percentage}%`}
//         containerWidth={'60%'}
//       /> */}
//       {/* <SideImage
//         key={img2.id}
//         className="section-4-img-2"
//         image={img2.image}
//         width={img2.width}
//         height={img2.height}
//         // containerWidth={`${100 - percentage}%`}
//         imageWidth={'60%'}
//       /> */}
//       {/* <div
//         className="image-container"
//         style={{
//           width: `${100 - percentage}%`,
//           backgroundImage: `url(http://localhost:5000/${img2})`,
//         }}
//       ></div> */}
//       {/* <div
//         className="divider-line"
//         style={{ left: `${percentage}%` }}
//         onMouseDown={() => {
//           document.addEventListener("mousemove", handleMouseMove);
//         }}
//         onMouseUp={() => {
//           document.removeEventListener("mousemove", handleMouseMove);
//         }}
//       ></div> */}
//     </section>
//   );
// };

import React, { useState } from "react";
import { SideImage } from "./SideImage";

export const ImageDivider = ({
  image1,
  image2,
  containerWidth = "100%",
  dividerColor = "red",
}) => {
  const [dividerPosition, setDividerPosition] = useState(50); // Start at 50% position

  if (!image1 || !image2) return null;

  const handleDividerDrag = (e) => {
    const containerWidth = e.target.parentNode.offsetWidth;
    const clickPosition = e.clientX - e.target.parentNode.offsetLeft;
    const newPosition = Math.round((clickPosition / containerWidth) * 100);
    setDividerPosition(newPosition);
  };

  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <div style={{ position: "absolute" }}>
        <SideImage
          key={image1.id}
          className="section-4-img-1"
          image={image1.image}
          width={image1.width}
          height={image1.height}
          containerWidth={"60%"}
        />
      </div>
      <div
        style={{
          position: "relative",
          width: `${dividerPosition}%`,
          height: "100%",
          overflow: "hidden",
        }}
      >
        {/* <img
          src={`data:image/jpeg;base64,${image2}`}
          alt="Image2"
          style={{
            width: "100%",
            height: "auto",
            marginLeft: `-${dividerPosition}%`,
          }}
        /> */}
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${dividerPosition}%`,
          width: "2px",
          backgroundColor: dividerColor,
          cursor: "col-resize",
        }}
        draggable="true"
        onDrag={handleDividerDrag}
      ></div>
    </div>
  );
};
