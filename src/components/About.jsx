import { Mail, Phone, Github, ExternalLink, Globe, Cpu, Users, Shield } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from '../styles/About.module.css';

const metrics = [
  { value: '12+', label: 'Years Enterprise Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '5+',  label: 'GenAI Platforms' },
  { value: '3',   label: 'Cloud Environments' },
  { value: '20+', label: 'Stakeholders Managed' },
  { value: '4',   label: 'Industry Verticals' },
];

const highlights = [
  {
    icon: Cpu,
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.12)',
    title: 'AI-First Architecture',
    text: 'Designs production-grade LLM systems with governance, observability, and cost control built in from day one.',
  },
  {
    icon: Globe,
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.12)',
    title: 'Multi-Cloud Platform Engineering',
    text: 'Delivered greenfield and migration programs across Azure, AWS, and hybrid environments at enterprise scale.',
  },
  {
    icon: Users,
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.12)',
    title: 'C-Suite Technology Leadership',
    text: 'Trusted advisor to CxOs — translating complex technical strategy into boardroom-ready roadmaps and business cases.',
  },
  {
    icon: Shield,
    color: '#10b981',
    bg: 'rgba(16,185,129,0.12)',
    title: 'Responsible AI & Governance',
    text: 'Champions ethical AI frameworks, TOGAF-aligned architecture governance, and Zero Trust security models.',
  },
];

const profile = [
  { icon: Mail,        label: 'pganapathiramkumar@gmail.com', href: 'mailto:pganapathiramkumar@gmail.com' },
  { icon: Phone,       label: '+91 7996656111',                href: 'tel:+917996656111' },
  { icon: Github,      label: 'pganapathiramkumar-cell',       href: 'https://github.com/pganapathiramkumar-cell/RamVectorWeb', external: true },
  { icon: ExternalLink,label: 'RamVector on App Store',        href: 'https://apps.apple.com/in/app/ramvector/id6763949988', external: true },
];

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section className={`section ${styles.about}`} id="about" ref={ref}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <div className="fade-up">
              <span className="section-label">Executive Summary</span>
              <h2 className="section-title">Architecting <span>AI-Driven</span> Enterprise Transformation</h2>
            </div>

            <p className={`${styles.bio} fade-up`}>
              <strong>Ganapathi Ramkumar Palanivelu</strong> is a senior AI and Enterprise Architect with 12+ years of experience
              designing mission-critical systems at the intersection of artificial intelligence, cloud infrastructure,
              and enterprise strategy. Trusted by C-level stakeholders across financial services, logistics,
              and healthcare, he has delivered 50+ end-to-end architecture engagements — from greenfield AI
              platform design to multi-cloud transformation programs.
            </p>
            <p className={`${styles.bio} fade-up`}>
              As the creator of <strong>RamVector</strong> — an AI-native document intelligence platform
              available on the Apple App Store — he bridges the gap between cutting-edge LLM engineering
              and enterprise governance frameworks, designing systems that are technically sound,
              strategically aligned, cost-optimised, and production-ready from day one.
            </p>

            <div className={styles.highlights}>
              {highlights.map(h => (
                <div key={h.title} className={`${styles.highlight} fade-up`}>
                  <div className={styles.highlightIcon} style={{ background: h.bg, color: h.color }}>
                    <h.icon size={18} />
                  </div>
                  <div className={styles.highlightText}>
                    <h4>{h.title}</h4>
                    <p>{h.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <div className={`${styles.metricsGrid} fade-up`}>
              {metrics.map(m => (
                <div key={m.label} className={styles.metric}>
                  <span className={styles.metricValue}>{m.value}</span>
                  <span className={styles.metricLabel}>{m.label}</span>
                </div>
              ))}
            </div>

            <div className={`${styles.profileCard} fade-up`}>
              {profile.map(p => (
                <div key={p.label} className={styles.profileRow}>
                  <p.icon size={15} className={styles.profileIcon} />
                  {p.href ? (
                    <a href={p.href} target={p.external ? '_blank' : undefined} rel="noopener noreferrer">
                      {p.label}
                    </a>
                  ) : (
                    <span>{p.label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
