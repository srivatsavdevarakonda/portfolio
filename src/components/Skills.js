import React from 'react';
import './Skills.css';

const Skills = () => {
  // Define skills with their certification URLs
  const skillsData = [
    {
      title: "Python",
      percent: 90,
      certificationUrl: "https://your-certification-link.com/python" // Replace with actual URL
    },
    {
      title: "Machine Learning",
      percent: 85,
      certificationUrl: "https://your-certification-link.com/ml" // Replace with actual URL
    },
    {
      title: "Web Development",
      percent: 80,
      certificationUrl: "https://your-certification-link.com/webdev" // Replace with actual URL
    },
    {
      title: "Cybersecurity",
      percent: 75,
      certificationUrl: "https://your-certification-link.com/cybersecurity" // Replace with actual URL
    },
    {
      title: "Data Analysis",
      percent: 70,
      certificationUrl: "https://your-certification-link.com/data-analysis" // Replace with actual URL
    },
    {
      title: "Problem Solving",
      percent: 95,
      certificationUrl: "https://your-certification-link.com/problem-solving" // Replace with actual URL
    }
  ];

  return (
    <section id="skills" className="py-5">
      <div className="container">
        <div className="section-title mb-4" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
          <h2>My Skills</h2>
        </div>

        {/* Skills Grid - All skills in one container for compact layout */}
        <div className="skills-container">
          {skillsData.map((skill, index) => (
            <SkillItem 
              key={index}
              title={skill.title} 
              percent={skill.percent} 
              certificationUrl={skill.certificationUrl}
              delay={index * 100} // Staggered animation delay
            />
          ))}
        </div>

        {/* Download CV button */}
        <div className="mt-4">
          <a href="#" className="btn btn-primary">Download CV</a>
        </div>
      </div>
    </section>
  );
};

const SkillItem = ({ title, percent, certificationUrl, delay = 0 }) => {
  const handleSkillClick = (e) => {
    e.preventDefault();
    
    // Add visual feedback
    const element = e.currentTarget;
    element.style.transform = 'translateY(-3px) scale(1.01)';
    
    setTimeout(() => {
      // Open certification in new tab
      window.open(certificationUrl, '_blank', 'noopener,noreferrer');
      
      // Reset visual feedback
      element.style.transform = '';
    }, 150);
  };

  return (
    <div 
      className="skill-item mb-3" 
      onClick={handleSkillClick}
      data-aos="fade-up" 
      data-aos-duration="600" 
      data-aos-delay={delay}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleSkillClick(e);
        }
      }}
      aria-label={`View ${title} certification`}
      title={`Click to view ${title} certification`}
    >
      <div className="d-flex justify-content-between">
        <span>{title}</span>
        <span>{percent}%</span>
      </div>
      <div className="progress">
        <div 
          className="progress-bar" 
          role="progressbar" 
          style={{ width: `${percent}%` }}
          aria-valuenow={percent}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default Skills;