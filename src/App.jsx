import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Competencies from './components/Competencies';
import ArchitectureExpertise from './components/ArchitectureExpertise';
import AIShowcase from './components/AIShowcase';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
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
        <Projects />
        <TechStack />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
