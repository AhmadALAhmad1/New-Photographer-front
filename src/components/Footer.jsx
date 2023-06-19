// import React from "react";
// import ScrollUpButton from "react-scroll-up-button";
// import "../styles/Footer.css";
// import { BehanceIcon } from "./BehanceIcon";
// import { FacebookIcon } from "./FacebookIcon";
// import { InstagramIcon } from "./InstagramIcon";
// import { LinkdinIcon } from "./LinkdinIcon";
// import { TwitterIcon } from "./TwitterIcon";

// export const Footer = () => {
//   return (
//     <div className="footer" style={{ height: 70 }}
//     >
//       <p>
//         Copyright &copy; 2023 by Ahmad, Sarah, Fatima, Nour. All Rights Reserved.
//       </p>
//       <div className="icons">
//         <InstagramIcon />
//         <LinkdinIcon />
//         <TwitterIcon />
//         <BehanceIcon />
//         <FacebookIcon />
//       </div>
//       {/* <ScrollUpButton
//         className="scoll"
//         style={{ width: 40, height: 30 }}
//         ToggledStyle={{ right: 15 }}
//       /> */}
//     </div>
//   );
// };

// New Footer
import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaBehance, FaFacebook } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <p className="footer-text">
          Website developed by{" "}
          <a
            href="https://www.linkedin.com/in/mgo-yeghiaian/"
            target="_blank"
            rel="noopener noreferrer"
            className="developer-link"
          >
            Mgo Yeghiaian
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/ahmad-al-ahmad/"
            target="_blank"
            rel="noopener noreferrer"
            className="developer-link"
          >
            Ahmad el Ahmad
          </a>{" "}
          for Jay Khawand &copy; 2023. All Rights Reserved.
        </p>
        <div className="icons">
          <IconContext.Provider value={{ size: "1.5rem" }}>
            <Link to="https://www.instagram.com/jaykhawand" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaInstagram />
            </Link>
            <Link to="https://www.linkedin.com/in/jay-khawand-83531b137" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaLinkedin />
            </Link>
            <Link to="https://twitter.com/JayKhawand" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaTwitter />
            </Link>
            <Link to="https://www.behance.net/jaykhawand_" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaBehance />
            </Link>
            <Link to="https://www.facebook.com/JayKhawand" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaFacebook />
            </Link>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

