import { Mail, Phone, Github, ExternalLink, Globe, ArrowRight, Send, Linkedin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from '../styles/Contact.module.css';

const contactLinks = [
  {
    icon: Mail,
    iconBg: 'rgba(99,102,241,0.15)',
    iconColor: '#6366f1',
    label: 'Email',
    value: 'pganapathiramkumar@gmail.com',
    href: 'mailto:pganapathiramkumar@gmail.com',
  },
  {
    icon: Phone,
    iconBg: 'rgba(16,185,129,0.15)',
    iconColor: '#10b981',
    label: 'Phone',
    value: '+91 7996656111',
    href: 'tel:+917996656111',
  },
  {
    icon: Linkedin,
    iconBg: 'rgba(14,165,233,0.15)',
    iconColor: '#0ea5e9',
    label: 'LinkedIn',
    value: 'linkedin.com/in/palaniram',
    href: 'https://linkedin.com/in/palaniram',
  },
  {
    icon: Globe,
    iconBg: 'rgba(139,92,246,0.15)',
    iconColor: '#8b5cf6',
    label: 'Website',
    value: 'www.ramkumar.cloud',
    href: 'https://www.ramkumar.cloud',
  },
  {
    icon: Github,
    iconBg: 'rgba(245,158,11,0.15)',
    iconColor: '#f59e0b',
    label: 'GitHub',
    value: 'pganapathiramkumar-cell',
    href: 'https://github.com/pganapathiramkumar-cell/RamVectorWeb',
  },
  {
    icon: ExternalLink,
    iconBg: 'rgba(6,182,212,0.15)',
    iconColor: '#06b6d4',
    label: 'App Store',
    value: 'RamVector — AI Document Intelligence',
    href: 'https://apps.apple.com/in/app/ramvector/id6763949988',
  },
];

const roles = [
  'Chief Architect / VP of Architecture',
  'Principal AI Architect (GenAI / LLM Platforms)',
  'Enterprise Architecture Lead or Director',
  'VP Engineering / Head of Architecture',
  'Strategic Advisory & Pre-Sales Architecture',
];

export default function Contact() {
  const ref = useScrollAnimation();

  return (
    <section className={`section ${styles.wrapper}`} id="contact" ref={ref}>
      <div className="container">
        <div className="fade-up">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Build <span>Something Significant</span></h2>
        </div>

        <div className={styles.inner}>
          <div className={styles.left}>
            <div className={`${styles.availability} fade-up`}>
              <span className={styles.availDot} />
              Open to new opportunities
            </div>

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '0.5rem' }} className="fade-up">
              Whether you're evaluating architecture leadership for an AI transformation programme,
              building a GenAI platform from the ground up, or seeking advisory expertise —
              let's start a conversation.
            </p>

            <div className={styles.contactLinks}>
              {contactLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={`${styles.contactLink} fade-up`}
                >
                  <div className={styles.contactIcon} style={{ background: link.iconBg, color: link.iconColor }}>
                    <link.icon size={18} />
                  </div>
                  <div className={styles.contactInfo}>
                    <div className={styles.contactLabel}>{link.label}</div>
                    <div className={styles.contactValue}>{link.value}</div>
                  </div>
                  <ArrowRight size={16} className={styles.contactArrow} />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <div className={`${styles.cta} fade-up`}>
              <h3 className={styles.ctaTitle}>
                Looking for a <span>Principal Architect</span> who bridges AI and enterprise strategy?
              </h3>
              <p className={styles.ctaDesc}>
                Available for senior individual contributor and leadership roles across AI architecture,
                enterprise architecture, and cloud platform engineering. Azure Solutions Architect Expert
                (AZ-305) · Anthropic Certified · TOGAF Aligned.
              </p>

              <div className={styles.ctaRoles}>
                {roles.map(r => (
                  <div key={r} className={styles.ctaRole}>
                    <span className={styles.ctaRoleDot} />
                    {r}
                  </div>
                ))}
              </div>

              <div className={styles.ctaBtns}>
                <a href="mailto:pganapathiramkumar@gmail.com" className={`${styles.ctaBtn} ${styles.ctaBtnPrimary}`}>
                  <Send size={15} /> Send an Email
                </a>
                <a
                  href="https://linkedin.com/in/palaniram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.ctaBtn} ${styles.ctaBtnOutline}`}
                >
                  <Linkedin size={15} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
