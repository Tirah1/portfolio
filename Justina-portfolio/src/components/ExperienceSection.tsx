import React from 'react';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceItem = ({ title, company, period, description }: ExperienceItemProps) => {
  return (
    <div className="mb-8 border-l-2 border-warm-orange pl-5 pb-2 relative">
      <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-warm-orange"></div>
      <h3 className="text-xl font-poppins font-medium text-warm-dark">{title}</h3>
      <p className="text-warm-brown font-medium">{company}</p>
      <p className="text-muted-foreground text-sm">{period}</p>
      <p className="mt-2">{description}</p>
    </div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Office Administrator",
      company: "Inuka Africa",
      period: "Feb 2023 - Nov 2023",
      description: "Delivered exceptional customer service, resolving inquiries and increasing client retention. Monitored recurring support issues, proposed scalable solutions, and documented resolutions to reduce ticket volume"
    },
   
  ];

  return (
    <section className="py-16 bg-warm-cream">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-12">Experience</h2>
        <div className="max-w-2xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection