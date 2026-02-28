import Navbar from './components/Navbar';
import Home from './components/Home';
import Technologies from './components/Technologies';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Project from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/* Home Section */}
      <section id="home" className="section">
        <Home />
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="section">
        <Technologies />
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <Education />
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <Project />
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section">
        <Certifications />
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <Contact />
      </section>
    </div>
  );
}

export default App;