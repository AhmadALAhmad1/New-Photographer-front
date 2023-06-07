import React from "react";
import ScrollUpButton from "react-scroll-up-button";
import "../styles/Footer.css";
import { BehanceIcon } from "./BehanceIcon";
import { FacebookIcon } from "./FacebookIcon";
import { InstagramIcon } from "./InstagramIcon";
import { LinkdinIcon } from "./LinkdinIcon";
import { TwitterIcon } from "./TwitterIcon";

export const Footer = () => {
  return (
    <div className="footer" style={{height: 70 }}
    >
      <p>
        Copyright &copy; 2023 by Ahmad, Sarah, Fatima, Nour. All Rights Reserved.
      </p>
      <div className="icons">
        <InstagramIcon />
        <LinkdinIcon />
        <TwitterIcon />
        <BehanceIcon />
        <FacebookIcon />
      </div>
      <ScrollUpButton
        className="scoll"
        style={{ width: 40, height: 30 }}
        ToggledStyle={{ right: 15 }}
      />
    </div>
  );
};
