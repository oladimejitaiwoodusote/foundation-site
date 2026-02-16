import "../styles/AboutValue.css";
import ValueCard from "./ValueCard";

function AboutValue() {
  return (
    <section className="value-section">
        <h2>Our Values</h2>
        <div className="value-line" />

        <div className="value-cards">
            <ValueCard 
            title="Self Reliance and Dignity"
            description="Self-reliance and dignity for our beneficiaries through sustained investment in
            human capital"
            />
            <ValueCard 
            title="Enduring Goodwill and Positive Stewardship"
            description="Enduring goodwill and positive stewardship for the family through service that is
            purposeful and accountable"
            />
            <ValueCard 
            title="Generational Progress toward Sustainable Development"
            description="Generational progress toward sustainable development, ensuring today's interventions translate into tomorrow's stability and opportunity"
            />
        </div>
    </section>

  )
}

export default AboutValue