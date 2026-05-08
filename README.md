# Qudhac Philosophy

A fast Astro website for publishing Somali philosophy essays.

The homepage stays simple, but articles live as separate Markdown files. Astro turns them into static HTML pages at build time, which is the right model for hundreds or thousands of articles.

## Run Locally

```bash
npm install
npm run dev
```

Then open the local address Astro prints in the terminal.

## Project Structure

- `src/pages/index.astro` - homepage
- `src/pages/articles/index.astro` - full article archive
- `src/pages/articles/[slug].astro` - article template
- `src/content/articles/` - Markdown article files
- `src/layouts/BaseLayout.astro` - shared page shell
- `src/styles/global.css` - site design
- `public/assets-reading-room.svg` - local visual asset

## Add an Article

Only the person who has access to this project folder or the website's GitHub repository can publish articles. Normal visitors cannot add articles to the website. They can only email you from the submit section.

To publish an article yourself, create a new file in `src/content/articles/`, for example:

```text
src/content/articles/truth-and-tradition.md
```

Use this format:

```md
---
title: "Truth and Tradition"
description: "A short summary shown on article lists."
pubDate: 2026-05-08
author: "Author Name"
topic: "Ethics"
language: "Somali"
readingTime: "9 min read"
---

Write the article here in Markdown.
```

Then run:

```bash
npm run build
```

If the build succeeds, publish the site again through your hosting service.

## Submissions From Other People

The submit button is only an email link to `somali.philo@gmail.com`. A reader can send you an essay by email, but it will not appear on the website automatically.

The safe workflow is:

1. Someone emails you an essay.
2. You read and approve it.
3. You create a Markdown file for it in `src/content/articles/`.
4. You rebuild and publish the site.

This keeps publishing under your control.

## Why Astro

- Very fast static HTML output
- Markdown articles are easy to write and manage
- No database needed at the beginning
- Good path toward search, tags, pagination, RSS, and multilingual publishing

## Later Improvements

- Add pagination when the archive grows.
- Add Pagefind for static search.
- Add RSS.
- Add Somali and English language filters.
- Replace `https://example.com` in `astro.config.mjs` with the real domain.
