import { Smartphone, ExternalLink, Github, Zap, HeartPulse } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from '../styles/Projects.module.css';

const projects = [
  {
    icon: Smartphone,
    iconBg: 'rgba(99,102,241,0.15)',
    iconColor: '#6366f1',
    badges: [{ label: 'Live on App Store', cls: styles.badgeLive }, { label: 'AI', cls: styles.badgeAI }],
    title: 'RamVector — Enterprise RAG AI Assistant Platform',
    desc: 'Designed and deployed a full-stack RAG AI assistant — React front-end, Python FastAPI back-end — shipped as a production iOS application on the Apple App Store. Architected a 7-service microservices system (API Gateway, Steer, Skill, Auth, AI Orchestrator, Document, Notification) on PostgreSQL 16, Redis 7, and RabbitMQ 3.13.',
    impact: [
      { value: 'Live',  label: 'App Store' },
      { value: '7',     label: 'Microservices' },
      { value: 'Multi', label: 'LLM Support' },
    ],
    stack: ['React', 'Python', 'FastAPI', 'PostgreSQL 16', 'Redis 7', 'RabbitMQ', 'OpenAI GPT-4', 'Groq', 'Ollama', 'pgvector', 'Prometheus', 'Docker'],
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/in/app/ramvector/id6763949988',                                                          primary: true },
      { label: 'Live Web',  href: 'https://ram-app-bot-web-git-main-pganapathiramkumar-cells-projects.vercel.app/documents',                        primary: true },
      { label: 'GitHub',    href: 'https://github.com/pganapathiramkumar-cell/RamVectorWeb',                                                        primary: false },
    ],
    featured: true,
  },
  {
    icon: Zap,
    iconBg: 'rgba(245,158,11,0.15)',
    iconColor: '#f59e0b',
    badges: [{ label: 'Published', cls: styles.badgeLive }, { label: 'AI Innovation', cls: styles.badgeAI }],
    title: 'Vision React Code Generation System',
    desc: 'Architected a multi-modal GenAI platform converting UI images and PDF mockups into production-ready React / Angular code — reducing front-end development effort from ~2 weeks to 5–10 minutes (60–70% efficiency gain). Lowered delivery cost by ~40% through automation of manual front-end effort. Submitted for peer-reviewed publication on Zenodo and ORCID.',
    impact: [
      { value: '60–70%', label: 'Efficiency Gain' },
      { value: '~40%',   label: 'Cost Reduction' },
      { value: '5–10m',  label: 'Dev Time (was 2wks)' },
    ],
    stack: ['Multi-modal LLM', 'Azure OpenAI', 'GPT-4V', 'React', 'Angular', 'Python', 'Zenodo', 'ORCID'],
    links: [
      { label: 'Zenodo Publication', href: 'https://zenodo.org/records/19560631', primary: true, icon: 'ext' },
      { label: 'ORCID Profile',      href: 'https://orcid.org/0009-0006-9439-5067', primary: false, icon: 'ext' },
    ],
    featured: true,
  },
  {
    icon: HeartPulse,
    iconBg: 'rgba(239,68,68,0.12)',
    iconColor: '#ef4444',
    badges: [{ label: 'Peer Reviewed', cls: styles.badgeLive }, { label: 'Research', cls: styles.badgeCase }],
    title: 'Automated ECG Classification System Using Deep Learning',
    desc: 'Designed and implemented a deep learning system for automated ECG classification and cardiac abnormality detection. Applied CNN and hybrid deep learning architectures to classify multiple cardiac conditions from 12-lead ECG signals — peer-reviewed and published on Zenodo and indexed on ORCID.',
    impact: [
      { value: 'CNN',    label: 'Deep Learning Arch' },
      { value: '12-lead', label: 'ECG Signal Analysis' },
      { value: 'Pub.',   label: 'Zenodo & ORCID' },
    ],
    stack: ['Deep Learning', 'CNN', 'Python', 'TensorFlow / PyTorch', 'ECG Signal Processing', 'Cardiac AI', 'Zenodo', 'ORCID'],
    links: [
      { label: 'Zenodo Publication', href: 'https://zenodo.org/records/19560252', primary: true, icon: 'ext' },
      { label: 'ORCID Profile',      href: 'https://orcid.org/0009-0006-9439-5067', primary: false, icon: 'ext' },
    ],
    featured: false,
  },
];

export default function Projects() {
  const ref = useScrollAnimation();

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container">
        <div className="fade-up">
          <span className="section-label">Projects & Case Studies</span>
          <h2 className="section-title">Architecture in <span>Production</span></h2>
          <p className="section-sub">
            From iOS applications to enterprise-scale AI platforms — every project delivers measurable
            outcomes, not just technical deliverables.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map(p => (
            <div
              key={p.title}
              className={`${styles.card} ${p.featured ? styles.featured : ''} fade-up`}
            >
              <div className={styles.cardTop}>
                <div className={styles.iconWrap} style={{ background: p.iconBg, color: p.iconColor }}>
                  <p.icon size={22} />
                </div>
                <div className={styles.badges}>
                  {p.badges.map(b => (
                    <span key={b.label} className={`${styles.badge} ${b.cls}`}>{b.label}</span>
                  ))}
                </div>
              </div>

              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.desc}>{p.desc}</p>

              <div className={styles.impact}>
                {p.impact.map(im => (
                  <div key={im.label} className={styles.impactItem}>
                    <span className={styles.impactValue}>{im.value}</span>
                    <span className={styles.impactLabel}>{im.label}</span>
                  </div>
                ))}
              </div>

              <div className={styles.stack}>
                {p.stack.map(s => (
                  <span key={s} className={styles.stackTag}>{s}</span>
                ))}
              </div>

              {p.links.length > 0 && (
                <div className={styles.actions}>
                  {p.links.map(l => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.actionBtn} ${l.primary ? styles.actionBtnPrimary : styles.actionBtnGhost}`}
                    >
                      {l.label === 'GitHub' ? <Github size={14} /> : <ExternalLink size={14} />}
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
