import { Mail, Phone, Github, ExternalLink, Globe, ArrowRight, Send, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, staggerContainer, cardVariant, viewportOptions } from '../animations/variants';
import styles from '../styles/Contact.module.css';

const contactLinks = [
  { icon: Mail,        iconBg: 'rgba(147,51,234,0.15)', iconColor: '#a855f7', label: 'Email',     value: 'pganapathiramkumar@gmail.com',   href: 'mailto:pganapathiramkumar@gmail.com' },
  { icon: Phone,       iconBg: 'rgba(249,115,22,0.15)', iconColor: '#f97316', label: 'Phone',     value: '+91 7996656111',                  href: 'tel:+917996656111' },
  { icon: Linkedin,    iconBg: 'rgba(220,38,38,0.15)',  iconColor: '#ef4444', label: 'LinkedIn',  value: 'linkedin.com/in/palaniram',       href: 'https://linkedin.com/in/palaniram' },
  { icon: Globe,       iconBg: 'rgba(236,72,153,0.15)', iconColor: '#ec4899', label: 'Website',   value: 'www.ramvector.com',               href: 'https://www.ramvector.com' },
  { icon: Github,      iconBg: 'rgba(99,102,241,0.15)', iconColor: '#818cf8', label: 'GitHub',    value: 'pganapathiramkumar-cell',         href: 'https://github.com/pganapathiramkumar-cell/RamVectorWeb' },
  { icon: ExternalLink,iconBg: 'rgba(249,115,22,0.12)', iconColor: '#fb923c', label: 'ORCID',     value: '0009-0006-9439-5067',             href: 'https://orcid.org/0009-0006-9439-5067' },
  { icon: ExternalLink,iconBg: 'rgba(220,38,38,0.12)',  iconColor: '#f87171', label: 'App Store', value: 'RamVector — AI Document Intelligence', href: 'https://apps.apple.com/in/app/ramvector/id6763949988' },
];

const roles = [
  'Chief Architect / VP of Architecture',
  'Principal AI Architect (GenAI / LLM Platforms)',
  'Enterprise Architecture Lead or Director',
  'VP Engineering / Head of Architecture',
  'Strategic Advisory & Pre-Sales Architecture',
];

export default function Contact() {
  return (
    <section className={`section ${styles.wrapper}`} id="contact">
      <div className="container">
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          style={{ marginBottom: '3.5rem' }}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Build <span>Something Significant</span></h2>
        </motion.div>

        <div className={styles.inner}>
          <motion.div
            className={styles.left}
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <div className={styles.availability}>
              <span className={styles.availDot} />
              Open to new opportunities
            </div>

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '0.5rem' }}>
              Whether you're evaluating architecture leadership for an AI transformation programme,
              building a GenAI platform from the ground up, or seeking advisory expertise —
              let's start a conversation.
            </p>

            <motion.div
              className={styles.contactLinks}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              {contactLinks.map(link => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                  variants={cardVariant}
                >
                  <div className={styles.contactIcon} style={{ background: link.iconBg, color: link.iconColor }}>
                    <link.icon size={18} />
                  </div>
                  <div className={styles.contactInfo}>
                    <div className={styles.contactLabel}>{link.label}</div>
                    <div className={styles.contactValue}>{link.value}</div>
                  </div>
                  <ArrowRight size={16} className={styles.contactArrow} />
                </motion.a>
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
            <div className={styles.cta}>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
