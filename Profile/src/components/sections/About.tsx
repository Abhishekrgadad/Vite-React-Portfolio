import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">About Me</h2>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with good experience in building
              web applications. I specialize in React, Node.js, Nextjs and modern web technologies Frameworks.
              My journey in tech started with a curiosity about how things work on the internet,
              and that curiosity has driven me to continuously learn and grow in this field.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Education
              </h3>
              <div className="space-y-4">
                {[
                  {
                    degree: "Alva's Institute of Engineering and Technology,DK",
                    school: "VTU | CGPA : 8.5",
                    year: "2021-2025"
                  },
                  {
                    degree: "Alva's Pre University College",
                    school: "PU | Percentage : 89.66%",
                    year: "2019-2021"
                  }
                ].map((edu) => (
                  <div
                    key={edu.degree}
                    className="p-4 rounded-lg bg-gray-900 hover:bg-gray-800
                             transition-all duration-300 hover:scale-102"
                  >
                    <h4 className="font-medium text-white">{edu.degree}</h4>
                    <p className="text-gray-400">{edu.school}</p>
                    <p className="text-sm text-gray-500">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Experience
              </h3>
              <div className="space-y-4">
                {[
                  {
                    role: "HacFy",
                    company: "Software Developer",
                    period: "Sep 2024-Present"
                  },
                  {
                    role: "Innorve LLC",
                    company: "Automation Intern",
                    period: "Nov 2023 - Dec 2023"
                  }
                ].map((exp) => (
                  <div
                    key={exp.role}
                    className="p-4 rounded-lg bg-gray-900 hover:bg-gray-800
                             transition-all duration-300 hover:scale-102"
                  >
                    <h4 className="font-medium text-white">{exp.role}</h4>
                    <p className="text-gray-400">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=600&h=800&fit=crop"
              alt="Working"
              className="rounded-lg shadow-xl hover:scale-102 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}