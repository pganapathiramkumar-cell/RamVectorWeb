import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg-base, #0d0d1a)',
      color: 'var(--text-primary, #fff)',
      textAlign: 'center',
      padding: '2rem',
      gap: '1rem',
    }}>
      <p style={{ fontSize: '6rem', fontWeight: 800, lineHeight: 1, color: '#f97316', margin: 0 }}>404</p>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>Page Not Found</h1>
      <p style={{ color: 'var(--text-secondary, #9ca3af)', maxWidth: '400px', lineHeight: 1.6 }}>
        The page you're looking for doesn't exist. Head back to the portfolio or contact Ganapathi Ramkumar Palanivelu directly.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a
          href="/"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.625rem 1.25rem', borderRadius: '0.5rem',
            background: '#f97316', color: '#fff', fontWeight: 600,
            textDecoration: 'none', fontSize: '0.9rem',
          }}
        >
          <Home size={16} /> Back to Home
        </a>
        <a
          href="/#contact"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.625rem 1.25rem', borderRadius: '0.5rem',
            border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontWeight: 600,
            textDecoration: 'none', fontSize: '0.9rem',
          }}
        >
          <ArrowLeft size={16} /> Contact
        </a>
      </div>
    </div>
  );
}
