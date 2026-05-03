# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Ram Vector** is an AI-powered document intelligence platform. Users upload PDFs and receive AI-generated summaries, action items, key insights, and workflow recommendations. The marketing website lives at `../RamVector Website` (React + Vite, deployed on Vercel).

This repo contains the core application — backend API and/or mobile/frontend app.

## Tech Stack (Expected)

- **Backend**: Python (FastAPI or Flask), LLM integration via Anthropic Claude API
- **Mobile**: React Native (Expo) — consistent with the broader DT project ecosystem
- **Vector Store**: For semantic search over document chunks (e.g., ChromaDB, pgvector, Pinecone)
- **PDF Processing**: PyMuPDF or pdfplumber for text extraction

## Architecture

The platform follows a RAG (Retrieval-Augmented Generation) pattern:

1. **Ingestion** — PDF upload → text extraction → chunking → embedding → vector store
2. **Query** — user query → embedding → vector similarity search → context retrieval → LLM generation
3. **Output** — structured response: summary, action items, insights, workflow steps

Keep these three stages as separate, independently testable modules.

## Related Folders

- `../RamVector Website` — marketing/landing site (React + Vite). Routes: `/`, `/privacy`, `/support`
- `../../Rambot` — sibling enterprise AI platform (Steer & Skill modules) for architectural reference

## Environment Variables

Store secrets in `.env` (never commit). Expected keys:
```
ANTHROPIC_API_KEY=
VECTOR_DB_URL=
```

## Development Commands

```bash
npm install          # install dependencies
npm run dev          # start dev server (localhost:5173)
npm run build        # production build → dist/
npm run preview      # preview production build locally
```

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. Import repo in Vercel — framework preset: **Vite**
3. No environment variables required
4. `vercel.json` handles SPA routing rewrites

## Architecture

Single-page React app, no router (hash-link navigation). Each section is a standalone component with its own CSS module.

```
src/
├── App.jsx                    # section order
├── styles/global.css          # design tokens + shared utilities (.card, .btn, .fade-up)
├── hooks/useScrollAnimation.js # Intersection Observer → adds .visible to .fade-up children
└── components/
    ├── Navbar.jsx              # fixed, scroll-aware, mobile hamburger
    ├── Hero.jsx                # full-viewport, stats row
    ├── About.jsx               # bio + metrics grid + profile card
    ├── Competencies.jsx        # 4-category competency grid
    ├── ArchitectureExpertise.jsx # TOGAF / Zachman / HLD cards + governance row
    ├── AIShowcase.jsx          # RAG pipeline flow + 6 agent/capability cards
    ├── Projects.jsx            # RamVector App Store + 3 enterprise case studies
    ├── TechStack.jsx           # categorised tech table
    ├── Leadership.jsx          # leadership pillars + approach grid
    ├── Contact.jsx             # contact links + CTA card
    └── Footer.jsx
```

## Design System

All tokens in `src/styles/global.css` under `:root`. Key variables:
- `--bg-base` / `--bg-card` / `--bg-surface` — dark background hierarchy
- `--accent-indigo` (#6366f1) — primary brand colour
- `--text-primary` / `--text-secondary` / `--text-muted` — text hierarchy
- `.fade-up` + `.visible` — scroll animation pattern (applied by `useScrollAnimation`)
- `.section-label`, `.section-title span` — reused across all sections
