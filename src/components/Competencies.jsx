import { Brain, Cloud, Building2, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardVariant, viewportOptions } from '../animations/variants';
import styles from '../styles/Competencies.module.css';

const categories = [
  {
    icon: Brain,
    iconColor: '#a855f7',
    iconBg: 'rgba(147,51,234,0.12)',
    dotColor: '#a855f7',
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
    iconColor: '#f97316',
    iconBg: 'rgba(249,115,22,0.12)',
    dotColor: '#f97316',
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
    iconColor: '#ec4899',
    iconBg: 'rgba(236,72,153,0.12)',
    dotColor: '#ec4899',
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
    iconColor: '#ef4444',
    iconBg: 'rgba(239,68,68,0.12)',
    dotColor: '#ef4444',
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
  return (
    <section className="section" id="competencies">
      <div className="container">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <span className="section-label">Core Competencies</span>
          <h2 className="section-title">Four Pillars of <span>Strategic Expertise</span></h2>
          <p className="section-sub">
            A rare combination of deep technical depth and executive-level breadth — built over 14+ years
            of enterprise architecture and AI platform delivery.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {categories.map(cat => (
            <motion.div key={cat.title} className={styles.card} variants={cardVariant}>
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
