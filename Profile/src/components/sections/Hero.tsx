import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { TypewriterText } from '../TypewriterText';
import { ParticleBackground } from '../ParticleBackground';

export function Hero() {
  const phrases = [
    "Building exceptional digital experiences",
    "Crafting innovative web solutions",
    "Transforming ideas into reality",
    "Creating seamless user interfaces"
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 bg-black overflow-hidden">
      <ParticleBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop"
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover shadow-2xl mb-8 
                       transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-blue-500/20 filter blur-xl 
                         group-hover:bg-blue-500/30 transition-all duration-300" />
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 
                       bg-clip-text text-transparent animate-fade-in">
            John Developer
          </h1>
          
          <div className="text-xl text-gray-300 mb-8 h-8">
            <TypewriterText phrases={phrases} />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
            <div className="flex space-x-6">
              {[
                { href: 'https://github.com', icon: Github },
                { href: 'https://linkedin.com', icon: Linkedin },
                { href: 'mailto:john@example.com', icon: Mail }
              ].map(({ href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700 
                           hover:scale-110 transition-all duration-300 text-gray-300 hover:text-white
                           hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 
                       hover:from-blue-500 hover:to-blue-400 text-white font-medium rounded-lg 
                       transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}