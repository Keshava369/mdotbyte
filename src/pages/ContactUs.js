// src/pages/Home.js
import React from 'react';
import './Contact.css';

function ContactUs() {
  return (
    <div className="Contact">
      <div className="Contact-hero-section">
      <video className="services-background-video" autoPlay loop muted>
          <source src="/Images/contact.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1>Contact Us</h1>
      </div>
      <div className="Contact-contact-section">
        <div className="Contact-contact-info">
          <h2>Contact Us</h2>
          <p className="subtitle">Let's start the new project</p>
          <p >You are one click away to digitalize your business !!!!!</p>
          <br></br>
          <br></br>
          <p><strong>Phone:</strong> +91 44974548784, +91 4149418714951</p>
          <p><strong>Email:</strong> xyz@gmail.com</p>
        </div>
        <div className="Contact-contact-form">
          <form>
            <div className="Contact-form-row">
              
              <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="Contact-form-row">
              <input type="text" id="mobile" name="mobile" placeholder="Your Mobile Number" required />
            </div>
            <div className="Contact-form-row">
              
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="Contact-form-row">
              
              <textarea id="message" name="message" placeholder="Your Message" required></textarea>
            </div>
            <div className="Contact-form-row">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>

      <div className="Contact-map-section">
        <iframe
          src="https://maps.google.com/maps?q=19-261%2C+Lingasetty+Palyam+Street%2C+Near+Ther+Bazar%2C+Dharmavaram%2C+Andhra+Pradesh+-+515671&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
