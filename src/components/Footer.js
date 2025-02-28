// src/components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/Mdot_Logo.jpg" alt="Company Logo" className="logo" />
        </div>
        <div className="footer-column">
          <h4>Address</h4>
          <p>MDot Byte Consulting Pvt Ltd</p>
          <p>Opposite to Sarada Silks,</p>
          <p>Bellary Road,</p>
          <p>Syndicate Nagar,</p>
          <p>Anantapur,</p>
          <p>Andhra Pradesh - 515004</p>
        </div>
        <div className="footer-column">
          <h4>Services</h4>
          <p>Data Drafting</p>
          <p>Oracle Fusion</p>
          <p>DevOps services</p>
          <p>Full Stack Applications</p>
          <p>Cyber Security</p>
          <p>Cloud Services</p>
          <p>AI & ML</p>
          <p>Data Science & Analytics</p>
          <p>DevOps servicesTesting & Quality Assurance</p>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <p>hrmdotbyte@gmail.com</p>
          <p>+91 8247433556</p>
        </div>
        <div className="footer-social-icons">
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
    </footer>
  );
}

export default Footer;
