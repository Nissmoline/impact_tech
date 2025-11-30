import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Audience from './components/Audience';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-50 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navigation />
      
      <main>
        <Hero />
        <Services />
        <Projects />
        <Audience />
        <TechStack />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;