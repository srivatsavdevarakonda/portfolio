import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Indoor Navigation System',
    description: 'A smart indoor navigation solution for railway stations.',
    skills: ['React.js', 'Google Maps API', 'Firebase', 'IoT'],
    outcome: 'Shortlisted in Smart India Hackathon internal round.',
    link: 'https://github.com/yourusername/indoor-navigation',
    image: 'https://via.placeholder.com/300x180?text=Indoor+Navigation'
  },
  {
    title: 'AI-Based Resume Ranker',
    description: 'Ranks resumes using NLP and ML for smart hiring.',
    skills: ['Python', 'NLP', 'Flask'],
    outcome: 'Automated 80% of manual shortlisting.',
    link: 'https://github.com/yourusername/resume-ranker',
    image: 'https://via.placeholder.com/300x180?text=Resume+Ranker'
  },
  {
    title: 'College Homepage (React)',
    description: 'Responsive homepage using React and Bootstrap.',
    skills: ['React.js', 'Bootstrap', 'CSS'],
    outcome: 'Enhanced UI/UX with modular design.',
    link: 'https://your-deployed-link.vercel.app/',
    image: 'https://via.placeholder.com/300x180?text=College+Homepage'
  }
];

function Projects() {
  return React.createElement(
    'section',
    { id: 'projects', className: 'projects-section py-5' },
    React.createElement(
      'div',
      { className: 'container' },
      React.createElement('h2', { className: 'section-title text-center mb-5' }, 'Projects'),
      React.createElement(
        'div',
        { className: 'row' },
        projects.map((project, index) =>
          React.createElement(
            'div',
            { key: index, className: 'col-md-6 col-lg-4 mb-4' },
            React.createElement(
              'div',
              { className: 'project-card shadow-sm rounded p-3 h-100' },
              React.createElement('img', {
                src: project.image,
                alt: project.title,
                className: 'project-image img-fluid mb-3 rounded'
              }),
              React.createElement('h5', null, project.title),
              React.createElement(
                'p',
                { className: 'small' },
                React.createElement('strong', null, 'Description: '),
                project.description
              ),
              React.createElement(
                'p',
                { className: 'small' },
                React.createElement('strong', null, 'Skills: '),
                project.skills.join(', ')
              ),
              React.createElement(
                'p',
                { className: 'small' },
                React.createElement('strong', null, 'Outcome: '),
                project.outcome
              ),
              React.createElement(
                'a',
                {
                  href: project.link,
                  className: 'btn btn-sm btn-outline-primary',
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                'View Project'
              )
            )
          )
        )
      )
    )
  );
}

export default Projects;
