import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="portfolio-app">
      {/* Background radial gradient mesh for corporate aesthetic */}
      <div className="bg-gradient-mesh"></div>
      
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Technical Skills Section */}
      <Skills />
      
      {/* Projects Placeholders */}
      <Projects />
      
      {/* Certifications (HCL GUVI only) */}
      <Certifications />
      
      {/* Form validated Contact Section */}
      <Contact />
      
      {/* Custom Footer */}
      <Footer />
      
      <style>{`
        .portfolio-app {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default App;
