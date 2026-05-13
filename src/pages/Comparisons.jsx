import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, Tag, Calendar } from 'lucide-react';
import { comparisons } from '../content/comparisons/comparisons';
import ArticleRenderer from './ArticleRenderer';
import styles from '../styles/Content.module.css';

const SITE_URL = 'https://ramvector.com';

function CompCard({ comp }) {
  return (
    <Link to={`/comparisons/${comp.slug}`} className={styles.card}>
      <div className={styles.cardMeta}>
        <span className={styles.cardDate}><Calendar size={12} />{comp.date}</span>
        <span className={styles.cardTime}><Clock size={12} />{comp.readTime}</span>
      </div>
      <h2 className={styles.cardTitle}>{comp.title}</h2>
      <p className={styles.cardDesc}>{comp.description}</p>
      <div className={styles.cardTags}>
        {comp.tags.slice(0, 4).map(t => (
          <span key={t} className={styles.tag}><Tag size={10} />{t}</span>
        ))}
      </div>
      <span className={styles.cardReadMore}>Read comparison →</span>
    </Link>
  );
}

export function ComparisonList() {
  return (
    <>
      <Helmet>
        <title>AI Tool Comparisons — LangChain vs LlamaIndex, Pinecone vs pgvector | Ganapathi Ramkumar Palanivelu</title>
        <meta name="description" content="In-depth AI tool comparisons by Ganapathi Ramkumar Palanivelu — LangChain vs LlamaIndex, Pinecone vs pgvector, and more enterprise AI framework comparisons." />
        <link rel="canonical" href={`${SITE_URL}/comparisons`} />
        <meta property="og:title" content="AI Tool Comparisons — Ganapathi Ramkumar Palanivelu" />
        <meta property="og:url" content={`${SITE_URL}/comparisons`} />
      </Helmet>
      <div className={styles.page}>
        <div className={styles.listHero}>
          <div className="container">
            <Link to="/" className={styles.backLink}><ArrowLeft size={14} /> Back to Portfolio</Link>
            <span className={styles.sectionLabel}>Comparisons</span>
            <h1 className={styles.listTitle}>AI Framework Comparisons</h1>
            <p className={styles.listSub}>Objective, in-depth comparisons of AI frameworks, vector databases, and tools — based on production experience.</p>
          </div>
        </div>
        <div className="container">
          <div className={styles.grid}>
            {comparisons.map(c => <CompCard key={c.slug} comp={c} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export function ComparisonPost() {
  const { slug } = useParams();
  const comp = comparisons.find(c => c.slug === slug);

  if (!comp) {
    return (
      <div className={styles.notFound}>
        <h1>Comparison not found</h1>
        <Link to="/comparisons">← Back to Comparisons</Link>
      </div>
    );
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: comp.title,
    description: comp.description,
    datePublished: comp.date,
    author: { '@type': 'Person', name: comp.author, url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'RamVector', url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/comparisons/${comp.slug}`,
    keywords: comp.tags.join(', '),
  };

  return (
    <>
      <Helmet>
        <title>{comp.title} | Ganapathi Ramkumar Palanivelu</title>
        <meta name="description" content={comp.description} />
        <link rel="canonical" href={`${SITE_URL}/comparisons/${comp.slug}`} />
        <meta property="og:title" content={comp.title} />
        <meta property="og:description" content={comp.description} />
        <meta property="og:url" content={`${SITE_URL}/comparisons/${comp.slug}`} />
        <meta name="keywords" content={comp.tags.join(', ')} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>
      <div className={styles.page}>
        <div className={styles.articleHero}>
          <div className="container">
            <Link to="/comparisons" className={styles.backLink}><ArrowLeft size={14} /> Back to Comparisons</Link>
            <div className={styles.articleMeta}>
              <span><Calendar size={12} />{comp.date}</span>
              <span><Clock size={12} />{comp.readTime}</span>
            </div>
            <h1 className={styles.articleTitle}>{comp.title}</h1>
            <p className={styles.articleDesc}>{comp.description}</p>
            <div className={styles.cardTags}>
              {comp.tags.map(t => (
                <span key={t} className={styles.tag}><Tag size={10} />{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <div className={styles.articleLayout}>
            <article className={styles.articleContent}>
              <ArticleRenderer sections={comp.sections} />
            </article>
            <aside className={styles.sidebar}>
              <div className={styles.sidebarBox}>
                <h3>About the Author</h3>
                <p><strong>Ganapathi Ramkumar Palanivelu</strong> — Senior AI Architect with production experience across LangChain, LlamaIndex, Pinecone, pgvector, and the full RAG/GenAI stack.</p>
                <a href="/#contact" className={styles.sidebarCta}>Get in Touch →</a>
              </div>
              <div className={styles.sidebarBox}>
                <h3>More Comparisons</h3>
                {comparisons.filter(c => c.slug !== slug).map(c => (
                  <Link key={c.slug} to={`/comparisons/${c.slug}`} className={styles.sidebarLink}>{c.title}</Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
