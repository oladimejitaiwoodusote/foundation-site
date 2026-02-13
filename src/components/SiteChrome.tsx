import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/SiteChrome.css";

export default function SiteChrome() {
  const [mode, setMode] = useState<"hero" | "scrolled" | "hidden">("hero");

  useEffect(() => {
    const hero = document.getElementById("home-hero");
    if (!hero) return;

    const handleScroll = () => {
      const rect = hero.getBoundingClientRect();

      // 1️⃣ Hero completely out of view
      if (rect.bottom <= 0) {
        setMode("hidden");
      }

      // 2️⃣ Hero touching navbar
      else if (rect.top <= 96) {
        setMode("scrolled");
      }

      // 3️⃣ Top of page
      else {
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

      <div className="horizontal-rule below-navbar" />
    </div>
  );
}
