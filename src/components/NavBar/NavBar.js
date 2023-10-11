import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import closeMenuIcon from "../../assets/icons/close-menu-icon.svg";
import logo from "../../assets/ilustrations/Transhumans - Pilot.png";
import "./nav-bar.scss";

const NavBar = () => {
  return (
    <nav>
      {/* Navigation bar for mobile screens */} 
      <section className="navbar--mobile"> 
        {/* ilustration & logo */}
        <div className="navbar__mobile-logo-container">
          <img src={logo} alt="Vintage Culture logo" />
          <div>
            <Link to="/"> <h1>Vintage Culture</h1> </Link>
          </div>
        </div>

        {/* Slide menu for mobile screens - Burger */}
        <Menu right width={"100%"} customCrossIcon={<img src={closeMenuIcon} />}>
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

          {/* Sign In and Sign Up btns */}
          <Link to="/signup">
            <p className="signup-btn">Sign Up</p>
          </Link>
          <Link to="/signin">
            <p className="signin-btn">Sign In</p>
          </Link>
        </Menu>
      </section>

      {/* Navigation bar for tablet and desktop screens */}
      <section className="navbar--tablet">
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
      </section>
    </nav>
  );
};

export default NavBar;
