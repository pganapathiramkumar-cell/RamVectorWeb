import { Smartphone, ExternalLink, Github, Building2, Brain, Cloud } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from '../styles/Projects.module.css';

const projects = [
  {
    icon: Smartphone,
    iconBg: 'rgba(99,102,241,0.15)',
    iconColor: '#6366f1',
    badges: [{ label: 'Live on App Store', cls: styles.badgeLive }, { label: 'AI', cls: styles.badgeAI }],
    title: 'RamVector — AI Document Intelligence',
    desc: 'A production iOS application that transforms PDFs into structured intelligence — generating AI summaries, action items, key insights, and workflow recommendations. Built on a RAG architecture with Claude (Bedrock) as the reasoning engine, React Native frontend, and a Python/FastAPI backend.',
    impact: [
      { value: 'Live',  label: 'App Store Listing' },
      { value: 'RAG',   label: 'Architecture Pattern' },
      { value: 'Multi', label: 'LLM Backend' },
    ],
    stack: ['React Native', 'Python', 'FastAPI', 'AWS Bedrock', 'Claude', 'RAG', 'Pinecone', 'Expo'],
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/in/app/ramvector/id6763949988', primary: true },
      { label: 'GitHub',    href: 'https://github.com/pganapathiramkumar-cell/RamVectorWeb', primary: false },
    ],
    featured: true,
  },
  {
    icon: Brain,
    iconBg: 'rgba(139,92,246,0.15)',
    iconColor: '#8b5cf6',
    badges: [{ label: 'Case Study', cls: styles.badgeCase }, { label: 'Enterprise', cls: styles.badgeEnterprise }],
    title: 'Agentic CSR Co-Pilot — Financial Services',
    desc: 'Designed and delivered an agentic AI co-pilot for a Tier-1 financial services client, automating customer service workflows. Multi-agent orchestration with LangGraph, integrated with Salesforce CRM and core banking APIs via MCP tool-use patterns.',
    impact: [
      { value: '65%',  label: 'AHT Reduction' },
      { value: '40+',  label: 'APIs Integrated' },
      { value: '3x',   label: 'Faster Resolution' },
    ],
    stack: ['LangGraph', 'Azure OpenAI', 'Semantic Kernel', 'Python', '.NET Core', 'Azure DevOps', 'Power Platform'],
    links: [],
    featured: false,
  },
  {
    icon: Cloud,
    iconBg: 'rgba(6,182,212,0.15)',
    iconColor: '#06b6d4',
    badges: [{ label: 'Case Study', cls: styles.badgeCase }, { label: 'Enterprise', cls: styles.badgeEnterprise }],
    title: 'Multi-Cloud AI Platform — Logistics & Supply Chain',
    desc: 'Architected a greenfield AI platform for a global logistics enterprise spanning Azure and AWS. Delivered HLD/LLD, TOGAF-aligned governance artefacts, MLOps pipeline design, and a 3-year technology roadmap approved at board level.',
    impact: [
      { value: '30%',  label: 'Cost Optimised' },
      { value: '4',    label: 'Countries Deployed' },
      { value: 'TOGAF', label: 'Governance Framework' },
    ],
    stack: ['Azure', 'AWS', 'Kubernetes', 'Terraform', 'SageMaker', 'Azure AI Studio', 'GitHub Actions', 'TOGAF'],
    links: [],
    featured: false,
  },
  {
    icon: Building2,
    iconBg: 'rgba(245,158,11,0.15)',
    iconColor: '#f59e0b',
    badges: [{ label: 'Case Study', cls: styles.badgeCase }, { label: 'Enterprise', cls: styles.badgeEnterprise }],
    title: 'GenAI Document Intelligence Platform — Healthcare',
    desc: 'Led architecture for a document intelligence platform ingesting clinical trial reports, regulatory submissions, and medical literature. RAG pipeline with hallucination mitigation, PII redaction, and HIPAA-compliant audit logging at enterprise scale.',
    impact: [
      { value: '80%',  label: 'Manual Review Reduction' },
      { value: 'HIPAA', label: 'Compliance Maintained' },
      { value: '10M+', label: 'Pages Processed' },
    ],
    stack: ['Azure OpenAI', 'LlamaIndex', 'pgvector', 'FastAPI', 'Ragas', 'DeepEval', 'Azure', 'Python'],
    links: [],
    featured: false,
  },
];

export default function Projects() {
  const ref = useScrollAnimation();

  return (
    <section className={`section`} id="projects" ref={ref}>
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
