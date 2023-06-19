import React, { useState } from "react";
import logo from "../images/logo.png";
import { NavLink, Link } from "react-router-dom";
import "../styles/Header.css";

import { FaInstagram, FaLinkedin, FaTwitter, FaBehance, FaFacebook, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
//import { Link } from "react-router-dom";
// import LogoutOutlined from "@mui/icons-material/LogoutOutlined";
// import FaSignInAlt from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";


import { FaBars, FaTimes } from "react-icons/fa";
const navigationStyle = ({ isActive }) => ({
  color: isActive ? "gray" : "white",
  textDecoration: "none",
});

export const Header = () => {
  const adminLoggedIn = localStorage.getItem("role") === "admin";
  console.log(localStorage.getItem("role"));
  const userLoggedIn = localStorage.getItem("role") !== null;
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await axios.post(`https://jayy-pos5.onrender.com/api/users/logout`);
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const homePath = adminLoggedIn ? "/dashboard" : "";
  const homePath1 = adminLoggedIn ? "/dashboard/userinfo" : "";
  const homePath2 = adminLoggedIn ? "/dashboard/orders" : "";

  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <nav className="navigation-bar">
        <NavLink to={`${homePath}/gallery`} style={navigationStyle}>
          Gallery
        </NavLink>
        <NavLink to={`${homePath}/services`} style={navigationStyle}>
          Services
        </NavLink>
        <NavLink to={`${homePath}/shop`} style={navigationStyle}>
          Shop
        </NavLink>
        <NavLink to={`${homePath}/about`} style={navigationStyle}>
          About
        </NavLink>
        <NavLink to={`${homePath}/contact`} style={navigationStyle}>
          Contact
        </NavLink>
        {adminLoggedIn && (
          <>
            <NavLink to={`${homePath1}`} style={navigationStyle}>
              UserInfo
            </NavLink>
            <NavLink to={`${homePath2}`} style={navigationStyle}>
              Orders
            </NavLink>
          </>
        )}
        <div>
          {userLoggedIn ? (
            <button onClick={handleLogout} className="logout-btn">
              <FaSignOutAlt />
            </button>
          ) : (
            <NavLink to={`/login`} className="header-login-btn">
              <FaSignInAlt />
            </NavLink>
          )}
        </div>
      </nav>

      <div className="burger-menu" style={{ transition: "0.5s" }}>
        <div
          className="burger-icon"
          onClick={() => {
            if (isMenuOpen) {
              setMenuOpen(false);
            } else {
              setMenuOpen(true);
            }
          }}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`burger-menu-items ${isMenuOpen ? "active" : ""}`}>
          <NavLink to={`${homePath}/gallery`} style={navigationStyle}>
            Gallery
          </NavLink>
          <NavLink to={`${homePath}/services`} style={navigationStyle}>
            Services
          </NavLink>
          <NavLink to={`${homePath}/shop`} style={navigationStyle}>
            Shop
          </NavLink>
          <NavLink to={`${homePath}/about`} style={navigationStyle}>
            About
          </NavLink>
          <NavLink to={`${homePath}/contact`} style={navigationStyle}>
            Contact
          </NavLink>
          {adminLoggedIn && (
            <>
              <NavLink to={`${homePath1}`} style={navigationStyle}>
                UserInfo
              </NavLink>
              <NavLink to={`${homePath2}`} style={navigationStyle}>
                Orders
              </NavLink>
            </>
          )}
          {userLoggedIn ? (
            <button onClick={handleLogout} className="logout-btn">
              <FaSignOutAlt />
            </button>
          ) : (
            <NavLink to={`/login`} className="header-login-btn">
              <FaSignInAlt />
            </NavLink>
          )}
          <div className="icons-HEADER">
            <IconContext.Provider value={{ size: "1.5rem" }}>
              <Link to="https://www.instagram.com/jaykhawand" target="_blank" rel="noopener noreferrer" className="icon-link-H ">
                <FaInstagram />
              </Link>
              <Link to="https://www.linkedin.com/in/jay-khawand-83531b137" target="_blank" rel="noopener noreferrer" className="icon-link-H">
                <FaLinkedin />
              </Link>
              <Link to="https://twitter.com/JayKhawand" target="_blank" rel="noopener noreferrer" className="icon-link-H">
                <FaTwitter />
              </Link>
              <Link to="https://www.behance.net/jaykhawand_" target="_blank" rel="noopener noreferrer" className="icon-link-H">
                <FaBehance />
              </Link>
              <Link to="https://www.facebook.com/JayKhawand" target="_blank" rel="noopener noreferrer" className="icon-link-H">
                <FaFacebook />
              </Link>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
