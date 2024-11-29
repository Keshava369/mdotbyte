import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import emailjs from '@emailjs/browser';

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
         to_name:'Keshav',
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
    <div className="home">
      <div className="hero-section">
        <div className="background-image"></div>
        
          <h1>MDotByte Consulting Pvt Ltd</h1>
        
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
          <p><strong>Phone:</strong> +91 8247433556</p>
          <p><strong>Email:</strong> hrmdotbyte@gmail.com</p>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              
              <input type="text" id="name" name="name" placeholder="Your Name" required value={name} onChange={(e) => setName(e.target.value)}/>
              </div>
              <div className="form-row">
              <input type="text" id="mobile" name="mobile" placeholder="Your Mobile Number" required value={mobile} onChange={(e) => setMobile(e.target.value)}/>
            </div>
            <div className="form-row">
              
              <input type="email" id="email" name="email" placeholder="Your Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-row">
              
              <textarea id="message" name="message" placeholder="Your Message" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <div className="form-row">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>

      <div className="map-section">
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

export default Home;
