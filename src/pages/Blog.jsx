import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, Tag, Calendar, User } from 'lucide-react';
import { blogPosts } from '../content/blog/posts';
import ArticleRenderer from './ArticleRenderer';
import styles from '../styles/Content.module.css';

const SITE_URL = 'https://ramvector.com';

function PostCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className={styles.card}>
      <div className={styles.cardMeta}>
        <span className={styles.cardDate}><Calendar size={12} />{post.date}</span>
        <span className={styles.cardTime}><Clock size={12} />{post.readTime}</span>
      </div>
      <h2 className={styles.cardTitle}>{post.title}</h2>
      <p className={styles.cardDesc}>{post.description}</p>
      <div className={styles.cardTags}>
        {post.tags.slice(0, 4).map(t => (
          <span key={t} className={styles.tag}><Tag size={10} />{t}</span>
        ))}
      </div>
      <span className={styles.cardReadMore}>Read article →</span>
    </Link>
  );
}

export function BlogList() {
  return (
    <>
      <Helmet>
        <title>AI Architecture Blog — Ganapathi Ramkumar Palanivelu | RamVector</title>
        <meta name="description" content="Articles on RAG pipelines, Generative AI, multi-agent systems, enterprise architecture, and LLM engineering by Ganapathi Ramkumar Palanivelu." />
        <link rel="canonical" href={`${SITE_URL}/blog`} />
        <meta property="og:title" content="AI Architecture Blog — Ganapathi Ramkumar Palanivelu" />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
      </Helmet>
      <div className={styles.page}>
        <div className={styles.listHero}>
          <div className="container">
            <Link to="/" className={styles.backLink}><ArrowLeft size={14} /> Back to Portfolio</Link>
            <span className={styles.sectionLabel}>Blog</span>
            <h1 className={styles.listTitle}>AI Architecture Insights</h1>
            <p className={styles.listSub}>RAG pipelines, Generative AI, multi-agent systems, and enterprise architecture — by Ganapathi Ramkumar Palanivelu.</p>
          </div>
        </div>
        <div className="container">
          <div className={styles.grid}>
            {blogPosts.map(post => <PostCard key={post.slug} post={post} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className={styles.notFound}>
        <h1>Article not found</h1>
        <Link to="/blog">← Back to Blog</Link>
      </div>
    );
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Person', name: post.author, url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'RamVector', url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    keywords: post.tags.join(', '),
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Ganapathi Ramkumar Palanivelu</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={`${SITE_URL}/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={`${SITE_URL}/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta name="keywords" content={post.tags.join(', ')} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>
      <div className={styles.page}>
        <div className={styles.articleHero}>
          <div className="container">
            <Link to="/blog" className={styles.backLink}><ArrowLeft size={14} /> Back to Blog</Link>
            <div className={styles.articleMeta}>
              <span><Calendar size={12} />{post.date}</span>
              <span><Clock size={12} />{post.readTime}</span>
              <span><User size={12} />{post.author}</span>
            </div>
            <h1 className={styles.articleTitle}>{post.title}</h1>
            <p className={styles.articleDesc}>{post.description}</p>
            <div className={styles.cardTags}>
              {post.tags.map(t => (
                <span key={t} className={styles.tag}><Tag size={10} />{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <div className={styles.articleLayout}>
            <article className={styles.articleContent}>
              <ArticleRenderer sections={post.sections} />
            </article>
            <aside className={styles.sidebar}>
              <div className={styles.sidebarBox}>
                <h3>About the Author</h3>
                <p><strong>Ganapathi Ramkumar Palanivelu</strong> is a Senior AI Architect and Enterprise Architect specialising in RAG pipelines, Generative AI, multi-agent systems, and TOGAF-aligned enterprise architecture.</p>
                <a href="/#contact" className={styles.sidebarCta}>Get in Touch →</a>
              </div>
              <div className={styles.sidebarBox}>
                <h3>More Articles</h3>
                {blogPosts.filter(p => p.slug !== slug).slice(0, 3).map(p => (
                  <Link key={p.slug} to={`/blog/${p.slug}`} className={styles.sidebarLink}>{p.title}</Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
