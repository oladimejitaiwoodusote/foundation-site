import "../styles/Home.css";
import HomeHero from "../components/HomeHero";


function Home() {
  return (
    <>
      {/* Spacer so content clears fixed navbar */}
      <div className="home-navbar-spacer" />

      {/* Hero Section */}
      <HomeHero/>

      {/* Content Below */}
      <section className="home-content">
        <div className="home-content-inner">
          <h2>Content Below</h2>
          <p>
            This is the section that comes after the hero. Scroll down to see
            the horizontal bar drop below the navbar and the vertical line adjust.
          </p>
          <p>
            You can add multiple sections here as needed.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
