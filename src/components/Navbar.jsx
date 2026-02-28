import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'technologies', 'education', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (sectionId) => {
    setIsOpen(false);
    setActiveSection(sectionId);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of navbar
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'home', icon: '🏠', text: 'Home' },
    { id: 'technologies', icon: '💻', text: 'Tech' },
    { id: 'education', icon: '🎓', text: 'Education' },
    { id: 'projects', icon: '🚀', text: 'Projects' },
    { id: 'certifications', icon: '📜', text: 'Certs' },
    { id: 'contact', icon: '📧', text: 'Contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        {/* 3D Logo */}
        <div 
          className="nav-logo" 
          onClick={() => handleLinkClick('home')}
          style={{ cursor: 'pointer' }}
        >
          <div className="logo-3d">
            <span className="logo-front">S</span>
            <span className="logo-back">S</span>
            <span className="logo-left">S</span>
            <span className="logo-right">S</span>
            <span className="logo-top">S</span>
            <span className="logo-bottom">S</span>
          </div>
          <span className="logo-text">hreyansh.</span>
        </div>

        {/* Desktop Menu */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map(item => (
            <li key={item.id} className="nav-item">
              <button
                onClick={() => handleLinkClick(item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.text}</span>
                <span className="nav-indicator"></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Resume Button (Desktop) */}
        <a 
          href="Shreyansh_Shikhar_Srivastava_Final_Resume.pdf" 
          className="resume-btn desktop-only"
            download="Shreyansh_Shikhar_Srivastava_Resume.pdf"

          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="btn-text">Resume</span>
          <span className="btn-icon">📄</span>
          <span className="btn-shine"></span>
        </a>

        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;