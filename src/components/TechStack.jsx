import { Brain, Cloud, Layers, Terminal, Shield, BarChart2, Workflow, Database } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from '../styles/TechStack.module.css';

const categories = [
  {
    icon: Brain,
    iconBg: 'rgba(99,102,241,0.15)',
    iconColor: '#6366f1',
    name: 'AI & GenAI Platforms',
    sub: 'LLM & Foundation Models',
    dotColor: '#6366f1',
    items: ['GPT-4 / GPT-4o', 'Claude Sonnet / Haiku (AWS Bedrock)', 'Azure OpenAI Service', 'Azure AI Foundry', 'Azure AI Studio', 'Amazon SageMaker', 'Groq', 'Ollama (Local Models)'],
  },
  {
    icon: Layers,
    iconBg: 'rgba(139,92,246,0.15)',
    iconColor: '#8b5cf6',
    name: 'LLM Frameworks & Orchestration',
    sub: 'Agents & Pipelines',
    dotColor: '#8b5cf6',
    items: ['LangChain', 'LangGraph', 'LlamaIndex', 'Semantic Kernel', 'AutoGen', 'CrewAI', 'Model Context Protocol (MCP)', 'Function Calling / Tool Use'],
  },
  {
    icon: Database,
    iconBg: 'rgba(6,182,212,0.15)',
    iconColor: '#06b6d4',
    name: 'Vector DBs & Retrieval',
    sub: 'Embeddings & Search',
    dotColor: '#06b6d4',
    items: ['Pinecone', 'pgvector (PostgreSQL 16)', 'Chroma', 'Weaviate', 'Embedding Models', 'Retrieval Evaluation', 'Chunking Strategy', 'Hallucination Mitigation'],
  },
  {
    icon: BarChart2,
    iconBg: 'rgba(245,158,11,0.15)',
    iconColor: '#f59e0b',
    name: 'Evaluation & Observability',
    sub: 'AI Quality & Monitoring',
    dotColor: '#f59e0b',
    items: ['Ragas', 'DeepEval', 'LangSmith', 'Arize', 'Weights & Biases', 'Prometheus', 'OpenTelemetry', 'Sentry'],
  },
  {
    icon: Cloud,
    iconBg: 'rgba(14,165,233,0.15)',
    iconColor: '#0ea5e9',
    name: 'Cloud & DevOps',
    sub: 'Infrastructure & CI/CD',
    dotColor: '#0ea5e9',
    items: ['Azure (VMs, App Services, Functions, SQL, Logic Apps, API Mgmt, Key Vault, ARM)', 'AWS (Bedrock, SageMaker, EC2, Lambda)', 'GitHub Actions', 'Azure DevOps', 'Docker', 'Kubernetes', 'Terraform / ARM', 'Jenkins'],
  },
  {
    icon: Terminal,
    iconBg: 'rgba(16,185,129,0.15)',
    iconColor: '#10b981',
    name: 'Development Technologies',
    sub: 'Languages & Frameworks',
    dotColor: '#10b981',
    items: ['.NET Core 8', 'ASP.NET MVC', 'Python', 'FastAPI', 'React.js', 'React Native', 'Node.js', 'C#', 'REST APIs', 'GraphQL', 'PostgreSQL', 'Redis', 'RabbitMQ'],
  },
  {
    icon: Workflow,
    iconBg: 'rgba(236,72,153,0.12)',
    iconColor: '#ec4899',
    name: 'Power Platform',
    sub: 'Low-Code & Automation',
    dotColor: '#ec4899',
    items: ['Power Automate', 'Power Apps', 'Copilot Studio', 'Logic Apps'],
  },
  {
    icon: Shield,
    iconBg: 'rgba(245,158,11,0.15)',
    iconColor: '#f59e0b',
    name: 'Security & Governance',
    sub: 'Compliance & Controls',
    dotColor: '#f59e0b',
    items: ['Zero Trust Architecture', 'Azure Entra ID / Azure AD', 'Azure Key Vault', 'IAM', 'TOGAF', 'Zachman Framework', 'Responsible AI Controls', 'Audit Logging'],
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
