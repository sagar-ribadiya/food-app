import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for props validation
import './Navbar.css'; // Import the CSS file
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa'; // Importing icons
import { Link } from 'react-router-dom'; // Import from react-router-dom

const Navbar = ({ cartCount, toggleCart }) => { 
  const [isMobile, setIsMobile] = useState(false); 
  const handleMenuToggle = () => { 
    setIsMobile(!isMobile); 
  };

  return (
    <nav className="navbar">
      <img src="./images/logo.png" alt="Logo"/> 
      <button className="mobile-menu-icon" onClick={handleMenuToggle}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`navbar-links ${isMobile ? 'active' : ''}`}>
        <Link to="/" onClick={handleMenuToggle}>Home</Link>
        <Link to="/about" onClick={handleMenuToggle}>About</Link>
        <Link to="/contact" onClick={handleMenuToggle}>Contact Us</Link>
        <div className="navbar-auth">
          <Link to="/login"><button className="login-button">Login</button></Link>
          <Link to="/signup"><button className="signup-button">Sign Up</button></Link>
          <button className="cart-icon" onClick={toggleCart}>
            <FaShoppingCart />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
};

// Define prop types for the Navbar component
Navbar.propTypes = {
  cartCount: PropTypes.number.isRequired, // Ensure cartCount is a number and required
  toggleCart: PropTypes.func.isRequired   // Ensure toggleCart is a function and required
};

export default Navbar;
