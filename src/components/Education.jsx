import { GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from '../styles/Education.module.css';

const degrees = [
  {
    degree: 'Doctor of Business Administration',
    institution: 'Walsh College, USA',
    year: 'Expected 2028',
    status: 'In Progress',
    color: '#a855f7',
    iconBg: 'rgba(147,51,234,0.12)',
    barColor: 'linear-gradient(90deg, #7c3aed, #a855f7)',
  },
  {
    degree: 'CTO Leadership Programme',
    institution: 'IIM Lucknow',
    year: 'Expected Nov 2026',
    status: 'In Progress',
    color: '#f97316',
    iconBg: 'rgba(249,115,22,0.12)',
    barColor: 'linear-gradient(90deg, #f97316, #ea580c)',
  },
  {
    degree: 'M.Tech, Data Science & Machine Learning',
    institution: 'PES University',
    year: '2026',
    status: 'In Progress',
    color: '#ec4899',
    iconBg: 'rgba(236,72,153,0.12)',
    barColor: 'linear-gradient(90deg, #ec4899, #db2777)',
  },
  {
    degree: 'B.Tech, Information Technology',
    institution: 'Anna University',
    year: '2009',
    status: 'Completed',
    color: '#ef4444',
    iconBg: 'rgba(220,38,38,0.12)',
    barColor: 'linear-gradient(90deg, #ef4444, #f97316)',
  },
];

export default function Education() {
  const ref = useScrollAnimation();

  return (
    <section className="section" id="education" ref={ref}>
      <div className="container">
        <div className="fade-up">
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic <span>Foundations</span></h2>
          <p className="section-sub">
            Combining business leadership, data science, and technology engineering — from B.Tech to DBA.
          </p>
        </div>

        <div className={styles.grid}>
          {degrees.map(d => (
            <div key={d.degree} className={`${styles.card} fade-up`}>
              <div className={styles.topBar} style={{ background: d.barColor }} />
              <div className={styles.iconWrap} style={{ background: d.iconBg, color: d.color }}>
                <GraduationCap size={20} />
              </div>
              <div className={styles.degree}>{d.degree}</div>
              <div className={styles.institution}>{d.institution}</div>
              <div className={styles.yearRow}>
                <span className={styles.year}>{d.year}</span>
                <span
                  className={styles.status}
                  style={{
                    color:        d.status === 'Completed' ? 'var(--accent-emerald)' : d.color,
                    borderColor:  d.status === 'Completed' ? 'rgba(16,185,129,0.3)'  : `${d.color}40`,
                    background:   d.status === 'Completed' ? 'rgba(16,185,129,0.1)'  : `${d.color}18`,
                  }}
                >
                  {d.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
