import ImpactHero from "../components/ImpactHero";
import ImpactLetterSection from "../components/ImpactLetterSection";
import ImpactOutreach from "../components/ImpactOutreach";
import ImpactStorySection from "../components/ImpactStorySection";
import { useEffect } from "react";

function Impact() {

  useEffect(() => {
    document.title = "Impact - The Nnamdi Agbim Family Foundation"
  })
  return (
    <>
        <ImpactHero/>
        <ImpactLetterSection/>
        <ImpactStorySection/>
        <ImpactOutreach/>
    </>
  )
}

export default Impact