import React from 'react';
import { TracingBeam } from '../components/ui/tracing-beam';

const Hero = () => {
  return (
    <section className="hero">
      <TracingBeam>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My Portfolio</h1>
          <p className="hero-description">I am a passionate developer with experience in web development.</p>
          <div className="hero-avatar">
            <img src="/profile.jpeg" alt="Profile" className="rounded-full w-32 h-32" />
          </div>
        </div>
      </TracingBeam>
    </section>
  );
};

export default Hero;