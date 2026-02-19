import Image3 from "../assets/Image 3.jpg";
import "../styles/FocusHero.css";

function FocusHero() {

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <section id="page-hero" className="focus-hero">
      <div className="focus-hero-inner">
        <div className="focus-left">
          <h1 className="focus-title">Our Work</h1>

          <div className="focus-buttons">
            <button 
              className="focus-btn"
              onClick={() => scrollToSection("food")}
            >
              Food & Nutrition
            </button>

            <button 
              className="focus-btn"
              onClick={() => scrollToSection("health")}
            >
              Health & Wellness
            </button>

            <button 
              className="focus-btn"
              onClick={() => scrollToSection("education")}
            >
              Education & Research
            </button>
          </div>

          <div className="focus-divider" />
        </div>

        <div className="focus-right">
          <img src={Image3} alt="Foundation work" />
        </div>
      </div>
    </section>
  );
}

export default FocusHero;
