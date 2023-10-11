import { Link } from "react-router-dom";
import "./button.scss";

function Button({ label }) {
  return (
    <Link to="/sign-up">
      <p className="signup-btn">{label}</p>
    </Link>
  );
}

export default Button;
