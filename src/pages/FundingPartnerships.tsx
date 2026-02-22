import FundingHero from "../components/FundingHero";
import FundingSection from "../components/FundingSection";
import { useEffect } from "react";

function FundingPartnerships() {

    useEffect(() => {
        document.title = "Funding & Partnerships - The Nnamdi Agbim Family Foundation"
      })
  return (
    <>
        <FundingHero/>

        <FundingSection
            title="Funding & Approach"
            categoryOneTitle="Core Support"
            categoryOneItems={[
                "Anchor funding provided through family-owned operating and holding structures",
                "Long-term commitment to responsible stewardship and continuity of programs",
            ]}
            categoryTwoTitle="In-Kind Contributions"
            categoryTwoItems={[
                "Non-financial support through donated goods, materials, and resources",
                "Professional and technical services contributed physically or digitally",
            ]}
            categoryThreeTitle="Volunteer & Service Contributions"
            categoryThreeItems={[
                "Skills-based volunteering including teaching, training, coaching, mentoring, and advisory support",
                "Engagement of professionals who contribute time and expertise to strengthen programs",
            ]}
        />

        <FundingSection
            title="Partnership Model"
            categoryOneTitle="Corporate & CSR Partnerships"
            categoryOneItems={[
                "Collaboration with corporate partners to co-fund programs aligned with shared social impact goals",
                "Opportunities for CSR-driven initiatives that support community development, education, health, and food security",
            ]}
            categoryTwoTitle="Strategic Co-Funding"
            categoryTwoItems={[
                "Joint funding arrangements with foundations, private sector actors, and mission-aligned organisations",
                "Flexible partnership structures designed to maximise reach, sustainability, and measurable impact",
            ]}
            categoryThreeTitle="Community & Institutional Collaboration"
            categoryThreeItems={[
                "Partnerships with local organisations, institutions, and community leaders to ensure relevance, trust, and effective delivery",
            ]}
        reverse
      />
    </>
  )
}

export default FundingPartnerships