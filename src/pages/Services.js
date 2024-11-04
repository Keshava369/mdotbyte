// src/pages/Services.js
import React, { useEffect } from 'react';

import './Services.css';

function Services() {
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

  return (
    <div className="services">
      <div className="hero-section-services">
      <video className="services-background-video" autoPlay loop muted>
          <source src="/Images/services.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1>Our Services</h1>
      </div>

      <div className="services-section animate-section">
        <h2>Our Services</h2>
        <div className="services-cards">
          <div className="service-card">
            <div className="card-background" style={{ backgroundImage: 'url(/Images/full-stack.jpg)' }}></div>
            <h3>Full Stack Applications</h3>
            <p>Develop robust and scalable web and mobile applications with our full stack development services. From front-end interfaces to back-end databases, we ensure a seamless and efficient experience tailored to your business needs.
            </p>
          </div>
          <div className="service-card">
            <div className="card-background" style={{ backgroundImage: 'url(/Images/cyber-security.jpeg)' }}></div>
            <h3>Cyber Security</h3>
            <p>Safeguard your digital assets with our cutting-edge cyber security solutions. We provide comprehensive protection against threats, ensuring your systems, data, and networks are secure and compliant with industry standards.</p>
          </div>
          <div className="service-card">
            <div className="card-background" style={{ backgroundImage: 'url(/Images/cloud-services.jpg)' }}></div>
            <h3>Cloud Services (AWS, Azure, GCP)</h3>
            <p>Leverage the power of the cloud with our specialized services in AWS, Azure, and GCP. We help you design, deploy, and manage cloud environments that are flexible, scalable, and cost-effective, driving your business forward in the digital era.</p>
          </div>
        </div>
        <div className="services-cards">
          <div className="service-card">
            <div className="card-background" style={{ backgroundImage: 'url(/Images/aiml.jpg)' }}></div>
            <h3>Artificial Intelligence (AI) & Machine Learning (ML)</h3>
            <p>Harness the power of AI and ML to automate processes, uncover insights, and make data-driven decisions that propel your business forward.</p>
          </div>
          <div className="service-card">
            <div className="card-background" style={{ backgroundImage: 'url(/Images/data-analytics.jpg)' }}></div>
            <h3>Data Science & Analytics</h3>
            <p>Transform raw data into actionable intelligence with our comprehensive data science and analytics services. We help you extract meaningful patterns and trends to optimize strategies and achieve your goals.</p>
          </div>
          <div className="service-card">
            <div className="card-background" style={{ backgroundImage: 'url(/Images/devops.jpeg)' }}></div>
            <h3>DevOps</h3>
            <p>Accelerate your software development lifecycle with our DevOps practices. We streamline operations, enhance collaboration, and ensure continuous delivery of high-quality solutions.
            </p>
          </div>
        </div>
        <div className="services-cards">
          
          <div className="service-card">
            <div className="card-background" style={{ backgroundImage: 'url(/Images/oracle.jpg)' }}></div>
            <h3>Oracle Cloud Applications & SAP</h3>
            <p>Maximize the potential of your enterprise resources with our proficiency in Oracle Cloud Applications and SAP solutions. We provide tailored implementations and support to optimize your enterprise operations.
            </p>
          </div>
          <div className="service-card">
            <div className="card-background" style={{ backgroundImage: 'url(/Images/ocf.jpg)' }}></div>
            <h3>Oracle Cloud Fusion</h3>
            <p>Streamline your business operations with Oracle Cloud Fusion, an integrated suite of cloud applications designed to unify your enterprise processes. From ERP to HCM, our services ensure seamless integration and optimal performance tailored to your specific needs.
            </p>
          </div>
          <div className="service-card">
            <div className="card-background" style={{ backgroundImage: 'url(/Images/taqf.jpg)' }}></div>
            <h3>Testing & Quality Assurance</h3>
            <p>Ensure the reliability and performance of your systems with our comprehensive testing services. From automated testing to manual QA, we deliver rigorous testing strategies to meet your highest standards.
            </p>
          </div>
        </div>
      </div>
      
      <div class="container">
  <div class="box">
    <h1>Why Choose <br></br> Us?</h1>
    <div class="root1">
        <div class="sec1">
            <span class="circle">
                <i class="fa-solid fa-briefcase fa-3x" style= {{color: "#ffffff"}}></i>
            </span><br />
            <h1>Innovative Solutions</h1>
            <p>We leverage the latest technologies to create bespoke solutions that meet your unique needs.</p>
        </div>
        <div class="sec2">
            <span class="circle">
                <i class="fa-solid fa-code fa-3x" style={{color: "#ffffff"}}></i>
            </span><br />
            <h1>Expert Team</h1>
            <p>Our skilled professionals bring deep industry knowledge and technical expertise to every project.</p>
        </div>
    </div>
    <div class="root2">
        <img src="/Mdot_Logo.jpg" alt="profile picture" />
    </div>
    <div class="root3">
        <div class="sec3">
            <span class="circle">
                <i class="fa-solid fa-headset fa-3x" style={{color: "#ffffff"}}></i>
            </span><br />
            <h1>Client-Centric Approach</h1>
            <p>We prioritize your business objectives and work closely with you to achieve them.</p>
        </div>
        <div class="sec4">
            <span class="circle">
                <i class="fa-solid fa-rocket fa-3x" style={{color: "#ffffff"}}></i>
            </span><br />
            <h1>Commitment to Excellence</h1>
            <p>Our focus on quality ensures that we deliver reliable, high-performance solutions that exceed expectations.</p>
        </div>
    </div>
</div>
</div>

<div className="service-contact-section">
        <div className="service-contact-info">
          <h2>Contact Us</h2>
          <p className="subtitle">Let's start the new project</p>
          <p >You are one click away to digitalize your business !!!!!</p>
          <br></br>
          <br></br>
          <p><strong>Phone:</strong> +91 44974548784, +91 4149418714951</p>
          <p><strong>Email:</strong> xyz@gmail.com</p>
        </div>
        <div className="service-contact-form">
          <form>
            <div className="service-form-row">
              
              <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="service-form-row">
              <input type="text" id="mobile" name="mobile" placeholder="Your Mobile Number" required />
            </div>
            <div className="service-form-row">
              
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="service-form-row">
              
              <textarea id="message" name="message" placeholder="Your Message" required></textarea>
            </div>
            <div className="service-form-row">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Services;
