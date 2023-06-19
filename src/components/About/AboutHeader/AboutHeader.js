import React from "react";
import { Header } from "../../Header";

function AboutHeader({ backgroundImage, minHeight = "400px" }) {
  const style = {
    backgroundColor: "black",
    backgroundImage: ` url(${backgroundImage})`,
    minHeight,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

  };

  return (
    <div>
      <div className="about--header-parallax" style={style}>
        <Header />
      </div>
    </div>
  );
}

export default AboutHeader;
