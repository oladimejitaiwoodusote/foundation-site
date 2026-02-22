import FocusHero from "../components/FocusHero";
import FocusDetailSection from "../components/FocusDetailSection";
import FoodImage from "../assets/Image 1.jpg";
import HealthImage from "../assets/Image 2.jpg";
import EducationImage from "../assets/Image 3.jpg";
import { useEffect } from "react";

function FocusArea() {

  useEffect(() => {
    document.title = "Focus Area - The Nnamdi Agbim Family Foundation"
  })
  return (
    <>
      <FocusHero />

      <FocusDetailSection
        id = "food"
        title="Food & Nutrition"
        image={FoodImage}
        objective="To combat hunger and malnutrition while promoting sustainable, community-based nutrition
        systems."
        focusAreas={[
          "Emergency and seasonal food support for vulnerable households",
          "Community-led nutrition and food security initiatives",
          "Promotion of sustainable, locally sourced food systems",
        ]}
        initiatives={[
          "Periodic community food distribution and household food support programs",
          "Partnerships with local farmers to improve access to nutritious, seasonal, and climate- resilient food",
          "Nutrition education initiatives, including community sensitisation and practical food preparation demonstrations",
          "Programs aimed at reducing food insecurity while encouraging dignity, self-reliance, and healthy eating habits"
        ]}
      />

      <FocusDetailSection
        id = "health"
        title="Health & Wellness"
        image={HealthImage}
        objective="To improve access to preventive healthcare, essential medical support, and community
        wellness education."
        focusAreas={[
          "Preventive and primary healthcare access",
          "Medical assistance for urgent and critical health needs",
          "Community health awareness and education",
        ]}
        initiatives={[
          "Periodic mobile medical outreach clinics providing consultations, screenings, and basic healthcare services",
          "Support for critical medical treatments and emergency health interventions",
          "Maternal and child health initiatives, including antenatal care awareness, safe delivery support, and child wellness education",
          "Training of community health ambassadors to support first aid, hygiene awareness, and referral pathways"
        ]}
        reverse
      />

      <FocusDetailSection
        id = "education"
        title="Education & Research"
        image={EducationImage}
        objective="To promote access to quality education, skills development, and long-term human capital
        growth."
        focusAreas={[
          "Educational access and school development",
          "Academic excellence and learning incentives",
          "Skills acquisition and workforce readiness",
        ]}
        initiatives={[
          "Support for basic education infrastructure and learning environments",
          "Scholarships, sponsorships, and academic rewards for students demonstrating excellence, particularly in STEM",
          "Mentorship and exchange programs linking students with professionals for guidance, coaching, and career exposure",
          "Establishment of community skills and training hubs offering vocational and digital skills, with a focus on women and youth empowerment"
        ]}
      />
    </>
  );
}

export default FocusArea;
