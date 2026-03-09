import "../styles/HealthImpactMini.css";
import FortunePhoto from "../assets/Fortune.jpeg"; 
import { Link } from "react-router-dom";

function HealthImpactMini() {
  return (
    <section className="health-impact-mini">
      <h3>Real Impact</h3>

      <div className="mini-story">
        <div className="mini-image">
          <img src={FortunePhoto} alt="Fortune Maduabuchi" />
        </div>
        <div className="mini-content">
          <p>
            Fortune Maduabuchi was brought to St. Anthony's Hospital as a gunshot victim with mounting medical bills.
            Our foundation stepped in to cover his hospital expenses.
          </p>
          <p>
            Today, he is a nursing student, celebrating his Capping and Matriculation Ceremony.
          </p>
          <Link to="/impact" className="read-full-story">
            Read Full Story →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HealthImpactMini;