import React from 'react';
import './Resume.css';

const Resume = () => {
  const experiences = [
    {
      date: '2022 - Present',
      position: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      description: 'Led development of scalable web applications using React and Node.js. Mentored junior developers and implemented best practices.',
      skills: ['React', 'Node.js', 'AWS', 'MongoDB']
    },
    {
      date: '2020 - 2022',
      position: 'Frontend Developer',
      company: 'Digital Agency',
      description: 'Developed responsive web applications and collaborated with design teams to create exceptional user experiences.',
      skills: ['JavaScript', 'React', 'CSS3', 'Bootstrap']
    },
    {
      date: '2019 - 2020',
      position: 'Junior Developer',
      company: 'Startup Solutions',
      description: 'Built and maintained web applications while learning modern development practices and agile methodologies.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Git']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'University of Technology',
      year: '2019',
      icon: '🎓'
    },
    {
      degree: 'Full Stack Web Development',
      school: 'Coding Bootcamp',
      year: '2018',
      icon: '💻'
    }
  ];

  return (
    <section className="resume-section">
      <div className="container">
        <div className="resume-content">
          <div className="resume-header">
            <h2 className="section-title">Resume</h2>
            <p>A comprehensive overview of my professional journey and achievements.</p>
            <a href="#" className="download-btn">
              📄 Download PDF Resume
            </a>
          </div>
          
          <div className="resume-timeline">
            <div className="timeline-line"></div>
            
            <div className="timeline-section">
              <h3 className="timeline-title">Work Experience</h3>
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-date">{exp.date}</div>
                    <h4 className="timeline-position">{exp.position}</h4>
                    <div className="timeline-company">{exp.company}</div>
                    <p className="timeline-description">{exp.description}</p>
                    <div className="timeline-skills">
                      {exp.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-badge">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="timeline-section">
              <h3 className="timeline-title">Education</h3>
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <div className="education-icon">{edu.icon}</div>
                  <div className="education-details">
                    <h4>{edu.degree}</h4>
                    <p>{edu.school} • {edu.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
