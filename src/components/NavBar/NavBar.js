import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import closeMenuIcon from "../../assets/icons/close-menu-icon.svg";
import logo from "../../assets/ilustrations/Transhumans - Pilot.png";
import "./nav-bar.scss";

const NavBar = () => {
  return (
    // Navigation bar for mobile screens
    <nav className="navbar--mobile">
      {/* ilustration & logo */}
      <div className="navbar__logo">
        <img src={logo} alt="Vintage Culture logo" />
        <Link to="/"> <h1>Vintage Culture</h1> </Link>
      </div>

      {/* Slide menu for mobile screens - Burger */}
      <Menu right width={"100%"} customCrossIcon={<img src={closeMenuIcon} />}>
        <h1>Vintage Culture</h1>

        {/* Navigation links */}
        <ul>
          <Link to="/about"> <li>About</li> </Link>
          <Link to="/staff"> <li>Staff</li> </Link>
          <Link to="/repair"> <li>Repair</li> </Link>
          <Link to="/categories"> <li>Clothing</li></Link>
        </ul>

        {/* Sign In and Sign Up btns */}
        <Link to="/signup">
          <p className="signup-btn">Sign Up</p>
        </Link>
        <Link to="/signin">
          <p className="signin-btn">Sign In</p>
        </Link>
      </Menu>
    </nav>
  );
};

export default NavBar;
