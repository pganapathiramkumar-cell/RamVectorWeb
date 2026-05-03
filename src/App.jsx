import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Competencies from './components/Competencies';
import ArchitectureExpertise from './components/ArchitectureExpertise';
import AIShowcase from './components/AIShowcase';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Competencies />
        <ArchitectureExpertise />
        <AIShowcase />
        <WorkExperience />
        <Projects />
        <TechStack />
        <Certifications />
        <Education />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
