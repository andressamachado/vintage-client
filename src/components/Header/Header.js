import {useState} from "react";
import { slide as Menu } from "react-burger-menu";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import closeMenuIcon from "../../assets/icons/close-menu-icon.svg";
import logo from "../../assets/ilustrations/Transhumans - Pilot.png";
import "./header.scss";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const onSignUpClick = () => {
    document.querySelector("#react-burger-cross-btn").click()
    navigate("/sign-up");
  }


  return (
    <header>
      {/* Navigation bar for mobile screens */} 
      <nav className="navbar--mobile"> 
        {/* ilustration & logo */}
        <div className="navbar__mobile-logo-container">
          <img src={logo} alt="Vintage Culture logo" />
          <div>
            <Link to="/"> <h1>Vintage Culture</h1> </Link>
          </div>
        </div>

        {/* Slide menu for mobile screens - Burger */}
        <Menu isOpen={isOpen} right width={"100%"} customCrossIcon={<img src={closeMenuIcon} />}>
          <div>
            <h1>Vintage Culture</h1>
          </div>

          {/* Navigation links */}
          <ul>
            <Link to="/about"> <li>About</li> </Link>
            <Link to="/staff"> <li>Staff</li> </Link>
            <Link to="/repair"> <li>Repair</li> </Link>
            <Link to="/categories"> <li>Clothing</li></Link>
          </ul>

          {/* Sign Up and Sign In btns */}
          <div>
            <Button label="Sign Up" currentPage="mobile-slide-menu" onClick={onSignUpClick}/>
          </div>
          <Link to="/signin">
            <p className="signin-btn">Sign In</p>
          </Link>
        </Menu>
      </nav>

      {/* Navigation bar for tablet and desktop screens */}
      <nav className="navbar--tablet">
        {/* ilustration*/}
        <div className="navbar__left-container">
          <img src={logo} alt="Vintage Culture logo" />
        </div>

        {/* logo, navigational links, sign in and sign up */}
        <div className="navbar__right-container">
          {/* logo */}
          <div className="navbar__top-container">
            <Link to="/"> <h1>Vintage Culture</h1> </Link>
          </div>

          {/* navigational links, sign in and sign up */}
          <div className="navbar__bottom-container">
            {/* Navigational links */}
            <ul className="navbar__links">
              <li><Link to="/about"> About </Link></li>
              <li><Link to="/staff"> Staff </Link></li> 
              <li><Link to="/repair"> Repair </Link></li>
              <li><Link to="/categories"> Clothing</Link></li>
            </ul>

            {/* Sign In and Sign Up btns */}
            <Link to="/signup">
              <p className="navbar__signup-btn">Sign Up</p>
            </Link>
            <Link to="/signin">
              <p className="navbar__signin-btn">Sign In</p>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
