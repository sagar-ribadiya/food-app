import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPinterest } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="about-section">
          <h4>About Us</h4>
          <p>We are passionate about delivering the best food experiences right to your doorstep. Join us on our journey for quality and taste!</p>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
            <FaPinterest />
          </a>
        </div>
        <div className="contact-section">
          <h4>Contact Us</h4>
          <p>Email: info@M-squire.com</p>
          <p>Phone: +91 7896542562</p>
        </div>
      </div>
      <p>&copy; 2025 Your Food Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

