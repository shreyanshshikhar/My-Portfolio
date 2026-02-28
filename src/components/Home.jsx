import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showSecondLine, setShowSecondLine] = useState(false);
  
  const roles = ['React Developer', 'MERN/MEAN Stack Developer', 'Web Developer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentRoleText, setCurrentRoleText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setLoaded(true);
    
    // Typing animation for the main heading
    const text = "Hi, I am Shreyansh";
    let index = 0;
    
    const typingInterval = setInterval(() => {
      if (index <= text.length) {
        setTypedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowSecondLine(true), 500);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  // Role typing animation
  useEffect(() => {
    if (!showSecondLine) return;

    const currentRole = roles[currentRoleIndex];
    let timeout;

    if (!isDeleting) {
      // Typing
      if (currentRoleText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setCurrentRoleText(currentRole.slice(0, currentRoleText.length + 1));
        }, 150);
      } else {
        // Wait before deleting
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      // Deleting
      if (currentRoleText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentRoleText(currentRole.slice(0, currentRoleText.length - 1));
        }, 100);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentRoleText, isDeleting, currentRoleIndex, roles, showSecondLine]);

  return (
    <div className="home-container">
      {/* Background Elements */}
      <div className="gradient-bg">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
      </div>

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className={`hero-section ${loaded ? 'loaded' : ''}`}>
        <div className="hero-content">
          {/* Greeting */}
          <div className="greeting-wrapper">
            <span className="greeting-line"></span>
            <span className="greeting-text">Welcome to my portfolio</span>
            <span className="greeting-line"></span>
          </div>

          {/* Name with typing effect */}
          <h1 className="hero-title">
            <span className="title-line">
              <span className="static-text">{typedText}</span>
              <span className="cursor"></span>
            </span>
          </h1>

          {/* Role with typing animation */}
          {showSecondLine && (
            <div className="role-wrapper">
              <h2 className="hero-subtitle">
                <span className="role-label"></span>
                <span className="role-text">{currentRoleText}</span>
                <span className="cursor cursor-small"></span>
              </h2>
            </div>
          )}

          {/* Updated Description - Shorter and cleaner */}
          {showSecondLine && (
            <p className="hero-description">
              ⚛️ MERN/MEAN Stack Developer skilled in MongoDB, Express.js, Angular, React, and Node.js. 
              I build scalable web applications with modern tools and AI integration for faster, 
              efficient development.
            </p>
          )}

          {/* CTA Buttons */}
          {showSecondLine && (
            <div className="cta-buttons">
              <Link to="https://www.linkedin.com/in/shreyansh-shikhar-srivastava?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="cta-primary" target='blank'>
                <span>Let's Connect</span>
                <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              
            </div>
          )}

          {/* Tech Stack Icons */}
          {showSecondLine && (
            <div className="tech-stack">
              <div className="tech-item" style={{ animationDelay: '0.1s' }}>
                <span className="tech-icon">🍃</span>
                <span className="tech-name">MongoDB</span>
              </div>
              <div className="tech-item" style={{ animationDelay: '0.2s' }}>
                <span className="tech-icon">⚡</span>
                <span className="tech-name">Express.js</span>
              </div>
              <div className="tech-item" style={{ animationDelay: '0.3s' }}>
                <span className="tech-icon">⚛️</span>
                <span className="tech-name">React</span>
              </div>
              <div className="tech-item" style={{ animationDelay: '0.4s' }}>
                <span className="tech-icon">🅰️</span>
                <span className="tech-name">Angular</span>
              </div>
              <div className="tech-item" style={{ animationDelay: '0.5s' }}>
                <span className="tech-icon">🟢</span>
                <span className="tech-name">Node.js</span>
              </div>
            </div>
          )}
        </div>

        {/* Decorative Elements */}
        <div className="hero-decoration">
          <div className="code-snippet">
            <pre>
              <code>
{`const developer = {
  name: "Shreyansh",
  skills: ["MERN", "MEAN", "JavaScript"],
  passion: "Building awesome Web Apps",
  AIassisted: true,
  eagerToLearn: true
};`}
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {showSecondLine && (
        <div className="scroll-indicator">
          <span className="scroll-text">Scroll to explore</span>
          <div className="scroll-line"></div>
        </div>
      )}
    </div>
  );
};

export default Home;