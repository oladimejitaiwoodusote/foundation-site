import "../styles/ImpactLetterSection.css";
import impactLetter from "../assets/Impact Letter.pdf";
import impactLetter2 from "../assets/Impact Letter 2.pdf";

function ImpactLetterSection() {
  return (
    <section className="letters-section">
      <div className="letters-inner">

        {/* Section Heading */}
        <div className="letters-header">
          <h2>Letters of Appreciation</h2>
          <div className="letters-divider" />
        </div>

        {/* Document Grid */}
        <div className="documents-grid">

          {/* Letter 1 */}
          <a
            href={impactLetter}
            target="_blank"
            rel="noopener noreferrer"
            className="document-panel"
          >
            <div className="document-header">
              <span>Marcelle Ruth Foundation</span>
              <small>Official Correspondence</small>
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

          {/* Letter 2 */}
          <a
            href={impactLetter2}
            target="_blank"
            rel="noopener noreferrer"
            className="document-panel"
          >
            <div className="document-header">
              <span>Ezeke Kindred Assembly</span>
              <small>Letter of Appreciation</small>
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

      </div>
    </section>
  );
}

export default ImpactLetterSection;
