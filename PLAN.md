# UX Portfolio: Plan

Repo: github.com/angelojoywork-sys/ux-portfolio · Stack: Astro + MDX + GSAP · Deploy: Vercel (or Netlify)

## 1. Reference notes

**Landing: ericsin.com**
- Top bar in small monospace caps, 4 columns: name + role / location + local time / section links / contact.
- Hero: giant serif headline, staggered across 3 lines, with a 3D object beneath it.
- One scrolling page. Numbered sections (`/01. OVERVIEW`, `/02. WORK`). Nav links scroll to sections instead of loading new pages.
- Work = list of rows: title + "Product, 2024-2026" label. Footer has local-time clock and social links.

**Case studies: benji.org/stageshow**
- One narrow column (~550px), Inter, small type (14-16px), off-white background, near-black text (#111), gray metadata.
- Tiny "← Index" back link top-left, then title, gray date, prose.
- Prose is interleaved with media (images/video/demos with captions), code blocks, tables, before/after pairs, footnotes. Sections separated by quiet rules.

## 2. Information architecture

Landing page (`/`), single page with anchors:
1. **Hero**: headline + 3D/AI object
2. **/01 Overview**: short intro, current role/focus
3. **/02 Work**: UX and product design case studies (list rows -> case study pages)
4. **/03 About**: story, skills, experience, contact
5. **/04 Archives**: AI experiments, dabbling, smaller projects
6. **Footer**: email, socials, local time

Routes:
- `/work/[slug]`: case study (MDX)
- `/archives/[slug]`: experiment write-up (MDX, lighter template)
- Back link returns to `/#work` and restores scroll position.

## 3. Case study template (MDX)

Frontmatter: title, date, role, timeframe, tags, cover, summary.
Standard blocks (as MDX components):
- `<Figure>` image/video with caption
- `<Pair>` before/after
- `<Gallery>` grid
- `<Steps>` numbered process strip
- `<Callout>`, `<Code>`, `<Table>`, `<Footnote>`
- Next/previous project footer

Suggested story arc: Context -> Problem -> Role -> Process -> Solution -> Outcome -> Reflection.

## 4. Design system

- Type: serif display for hero (candidates: Instrument Serif, Playfair Display, GT Super-style alternatives); Inter for body; monospace for nav/labels (JetBrains Mono / Geist Mono).
- Color: off-white background, near-black text, one accent. Dark mode later.
- Tokens in CSS variables. Max reading width 550-600px on case studies; landing uses a 12-col grid.
- Motion (GSAP): staggered hero headline reveal, subtle scroll reveals, smooth anchor scroll, respect `prefers-reduced-motion`.

## 5. Build phases

1. **Scaffold**: Astro + MDX + GSAP, folder structure, tokens, fonts, layout, deploy hookup.
2. **Landing**: nav bar, hero, Overview/Work/About/Archives sections, footer with live local time, anchor scrolling and active-section highlight.
3. **Case study template**: layout + MDX components, one dummy case study to validate.
4. **Hero object**: generate a signature 3D/AI object (image or short looping video, transparent background), then optimize.
5. **Content**: real case studies, About copy, Archives entries.
6. **Polish**: responsive, accessibility, performance (images, video), SEO/OG images, analytics.
7. **Launch**: custom domain, final review.

## 6. Open items (needed from you)

- Name, role/title, location, contact email, socials (LinkedIn etc.)
- List of case studies for Work, with the one to build first
- Existing assets (screens, videos) per project
- Hero object idea (e.g. an object that represents you)
- Domain name, if any
