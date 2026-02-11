import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/SiteChrome.css";

export default function SiteChrome() {
  const [mode, setMode] = useState<"hero" | "scrolled">("hero");

  useEffect(() => {
    const hero = document.getElementById("home-hero");
    if (!hero) return;
  
    const handleScroll = () => {
      const rect = hero.getBoundingClientRect();
  
      // When hero top reaches navbar bottom (96px)
      if (rect.top <= 96) {
        setMode("scrolled");
      } else {
        setMode("hero");
      }
    };
  
    handleScroll(); // run once on mount
    window.addEventListener("scroll", handleScroll);
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  

  return (
    <div className={`site-chrome ${mode}`}>
      {/* Vertical line */}
      <div className="vertical-rule" />

      {/* Horizontal line initially above navbar */}
      <div className="horizontal-rule above-navbar" />

      {/* Navbar */}
      <header className="nav-frame">
      <Link to="/" className="foundation-name">
        <span>The Nnamdi</span>
        <span>Agbim Family Foundation</span>
      </Link>


      <nav className="nav-links">
        <NavLink to="/focus">Focus Areas ▼</NavLink>
        <NavLink to="/funding">Funding & Partnerships ▼</NavLink>
        <NavLink to="/impact">Impact ▼</NavLink>
        <NavLink to="/about">About Us ▼</NavLink>
      </nav>

      </header>

      {/* Horizontal line that appears below navbar when scrolled */}
      <div className="horizontal-rule below-navbar" />
    </div>
  );
}
