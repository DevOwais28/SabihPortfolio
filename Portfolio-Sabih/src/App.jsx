import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Employment from './components/Employment.jsx';
import Education from './components/Education.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import Navbar from './components/Navbar.jsx';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <ThemeToggle />
      <Hero />
      <About />
      <Employment />
      <Education />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
