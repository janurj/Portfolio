import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Internships from "./components/Internships";
import MailMe from "./components/MailMe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <section id="about" className="section-dark section">
        <About />
      </section>

      <section id="education" className="section-light section">
        <Education />
      </section>

      <section id="projects" className="section-dark section">
        <Projects />
      </section>

      <section id="skills" className="section-light section">
        <Skills />
      </section>

      <section id="certifications" className="section-dark section">
        <Certifications />
      </section>

      <section id="internships" className="section-light section">
        <Internships />
      </section>
      
        <MailMe />
      
      <footer id="footer" className="footer">
        <Footer />
        </footer>
    </>
  );
}

export default App;
