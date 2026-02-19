import { Link } from "react-router-dom";
import "../styles/Footer.css";
import FoundationLogo from "../assets/Foundation_Logo.jpg";
import { FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-frame">

        {/* Left — Logo */}
        <Link to="/" className="footer-logo">
          <img src={FoundationLogo} alt="Nnamdi Agbim Family Foundation Logo" />
        </Link>

        {/* Right Side */}
        <div className="footer-right">

          <div className="footer-contact">
            <h4>Connect With Us</h4>

            <p>
              Tel. <span className="contact-number" >(+234) 803-403-0533</span>
            </p>

            <p>
              WhatsApp. <span className="contact-number" >(+234) 802-548-407</span>
            </p>

            <div className="footer-social">
              <a 
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="instagram-icon" />
              </a>
            </div>
          </div>


          <p className="footer-copy">
            ©2026 The Nnamdi Agbim <br /> Family Foundation,<br />
            some rights reserved
          </p>
          <div className="footer-line" />

        </div>
      </div>
    </footer>
  );
}

export default Footer;
