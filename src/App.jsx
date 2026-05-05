import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero   from './components/Hero';
import SEOHead from './seo/SEOHead';

// Lazy-load everything below the fold — Hero + Navbar are eager (above fold).
const About                = lazy(() => import('./components/About'));
const Competencies         = lazy(() => import('./components/Competencies'));
const ArchitectureExpertise= lazy(() => import('./components/ArchitectureExpertise'));
const AIShowcase           = lazy(() => import('./components/AIShowcase'));
const Projects             = lazy(() => import('./components/Projects'));
const TechStack            = lazy(() => import('./components/TechStack'));
const Certifications       = lazy(() => import('./components/Certifications'));
const Education            = lazy(() => import('./components/Education'));
const Leadership           = lazy(() => import('./components/Leadership'));
const Contact              = lazy(() => import('./components/Contact'));
const Footer               = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <>
      <SEOHead />

      {/* <header> wraps the site-wide navigation landmark */}
      <header role="banner">
        <Navbar />
      </header>

      <main id="main-content">
        {/* Hero is eager — it is the first content crawlers and users see */}
        <Hero />

        <Suspense fallback={null}>
          <About />
          <Competencies />
          <ArchitectureExpertise />
          <AIShowcase />
          <Projects />
          <TechStack />
          <Certifications />
          <Education />
          <Leadership />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
