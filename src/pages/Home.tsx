import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { WaveBackground } from '../components/WaveBackground';

export function Home() {
  return (
    <div className="relative min-h-screen pt-16">
      <WaveBackground />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center">
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop"
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover shadow-lg mb-8"
          />
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Abhishek RG
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
            Full Stack Developer specializing in building exceptional digital experiences.
            Focused on creating innovative solutions with modern technologies.
          </p>

          <div className="flex space-x-4 mb-12">
            <a
              href="https://github.com/abhishekrgadad"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:john@example.com"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
            {['React', 'TypeScript', 'Node.js', 'Next.js', 'TailwindCSS', 'PostgreSQL'].map((skill) => (
              <div
                key={skill}
                className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}