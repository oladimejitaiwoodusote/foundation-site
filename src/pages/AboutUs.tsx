import AboutHero from "../components/AboutHero";
import AboutMission from "../components/AboutMission";
import AboutValue from "../components/AboutValue";
import { useEffect } from 'react';

function AboutUs() {

  useEffect(() => {
    document.title = "About Us - The Nnamdi Agbim Family Foundation"
  })

  return (
    <div>
        <AboutHero/>
        <AboutMission/>
        <AboutValue/>

    </div>
  )
}

export default AboutUs