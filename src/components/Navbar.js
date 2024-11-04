// src/components/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <NavLink to="/" exact="true" className="logo-link">
            <img src="/Mdot_Logo.jpg" alt="Logo" className="logo" />
            <div className="company-name">
              <strong>MDot Byte Consulting Pvt Ltd</strong>
            </div>
          </NavLink>
        </div>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <NavLink 
            to="/" 
            exact="true" 
            className={({ isActive }) => (isActive ? "active-link" : "")} 
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => (isActive ? "active-link" : "")} 
            onClick={() => setIsOpen(false)}
          >
            Services
          </NavLink>
          <NavLink 
            to="/about-us" 
            className={({ isActive }) => (isActive ? "active-link" : "")} 
            onClick={() => setIsOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink 
            to="/contact-us" 
            className={({ isActive }) => (isActive ? "active-link" : "")} 
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </NavLink>
        </div>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
}

export default Navbar;
