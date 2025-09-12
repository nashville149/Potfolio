import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container container mt-5">
      <h2>About Me</h2>
      <p>
        I am a passionate developer with a love for creating beautiful and functional web applications.
      </p>
      <h5>Skills</h5>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML/CSS</li>
        <li>Bootstrap</li>
      </ul>
      <h5>Tools</h5>
      <ul>
        <li>VS Code</li>
        <li>Git</li>
        <li>Jira</li>
      </ul>
    </div>
  );
};

export default About;
