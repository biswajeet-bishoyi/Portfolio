# Design-System.md — Visual Design Language
## Biswajeet Bishoyi Portfolio

**Version:** 1.0.0
**Date:** June 2026
**Design Direction:** Engineering Precision meets Creative Sophistication

---

## 1. Design Philosophy

### The Concept: "Structural Elegance"
Biswajeet sits at the intersection of civil engineering and creative design. The visual system should mirror this: structural precision (grids, systematic spacing, clear hierarchy) combined with refined aesthetics (purposeful color, considered typography, tasteful motion).

**Three Guiding Words:** Precise · Premium · Personal

---

## 2. Color Palette

### 2.1 Primary Palette — "Blueprint Noir"

The palette draws from engineering blueprint aesthetics (deep navy, technical precision) combined with a bold warm accent that signals energy and creativity.

```
Primary Background (Dark Mode):   #08090d   "Ink Black"
Surface (Dark):                   #0f1117   "Deep Vault"
Surface Alt (Dark):               #161821   "Blueprint Shadow"
Border (Dark):                    #1e2030   "Steel Edge"

Primary Background (Light Mode):  #fafafa   "Paper White"
Surface (Light):                  #ffffff   "Clean White"
Surface Alt (Light):              #f4f5f7   "Blueprint Grey"
Border (Light):                   #e2e4e9   "Blueprint Line"
```

### 2.2 Accent Colors

```
Accent Primary:      #e63946   "Engineering Red"
  — Used for: CTAs, active states, highlight underlines, badges
  — Rationale: Confident, technical, recalls structural analysis markings

Accent Secondary:    #0077b6   "Blueprint Blue"
  — Used for: Links, secondary badges, skill indicators
  — Rationale: Feels technical, maps to engineering blueprints

Accent Tertiary:     #2ec4b6   "Precision Teal"
  — Used for: Success states, certifications, tech project badges
  — Rationale: Signals innovation, technology, sustainability
```

### 2.3 Text Colors

```
Light Mode:
  Text Primary:     #0d0e14   (near-black)
  Text Secondary:   #4a5568   (warm grey)
  Text Muted:       #718096   (lighter grey)
  Text Inverted:    #ffffff   (on dark surfaces)

Dark Mode:
  Text Primary:     #f0f2f5   (near-white)
  Text Secondary:   #a0aec0   (cool grey)
  Text Muted:       #718096   (same as light, works both)
  Text Inverted:    #0d0e14   (on light surfaces)
```

### 2.4 Semantic Colors

```
Success:   #22c55e  (green — form submitted, download complete)
Warning:   #f59e0b  (amber — optional fields, in-progress)
Error:     #ef4444  (red — form errors, required fields)
Info:      #3b82f6  (blue — tooltips, informational notes)
```

### 2.5 Gradient Definitions

```css
/* Hero gradient glow — dark mode */
--gradient-hero: radial-gradient(ellipse at 30% 50%, rgba(230, 57, 70, 0.15) 0%, transparent 60%),
                 radial-gradient(ellipse at 70% 20%, rgba(0, 119, 182, 0.1) 0%, transparent 50%);

/* Card hover gradient */
--gradient-card-hover: linear-gradient(135deg, rgba(230, 57, 70, 0.05) 0%, transparent 100%);

/* Section divider gradient */
--gradient-divider: linear-gradient(90deg, transparent 0%, var(--accent) 50%, transparent 100%);

/* Text gradient (for display name) */
--gradient-display: linear-gradient(135deg, #f0f2f5 0%, #a0aec0 100%);  /* dark mode */
--gradient-display-light: linear-gradient(135deg, #0d0e14 0%, #4a5568 100%);  /* light mode */
```

### 2.6 Tailwind Configuration

```typescript
// tailwind.config.ts
colors: {
  brand: {
    ink:       '#08090d',
    vault:     '#0f1117',
    blueprint: '#161821',
    steel:     '#1e2030',
    red:       '#e63946',
    blue:      '#0077b6',
    teal:      '#2ec4b6',
  }
}
```

---

## 3. Typography

### 3.1 Font Selection

