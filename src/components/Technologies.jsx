import { useState, useEffect } from 'react';
import './Technologies.css';

const Technologies = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setLoaded(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Technologies', icon: '🔮' },
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'backend', name: 'Backend', icon: '⚙️' },
    { id: 'database', name: 'Database', icon: '🗄️' },
    { id: 'tools', name: 'Tools', icon: '🛠️' }
  ];

  const technologies = [
    // Frontend
    { name: 'HTML', icon: '🌐', category: 'frontend' },
    { name: 'CSS', icon: '🎨', category: 'frontend' },
    { name: 'Bootstrap', icon: '🅱️', category: 'frontend' },
    { name: 'Tailwind', icon: '🌊', category: 'frontend' },
    { name: 'JavaScript', icon: '⚡', category: 'frontend' },
    { name: 'Angular', icon: '🅰️', category: 'frontend' },
    { name: 'TypeScript', icon: '📘', category: 'frontend' },
    // Backend
    { name: 'Node.js', icon: '🟢', category: 'backend' },
    { name: 'Express.js', icon: '🚂', category: 'backend' },
    // Database
    { name: 'MongoDB', icon: '🍃', category: 'database' },
    // Tools
    { name: 'VS Code', icon: '📝', category: 'tools' },
    { name: 'Postman', icon: '📮', category: 'tools' },
    { name: 'GitHub', icon: '🐙', category: 'tools' }
  ];

  const filteredTech = activeCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  return (
    <div className="tech-container">
      {/* Background Elements */}
      <div className="tech-bg">
        <div className="tech-sphere sphere-1"></div>
        <div className="tech-sphere sphere-2"></div>
      </div>

      <div className={`tech-content ${loaded ? 'loaded' : ''}`}>
        {/* Header */}
        <div className="tech-header">
          <span className="tech-tag">💻 My Skills</span>
          <h1 className="tech-title">
            Technologies <span className="gradient-text">I Know</span>
          </h1>
          <p className="tech-subtitle">
            Here are the technologies and tools I work with
          </p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="cat-icon">{cat.icon}</span>
              <span className="cat-name">{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="tech-grid">
          {filteredTech.map((tech, index) => (
            <div 
              key={tech.name} 
              className="tech-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="tech-card-content">
                <span className="tech-icon">{tech.icon}</span>
                <h3 className="tech-name">{tech.name}</h3>
                <span className="tech-category-badge">{tech.category}</span>
                <div className="tech-glow-effect"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Stats */}
        <div className="tech-stats">
          <div className="stat-item">
            <span className="stat-value">{technologies.length}</span>
            <span className="stat-label">Total Technologies</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">7</span>
            <span className="stat-label">Frontend</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">2</span>
            <span className="stat-label">Backend</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">1</span>
            <span className="stat-label">Database</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">3</span>
            <span className="stat-label">Tools</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;