import React from "react";
import "../styles/NotFound.css";
import AboutHeader from "../components/About/AboutHeader/AboutHeader";
export const NotFound = () => {
  return (
    <>
      <AboutHeader />
      <div className="not-found">Sorry Page Not Found</div>
    </>
  );
};
