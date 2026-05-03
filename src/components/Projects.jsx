import { Smartphone, ExternalLink, Github, Building2, Brain, Cloud, Zap } from 'lucide-react';
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
      { label: 'App Store', href: 'https://apps.apple.com/in/app/ramvector/id6763949988', primary: true },
      { label: 'GitHub',    href: 'https://github.com/pganapathiramkumar-cell/RamVectorWeb', primary: false },
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
    links: [],
    featured: true,
  },
  {
    icon: Brain,
    iconBg: 'rgba(139,92,246,0.15)',
    iconColor: '#8b5cf6',
    badges: [{ label: 'Case Study', cls: styles.badgeCase }, { label: 'Enterprise', cls: styles.badgeEnterprise }],
    title: 'GenAI Migration Platform — WinForms to React',
    desc: 'Designed custom AI migration toolchain with Claude (AWS Bedrock) and GPT-4: spec generation → component mapping → React code output → quality validation pipeline. Delivered greenfield architecture achieving 60% acceleration in enterprise UI delivery across 1,000+ users at Belfast client.',
    impact: [
      { value: '60%',   label: 'Delivery Acceleration' },
      { value: '1000+', label: 'Enterprise Users' },
      { value: 'Spec',  label: 'Driven Delivery' },
    ],
    stack: ['Claude (AWS Bedrock)', 'GPT-4', 'LangChain', 'Azure OpenAI', 'React', '.NET Core 8', 'Azure DevOps'],
    links: [],
    featured: false,
  },
  {
    icon: Cloud,
    iconBg: 'rgba(6,182,212,0.15)',
    iconColor: '#06b6d4',
    badges: [{ label: 'Case Study', cls: styles.badgeCase }, { label: 'Enterprise', cls: styles.badgeEnterprise }],
    title: 'Enterprise AI Governance Platform — UK Financial Services',
    desc: 'Established AI governance framework covering responsible-AI controls, model access policies, and audit logging — enabling compliant Azure OpenAI Service and AWS Bedrock deployment. Designed end-to-end RAG architecture for enterprise knowledge extraction with hallucination-mitigation layer using pgvector and LangChain.',
    impact: [
      { value: 'TOGAF', label: 'Aligned Governance' },
      { value: 'RAG',   label: 'Architecture Pattern' },
      { value: 'Zero',  label: 'Trust Security' },
    ],
    stack: ['Azure OpenAI', 'AWS Bedrock', 'pgvector', 'LangChain', 'Azure Key Vault', 'IAM', 'Zero Trust', 'TOGAF'],
    links: [],
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
                      {l.label === 'App Store' ? <ExternalLink size={14} /> : <Github size={14} />}
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
