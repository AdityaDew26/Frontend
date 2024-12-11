import React, { useState } from "react"; // Import useState from React
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Initialize state for menu toggle

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  return (
    <header className="header">
      <div className="logo">DevBoy</div>
      <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><button className="cv-button">Download CV</button></li>
        </ul>
      </nav>
      <div className="menu-toggle" onClick={handleMenuToggle} style={{
        display:"none"
      }}>
        {isMenuOpen ? 'X' : '☰'} {/* Toggling between 'X' and '☰' for mobile view */}
      </div>
    </header>
  );
};

export default Navbar;
