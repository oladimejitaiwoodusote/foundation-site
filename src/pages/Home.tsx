export default function Home() {
    return (
      <>
        {/* Spacer so the hero isn't flush against the fixed navbar */}
        <div style={{ height: "96px" }} />
  
        {/* Hero / Video Area */}
        <section
          id="home-hero"
          style={{
            height: "100vh",
            background: "#ddd",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          Hero / Video Area
        </section>
  
        {/* Content below */}
        <section
          style={{
            minHeight: "200vh",
            padding: "2rem",
            background: "#f5f5f5",
          }}
        >
          <h2>Content Below</h2>
          <p>
            This is the section that comes after the hero. Scroll down to see
            the horizontal bar drop below the navbar and the vertical line adjust.
          </p>
          <p>
            You can add multiple sections here as needed. The vertical line will
            start below the horizontal bar after scrolling past the hero.
          </p>
        </section>
      </>
    );
  }
  