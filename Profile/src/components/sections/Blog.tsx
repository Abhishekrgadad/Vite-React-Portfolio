import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';

const blogs = [
  {
    title: "Modern React Best Practices",
    excerpt: "Explore the latest React patterns and optimization techniques for building scalable applications.",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop"
  },
  {
    title: "Getting Started with TypeScript",
    excerpt: "A comprehensive guide to TypeScript fundamentals and advanced features.",
    date: "Mar 10, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop"
  },
  {
    title: "Web Performance Optimization",
    excerpt: "Learn how to optimize your web applications for better performance and user experience.",
    date: "Mar 5, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
  },
  {
    title: "Building Scalable APIs",
    excerpt: "Best practices for designing and implementing scalable backend services.",
    date: "Mar 1, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop"
  }
];

export function Blog() {
  return (
    <section id="blogs" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-2">
          <BookOpen className="w-8 h-8" />
          Latest Articles
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee hover:pause space-x-8">
            {[...blogs, ...blogs].map((blog, index) => (
              <article
                key={`${blog.title}-${index}`}
                className="min-w-[350px] group bg-gray-900 rounded-lg overflow-hidden hover:scale-105 
                         transition-all duration-300 shadow-lg border border-gray-800"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                    <span>{blog.date}</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{blog.title}</h3>
                  <p className="text-gray-400 mb-4">{blog.excerpt}</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}