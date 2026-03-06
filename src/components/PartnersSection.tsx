import interkel from "../assets/partners/Interkel.png";
import diggit from "../assets/partners/Diggit.png";
import microsoft from "../assets/partners/Microsoft.png";
import fidelity from "../assets/partners/Fidelity.png";
import sparkle from "../assets/partners/Sparkle.png";
import "../styles/PartnersSection.css";

function PartnersSection() {
  return (
    <section className="partners-section">
      <div className="partners-inner">

        <h2 className="partners-title">Our Partners</h2>

        <div className="partners-grid">
          <img src={interkel} alt="Interkel" />
          <img src={diggit} alt="Diggit" />
          <img src={microsoft} alt="Microsoft" />
          <img src={fidelity} alt="Fidelity" />
          <img src={sparkle} alt="Sparkle" />
        </div>

        <div className="partners-divider" />

      </div>
    </section>
  );
}

export default PartnersSection;