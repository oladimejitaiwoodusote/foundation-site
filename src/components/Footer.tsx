import { Link } from "react-router-dom";
import "../styles/Footer.css";
import FoundationLogo from "../assets/Foundation_Logo.jpg";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-frame">

        {/* Foundation Name (left, same styling as navbar) */}
        <Link to="/" className="foundation-logo">
          <img src={FoundationLogo} alt="Nnamdi Agbim Family Foundation Logo" />
        </Link>

        {/* Right Side */}
        <div className="footer-right">
        <p className="footer-copy">
            ©2026 The Nnamdi Agbim Family Foundation,<br />
            some rights reserved
        </p>
          <div className="footer-line" />
        </div>

      </div>
    </footer>
  );
}

export default Footer;
