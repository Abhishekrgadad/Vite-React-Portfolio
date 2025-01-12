import React, { useEffect, useState } from 'react';
import { Code2, BookOpen, Award, User, Mail } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { id: 'home', label: 'Home', icon: User },
  { id: 'projects', label: 'Projects', icon: Code2 },
  { id: 'blogs', label: 'Blog', icon: BookOpen },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn(
      "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
      "top-8 py-3 px-6 rounded-full bg-gray-900/90 backdrop-blur-sm",
      "shadow-lg shadow-black/20",
      isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
    )}>
      <div className="flex items-center space-x-6">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="group flex items-center space-x-2 px-4 py-2 rounded-full 
                     text-gray-400 hover:text-white hover:bg-gray-800 
                     transition-all duration-300"
          >
            <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}