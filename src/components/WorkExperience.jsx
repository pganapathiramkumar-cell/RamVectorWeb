import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from '../styles/WorkExperience.module.css';

const experiences = [
  {
    company: 'Sonata Software',
    role: 'Lead Digital Engineer — Solution Architect',
    dates: 'Feb 2022 – Present',
    location: 'Bangalore, India · Onsite: Belfast, UK',
    current: true,
    color: '#6366f1',
    bullets: [
      'Architected production GenAI platform using Claude Sonnet / Haiku (AWS Bedrock) and Azure OpenAI Service with a spec-driven delivery model — accelerating WinForms-to-React modernisation by 60% and impacting 1,000+ enterprise users at the Belfast client.',
      'Designed end-to-end RAG architecture for enterprise knowledge extraction: chunking strategy, vector store selection, retrieval evaluation pipeline, and hallucination-mitigation layer using pgvector and LangChain.',
      'Established AI governance framework covering responsible-AI controls, model access policies, and audit logging — enabling compliant Azure OpenAI and AWS Bedrock deployment for a UK financial services client.',
      'Architected GenAI solution patterns including RAG, agentic workflows, and multi-model orchestration with cost, latency, and accuracy trade-off analysis to inform model and pattern selection.',
      'Led pre-sales architecture for AI-led modernisation engagements — producing solution blueprints, ROI models, and effort estimates that secured enterprise GenAI deals.',
      'Led 1,000+ Windows Server migration (2012 → 2019) with zero downtime, authored HLD / LLD, coordinated 15-engineer cross-functional team; received formal client appreciation from Infosys.',
      'Modernised CI/CD from TeamCity to GitHub Actions; orchestrated GCP-to-Azure migration with Zero Trust IAM and Azure Key Vault integration.',
    ],
  },
  {
    company: 'TE Connectivity',
    role: 'Senior Application Developer',
    dates: 'Nov 2020 – Feb 2022',
    location: 'Bangalore, India',
    current: false,
    color: '#06b6d4',
    bullets: [
      'Engineered enterprise project tracking platform with multi-feed data pipeline processing, reducing reporting latency for global operations teams.',
    ],
  },
  {
    company: 'Khusheim Industrial Equipment',
    role: 'Senior Application Developer',
    dates: 'Aug 2017 – Nov 2020',
    location: 'Bangalore, India · Onsite: Dammam, Saudi Arabia',
    current: false,
    color: '#8b5cf6',
    bullets: [
      'Delivered full-cycle ERP implementation (Trio ERP) — requirement gathering, solution design, integration, and production go-live — managing direct C-suite stakeholder engagement across Saudi Arabia operations.',
    ],
  },
  {
    company: 'Unisys',
    role: 'Senior Application Developer',
    dates: 'May 2017 – Aug 2017',
    location: 'Bangalore, India',
    current: false,
    color: '#10b981',
    bullets: [
      'Delivered RPA and chatbot automation solutions on CI/CD pipelines, reducing manual processing effort across enterprise operations.',
    ],
  },
];

export default function WorkExperience() {
  const ref = useScrollAnimation();

  return (
    <section className="section" id="experience" ref={ref}>
      <div className="container">
        <div className="fade-up">
          <span className="section-label">Work Experience</span>
          <h2 className="section-title">14+ Years of <span>Enterprise Delivery</span></h2>
          <p className="section-sub">
            From RPA and ERP to production GenAI platforms — a consistent track record of designing
            and delivering complex systems at enterprise scale across UK, India, and Saudi Arabia.
          </p>
        </div>

        <div className={styles.entries}>
          {experiences.map(exp => (
            <div
              key={exp.company}
              className={`${styles.card} fade-up`}
              style={{ borderLeftColor: exp.color }}
            >
              <div className={styles.cardTop}>
                <div>
                  <div className={styles.company}>
                    {exp.company}
                    {exp.current && <span className={styles.currentBadge}>Current</span>}
                  </div>
                  <div className={styles.role}>{exp.role}</div>
                </div>
                <div className={styles.meta}>
                  <div className={styles.dates}>{exp.dates}</div>
                  <div className={styles.location}>{exp.location}</div>
                </div>
              </div>

              <div className={styles.bullets}>
                {exp.bullets.map((b, i) => (
                  <div key={i} className={styles.bullet}>
                    <span className={styles.bulletDot} style={{ background: exp.color }} />
                    {b}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className={`${styles.earlyRoles} fade-up`}>
            <strong>Earlier Roles: </strong>
            Application Developer, Cognizant (CTS), Chennai (Apr 2016 – Feb 2017) ·
            Software Engineer, Volen Software Services, Bangalore (Mar 2015 – Nov 2015) ·
            Software Engineer, HSR Industrial Consultants, Bangalore (Jul 2014 – Feb 2015) ·
            Analyst, Zenta, Chennai (Dec 2011 – Jun 2014).
          </div>
        </div>
      </div>
    </section>
  );
}
