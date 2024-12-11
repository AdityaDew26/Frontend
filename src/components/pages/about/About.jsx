import React from "react";
import "./about.css";

function About() {
  
  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2>I'm a Developer</h2>
          <h1>I Develop Applications that Help People</h1>
          <p>
            Dliquip ex ea commo do conse namber onequa ute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur epteur sint occaecat cupidatat.
          </p>
          <p>
            Krnon proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum. Sed ut perspiciatis unde omnis.
          </p>
          <button className="view-portfolio">View Portfolio</button>
        </div>
        <div className="about-image-section">
          <div className="about-main-image">
            <img
              src="https://media.istockphoto.com/id/1448167415/photo/smiling-indian-businessman-in-suit-and-glasses-with-laptop-near-office-building.jpg?s=612x612&w=0&k=20&c=vuUgcc-IlZewhnRm7yNOIuEfAvTnyJdMsPbnvkAnZjc="
              alt="Main Highlight"
              className="main-image"
            />
          </div>
          <div className="about-icons">
            <img
              src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png"
              alt="Laravel"
              className="icon laravel"
            />
            <img
              src="https://www.svgrepo.com/download/303360/nodejs-logo.svg"
              alt="WordPress"
              className="icon wordpress"
            />
            <img
              src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png"
              alt="Joomla"
              className="icon joomla"
            />
            <img
              src="https://logowik.com/content/uploads/images/express-js1720895488.logowik.com.webp"
              alt="Drupal"
              className="icon drupal"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
