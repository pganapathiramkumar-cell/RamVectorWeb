export const comparisons = [
  {
    slug: 'langchain-vs-llamaindex-comparison',
    title: 'LangChain vs LlamaIndex: Which RAG Framework Should You Choose in 2026?',
    description: 'A detailed comparison of LangChain and LlamaIndex for building RAG applications — architecture, features, performance, ecosystem, and a verdict on which to choose for your use case.',
    date: '2026-05-13',
    author: 'Ganapathi Ramkumar Palanivelu',
    readTime: '6 min read',
    tags: ['LangChain', 'LlamaIndex', 'RAG', 'Comparison', 'AI Framework'],
    sections: [
      { type: 'p', text: 'LangChain and LlamaIndex are the two dominant Python frameworks for building RAG and LLM-powered applications. Both are capable, actively maintained, and have large communities — but they make different design choices and excel at different things. This comparison is based on extensive production use of both frameworks.' },
      { type: 'h2', text: 'Philosophy and Design Focus' },
      { type: 'p', text: 'LangChain positions itself as a general-purpose LLM application framework. It provides chains, agents, tools, memory, and retrieval abstractions that can be composed for a wide variety of tasks — from RAG to multi-agent systems to code generation. LlamaIndex (formerly GPT Index) is purpose-built for data indexing and retrieval — it excels specifically at the ingestion, indexing, and querying layers of RAG, with more sophisticated document store and retrieval abstractions than LangChain.' },
      { type: 'h2', text: 'Head-to-Head Comparison' },
      { type: 'table', headers: ['Feature', 'LangChain', 'LlamaIndex'],
        rows: [
          ['Primary focus', 'General LLM applications', 'Data indexing and retrieval'],
          ['RAG support', 'Good — standard pipeline', 'Excellent — advanced indexing'],
          ['Chunking strategies', 'Basic splitters', 'Advanced (semantic, hierarchical, sentence-window)'],
          ['Index types', 'Vector store only', 'Vector, tree, keyword, knowledge graph'],
          ['Agent support', 'Excellent (LangGraph)', 'Good (ReAct, OpenAI tools)'],
          ['Document connectors', 'Good (70+ loaders)', 'Excellent (100+ readers)'],
          ['Query engines', 'RetreivalQA, ConversationalChain', 'QueryEngine, RouterQueryEngine, SubQuestionQueryEngine'],
          ['Evaluation', 'Basic, needs LangSmith', 'Built-in TruLens integration'],
          ['Learning curve', 'Steeper, more concepts', 'Shallower for pure RAG'],
          ['Production adoption', 'Very high', 'High (growing fast)'],
          ['Community / GitHub stars', '~100k+ stars', '~40k+ stars'],
        ]
      },
      { type: 'h2', text: 'When to Choose LangChain' },
      { type: 'ul', items: [
        'You need multi-agent workflows, tool use, or complex agent orchestration (use LangGraph).',
        'Your application does more than RAG — you need chains, memory, and diverse LLM tasks in one framework.',
        'You need the widest ecosystem of integrations (LangChain has more third-party integrations).',
        'Your team already has LangChain experience and production deployments.',
        'You are building conversational agents with tool use alongside document retrieval.',
      ]},
      { type: 'h2', text: 'When to Choose LlamaIndex' },
      { type: 'ul', items: [
        'Your primary task is RAG over complex, large document corpora — LlamaIndex\'s advanced indexing delivers better retrieval quality.',
        'You need specialised index types: knowledge graphs, tree indices, or multi-document reasoning.',
        'You want the SubQuestionQueryEngine for multi-step document Q&A.',
        'You need fine-grained control over chunking — sentence-window and hierarchical node parsers are best-in-class.',
        'Your use case is primarily retrieval-focused with minimal agent orchestration needs.',
      ]},
      { type: 'h2', text: 'Code Comparison: Building the Same RAG Pipeline' },
      { type: 'h3', text: 'LangChain approach' },
      { type: 'code', lang: 'python', text: `from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_pinecone import PineconeVectorStore
from langchain.chains import RetrievalQA

loader = PyPDFLoader("document.pdf")
docs   = loader.load()
chunks = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=150).split_documents(docs)
vs     = PineconeVectorStore.from_documents(chunks, OpenAIEmbeddings(), index_name="my-index")
chain  = RetrievalQA.from_chain_type(ChatOpenAI(), retriever=vs.as_retriever(search_kwargs={"k":5}))
result = chain.invoke({"query": "What are the key findings?"})` },
      { type: 'h3', text: 'LlamaIndex approach' },
      { type: 'code', lang: 'python', text: `from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
from llama_index.core.node_parser import SentenceWindowNodeParser
from llama_index.embeddings.openai import OpenAIEmbedding
from llama_index.llms.openai import OpenAI

documents = SimpleDirectoryReader(input_files=["document.pdf"]).load_data()
parser    = SentenceWindowNodeParser.from_defaults(window_size=3)
nodes     = parser.get_nodes_from_documents(documents)
index     = VectorStoreIndex(nodes, embed_model=OpenAIEmbedding())
engine    = index.as_query_engine(llm=OpenAI(model="gpt-4o"), similarity_top_k=5)
result    = engine.query("What are the key findings?")
print(result.response)
# LlamaIndex also returns source_nodes with scores and metadata` },
      { type: 'h2', text: 'Performance and Ecosystem' },
      { type: 'table', headers: ['Metric', 'LangChain', 'LlamaIndex'],
        rows: [
          ['GitHub Stars (2026)', '~100k+', '~40k+'],
          ['PyPI weekly downloads', 'Higher', 'Growing fast'],
          ['Vector store integrations', '25+', '20+'],
          ['LLM integrations', '50+', '40+'],
          ['Enterprise support', 'LangSmith (paid)', 'LlamaCloud (paid)'],
          ['Observability built-in', 'Via LangSmith', 'Via LlamaTrace / TruLens'],
          ['TypeScript SDK', 'LangChain.js', 'LlamaIndex.TS'],
          ['Streaming support', 'Yes', 'Yes'],
          ['Async support', 'Yes', 'Yes'],
        ]
      },
      { type: 'h2', text: 'Community and Maturity' },
      { type: 'p', text: 'LangChain has the larger community, more Stack Overflow answers, and more third-party tutorials. It has been in production longer and has more battle-tested integrations. LlamaIndex has a more focused, expert community — its Discord is highly active for RAG-specific questions and its documentation for advanced indexing is excellent. Both are actively developed with weekly releases.' },
      { type: 'h2', text: 'Migration Considerations' },
      { type: 'p', text: 'Migrating between frameworks is feasible but involves rewriting retrieval chains and index setup code. If you start with LangChain and need LlamaIndex\'s advanced chunking, you can use LlamaIndex\'s NodeParser just for the chunking/indexing step and pass the resulting chunks to a LangChain retriever — the frameworks are composable at this layer.' },
      { type: 'h2', text: 'Verdict' },
      { type: 'p', text: 'For pure RAG applications with complex documents, LlamaIndex delivers better retrieval quality out of the box. For applications that combine RAG with agents, tools, and complex orchestration, LangChain (with LangGraph) is the more complete solution. In practice, many production teams use both: LlamaIndex for the indexing and retrieval layer, LangChain/LangGraph for the orchestration layer. They interoperate cleanly.' },
    ],
  },
  {
    slug: 'pinecone-vs-pgvector-comparison',
    title: 'Pinecone vs pgvector: Vector Database Comparison for Enterprise RAG',
    description: 'Compare Pinecone and pgvector for enterprise RAG applications — performance benchmarks, cost analysis, operational complexity, scalability, and a clear recommendation.',
    date: '2026-05-13',
    author: 'Ganapathi Ramkumar Palanivelu',
    readTime: '5 min read',
    tags: ['Pinecone', 'pgvector', 'Vector Database', 'RAG', 'PostgreSQL', 'Comparison'],
    sections: [
      { type: 'p', text: 'Choosing the right vector database is one of the most consequential infrastructure decisions for a RAG system. Pinecone is a purpose-built, fully managed vector database. pgvector is a PostgreSQL extension that adds vector similarity search to the database you likely already run. Both are production-proven — the right choice depends on your scale, existing infrastructure, and operational preferences.' },
      { type: 'h2', text: 'Architecture Overview' },
      { type: 'p', text: 'Pinecone is a cloud-native managed service built from the ground up for vector workloads. It handles index management, replication, scaling, and performance tuning entirely on your behalf. pgvector extends PostgreSQL with a vector column type and IVFFlat / HNSW index types. Its major advantage is that you can co-locate vector search with your existing relational data — enabling SQL JOINs between vector results and your operational tables.' },
      { type: 'h2', text: 'Feature Comparison' },
      { type: 'table', headers: ['Dimension', 'Pinecone', 'pgvector'],
        rows: [
          ['Hosting', 'Fully managed SaaS', 'Self-hosted or RDS/Supabase/Neon'],
          ['Setup time', '5 minutes', '30 min–2 hours (depending on setup)'],
          ['Query latency (p50)', '<10ms at scale', '5–50ms (depends on index size and hardware)'],
          ['Max index size', 'Billions of vectors', 'Hundreds of millions (practical limit with HNSW)'],
          ['Metadata filtering', 'Excellent, native', 'Full SQL WHERE clauses'],
          ['Hybrid search', 'Supported (sparse+dense)', 'Requires separate BM25 setup'],
          ['Cost (small scale)', '$70+/mo (Starter)', 'Free (self-hosted) or $25+/mo (managed PG)'],
          ['Cost (large scale)', 'Significant ($$$)', 'Much lower (compute only)'],
          ['Relational joins', 'Not supported', 'Native SQL — killer feature'],
          ['Backup / DR', 'Managed by Pinecone', 'Standard PostgreSQL tooling'],
          ['Operational burden', 'Zero', 'Standard database ops'],
        ]
      },
      { type: 'h2', text: 'When to Choose Pinecone' },
      { type: 'ul', items: [
        'You need a production vector database immediately with no infrastructure setup.',
        'Your vector index will exceed 10–50M vectors and you need guaranteed low latency at scale.',
        'Your team does not have database operations expertise to manage PostgreSQL at scale.',
        'You need namespaces to isolate customer data in a multi-tenant RAG system.',
        'Latency is the primary concern and you can absorb the cost.',
      ]},
      { type: 'h2', text: 'When to Choose pgvector' },
      { type: 'ul', items: [
        'You already run PostgreSQL — adding pgvector costs nothing and eliminates a new service dependency.',
        'You need to JOIN vector search results with relational data (user profiles, permissions, metadata).',
        'Your vector corpus is under 5–10M vectors and latency requirements are moderate.',
        'Cost is a constraint — pgvector on RDS or Supabase is significantly cheaper than Pinecone at scale.',
        'You want to run everything inside your VPC / private network for compliance reasons.',
      ]},
      { type: 'h2', text: 'Verdict' },
      { type: 'p', text: 'For greenfield projects with no existing PostgreSQL infrastructure and high scale requirements, Pinecone delivers the fastest time to production with zero operational overhead. For teams already running PostgreSQL — especially where relational data joins are needed (e.g., filtering vector results by user permissions from a users table) — pgvector with HNSW indexing is the pragmatic, cost-effective choice. The RamVector platform uses pgvector precisely because vector search needs to intersect with document ownership and user-level access control stored in the same PostgreSQL instance.' },
    ],
  },
  {
    slug: 'azure-openai-vs-bedrock-vs-vertex',
    title: 'Azure OpenAI vs AWS Bedrock vs Google Vertex AI: Enterprise AI Platform Comparison',
    description: 'A detailed three-way comparison of the leading enterprise AI cloud platforms — model access, security, pricing, integrations, and which to choose for your organisation.',
    date: '2026-05-13',
    author: 'Ganapathi Ramkumar Palanivelu',
    readTime: '8 min read',
    tags: ['Azure OpenAI', 'AWS Bedrock', 'Google Vertex AI', 'Enterprise AI', 'Cloud', 'Comparison'],
    sections: [
      { type: 'p', text: 'Choosing an enterprise AI cloud platform is a strategic decision with long-term implications for cost, compliance, model access, and engineering velocity. This comparison evaluates Azure OpenAI Service, AWS Bedrock, and Google Cloud Vertex AI based on production enterprise deployments across all three platforms.' },
      { type: 'h2', text: 'Platform Overview' },
      { type: 'table', headers: ['Dimension', 'Azure OpenAI', 'AWS Bedrock', 'Google Vertex AI'],
        rows: [
          ['Primary strength', 'GPT-4 family + Microsoft ecosystem', 'Multi-model breadth + AWS native', 'Gemini family + Google data tools'],
          ['Flagship models', 'GPT-4o, o1, DALL-E', 'Claude 3.5, Llama 3, Mistral', 'Gemini 1.5 Pro/Flash, Imagen'],
          ['Model diversity', 'OpenAI + Meta + Mistral', 'Anthropic + Meta + Mistral + Cohere + Amazon', 'Google + Meta + Mistral + third-party'],
          ['Managed fine-tuning', 'Yes (GPT-4)', 'Yes (Claude, Llama, Titan)', 'Yes (Gemini, Llama)'],
          ['RAG built-in', 'Azure AI Search integration', 'Bedrock Knowledge Bases', 'Vertex AI Search + RAG Engine'],
          ['Agent framework', 'Azure AI Studio Agents', 'Bedrock Agents', 'Vertex AI Agent Builder'],
          ['Primary cloud', 'Microsoft Azure', 'Amazon AWS', 'Google Cloud'],
        ]
      },
      { type: 'h2', text: 'Model Quality for Enterprise Use Cases' },
      { type: 'p', text: 'Model quality varies significantly by task type. Based on production evaluation:' },
      { type: 'ul', items: [
        'Complex reasoning and analysis: Claude 3.5 Sonnet (Bedrock) and GPT-4o (Azure) are roughly equivalent — both significantly outperform Gemini 1.5 Pro on multi-step enterprise reasoning tasks.',
        'Long-context document processing: Gemini 1.5 Pro (1M token context) has a significant advantage for very long documents. Claude 3.5 Sonnet (200k tokens) and GPT-4o (128k tokens) are adequate for most enterprise documents.',
        'Code generation: GPT-4o and Claude 3.5 Sonnet are the strongest. Gemini 1.5 Pro is competitive but less consistent.',
        'Embeddings: Azure OpenAI text-embedding-3-large delivers best-in-class retrieval quality. Google\'s text-embedding-004 and Amazon Titan Embeddings V2 are strong alternatives.',
        'Image understanding: All three support multimodal input. GPT-4o and Gemini 1.5 Pro are strongest for complex image analysis.',
      ]},
      { type: 'h2', text: 'Security and Compliance' },
      { type: 'table', headers: ['Security Feature', 'Azure OpenAI', 'AWS Bedrock', 'Google Vertex AI'],
        rows: [
          ['Identity provider', 'Azure AD / Entra ID', 'AWS IAM', 'Google IAM'],
          ['Private networking', 'Azure Private Link', 'AWS PrivateLink + VPC', 'VPC Service Controls'],
          ['Encryption at rest', 'Azure-managed or CMK', 'AWS KMS or CMK', 'Google-managed or CMEK'],
          ['Audit logging', 'Azure Monitor + Diagnostic Logs', 'AWS CloudTrail', 'Cloud Audit Logs'],
          ['Compliance certs', 'SOC2, ISO27001, HIPAA, FedRAMP', 'SOC2, ISO27001, HIPAA, FedRAMP High', 'SOC2, ISO27001, HIPAA, FedRAMP'],
          ['Data residency', 'Per-region deployment', 'Per-region deployment', 'Per-region deployment'],
          ['Sovereign cloud', 'Azure Government, Azure China', 'GovCloud', 'Google Distributed Cloud'],
        ]
      },
      { type: 'h2', text: 'Pricing (Approximate, May 2026)' },
      { type: 'table', headers: ['Model', 'Platform', 'Input (per 1M tokens)', 'Output (per 1M tokens)'],
        rows: [
          ['GPT-4o', 'Azure OpenAI', '$5.00', '$15.00'],
          ['Claude 3.5 Sonnet', 'AWS Bedrock', '$3.00', '$15.00'],
          ['Gemini 1.5 Pro', 'Vertex AI', '$3.50', '$10.50'],
          ['Claude 3 Haiku', 'AWS Bedrock', '$0.25', '$1.25'],
          ['Gemini 1.5 Flash', 'Vertex AI', '$0.075', '$0.30'],
          ['GPT-4o-mini', 'Azure OpenAI', '$0.15', '$0.60'],
        ]
      },
      { type: 'h2', text: 'LangChain Integration' },
      { type: 'code', lang: 'python', text: `# Azure OpenAI
from langchain_openai import AzureChatOpenAI
azure_llm = AzureChatOpenAI(
    azure_deployment="gpt-4o",
    azure_endpoint="https://your-resource.openai.azure.com/",
    api_version="2024-08-01-preview",
)

# AWS Bedrock
from langchain_aws import ChatBedrock
bedrock_llm = ChatBedrock(
    model_id="anthropic.claude-3-5-sonnet-20241022-v2:0",
    region_name="us-east-1",
)

# Google Vertex AI
from langchain_google_vertexai import ChatVertexAI
vertex_llm = ChatVertexAI(
    model_name="gemini-1.5-pro",
    project="your-gcp-project",
    location="us-central1",
)` },
      { type: 'h2', text: 'Decision Framework' },
      { type: 'ul', items: [
        'Microsoft-first enterprise (Azure AD, M365, Teams, Dynamics): Choose Azure OpenAI — native integration with your existing security posture.',
        'AWS-native organisation: Choose AWS Bedrock — Claude 3.5 Sonnet is the strongest reasoning model available and integrates natively with your AWS services.',
        'Google Cloud / Google Workspace organisation: Choose Vertex AI — Gemini\'s long context window (1M tokens) is unmatched for large document processing.',
        'Multi-cloud or model-agnostic strategy: Abstract behind LiteLLM or a custom LLM router, use all three based on task type and cost.',
        'Cost-sensitive, high volume: AWS Bedrock Claude Haiku or Vertex AI Gemini Flash are the most cost-effective options for bulk processing.',
      ]},
    ],
  },
  {
    slug: 'chroma-vs-weaviate-vs-qdrant',
    title: 'Chroma vs Weaviate vs Qdrant: Open-Source Vector Database Comparison',
    description: 'Compare the three leading open-source vector databases — Chroma, Weaviate, and Qdrant — on performance, features, deployment, and which to choose for your RAG system.',
    date: '2026-05-13',
    author: 'Ganapathi Ramkumar Palanivelu',
    readTime: '6 min read',
    tags: ['Chroma', 'Weaviate', 'Qdrant', 'Vector Database', 'RAG', 'Comparison'],
    sections: [
      { type: 'p', text: 'While Pinecone and pgvector dominate production enterprise deployments, Chroma, Weaviate, and Qdrant are the leading open-source alternatives. Each has distinct strengths — choosing the right one depends on your deployment model, scale requirements, and feature needs.' },
      { type: 'h2', text: 'Overview' },
      { type: 'table', headers: ['Feature', 'Chroma', 'Weaviate', 'Qdrant'],
        rows: [
          ['Primary use case', 'Dev, prototyping', 'Multi-modal, hybrid search', 'High-performance production'],
          ['Written in', 'Python/Rust', 'Go', 'Rust'],
          ['Deployment', 'In-process or server', 'Docker, Kubernetes, Cloud', 'Docker, Kubernetes, Cloud'],
          ['Managed cloud', 'Chroma Cloud (beta)', 'Weaviate Cloud', 'Qdrant Cloud'],
          ['Hybrid search', 'Limited', 'Native BM25 + vector', 'Native sparse + dense'],
          ['Multi-tenancy', 'Collections', 'Multi-tenancy API', 'Collections + payload filtering'],
          ['GraphQL API', 'No', 'Yes', 'No (REST + gRPC)'],
          ['Filtering', 'Basic metadata', 'Where filter', 'Payload filtering (powerful)'],
          ['Max scale (self-hosted)', 'Millions of vectors', 'Billions of vectors', 'Billions of vectors'],
        ]
      },
      { type: 'h2', text: 'Chroma: Best for Development and Prototyping' },
      { type: 'p', text: 'Chroma\'s killer feature is zero-setup developer experience. It runs in-process (no server needed), stores data locally, and has the simplest API of the three. This makes it ideal for local development, notebooks, and proof-of-concept projects.' },
      { type: 'code', lang: 'python', text: `import chromadb
from chromadb.utils import embedding_functions

# Zero config — runs in-process
client = chromadb.Client()

# Or persist to disk
client = chromadb.PersistentClient(path="/data/chroma")

openai_ef = embedding_functions.OpenAIEmbeddingFunction(
    api_key="your-key", model_name="text-embedding-3-small"
)
collection = client.create_collection("docs", embedding_function=openai_ef)

collection.add(
    documents=["RAG pipeline overview", "Multi-agent AI design patterns"],
    ids=["doc1", "doc2"],
    metadatas=[{"source": "blog"}, {"source": "blog"}],
)

results = collection.query(query_texts=["how does RAG work?"], n_results=2)` },
      { type: 'h2', text: 'Weaviate: Best for Hybrid Search and Multi-Modal' },
      { type: 'p', text: 'Weaviate\'s standout feature is native hybrid search — BM25 keyword search and vector similarity are first-class citizens, combined using Reciprocal Rank Fusion out of the box. It also supports multi-modal data (text + images + video) and has a powerful GraphQL API for complex queries.' },
      { type: 'code', lang: 'python', text: `import weaviate
from weaviate.classes.query import MetadataQuery

client = weaviate.connect_to_local()

collection = client.collections.get("Document")

# Native hybrid search — no extra setup needed
results = collection.query.hybrid(
    query="RAG pipeline architecture",
    alpha=0.6,           # 0 = pure BM25, 1 = pure vector, 0.6 = favours vector
    limit=5,
    return_metadata=MetadataQuery(score=True),
)

for obj in results.objects:
    print(obj.properties["content"], "| Score:", obj.metadata.score)` },
      { type: 'h2', text: 'Qdrant: Best for High-Performance Production' },
      { type: 'p', text: 'Qdrant is written in Rust and delivers the best raw performance of the three for high-throughput, low-latency production workloads. Its payload filtering is the most flexible — you can filter on arbitrary JSON fields with complex conditions before or during vector search. It also supports sparse vectors natively for hybrid search without an external BM25 system.' },
      { type: 'code', lang: 'python', text: `from qdrant_client import QdrantClient
from qdrant_client.models import Filter, FieldCondition, MatchValue, SearchRequest

client = QdrantClient("localhost", port=6333)

# Powerful payload filtering during vector search
results = client.search(
    collection_name="documents",
    query_vector=[0.1, 0.2, ...],  # Your query embedding
    query_filter=Filter(
        must=[
            FieldCondition(key="tenant_id",    match=MatchValue(value="acme-corp")),
            FieldCondition(key="access_level", match=MatchValue(value="internal")),
        ]
    ),
    limit=5,
    with_payload=True,
)` },
      { type: 'h2', text: 'Performance Benchmarks' },
      { type: 'table', headers: ['Metric', 'Chroma', 'Weaviate', 'Qdrant'],
        rows: [
          ['Query latency (1M vectors, p99)', '~50ms', '~20ms', '~8ms'],
          ['Indexing speed', 'Moderate', 'Fast', 'Very fast'],
          ['Memory efficiency', 'Moderate', 'Good', 'Excellent'],
          ['Concurrent queries', 'Limited', 'Good', 'Excellent'],
          ['Cold start time', 'Near-instant', '5–15 seconds', '2–5 seconds'],
        ]
      },
      { type: 'h2', text: 'Verdict' },
      { type: 'ul', items: [
        'Use Chroma for: local development, notebooks, prototypes, and teaching. Not recommended for production workloads beyond a few hundred thousand vectors.',
        'Use Weaviate for: multi-modal data, hybrid search without extra setup, and GraphQL-heavy query patterns. Strong managed cloud offering.',
        'Use Qdrant for: high-performance production deployments, complex payload filtering, multi-tenancy at scale, and cost-sensitive self-hosted deployments. The Rust performance advantage is significant at scale.',
        'Migrate path: Start with Chroma → move to Qdrant (self-hosted) or Weaviate Cloud for production.',
      ]},
    ],
  },
];
