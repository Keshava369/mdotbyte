import React, { useEffect } from 'react';
import './AboutUs.css';

function AboutUs() {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.about-intro-section');
      const screenPosition = window.innerHeight / 1.3;
      const sectionPosition = section.getBoundingClientRect().top;

      if (sectionPosition < screenPosition) {
        section.classList.add('animate');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Trigger animation on initial render
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="about">
      <div className="about-hero-section">
        <video className="about-background-video" autoPlay loop muted>
          <source src="/Images/about.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1>About Us</h1>
      </div>
      <div className="about-intro-section about-animate-section">
        <div className="about-intro-logo">
          <img src="/Mdot_Logo.jpg" alt="GS3 Logo" className="about-gs3-logo" />
        </div>
        <div className="about-intro-content">
          <p>
          Welcome to MDot Byte Consulting, where innovation meets excellence. We are a cutting-edge technology startup committed to revolutionizing the digital landscape through advanced solutions in AI, Machine Learning, Data Science, Data Analytics, and more. Our mission is to empower businesses with transformative technologies that drive growth and efficiency.<br />
          At MDot Byte Consulting, we pride ourselves on our ability to deliver customized solutions tailored to meet the unique needs of each client. Our team of experts combines deep industry knowledge with technical expertise to create innovative strategies that enhance decision-making, optimize processes, and unlock new opportunities. Whether you are looking to harness the power of data or streamline operations with the latest technologies, we are here to guide you every step of the way. Join us on a journey to redefine what's possible in the world of digital transformation.
          </p>
        </div>
      </div>

      <div className="our-team-section">
        <h2>Meet The Minds</h2>
        <div className="team-cards">
          {/* Repeat this block for each team member */}
          <div className="team-card">
            <div className="team-card-background" style={{ backgroundImage: 'url(/Images/person1.jpeg)' }}></div>
            <div className="team-card-content">
              <h3>Mukunda Reddy</h3>
              <p>Chief Executive Officer</p>
              <div className="team-social-icons">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
          {/* Add more team cards here */}
          <div className="team-card">
            <div className="team-card-background" style={{ backgroundImage: 'url(/Images/person2.jpeg)' }}></div>
            <div className="team-card-content">
              <h3>Maheshwari</h3>
              <p>Chief Technical Officer</p>
              <div className="team-social-icons">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mission-vision-section">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            At MDot Byte Consulting Pvt Ltd, our mission is to empower businesses and individuals with innovative software solutions 
            that drive efficiency, foster growth, and inspire creativity. We are dedicated to delivering high-quality, user-centric 
            applications that solve real-world problems and enhance the way people interact with technology. Through our commitment to 
            excellence, continuous improvement, and customer satisfaction, we strive to be a trusted partner in our clients' success.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            At MDot Byte Consulting Pvt Ltd, our vision is to create a world where technology bridges gaps, enables progress, 
            and enriches lives. We aim to be at the forefront of digital transformation, leading with creativity, innovation, and 
            a deep understanding of our clients' needs. Our vision is to build a future where businesses and individuals alike can 
            thrive in a connected, digital world, powered by the solutions we provide.
          </p>
        </div>
      </div>

    </div>
  );
}

export default AboutUs;
