function Footer() {

  return (
    <footer className="footer" id="about">


      <div className="footer-container">


        {/* Brand */}
        <div className="footer-brand">

          <div className="footer-logo">

            <span className="footer-logo-box">
              DS
            </span>

            <span className="brand-name">
              Dev Stack
            </span>

          </div>


          <p className="footer-description">
            Curated tools, technologies, and resources for
            developers building modern software.
          </p>


          <div className="social-links">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>


        {/* Product */}
        <div className="footer-column">

          <h4>
            PRODUCT
          </h4>

          <a href="#home">
            Home
          </a>

          <a href="#technologies">
            Technologies
          </a>

          <a href="#projects">
            Projects
          </a>

        </div>


        {/* Company */}
        <div className="footer-column">

          <h4>
            COMPANY
          </h4>

          <a href="#about">
            About
          </a>

          <a href="#contact">
            Contact
          </a>

          <a href="#careers">
            Careers
          </a>

        </div>


        {/* Legal */}
        <div className="footer-column">

          <h4>
            LEGAL
          </h4>

          <a href="#privacy">
            Privacy Policy
          </a>

          <a href="#terms">
            Terms of Service
          </a>

        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">

        <span>
          © 2026 Dev Stack. All rights reserved.
        </span>

        <div>
          <span>
            Privacy
          </span>

          <span className="footer-space">
            Terms
          </span>
        </div>

      </div>

    </footer>
  );
}


export default Footer;