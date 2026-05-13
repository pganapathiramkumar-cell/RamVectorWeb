import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero   from './components/Hero';
import SEOHead from './seo/SEOHead';
import NotFound from './components/NotFound';

// Portfolio sections
const About                 = lazy(() => import('./components/About'));
const Competencies          = lazy(() => import('./components/Competencies'));
const ArchitectureExpertise = lazy(() => import('./components/ArchitectureExpertise'));
const AIShowcase            = lazy(() => import('./components/AIShowcase'));
const Projects              = lazy(() => import('./components/Projects'));
const TechStack             = lazy(() => import('./components/TechStack'));
const Certifications        = lazy(() => import('./components/Certifications'));
const Education             = lazy(() => import('./components/Education'));
const Leadership            = lazy(() => import('./components/Leadership'));
const Contact               = lazy(() => import('./components/Contact'));
const Footer                = lazy(() => import('./components/Footer'));

// Content pages — each export resolved individually at module level
const BlogList       = lazy(() => import('./pages/Blog').then(m => ({ default: m.BlogList })));
const BlogPost       = lazy(() => import('./pages/Blog').then(m => ({ default: m.BlogPost })));
const TutorialList   = lazy(() => import('./pages/Tutorials').then(m => ({ default: m.TutorialList })));
const TutorialPost   = lazy(() => import('./pages/Tutorials').then(m => ({ default: m.TutorialPost })));
const ComparisonList = lazy(() => import('./pages/Comparisons').then(m => ({ default: m.ComparisonList })));
const ComparisonPost = lazy(() => import('./pages/Comparisons').then(m => ({ default: m.ComparisonPost })));
const DocList        = lazy(() => import('./pages/Docs').then(m => ({ default: m.DocList })));
const DocPost        = lazy(() => import('./pages/Docs').then(m => ({ default: m.DocPost })));

function Portfolio() {
  return (
    <>
      <SEOHead />
      <header role="banner"><Navbar /></header>
      <main id="main-content">
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
      <Suspense fallback={null}><Footer /></Suspense>
    </>
  );
}

function ContentLayout({ children }) {
  return (
    <>
      <header role="banner"><Navbar /></header>
      <main id="main-content">
        <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
          {children}
        </Suspense>
      </main>
      <Suspense fallback={null}><Footer /></Suspense>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                     element={<Portfolio />} />
        <Route path="/blog"                 element={<ContentLayout><BlogList /></ContentLayout>} />
        <Route path="/blog/:slug"           element={<ContentLayout><BlogPost /></ContentLayout>} />
        <Route path="/tutorials"            element={<ContentLayout><TutorialList /></ContentLayout>} />
        <Route path="/tutorials/:slug"      element={<ContentLayout><TutorialPost /></ContentLayout>} />
        <Route path="/comparisons"          element={<ContentLayout><ComparisonList /></ContentLayout>} />
        <Route path="/comparisons/:slug"    element={<ContentLayout><ComparisonPost /></ContentLayout>} />
        <Route path="/docs"                 element={<ContentLayout><DocList /></ContentLayout>} />
        <Route path="/docs/:slug"           element={<ContentLayout><DocPost /></ContentLayout>} />
        <Route path="*"                     element={<ContentLayout><NotFound /></ContentLayout>} />
      </Routes>
    </BrowserRouter>
  );
}
