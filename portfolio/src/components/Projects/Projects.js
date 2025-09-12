import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of Project 1.',
    technologies: 'React, Node.js',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    title: 'Project 2',
    description: 'A brief description of Project 2.',
    technologies: 'Angular, Firebase',
    liveLink: '#',
    sourceLink: '#',
  },
];

const Projects = () => {
  return (
    <div className="projects-container container mt-5">
      <h2>Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <p className="card-text"><small className="text-muted">{project.technologies}</small></p>
                <a href={project.liveLink} className="btn btn-primary me-2">Live Project</a>
                <a href={project.sourceLink} className="btn btn-secondary">Source Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
