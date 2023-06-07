import React, { useEffect, useRef, useState } from "react";
import { FaRegUserCircle, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Login/Login.css";

const SignIn = ({ onSignupClick }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errMsg, setErrMsg] = useState("");

  const errRef = useRef();
  // const emailRef = useRef();

  const navigate = useNavigate();

  // useEffect(() => {
  //   emailRef.current.focus();
  // }, []);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  const fetchLogin = async () => {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    try {
      const res = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      console.log(res.data.role);

      setErrMsg("you are loggedin ");
      setTimeout(() => setErrMsg(""), 3000);

      if (res.data.role === "admin") {
        console.log(res);
        navigate("/dashboard", { replace: true });
      } else {
        navigate("/");
      }
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
        setTimeout(() => setErrMsg(""), 3000);
      } else if (err.response?.status === 404) {
        setErrMsg("Email not found");
        setTimeout(() => setErrMsg(""), 3000);
      } else if (err.response?.status === 400) {
        setErrMsg("incorrect password");
        setTimeout(() => setErrMsg(""), 3000);
      }
      // errRef.current.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchLogin({ email, password });
  };

  return (
    <div>
      <form className="form-subcontainer" onSubmit={handleSubmit}>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <div className="userEmail-title">
          <FaRegUserCircle className="icone-login" />
          <input
            type="text"
            autoComplete="off"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="userPassword-title">
          <FaLock className="icone-login" />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="login-button-container">
          <div onClick={() => onSignupClick()}>Don't hava an account?</div>

          <button className="login-btn">Login</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
