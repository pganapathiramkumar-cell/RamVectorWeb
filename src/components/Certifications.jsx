import { CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from '../styles/Certifications.module.css';

const certGroups = [
  {
    label: 'Microsoft Azure',
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.15)',
    abbr: 'AZ',
    certs: [
      { name: 'Azure Solutions Architect Expert', code: 'AZ-305', validity: 'Valid Jun 2027', expert: true },
      { name: 'Azure DevOps Engineer Expert',     code: 'AZ-400', validity: 'Valid Jun 2027', expert: true },
      { name: 'Azure Administrator Associate',    code: 'AZ-104', validity: 'Valid Jun 2027' },
      { name: 'Azure Network Engineer Associate', code: 'AZ-700', validity: 'Valid Jun 2027' },
      { name: 'Azure Virtual Desktop Specialty',  code: 'AZ-140', validity: 'Valid Jun 2027' },
    ],
  },
  {
    label: 'Anthropic AI',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.15)',
    abbr: 'AI',
    certs: [
      { name: 'Model Context Protocol — Advanced Topics', code: 'Anthropic', validity: '2026' },
      { name: 'Building with the Claude API',             code: 'Anthropic', validity: '2026' },
      { name: 'Claude Code in Action',                    code: 'Anthropic', validity: '2026' },
      { name: 'Claude Code 101',                          code: 'Anthropic', validity: '2025' },
    ],
  },
  {
    label: 'PMI & Management',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.15)',
    abbr: 'PM',
    certs: [
      { name: 'CPMAI — Cognitive Project Management in AI', code: 'PMI', validity: 'Jul 2025' },
      { name: 'Data Landscape of GenAI',                   code: 'PMI', validity: '2025' },
      { name: 'Prompt Engineering for Project Managers',   code: 'PMI', validity: '2025' },
      { name: 'Practical Application of GenAI',            code: 'PMI', validity: '2025' },
    ],
  },
];

export default function Certifications() {
  const ref = useScrollAnimation();

  return (
    <section className={`section ${styles.wrapper}`} id="certifications" ref={ref}>
      <div className="container">
        <div className="fade-up">
          <span className="section-label">Certifications</span>
          <h2 className="section-title">Credentialed Across <span>AI, Cloud & Architecture</span></h2>
          <p className="section-sub">
            13 active industry certifications spanning enterprise cloud architecture, AI engineering,
            and cognitive project management — from Microsoft, Anthropic, and PMI.
          </p>
        </div>

        <div className={styles.groups}>
          {certGroups.map(group => (
            <div key={group.label} className="fade-up">
              <div className={styles.groupLabel} style={{ color: group.color }}>
                {group.label}
              </div>
              <div className={styles.certGrid}>
                {group.certs.map(cert => (
                  <div key={cert.name} className={styles.certCard}>
                    <div
                      className={styles.certIcon}
                      style={{ background: group.bg, color: group.color }}
                    >
                      {group.abbr}
                    </div>
                    <div className={styles.certBody}>
                      <div className={styles.certName}>{cert.name}</div>
                      <div className={styles.certMeta}>
                        <span className={styles.certCode}>{cert.code}</span>
                        <span
                          className={styles.certValidity}
                          style={{
                            background: `${group.color}18`,
                            color: group.color,
                            borderColor: `${group.color}40`,
                          }}
                        >
                          {cert.validity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.viewAll} fade-up`}>
          <CheckCircle size={14} color="var(--accent-indigo)" />
          <a
            href="https://linkedin.com/in/palaniram/details/certifications"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all certifications on LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
}
