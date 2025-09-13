import React from 'react';
import './Home.css';

const Home = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm <span className="highlight">Nashville</span></h1>
            <h2>Full Stack Developer</h2>
            <p>I create beautiful and functional web applications with modern technologies and clean code.</p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>View My Work</button>
              <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>Get In Touch</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-img"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
