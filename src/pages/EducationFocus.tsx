import ImpactStats from "../components/ImpactStats";
import EducationPrograms from "../components/EducationPrograms";
import PartnerCall from "../components/PartnerCall";
import "../styles/EducationFocus.css";

function EducationFocus() {
  return (
    <main>

      <section className="education-hero">
        <h1>Education & Research</h1>

        <p>
          As part of its corporate social responsibility goals, Interkel provides
          affordable and innovative educational solutions to address challenges
          within our economic environment. Through our initiatives we have trained
          over 20,000 students across the South-West, South-South, South-East,
          and North-Central regions of Nigeria.
        </p>
      </section>

      <ImpactStats />

      <EducationPrograms />

      <PartnerCall />

    </main>
  );
}

export default EducationFocus;