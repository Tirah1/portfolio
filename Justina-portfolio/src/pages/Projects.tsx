import React from 'react';
import ProjectCard from '../components/ProjectCard';
import ExperienceSection from '../components/ExperienceSection';

const Projects = () => {
  const projects = [
    {
      title: "Car-dealership review App",
      description: "A business application that allows users to register, log in, view a list of car dealers, view individual dealer profiles, and post reviews",
      technologies: ["React", "Django"]
    },
    {
      title: "E-commerce Website",
      description: "Developed a responsive e-commerce platform for plant sales. Has a functional shopping cart and checkout process. Users can view and purchase plants online.",
      technologies: ["React", "Redux", "Node.js"]
    },
    {
      title: "Task Management App",
      description: "Designed and developed a complete task manager using MERN. Has a user-friendly interface for task management. Applies CRUD operations, aunthentication and authorization.",
      technologies: ["React", "Nodejs", "Mongodb"]
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website showcasing projects and skills with a clean, minimalist design.",
      technologies: ["React", "TypeScript", "Framer Motion"]
    },
    {
      title: "Chatbot Application",
      description: "Created an interactive chatbot using Flask and GPT APIs. The chatbot can answer user queries and provide information on various topics.",
      technologies: ["Python", "Flask"]
    },
    {
      title: "Shipping Cost Calculator",
      description: "Build a Shipping Cost Calculator using Python that allows users to calculate the shipping cost based on the weight of a package and the shipping rate per kilogram.",
      technologies: ["Python"]
    },
    
  ];

  return (
    <div>
      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <ExperienceSection />
    </div>
  );
};

export default Projects;