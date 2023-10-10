import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import closeMenuIcon from "../../assets/icons/close-menu-icon.svg";
import "./nav-bar.scss";

const NavBar = () => {
  const showSettings = (event) => {
    event.preventDefault();
  };

  return (
    // Hamburger menu for mobile screens
    <nav className="navbar--mobile">
      <h1>Vintage Culture</h1>
      
      <Menu right width={"100%"} customCrossIcon={<img src={closeMenuIcon} />}>
        <h1>Vintage Culture</h1>

        <ul>
          <Link to="/about"> <li>About</li> </Link>
          <Link to="/staff"> <li>Staff</li> </Link>
          <Link to="/repair"> <li>Repair</li> </Link>
          <Link to="/categories"> <li>Clothing</li> </Link>
        </ul>
        
        <Link to="/signup"> <p className="signup-btn">Sign Up</p></Link>
        <Link to="/signin"> <p className="signin-btn">Sign In</p> </Link> 
      </Menu>
    </nav>
  );
};

export default NavBar;
