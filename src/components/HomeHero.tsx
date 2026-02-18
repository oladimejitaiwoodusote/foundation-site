import "../styles/HomeHero.css";
import { Link } from "react-router-dom";
import heroVideo from "../assets/Video 1.mp4";

function HomeHero() {
    return (
      <section id="page-hero" className="hero-section">
        <div className="hero-container">
          {/* LEFT SIDE — Text */}
          <div className="hero-text">
            <h1 className="hero-title">
              <span>Building a Legacy</span>
              <span>of Service and</span>
              <span>Empowerment</span>
            </h1>
  
            <p className="hero-description">
              Supporting vulnerable communities through timely access to food,
              health, and education. Building dignity, opportunity, and lasting impact.
            </p>
  
            <div className="hero-buttons">
                <Link to="/focus" className="hero-btn">
                    Our Work
                </Link>

                <button className="hero-btn">
                    Partner With Us
                </button>
            </div>
            <div className="hero-divider" />
          </div>
  
          {/* RIGHT SIDE — Video */}
          <div className="hero-video">
            <video
              width="870"
              height="450"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    );
  }

export default HomeHero