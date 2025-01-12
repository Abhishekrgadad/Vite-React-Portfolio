import React from 'react';
import { BarChart, Users, Star, Code2 } from 'lucide-react';

export function Analytics() {
  const stats = [
    { label: 'GitHub Stars', value: '1.2k', icon: Star },
    { label: 'Projects', value: '25+', icon: Code2 },
    { label: 'Website Visitors', value: '10k+', icon: Users },
    { label: 'Contributions', value: '500+', icon: BarChart },
  ];

  return (
    <section className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="bg-gray-900 p-6 rounded-lg text-center hover:scale-105 transition-transform"
            >
              <Icon className="w-8 h-8 mx-auto mb-4 text-blue-500" />
              <div className="text-2xl font-bold text-white mb-1">{value}</div>
              <div className="text-sm text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}