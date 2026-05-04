import { CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from '../styles/Certifications.module.css';

const certGroups = [
  {
    label: 'Microsoft Azure',
    color: '#a855f7',
    bg: 'rgba(147,51,234,0.15)',
    abbr: 'AZ',
    certs: [
      { name: 'Microsoft Certified: Azure Solutions Architect Expert', code: 'AZ-305', validity: 'Valid through Jun 2027', credId: '2E0F6745D2329A76' },
      { name: 'Microsoft Certified: DevOps Engineer Expert',           code: 'AZ-400', validity: 'Valid through Jun 2027', credId: 'BCDBFD24151AFDF2' },
      { name: 'Microsoft Certified: Azure Administrator Associate',    code: 'AZ-104', validity: 'Valid through Jun 2027', credId: '3F9790DB166F8EF5' },
      { name: 'Microsoft Certified: Azure Network Engineer Associate', code: 'AZ-700', validity: 'Valid through Jun 2027', credId: 'B82314B74FC4250D' },
      { name: 'Microsoft Certified: Azure Virtual Desktop Specialty',  code: 'AZ-140', validity: 'Valid through Jun 2027', credId: 'A6F6C30E6CCF9E4A' },
      { name: 'Microsoft Certified: Azure Fundamentals',              code: 'AZ-900', validity: 'Issued Dec 2022',         credId: '4D52F421641FD5CF' },
      { name: 'Microsoft Certified: Azure Developer Associate',       code: 'AZ-204', validity: 'Expired Dec 2023',        credId: 'FBFC34E2FC22ACA5', expired: true },
    ],
  },
  {
    label: 'Anthropic AI',
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.15)',
    abbr: 'AI',
    certs: [
      { name: 'Model Context Protocol: Advanced Topics', code: 'Anthropic', validity: 'Apr 2026', credId: 'yxc7fs2knagh' },
      { name: 'Building with the Claude API',            code: 'Anthropic', validity: 'Apr 2026', credId: 'bm27g7nd4qve' },
      { name: 'Claude Code in Action',                   code: 'Anthropic', validity: 'Apr 2026', credId: '656fzxttd8oj' },
      { name: 'Claude Code 101',                         code: 'Anthropic', validity: 'Apr 2026', credId: 'f8bh2fwvs342' },
    ],
  },
  {
    label: 'Project Management Institute (PMI)',
    color: '#f97316',
    bg: 'rgba(249,115,22,0.15)',
    abbr: 'PMI',
    certs: [
      { name: 'Introduction to Cognitive Project Management in AI (CPMAI)™', code: 'PMI', validity: 'Jul 2025' },
      { name: 'Data Landscape of GenAI for Project Managers',                code: 'PMI', validity: 'Jul 2025' },
      { name: 'Talking to AI: Prompt Engineering for Project Managers',      code: 'PMI', validity: 'Jul 2025' },
      { name: 'Practical Application of Gen AI for Project Managers',        code: 'PMI', validity: 'Jul 2025' },
      { name: 'Generative AI Overview for Project Managers',                 code: 'PMI', validity: 'Jul 2025' },
    ],
  },
  {
    label: 'LinkedIn Learning',
    color: '#ef4444',
    bg: 'rgba(220,38,38,0.12)',
    abbr: 'LI',
    certs: [
      { name: 'LLM Foundations: Vector Databases for Caching and Retrieval Augmented Generation (RAG)', code: 'LinkedIn', validity: 'Apr 2026' },
      { name: 'Enterprise Architecture Foundations',                                                    code: 'LinkedIn', validity: 'Apr 2026' },
    ],
  },
];

const TOTAL   = certGroups.reduce((sum, g) => sum + g.certs.length, 0);
const ACTIVE  = certGroups.reduce((sum, g) => sum + g.certs.filter(c => !c.expired).length, 0);
const EXPIRED = TOTAL - ACTIVE;

export default function Certifications() {
  const ref = useScrollAnimation();

  return (
    <section className={`section ${styles.wrapper}`} id="certifications" ref={ref}>
      <div className="container">
        <div className="fade-up">
          <span className="section-label">Certifications</span>
          <h2 className="section-title">Credentialed Across <span>AI, Cloud & Architecture</span></h2>
          <p className="section-sub">
            {TOTAL} industry certifications ({ACTIVE} active, {EXPIRED} previously held) spanning
            enterprise cloud architecture, AI engineering, and cognitive project management —
            issued by Microsoft, Anthropic, PMI, and LinkedIn.
          </p>
        </div>

        <div className={styles.groups}>
          {certGroups.map(group => (
            <div key={group.label} className="fade-up">
              <div className={styles.groupLabel} style={{ color: group.color }}>
                {group.label}
                <span className={styles.groupCount}>{group.certs.length}</span>
              </div>
              <div className={styles.certGrid}>
                {group.certs.map(cert => (
                  <div
                    key={cert.name}
                    className={`${styles.certCard} ${cert.expired ? styles.certExpired : ''}`}
                  >
                    <div
                      className={styles.certIcon}
                      style={{
                        background: cert.expired ? 'rgba(100,100,100,0.1)' : group.bg,
                        color:      cert.expired ? 'var(--text-muted)'     : group.color,
                      }}
                    >
                      {group.abbr}
                    </div>
                    <div className={styles.certBody}>
                      <div className={styles.certName}>{cert.name}</div>
                      <div className={styles.certMeta}>
                        <span className={styles.certCode}>{cert.code}</span>
                        {cert.credId && (
                          <span className={styles.certCredId} title={`Credential ID: ${cert.credId}`}>
                            #{cert.credId.slice(0, 8)}
                          </span>
                        )}
                        <span
                          className={styles.certValidity}
                          style={cert.expired ? {
                            background:  'rgba(239,68,68,0.1)',
                            color:       '#ef4444',
                            borderColor: 'rgba(239,68,68,0.25)',
                          } : {
                            background:  `${group.color}18`,
                            color:        group.color,
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
            href="https://www.linkedin.com/in/palaniram/details/certifications/"
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
