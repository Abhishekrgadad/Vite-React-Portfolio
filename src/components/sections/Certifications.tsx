import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    description: "Advanced cloud architecture and infrastructure design certification covering AWS services and best practices.",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=400&h=300&fit=crop",
    url: "https://drive.google.com/drive/folders/1lyWfKjxOt25lgCBd9s2bfDwjg_X1zXPm?usp=sharing"
  },
  {
    title: "Full Stack Development",
    issuer: "Meta",
    description: "Comprehensive certification in modern web development, covering React, Node.js, and database management.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    url: "https://drive.google.com/drive/folders/1lyWfKjxOt25lgCBd9s2bfDwjg_X1zXPm?usp=sharing"
  },
  {
    title: "Cloud Computing",
    issuer: "Google Cloud",
    description: "Professional certification in cloud computing fundamentals and Google Cloud Platform services.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
    url: "https://drive.google.com/drive/folders/1lyWfKjxOt25lgCBd9s2bfDwjg_X1zXPm?usp=sharing"
  },
  {
    title: "Machine Learning",
    issuer: "Stanford University",
    description: "Advanced certification in machine learning algorithms and practical applications.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
    url: "https://drive.google.com/drive/folders/1lyWfKjxOt25lgCBd9s2bfDwjg_X1zXPm?usp=sharing"
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-2">
          <Award className="w-8 h-8" />
          Certifications
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee space-x-8">
            {[...certificates, ...certificates].map((cert, index) => (
              <div
                key={`${cert.title}-${index}`}
                className="min-w-[400px] group relative overflow-hidden rounded-lg hover:pause"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
                  <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
                    {cert.title}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 
                             transition-opacity duration-300 p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-gray-200 text-sm mb-2">{cert.issuer}</p>
                    <p className="text-gray-300">{cert.description}</p>
                  </div>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 
                             rounded-lg hover:bg-blue-500 transition-colors w-fit"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
