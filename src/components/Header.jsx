import React from "react";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const navigationStyle = ({ isActive }) => ({
  color: isActive ? "gray" : "white",
  textDecoration: "none",
});

export const Header = () => {
  const adminLoggedIn = localStorage.getItem("role") === "admin";
  console.log(localStorage.getItem("role"));
  const userLoggedIn = localStorage.getItem("role") !== null;
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/users/logout");
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // const adminLoggedIn = true;
  const homePath = adminLoggedIn ? "/dashboard" : "";
  const homePath1 = adminLoggedIn ? "/dashboard/userinfo" : "";
  const homePath2 = adminLoggedIn ? "/dashboard/orders" : "";


  return (
    <div className="header">
      <NavLink to={`${homePath}/`} style={navigationStyle}>
        <img className="logo" src={logo} alt="JAY KHAWAND" />
      </NavLink>
      <div className="navigation-bar">
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
              <LogoutOutlinedIcon />
            </button>
          ) : (
            <NavLink to={`/login`} className="header-login-btn">
              <LoginIcon />
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
