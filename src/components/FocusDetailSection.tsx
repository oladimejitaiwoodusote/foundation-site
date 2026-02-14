import "../styles/FocusDetailSection.css";

interface FocusDetailSectionProps {
  title: string;
  image: string;
  objective: string;
  focusAreas: string[];
  initiatives: string[];
  reverse?: boolean;
}

function FocusDetailSection({
  title,
  image,
  objective,
  focusAreas,
  initiatives,
  reverse = false,
}: FocusDetailSectionProps) {
  return (
    <section className="focus-detail">
      <div
        className={`focus-detail-inner ${
          reverse ? "focus-detail-reverse" : ""
        }`}
      >
        <div className="focus-detail-left">
          <h2 className="focus-detail-title">{title}</h2>
          <h4 className="focus-mini-header">Objective</h4>
          <p className="focus-objective-text">{objective}</p>

          <h4 className="focus-mini-header">Focus Areas</h4>
          <ul className="focus-list">
            {focusAreas.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h4 className="focus-mini-header">Key Initiatives</h4>
          <ul className="focus-list">
            {initiatives.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        <div className="focus-title-divider" />

        </div>

        <div className="focus-detail-right">
          <img src={image} alt={title} />
        </div>
      </div>
    </section>
  );
}

export default FocusDetailSection;
