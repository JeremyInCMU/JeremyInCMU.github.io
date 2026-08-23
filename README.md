# JeremyInCMU.github.io

Personal blog. Astro + Markdown, deployed to GitHub Pages by GitHub Actions on every
push to `main`.

## Writing a post

Add a Markdown file to `src/content/blog/`. The filename becomes the URL, so
`my-first-post.md` is served at `/blog/my-first-post/`.

```markdown
---
title: 'Your post title'
description: 'One or two sentences. Used on the post list, in RSS, and for search results.'
pubDate: 2026-08-23
tags: ['robot-learning', 'debugging']
draft: false
---

Your content here. Standard Markdown — headings, code fences, tables, images.
```

Frontmatter fields:

| Field         | Required | Notes                                                       |
| ------------- | -------- | ----------------------------------------------------------- |
| `title`       | yes      | Post title                                                  |
| `description` | yes      | Shown on listings and in the RSS feed                       |
| `pubDate`     | yes      | `YYYY-MM-DD`; sorts the blog (newest first)                 |
| `updatedDate` | no       | Shows an "updated" note on the post                         |
| `tags`        | no       | Tag pages are generated automatically at `/tags/<tag>/`     |
| `draft`       | no       | `true` shows it in `npm run dev` but excludes it from builds |

A field name typo or a missing required field fails the build with a message naming the
file, rather than publishing a broken page.

## Local development

```bash
npm install      # once
npm run dev      # dev server, drafts visible
npm run build    # production build into dist/, drafts excluded
npm run preview  # serve the built dist/ locally
npm run check    # type-check .astro and .ts files
```

Note: `astro dev` in Astro 7 starts in the background and returns immediately. Use
`npx astro dev status` to check it and `npx astro dev stop` to shut it down.

## Publishing

```bash
git add -A
git commit -m "New post: your title"
git push
```

The Actions workflow builds and deploys. It takes a minute or two; watch it in the repo's
**Actions** tab.

## First-time GitHub setup

1. Create a repo named exactly **`JeremyInCMU.github.io`** on GitHub (public).
2. Point this directory at it and push:

   ```bash
   git init
   git add -A
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin git@github.com:JeremyInCMU/JeremyInCMU.github.io.git
   git push -u origin main
   ```

3. In the repo: **Settings → Pages → Build and deployment → Source = GitHub Actions.**
   This step is required — with the default "Deploy from a branch" the workflow can't
   publish.
4. The site goes live at `https://JeremyInCMU.github.io`.

## Customizing

- **Site title, description, nav, social links** — `src/consts.ts`
- **Colors, fonts, spacing** — the tokens at the top of `src/styles/global.css`
- **Home page intro** — `src/pages/index.astro`
- **About page** — `src/pages/about.astro`
- **Favicon** — `public/favicon.svg`

Dark mode follows the visitor's OS setting and can be overridden with the header toggle;
the choice persists in `localStorage`.

## Custom domain

Add a `public/CNAME` file containing just the domain (e.g. `blog.example.com`), set the
matching DNS records at your registrar, then update `site` in `astro.config.mjs` to the
new URL so canonical links, RSS, and the sitemap stay correct.

## Structure

```
src/
  components/     Header, Footer, PostCard, ThemeToggle, BaseHead, FormattedDate
  layouts/        BaseLayout (shell), BlogPost (article pages)
  pages/          index, about, 404, blog/, tags/, rss.xml.js
  content/blog/   your posts (Markdown)
  utils/posts.ts  post sorting, draft filtering, tag counts
  consts.ts       site metadata
  content.config.ts  frontmatter schema
public/           static files copied verbatim
.github/workflows/deploy.yml
```
