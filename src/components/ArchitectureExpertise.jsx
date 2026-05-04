import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from '../styles/ArchitectureExpertise.module.css';

const frameworks = [
  {
    badge: 'TOGAF',
    badgeColor: '#a855f7',
    badgeBg: 'rgba(147,51,234,0.15)',
    title: 'TOGAF Enterprise Architecture',
    desc: 'Applies TOGAF ADM phases end-to-end — from architecture vision and business architecture through to implementation governance and change management.',
    layers: [
      'Architecture Vision & Principles',
      'Business & Application Architecture',
      'Data & Technology Architecture',
      'Migration Planning & Governance',
      'Architecture Requirement Specifications',
    ],
  },
  {
    badge: 'Zachman',
    badgeColor: '#ec4899',
    badgeBg: 'rgba(236,72,153,0.15)',
    title: 'Zachman Framework Mapping',
    desc: 'Uses the Zachman ontology to provide structured, multi-perspective views of enterprise systems — ensuring every stakeholder sees architecture at the right altitude.',
    layers: [
      'Executive (Scope & Context)',
      'Business Mgmt (Business Concepts)',
      'Architect (System Logic)',
      'Engineer (Technology Physics)',
      'Technician (Component Assemblies)',
    ],
  },
  {
    badge: 'HLD · LLD',
    badgeColor: '#f97316',
    badgeBg: 'rgba(249,115,22,0.15)',
    title: 'HLD / LLD Architecture Design',
    desc: 'Produces decision-ready architecture artefacts — from high-level conceptual diagrams for C-suite alignment to detailed technical specifications for engineering teams.',
    layers: [
      'Context & Container Diagrams (C4)',
      'Sequence & State Diagrams',
      'Data Flow & ER Models',
      'API Contract Specifications',
      'Deployment & Infrastructure Blueprints',
    ],
  },
];

const governance = [
  { label: 'ARB Participation', value: 'Architecture Review Board membership — evaluating solution proposals, standards compliance, and technical risk across programmes.' },
  { label: 'CoE Leadership',    value: 'Established and led AI and Cloud Centres of Excellence, driving standards adoption, reusable patterns, and engineering capability uplift.' },
  { label: 'Roadmap Ownership', value: '3-5 year technology roadmaps aligned to business strategy, investment cycles, and regulatory requirements.' },
  { label: 'Risk & Compliance', value: 'Architecture-level risk assessment, DPIA alignment, Zero Trust posture reviews, and regulatory compliance mapping.' },
];

export default function ArchitectureExpertise() {
  const ref = useScrollAnimation();

  return (
    <section className={`section ${styles.wrapper}`} id="architecture" ref={ref}>
      <div className="container">
        <div className="fade-up">
          <span className="section-label">Architecture Expertise</span>
          <h2 className="section-title">Framework-Driven <span>Enterprise Design</span></h2>
          <p className="section-sub">
            Architecture is not diagrams — it is structured decision-making. Every engagement is anchored
            to recognised frameworks, governed through formal review, and communicated at the right altitude.
          </p>
        </div>

        <div className={styles.frameworkGrid}>
          {frameworks.map(fw => (
            <div key={fw.badge} className={`${styles.frameworkCard} fade-up`}>
              <div className={styles.fwTop}>
                <span
                  className={styles.fwBadge}
                  style={{ color: fw.badgeColor, background: fw.badgeBg }}
                >
                  {fw.badge}
                </span>
              </div>
              <h3 className={styles.fwTitle}>{fw.title}</h3>
              <p className={styles.fwDesc}>{fw.desc}</p>
              <div className={styles.fwLayers}>
                {fw.layers.map(l => (
                  <div key={l} className={styles.fwLayer}>
                    <span className={styles.fwLayerDot} />
                    {l}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.governanceRow} fade-up`}>
          {governance.map(g => (
            <div key={g.label} className={styles.govItem}>
              <span className={styles.govLabel}>{g.label}</span>
              <span className={styles.govValue}>{g.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
