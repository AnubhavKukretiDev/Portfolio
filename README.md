# Portfolio Upgrade — Drop-in Files

## How to apply

Copy each file below into your project at the path shown.
**No new dependencies are needed** — all changes use your existing stack.

---

## File map

| Output file | Replaces |
|-------------|----------|
| `src/index.css` | `src/index.css` |
| `src/App.jsx` | `src/App.jsx` |
| `src/sections/Navbar.jsx` | `src/sections/navbar.jsx` |
| `src/sections/Hero.jsx` | `src/sections/Hero.jsx` |
| `src/sections/About.jsx` | `src/sections/About.jsx` |
| `src/sections/Projects.jsx` | `src/sections/Projects.jsx` |
| `src/sections/Experiences.jsx` | `src/sections/Experiences.jsx` |
| `src/sections/Testimonial.jsx` | `src/sections/Testimonial.jsx` |
| `src/sections/Contact.jsx` | `src/sections/Contact.jsx` |
| `src/sections/Footer.jsx` | `src/sections/Footer.jsx` |
| `src/components/HeroText.jsx` | `src/components/HeroText.jsx` |
| `src/components/FlipWords.jsx` | `src/components/FlipWords.jsx` |
| `src/components/Alert.jsx` | `src/components/Alert.jsx` |
| `src/components/CopyEmailButton.jsx` | `src/components/CopyEmailButton.jsx` |
| `src/components/Project.jsx` | `src/components/Project.jsx` |
| `src/components/ProjectDetails.jsx` | `src/components/ProjectDetails.jsx` |
| `src/components/Timeline.jsx` | `src/components/Timeline.jsx` |

### Files unchanged (keep as-is)
- `src/components/Astronaut.jsx`
- `src/components/Card.jsx`
- `src/components/FrameWorks.jsx`
- `src/components/Globe.jsx` (renamed import: `../components/Globe`)
- `src/components/Loader.jsx`
- `src/components/Marquee.jsx`
- `src/components/OrbitingCircles.jsx`
- `src/components/ParallaxBackground.jsx`
- `src/components/Particles.jsx`
- `src/constants/index.js`
- `vite.config.js`, `eslint.config.js`, `package.json`, `index.html`

---

## Design system changes

### Typography
- **Display**: `DM Serif Display` (replaces Funnel Display for headings) — elegant, editorial
- **Body**: `DM Sans` (variable optical sizing) — crisp, modern

### Color tokens (unchanged names, refined values)
- Background darkened slightly to `#04040f` for deeper contrast
- `--color-royal` → `#5c3fd4` (violet, used for CTAs)

### Utility classes added to `index.css`
| Class | Purpose |
|-------|---------|
| `.text-label` | All-caps eyebrow labels above headings |
| `.glass` | Unified glassmorphism card surface |
| `.grad-text` | Violet–purple gradient heading text |
| `.grad-text-cyan` | Cyan–blue gradient (hero flip word) |
| `.hover-lift` | Subtle -1px translateY on hover |
| `.field-input` | Clean form input styling |

### What's improved
- **Navbar**: scroll-aware transparency, cleaner mobile drawer, "Hire me" CTA pill
- **Hero**: serif display headline, two clear CTAs, cleaner copy hierarchy
- **About**: bento grid preserved, glassmorphism unified, label system added
- **Projects**: list-style rows with floating image cursor preview, cleaner modal
- **Timeline**: card-per-entry layout, animated violet progress line
- **Testimonials**: star ratings, refined review cards, wider fade masks
- **Contact**: two-column split (copy + form), inline spinner, cleaner inputs
- **Footer**: reduced noise, WhatsApp CTA card, clean social row

### Animation philosophy
- `ease: [0.22, 1, 0.36, 1]` — custom spring-like cubic bezier throughout
- `whileInView` with `once: true` on all section entries
- Hover states: max 4px lift, 1.03 scale — never flashy
- No looping decorative animations except particle canvas + orbit rings

---

## Globe import note
`About.jsx` imports from `"../components/Globe"` — make sure your globe file
is named `Globe.jsx` (capital G). Rename `globe.jsx` → `Globe.jsx` if needed.