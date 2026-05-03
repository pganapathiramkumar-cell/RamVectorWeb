import { ArrowRight, Mail, Cpu } from 'lucide-react';
import styles from '../styles/Hero.module.css';

const stats = [
  { value: '14+',   label: 'Years Enterprise Architecture' },
  { value: '1000+', label: 'Enterprise Users Impacted' },
  { value: '60%',   label: 'Delivery Acceleration (GenAI)' },
  { value: '5+',    label: 'Azure Expert Certifications' },
];

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.gridBg} aria-hidden="true" />
      <div className={styles.glowOrb1} aria-hidden="true" />
      <div className={styles.glowOrb2} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.heroInner}>

          {/* ── Left: Text content ── */}
          <div className={styles.heroLeft}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Open to Senior Leadership &amp; Principal Architecture Roles
            </div>

            <h1 className={styles.name}>
              Ganapathi<br />
              Ramkumar<br />
              <span className={styles.nameAccent}>Palanivel</span>
            </h1>

            <div className={styles.title}>
              AI Architect &nbsp;·&nbsp; Enterprise Architect &nbsp;·&nbsp;
              <span>Technology Strategist</span>
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
              {stats.map(s => (
                <div key={s.label} className={styles.statItem}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Profile photo ── */}
          <div className={styles.heroRight}>
            <div className={styles.profileWrap}>
              <div className={styles.profileRing}>
                <img
                  src="/profile.png"
                  alt="Ganapathi Ramkumar Palanivel — AI Architect, Enterprise Architect, Solution Architect, and Creator of RamVector AI Document Intelligence Platform"
                  className={styles.profileImg}
                  loading="eager"
                  width="320"
                  height="320"
                />
              </div>
              <div className={styles.profileOrb} aria-hidden="true" />
              <div className={styles.profileBadge}>
                <Cpu size={13} />
                AI &amp; Enterprise Architect
              </div>
              <div className={styles.profileBrand}>RV</div>
            </div>
          </div>

        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
