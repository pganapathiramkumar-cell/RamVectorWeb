import { Helmet } from 'react-helmet-async';

const SITE_URL  = 'https://ramvector.com';
const FULL_NAME = 'Ganapathi Ramkumar Palanivelu';
const IMAGE_URL = `${SITE_URL}/profile.png`;

/* ── Structured data schemas ─────────────────────────────────────── */

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: FULL_NAME,
  alternateName: ['Ramkumar Palanivelu', 'G. Ramkumar Palanivelu'],
  jobTitle: 'AI Architect | Enterprise Architect | Principal Technology Leader',
  description:
    'Senior AI and Enterprise Architect with 14+ years of experience designing production-grade GenAI systems, RAG pipelines, multi-agent AI, TOGAF-aligned architectures, and multi-cloud platforms on Azure and AWS. Creator of RamVector, an AI document intelligence iOS application.',
  url: SITE_URL,
  image: {
    '@type': 'ImageObject',
    url: IMAGE_URL,
    caption: `${FULL_NAME} — AI Architect and Enterprise Architect`,
    description:
      'Professional headshot of Ganapathi Ramkumar Palanivelu, Senior AI Architect and Enterprise Architect specializing in GenAI, RAG pipelines, and multi-cloud transformation.',
  },
  email: 'pganapathiramkumar@gmail.com',
  telephone: '+917996656111',
  nationality: 'Indian',
  knowsAbout: [
    'AI Architecture', 'Generative AI', 'LLM Systems Design',
    'RAG Pipeline Architecture', 'Retrieval-Augmented Generation',
    'Multi-Agent AI Systems', 'Agentic AI', 'MLOps', 'AI Platform Engineering',
    'AI Governance', 'Responsible AI', 'Enterprise Architecture', 'TOGAF',
    'Zachman Framework', 'HLD LLD Design', 'Multi-Cloud Architecture',
    'Azure', 'AWS', 'Microservices', 'API Strategy', 'DevOps', 'Kubernetes',
    'Digital Transformation', 'Technology Strategy', 'Technology Leadership',
    'LangChain', 'LangGraph', 'LlamaIndex', 'Semantic Kernel', 'CrewAI', 'AutoGen',
    'Pinecone', 'pgvector', 'Chroma', 'Vector Databases', 'Embeddings',
    'Azure OpenAI', 'AWS Bedrock', 'GPT-4', 'Claude', 'Amazon SageMaker',
    'PDF AI Processing', 'Document Intelligence',
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'AI Architect and Enterprise Architect',
    skills:
      'GenAI, RAG, LLM, TOGAF, Multi-Cloud, Azure, AWS, LangChain, LangGraph, Agentic AI, MLOps',
  },
  brand: {
    '@type': 'Brand',
    name: 'RamVector',
    url: 'https://apps.apple.com/in/app/ramvector/id6763949988',
    description: 'AI-powered document intelligence iOS application',
  },
  sameAs: [
    'https://linkedin.com/in/palaniram',
    'https://github.com/pganapathiramkumar-cell/RamVectorWeb',
    'https://apps.apple.com/in/app/ramvector/id6763949988',
    'https://orcid.org/0009-0006-9439-5067',
    'https://www.ramvector.com',
  ],
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'RamVector',
  alternateName: 'RamVector AI Document Intelligence',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Artificial Intelligence',
  operatingSystem: 'iOS 16+',
  url: 'https://apps.apple.com/in/app/ramvector/id6763949988',
  downloadUrl: 'https://apps.apple.com/in/app/ramvector/id6763949988',
  description:
    'RamVector is an AI-powered document intelligence platform that enables users to upload PDFs and receive AI-generated summaries, action items, key insights, and workflow recommendations. Built on a full-stack RAG architecture with FastAPI, PostgreSQL, Redis, RabbitMQ, and multi-LLM support (OpenAI GPT-4, Groq, Ollama).',
  screenshot: IMAGE_URL,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  author: {
    '@type': 'Person',
    name: FULL_NAME,
    url: SITE_URL,
  },
  creator: {
    '@type': 'Person',
    name: FULL_NAME,
    url: SITE_URL,
  },
  featureList: [
    'PDF document upload and AI analysis',
    'RAG pipeline with semantic chunking and vector search',
    'Multi-LLM support: GPT-4, Groq, Ollama',
    'AI-generated summaries and action items',
    'Enterprise workflow recommendations',
    'FastAPI backend with PostgreSQL and Redis',
  ],
  keywords:
    'RamVector, RamVector AI, RamVector app, RamVector PDF summarizer, RamVector document AI, RamVector RAG platform, RamVector AI tool, RamVector document analysis tool, RamVector AI document insights, RamVector RAG application, RamVector knowledge retrieval AI, RamVector semantic search platform, RamVector by Ram, Ramkumar, Ganapathi Ramkumar, Ganapathi Ramkumar Palanivelu, AI document intelligence, PDF analysis, RAG pipeline, LLM, enterprise AI, document summarization',
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: `${FULL_NAME} — AI Architect Portfolio`,
  url: SITE_URL,
  description:
    'Portfolio of Ganapathi Ramkumar Palanivelu — Senior AI Architect, Enterprise Architect, and Principal Technology Leader specializing in GenAI, RAG, TOGAF, and multi-cloud.',
  author: { '@type': 'Person', name: FULL_NAME },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',             item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'About',            item: `${SITE_URL}/#about` },
    { '@type': 'ListItem', position: 3, name: 'AI Architecture',  item: `${SITE_URL}/#ai-systems` },
    { '@type': 'ListItem', position: 4, name: 'Projects',         item: `${SITE_URL}/#projects` },
    { '@type': 'ListItem', position: 5, name: 'Contact',          item: `${SITE_URL}/#contact` },
  ],
};

