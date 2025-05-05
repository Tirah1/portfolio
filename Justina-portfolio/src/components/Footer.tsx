import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-warm-cream py-10 border-t border-warm-peach">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-warm-dark font-poppins font-semibold text-xl">
              Portfolio<span className="text-warm-orange">.</span>
            </Link>
            <p className="text-warm-brown/80 mt-2 text-sm">
              Crafting digital experiences with passion
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-warm-brown hover:text-warm-orange transition-colors"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-warm-brown hover:text-warm-orange transition-colors"
            >
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-warm-brown hover:text-warm-orange transition-colors"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="text-warm-brown hover:text-warm-orange transition-colors"
            >
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-warm-peach/50 text-center text-warm-brown/70 text-sm">
          <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;