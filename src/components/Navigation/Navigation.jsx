import React, { useState, useEffect } from 'react';
import './Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size and update state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px is typical tablet breakpoint
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = (
    <>
      <li className="nav-item">
        <a href="#header" className="nav-link" onClick={closeMenu}>Home</a>
      </li>
      <li className="nav-item">
        <a href="#about-me" className="nav-link" onClick={closeMenu}>About</a>
      </li>
      <li className="nav-item">
        <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
      </li>
      <li className="nav-item">
        <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
      </li>
      <li className="nav-item">
        <a href="#contact-me" className="nav-link" onClick={closeMenu}>Contact</a>
      </li>
    </>
  );

  return (
    <nav id="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#header" className="logo-link">Laith AlQudah</a>
        </div>

        {/* Desktop Navigation - shows links directly */}
        {!isMobile && (
          <ul className="nav-links">
            {navLinks}
          </ul>
        )}

        {/* Mobile Navigation - shows burger button */}
        {isMobile && (
          <div className="mobile-nav">
            <button 
              className="menu-button" 
              onClick={toggleMenu}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <FontAwesomeIcon 
                icon={menuOpen ? faTimes : faBars} 
                style={{ color: '#ffffff', fontSize: '1.5rem' }} 
              />
            </button>

            {/* Mobile Menu Dropdown */}
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
              <ul className="mobile-links">
                {navLinks}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;