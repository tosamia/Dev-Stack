import { useState } from "react";


function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <header className="navbar">

      <div className="navbar-container">


        {/* Mobile hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>


        {/* Logo */}
        <a
          href="#home"
          className="brand"
        >

          <span className="brand-logo">
            DS
          </span>

          <span className="brand-name">
            Dev Stack
          </span>

        </a>


        {/* Desktop navigation */}
        <nav className="desktop-nav">

          <a
            href="#home"
            className="active"
          >
            Home
          </a>

          <a href="#technologies">
            Technologies
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#about">
            About
          </a>

          <a href="#contact">
            Contact
          </a>

        </nav>


        {/* Right buttons */}
        <div className="nav-actions">

          <button className="sign-in">
            Sign In
          </button>

          <button className="sign-up">
            Sign Up
          </button>

        </div>

      </div>


      {/* Mobile menu */}
      {menuOpen && (

        <nav className="mobile-menu">

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>

          <a
            href="#technologies"
            onClick={() => setMenuOpen(false)}
          >
            Technologies
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>

        </nav>

      )}

    </header>
  );
}


export default Navbar;