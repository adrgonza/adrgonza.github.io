import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMobile(!isMobile);

  React.useEffect(() => {
    setIsMobile(false);
  }, [location]);

  return (
    <nav className="navbar">
      <ul className={`navbar-links ${isMobile ? 'active' : ''}`}>
        <li><Link to="/" className="navbar-link">Home</Link></li>
        <li><Link to="/projects" className="navbar-link">Projects</Link></li>
        <li><Link to="/contact" className="navbar-link">Contact</Link></li>
      </ul>

      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className={`hamburger ${isMobile ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
