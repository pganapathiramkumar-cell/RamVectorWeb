import { ArrowRight, Mail } from 'lucide-react';
import styles from '../styles/Hero.module.css';

const stats = [
  { value: '12+',  label: 'Years Enterprise Architecture' },
  { value: '50+',  label: 'AI & Cloud Projects Delivered' },
  { value: '5+',   label: 'GenAI Platforms Deployed' },
  { value: '3',    label: 'Multi-Cloud Environments' },
];

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.gridBg} aria-hidden="true" />
      <div className={styles.glowOrb1} aria-hidden="true" />
      <div className={styles.glowOrb2} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Open to Senior Leadership &amp; Principal Architecture Roles
        </div>

        <h1 className={styles.name}>
          Ramkumar<br />
          <span className={styles.nameAccent}>Palanivel</span>
        </h1>

        <div className={styles.title}>
          AI Architect &nbsp;·&nbsp; Enterprise Architect &nbsp;·&nbsp; <span>CTO Track</span>
        </div>

        <p className={styles.statement}>
          Engineering the <strong>intelligence layer of the enterprise</strong> — from RAG pipelines
          and multi-agent systems to TOGAF-aligned cloud architectures that
          convert AI investments into measurable business value.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>
            View Architecture Portfolio <ArrowRight size={16} />
          </a>
          <a href="#contact" className={styles.btnOutline}>
            <Mail size={15} /> Get In Touch
          </a>
        </div>

        <div className={styles.stats}>
          {stats.map((s, i) => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
