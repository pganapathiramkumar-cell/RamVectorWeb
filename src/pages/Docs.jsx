import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, Tag, Calendar, FileText } from 'lucide-react';
import { docs } from '../content/docs/docs';
import ArticleRenderer from './ArticleRenderer';
import styles from '../styles/Content.module.css';

const SITE_URL = 'https://ramvector.com';

function DocCard({ doc }) {
  return (
    <Link to={`/docs/${doc.slug}`} className={styles.card}>
      <div className={styles.cardMeta}>
        <span className={styles.cardDate}><Calendar size={12} />{doc.date}</span>
        <span className={styles.cardTime}><Clock size={12} />{doc.readTime}</span>
      </div>
      <h2 className={styles.cardTitle}>{doc.title}</h2>
      <p className={styles.cardDesc}>{doc.description}</p>
      <div className={styles.cardTags}>
        {doc.tags.slice(0, 4).map(t => (
          <span key={t} className={styles.tag}><Tag size={10} />{t}</span>
        ))}
      </div>
      <span className={styles.cardReadMore}>Read docs →</span>
    </Link>
  );
}

export function DocList() {
  return (
    <>
      <Helmet>
        <title>AI Architecture Documentation — RamVector | Ganapathi Ramkumar Palanivelu</title>
        <meta name="description" content="Technical documentation and AI architecture references by Ganapathi Ramkumar Palanivelu — RamVector system architecture, AI glossary, and enterprise AI documentation." />
        <link rel="canonical" href={`${SITE_URL}/docs`} />
        <meta property="og:title" content="AI Architecture Documentation — RamVector" />
        <meta property="og:url" content={`${SITE_URL}/docs`} />
      </Helmet>
      <div className={styles.page}>
        <div className={styles.listHero}>
          <div className="container">
            <Link to="/" className={styles.backLink}><ArrowLeft size={14} /> Back to Portfolio</Link>
            <span className={styles.sectionLabel}>Documentation</span>
            <h1 className={styles.listTitle}>Technical Documentation</h1>
            <p className={styles.listSub}>Architecture references, technical specs, and AI glossaries for enterprise AI practitioners.</p>
          </div>
        </div>
        <div className="container">
          <div className={styles.grid}>
            {docs.map(d => <DocCard key={d.slug} doc={d} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export function DocPost() {
  const { slug } = useParams();
  const doc = docs.find(d => d.slug === slug);

  if (!doc) {
    return (
      <div className={styles.notFound}>
        <h1>Document not found</h1>
        <Link to="/docs">← Back to Docs</Link>
      </div>
    );
  }

  const techDocSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: doc.title,
    description: doc.description,
    datePublished: doc.date,
    author: { '@type': 'Person', name: doc.author, url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'RamVector', url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/docs/${doc.slug}`,
    keywords: doc.tags.join(', '),
  };

  return (
    <>
      <Helmet>
        <title>{doc.title} | Ganapathi Ramkumar Palanivelu</title>
        <meta name="description" content={doc.description} />
        <link rel="canonical" href={`${SITE_URL}/docs/${doc.slug}`} />
        <meta property="og:title" content={doc.title} />
        <meta property="og:description" content={doc.description} />
        <meta property="og:url" content={`${SITE_URL}/docs/${doc.slug}`} />
        <meta name="keywords" content={doc.tags.join(', ')} />
        <script type="application/ld+json">{JSON.stringify(techDocSchema)}</script>
      </Helmet>
      <div className={styles.page}>
        <div className={styles.articleHero}>
          <div className="container">
            <Link to="/docs" className={styles.backLink}><ArrowLeft size={14} /> Back to Docs</Link>
            <div className={styles.articleMeta}>
              <span><Calendar size={12} />{doc.date}</span>
              <span><Clock size={12} />{doc.readTime}</span>
              <span><FileText size={12} />Documentation</span>
            </div>
            <h1 className={styles.articleTitle}>{doc.title}</h1>
            <p className={styles.articleDesc}>{doc.description}</p>
            <div className={styles.cardTags}>
              {doc.tags.map(t => (
                <span key={t} className={styles.tag}><Tag size={10} />{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <div className={styles.articleLayout}>
            <article className={styles.articleContent}>
              <ArticleRenderer sections={doc.sections} />
            </article>
            <aside className={styles.sidebar}>
              <div className={styles.sidebarBox}>
                <h3>About the Author</h3>
                <p><strong>Ganapathi Ramkumar Palanivelu</strong> — Senior AI Architect and creator of RamVector AI Document Intelligence platform.</p>
                <a href="/#contact" className={styles.sidebarCta}>Get in Touch →</a>
              </div>
              <div className={styles.sidebarBox}>
                <h3>More Documentation</h3>
                {docs.filter(d => d.slug !== slug).map(d => (
                  <Link key={d.slug} to={`/docs/${d.slug}`} className={styles.sidebarLink}>{d.title}</Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
