import React, { useState } from "react";
import "../Login/Login.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import image from '../../images/camera2.png'


const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSignupClick = () => {
    setIsLogin(false);
  };

  const handleBackToLoginClick = () => {
    setIsLogin(true);
  };

  return (
    <div className="login-container">
      <div className="login-subContainer">
        <div>
          {/* <img src={CoverImage} className="coverImage-login" alt="coverimage" /> */}
        </div>
        <div className="form-container">
          <img src={image} alt="logo" className="logoImage-login" />
          {isLogin ? (
            <SignIn onSignupClick={handleSignupClick} />
          ) : (
            <SignUp
              onBackToLoginClick={handleBackToLoginClick}
              setIsLogin={setIsLogin}
            />
          )}
          {/* {isLogin ? <SocailMediaIcons /> : ""} */}
        </div>
      </div>
    </div>
  );
};

export default Login;
