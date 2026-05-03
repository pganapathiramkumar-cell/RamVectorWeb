import styles from '../styles/Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logoArea}>
          <div className={styles.logoMark}>Ram</div>
          <span className={styles.logoText}>
            <strong>Ganapathi Ramkumar Palanivelu</strong> · AI &amp; Enterprise Architect
          </span>
        </div>

        <div className={styles.links}>
          <a href="#about">About</a>
          <a href="#architecture">Architecture</a>
          <a href="#ai-systems">AI Systems</a>
          <a href="#projects">Projects</a>
          <a
            href="https://apps.apple.com/in/app/ramvector/id6763949988"
            target="_blank"
            rel="noopener noreferrer"
          >
            RamVector App ↗
          </a>
        </div>

        <div className={styles.right}>
          &copy; {year} Ganapathi Ramkumar Palanivelu · RamVector
        </div>
      </div>
    </footer>
  );
}
