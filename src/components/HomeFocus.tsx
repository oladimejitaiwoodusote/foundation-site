import "../styles/HomeFocus.css";
import { Link } from "react-router-dom";
import Image1 from "../assets/Image 1.jpg";
import Image2 from "../assets/Image 2.jpg";
import Image3 from "../assets/Image 3.jpg";


function HomeFocus() {
  const cards = [
    {
      img: Image1,
      title: "Food Security",
      text: "Providing sustainable solutions to hunger and malnutrition in underserved communities.",
      link: "/focus/food",
    },
    {
      img: Image2,
      title: "Healthcare Access",
      text: "Ensuring timely and reliable healthcare for those who need it most.",
      link: "/focus/healthcare",
    },
    {
      img: Image3,
      title: "Education",
      text: "Building opportunities through quality education and lifelong learning programs.",
      link: "/focus/education",
    },
  ];
  return (
    <section className="focus-section">
      <div className="focus-container">
        {/* Section Header */}
        <h2 className="focus-header">Our Focus Areas</h2>

        {/* Cards Row */}
        <div className="focus-cards">
          {cards.map((card, index) => (
            <div key={index} className="focus-card">
              <img src={card.img} alt={card.title} />
              <h3 className="focus-card-title">{card.title}</h3>
              <p className="focus-card-text">{card.text}</p>
              <Link to={card.link} className="focus-card-btn">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeFocus