import "../styles/EducationPrograms.css";

import Img1 from "../assets/Education 1.jpg";
import Img2 from "../assets/Education 2.jpg";
import Img3 from "../assets/Education 3.jpg";
import Img4 from "../assets/Education 4.jpg";

interface ProgramBlock {
  title: string;
  content: React.ReactNode;
  image: string;
}

function EducationPrograms() {
  const programBlocks: ProgramBlock[] = [
    {
      title: "What We Do",
      content: (
        <ul className="program-list">
          <li>Build and equip ICT laboratories with no upfront cost to schools.</li>
          <li>Develop training programs and educational content for schools, educators, and students.</li>
          <li>Deploy technology-driven solutions that improve teaching and learning outcomes.</li>
          <li>Organise and conduct Microsoft Certification examinations within academic institutions.</li>
          <li>Support students in participating in the Microsoft Office Specialist Championship and Imagine Cup competitions.</li>
        </ul>
      ),
      image: Img2,
    },
    {
      title: "What We Are Doing",
      content: (
        <>
          <p>
            We have supported 21 primary, secondary, and tertiary institutions across Nigeria
            by providing fully equipped ICT laboratories and digital learning environments.
          </p>
          <ul className="program-list">
            <li>Between 21 and 500 computer systems per institution</li>
            <li>Between 21 and 500 classroom furniture units</li>
            <li>Inverter power systems</li>
            <li>Printers and digital projectors</li>
            <li>Digital projection screens</li>
            <li>Microsoft Imagine Academy licenses</li>
            <li>Professional instructors and training support</li>
          </ul>
        </>
      ),
      image: Img3,
    },
    {
      title: "Stakeholder Engagement",
      content: (
        <>
          <p>
            Interkel partners with Microsoft as an Authorized Education Partner (AEP) to deliver
            Microsoft Imagine Academy programs to young people across Nigeria in a sustainable way.
          </p>
          <p>
            Through this partnership we have helped schools introduce structured ICT training programs
            that empower students with globally recognized digital skills.
          </p>
        </>
      ),
      image: Img4,
    },
    {
      title: "STEM Excellence Award",
      content: (
        <>
          <p>
            The Nnamdi Agbim Foundation recognises and rewards academic brilliance in STEM
            through its annual STEM Excellence Award.
          </p>
          <p>
            Each year the Foundation partners with St. Gregory's College to celebrate outstanding
            secondary school students who excel in Mathematics.
          </p>
          <p>
            By recognising academic excellence early, the Foundation inspires young Nigerians
            to be confident, capable, and motivated to contribute to scientific and technological advancement.
          </p>
        </>
      ),
      image: Img1,
    },
  ];

  return (
    <section className="education-programs">
      {programBlocks.map((block, index) => (
        <div
          key={index}
          className={`program-block ${index % 2 === 0 ? "" : "reverse"}`}
        >
          <div className="program-image">
            <img src={block.image} alt={block.title} />
          </div>
          <div className="program-content">
            <h2>{block.title}</h2>
            {block.content}
          </div>
        </div>
      ))}
    </section>
  );
}

export default EducationPrograms;