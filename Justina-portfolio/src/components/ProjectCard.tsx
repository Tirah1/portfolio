import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
}

const ProjectCard = ({ title, description, technologies, liveLink, githubLink }: ProjectCardProps) => {
  return (
    <div className="project-card h-64 group">
      <div className="h-full flex items-center justify-center p-6">
        <h3 className="text-2xl font-poppins font-medium text-center text-warm-dark group-hover:opacity-0 transition-opacity duration-300">{title}</h3>
      </div>
      <div className="project-overlay">
        <h3 className="text-2xl font-poppins font-medium text-gray mb-2">{title}</h3>
        <p className="text-gray/90 mb-4">{description}</p>
        <div className="flex flex-wrap mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>
        <div className="flex space-x-3">
  <a
    href={liveLink}
    target="_blank"
    rel="noopener noreferrer"
    className="btn-primary text-sm px-4 py-2 rounded-md"
  >
    View Project
  </a>
  
  <a
    href={githubLink}
    target="_blank"
    rel="noopener noreferrer"
    className="btn-outline text-sm border-white text-white hover:bg-white hover:text-warm-brown px-4 py-2 rounded-md"
  >
    GitHub
  </a>
</div>

      </div>
    </div>
  );
};

export default ProjectCard;