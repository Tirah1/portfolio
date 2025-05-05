import React, { useState } from 'react';
import { Mail, MapPin, Phone, Download, File } from 'lucide-react';
import SocialIcons from '../components/SocialIcons';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const ContactInfo = ({ icon, title, text, link }: { icon: React.ReactNode, title: string, text: string, link?: string }) => {
  return (
    <div className="flex items-start space-x-4 p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="p-3 bg-warm-peach/50 rounded-full text-warm-brown flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-poppins font-medium text-warm-dark mb-1">{title}</h3>
        {link ? (
          <a href={link} className="text-warm-brown hover:text-warm-orange transition-colors">
            {text}
          </a>
        ) : (
          <p className="text-muted-foreground">{text}</p>
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  const certificates = [
    { name: "IBM Full Stack Development Certification", file: "/certificates/web-dev.pdf" },
    { name: "Google Project Management", file: "/certificates/react-advanced.pdf" },
    { name: "Google data analytics", file: "/certificates/ui-ux-design.pdf" },
  
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center">Get In Touch</h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Thank you for visiting my portfolio! I'm currently open to freelance projects
            and full-time opportunities. Feel free to reach out if you'd like to work together
            or just say hello!
          </p>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <ContactInfo
              icon={<Mail size={24} />}
              title="Email"
              text="nginajustina1@gmail.com"
              link="mailto:nginajustina1@gmail.com"
            />
            <ContactInfo
              icon={<MapPin size={24} />}
              title="Location"
              text="Nairobi, Kenya"
            />
            <ContactInfo
              icon={<Phone size={24} />}
              title="Phone"
              text="+254 111786050"
              link="tel:+254111786050"
            />
          </div>
          
          {/* Social Media */}
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-xl font-poppins font-medium text-warm-dark mb-4">Connect With Me</h3>
            <SocialIcons iconSize={24} />
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/resume.pdf" 
              download 
              className="btn-primary flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </a>
            
            <Dialog>
              <DialogTrigger asChild>
                <button className="btn-outline flex items-center justify-center gap-2">
                  <File size={18} />
                  View Certificates
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-warm-dark">My Certificates</DialogTitle>
                </DialogHeader>
                <div className="py-4">
                  <ul className="space-y-3">
                    {certificates.map((cert, index) => (
                      <li key={index} className="flex justify-between items-center p-3 bg-warm-peach/20 rounded-md">
                        <span className="font-medium text-warm-dark">{cert.name}</span>
                        <a 
                          href={cert.file} 
                          download 
                          className="text-warm-brown hover:text-warm-orange flex items-center gap-1"
                        >
                          <Download size={16} />
                          <span>Download</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;