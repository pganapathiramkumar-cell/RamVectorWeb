import { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import styles from '../styles/Navbar.module.css';

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Expertise',  href: '#architecture' },
  { label: 'AI Systems', href: '#ai-systems' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
        <div className={styles.inner}>
          <a href="#home" className={styles.logo}>
            <div className={styles.logoMark}>RV</div>
            <div className={styles.logoText}>
              <span className={styles.logoName}>G. Ramkumar Palanivelu</span>
              <span className={styles.logoRole}>AI · Enterprise Architect</span>
            </div>
          </a>

          <ul className={styles.links}>
            {navLinks.map(l => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>

          <a
            href="https://apps.apple.com/in/app/ramvector/id6763949988"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            RamVector App <ExternalLink size={13} />
          </a>

          <button
            className={styles.hamburger}
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} color="var(--text-primary)" /> : (
              <>
                <span /><span /><span />
              </>
            )}
          </button>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${open ? styles.open : ''}`}>
        {navLinks.map(l => (
          <a key={l.label} href={l.href} onClick={closeMenu}>{l.label}</a>
        ))}
        <a
          href="https://apps.apple.com/in/app/ramvector/id6763949988"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mobileCta}
          onClick={closeMenu}
        >
          RamVector App ↗
        </a>
      </div>
    </>
  );
}