/* ── Component ───────────────────────────────────────────────────── */

export default function SEOHead({
  title       = `${FULL_NAME} — AI Architect | Enterprise Architect | RamVector`,
  description = `Senior AI and Enterprise Architect with 14+ years designing production GenAI systems, RAG pipelines, multi-agent AI, TOGAF-aligned architectures, and multi-cloud platforms on Azure and AWS. Creator of RamVector AI Document Intelligence app.`,
  canonical   = SITE_URL,
  ogImage     = IMAGE_URL,
}) {
  return (
    <Helmet>
      {/* ── Primary ────────────────────────────────────── */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author"  content={FULL_NAME} />
      <meta name="robots"  content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="theme-color" content="#f97316" />
      <link rel="canonical" href={canonical} />

      {/* ── Keywords ───────────────────────────────────── */}
      <meta name="keywords" content="RamVector, RamVector AI, RamVector app, RamVector PDF summarizer, RamVector document AI, RamVector RAG platform, RamVector AI tool, RamVector AI PDF summarizer, RamVector document analysis tool, RamVector AI document insights, RamVector RAG application, RamVector knowledge retrieval AI, RamVector semantic search platform, RamVector global AI app, RamVector AI available worldwide, RamVector international AI platform, RamVector AI SaaS tool global, RamVector multi country AI app, RamVector by Ram, RamVector Ramkumar, Ramkumar RamVector, Ganapathi Ramkumar RamVector, RamVector Founder Ramkumar, Ramkumar AI RamVector, RamVector Ramkumar cloud, Ram, Ramkumar, Ganapathi Ramkumar, Ramkumar Palanivelu, Ganapathi Ramkumar Palanivelu, Palanivel Ramkumar AI, Ramkumar Developer, Ramkumar Cloud Engineer, Ramkumar AI Architect, Ganapathi Ramkumar AI, Ramkumar Tech, Ramkumar cloud, Ramkumar cloud AI, Ramkumar AI platform, Ramkumar tech portfolio, Ram AI, Ram Cloud, Ram Tech, RK AI, GRP AI, AI Architect, Enterprise Architect, Principal Architect, GenAI Architect, RAG Pipeline Architect, Retrieval Augmented Generation, Multi-Agent AI, LLM Architect, TOGAF, Zachman Framework, Multi-Cloud Architect, Azure Architect, AWS Architect, Azure OpenAI, AWS Bedrock, LangChain, LangGraph, CrewAI, Vector Database, Pinecone, pgvector, AI Document Intelligence, PDF Analysis AI, iOS AI App" />

      {/* ── Open Graph ─────────────────────────────────── */}
      <meta property="og:title"       content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type"        content="website" />
      <meta property="og:url"         content={canonical} />
      <meta property="og:image"       content={ogImage} />
      <meta property="og:image:alt"   content={`${FULL_NAME} — AI Architect and Enterprise Architect, Creator of RamVector`} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name"   content="RamVector — Ganapathi Ramkumar Palanivelu" />
      <meta property="og:locale"      content="en_IN" />

      {/* ── Twitter Card ───────────────────────────────── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImage} />
      <meta name="twitter:image:alt"   content={`${FULL_NAME} — AI Architect`} />

      {/* ── Image SEO ──────────────────────────────────── */}
      <meta itemProp="image" content={ogImage} />

      {/* ── Structured Data ────────────────────────────── */}
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </Helmet>
  );
}
