import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-frame">

        {/* Foundation Name (left, same styling as navbar) */}
        <Link to="/" className="foundation-name">
          <span>The Nnamdi</span>
          <span>Agbim Family Foundation</span>
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
