import "../styles/HomeProof.css";
import impactLetter from "../assets/Impact Letter.pdf";


function HomeProof() {
  return (
    <section className="proof-section">
      <div className="proof-container">
        {/* Section Header */}
        <h2 className="proof-header">Proof of Impact</h2>
        <div className="proof-divider" />

        {/* Letter Preview */}
        <div className="proof-preview">
            <div className="proof-box">
                <p>
                    "Your generous donations enabled our cancer awareness,
                    screening and research efforts… this year's walk against cancer
                    was very successful."
                </p>
                <p className="proof-signature">
                    — Dr. Modupe Elebute-Odunsi<br/>
                    Founder, Marcelle Ruth Foundation
                </p>
            </div>
        </div>

        {/* Button */}
        <a href={impactLetter} className="proof-btn" target="_blank" rel="noopener noreferrer">
            Read Full Letter
        </a>
      </div>
    </section>
  );
}

export default HomeProof;
