import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, Tag, Calendar, BookOpen } from 'lucide-react';
import { tutorials } from '../content/tutorials/tutorials';
import ArticleRenderer from './ArticleRenderer';
import styles from '../styles/Content.module.css';

const SITE_URL = 'https://ramvector.com';

function TutorialCard({ tutorial }) {
  return (
    <Link to={`/tutorials/${tutorial.slug}`} className={styles.card}>
      <div className={styles.cardMeta}>
        <span className={styles.cardDate}><Calendar size={12} />{tutorial.date}</span>
        <span className={styles.cardTime}><Clock size={12} />{tutorial.readTime}</span>
        <span className={styles.difficultyBadge} data-level={tutorial.difficulty.toLowerCase()}>{tutorial.difficulty}</span>
      </div>
      <h2 className={styles.cardTitle}>{tutorial.title}</h2>
      <p className={styles.cardDesc}>{tutorial.description}</p>
      <div className={styles.cardTags}>
        {tutorial.tags.slice(0, 4).map(t => (
          <span key={t} className={styles.tag}><Tag size={10} />{t}</span>
        ))}
      </div>
      <span className={styles.cardReadMore}>Start tutorial →</span>
    </Link>
  );
}

export function TutorialList() {
  return (
    <>
      <Helmet>
        <title>AI Tutorials — RAG, LangChain, LangGraph | Ganapathi Ramkumar Palanivelu</title>
        <meta name="description" content="Step-by-step AI tutorials by Ganapathi Ramkumar Palanivelu — build RAG pipelines with LangChain and Pinecone, create multi-agent AI systems with LangGraph, and more." />
        <link rel="canonical" href={`${SITE_URL}/tutorials`} />
        <meta property="og:title" content="AI Tutorials — Ganapathi Ramkumar Palanivelu" />
        <meta property="og:url" content={`${SITE_URL}/tutorials`} />
      </Helmet>
      <div className={styles.page}>
        <div className={styles.listHero}>
          <div className="container">
            <Link to="/" className={styles.backLink}><ArrowLeft size={14} /> Back to Portfolio</Link>
            <span className={styles.sectionLabel}>Tutorials</span>
            <h1 className={styles.listTitle}>Hands-On AI Tutorials</h1>
            <p className={styles.listSub}>Step-by-step guides for building production AI systems — RAG pipelines, multi-agent workflows, and enterprise AI architectures.</p>
          </div>
        </div>
        <div className="container">
          <div className={styles.grid}>
            {tutorials.map(t => <TutorialCard key={t.slug} tutorial={t} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export function TutorialPost() {
  const { slug } = useParams();
  const tutorial = tutorials.find(t => t.slug === slug);

  if (!tutorial) {
    return (
      <div className={styles.notFound}>
        <h1>Tutorial not found</h1>
        <Link to="/tutorials">← Back to Tutorials</Link>
      </div>
    );
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: tutorial.title,
    description: tutorial.description,
    author: { '@type': 'Person', name: tutorial.author, url: SITE_URL },
    datePublished: tutorial.date,
    keywords: tutorial.tags.join(', '),
  };

  return (
    <>
      <Helmet>
        <title>{tutorial.title} | Ganapathi Ramkumar Palanivelu</title>
        <meta name="description" content={tutorial.description} />
        <link rel="canonical" href={`${SITE_URL}/tutorials/${tutorial.slug}`} />
        <meta property="og:title" content={tutorial.title} />
        <meta property="og:description" content={tutorial.description} />
        <meta property="og:url" content={`${SITE_URL}/tutorials/${tutorial.slug}`} />
        <meta name="keywords" content={tutorial.tags.join(', ')} />
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
      </Helmet>
      <div className={styles.page}>
        <div className={styles.articleHero}>
          <div className="container">
            <Link to="/tutorials" className={styles.backLink}><ArrowLeft size={14} /> Back to Tutorials</Link>
            <div className={styles.articleMeta}>
              <span><Calendar size={12} />{tutorial.date}</span>
              <span><Clock size={12} />{tutorial.readTime}</span>
              <span><BookOpen size={12} />{tutorial.difficulty}</span>
            </div>
            <h1 className={styles.articleTitle}>{tutorial.title}</h1>
            <p className={styles.articleDesc}>{tutorial.description}</p>
            <div className={styles.cardTags}>
              {tutorial.tags.map(t => (
                <span key={t} className={styles.tag}><Tag size={10} />{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <div className={styles.articleLayout}>
            <article className={styles.articleContent}>
              <ArticleRenderer sections={tutorial.sections} />
            </article>
            <aside className={styles.sidebar}>
              <div className={styles.sidebarBox}>
                <h3>About the Author</h3>
                <p><strong>Ganapathi Ramkumar Palanivelu</strong> — Senior AI Architect, creator of RamVector, specialising in production RAG systems, multi-agent AI, and enterprise architecture.</p>
                <a href="/#contact" className={styles.sidebarCta}>Get in Touch →</a>
              </div>
              <div className={styles.sidebarBox}>
                <h3>More Tutorials</h3>
                {tutorials.filter(t => t.slug !== slug).map(t => (
                  <Link key={t.slug} to={`/tutorials/${t.slug}`} className={styles.sidebarLink}>{t.title}</Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
