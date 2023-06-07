// // import { useState } from "react";
// // import { Navigate } from "react-router-dom";
// // import React from "react";
// // import '../styles/Button.css'

// // function Button() {
// //   const isLoggedIn = localStorage.getItem("token") !== null;

// //   const [shouldNavigate, setShouldNavigate] = useState(false);

// //   const handleButtonClick = () => {
// //     if (!isLoggedIn) {
// //       setShouldNavigate(false);
// //       window.location.href = "/login";
// //     } else {
// //       setShouldNavigate(true);
// //     }
// //   };

// //   return (
// //     <>
// //       <button className="btn-details" onClick={handleButtonClick}>Buy</button>
// //       {shouldNavigate && <Navigate to="/checkout" />}
// //     </>
// //   );
// // }

// // export default Button;
// import { useState } from "react";
// import { Navigate, useNavigate } from "react-router-dom";
// import React from "react";
// import "../styles/Button.css";

// function Button() {
//   const isLoggedIn = localStorage.getItem("token") !== null;
//   const navigate = useNavigate();

//   const [shouldNavigate, setShouldNavigate] = useState(false);

//   const handleButtonClick = () => {
//     if (!isLoggedIn) {
//       setShouldNavigate(false);
//       navigate("/login");
//     } else {
//       setShouldNavigate(true);
//     }
//   };

//   return (
//     <>
//       <button className="btn-details" onClick={handleButtonClick}>
//         Buy
//       </button>
//       {shouldNavigate && <Navigate to="/checkout" />}
//     </>
//   );
// }

// export default Button;
