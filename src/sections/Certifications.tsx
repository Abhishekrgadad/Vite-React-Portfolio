import React from 'react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add logos of certification providers for better visual impact */}
          <div className="certification-logo">
            <img src="/path-to-logo.png" alt="Certification Provider" className="w-16 h-16" />
          </div>
          {/* Add more certification logos as needed */}
        </div>
      </div>
    </section>
  );
};

export default Certifications;