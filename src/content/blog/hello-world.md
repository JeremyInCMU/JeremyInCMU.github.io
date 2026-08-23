---
title: 'Starting this blog'
description: 'Why I am writing things down, and what I plan to put here.'
pubDate: 2026-08-23
tags: ['meta']
---

I've lost the same debugging insight three times now. Each time I rediscovered it,
I thought "I should write this down," and each time I didn't. So: a blog.

## What goes here

Mostly working notes from machine learning and robotics work — the kind of thing I'd
want to find if I searched for it in six months:

- Architecture decisions and why I picked one option over another
- Bugs that took real effort to track down, with the reasoning that found them
- Training runs that failed in interesting ways
- Papers I read closely enough to have an opinion about

Not tutorials. There are better tutorials than I'd write. These are notes from inside
a specific problem, which is a different and sometimes more useful thing.

## On writing up failures

The useful half of research is usually the part that didn't work, and it's almost never
published. A loss curve that plateaus for a stupid reason, a data pipeline that silently
drops every tenth sample — that's the material worth recording, because the fix rarely
appears anywhere searchable.

So the failures get written up too. Especially the embarrassing ones.

## How this site is built

Static site, [Astro](https://astro.build), Markdown files in a git repo, deployed to
GitHub Pages by an Actions workflow on every push to `main`. No database, no CMS, no
comment system to moderate. Adding a post means adding a file:

```bash
# a new post is just a Markdown file with frontmatter
$EDITOR src/content/blog/my-new-post.md
git add -A && git commit -m "New post" && git push
```

The whole thing is version-controlled plain text, which means it will still build in five
years. That was the main requirement.
