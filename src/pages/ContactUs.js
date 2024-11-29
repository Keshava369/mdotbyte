// src/pages/Home.js
import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

function ContactUs() {
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_cjuvpei';
    const templateId = 'template_c4b74z2';
    const publicKey = 'dSR7D_m_xXzOufZXE';
    
    const templateParams ={
         from_name:name,
         email:email,
         mobile:mobile,
         to_name:'Mukunda',
         message:message
    };

    emailjs.send(serviceId,templateId,templateParams,publicKey).then((response) => {
      console.log('email sent successfully',response);
      alert('Email sent successfully');
      setName('');
      setEmail('');
      setMobile('');
      setMessage('');
    })
    .catch((error)=>{
      console.error('Error sending email:',error);
      alert('Something went try!! Please try again');
    })

  }
  

  return (
    <div className="Contact">
      <div className="Contact-hero-section">
      <video className="services-background-video" autoPlay loop muted playsInline>
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
          <p><strong>Phone:</strong> +91 8247433556</p>
          <p><strong>Email:</strong> hrmdotbyte@gmail.com</p>
        </div>
        <div className="Contact-contact-form">
          <form onSubmit={handleSubmit}>
            <div className="Contact-form-row">
              
              <input type="text" id="name" name="name" placeholder="Your Name" required value={name} onChange={(e) => setName(e.target.value)}/>
              </div>
              <div className="Contact-form-row">
              <input type="text" id="mobile" name="mobile" placeholder="Your Mobile Number" required value={mobile} onChange={(e) => setMobile(e.target.value)} />
            </div>
            <div className="Contact-form-row">
              
              <input type="email" id="email" name="email" placeholder="Your Email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="Contact-form-row">
              
              <textarea id="message" name="message" placeholder="Your Message" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <div className="Contact-form-row">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>

      <div className="Contact-map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1385.991807719052!2d77.5586305319745!3d14.697192807787957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1732874588869!5m2!1sen!2sin"
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
