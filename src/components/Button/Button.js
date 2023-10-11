import { Link } from "react-router-dom";
import "./button.scss";

function Button({ label, currentPage }) {
  const classNames = "signup-btn " + currentPage;

  return (
    <Link to="/sign-up">
      <p className={classNames}>{label}</p>
    </Link>
  );
}

export default Button;
