import { Mail, Phone, Github, ExternalLink, Globe, Cpu, Users, Shield, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  fadeInUp, fadeInLeft, fadeInRight,
  staggerContainer, cardVariant, viewportOptions
} from '../animations/variants';
import styles from '../styles/About.module.css';

const highlights = [
  {
    icon: Cpu,
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.12)',
    title: 'Engineering & Manufacturing AI Automation',
    text: 'Leading AI transformation across CAD/PLM platforms (Autodesk Inventor, Vault, Siemens NX) — reducing engineering effort from ~1 day to ~5 minutes and guiding 200+ engineers through a phased AI roadmap.',
  },
  {
    icon: Cpu,
    color: '#a855f7',
    bg: 'rgba(147,51,234,0.12)',
    title: 'Production GenAI Platform Delivery',
    text: 'Architected Claude (Bedrock) + Azure OpenAI platforms achieving 60% delivery acceleration across 1,000+ enterprise users — with responsible-AI governance and full observability.',
  },
  {
    icon: Globe,
    color: '#f97316',
    bg: 'rgba(249,115,22,0.12)',
    title: 'Multi-Cloud Platform Engineering',
    text: 'Delivered greenfield and migration programmes across Azure and AWS — including GCP-to-Azure migration with Zero Trust IAM — at enterprise scale across UK, India, and Saudi Arabia.',
  },
  {
    icon: Shield,
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.12)',
    title: 'AI Governance & Responsible AI',
    text: 'Established enterprise AI governance frameworks (NIST AI RMF, ISO/IEC 42001, Zero Trust) covering responsible-AI controls, model access policies, audit logging, and TOGAF / Zachman-aligned architecture review.',
  },
];

const profile = [
  { icon: Mail,        label: 'pganapathiramkumar@gmail.com',   href: 'mailto:pganapathiramkumar@gmail.com' },
  { icon: Phone,       label: '+91 7996656111',                  href: 'tel:+917996656111' },
  { icon: Linkedin,    label: 'linkedin.com/in/palaniram',       href: 'https://linkedin.com/in/palaniram',                      external: true },
  { icon: Globe,       label: 'www.ramvector.com',               href: 'https://www.ramvector.com',                             external: true },
  { icon: Github,      label: 'pganapathiramkumar-cell',         href: 'https://github.com/pganapathiramkumar-cell/RamVectorWeb', external: true },
  { icon: ExternalLink,label: 'ORCID — 0009-0006-9439-5067',    href: 'https://orcid.org/0009-0006-9439-5067',                  external: true },
];

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <div className={styles.inner}>
          <motion.div
            className={styles.left}
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <span className="section-label">Executive Summary</span>
            <h2 className="section-title">Architecting <span>AI-Driven</span> Enterprise Transformation</h2>

            <div className={styles.taglineRow}>
              {['Production GenAI Systems', 'RAG & Multi-LLM Architecture', 'Engineering & Manufacturing AI', 'Multi-Cloud Platform'].map(tag => (
                <span key={tag} className={styles.taglinePill}>{tag}</span>
              ))}
            </div>

            <p className={styles.bio}>
              <strong>Ganapathi Ramkumar Palanivelu</strong> is an Enterprise AI Architect and Solution Architect
              with 14+ years designing and delivering scalable AI platforms, multi-cloud architectures, and
              enterprise transformation programmes. Currently leading AI-driven engineering automation across
              CAD/PLM platforms (Autodesk Inventor, Vault, Siemens NX) with the President and senior leadership —
              architecting production GenAI systems using Claude (AWS Bedrock), Azure OpenAI Service, and GPT-4,
              driving 60% delivery acceleration across 1,000+ enterprise users.
            </p>
            <p className={styles.bio}>
              As the creator of <strong>RamVector</strong> — a full-stack RAG AI assistant platform with FastAPI,
              PostgreSQL, Redis, RabbitMQ, and multi-LLM support (OpenAI GPT-4, Groq, Ollama) — he brings end-to-end expertise from LLM selection and retrieval architecture to
              evaluation pipelines and responsible-AI controls. TOGAF / Zachman aligned, Azure Solutions Architect
              Expert (AZ-305) | Anthropic Certified, with cross-functional team leadership spanning 15 engineers
              across UK and India.
            </p>

            <motion.div
              className={styles.highlights}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              {highlights.map(h => (
                <motion.div key={h.title} className={styles.highlight} variants={cardVariant}>
                  <div className={styles.highlightIcon} style={{ background: h.bg, color: h.color }}>
                    <h.icon size={18} />
                  </div>
                  <div className={styles.highlightText}>
                    <h4>{h.title}</h4>
                    <p>{h.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.right}
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <div className={styles.profileCard}>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
