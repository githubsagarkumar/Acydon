# ApplyFlow — Premium Landing Page
Live url - https://applyfloww.netlify.app/

**ApplyFlow** is a fictional job-search workspace SaaS. This project is Part 2 of the Acdyon Technologies Frontend Challenge — *Build It Like You Mean It*.

> Turn your job search into a system.

---

## 1. Summary

A production-quality landing page for ApplyFlow — a fictional job-search workspace SaaS. The page is product-first: the hero and demo sections use real React UI components (not decorative shapes or screenshots), with honest copy and no fake social proof.

**Design system:** Plus Jakarta Sans, teal accent (`#0D9488`), warm neutral background, consistent spacing/radius/shadows, restrained Framer Motion animations.

**All required sections:** Navbar, Hero with dashboard preview, Problem/Value, How It Works (3 steps), Features (4 blocks with UI visuals), Interactive Application Board, Final CTA, Footer.

---

## 2. Files Created / Modified

| Path | Purpose |
|------|---------|
| `index.html` | SEO title, meta description, Google Fonts |
| `public/favicon.svg` | ApplyFlow favicon |
| `vite.config.ts` | Vite + React + Tailwind |
| `package.json` | Dependencies (Vite 6, React 19, Tailwind 4, Framer Motion) |
| `src/index.css` | Tailwind theme + design tokens |
| `src/App.tsx` | Page assembly |
| `src/data/applications.ts` | Shared application data |
| `src/components/Navbar.tsx` | Responsive nav with mobile menu |
| `src/components/Hero.tsx` | Hero with entrance animations |
| `src/components/ProductPreview.tsx` | Dashboard mock (hero) |
| `src/components/ApplicationCard.tsx` | Reusable card with hover/click modes |
| `src/components/ProblemSection.tsx` | Problem/value section |
| `src/components/HowItWorks.tsx` | 3-step flow |
| `src/components/Features.tsx` | 4 feature blocks with UI visuals |
| `src/components/InteractiveBoard.tsx` | Click-to-view details panel |
| `src/components/FinalCTA.tsx` | Closing call-to-action |
| `src/components/Footer.tsx` | Minimal footer |
| `src/components/EasterEggBanner.tsx` | Konami code reward |
| `src/components/ui/Button.tsx` | Primary/secondary/ghost buttons |
| `src/components/ui/SectionReveal.tsx` | Scroll reveal animation |
| `src/hooks/useKonamiCode.ts` | Easter egg keyboard listener |

---

## 3. How to Run

```bash
cd c:\Users\ASUS\Desktop\Acydon
npm install
npm run dev
```

Dev server: **http://localhost:5173/**

---

## 4. How to Build

```bash
npm run build
npm run preview   # optional — preview production build
```

Build verified successfully (no TypeScript or Vite errors).

---

## 5. Implemented Interactions

1. **Hero card hover** — Application cards in the hero dashboard lift with elevation, shadow, and border highlight on hover (Framer Motion).
2. **Interactive board click** — Click any card in the demo section to open a details panel showing role, company, status, applied date, next step, location, and notes. Click again or use the mobile close button to dismiss.
3. **Mobile navigation** — Hamburger menu opens/closes; body scroll is locked while open.
4. **Smooth scroll** — Nav links scroll to `#product`, `#how-it-works`, `#features`, `#demo`, `#cta`.
5. **Easter egg** — Enter the Konami code (↑↑↓↓←→←→BA) to show a brief “Good luck with your search” banner.

---

## 6. Responsive Testing Checklist

| Check | Status |
|-------|--------|
| 390px mobile — no horizontal scroll | Verify in DevTools |
| 1440px desktop — balanced layout | Verify in DevTools |
| Hero headline wraps correctly | Implemented with responsive text sizes |
| Hero dashboard — 2-col on mobile, 4-col on desktop | Implemented |
| Buttons stack on mobile, inline on desktop | Implemented |
| Mobile nav — no overflow | Implemented with full-screen overlay |
| Interactive board — panel below board on mobile | Implemented |
| Interactive board — side panel on desktop | Implemented |
| Footer — 1/2/4 column grid | Implemented |
| Product preview readable at all widths | Implemented with `min-w-0` + overflow control |

---

## 7. Remaining Issues

- **Sign in** and footer Documentation/Support/Privacy/Terms links are placeholders (`href="#"`). They are intentionally non-functional for a landing-page demo.
- **“Start organizing”** CTA buttons link to `#cta` or `#` — no signup flow exists (expected for this challenge).
- Vite was downgraded from v8 to v6 because v8’s Rolldown native bindings failed on Node v20.17.0. Everything builds and runs correctly on v6.

---

## Visual QA (Assignment Checklist)

- [x] Hero communicates product within 3 seconds
- [x] CTA is obvious (“Start organizing”)
- [x] Product demonstrated via real React dashboard UI
- [x] Dashboard has Saved / Applied / Interview / Offer columns with realistic example data
- [x] Hover + click interactions work
- [x] Animation is restrained (hero entrance, scroll reveal, card hover)
- [x] No fake testimonials, user counts, logos, or statistics
- [x] Page title and meta description set
- [x] Semantic HTML, focus states, aria labels on interactive elements
- [x] Light theme only (no incomplete dark mode)
- [x] `npm run build` succeeds

---

## Tech Stack

- React 19
- Vite 6
- TypeScript
- Tailwind CSS 4
- Framer Motion
