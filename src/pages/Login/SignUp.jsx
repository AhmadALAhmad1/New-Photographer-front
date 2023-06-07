import React, { useRef, useState } from "react";
import "../Login/SignUp.css"
import {
  FaRegUserCircle,
  FaLock,
  FaRegEnvelope,

} from "react-icons/fa";
import axios from "axios";

const SignUp = ({ onBackToLoginClick, setIsLogin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const errRef = useRef();
  const emailRef = useRef();

  const fetchRegister = async () => {
    try {
      await axios.post("http://localhost:5000/api/users/register", {
        username,
        email,
        password,
      });
      setErrMsg("Successfully registered! You can login now");
      setUsername("");
      setEmail("");
      setPassword("");
      setTimeout(() => setErrMsg(""), 3000);
      //  navigate("/login");
    } catch (error) {
      setErrMsg(error.response.data.message);
      setTimeout(() => setErrMsg(""), 3000);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if all fields are filled
    if (!username || !email || !password) {
      setErrMsg("Please fill out all required fields");
      setTimeout(() => setErrMsg(""), 3000);
      return;
    }
    
    // Check if email is valid
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      setErrMsg("Please enter a valid email address");
      setTimeout(() => setErrMsg(""), 3000);
      emailRef.current.focus();
      return;
    }
    
    // Check if password is at least 8 characters long
    if (password.length < 8) {
      setErrMsg("Password must be at least 8 characters long");
      setTimeout(() => setErrMsg(""), 3000);
      return;
    }
  
    fetchRegister();
  };
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
    // if (username && email && password && location && phoneNumber) {
    //   fetchRegister();
    //   onBackToLoginClick();
    // } else {
    //   console.log("Please fill out all required fields");
    // }
    // fetchRegister();
    // setIsLogin(true)
  // };

  return (
    <div>
      <form className="form-subcontainer-signup" onSubmit={handleSubmit}>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <div className="Email-signup">
          <FaRegUserCircle className="icone-login" />
          <input
            type="text"
            autoComplete="off"
            placeholder="username "
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div className="Email-signup">
          <FaRegEnvelope className="icone-login" />
          <input
            type="text"
            autoComplete="off"
            placeholder="Email"
            value={email}
            ref={emailRef}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="Password-signup">
          <FaLock className="icone-login" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <div className="signup-button-container">
          <div onClick={() => onBackToLoginClick()}>Login here!</div>

          <button className="signup-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
