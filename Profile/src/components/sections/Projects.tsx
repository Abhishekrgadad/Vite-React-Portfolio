import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "TravelTail Tourism Site",
      description: "A Tourism site which covers the Destinations around Karwar",
      image: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600&h=400&fit=crop",
      tags: ["React", "Nodejs", "Tailwindcss", "MongoDB"],
      github: "https://github.com/Abhishekrgadad/TravelTail-Tourism-Site",
      demo: "https://traveltail.netlify.app/"
    },
    {
      title: "Nextjs Blog Platform",
      description: "A full-stack Blog website with createpost and all CRUD operations related to Blog done with Nextjs and Node.js",
      image: "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600&h=400&fit=crop",
      tags: ["Nextjs","React","Tailwindcss", "Node.js","Clerk Auth", "MongoDB"],
      github: "https://github.com/Abhishekrgadad/Blog-Nextjs",
      demo: "https://github.com/Abhishekrgadad/Blog-Nextjs"
    },
    
    {
      title: "HacFy - Cybersecurity",
      description: "HacFy - Cybersecurity platform which provide Services and Products", 
      image: "https://plus.unsplash.com/premium_photo-1670402130476-25aa8c1986c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600&h=400&fit=crop",
      tags: ["React", "Nodejs", "Tailwind", "MongoDB"],
      github: "https://github.com/Abhishekrgadad/HacFy-E-Learning-Education-Platform",
      demo: "https://hacfy.com/"
    },
    {
      title: "HacFy CTF Website",
      description: "CTF website for HacFy Hackathon 2024",
      image: "https://images.unsplash.com/photo-1638029202288-451a89e0d55f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600&h=400&fit=crop",
      tags: ["React", "Nodejs", "Tailwind", "MongoDB"],
      github: "https://github.com/Abhishekrgadad/HacFy-CTF-Website",
      demo: "https://ctf.hacfy.com/"
    },
    {
      title: "Mern-Blog site",
      description: "Social Blog Platform",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
      tags: ["React", "Nextjs", "Tailwind", "MongoDB"],
      github: "https://github.com/Abhishekrgadad/Mern-Blog-FullStack",
      // demo: "https://github.com/Abhishekrgadad/Mern-Blog-FullStack"

    },
    {
      title: "Full Stack Chat Application",
      description: "Where Users can chat like Whatsapp",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop",
      tags: ["Next.js", "OpenAI", "TypeScript"],
      github: "https://github.com/Abhishekrgadad/Full-Stack-Chat-Application",
      // demo: "https://demo.com"
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-gray-900 rounded-lg overflow-hidden 
                       hover:scale-102 transition-all duration-300 shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 
                           transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 
                             group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 
                             hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 
                             hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}