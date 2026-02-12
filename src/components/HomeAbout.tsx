import "../styles/HomeAbout.css";
import { Link } from "react-router-dom";
import aboutImage from "../assets/Image 1.jpg";

function HomeAbout() {
  return (
    <section id="home-about" className="about-section">
      <div className="about-container">
        {/* LEFT SIDE — Text */}
        <div className="about-text">
          <h2 className="about-title">Who We Are</h2>

          <p className="about-description">
            The Nnamdi Agbim Family Foundation is a family-led philanthropic organization
            committed to food security, healthcare access, and education for underserved
            communities, beginning with its kindred and expanding outward through
            sustainable partnerships.
          </p>

          <div className="about-buttons">
            <Link to="/about" className="about-btn">
              Learn About The Foundation
            </Link>
          </div>
          <div className="about-divider" />
        </div>

        {/* RIGHT SIDE — Image */}
        <div className="about-image">
          <img src={aboutImage} alt="About the Foundation" />
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
