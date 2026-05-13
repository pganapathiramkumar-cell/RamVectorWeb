import styles from '../styles/Content.module.css';

function CodeBlock({ lang, text }) {
  return (
    <div className={styles.codeBlock}>
      {lang && <span className={styles.codeLang}>{lang}</span>}
      <pre><code>{text}</code></pre>
    </div>
  );
}

function Table({ headers, rows }) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>{headers.map(h => <th key={h}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ArticleRenderer({ sections }) {
  return (
    <div className={styles.articleBody}>
      {sections.map((s, i) => {
        switch (s.type) {
          case 'h2': return <h2 key={i} className={styles.h2}>{s.text}</h2>;
          case 'h3': return <h3 key={i} className={styles.h3}>{s.text}</h3>;
          case 'p':  return <p  key={i} className={styles.p}>{s.text}</p>;
          case 'ul': return (
            <ul key={i} className={styles.ul}>
              {s.items.map((item, j) => <li key={j}>{item}</li>)}
            </ul>
          );
          case 'ol': return (
            <ol key={i} className={styles.ol}>
              {s.items.map((item, j) => <li key={j}>{item}</li>)}
            </ol>
          );
          case 'code':  return <CodeBlock key={i} lang={s.lang} text={s.text} />;
          case 'table': return <Table key={i} headers={s.headers} rows={s.rows} />;
          case 'callout': return (
            <div key={i} className={styles.callout}>{s.text}</div>
          );
          default: return null;
        }
      })}
    </div>
  );
}
