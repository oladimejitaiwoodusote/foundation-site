import "../styles/ImpactOutreach.css";
import Image1 from "../assets/Image 1.jpg";
import Image2 from "../assets/Image 2.jpg";
import Image3 from "../assets/Image 3.jpg";
import Image4 from "../assets/Image 4.jpg";
import Image5 from "../assets/Image 5.jpg";
import Image6 from "../assets/Image 6.jpg";
import Image7 from "../assets/Image 7.jpg";
import Image8 from "../assets/Image 8.jpg";
import Image9 from "../assets/Image 9.jpg";
import Image10 from "../assets/Image 10.jpg";

const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
]

function ImpactOutreach(){
    return (
      <section className="community-section">
        <h2>Community Outreach</h2>
        <div className="community-hero-line" />

        <div className="community-grid">
          {images.map((src, i) => (
            <div key={i} className="community-item">
              <img src={src} alt={`Outreach ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>
    );
  }

export default ImpactOutreach