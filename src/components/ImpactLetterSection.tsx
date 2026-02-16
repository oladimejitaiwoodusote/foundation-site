import "../styles/ImpactLetterSection.css";
import impactLetter from "../assets/Impact Letter.pdf";

function ImpactLetterSection() {
    return (
      <section className="letters-section">
        <div className="letters-inner">
          
          {/* LEFT */}
          <div className="letters-left">
            <h2>Letters of Appreciation</h2>
          </div>
  
          {/* RIGHT — Clickable Document Panel */}
          <a
            href={impactLetter}
            target="_blank"
            rel="noopener noreferrer"
            className="document-panel"
          >
            <div className="document-header">
              <span>Official Correspondence</span>
            </div>
  
            <div className="document-body">
              <div className="document-line" />
              <div className="document-line short" />
              <div className="document-line" />
              <div className="document-line" />
              <div className="document-line short" />
            </div>
  
            <div className="document-footer">
              View Letter →
            </div>
          </a>
  
        </div>
      </section>
    );
  }

export default ImpactLetterSection