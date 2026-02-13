import "../styles/Home.css";
import HomeHero from "../components/HomeHero";
import HomeAbout from "../components/HomeAbout";
import HomeFocus from "../components/HomeFocus";
import HomeProof from "../components/HomeProof";


function Home() {
  return (
    <>
      {/* Spacer so content clears fixed navbar */}
      <div className="home-navbar-spacer" />

      {/* Hero Section */}
      <HomeHero/>

      {/* Hero About */}
      <HomeAbout/>

      {/* Hero Focus */}
      <HomeFocus/>

      {/* Hero Proof */}
      <HomeProof/>

    </>
  );
}

export default Home;
