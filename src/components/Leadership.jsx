import { Target, Users, Lightbulb, GitMerge, MessageSquare, TrendingUp, Clock, Handshake } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from '../styles/Leadership.module.css';

const pillars = [
  {
    num: '01',
    title: 'Architecture as Strategy',
    desc: 'Technology decisions are business decisions. Every architecture choice is framed in terms of capability, risk, cost, and time-to-value — not technical preference.',
  },
  {
    num: '02',
    title: 'Communication at Every Altitude',
    desc: 'From engineering sprint reviews to board-level technology strategy sessions — adapting the message and medium to the audience without losing technical fidelity.',
  },
  {
    num: '03',
    title: 'Build for Change, Not Forever',
    desc: 'Enterprise systems outlive their original requirements. Architecture must be designed for evolvability — modular, observable, and decoupled from any single technology bet.',
  },
  {
    num: '04',
    title: 'Cross-Functional Ownership',
    desc: 'Architecture succeeds when it is owned by the teams that build it. Leads through enablement, documentation, and coaching — not gatekeeping.',
  },
];

const approach = [
  {
    icon: Target,
    iconBg: 'rgba(99,102,241,0.12)',
    iconColor: '#6366f1',
    title: 'Outcome-Driven',
    desc: 'Scopes every engagement around measurable business outcomes, not technology deliverables.',
  },
  {
    icon: MessageSquare,
    iconBg: 'rgba(6,182,212,0.12)',
    iconColor: '#06b6d4',
    title: 'C-Suite Ready',
    desc: 'Translates complex AI and cloud strategy into boardroom narratives and investment cases.',
  },
  {
    icon: Clock,
    iconBg: 'rgba(16,185,129,0.12)',
    iconColor: '#10b981',
    title: 'Time-to-Market Focus',
    desc: 'Architects for delivery velocity — phased roadmaps, quick wins, and sustainable scale.',
  },
  {
    icon: Handshake,
    iconBg: 'rgba(245,158,11,0.12)',
    iconColor: '#f59e0b',
    title: 'Vendor-Neutral',
    desc: 'Platform-agnostic advisory — choosing capabilities over brand, and build vs. buy rigorously.',
  },
  {
    icon: TrendingUp,
    iconBg: 'rgba(139,92,246,0.12)',
    iconColor: '#8b5cf6',
    title: 'Stakeholder Trust',
    desc: 'Builds long-term credibility through transparent communication, consistent delivery, and intellectual honesty.',
  },
  {
    icon: GitMerge,
    iconBg: 'rgba(239,68,68,0.12)',
    iconColor: '#ef4444',
    title: 'Governance Champion',
    desc: 'Drives ARB participation, architecture standards, and CoE practices that scale beyond any single project.',
  },
];

export default function Leadership() {
  const ref = useScrollAnimation();

  return (
    <section className="section" id="leadership" ref={ref}>
      <div className="container">
        <div className="fade-up">
          <span className="section-label">Leadership & Strategy</span>
          <h2 className="section-title">Leading Through <span>Architecture</span></h2>
          <p className="section-sub">
            Technical depth without strategic breadth stalls at the team level. The most
            impactful architecture work happens at the intersection of engineering excellence and executive alignment.
          </p>
        </div>

        <div className={styles.inner}>
          <div className={styles.left}>
            <div className={styles.pillars}>
              {pillars.map(p => (
                <div key={p.num} className={`${styles.pillar} fade-up`}>
                  <span className={styles.pillarNum}>{p.num}</span>
                  <div className={styles.pillarContent}>
                    <div className={styles.pillarTitle}>{p.title}</div>
                    <div className={styles.pillarDesc}>{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <div className={`${styles.quoteBlock} fade-up`}>
              <p className={styles.quote}>
                "The role of an enterprise architect is not to control technology decisions —
                it is to create the conditions where the right decisions can be made quickly,
                consistently, and in alignment with where the business is going."
              </p>
              <span className={styles.quoteAuthor}>— Ramkumar Palanivel · Architecture Philosophy</span>
            </div>

            <div className={styles.approach}>
              {approach.map(a => (
                <div key={a.title} className={`${styles.approachItem} fade-up`}>
                  <div className={styles.approachIcon} style={{ background: a.iconBg, color: a.iconColor }}>
                    <a.icon size={16} />
                  </div>
                  <div className={styles.approachTitle}>{a.title}</div>
                  <div className={styles.approachDesc}>{a.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
