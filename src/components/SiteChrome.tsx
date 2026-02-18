import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/SiteChrome.css";
import FoundationLogo from "../assets/Foundation_Logo.jpg";


export default function SiteChrome() {
  const [mode, setMode] = useState<"hero" | "scrolled" | "hidden">("hero");

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("page-hero");
  
      // If page has no hero (future pages), default to scrolled
      if (!hero) {
        setMode("scrolled");
        return;
      }
  
      const rect = hero.getBoundingClientRect();
  
      if (rect.bottom <= 0) {
        setMode("hidden");
      } else if (rect.top <= 96) {
        setMode("scrolled");
      } else {
        setMode("hero");
      }
    };
  
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <div className={`site-chrome ${mode}`}>
      <div className="vertical-rule" />
      <div className="horizontal-rule above-navbar" />

      <header className="nav-frame">
        <Link to="/" className="foundation-logo">
          <img src={FoundationLogo} alt="Nnamdi Agbim Family Foundation Logo" />
        </Link>

        <nav className="nav-links">
          <NavLink to="/focus">Focus Areas ▼</NavLink>
          <NavLink to="/funding">Funding & Partnerships ▼</NavLink>
          <NavLink to="/impact">Impact ▼</NavLink>
          <NavLink to="/about">About Us ▼</NavLink>
        </nav>
      </header>

      <div className="horizontal-rule below-navbar" />
    </div>
  );
}
