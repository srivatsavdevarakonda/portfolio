// App.js
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import Bootstrap CSS (if not already globally imported)
import 'bootstrap/dist/css/bootstrap.min.css';

// If you use AOS animations, import and initialize AOS here
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Resume />
      <Skills />
      <Projects />
        <Contact />
      <Footer />
    </div>
  );
}

export default App;
