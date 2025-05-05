import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
}

const SocialIcons = ({ className = "", iconSize = 20 }: SocialIconsProps) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      <a 
        href="https://github.com/Tirah1" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-warm-brown hover:text-warm-orange transition-colors duration-300"
        aria-label="GitHub Profile"
      >
        <Github size={iconSize} />
      </a>
      <a 
        href="https://twitter.com/jtnginaa" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-warm-brown hover:text-warm-orange transition-colors duration-300"
        aria-label="Twitter Profile"
      >
        <Twitter size={iconSize} />
      </a>
      <a 
        href="https://linkedin.com/in/justina-ndunda-015a84284" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-warm-brown hover:text-warm-orange transition-colors duration-300"
        aria-label="LinkedIn Profile"
      >
        <Linkedin size={iconSize} />
      </a>
      <a 
        href="mailto:nginajustina1@gmail.com" 
        className="text-warm-brown hover:text-warm-orange transition-colors duration-300"
        aria-label="Email Me"
      >
        <Mail size={iconSize} />
      </a>
    </div>
  );
};

export default SocialIcons;