import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="logo-section">
        <Link to="/" className="logo" onClick={closeMenu} aria-label="Flowgenix Home">
          Flowgenix
        </Link>
        <span className="tagline">Engineering Intelligent Systems</span>
      </div>

      {/* HAMBURGER */}
      <button
        className={`hamburger ${isOpen ? "hamburger-open" : ""}`}
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* OVERLAY */}
      {isOpen && <div className="nav-overlay" onClick={closeMenu}></div>}

      {/* NAV LINKS */}
      <div className={`nav-links ${isOpen ? "nav-open" : ""}`}>
        <Link to="/" className={isActive("/") ? "active-link" : ""} onClick={closeMenu}>Home</Link>
        <Link to="/about" className={isActive("/about") ? "active-link" : ""} onClick={closeMenu}>About</Link>
        <Link to="/services" className={isActive("/services") ? "active-link" : ""} onClick={closeMenu}>Services</Link>
        <Link to="/projects" className={isActive("/projects") ? "active-link" : ""} onClick={closeMenu}>Projects</Link>
        <Link to="/contact" className="contact-btn" onClick={closeMenu}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;