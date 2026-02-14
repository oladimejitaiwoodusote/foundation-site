import "../styles/FundingSection.css";

interface FundingSectionProps {
  title: string;
  categoryOneTitle: string;
  categoryOneItems: string[];
  categoryTwoTitle: string;
  categoryTwoItems: string[];
  categoryThreeTitle: string;
  categoryThreeItems: string[];
  reverse?: boolean;
}

function FundingSection({
  title,
  categoryOneTitle,
  categoryOneItems,
  categoryTwoTitle,
  categoryTwoItems,
  categoryThreeTitle,
  categoryThreeItems,
  reverse = false,
}: FundingSectionProps) {
  return (
    <section className="funding-section">
      <div className={`funding-inner ${reverse ? "reverse" : ""}`}>
        {/* LEFT SIDE */}
        <div className="funding-left">
          <h2 className="funding-title">{title}</h2>

          <h4>{categoryOneTitle}</h4>
          <ul>
            {categoryOneItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h4>{categoryTwoTitle}</h4>
          <ul>
            {categoryTwoItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h4>{categoryThreeTitle}</h4>
          <ul>
            {categoryThreeItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <div className="funding-divider" />
        </div>

        {/* RIGHT SIDE — Editorial Panel */}
        <div className="funding-right">
          <div className="editorial-panel">
            <div className="editorial-inner">
              <div className="editorial-symbol">&</div>

              <div className="editorial-title">
                <span>{title.split(" ")[0].toUpperCase()}</span>
                <span>{title.split(" ").slice(1).join(" ").toUpperCase()}</span>
              </div>

              <div className="editorial-lines" />

              <div className="editorial-values">
                {title === "Funding & Approach" ? (
                  <>
                    <span>Long-term stewardship</span>
                    <span>Multi-form contributions</span>
                    <span>Volunteer engagement</span>
                  </>
                ) : (
                  <>
                    <span>Strategic collaboration</span>
                    <span>Co-funded impact</span>
                    <span>Community alignment</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FundingSection;
