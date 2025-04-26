import React from 'react';

const Projects = () => {
  const projectList = [
    {
      name: 'Project 1',
      description: 'Description for project 1',
      liveDemo: 'https://live-demo-link.com',
      github: 'https://github.com/repo-link'
    },
    {
      name: 'Project 2',
      description: 'Description for project 2',
      liveDemo: 'https://live-demo-link.com',
      github: 'https://github.com/repo-link'
    }
  ];

  return (
    <div className="projects">
      {projectList.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="project-links">
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;