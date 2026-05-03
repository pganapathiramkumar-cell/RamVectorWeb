import { ArrowRight, Mail, Cpu, Sparkles } from 'lucide-react';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.gridBg} aria-hidden="true" />
      <div className={styles.glowOrb1} aria-hidden="true" />
      <div className={styles.glowOrb2} aria-hidden="true" />
      <div className={styles.glowOrb3} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.heroInner}>

          {/* ── Left: Text ── */}
          <div className={styles.heroLeft}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Open to Senior Leadership &amp; Principal Architecture Roles
            </div>

            <h1 className={styles.name}>
              Ganapathi<br />
              Ramkumar<br />
              <span className={styles.nameAccent}>Palanivelu</span>
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
          </div>

          {/* ── Right: Profile photo ── */}
          <div className={styles.heroRight}>
            <div className={styles.profileWrap}>

              {/* deep glow behind photo */}
              <div className={styles.profileGlowBg} aria-hidden="true" />

              {/* slow-spin conic outer ring */}
              <div className={styles.profileOuterRing} aria-hidden="true">
                <div className={styles.profileOuterInner} />
              </div>

              {/* counter-spin dashed ring */}
              <div className={styles.profileDashedRing} aria-hidden="true" />

              {/* photo */}
              <div className={styles.profilePhotoRing}>
                <img
                  src="/profile.png"
                  alt="Ganapathi Ramkumar Palanivelu — AI Architect, Enterprise Architect, Solution Architect, Creator of RamVector"
                  className={styles.profileImg}
                  loading="eager"
                  width="300"
                  height="300"
                />
              </div>

              {/* floating badge */}
              <div className={styles.profileBadge}>
                <Cpu size={12} />
                AI &amp; Enterprise Architect
              </div>

              {/* brand mark */}
              <div className={styles.profileBrand}>
                <Sparkles size={10} />
                Ram
              </div>

              {/* decorative corner dots */}
              <span className={`${styles.dot} ${styles.dotTR}`} aria-hidden="true" />
              <span className={`${styles.dot} ${styles.dotBL}`} aria-hidden="true" />
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
