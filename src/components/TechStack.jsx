import { Brain, Cloud, Layers, Terminal, Shield, BarChart2, Workflow, Database } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from '../styles/TechStack.module.css';

const categories = [
  {
    icon: Brain,
    iconBg: 'rgba(147,51,234,0.15)',
    iconColor: '#a855f7',
    name: 'AI & GenAI Platforms',
    sub: 'LLM & Foundation Models',
    dotColor: '#a855f7',
    items: ['GPT-4 / GPT-4o', 'Claude Sonnet / Haiku (AWS Bedrock)', 'Azure OpenAI Service', 'Azure AI Foundry', 'Azure AI Studio', 'Amazon SageMaker', 'Groq', 'Ollama (Local Models)'],
  },
  {
    icon: Layers,
    iconBg: 'rgba(236,72,153,0.15)',
    iconColor: '#ec4899',
    name: 'LLM Frameworks & Orchestration',
    sub: 'Agents & Pipelines',
    dotColor: '#ec4899',
    items: ['LangChain', 'LangGraph', 'LlamaIndex', 'Semantic Kernel', 'AutoGen', 'CrewAI', 'Model Context Protocol (MCP)', 'Function Calling / Tool Use'],
  },
  {
    icon: Database,
    iconBg: 'rgba(249,115,22,0.15)',
    iconColor: '#f97316',
    name: 'Vector DBs & Retrieval',
    sub: 'Embeddings & Search',
    dotColor: '#f97316',
    items: ['Pinecone', 'pgvector (PostgreSQL 16)', 'Chroma', 'Weaviate', 'Embedding Models', 'Retrieval Evaluation', 'Chunking Strategy', 'Hallucination Mitigation'],
  },
  {
    icon: BarChart2,
    iconBg: 'rgba(220,38,38,0.15)',
    iconColor: '#ef4444',
    name: 'Evaluation & Observability',
    sub: 'AI Quality & Monitoring',
    dotColor: '#ef4444',
    items: ['Ragas', 'DeepEval', 'LangSmith', 'Arize', 'Weights & Biases', 'Prometheus', 'OpenTelemetry', 'Sentry'],
  },
  {
    icon: Cloud,
    iconBg: 'rgba(147,51,234,0.15)',
    iconColor: '#c084fc',
    name: 'Cloud & DevOps',
    sub: 'Infrastructure & CI/CD',
    dotColor: '#c084fc',
    items: ['Azure (VMs, App Services, Functions, SQL, Logic Apps, API Mgmt, Key Vault, ARM)', 'AWS (Bedrock, SageMaker, EC2, Lambda)', 'GitHub Actions', 'Azure DevOps', 'Docker', 'Kubernetes', 'Terraform / ARM', 'Jenkins'],
  },
  {
    icon: Terminal,
    iconBg: 'rgba(249,115,22,0.12)',
    iconColor: '#fb923c',
    name: 'Development Technologies',
    sub: 'Languages & Frameworks',
    dotColor: '#fb923c',
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
    iconBg: 'rgba(220,38,38,0.15)',
    iconColor: '#f87171',
    name: 'Security & Governance',
    sub: 'Compliance & Controls',
    dotColor: '#f87171',
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
                  <a
                    key={item}
                    href={`https://www.google.com/search?q=${encodeURIComponent(item)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.item}
                    title={`Search: ${item}`}
                  >
                    <span className={styles.itemDot} style={{ background: cat.dotColor }} />
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
