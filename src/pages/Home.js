import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.animate-section');
      const screenPosition = window.innerHeight / 1.3;

      sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;

        if (sectionPosition < screenPosition) {
          section.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="hero-section">
        <div className="background-image"></div>
        
          <h1>MDot Byte Consulting Pvt Ltd</h1>
        
      </div>

      <div className="intro-section animate-section">
        <div className="intro-logo">
          <img src="/Mdot_Logo.jpg" alt="GS3 Logo" className="gs3-logo" />
        </div>
        <div className="intro-content">
          <p>
            Welcome to MDot Byte Consulting, where innovation meets excellence. We are a cutting-edge technology startup committed to revolutionizing the digital landscape through advanced solutions in AI, Machine Learning, Data Science, Data Analytics, and more. Our mission is to empower businesses with transformative technologies that drive growth and efficiency.<br />
            At MDot Byte Consulting, we pride ourselves on our ability to deliver customized solutions tailored to meet the unique needs of each client. Our team of experts combines deep industry knowledge with technical expertise to create innovative strategies that enhance decision-making, optimize processes, and unlock new opportunities. Whether you are looking to harness the power of data or streamline operations with the latest technologies, we are here to guide you every step of the way. Join us on a journey to redefine what's possible in the world of digital transformation.
          </p>
        </div>
      </div>

      <div className="expertise-section animate-section">
        <h2>Our Expertise</h2>
        <div className="expertise-cards">
          <div className="expertise-card">
            <div className="icon">☁️</div>
            <h3>Cloud Computing</h3>
            <p>Leverage the scalability, flexibility, and security of cloud technologies. Our expertise in cloud platforms ensures seamless migration, integration, and management to support your dynamic business needs.</p>
          </div>
          <div className="expertise-card">
            <div className="icon">⚙️</div>
            <h3>DevOps</h3>
            <p>Accelerate your software development lifecycle with our DevOps practices. We streamline operations, enhance collaboration, and ensure continuous delivery of high-quality solutions.</p>
          </div>
          <div className="expertise-card">
            <div className="icon">📊</div>
            <h3>Data Science & Analytics</h3>
            <p>Transform raw data into actionable intelligence with our comprehensive data science and analytics services. We help you extract meaningful patterns and trends to optimize strategies and achieve your goals.</p>
          </div>
        </div>
        <div className="know-more" onClick={() => navigate('/services')}>
          Know More >>
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p className="subtitle">Let's start the new project</p>
          <p >You are one click away to digitalize your business !!!!!</p>
          <br></br>
          <br></br>
          <p><strong>Phone:</strong> +91 44974548784, +91 4149418714951</p>
          <p><strong>Email:</strong> xyz@gmail.com</p>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-row">
              
              <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-row">
              <input type="text" id="mobile" name="mobile" placeholder="Your Mobile Number" required />
            </div>
            <div className="form-row">
              
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-row">
              
              <textarea id="message" name="message" placeholder="Your Message" required></textarea>
            </div>
            <div className="form-row">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>

      <div className="map-section">
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

export default Home;
