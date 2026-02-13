import "../styles/FocusArea.css";
import Image3 from "../assets/Image 3.jpg"; 


function FocusArea() {
  return (
    <section className="focus-hero">
      <div className="focus-hero-inner">
        <div className="focus-left">
          <h1 className="focus-title">Our Work</h1>

          <div className="focus-buttons">
            <button className="focus-btn">Food & Nutrition</button>
            <button className="focus-btn">Health & Wellness</button>
            <button className="focus-btn">Education & Reach</button>
          </div>

          <div className="focus-divider" />
        </div>

        <div className="focus-right">
          <img src={Image3} alt="Foundation work" />
        </div>
      </div>
    </section>
  );
}

export default FocusArea;
