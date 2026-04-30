# Personal Site

Multilingual personal blog (English + Gujarati) built with [Astro](https://astro.build).

## Structure

```
src/
├── content/
│   ├── config.ts                # Content collection schema
│   └── blog/
│       ├── en/                  # English posts (one .md/.mdx file each)
│       └── gu/                  # Gujarati posts (one .md/.mdx file each)
├── layouts/
│   └── BaseLayout.astro         # Shared HTML shell with hreflang, fonts, nav
├── components/
│   └── PostCard.astro           # Reused on index pages
├── pages/
│   ├── index.astro              # Root language picker (/)
│   ├── en/
│   │   ├── index.astro          # /en/  - English home / latest posts
│   │   ├── blog/
│   │   │   ├── index.astro      # /en/blog/  - full English archive
│   │   │   └── [...slug].astro  # /en/blog/<slug>  - individual post
│   │   └── rss.xml.js           # /en/rss.xml
│   └── gu/                      # mirror of /en/ for Gujarati
└── styles/
    └── global.css
```

## Adding a new post

1. Create a new file: `src/content/blog/en/<slug>.md` (or `gu/`)
2. Use this frontmatter:
   ```yaml
   ---
   title: "Your title"
   description: "One-line summary"
   pubDate: 2026-04-29
   lang: en           # or 'gu'
   tags: ["tag1"]
   ---
   ```
3. Save. Routes are generated automatically.

Posts in each language are independent — you do **not** need an English counterpart for a Gujarati post (or vice versa).

## Commands

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start dev server at `localhost:4321`         |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview production build locally             |
