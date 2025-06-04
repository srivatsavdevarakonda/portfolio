// File: src/components/Home.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLaptopCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { TypeAnimation } from 'react-type-animation';
import './Home.css';

function Home() {
  return (
    <section
      id="home"
      className="d-flex align-items-center justify-content-center text-center text-white full-height-section"
    >
      <div className="container text-center">
        <h1 className="display-3 fw-bold mb-4 animate-on-scroll">
          Hello, I'm <span style={{ color: '#3a86ff' }}>Devarakonda Srivatsav</span>
        </h1>
        <h2 className="h3 mb-4 animate-on-scroll">
          I'm a{' '}
          <TypeAnimation
            sequence={[
              'Web Development Enthusiast',
              1000,
              'Cybersecurity Enthusiast',
              1000,
              'Problem Solver',
              1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{ color: '#ff006e' }}
          />
        </h2>
        <div className="mt-5 animate-on-scroll">
          <a href="#about" className="btn btn-primary btn-lg me-3 px-4 py-2 rounded-pill">
            <FontAwesomeIcon icon={faUser} className="me-2" />
            About Me
          </a>
          <a href="#projects" className="btn btn-outline-light btn-lg px-4 py-2 rounded-pill">
            <FontAwesomeIcon icon={faLaptopCode} className="me-2" />
            My Work
          </a>
        </div>
        <div className="mt-5 animate-on-scroll">
          <div className="social-links">
            <a href="https://github.com/srivatsavdevarakonda" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" className="mx-2" />
            </a>
            <a href="https://www.linkedin.com/in/d-srivatsav-2a7a90247/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="mx-2" />
            </a>
            <a href="#contact">
              <FontAwesomeIcon icon={faEnvelope} size="2x" className="mx-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
