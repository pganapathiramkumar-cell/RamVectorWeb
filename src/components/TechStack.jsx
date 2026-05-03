import { Brain, Cloud, Layers, Terminal, Shield, BarChart2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from '../styles/TechStack.module.css';

const categories = [
  {
    icon: Brain,
    iconBg: 'rgba(99,102,241,0.15)',
    iconColor: '#6366f1',
    name: 'AI Platforms',
    sub: 'LLM & Foundation',
    dotColor: '#6366f1',
    items: ['GPT-4o', 'Claude 3.5 Sonnet', 'Azure OpenAI', 'AWS Bedrock', 'Azure AI Studio', 'Amazon SageMaker', 'Gemini Pro'],
  },
  {
    icon: Layers,
    iconBg: 'rgba(139,92,246,0.15)',
    iconColor: '#8b5cf6',
    name: 'LLM Frameworks',
    sub: 'Orchestration & Agents',
    dotColor: '#8b5cf6',
    items: ['LangChain', 'LangGraph', 'LlamaIndex', 'Semantic Kernel', 'AutoGen', 'CrewAI', 'Haystack'],
  },
  {
    icon: BarChart2,
    iconBg: 'rgba(6,182,212,0.15)',
    iconColor: '#06b6d4',
    name: 'Vector DBs & Eval',
    sub: 'Storage & Observability',
    dotColor: '#06b6d4',
    items: ['Pinecone', 'pgvector', 'Chroma', 'Weaviate', 'Ragas', 'DeepEval', 'LangSmith', 'Arize', 'W&B'],
  },
  {
    icon: Cloud,
    iconBg: 'rgba(14,165,233,0.15)',
    iconColor: '#0ea5e9',
    name: 'Cloud & DevOps',
    sub: 'Infrastructure & CI/CD',
    dotColor: '#0ea5e9',
    items: ['Azure', 'AWS', 'Kubernetes', 'Docker', 'Terraform', 'GitHub Actions', 'Azure DevOps', 'Helm'],
  },
  {
    icon: Terminal,
    iconBg: 'rgba(16,185,129,0.15)',
    iconColor: '#10b981',
    name: 'Languages & Backends',
    sub: 'Engineering Stack',
    dotColor: '#10b981',
    items: ['Python', '.NET Core (C#)', 'Node.js', 'React', 'React Native', 'FastAPI', 'REST / GraphQL'],
  },
  {
    icon: Shield,
    iconBg: 'rgba(245,158,11,0.15)',
    iconColor: '#f59e0b',
    name: 'Security & Governance',
    sub: 'Compliance & Controls',
    dotColor: '#f59e0b',
    items: ['Zero Trust', 'Azure AD / Entra ID', 'IAM', 'TOGAF', 'Zachman', 'DPIA', 'HIPAA Alignment'],
  },
];

export default function TechStack() {
  const ref = useScrollAnimation();

  return (
    <section className={`section ${styles.wrapper}`} id="tech-stack" ref={ref}>
      <div className="container">
        <div className="fade-up">
          <span className="section-label">Technology Stack</span>
          <h2 className="section-title">Tools of an <span>Enterprise Architect</span></h2>
          <p className="section-sub">
            Platform-agnostic, framework-fluent — choosing the right tool for the context,
            not defaulting to the familiar.
          </p>
        </div>

        <div className={`${styles.categories} fade-up`}>
          {categories.map(cat => (
            <div key={cat.name} className={styles.category}>
              <div className={styles.catLabel}>
                <div className={styles.catIcon} style={{ background: cat.iconBg, color: cat.iconColor }}>
                  <cat.icon size={16} />
                </div>
                <div>
                  <div className={styles.catName}>{cat.name}</div>
                  <div className={styles.catSub}>{cat.sub}</div>
                </div>
              </div>
              <div className={styles.catItems}>
                {cat.items.map(item => (
                  <span key={item} className={styles.item}>
                    <span className={styles.itemDot} style={{ background: cat.dotColor }} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
