import { Mail, Phone, Github, ExternalLink, Globe, Cpu, Users, Shield, Linkedin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from '../styles/About.module.css';


const highlights = [
  {
    icon: Cpu,
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.12)',
    title: 'Production GenAI Platform Delivery',
    text: 'Architected Claude (Bedrock) + Azure OpenAI platforms achieving 60% delivery acceleration across 1,000+ enterprise users — with responsible-AI governance and full observability.',
  },
  {
    icon: Globe,
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.12)',
    title: 'Multi-Cloud Platform Engineering',
    text: 'Delivered greenfield and migration programmes across Azure and AWS — including GCP-to-Azure migration with Zero Trust IAM — at enterprise scale across UK, India, and Saudi Arabia.',
  },
  {
    icon: Users,
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.12)',
    title: 'Cross-Functional Team Leadership',
    text: 'Led 15-engineer cross-functional teams across UK and India, coordinating complex migrations with zero downtime and earning formal client appreciation from Infosys.',
  },
  {
    icon: Shield,
    color: '#10b981',
    bg: 'rgba(16,185,129,0.12)',
    title: 'AI Governance & Responsible AI',
    text: 'Established enterprise AI governance frameworks covering responsible-AI controls, model access policies, audit logging, and TOGAF / Zachman-aligned architecture review.',
  },
];

const profile = [
  { icon: Mail,        label: 'pganapathiramkumar@gmail.com',   href: 'mailto:pganapathiramkumar@gmail.com' },
  { icon: Phone,       label: '+91 7996656111',                  href: 'tel:+917996656111' },
  { icon: Linkedin,    label: 'linkedin.com/in/palaniram',       href: 'https://linkedin.com/in/palaniram',                      external: true },
  { icon: Globe,       label: 'www.ramkumar.cloud',              href: 'https://www.ramkumar.cloud',                            external: true },
  { icon: Github,      label: 'pganapathiramkumar-cell',         href: 'https://github.com/pganapathiramkumar-cell/RamVectorWeb', external: true },
  { icon: ExternalLink,label: 'ORCID — 0009-0006-9439-5067',    href: 'https://orcid.org/0009-0006-9439-5067',                  external: true },
  { icon: ExternalLink,label: 'RamVector on App Store',          href: 'https://apps.apple.com/in/app/ramvector/id6763949988',  external: true },
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

            <div className={`${styles.taglineRow} fade-up`}>
              {['Production GenAI Systems', 'RAG & Multi-LLM Architecture', 'Automation Modernisation', 'Multi-Cloud Platform'].map((tag, i) => (
                <span key={tag} className={styles.taglinePill} style={{ animationDelay: `${i * 120}ms` }}>
                  {tag}
                </span>
              ))}
            </div>

            <p className={`${styles.bio} fade-up`}>
              <strong>Ganapathi Ramkumar Palanivelu</strong> is an Enterprise AI Architect and Solution Architect
              with 14+ years designing and delivering scalable AI platforms, multi-cloud architectures, and
              enterprise transformation programmes across Azure and AWS. He has architected production GenAI
              systems using Claude (AWS Bedrock), Azure OpenAI Service, and GPT-4 — driving 60% delivery
              acceleration across 1,000+ enterprise users.
            </p>
            <p className={`${styles.bio} fade-up`}>
              As the creator of <strong>RamVector</strong> — a full-stack RAG AI assistant platform with FastAPI,
              PostgreSQL, Redis, RabbitMQ, and multi-LLM support (OpenAI GPT-4, Groq, Ollama), now live on the
              Apple App Store — he brings end-to-end expertise from LLM selection and retrieval architecture to
              evaluation pipelines and responsible-AI controls. TOGAF / Zachman aligned, Azure Solutions Architect
              Expert (AZ-305) | Anthropic Certified, with cross-functional team leadership spanning 15 engineers
              across UK and India.
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
