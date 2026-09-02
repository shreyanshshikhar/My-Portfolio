import { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

const Contact = () => {
  const [loaded, setLoaded] = useState(false);
  const [state, handleSubmit] = useForm("xykdvoqv"); // Replace with your form ID

  useEffect(() => {
    setLoaded(true);
  }, []);

  const socialLinks = [
    {
      name: 'Instagram',
      icon: '📷',
      color: '#E4405F',
      link: 'https://www.instagram.com/shreyanshsrivastava003?igsh=OHNtZjg3d21tbG1y',
      username: '@shreyanshsrivastava003'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      color: '#0077B5',
      link: 'https://www.linkedin.com/in/shreyansh-shikhar-srivastava',
      username: 'Shreyansh Shikhar Srivastava'
    },
    {
      name: 'GitHub',
      icon: '🐙',
      color: '#333',
      link: 'https://github.com/shreyanshshikhar',
      username: 'shreyanshshikhar'
    },
    {
      name: 'Email',
      icon: '📧',
      color: '#EA4335',
      link: 'mailto:shreyanshshikharsrivastava@gmail.com',
      username: 'shreyanshshikharsrivastava@gmail.com'
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      color: '#25D366',
      link: 'https://wa.me/919336653962?text=Hi%20Shreyansh!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.',
      username: '+91 93xxxxxxxx'
    }
  ];

  return (
    <div className="contact-container">
      {/* Background Elements */}
      <div className="contact-bg">
        <div className="contact-sphere sphere-1"></div>
        <div className="contact-sphere sphere-2"></div>
        <div className="contact-sphere sphere-3"></div>
      </div>

      <div className={`contact-content ${loaded ? 'loaded' : ''}`}>
        {/* Header */}
        <div className="contact-header">
          <span className="contact-tag">📬 Get In Touch</span>
          <h1 className="contact-title">
            Contact <span className="gradient-text">Me</span>
          </h1>
          <p className="contact-subtitle">
            Let's connect and discuss opportunities
          </p>
        </div>

        {/* Main Contact Section */}
        <div className="contact-main">
          {/* Social Media Side */}
          <div className="social-side">
            <h2 className="social-title">Connect With Me</h2>
            <p className="social-description">
              Feel free to reach out on any of these platforms
            </p>

            <div className="social-grid">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                  style={{ '--social-color': social.color }}
                >
                  <div className="social-icon-wrapper">
                    <span className="social-icon">{social.icon}</span>
                  </div>
                  <div className="social-info">
                    <h3 className="social-name">{social.name}</h3>
                    <p className="social-handle">{social.username}</p>
                  </div>
                  <span className="social-arrow">→</span>
                </a>
              ))}
            </div>

            {/* Availability Status */}
            <div className="availability-badge">
              <span className="status-dot"></span>
              <span>Available for opportunities</span>
            </div>
          </div>

          {/* Form Side */}
          <div className="form-side">
            <h2 className="form-title">Send Me a Message</h2>
            <p className="form-description">
              I'll get back to you as soon as possible
            </p>

            {state.succeeded ? (
              <div className="success-message success-complete">
                <div className="success-icon">✅</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thanks for reaching out! I'll get back to you soon.</p>
                <button 
                  className="reset-btn"
                  onClick={() => window.location.reload()}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <span className="label-icon">👤</span>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="form-input"
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                    className="validation-error"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <span className="label-icon">📧</span>
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="form-input"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="validation-error"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <span className="label-icon">💬</span>
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Hi Shreyansh! I'd like to connect with you..."
                    rows="5"
                    required
                    className="form-input"
                  ></textarea>
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="validation-error"
                  />
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={state.submitting}
                >
                  {state.submitting ? (
                    <span className="sending">
                      <span className="spinner"></span>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span className="btn-icon">✈️</span>
                    </>
                  )}
                </button>

                {state.errors && state.errors.length > 0 && (
                  <div className="error-message">
                    ❌ Please check the form for errors and try again.
                  </div>
                )}
              </form>
            )}

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
