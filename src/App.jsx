import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Impact from './components/Impact';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import AIForAnalytics from './components/AIForAnalytics';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <AIForAnalytics />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
