import { GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from '../styles/Education.module.css';

const degrees = [
  {
    degree: 'Doctor of Business Administration',
    institution: 'Walsh College, USA',
    year: 'Expected 2028',
    status: 'In Progress',
    color: '#6366f1',
    iconBg: 'rgba(99,102,241,0.12)',
    barColor: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
  },
  {
    degree: 'CTO Leadership Programme',
    institution: 'IIM Lucknow',
    year: 'Expected Nov 2026',
    status: 'In Progress',
    color: '#f59e0b',
    iconBg: 'rgba(245,158,11,0.12)',
    barColor: 'linear-gradient(90deg, #f59e0b, #f97316)',
  },
  {
    degree: 'M.Tech, Data Science & Machine Learning',
    institution: 'PES University',
    year: '2026',
    status: 'In Progress',
    color: '#8b5cf6',
    iconBg: 'rgba(139,92,246,0.12)',
    barColor: 'linear-gradient(90deg, #8b5cf6, #a78bfa)',
  },
  {
    degree: 'B.Tech, Information Technology',
    institution: 'Anna University',
    year: '2009',
    status: 'Completed',
    color: '#10b981',
    iconBg: 'rgba(16,185,129,0.12)',
    barColor: 'linear-gradient(90deg, #10b981, #06b6d4)',
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
