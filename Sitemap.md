# Sitemap.md — Information Architecture & URL Structure
## Biswajeet Bishoyi Portfolio

**Version:** 1.0.0
**Date:** June 2026

---

## 1. Visual Sitemap

```
biswajeetbishoyi.com
│
├── / (Homepage)
│   ├── #hero              ← Hero / Landing
│   ├── #about             ← About Me
│   ├── #skills            ← Skills
│   ├── #experience        ← Experience
│   ├── #projects          ← Projects Overview
│   ├── #certifications    ← Certifications
│   ├── #education         ← Education
│   ├── #conferences       ← Conference Participation
│   ├── #design-portfolio  ← Design Portfolio Gallery
│   ├── #engineering       ← Engineering Portfolio
│   ├── #testimonials      ← Testimonials
│   └── #contact           ← Contact
│
├── /blog                  ← Blog Index
│   ├── /blog/[slug]       ← Individual Blog Post
│   └── /blog/tag/[tag]    ← Posts by Tag (Phase 2)
│
├── /projects              ← Full Projects Index (Phase 2)
│   └── /projects/[slug]   ← Project Detail Page (Phase 2)
│
├── /resume                ← Resume redirect or preview page
│
└── /404                   ← Custom Not Found page
```

---

## 2. URL Structure

### Production URLs

| Page | URL | Type |
|------|-----|------|
| Homepage | `https://biswajeetbishoyi.com/` | Static |
| Blog Index | `https://biswajeetbishoyi.com/blog` | Static (ISR) |
| Blog Post | `https://biswajeetbishoyi.com/blog/[slug]` | Dynamic (ISR) |
| Resume | `https://biswajeetbishoyi.com/resume` | Redirect → PDF |
| Not Found | `https://biswajeetbishoyi.com/404` | Static |

### Anchor Navigation (Single Page)

| Section | Anchor ID | Nav Label |
|---------|-----------|-----------|
| Hero | `#hero` | — (logo click) |
| About | `#about` | About |
| Skills | `#skills` | Skills |
| Experience | `#experience` | Experience |
| Projects | `#projects` | Projects |
| Certifications | `#certifications` | Certifications |
| Education | `#education` | Education |
| Conferences | `#conferences` | Conferences |
| Design Work | `#design-portfolio` | Design |
| Engineering | `#engineering` | Engineering |
| Testimonials | `#testimonials` | Testimonials |
| Contact | `#contact` | Contact |

---

## 3. Navigation Structure

### Primary Navigation (Desktop — Horizontal)
```
[Logo/Name]  About  Skills  Projects  Blog  [Resume ↓]  [Contact →]
                                              (button)   (button)
```

### Primary Navigation (Mobile — Hamburger Menu)
```
[Logo]           [☰ Menu]

Expanded:
─────────────────
  About
  Skills
  Projects
  Experience
  Blog
  Contact
  [Download Resume]
─────────────────
```

### Footer Navigation
```
Column 1: Quick Links     Column 2: Portfolio       Column 3: Connect
──────────────────────    ─────────────────────     ──────────────────
About                     Engineering Projects       GitHub
Skills                    Design Work               LinkedIn
Experience                Blog/Insights             Email
Education                 Certifications            Twitter/X
                                                    Instagram
```

---

## 4. XML Sitemap Structure

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- Homepage -->
  <url>
    <loc>https://biswajeetbishoyi.com/</loc>
    <lastmod>2026-06-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Blog Index -->
  <url>
    <loc>https://biswajeetbishoyi.com/blog</loc>
    <lastmod>2026-06-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Blog Posts (dynamically generated) -->
  <url>
    <loc>https://biswajeetbishoyi.com/blog/ai-in-civil-engineering</loc>
    <lastmod>2026-06-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

</urlset>
```

Generated automatically via `next-sitemap` package.

---

## 5. Robots.txt

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

Sitemap: https://biswajeetbishoyi.com/sitemap.xml
```

---

## 6. Redirect Rules

| From | To | Type |
|------|----|------|
| `/resume` | `/public/resume/biswajeet-bishoyi-resume-2026.pdf` | 302 (temporary so it can be updated) |
| `/cv` | `/public/resume/biswajeet-bishoyi-resume-2026.pdf` | 302 |
| `/linkedin` | `https://linkedin.com/in/biswajeetbishoyi` | 301 |
| `/github` | `https://github.com/biswajeetbishoyi` | 301 |

Configure in `next.config.ts` redirects array.

---

## 7. Page Rendering Strategy

| Route | Strategy | Reason |
|-------|----------|--------|
| `/` | SSG (static) | No dynamic data; max performance |
| `/blog` | ISR (60s) | Content updates occasionally |
| `/blog/[slug]` | ISR (3600s) | Blog posts rarely change |
| `/api/contact` | Edge Function | Low latency form submission |

---

*End of Sitemap.md*
