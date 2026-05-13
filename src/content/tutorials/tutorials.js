export const tutorials = [
  {
    slug: 'build-rag-pipeline-langchain-pinecone',
    title: 'How to Build a RAG Pipeline with LangChain and Pinecone',
    description: 'Step-by-step tutorial for building a production RAG pipeline using LangChain, OpenAI embeddings, and Pinecone vector database. From document ingestion to grounded LLM responses.',
    date: '2026-05-13',
    author: 'Ganapathi Ramkumar Palanivelu',
    readTime: '12 min read',
    difficulty: 'Intermediate',
    tags: ['Tutorial', 'RAG', 'LangChain', 'Pinecone', 'Python', 'OpenAI'],
    sections: [
      { type: 'p', text: 'This tutorial walks you through building a complete RAG pipeline from scratch using LangChain and Pinecone. By the end, you will have a working system that can ingest PDF documents, store their embeddings in Pinecone, and answer questions with grounded, cited responses using GPT-4.' },
      { type: 'h2', text: 'Prerequisites' },
      { type: 'ul', items: [
        'Python 3.10+ installed',
        'OpenAI API key (for embeddings and GPT-4)',
        'Pinecone API key (free tier is sufficient for this tutorial)',
        'Basic familiarity with Python',
      ]},
      { type: 'h2', text: 'Step 1: Install Dependencies' },
      { type: 'code', lang: 'bash', text: 'pip install langchain langchain-openai langchain-pinecone pinecone-client pypdf python-dotenv' },
      { type: 'p', text: 'Create a .env file in your project root:' },
      { type: 'code', lang: 'bash', text: 'OPENAI_API_KEY=your_openai_key\nPINECONE_API_KEY=your_pinecone_key\nPINECONE_INDEX=rag-demo' },
      { type: 'h2', text: 'Step 2: Ingest and Chunk Documents' },
      { type: 'code', lang: 'python', text: `from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
import os

def load_and_chunk(pdf_path: str):
    loader = PyPDFLoader(pdf_path)
    documents = loader.load()

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=150,
        separators=["\\n\\n", "\\n", ". ", " ", ""],
    )
    chunks = splitter.split_documents(documents)
    print(f"Loaded {len(documents)} pages → {len(chunks)} chunks")
    return chunks` },
      { type: 'p', text: 'The RecursiveCharacterTextSplitter splits at natural boundaries (paragraphs, then sentences, then words) preserving semantic coherence. A 150-token overlap ensures context isn\'t lost at chunk boundaries.' },
      { type: 'h2', text: 'Step 3: Generate Embeddings and Store in Pinecone' },
      { type: 'code', lang: 'python', text: `from langchain_openai import OpenAIEmbeddings
from langchain_pinecone import PineconeVectorStore
from pinecone import Pinecone, ServerlessSpec

def create_vector_store(chunks):
    # Initialise Pinecone
    pc = Pinecone(api_key=os.getenv("PINECONE_API_KEY"))
    index_name = os.getenv("PINECONE_INDEX")

    if index_name not in pc.list_indexes().names():
        pc.create_index(
            name=index_name,
            dimension=1536,  # text-embedding-3-small dimensions
            metric="cosine",
            spec=ServerlessSpec(cloud="aws", region="us-east-1"),
        )

    embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
    vector_store = PineconeVectorStore.from_documents(
        chunks, embeddings, index_name=index_name
    )
    print(f"Stored {len(chunks)} chunks in Pinecone index '{index_name}'")
    return vector_store` },
      { type: 'h2', text: 'Step 4: Build the Retrieval Chain' },
      { type: 'code', lang: 'python', text: `from langchain_openai import ChatOpenAI
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate

def build_rag_chain(vector_store):
    retriever = vector_store.as_retriever(
        search_type="similarity",
        search_kwargs={"k": 5},
    )

    prompt_template = """You are a precise AI assistant. Answer the question using ONLY
the provided context. If the context does not contain the answer, say
"I don't have enough information to answer this question."

Context:
{context}

Question: {question}

Answer (cite the source where relevant):"""

    prompt = PromptTemplate(
        template=prompt_template,
        input_variables=["context", "question"]
    )

    llm = ChatOpenAI(model="gpt-4o", temperature=0)

    chain = RetrievalQA.from_chain_type(
        llm=llm,
        chain_type="stuff",
        retriever=retriever,
        chain_type_kwargs={"prompt": prompt},
        return_source_documents=True,
    )
    return chain` },
      { type: 'h2', text: 'Step 5: Query the Pipeline' },
      { type: 'code', lang: 'python', text: `def ask(chain, question: str):
    result = chain.invoke({"query": question})
    print("\\nAnswer:", result["result"])
    print("\\nSources:")
    for doc in result["source_documents"]:
        print(f"  - Page {doc.metadata.get('page', '?')}: {doc.page_content[:120]}...")

# Full pipeline
if __name__ == "__main__":
    chunks = load_and_chunk("your_document.pdf")
    vector_store = create_vector_store(chunks)
    chain = build_rag_chain(vector_store)

    ask(chain, "What are the key findings of the document?")
    ask(chain, "What action items are mentioned?")` },
      { type: 'h2', text: 'Step 6: Add Hybrid Search for Better Recall' },
      { type: 'p', text: 'Pure vector search misses exact keyword matches. Combine dense and sparse retrieval using Reciprocal Rank Fusion:' },
      { type: 'code', lang: 'python', text: `from langchain.retrievers import EnsembleRetriever
from langchain_community.retrievers import BM25Retriever

def build_hybrid_retriever(chunks, vector_store):
    # Dense retriever (semantic similarity)
    dense_retriever = vector_store.as_retriever(
        search_type="similarity", search_kwargs={"k": 10}
    )
    # Sparse retriever (keyword BM25)
    bm25_retriever = BM25Retriever.from_documents(chunks)
    bm25_retriever.k = 10

    # Ensemble with equal weighting — RRF merges the ranked lists
    hybrid_retriever = EnsembleRetriever(
        retrievers=[dense_retriever, bm25_retriever],
        weights=[0.6, 0.4],
    )
    return hybrid_retriever` },
      { type: 'h2', text: 'Step 7: Add Re-Ranking for Better Precision' },
      { type: 'p', text: 'After retrieval, re-rank the top-10 chunks using a cross-encoder — this significantly improves the quality of the top-3 chunks passed to the LLM:' },
      { type: 'code', lang: 'python', text: `from langchain.retrievers import ContextualCompressionRetriever
from langchain.retrievers.document_compressors import CrossEncoderReranker
from langchain_community.cross_encoders import HuggingFaceCrossEncoder

def add_reranker(base_retriever):
    model = HuggingFaceCrossEncoder(model_name="BAAI/bge-reranker-base")
    compressor = CrossEncoderReranker(model=model, top_n=3)
    reranking_retriever = ContextualCompressionRetriever(
        base_compressor=compressor,
        base_retriever=base_retriever,
    )
    return reranking_retriever` },
      { type: 'h2', text: 'Step 8: Evaluate with Ragas' },
      { type: 'p', text: 'Never go to production without measuring retrieval and generation quality. Ragas gives you four key metrics automatically:' },
      { type: 'code', lang: 'bash', text: 'pip install ragas datasets' },
      { type: 'code', lang: 'python', text: `from ragas import evaluate
from ragas.metrics import faithfulness, answer_relevancy, context_precision, context_recall
from datasets import Dataset

def evaluate_pipeline(chain, test_questions, ground_truths):
    results = []
    for question, truth in zip(test_questions, ground_truths):
        response = chain.invoke({"query": question})
        results.append({
            "question":  question,
            "answer":    response["result"],
            "contexts":  [d.page_content for d in response["source_documents"]],
            "ground_truth": truth,
        })

    dataset = Dataset.from_list(results)
    scores = evaluate(
        dataset,
        metrics=[faithfulness, answer_relevancy, context_precision, context_recall],
    )
    print(scores.to_pandas())
    return scores

# Example usage
test_q = ["What is the main topic of the document?"]
truth  = ["The document covers AI architecture best practices."]
evaluate_pipeline(chain, test_q, truth)` },
      { type: 'h2', text: 'Step 9: Add LangSmith Observability' },
      { type: 'p', text: 'Trace every retrieval and LLM call in production — essential for debugging and cost tracking:' },
      { type: 'code', lang: 'python', text: `import os
# Add to your .env file:
# LANGCHAIN_TRACING_V2=true
# LANGCHAIN_API_KEY=your_langsmith_key
# LANGCHAIN_PROJECT=rag-production

os.environ["LANGCHAIN_TRACING_V2"] = "true"
os.environ["LANGCHAIN_PROJECT"]     = "rag-production"

# No other code changes needed — LangChain auto-traces all chain calls` },
      { type: 'h2', text: 'Complete Production Pipeline' },
      { type: 'p', text: 'Putting it all together — the full production-grade RAG pipeline:' },
      { type: 'code', lang: 'python', text: `def build_production_rag(pdf_path: str):
    # 1. Ingest
    chunks = load_and_chunk(pdf_path)

    # 2. Vector store
    vector_store = create_vector_store(chunks)

    # 3. Hybrid retriever
    hybrid = build_hybrid_retriever(chunks, vector_store)

    # 4. Re-ranking
    reranked = add_reranker(hybrid)

    # 5. Generation chain
    chain = build_rag_chain_with_retriever(reranked)

    return chain

def build_rag_chain_with_retriever(retriever):
    from langchain_openai import ChatOpenAI
    from langchain.chains import RetrievalQA
    from langchain.prompts import PromptTemplate

    prompt = PromptTemplate(
        template="""You are a precise AI assistant. Answer using ONLY the provided context.
Include the source page number when relevant.

Context: {context}
Question: {question}
Answer:""",
        input_variables=["context", "question"],
    )
    llm = ChatOpenAI(model="gpt-4o", temperature=0)
    return RetrievalQA.from_chain_type(
        llm=llm, retriever=retriever,
        chain_type_kwargs={"prompt": prompt},
        return_source_documents=True,
    )

if __name__ == "__main__":
    pipeline = build_production_rag("enterprise_report.pdf")
    result = pipeline.invoke({"query": "What are the key recommendations?"})
    print(result["result"])` },
      { type: 'h2', text: 'Key Takeaways' },
      { type: 'ul', items: [
        'Hybrid search (dense + BM25) almost always outperforms pure vector search — implement it from the start.',
        'Re-ranking with a cross-encoder significantly improves the top-k precision passed to the LLM with minimal latency cost.',
        'Ragas evaluation is non-negotiable before production — measure faithfulness, relevancy, context precision, and recall.',
        'LangSmith tracing costs nothing for low volume and saves hours when debugging retrieval failures.',
        'The full pipeline: ingest → chunk → embed → hybrid retrieve → rerank → generate → evaluate.',
      ]},
    ],
  },
  {
    slug: 'multi-agent-langgraph-tutorial',
    title: 'Building Multi-Agent AI Systems with LangGraph: A Step-by-Step Guide',
    description: 'Learn how to build a multi-agent AI workflow using LangGraph — creating specialised researcher, writer, and reviewer agents that collaborate to produce high-quality outputs.',
    date: '2026-05-13',
    author: 'Ganapathi Ramkumar Palanivelu',
    readTime: '10 min read',
    difficulty: 'Advanced',
    tags: ['Tutorial', 'LangGraph', 'Multi-Agent AI', 'Python', 'AI Agents', 'Agentic AI'],
    sections: [
      { type: 'p', text: 'LangGraph is a library for building stateful, multi-actor applications with LLMs. Unlike simple LangChain chains, LangGraph models your workflow as a directed graph — nodes are agents or functions, edges are control flow. This tutorial builds a three-agent research system: a Researcher agent that retrieves information, a Writer agent that drafts a response, and a Reviewer agent that critiques and refines the output.' },
      { type: 'h2', text: 'Prerequisites' },
      { type: 'ul', items: [
        'Python 3.10+',
        'OpenAI API key',
        'langchain, langgraph, langchain-openai installed',
      ]},
      { type: 'code', lang: 'bash', text: 'pip install langchain langgraph langchain-openai tavily-python' },
      { type: 'h2', text: 'Step 1: Define the Graph State' },
      { type: 'p', text: 'LangGraph workflows share state across all agents. Define the state schema first:' },
      { type: 'code', lang: 'python', text: `from typing import TypedDict, Annotated, List
from langgraph.graph import StateGraph, END
import operator

class ResearchState(TypedDict):
    task: str                          # Original research question
    research_data: List[str]           # Facts gathered by Researcher
    draft: str                         # Content written by Writer
    review_feedback: str               # Critique from Reviewer
    final_output: str                  # Approved final content
    iterations: Annotated[int, operator.add]  # Loop counter` },
      { type: 'h2', text: 'Step 2: Build the Agent Nodes' },
      { type: 'code', lang: 'python', text: `from langchain_openai import ChatOpenAI

llm = ChatOpenAI(model="gpt-4o", temperature=0)

def researcher_agent(state: ResearchState) -> dict:
    """Gathers facts relevant to the research task."""
    prompt = f"""You are a Research Specialist. Gather 5 key facts about:
{state['task']}

Return as a numbered list of concise, factual statements."""
    response = llm.invoke(prompt)
    facts = [line.strip() for line in response.content.split("\\n") if line.strip()]
    return {"research_data": facts, "iterations": 1}

def writer_agent(state: ResearchState) -> dict:
    """Writes a draft based on the research data."""
    facts = "\\n".join(state["research_data"])
    prompt = f"""You are an Expert Technical Writer. Write a clear, structured response to:
{state['task']}

Using these research facts:
{facts}

Write 3 concise paragraphs."""
    response = llm.invoke(prompt)
    return {"draft": response.content, "iterations": 1}

def reviewer_agent(state: ResearchState) -> dict:
    """Reviews the draft and either approves or requests revision."""
    prompt = f"""You are a Critical Reviewer. Evaluate this draft for accuracy, clarity, and completeness.
Task: {state['task']}
Draft: {state['draft']}

Respond with either:
- APPROVED: [brief reason]
- REVISE: [specific improvement needed]"""
    response = llm.invoke(prompt)
    feedback = response.content
    if "APPROVED" in feedback:
        return {"review_feedback": feedback, "final_output": state["draft"], "iterations": 1}
    return {"review_feedback": feedback, "iterations": 1}` },
      { type: 'h2', text: 'Step 3: Wire the Graph' },
      { type: 'code', lang: 'python', text: `def should_revise(state: ResearchState) -> str:
    """Routing function: continue loop or end."""
    if state.get("final_output"):
        return "end"
    if state.get("iterations", 0) >= 3:  # Max 3 revision loops
        return "end"
    return "writer"  # Send back for revision

# Build the graph
workflow = StateGraph(ResearchState)

workflow.add_node("researcher", researcher_agent)
workflow.add_node("writer",     writer_agent)
workflow.add_node("reviewer",   reviewer_agent)

workflow.set_entry_point("researcher")
workflow.add_edge("researcher", "writer")
workflow.add_edge("writer",     "reviewer")
workflow.add_conditional_edges("reviewer", should_revise, {
    "writer": "writer",
    "end":    END,
})

app = workflow.compile()` },
      { type: 'h2', text: 'Step 4: Run the Multi-Agent Workflow' },
      { type: 'code', lang: 'python', text: `result = app.invoke({
    "task": "Explain the key differences between RAG and fine-tuning for enterprise AI",
    "research_data": [],
    "draft": "",
    "review_feedback": "",
    "final_output": "",
    "iterations": 0,
})

print("Final Output:")
print(result["final_output"])
print(f"\\nCompleted in {result['iterations']} iterations")` },
      { type: 'h2', text: 'Step 5: Production Enhancements' },
      { type: 'ul', items: [
        'Add tool use: Give the Researcher agent web search (Tavily) or RAG retrieval tools for grounded facts.',
        'Persistent state: Use LangGraph\'s checkpointing with a SQLite or Redis backend to resume interrupted workflows.',
        'Human-in-the-loop: Add an interrupt_before the reviewer node so a human can approve before the loop continues.',
        'Streaming: Use app.stream() instead of app.invoke() to stream intermediate results to your UI in real time.',
        'Observability: Wrap with LangSmith tracing to monitor every agent call, tool use, and state transition.',
      ]},
    ],
  },
  {
    slug: 'langchain-tool-use-openai-functions',
    title: 'Building an AI Agent with Tool Use Using LangChain and OpenAI Functions',
    description: 'Step-by-step guide to building a LangChain agent that can use tools — web search, calculator, database queries, and custom APIs — using OpenAI function calling.',
    date: '2026-05-13',
    author: 'Ganapathi Ramkumar Palanivelu',
    readTime: '10 min read',
    difficulty: 'Intermediate',
    tags: ['Tutorial', 'LangChain', 'AI Agents', 'Tool Use', 'Python', 'OpenAI'],
    sections: [
      { type: 'p', text: 'LangChain agents with tool use are the building blocks of agentic AI systems. An agent can autonomously decide which tools to call, in what order, and how to combine their outputs — enabling it to answer questions that require multiple steps, web searches, or computation. This tutorial builds a research agent with four tools: web search, calculator, Wikipedia lookup, and a custom RAG tool.' },
      { type: 'h2', text: 'Prerequisites' },
      { type: 'ul', items: [
        'Python 3.10+', 'OpenAI API key', 'Tavily API key (free tier available at tavily.com)',
        'pip install langchain langchain-openai tavily-python wikipedia',
      ]},
      { type: 'h2', text: 'Step 1: Define Your Tools' },
      { type: 'code', lang: 'python', text: `from langchain_community.tools.tavily_search import TavilySearchResults
from langchain_community.tools import WikipediaQueryRun
from langchain_community.utilities import WikipediaAPIWrapper
from langchain.tools import tool
import math

# Tool 1: Web search
search_tool = TavilySearchResults(max_results=3)

# Tool 2: Wikipedia
wiki_tool = WikipediaQueryRun(api_wrapper=WikipediaAPIWrapper(top_k_results=2))

# Tool 3: Calculator (custom tool using @tool decorator)
@tool
def calculator(expression: str) -> str:
    """Evaluate a mathematical expression. Input should be a valid Python math expression.
    Examples: '2 + 2', 'math.sqrt(144)', '15 * 23 / 7'"""
    try:
        result = eval(expression, {"math": math, "__builtins__": {}})
        return str(result)
    except Exception as e:
        return f"Error: {e}"

# Tool 4: Custom RAG tool (query your vector store)
@tool
def rag_search(query: str) -> str:
    """Search internal company documents for relevant information.
    Use this when asked about company-specific data, policies, or internal knowledge."""
    # Replace with your actual vector store query
    return f"[RAG results for: {query}] — wire this to your vector store retriever"

tools = [search_tool, wiki_tool, calculator, rag_search]` },
      { type: 'h2', text: 'Step 2: Create the Agent' },
      { type: 'code', lang: 'python', text: `from langchain_openai import ChatOpenAI
from langchain.agents import create_openai_functions_agent, AgentExecutor
from langchain.prompts import ChatPromptTemplate, MessagesPlaceholder

llm = ChatOpenAI(model="gpt-4o", temperature=0)

prompt = ChatPromptTemplate.from_messages([
    ("system", """You are a helpful research assistant with access to tools.
Always use tools to find accurate, up-to-date information.
Think step by step: decide which tool is most appropriate, use it, then synthesise the result.
If one tool doesn't give enough information, try another."""),
    ("human", "{input}"),
    MessagesPlaceholder(variable_name="agent_scratchpad"),
])

agent = create_openai_functions_agent(llm=llm, tools=tools, prompt=prompt)
agent_executor = AgentExecutor(
    agent=agent,
    tools=tools,
    verbose=True,          # Shows tool calls and reasoning
    max_iterations=5,      # Safety limit on tool call loops
    handle_parsing_errors=True,
)` },
      { type: 'h2', text: 'Step 3: Run the Agent' },
      { type: 'code', lang: 'python', text: `# Example 1: Question requiring web search
result = agent_executor.invoke({
    "input": "What is the current version of LangChain and what were the main features added recently?"
})
print(result["output"])

# Example 2: Question requiring calculation + search
result = agent_executor.invoke({
    "input": "If GPT-4o costs $5 per million tokens and I process 50,000 tokens per day, what is my monthly cost?"
})
print(result["output"])

# Example 3: Multi-step research
result = agent_executor.invoke({
    "input": "Compare the context window sizes of GPT-4o, Claude 3.5 Sonnet, and Llama 3.1 405B, then calculate which gives the most tokens per dollar for input."
})
print(result["output"])` },
      { type: 'h2', text: 'Step 4: Add Memory for Multi-Turn Conversations' },
      { type: 'code', lang: 'python', text: `from langchain.memory import ConversationBufferWindowMemory
from langchain.agents import create_openai_functions_agent, AgentExecutor
from langchain.prompts import ChatPromptTemplate, MessagesPlaceholder

prompt_with_memory = ChatPromptTemplate.from_messages([
    ("system", "You are a research assistant with memory of our conversation."),
    MessagesPlaceholder(variable_name="chat_history"),
    ("human", "{input}"),
    MessagesPlaceholder(variable_name="agent_scratchpad"),
])

memory = ConversationBufferWindowMemory(
    memory_key="chat_history",
    return_messages=True,
    k=10,  # Keep last 10 turns
)

agent_with_memory = create_openai_functions_agent(llm, tools, prompt_with_memory)
executor_with_memory = AgentExecutor(
    agent=agent_with_memory, tools=tools,
    memory=memory, verbose=True,
)

# First turn
executor_with_memory.invoke({"input": "What is RAG?"})
# Second turn — agent remembers the first question
executor_with_memory.invoke({"input": "What are its main limitations?"})` },
      { type: 'h2', text: 'Step 5: Stream Agent Output to Your UI' },
      { type: 'code', lang: 'python', text: `# Stream tokens and intermediate steps for responsive UIs
async def stream_agent(question: str):
    async for event in agent_executor.astream_events(
        {"input": question},
        version="v1",
    ):
        kind = event["event"]
        if kind == "on_chat_model_stream":
            print(event["data"]["chunk"].content, end="", flush=True)
        elif kind == "on_tool_start":
            print(f"\\n[Using tool: {event['name']}]")
        elif kind == "on_tool_end":
            print(f"[Tool result received]")

import asyncio
asyncio.run(stream_agent("What are the latest developments in RAG architecture?"))` },
      { type: 'h2', text: 'Production Best Practices' },
      { type: 'ul', items: [
        'Rate limit tool calls: Add delays between tool calls to avoid hitting API rate limits during heavy concurrent usage.',
        'Sanitise tool inputs: Validate and sanitise all inputs to tools before execution — never pass user input directly to eval() or shell commands.',
        'Timeout guards: Set per-tool timeouts (10–30 seconds) so a slow external API doesn\'t stall the entire agent.',
        'Cost tracking: Log token counts for every LLM call inside the agent loop — agents can make 5–10 LLM calls per user query.',
        'Fallback behaviour: If max_iterations is reached without a final answer, return a helpful partial result rather than a generic error.',
      ]},
    ],
  },
  {
    slug: 'langsmith-observability-guide',
    title: 'Setting Up LLM Observability with LangSmith: A Complete Guide',
    description: 'Learn how to instrument your LangChain RAG pipeline and agents with LangSmith for full observability — traces, evaluations, datasets, and production monitoring.',
    date: '2026-05-13',
    author: 'Ganapathi Ramkumar Palanivelu',
    readTime: '8 min read',
    difficulty: 'Intermediate',
    tags: ['Tutorial', 'LangSmith', 'LLM Observability', 'RAG', 'MLOps', 'LangChain'],
    sections: [
      { type: 'p', text: 'LangSmith is LangChain\'s observability and evaluation platform. It gives you full visibility into every LLM call, retrieval step, and tool invocation in your AI application — essential for debugging, cost management, and quality monitoring. This tutorial walks through setup, tracing, evaluation datasets, and production alerting.' },
      { type: 'h2', text: 'Step 1: Set Up LangSmith' },
      { type: 'code', lang: 'bash', text: 'pip install langsmith langchain' },
      { type: 'code', lang: 'bash', text: `# Add to your .env file
LANGCHAIN_TRACING_V2=true
LANGCHAIN_API_KEY=ls__your_api_key_here
LANGCHAIN_PROJECT=my-rag-project   # Project name in LangSmith dashboard
LANGCHAIN_ENDPOINT=https://api.smith.langchain.com` },
      { type: 'p', text: 'That\'s all the configuration needed. Once these environment variables are set, every LangChain chain, agent, and LLM call is automatically traced — no code changes required.' },
      { type: 'h2', text: 'Step 2: Add Custom Metadata to Traces' },
      { type: 'code', lang: 'python', text: `from langsmith import traceable
from langchain_openai import ChatOpenAI
from langchain.chains import RetrievalQA

# Add custom metadata to any function with @traceable
@traceable(
    name="RAG Query",
    metadata={"pipeline_version": "2.1", "environment": "production"},
    tags=["rag", "production"],
)
def answer_question(question: str, user_id: str) -> dict:
    chain = build_rag_chain()  # Your existing chain
    with langsmith.trace(
        name="user-query",
        metadata={"user_id": user_id, "question_length": len(question)},
    ):
        result = chain.invoke({"query": question})
    return result` },
      { type: 'h2', text: 'Step 3: Create an Evaluation Dataset' },
      { type: 'code', lang: 'python', text: `from langsmith import Client

client = Client()

# Create a dataset from your golden Q&A pairs
dataset = client.create_dataset(
    dataset_name="RAG Golden Dataset v1",
    description="Ground truth Q&A pairs for RAG pipeline evaluation",
)

examples = [
    {
        "inputs":  {"question": "What is retrieval-augmented generation?"},
        "outputs": {"answer": "RAG combines LLM generation with retrieval from a knowledge base to produce grounded, accurate responses."},
    },
    {
        "inputs":  {"question": "What vector databases does RamVector support?"},
        "outputs": {"answer": "RamVector uses pgvector (PostgreSQL extension) as its primary vector store."},
    },
]

client.create_examples(
    inputs=[e["inputs"] for e in examples],
    outputs=[e["outputs"] for e in examples],
    dataset_id=dataset.id,
)
print(f"Dataset created with {len(examples)} examples")` },
      { type: 'h2', text: 'Step 4: Run Automated Evaluation' },
      { type: 'code', lang: 'python', text: `from langsmith.evaluation import evaluate, LangChainStringEvaluator

def my_rag_app(inputs: dict) -> dict:
    chain = build_rag_chain()
    result = chain.invoke({"query": inputs["question"]})
    return {"answer": result["result"]}

# Run evaluation against the dataset
results = evaluate(
    my_rag_app,
    data="RAG Golden Dataset v1",
    evaluators=[
        LangChainStringEvaluator("cot_qa"),        # Chain-of-thought QA correctness
        LangChainStringEvaluator("embedding_distance"),  # Semantic similarity
    ],
    experiment_prefix="rag-v2.1",
    metadata={"model": "gpt-4o", "chunk_size": 1000},
)
print(results.to_pandas())` },
      { type: 'h2', text: 'Step 5: Monitor Production with Alerts' },
      { type: 'p', text: 'LangSmith\'s monitoring dashboard shows real-time metrics for your production project. Key things to monitor:' },
      { type: 'ul', items: [
        'Trace volume: Unexpected drops indicate application errors; unexpected spikes indicate misuse or runaway agents.',
        'Token spend by run type: Break down costs by chain type to identify expensive operations.',
        'Error rate: Track the percentage of runs that throw exceptions — set an alert if it exceeds 2%.',
        'Latency percentiles: p95 and p99 latency trends reveal performance regressions before users notice.',
        'Feedback scores: If you instrument thumbs up/down in your app, LangSmith aggregates user feedback per run.',
      ]},
      { type: 'h2', text: 'Step 6: Add User Feedback Instrumentation' },
      { type: 'code', lang: 'python', text: `from langsmith import Client
client = Client()

# After getting the run ID from a traced call
def record_user_feedback(run_id: str, score: int, comment: str = ""):
    """score: 1 = thumbs up, 0 = thumbs down"""
    client.create_feedback(
        run_id=run_id,
        key="user_feedback",
        score=score,
        comment=comment,
    )

# In your API endpoint:
# run_id = get_run_id_from_langsmith_callback()
# record_user_feedback(run_id, score=1, comment="Great answer!")` },
      { type: 'h2', text: 'Key Takeaways' },
      { type: 'ul', items: [
        'Three environment variables are all you need to enable full LangSmith tracing — zero code changes.',
        'Build your golden evaluation dataset before you go to production — you\'ll need it immediately.',
        'Use experiment_prefix to track evaluation results across model/prompt/config changes systematically.',
        'Instrument user feedback (thumbs up/down) from day one — it\'s your most valuable production signal.',
        'Set latency and error rate alerts — production AI quality degrades silently without active monitoring.',
      ]},
    ],
  },
];
