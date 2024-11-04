// src/components/Overlay.js
import React, { useEffect, useState } from 'react';
import './Overlay.css';

function Overlay({ onClose }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, 2000); // Show overlay for 2 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`overlay ${show ? 'show' : ''}`}>
      <img src="/Mdot_Logo.jpg" alt="Logo" className="overlay-logo" />
      <div className="company-name">
              <strong>MDot Byte Consulting Pvt Ltd</strong>
      </div>
    </div>
  );
}

export default Overlay;
