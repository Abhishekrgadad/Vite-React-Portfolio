
import { Navigation } from './components/Navigation';
import { Hero } from './components/sections/Hero';
import { TechStack } from './components/TechStack';
// import { Analytics } from './components/Analytics';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Certifications } from './components/sections/Certifications';
import { Blog } from './components/sections/Blog';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';
import { CursorTrail } from './components/CursorTrail';

function App() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <CursorTrail color="rgba(66, 153, 225, 0.6)" />
      <Navigation />
      <Hero />
      {/* <TechStack /> */}
      {/* <Analytics /> */}
      <About />
      <Projects />
      <Certifications />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;