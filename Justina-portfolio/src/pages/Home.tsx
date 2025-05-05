import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import SocialIcons from '../components/SocialIcons'; // Ensure this file exists or update the path

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 flex flex-col items-start animate-slide-in">
            <p className="text-warm-orange font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-warm-dark mb-4">
              Justina Ngina
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-warm-brown mb-4">
              Full Stack Developer
            </h2>
            <p className="text-muted-foreground max-w-lg mb-8">
              I create beautiful, functional websites and applications for both front and backend.
              Passionate about clean code, modern frameworks, and innovative design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/contact" className="btn-primary flex items-center gap-2">
                Hire Me
                <ArrowRight size={18} />
              </Link>
              <a 
                href="/Justina Ngina CV.pdf" 
                download 
                className="btn-outline flex items-center gap-2"
              >
                Download Resume
                <Download size={18} />
              </a>
            </div>
            
            <SocialIcons />
          </div>
          
          <div className="md:w-1/2 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-warm-peach"></div>
              <div className="absolute inset-0 flex justify-center items-center">
                <img 
                  src="/profile.jpeg" 
                  alt="Justina Ngina" 
                  className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;