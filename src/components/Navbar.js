// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Import the CSS file for styling

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);  // State for mobile menu toggle

  const toggleMenu = () => setIsMobile(!isMobile);  // Toggle mobile menu

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">Adrian Gonzalez</Link>
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${isMobile ? 'active' : ''}`}>
        <li><Link to="/" className="navbar-link">Home</Link></li>
        <li><Link to="/projects" className="navbar-link">Projects</Link></li>
        <li><Link to="/contact" className="navbar-link">Contact</Link></li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className={`hamburger ${isMobile ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
