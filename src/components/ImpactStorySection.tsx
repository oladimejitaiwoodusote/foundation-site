import "../styles/ImpactStorySection.css";
import FortunePhoto from "../assets/Fortune.jpeg"; 

function ImpactStorySection() {
  return (
    <section className="impact-story-section">
      <h2>Impact Stories</h2>

      <div className="impact-story">
        <div className="story-image">
          <img src={FortunePhoto} alt="Fortune Maduabuchi" />
        </div>
        <div className="story-content">
          <h3>Fortune's Story</h3>
          <p>
            When Fortune Maduabuchi was brought to St. Anthony's Hospital, Aba, as a gunshot victim with mounting medical bills and an uncertain future, our family foundation stepped in to cover his hospital expenses—a one-time act of compassion that gave him a second chance at life.
          </p>
          <p>
            Today, Fortune proudly stands in his nursing uniform, not as a patient, but as a student of the Nursing Department at St. Anthony's College of Nursing Sciences. On Wednesday, 5th February 2025, he was celebrated at his Capping and Matriculation Ceremony, marking his formal entry into the nursing profession.
          </p>
          <p>
            Fortune’s journey from a hospital bed to a nursing student is a powerful reminder of why we do what we do. When communities invest in people at their most vulnerable, the return is immeasurable—not just for the individual, but for every future patient Fortune will one day care for.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ImpactStorySection;