import React from 'react';
import './About.css';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="about-container">
      <h1>About Us</h1>
      <p>Welcome to our M-Squire Food! We are dedicated to providing an exceptional dining experience, where each dish is a masterpiece crafted with love and precision. 
        Our passion for food drives us to create unforgettable flavors that leave a lasting impression.</p>

      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>Our mission is to inspire and delight our guests through innovative cuisine and exceptional service. We are dedicated to using the freshest,
           highest-quality ingredients to create dishes that are both delicious and nutritious.</p>
      </div>

      <div className="history-section">
        <h2>Our History</h2>
        <p>From our humble beginnings in 2000, we have grown into a M-Squire Food known for our dedication to quality and creativity. 
          Our journey is marked by a passion for food and a relentless pursuit of perfection.</p>
      </div>

      <div className="team-section">
        <h2>Our Team</h2>
        <p>Our team is a dynamic group of culinary professionals, each bringing their unique talents and expertise to the kitchen.
           Together, we create a symphony of flavors that delight and inspire our guests.</p>
      </div>

      <div className="testimonials-section">
        <h2>Testimonials</h2>
        <p>This company exceeded my expectations...- Happy Customer</p>
        <p>The food was absolutely divine! - An Ecstatic Diner An unforgettable dining experience. - A Delighted Guest Their creativity in the kitchen is unmatched.
           - A Food Enthusiast I always look forward to my next visit. - Manan Patel</p>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions (FAQ)</h2>
        <h3>Do you cater to dietary restrictions?</h3>
        <p>Yes, we offer a variety of options to accommodate different dietary needs, including vegetarian, vegan, gluten-free, and more. 
          Please let us know your requirements, and we will be happy to assist</p>
        <h3>What are your hours of operation?</h3>
        <p>We are open from 11:00 AM to 10:00 PM, Monday through Sunday. We also offer special hours for holidays and events, which you can find on our website.</p>
      </div>
      
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>Have questions or need assistance? We are here to help! Reach out to us at contact@M-square.com or call us at +91 52369854225. We look 
          forward to hearing from you and serving you soon.
          Feel free to customize these paragraphs to match the unique character and style of your food website.
           Enjoy creating a mouthwatering online presence! 🍣🍜</p>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default About;
