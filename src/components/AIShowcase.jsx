import {
  FileText, Scissors, Zap, Database, Brain, MessageSquare,
  Bot, Wrench, Network, Eye, GitBranch, Shield,
  ArrowRight,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from '../styles/AIShowcase.module.css';

const ragSteps = [
  { icon: FileText,      label: 'Document Ingestion', sub: 'PDF · DOCX · HTML',  color: '#6366f1' },
  { icon: Scissors,      label: 'Chunking Strategy',  sub: 'Semantic · Fixed',    color: '#8b5cf6' },
  { icon: Zap,           label: 'Embedding Model',    sub: 'ada-002 · BGE',       color: '#a78bfa' },
  { icon: Database,      label: 'Vector Store',       sub: 'Pinecone · pgvector', color: '#06b6d4' },
  { icon: Brain,         label: 'LLM Generation',     sub: 'GPT-4 · Claude',      color: '#0ea5e9' },
  { icon: MessageSquare, label: 'Grounded Response',  sub: 'Citations · Eval',    color: '#10b981' },
];

const agentCards = [
  {
    icon: Bot,
    iconBg: 'rgba(99,102,241,0.15)',
    iconColor: '#6366f1',
    title: 'Orchestrator Agent',
    desc: 'Plans and routes tasks across specialist agents using LangGraph-style state machines. Manages context, tool selection, and response synthesis.',
    tags: ['LangGraph', 'CrewAI', 'AutoGen', 'Semantic Kernel'],
  },
  {
    icon: Wrench,
    iconBg: 'rgba(6,182,212,0.15)',
    iconColor: '#06b6d4',
    title: 'Tool-Use & MCP',
    desc: 'Integrates external APIs, databases, and enterprise systems via Model Context Protocol. Enables real-time data retrieval and action execution.',
    tags: ['MCP', 'Function Calling', 'LangChain', 'RAG Tools'],
  },
  {
    icon: Network,
    iconBg: 'rgba(139,92,246,0.15)',
    iconColor: '#8b5cf6',
    title: 'Multi-Agent Collaboration',
    desc: 'Coordinates research, analysis, and synthesis agents in parallel pipelines. Implements reflection, critique, and iterative refinement loops.',
    tags: ['Multi-Agent', 'LlamaIndex', 'Reflection', 'CrewAI'],
  },
  {
    icon: Eye,
    iconBg: 'rgba(245,158,11,0.15)',
    iconColor: '#f59e0b',
    title: 'Observability Layer',
    desc: 'Instruments LLM calls with latency, cost, token usage, and hallucination metrics. Enables continuous evaluation and model drift detection.',
    tags: ['Ragas', 'DeepEval', 'LangSmith', 'Arize'],
  },
  {
    icon: GitBranch,
    iconBg: 'rgba(16,185,129,0.15)',
    iconColor: '#10b981',
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
  const ref = useScrollAnimation();

  return (
    <section className="section" id="ai-systems" ref={ref}>
      <div className="container">
        <div className="fade-up">
          <span className="section-label">AI & GenAI Systems</span>
          <h2 className="section-title">Production-Grade <span>AI Architecture</span></h2>
          <p className="section-sub">
            Designing AI systems that survive contact with the enterprise — robust, observable,
            governed, and aligned to real business outcomes.
          </p>
        </div>

        {/* RAG Pipeline */}
        <div className={`${styles.pipeline} fade-up`}>
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
        </div>

        {/* Agent cards */}
        <div className={styles.agentGrid}>
          {agentCards.map(card => (
            <div key={card.title} className={`${styles.agentCard} fade-up`}>
              <div className={styles.agentTop}>
                <div className={styles.agentIcon} style={{ background: card.iconBg, color: card.iconColor }}>
                  <card.icon size={18} />
                </div>
                <span className={styles.agentTitle}>{card.title}</span>
              </div>
              <p className={styles.agentDesc}>{card.desc}</p>
              <div className={styles.agentTags}>
                {card.tags.map(t => (
                  <span key={t} className={styles.agentTag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