**Heading Font: "Sora"** (Google Fonts)
- Weight: 400, 600, 700, 800
- Character: Geometric, modern, has architectural quality — circles are perfectly round (engineering precision)
- Use: All headings (H1–H4), navigation, buttons
- Fallback: system-ui, sans-serif

**Body Font: "DM Sans"** (Google Fonts)
- Weight: 300, 400, 500
- Character: Friendly geometric sans with excellent readability; slightly warmer than Inter
- Use: Body text, descriptions, form labels, captions
- Fallback: system-ui, sans-serif

**Code/Monospace Font: "JetBrains Mono"** (Google Fonts)
- Weight: 400, 500
- Use: Code blocks in blog posts, technical specifications, terminal-style UI elements
- Fallback: 'Courier New', monospace

**Implementation:**
```typescript
// app/layout.tsx
import { Sora, DM_Sans, JetBrains_Mono } from 'next/font/google'

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})
```

### 3.2 Type Scale

```css
/* Using CSS clamp for fluid typography */

.text-display {
  font-family: var(--font-sora);
  font-size: clamp(2.75rem, 5.5vw, 5.5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
}

.text-h1 {
  font-family: var(--font-sora);
  font-size: clamp(1.875rem, 4vw, 3.5rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.text-h2 {
  font-family: var(--font-sora);
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.01em;
}

.text-h3 {
  font-family: var(--font-sora);
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  font-weight: 600;
  line-height: 1.35;
}

.text-body-lg {
  font-family: var(--font-dm-sans);
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.7;
}

.text-body {
  font-family: var(--font-dm-sans);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.65;
}

.text-small {
  font-family: var(--font-dm-sans);
  font-size: 0.875rem;
  line-height: 1.6;
}

.text-caption {
  font-family: var(--font-dm-sans);
  font-size: 0.75rem;
  letter-spacing: 0.02em;
  line-height: 1.5;
}

.text-label {
  font-family: var(--font-dm-sans);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
```

---

## 4. Spacing System

**Base unit: 4px**
**Multiplier: 2x (giving effective 8px grid)**

```
Token       Value     Tailwind
──────────────────────────────
space-1     4px       p-1
space-2     8px       p-2     ← base unit
space-3     12px      p-3
space-4     16px      p-4
space-5     20px      p-5
space-6     24px      p-6
space-8     32px      p-8
space-10    40px      p-10
space-12    48px      p-12
space-16    64px      p-16
space-20    80px      p-20
space-24    96px      p-24
space-32    128px     p-32
```

**Section Padding:** `py-20 md:py-28 lg:py-32`
**Container:** `max-w-6xl mx-auto px-5 sm:px-8 lg:px-10`
**Card Padding:** `p-6 md:p-8`
**Component Gap:** `gap-4 md:gap-6 lg:gap-8`

---

## 5. Grid System

```
Mobile (< 640px):    1 column,  16px gutter,  16px margin
Tablet (640–1024px): 2 columns, 24px gutter,  24px margin
Desktop (1024px+):   3 columns, 32px gutter,  auto margin (centered)
Wide (1280px+):      4 columns (for galleries), 32px gutter
```

```css
/* Standard section grid */
.section-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .section-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .section-grid { grid-template-columns: repeat(3, 1fr); }
}
```

---

## 6. Elevation & Shadow System

```css
/* Light mode shadows */
--shadow-sm:  0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
--shadow-md:  0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04);
--shadow-lg:  0 12px 32px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06);
--shadow-xl:  0 24px 64px rgba(0,0,0,0.12);

/* Dark mode shadows (subtler — dark bg absorbs shadows) */
--shadow-sm-dark:  0 1px 3px rgba(0,0,0,0.3);
--shadow-md-dark:  0 4px 16px rgba(0,0,0,0.4);
--shadow-lg-dark:  0 12px 40px rgba(0,0,0,0.5);

/* Accent glow (for CTA buttons, active states) */
--shadow-accent:   0 4px 20px rgba(230, 57, 70, 0.35);
--shadow-accent-blue: 0 4px 20px rgba(0, 119, 182, 0.35);
```

---

## 7. Border Radius

