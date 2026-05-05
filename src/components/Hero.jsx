import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { heroLeft, heroItem, heroRight } from '../animations/variants';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.gradientBg} aria-hidden="true" />
      <div className={styles.gridBg} aria-hidden="true" />
      <div className={styles.glowOrb1} aria-hidden="true" />
      <div className={styles.glowOrb2} aria-hidden="true" />
      <div className={styles.glowOrb3} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.heroInner}>

          {/* ── Left: Text content (staggered page load) ── */}
          <motion.div
            className={styles.heroLeft}
            variants={heroLeft}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className={styles.name} variants={heroItem}>
              Ganapathi<br />
              Ramkumar<br />
              <span className={styles.nameAccent}>Palanivelu</span>
            </motion.h1>

            <motion.div className={styles.title} variants={heroItem}>
              AI Architect &nbsp;·&nbsp; Enterprise Architect &nbsp;·&nbsp;
              <span>Technology Strategist</span>
            </motion.div>

            <motion.p className={styles.statement} variants={heroItem}>
              Engineering the <strong>intelligence layer of the enterprise</strong> — from RAG pipelines
              and multi-agent systems to TOGAF-aligned cloud architectures that
              convert AI investments into measurable business value.
            </motion.p>

            <motion.div className={styles.actions} variants={heroItem}>
              <a href="#projects" className={styles.btnPrimary}>
                View Architecture Portfolio <ArrowRight size={16} />
              </a>
              <a href="#contact" className={styles.btnOutline}>
                <Mail size={15} /> Get In Touch
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: Profile photo (fade + scale) ── */}
          <motion.div
            className={styles.heroRight}
            variants={heroRight}
            initial="hidden"
            animate="visible"
          >
            <div className={styles.profileWrap}>
              <div className={styles.profileGlowBg} aria-hidden="true" />
              <div className={styles.profileOuterRing} aria-hidden="true">
                <div className={styles.profileOuterInner} />
              </div>
              <div className={styles.profileDashedRing} aria-hidden="true" />
              <div className={styles.profilePhotoRing}>
                <img
                  src="/profile.png"
                  alt="Ganapathi Ramkumar Palanivelu — AI Architect, Enterprise Architect"
                  className={styles.profileImg}
                  loading="eager"
                  width="300"
                  height="300"
                />
              </div>
              <span className={`${styles.dot} ${styles.dotTR}`} aria-hidden="true" />
              <span className={`${styles.dot} ${styles.dotBL}`} aria-hidden="true" />
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
