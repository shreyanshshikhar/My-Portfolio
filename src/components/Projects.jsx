import { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'PORTFOLIO WEBSITE USING ANGULAR',
      description: 'Personal portfolio website using Angular, showcasing my skills and projects. Integrated engaging animation effects with the AOS library for a dynamic user experience and saving form data using Formspree.',
      tech: ['Angular', 'AOS', 'Formspree', 'CSS3'],
      category: 'frontend',
      icon: '🌐',
      color: '#3b82f6',
      github: 'https://github.com/shreyanshshikhar/Portfolio_Using_Angular',
      demo: 'https://portfolio-using-angular-ez5x.vercel.app/'
    },
    {
      id: 2,
      title: 'FOOD ORDER WEBSITE',
      description: 'Website is made using angular. Key Features (for now): Add to Cart! Easily select and add your favorite dishes to your cart, making ordering a breeze. Food Search: Quickly find the cuisine or dish you are craving for a delightful dining experience.',
      tech: ['Angular', 'TypeScript', 'RxJS', 'SCSS'],
      category: 'frontend',
      icon: '🍔',
      color: '#8b5cf6',
      github: 'https://github.com/shreyanshshikhar/Food-order-Website-Angular',
      demo: 'https://food-order-demo.com'
    },
    {
      id: 3,
      title: 'BLOG WEBSITE USING MEAN STACK',
      description: 'The backend, built on Express and NodeJS, ensures secure user management and data storage in MongoDB. Angular on the frontend delivers a dynamic article platform with engaging features, static pages for information, and an upcoming Admin Panel for enhanced control.',
      tech: ['MongoDB', 'Express.js', 'Angular', 'Node.js'],
      category: 'fullstack',
      icon: '📝',
      color: '#ec4899',
      github: 'https://github.com/shreyanshshikhar/MEAN-STACK-BLOG-WEBSITE',
      demo: 'https://blog-demo.com'
    },
    {
      id: 4,
      title: 'RECIPE SHARING WEBSITE',
      description: 'A Recipe Sharing Platform Built with MongoDB, Express.js, and EJS! Easy Recipe Submission.',
      tech: ['MongoDB', 'Express.js', 'EJS', 'Node.js'],
      category: 'fullstack',
      icon: '🍳',
      color: '#10b981',
      github: 'https://github.com/shreyanshshikhar/Recipe-sharing-website',
      demo: 'https://recipe-sharing-website.vercel.app/'
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects', icon: '🚀' },
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'fullstack', name: 'Full Stack', icon: '⚙️' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="projects-container">
      {/* Background Elements */}
      <div className="projects-bg">
        <div className="project-sphere sphere-1"></div>
        <div className="project-sphere sphere-2"></div>
        <div className="project-sphere sphere-3"></div>
      </div>

      {/* Floating Particles */}
      <div className="projects-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
            }}
          />
        ))}
      </div>

      <div className={`projects-content ${loaded ? 'loaded' : ''}`}>
        {/* Header */}
        <div className="projects-header">
          <span className="projects-tag">💼 My Work</span>
          <h1 className="projects-title">
            Proje<span className="gradient-text">cts</span>
          </h1>
          <p className="projects-subtitle">
            Here are some of my recent projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="projects-filter">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              <span className="filter-icon">{filter.icon}</span>
              <span className="filter-name">{filter.name}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-card-inner">
                {/* Project Header */}
                <div className="project-header">
                  <div className="project-icon-wrapper">
                    <span className="project-icon">{project.icon}</span>
                  </div>
                  <h2 className="project-title">{project.title}</h2>
                </div>

                {/* Project Description */}
                <p className="project-description">{project.description}</p>

                {/* Tech Stack */}
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <span className="link-icon">📦</span>
                    <span>GitHub Link</span>
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="demo-link"
                    >
                      <span className="link-icon">🚀</span>
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>

                {/* Hover Glow Effect */}
                <div className="project-glow"></div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Stats Link */}
        <div className="github-stats">
          <a 
            href="https://github.com/shreyanshshikhar?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-profile-link"
          >
            <span className="github-icon">🐙</span>
            <span>View More on GitHub</span>
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;