import "../styles/HomeHero.css";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { FiPlay, FiPause, FiVolume2, FiVolumeX } from "react-icons/fi";
import heroVideo from "../assets/Video 1.mp4";

function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section id="page-hero" className="hero-section">
      <div className="hero-container">

        {/* LEFT SIDE */}
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
          </div>

          <div className="hero-divider" />
        </div>

        {/* RIGHT SIDE — Video */}
        <div className="hero-video">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="hero-video-element"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          {/* ICON CONTROLS */}
          <div className="video-controls">
            <button onClick={togglePlay} aria-label="Toggle Play">
              {isPlaying ? <FiPause /> : <FiPlay />}
            </button>

            <button onClick={toggleMute} aria-label="Toggle Mute">
              {isMuted ? <FiVolumeX /> : <FiVolume2 />}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HomeHero;
