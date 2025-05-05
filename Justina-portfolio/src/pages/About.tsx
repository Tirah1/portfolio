import React from 'react';
import { Code, Globe, Terminal, Brush } from 'lucide-react';

const About = () => {
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "React", level: 90 },
    { name: "TypeScript", level: 75 },
    { name: "Node.js", level: 70 }
  ];

  const techStack = [
    "HTML5", "CSS3", "JavaScript", "TypeScript", "React", 
    "Redux", "Next.js", "Node.js", "Express", "Tailwind CSS",
    "Git", "Figma",  "GitHub"
  ];

  const expertiseAreas = [
    {
      title: "Full Stack Development",
      description: "Developing complete web applications with backend APIs and frontend interfaces",
      icon: <Globe size={24} className="text-warm-orange" />
    },
    {
      title: "Frontend Development",
      description: "Building responsive, interactive user interfaces with modern JavaScript frameworks",
      icon: <Code size={24} className="text-warm-orange" />
    },

    {
      title: "Backend Development",
      description: "Developing server-side applications and RESTful APIs using Node.js and Express",
      icon: <Globe size={24} className="text-warm-orange" />
    },
    {
      title: "Web Design",
      description: "Creating visually appealing, user-friendly designs that provide great user experience",
      icon: <Brush size={24} className="text-warm-orange" />
    },
    {
      title: "API Development",
      description: "Building robust and scalable APIs using Node.js and Express",
      icon: <Terminal size={24} className="text-warm-orange" />
    }
  ];

  return (
    <div className="py-10">
      {/* About Me Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center">About Me</h2>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden bg-warm-peach p-2">
                <img 
                  src="/my-logo.jpeg" 
                  alt="Justina Ngina" 
                  className="w-full h-auto rounded-lg" 
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg mb-6">
                I'm a passionate and solutions-driven Software Developer with a strong foundation in full-stack development, data analytics, and cloud-based technologies.
              </p>
              <p className="mb-6">
              I specialize in building interactive web applications using React, Node.js, and MongoDB, 
              and I’m continuously exploring how technology can solve real-world problems—especially in health, finance, and social impact sectors. I’ve worked on projects involving user authentication, dashboards, CRUD operations, and data visualization, 
              and I enjoy collaborating with teams to turn complex ideas into usable, elegant digital products.
              </p>
              <p>
                When I'm not coding, you can find me hiking in the mountains, reading about new
                technologies, or socializing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-12 bg-warm-cream">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-12">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <div className="mb-4 p-3 bg-warm-peach/50 rounded-full">
                  {area.icon}
                </div>
                <h3 className="text-xl font-poppins font-medium text-warm-dark mb-2">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-8">Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {techStack.map((tech, index) => (
              <div 
                key={index} 
                className="bg-warm-peach text-warm-brown px-4 py-2 rounded-md text-sm md:text-base font-medium hover:bg-warm-orange hover:text-white transition-colors duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-12 bg-warm-cream">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-12">Skills</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-warm-dark">{skill.name}</span>
                  <span className="text-warm-brown">{skill.level}%</span>
                </div>
                <div className="h-2 bg-warm-peach/30 rounded-full">
                  <div 
                    className="h-full bg-warm-orange rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;