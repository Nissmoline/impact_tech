import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Audience from '../components/Audience';
import TechStack from '../components/TechStack';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Audience />
      <TechStack />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;
