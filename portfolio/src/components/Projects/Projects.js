import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: '#',
    sourceLink: '#',
    status: 'Live',
    icon: '🛒'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    technologies: ['React', 'Firebase', 'Material-UI'],
    liveLink: '#',
    sourceLink: '#',
    status: 'Live',
    icon: '📋'
  },
  {
    title: 'Weather Dashboard',
    description: 'A responsive weather application with location-based forecasts and interactive charts.',
    technologies: ['JavaScript', 'Chart.js', 'OpenWeather API'],
    liveLink: '#',
    sourceLink: '#',
    status: 'Live',
    icon: '🌤️'
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <span>{project.icon}</span>
                <div className="project-status">{project.status}</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} className="project-link btn-primary-project">
                    🔗 Live Demo
                  </a>
                  <a href={project.sourceLink} className="project-link btn-secondary-project">
                    📁 Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