```
Token      Value    Use
──────────────────────────────────────
rounded-sm   4px    Tags, badges, inputs (subtle)
rounded      6px    Buttons (default)
rounded-md   8px    Cards (default)
rounded-lg   12px   Feature cards, project cards
rounded-xl   16px   Large cards, modals
rounded-2xl  24px   Profile photo frames
rounded-full 9999px Pill badges, avatar rings, toggles
```

---

## 8. Iconography

**Primary Icon Library:** Lucide React
- Stroke width: 1.5px (default) for most uses
- Stroke width: 2px for small icons (< 16px)
- Size system: 16, 20, 24px

**Brand Icons:** React Icons (`ri` package — Remix Icons for social, `si` package — Simple Icons for tech logos)

**Custom Icons:** SVG inline components for:
- Logo mark (if any)
- ASCE logo reference
- Custom section markers

**Icon Usage Rules:**
- Always pair icon with text label (accessibility)
- Icon-only buttons require `aria-label`
- Icons in text: inline, `verticalAlign: middle`, same color as text

---

## 9. Component Tokens

### Buttons

```
Variant     Background              Text        Border       Shadow
──────────────────────────────────────────────────────────────────────
Primary     brand-red               white       none         shadow-accent
Secondary   transparent             brand-red   1px brand-red none → shadow-accent on hover
Ghost       transparent             text-muted  none         none
Dark        #1e2030                 white       1px steel    shadow-md
```

**Button Sizes:**
- `sm`: h-8, px-4, text-sm
- `md`: h-10, px-6, text-sm (default)
- `lg`: h-12, px-8, text-base
- `xl`: h-14, px-10, text-lg (hero CTAs only)

### Form Inputs

```
State       Background       Border              Text
────────────────────────────────────────────────────────
Default     surface          border-color        text-primary
Focus       surface          accent-blue (ring)  text-primary
Error       surface          error-red           text-primary
Disabled    surface-alt      border-muted        text-muted
```

---

## 10. Motion & Animation System

### Timing Functions
```css
--ease-smooth:     cubic-bezier(0.4, 0, 0.2, 1)   /* default transitions */
--ease-spring:     cubic-bezier(0.34, 1.56, 0.64, 1) /* bouncy entries */
--ease-out-expo:   cubic-bezier(0.16, 1, 0.3, 1)   /* fast-out smooth */
--ease-in-out:     cubic-bezier(0.4, 0, 0.6, 1)    /* loading states */
```

### Duration Scale
```
Instant:    0ms       (immediate visual feedback)
Fast:       150ms     (hover color changes, focus rings)
Normal:     300ms     (button states, tab transitions)
Deliberate: 500ms     (section entries, card reveals)
Cinematic:  800ms     (hero animations, page loads)
```

### Standard Framer Motion Variants

```typescript
// lib/animations.ts — single source of truth for all animations

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } }
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] } }
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
}

export const cardHover = {
  rest: { y: 0, boxShadow: 'var(--shadow-md)' },
  hover: { y: -6, boxShadow: 'var(--shadow-xl)', transition: { duration: 0.2 } }
}
```

### Reduced Motion
```typescript
// hooks/use-reduced-motion.ts
import { useReducedMotion } from 'framer-motion'

// In components:
const shouldReduceMotion = useReducedMotion()
const variants = shouldReduceMotion ? { hidden: {}, visible: {} } : fadeUp
```

---

## 11. Dark Mode Implementation

**Strategy:** CSS class-based via `next-themes`

```css
/* globals.css */
:root {
  color-scheme: light;
  /* light mode tokens */
}

.dark {
  color-scheme: dark;
  /* dark mode tokens */
}
```

**Default:** Dark mode (portfolio audience is primarily tech-aware users who prefer dark)
**Toggle:** Manual override, persisted in localStorage
**System:** Respects `prefers-color-scheme` on first visit if no manual preference

---

## 12. Accessibility Tokens

```
Focus Ring:    ring-2 ring-brand-red ring-offset-2 ring-offset-background
Skip Link:     fixed top-2 left-2 z-[9999] bg-brand-red text-white px-4 py-2
               transform -translate-y-full focus:translate-y-0 transition-transform
Selection:     bg-brand-red/20 text-inherit
```

---

*End of Design-System.md*
