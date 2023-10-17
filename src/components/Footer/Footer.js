import { Link } from "react-router-dom";
import githubLogo from "../../assets/icons/github-icon.png";
import linedinLogo from "../../assets/icons/linkedin-icon.png";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top-left-container">
        <div className="footer__logo">
          <Link to="/">
            <h1> Vintage Culture </h1>
            <p> For a better future </p>
          </Link>
        </div>
        <iframe
          width="75%"
          height="40%"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1187663677&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      </div>

      <div className="footer__bottom-right-container">
        <a href="https://github.com/andressamachado/vintage-client">
          <img src={githubLogo} alt="GitHub logo" />
        </a>
        <a href="https://www.linkedin.com/in/machado-andressa/">
          <img src={linedinLogo} alt="LinkedIn logo" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
