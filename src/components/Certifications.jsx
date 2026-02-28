import { useState, useEffect } from 'react';
import './Certifications.css';

const Certifications = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setLoaded(true);
    
    // Generate particles once when component mounts
    const newParticles = [];
    for (let i = 0; i < 15; i++) {
      newParticles.push({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        size: Math.random() * 4 + 1
      });
    }
    setParticles(newParticles);
  }, []);

  const certifications = [
    {
      id: 1,
      name: 'Node.js Certificate',
      issuer: 'HackerRank',
      category: 'backend',
      icon: '🟢',
      image: '/src/assets/nodecertificate.png',
      link: 'https://www.hackerrank.com/certificates/00f21150a082',
      date: '2024',
      skills: ['Node.js', 'Express', 'JavaScript']
    },
    {
      id: 2,
      name: 'Angular Certificate',
      issuer: 'HackerRank',
      category: 'frontend',
      icon: '🅰️',
      image: '/src/assets/angular.png',
      link: 'https://www.hackerrank.com/certificates/e2d67f7b7d1d',
      date: '2024',
      skills: ['Angular', 'TypeScript', 'RxJS']
    },
    {
      id: 3,
      name: 'JavaScript Certificate',
      issuer: 'HackerRank',
      category: 'frontend',
      icon: '⚡',
      image: '/src/assets/js.png',
      link: 'https://www.hackerrank.com/certificates/1968551051b0',
      date: '2023',
      skills: ['JavaScript', 'ES6', 'DOM']
    },
    {
      id: 4,
      name: 'CSS Certificate',
      issuer: 'HackerRank',
      category: 'frontend',
      icon: '🎨',
      image: '/src/assets/css.png',
      link: 'https://www.hackerrank.com/certificates/a33f4bbf3046',
      date: '2023',
      skills: ['CSS3', 'Flexbox', 'Grid', 'Animations']
    },
       {
      id: 5,
      name: 'Google Cloud Computing Foundations  Google Cloud Study Jam',
      issuer: 'Google Cloud',
      category: '',
      icon: 'Google',
      image: '/src/assets/google.png',
      link: 'No link available',
      date: '2023',
      skills: []
    }
  ];

  const filters = [
    { id: 'all', name: 'All Certificates', icon: '📜' },
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'backend', name: 'Backend', icon: '⚙️' }
  ];

  const filteredCerts = activeFilter === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeFilter);

  const handleViewCertificate = (link) => {
    window.open(link, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="certs-container">
      {/* Background Elements */}
      <div className="certs-bg">
        <div className="certs-sphere sphere-1"></div>
        <div className="certs-sphere sphere-2"></div>
        <div className="certs-sphere sphere-3"></div>
      </div>

      {/* Floating Particles - Now using state */}
      <div className="certs-particles">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>

      <div className={`certs-content ${loaded ? 'loaded' : ''}`}>
        {/* Header */}
        <div className="certs-header">
          <span className="certs-tag">🏆 My Achievements</span>
          <h1 className="certs-title">
            Certifications <span className="gradient-text">from HackerRank</span>
          </h1>
          <p className="certs-subtitle">
            Verified certifications in modern web technologies
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="certs-filter">
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

        {/* Certificates Grid */}
        <div className="certs-grid">
          {filteredCerts.map((cert, index) => (
            <div 
              key={cert.id} 
              className="cert-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="cert-card-inner">
                {/* Certificate Image/Icon Section */}
                <div className="cert-image-section">
                  {cert.image ? (
                    <img src={cert.image} alt={cert.name} className="cert-image" />
                  ) : (
                    <div className="cert-icon">{cert.icon}</div>
                  )}
                  <div className="cert-issuer-badge">
                    <span className="issuer-icon">🏅</span>
                    <span>{cert.issuer}</span>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="cert-details">
                  <h3 className="cert-name">{cert.name}</h3>
                  <p className="cert-date">Issued: {cert.date}</p>
                  
                  {/* Skills Tags */}
                  <div className="cert-skills">
                    {cert.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="cert-actions">
                    {cert.link ? (
                      <button 
                        className="view-btn"
                        onClick={() => handleViewCertificate(cert.link)}
                      >
                        <span>View Certificate</span>
                        <span className="btn-icon">🔗</span>
                      </button>
                    ) : (
                      <button className="view-btn image-only">
                        <span>Certificate Image</span>
                        <span className="btn-icon">🖼️</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="cert-glow"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="certs-stats">
          <div className="stat-card">
            <span className="stat-icon">📜</span>
            <span className="stat-number">{certifications.length}</span>
            <span className="stat-label">Total Certificates</span>
          </div>
          <div className="stat-card">
            <span className="stat-icon">🏅</span>
            <span className="stat-number">HackerRank</span>
            <span className="stat-label">Issuer</span>
          </div>
          <div className="stat-card">
            <span className="stat-icon">🎯</span>
            <span className="stat-number">4</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-card">
            <span className="stat-icon">✅</span>
            <span className="stat-number">2024</span>
            <span className="stat-label">Latest</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;