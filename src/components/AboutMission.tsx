import "../styles/AboutMission.css";

function AboutMission() {
  return (
    <section className="mission-section">
        <div className="mission-inner">
            {/* LEFT */}
            <div className="mission-left">
            <h2>Mission Statement</h2>
            <p>
            To build a lasting legacy of service and empowerment by supporting marginalized and
            vulnerable communities, beginning with the family's kindred and bloodline (Naze & Nimo),
            through timely, relevant, and responsive access to food security, health, and education.We are
            committed to meeting needs at the right time and in the right way, creating measurable and
            long-term impact where our service fosters our values.
            </p>
            </div>

            {/* RIGHT — Document Panel */}
            <div className="mission-right">
            <div className="document-panel">
                <div className="document-symbol">✦</div>
                <div className="document-title">
                <span>MISSION</span>
                <span>STATEMENT</span>
                </div>
                <div className="document-lines" />
                <div className="document-values">
                <span>Empower Communities</span>
                <span>Drive Sustainability</span>
                <span>Create Opportunities</span>
                </div>
            </div>
            </div>
        </div>
    </section>

  )
}

export default AboutMission