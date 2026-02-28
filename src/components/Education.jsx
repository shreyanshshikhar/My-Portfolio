import { useState, useEffect } from 'react';
import './Education.css';

const Education = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeYear, setActiveYear] = useState('all');

  useEffect(() => {
    setLoaded(true);
  }, []);

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science",
      institution: "IIMT College Of Engineering",
      location: "Greater Noida, Uttar Pradesh",
      duration: "2020 - 2024",
      percentage: "70%",
      status: "Completed",
      icon: "🎓",
      year: "2024",
      description: "Completed B.Tech in Computer Science with 70% aggregate. Gained strong foundation in programming, web development, and database management.",
      subjects: ["Data Structures", "Algorithms", "Web Development", "Database Management", "Operating Systems", "Computer Networks"]
    },
    {
      id: 2,
      degree: "Intermediate (12th)",
      field: "Science (PCM)",
      institution: "Central Board of Secondary Education (CBSE)",
      location: "Gorakhpur, Uttar Pradesh",
      duration: "2019 - 2020",
      percentage: "86.6%",
      status: "Completed",
      icon: "📚",
      year: "2020",
      description: "Completed intermediate education with focus on Physics, Chemistry, and Mathematics.",
      subjects: ["Physics", "Chemistry", "Mathematics", "English"]
    },
    {
      id: 3,
      degree: "High School (10th)",
      field: "General",
      institution: "Central Board of Secondary Education (CBSE) ",
      location: "Gorakhpur, Uttar Pradesh",
      duration: "2018 - 2019",
      percentage: "85%",
      status: "Completed",
      icon: "🏫",
      year: "2018",
      description: "Completed high school education with strong academic record.",
      subjects: ["Mathematics", "Science", "English", "Social Studies"]
    }
  ];

  const years = ['all', '2024', '2020', '2018'];
  
  const filteredEducation = activeYear === 'all' 
    ? educationData 
    : educationData.filter(edu => edu.year === activeYear);

  return (
    <div className="education-container">
      {/* Background Elements */}
      <div className="education-bg">
        <div className="edu-sphere sphere-1"></div>
        <div className="edu-sphere sphere-2"></div>
      </div>

      <div className={`education-content ${loaded ? 'loaded' : ''}`}>
        {/* Header */}
        <div className="education-header">
          <span className="edu-tag">📖 My Academic Journey</span>
          <h1 className="education-title">
            Education <span className="gradient-text">Background</span>
          </h1>
          <p className="education-subtitle">
            B.Tech Computer Science with 70% - Completed
          </p>
        </div>

        {/* Year Filter */}
        <div className="year-filter">
          {years.map(year => (
            <button
              key={year}
              className={`year-btn ${activeYear === year ? 'active' : ''}`}
              onClick={() => setActiveYear(year)}
            >
              {year === 'all' ? '📋 All' : `📅 ${year}`}
            </button>
          ))}
        </div>

        {/* Education Cards Grid */}
        <div className="education-grid">
          {filteredEducation.map((edu, index) => (
            <div 
              key={edu.id} 
              className="education-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="edu-card-inner">
                {/* Card Front */}
                <div className="edu-front">
                  <div className="edu-icon">{edu.icon}</div>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <p className="edu-field">{edu.field}</p>
                  <div className="edu-badge">{edu.status}</div>
                </div>

                {/* Card Back - Detailed Info */}
                <div className="edu-back">
                  <div className="edu-details">
                    <h4>{edu.institution}</h4>
                    <p className="edu-location">📍 {edu.location}</p>
                    <p className="edu-duration">⏱️ {edu.duration}</p>
                    
                    <div className="edu-percentage-card">
                      <span className="percentage-label">Percentage</span>
                      <span className="percentage-value">{edu.percentage}</span>
                    </div>

                    <div className="edu-subjects">
                      <p className="subjects-label">📚 Key Subjects:</p>
                      <div className="subject-tags">
                        {edu.subjects.map((subject, i) => (
                          <span key={i} className="subject-tag">{subject}</span>
                        ))}
                      </div>
                    </div>

                    <p className="edu-description">{edu.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="education-stats">
          <div className="stat-card">
            <span className="stat-icon">🎓</span>
            <span className="stat-number">B.Tech</span>
            <span className="stat-label">Computer Science</span>
          </div>
          <div className="stat-card">
            <span className="stat-icon">📊</span>
            <span className="stat-number">70%</span>
            <span className="stat-label">Aggregate</span>
          </div>
          <div className="stat-card">
            <span className="stat-icon">🏆</span>
            <span className="stat-number">2024</span>
            <span className="stat-label">Passing Year</span>
          </div>
          <div className="stat-card">
            <span className="stat-icon">✅</span>
            <span className="stat-number">Completed</span>
            <span className="stat-label">Degree Status</span>
          </div>
        </div>

        {/* Achievement Note */}
        <div className="achievement-note">
          <span className="note-icon">⭐</span>
          <p>Completed B.Tech in Computer Science with 70% marks. Strong foundation in web development, data structures, and algorithms.</p>
        </div>
      </div>
    </div>
  );
};

export default Education;