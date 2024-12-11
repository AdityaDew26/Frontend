import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importing icons

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} Aditya Dewangan. All Rights Reserved.
        </p>
        <div className="footer-links">
          <a
            href="https://github.com/adityadewangan"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaGithub className="footer-icon" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/adityadewangan"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaLinkedin className="footer-icon" /> LinkedIn
          </a>
          <a
            href="mailto:aditya@example.com"
            className="footer-link"
          >
            <FaEnvelope className="footer-icon" /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
