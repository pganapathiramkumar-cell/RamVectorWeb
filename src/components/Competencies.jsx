import { Brain, Cloud, Building2, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from '../styles/Competencies.module.css';

const categories = [
  {
    icon: Brain,
    iconColor: '#6366f1',
    iconBg: 'rgba(99,102,241,0.12)',
    dotColor: '#6366f1',
    barColor: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
    title: 'AI & GenAI Architecture',
    items: [
      'LLM Systems Design & RAG Pipeline Architecture',
      'Multi-Agent & Agentic AI Systems',
      'MLOps & AI Platform Engineering',
      'Prompt Engineering & Hallucination Mitigation',
      'AI Governance & Responsible AI Frameworks',
      'Model Context Protocol (MCP) & Fine-Tuning',
      'Vector Database Strategy (Pinecone, pgvector, Chroma)',
      'AI Observability (Ragas, LangSmith, Arize, W&B)',
    ],
  },
  {
    icon: Cloud,
    iconColor: '#06b6d4',
    iconBg: 'rgba(6,182,212,0.12)',
    dotColor: '#06b6d4',
    barColor: 'linear-gradient(90deg, #06b6d4, #6366f1)',
    title: 'Cloud & Platform Engineering',
    items: [
      'Multi-Cloud Design (Azure & AWS)',
      'Infrastructure as Code (IaC) & CI/CD Transformation',
      'Microservices & API Strategy',
      'DevOps & Platform Engineering (GitHub Actions, Azure DevOps)',
      'Kubernetes, Docker & Container Orchestration',
      'Azure OpenAI, AI Studio & AWS Bedrock',
      'Zero Trust Security & IAM Architecture',
      'Greenfield & Migration Architecture',
    ],
  },
  {
    icon: Building2,
    iconColor: '#8b5cf6',
    iconBg: 'rgba(139,92,246,0.12)',
    dotColor: '#8b5cf6',
    barColor: 'linear-gradient(90deg, #8b5cf6, #a78bfa)',
    title: 'Enterprise Architecture',
    items: [
      'TOGAF-Aligned Architecture Governance',
      'Zachman Framework Mapping',
      'HLD / LLD Design & Documentation',
      'Architecture Review Boards (ARB)',
      'Digital Transformation Strategy',
      'Technology Roadmap & Strategic Planning',
      'Business-IT Alignment & Value Realisation',
      'Pre-Sales Architecture & RFP Support',
    ],
  },
  {
    icon: TrendingUp,
    iconColor: '#10b981',
    iconBg: 'rgba(16,185,129,0.12)',
    dotColor: '#10b981',
    barColor: 'linear-gradient(90deg, #10b981, #06b6d4)',
    title: 'Leadership & Strategy',
    items: [
      'C-Suite Communication & Executive Advisory',
      'Cross-Functional Team Leadership',
      'Stakeholder Governance & Management',
      'Time-to-Market & Cost Optimisation',
      'Enterprise Programme Management',
      'Centre of Excellence (CoE) Establishment',
      'Vendor & Partner Management',
      'Strategic Technology Investment Decisions',
    ],
  },
];

export default function Competencies() {
  const ref = useScrollAnimation();

  return (
    <section className="section" id="competencies" ref={ref}>
      <div className="container">
        <div className="fade-up">
          <span className="section-label">Core Competencies</span>
          <h2 className="section-title">Four Pillars of <span>Strategic Expertise</span></h2>
          <p className="section-sub">
            A rare combination of deep technical depth and executive-level breadth — built over 12+ years
            of enterprise architecture and AI platform delivery.
          </p>
        </div>

        <div className={styles.grid}>
          {categories.map(cat => (
            <div key={cat.title} className={`${styles.card} fade-up`}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrap} style={{ background: cat.iconBg, color: cat.iconColor }}>
                  <cat.icon size={20} />
                </div>
                <div>
                  <div className={styles.cardTitle}>{cat.title}</div>
                  <div className={styles.cardCount}>{cat.items.length} competencies</div>
                </div>
              </div>

              <div className={styles.items}>
                {cat.items.map(item => (
                  <div key={item} className={styles.item}>
                    <span className={styles.itemDot} style={{ background: cat.dotColor }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
