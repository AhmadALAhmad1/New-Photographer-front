import React, { useRef, useState, useEffect } from "react";
import "./Register.scss";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import { BsFacebook } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitted, setISSubmitted] = useState(false);

  const errRef = useRef();
  const emailRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();

  const successToast = () => {
    toast.success("Successfully Logged In", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const successToastRegister = () => {
    toast.success("Successfully Registered", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  //////////////////////////////////////////////SIGN UP

  const fetchRegister = async () => {
    try {
      await axios.post(`https://jayy-pos5.onrender.com/api/users/register`, {
        username,
        email,
        password,
      });
      // setErrMsg("Successfully registered! You can login now");
      setISSubmitted(true);
      setUsername("");
      setEmail("");
      setPassword("");
      setTimeout(() => setErrMsg(""), 3000);
      successToastRegister();

      //  navigate("/login");
    } catch (error) {
      setErrMsg(error.response.data.message);
      setTimeout(() => setErrMsg(""), 3000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchRegister();
  };
  ////////////////////////////////////////////////////
  const handleSignUp = () => {
    const container = document.querySelector(".container-login");
    container.classList.add("sign-up-mode");
  };

  const handleSignIn = () => {
    const container = document.querySelector(".container-login");
    container.classList.remove("sign-up-mode");
  };

  //////////////////////////////////////////////////SIGN IN

  // const fetchLogin = async () => {
  //   axios
  //     .post("https://triplea.onrender.com/users/login", { email, password })
  //     .then((res) => {
  //       secureLocalStorage.setItem("token", res.data.token);

  //       secureLocalStorage.setItem("role", res.data.role);
  //       secureLocalStorage.setItem("loggedIn", true);
  //       setErrMsg("you are loggedin ");

  //       setTimeout(() => setErrMsg(""), 3000);
  //       navigate("/"); // Navigate to the home page
  //     })
  //     .catch((err) => {
  //       if (!err?.response) {
  //         setErrMsg("No Server Response");
  //         setTimeout(() => setErrMsg(""), 3000);
  //       } else if (err.response?.status === 404) {
  //         setErrMsg("Email not found");
  //         setTimeout(() => setErrMsg(""), 3000);
  //       } else if (err.response?.status === 400) {
  //         setErrMsg("incorrect password");
  //         setTimeout(() => setErrMsg(""), 3000);
  //       }
  //       // errRef.current.focus();
  //     });
  // };

  const fetchLogin = async () => {
    try {
      const res = await axios.post(`https://jayy-pos5.onrender.com/api/users/login`, {
        email,
        password,
      });
      secureLocalStorage.setItem("token", res.data.token);
      secureLocalStorage.setItem("role", res.data.role);
      secureLocalStorage.setItem("loggedIn", true);
      setErrMsg("You are logged in");
      setTimeout(() => setErrMsg(""), 3000);
      successToast();
      navigate("/");
      // Show the toastify success message
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
        setTimeout(() => setErrMsg(""), 3000);
      } else if (err.response?.status === 404) {
        setErrMsg("Email not found");
        setTimeout(() => setErrMsg(""), 3000);
      } else if (err.response?.status === 400) {
        setErrMsg("Incorrect password");
        setTimeout(() => setErrMsg(""), 3000);
      }
      // errRef.current.focus();
    }
  };

  const handleSubmitSign = async (e) => {
    e.preventDefault();
    await fetchLogin({ email, password });
  };

  useEffect(() => {
    if (isSubmitted) {
      handleSignIn(); // Automatically switch to sign-in mode
    }
  }, [isSubmitted]);

  return (
    <>

    <div className="container-login">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form" onSubmit={handleSubmitSign}>
            {errMsg && <p className="error-message">{errMsg}</p>}
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                autoComplete="off"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>

            <button type="submit" value="Login" className="btn-login solid">
              Sign In{" "}
            </button>

            <p className="social-text"></p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f">
                  <BsFacebook />
                </i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter">
                  <SlSocialTwitter />
                </i>
              </a>

              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in">
                  <FaLinkedinIn />
                </i>
              </a>
            </div>
          </form>

          {/* ///////////////////////sign-UP/////////////////////////// */}

          <form action="#" className="sign-up-form" onSubmit={handleSubmit}>
            {errMsg && <p className="error-message">{errMsg}</p>}
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            {isSubmitted && (
              <div className="Submitted-Successfully">
                Successfully registered! You can login now
              </div>
            )}
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                autoComplete="off"
                placeholder="Full Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="text"
                autoComplete="off"
                placeholder="Email"
                value={email}
                ref={emailRef}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <input type="submit" className="btn-login" value="Sign up" />
            <p className="social-text"></p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              inventore totam commodi illum velit.
            </p>
            <button
              className="btn-login transparent"
              id="sign-up-btn"
              onClick={handleSignUp}
            >
              Sign up
            </button>
          </div>
          <img
            // src="img/log.svg"
            className="image-login"
            alt=""
          />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque .
            </p>
            <button
              className="btn-login transparent"
              id="sign-in-btn"
              onClick={handleSignIn}
            >
              Sign in
            </button>
          </div>
          <img
            // src="img/register.svg"

            className="image-login"
            alt=""
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Register;
