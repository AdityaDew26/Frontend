import React from 'react';
import './header.css';


const Header = () => {
  return (
     <section className="hero-section" id='home'>
      <div className="background">
        <img src="https://papers.co/wallpaper/papers.co-vy76-wave-color-purple-pattern-background-36-3840x2400-4k-wallpaper.jpg" alt="" />
      </div>
     

      <div className="hero-content">
        <div className="hero-text">
          <h1>Hello, I'm <span className="name">Aditya Dewangan</span></h1>
          <p>Web Developer from New York</p>
          <p className="description">
            Jodi kokhono vul hoye jai tumi oporadh nio na ptate velit esse cillum dolore
          </p>
          <div className="cta-buttons">
            <button className="cta-btn">Get a Quote</button>
            <button className="cta-btn">About Me</button>
          </div>
        </div>

        

        <div className="me">
            <div className="hero-image">
          <img src="https://png.pngtree.com/png-vector/20231103/ourmid/pngtree-happy-corporate-business-professional-one-man-clipart-white-background-png-image_10329231.png" alt="James Smith" />
        </div>
            <div className="achievements">
          <div className="achievement">
            <h3>12</h3>
            <p>Years of Success</p>
          </div>
          <div className="achievement">
            <h3>800+</h3>
            <p>Projects Completed</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
