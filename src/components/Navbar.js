  import React from 'react';
  import './Navbar.css';

  function Navbar() {
    return (
      <nav className="navbar">
        <a href="#cover">Home</a>
        <a href="#about">About Me</a>
        <a href="#resume">Resume</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#achievements">Certifications</a>
        <a href="#contact">Contact</a>
      </nav>
    );
  }

  export default Navbar;