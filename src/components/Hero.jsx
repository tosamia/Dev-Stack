function Hero() {

  return (
    <section
      className="hero"
      id="home"
    >

      {/* Left side */}
      <div className="hero-content">

        <h1 className="hero-title">

          Build Your Ideal

          <br />

          <span className="gradient-text">
            Development Stack
          </span>

        </h1>


        <p className="hero-description">
          Explore frontend, backend, database, and tooling
          options, compare them side by side, and build the
          perfect stack for your next project.
        </p>


        <div className="hero-buttons">

          <a
            href="#technologies"
            className="primary-button"
          >
            Explore Technologies
          </a>


          <a
            href="#about"
            className="secondary-button"
          >
            Learn More
          </a>

        </div>

      </div>


      {/* Right side illustration */}
      <div className="hero-visual">

        <div className="hero-box">

          <div className="hero-layer layer-one">
            <span>AI</span>
          </div>

          <div className="hero-layer layer-two">
            <span>&lt;/&gt;</span>
          </div>

          <div className="hero-layer layer-three">
            <span>DS</span>
          </div>

        </div>

      </div>

    </section>
  );
}


export default Hero;