import {
  FileText, Scissors, Zap, Database, Brain, MessageSquare,
  Bot, Wrench, Network, Eye, GitBranch, Shield,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardVariant, viewportOptions } from '../animations/variants';
import styles from '../styles/AIShowcase.module.css';

const ragSteps = [
  { icon: FileText,      label: 'Document Ingestion', sub: 'PDF · DOCX · HTML',  color: '#818cf8' },
  { icon: Scissors,      label: 'Chunking Strategy',  sub: 'Semantic · Fixed',    color: '#ec4899' },
  { icon: Zap,           label: 'Embedding Model',    sub: 'ada-002 · BGE',       color: '#f97316' },
  { icon: Database,      label: 'Vector Store',       sub: 'Pinecone · pgvector', color: '#ef4444' },
  { icon: Brain,         label: 'LLM Generation',     sub: 'GPT-4 · Claude',      color: '#ec4899' },
  { icon: MessageSquare, label: 'Grounded Response',  sub: 'Citations · Eval',    color: '#818cf8' },
];

const agentCards = [
  {
    icon: Bot,
    iconBg: 'rgba(99,102,241,0.15)',
    iconColor: '#818cf8',
    title: 'Orchestrator Agent',
    desc: 'Plans and routes tasks across specialist agents using LangGraph-style state machines. Manages context, tool selection, and response synthesis.',
    tags: ['LangGraph', 'CrewAI', 'AutoGen', 'Semantic Kernel'],
  },
  {
    icon: Wrench,
    iconBg: 'rgba(249,115,22,0.15)',
    iconColor: '#f97316',
    title: 'Tool-Use & MCP',
    desc: 'Integrates external APIs, databases, and enterprise systems via Model Context Protocol. Enables real-time data retrieval and action execution.',
    tags: ['MCP', 'Function Calling', 'LangChain', 'RAG Tools'],
  },
  {
    icon: Network,
    iconBg: 'rgba(236,72,153,0.15)',
    iconColor: '#ec4899',
    title: 'Multi-Agent Collaboration',
    desc: 'Coordinates research, analysis, and synthesis agents in parallel pipelines. Implements reflection, critique, and iterative refinement loops.',
    tags: ['Multi-Agent', 'LlamaIndex', 'Reflection', 'CrewAI'],
  },
  {
    icon: Eye,
    iconBg: 'rgba(220,38,38,0.15)',
    iconColor: '#ef4444',
    title: 'Observability Layer',
    desc: 'Instruments LLM calls with latency, cost, token usage, and hallucination metrics. Enables continuous evaluation and model drift detection.',
    tags: ['Ragas', 'DeepEval', 'LangSmith', 'Arize'],
  },
  {
    icon: GitBranch,
    iconBg: 'rgba(99,102,241,0.12)',
    iconColor: '#a5b4fc',
    title: 'MLOps Pipeline',
    desc: 'Automated model deployment, versioning, A/B testing, and rollback via GitHub Actions and Azure DevOps. Continuous evaluation in production.',
    tags: ['SageMaker', 'Azure MLOps', 'W&B', 'CI/CD'],
  },
  {
    icon: Shield,
    iconBg: 'rgba(239,68,68,0.12)',
    iconColor: '#ef4444',
    title: 'AI Governance & Safety',
    desc: 'Implements responsible AI guardrails — content filtering, bias detection, PII redaction, audit logging, and regulatory compliance controls.',
    tags: ['Responsible AI', 'Guardrails', 'DPIA', 'Zero Trust'],
  },
];

export default function AIShowcase() {
  return (
    <section className="section" id="ai-systems">
      <div className="container">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <span className="section-label">AI & GenAI Systems</span>
          <h2 className="section-title">Production-Grade <span>AI Architecture</span></h2>
          <p className="section-sub">
            Designing AI systems that survive contact with the enterprise — robust, observable,
            governed, and aligned to real business outcomes.
          </p>
        </motion.div>

        {/* RAG Pipeline */}
        <motion.div
          className={styles.pipeline}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <div className={styles.pipelineTitle}>RAG Pipeline Architecture</div>
          <div className={styles.flow}>
            {ragSteps.map((step, i) => (
              <div key={step.label} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                <div className={styles.flowNode}>
                  <div className={styles.flowBox}>
                    <div className={styles.flowIcon} style={{ color: step.color }}>
                      <step.icon size={20} />
                    </div>
                    <div className={styles.flowLabel}>{step.label}</div>
                    <span className={styles.flowSub}>{step.sub}</span>
                  </div>
                </div>
                {i < ragSteps.length - 1 && (
                  <div className={styles.flowArrow}>
                    <ArrowRight size={16} color="var(--text-muted)" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Agent cards */}
        <motion.div
          className={styles.agentGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {agentCards.map(card => (
            <motion.div key={card.title} className={styles.agentCard} variants={cardVariant}>
              <div className={styles.agentTop}>
                <div className={styles.agentIcon} style={{ background: card.iconBg, color: card.iconColor }}>
                  <card.icon size={18} />
                </div>
                <span className={styles.agentTitle}>{card.title}</span>
              </div>
              <p className={styles.agentDesc}>{card.desc}</p>
              <div className={styles.agentTags}>
                {card.tags.map(t => <span key={t} className={styles.agentTag}>{t}</span>)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
