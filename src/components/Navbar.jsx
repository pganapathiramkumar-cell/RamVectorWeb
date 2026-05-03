import { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Mail, Phone, Linkedin, Github, Globe } from 'lucide-react';
import styles from '../styles/Navbar.module.css';

const topLinks = [
  { icon: Mail,        label: 'pganapathiramkumar@gmail.com', href: 'mailto:pganapathiramkumar@gmail.com' },
  { icon: Phone,       label: '+91 7996656111',               href: 'tel:+917996656111' },
  { icon: Linkedin,    label: 'LinkedIn',                     href: 'https://linkedin.com/in/palaniram',                                     external: true },
  { icon: Globe,       label: 'ramkumar.cloud',               href: 'https://www.ramkumar.cloud',                                           external: true },
  { icon: Github,      label: 'GitHub',                       href: 'https://github.com/pganapathiramkumar-cell/RamVectorWeb',               external: true },
  { icon: ExternalLink,label: 'ORCID',                        href: 'https://orcid.org/0009-0006-9439-5067',                                external: true },
  { icon: ExternalLink,label: 'App Store',                    href: 'https://apps.apple.com/in/app/ramvector/id6763949988',                 external: true },
];

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
      {/* ── Top contact strip ── */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <div className={styles.topBarLeft}>
            <a href="mailto:pganapathiramkumar@gmail.com" className={styles.topLink}>
              <Mail size={11} /> pganapathiramkumar@gmail.com
            </a>
            <span className={styles.topDivider} />
            <a href="tel:+917996656111" className={styles.topLink}>
              <Phone size={11} /> +91 7996656111
            </a>
          </div>
          <div className={styles.topBarRight}>
            {topLinks.slice(2).map(l => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={styles.topIconLink}
                title={l.label}
              >
                <l.icon size={13} />
                <span>{l.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main navigation ── */}
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
        <div className={styles.inner}>
          <a href="#home" className={styles.logo}>
            <div className={styles.logoMark}>Ram</div>
            <div className={styles.logoText}>
              <span className={styles.logoName}>Ram</span>
              <span className={styles.logoRole}>AI · Enterprise Architect</span>
            </div>
          </a>

          <ul className={styles.links}>
            {navLinks.map(l => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
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
              <><span /><span /><span /></>
            )}
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      <div className={`${styles.mobileMenu} ${open ? styles.open : ''}`}>
        {navLinks.map(l => (
          <a key={l.label} href={l.href} onClick={closeMenu}>{l.label}</a>
        ))}
        <div className={styles.mobileContacts}>
          <a href="mailto:pganapathiramkumar@gmail.com" className={styles.mobileContact}>
            <Mail size={13} /> pganapathiramkumar@gmail.com
          </a>
          <a href="tel:+917996656111" className={styles.mobileContact}>
            <Phone size={13} /> +91 7996656111
          </a>
          <a href="https://linkedin.com/in/palaniram" target="_blank" rel="noopener noreferrer" className={styles.mobileContact}>
            <Linkedin size={13} /> LinkedIn
          </a>
          <a href="https://www.ramkumar.cloud" target="_blank" rel="noopener noreferrer" className={styles.mobileContact}>
            <Globe size={13} /> www.ramkumar.cloud
          </a>
          <a href="https://github.com/pganapathiramkumar-cell/RamVectorWeb" target="_blank" rel="noopener noreferrer" className={styles.mobileContact}>
            <Github size={13} /> GitHub
          </a>
          <a href="https://orcid.org/0009-0006-9439-5067" target="_blank" rel="noopener noreferrer" className={styles.mobileContact}>
            <ExternalLink size={13} /> ORCID
          </a>
        </div>
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
