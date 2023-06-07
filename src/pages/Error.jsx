import "../styles/Error.scss";
import "../styles/Error.scss";
import { useLocation, Link } from "react-router-dom";

const Error = () => {

  return (
    <div className="flex-container">
      <div className="text-center">
        <h1>
          <span className="fade-in" id="digit1">
            4
          </span>
          <span className="fade-in" id="digit2">
            0
          </span>
          <span className="fade-in" id="digit3">
            1
          </span>
        </h1>
        <h3 className="fadeIn">Not Authorized</h3>
        <Link to="/" className="error-btn" type="button" name="button">
          Return To Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
