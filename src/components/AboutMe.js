  import React from 'react';
  import './AboutMe.css';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

  const AboutMe = () => {
    return (
      <section id="about">
        <div className="about-container">
          <div className="about-img">
            <img
              src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
              alt="Profile"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/250';
              }}
            />
          </div>

          <div className="about-text">
            <p>
              I am a passionate web developer with a background in computer science. With a keen eye
              for design and a love for clean code, I specialize in creating responsive and
              user-friendly websites and applications.
            </p>
            <p>
              I believe in continuous learning and adapting to new technologies. My goal is to create
              impactful digital experiences that not only look great but also solve real problems.
            </p>

            <div className="bio-info">
              <div>
                <strong>Name:</strong> Devarakonda Srivatsav
              </div>
              <div>
                <strong>Phone:</strong> +91 8688319072
              </div>
              <div>
                <strong>Email:</strong> devarakondasrivatsav@gmail.com
              </div>
              <div>
                <strong>Location:</strong> Visakhapatnam, Andhra Pradesh, India
              </div>
              <div>
                <strong>Degree:</strong> B.Tech in Computer Science (Data Science)
              </div>
              <div>
                <strong>Languages:</strong> English, Telugu
              </div>
            </div>

            <a href="#contact" className="btn">
              <FontAwesomeIcon icon="fa-solid fa-paper-plane" className="me-2" />
              Contact Me
            </a>
          </div>
        </div>
      </section>
    );
  };

  export default AboutMe;
