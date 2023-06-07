import React, { useState, useEffect } from "react";
import axios from "axios";

const UserMenu = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUserInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="user-menu">
      <button className="user-menu-btn" onClick={handleMenuClick}>
        {userInfo ? userInfo.username : "User"}
      </button>
      {isMenuOpen && (
        <div className="user-menu-dropdown">
          <p>Username: {userInfo?.username}</p>
          <p>Email: {userInfo?.email}</p>
          <p>Role: {userInfo?.role}</p>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
