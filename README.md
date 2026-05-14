# Free Igbal Abilov — Advocacy Blog

A modern, editorial-style advocacy blog telling the story of Igbal Abilov,
explaining why his case matters for academic freedom and human rights, and
encouraging visitors to take action.

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS
- Static content (no backend required)

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project structure

```
src/
  app/
    layout.tsx              # Root layout (Header + Footer)
    page.tsx                # Home (/)
    not-found.tsx           # 404
    globals.css             # Tailwind + design tokens
    about/page.tsx          # /about
    blog/page.tsx           # /blog
    blog/[slug]/page.tsx    # /blog/:slug
    take-action/page.tsx    # /take-action
  components/
    Header.tsx              # Sticky top nav
    Footer.tsx              # Site footer
    PagePlaceholder.tsx     # Shared placeholder/hero shell
```

## Design tokens

Defined in `tailwind.config.ts`:

- `paper` — off-white editorial background (`#F8F5F0`)
- `ink` — deep navy/charcoal for text (`#11182B`)
- `ember` — warm red-orange accent (`#D7402B`)
- `font-serif` — Source Serif 4 (headings)
- `font-sans` — Inter (body)

## Development phases

- **Phase 1 (current):** Project setup, layout, routing
- **Phase 2:** Homepage UI (hero, summary cards, why-it-matters, timeline, blog preview, CTA)
- **Phase 3:** Blog system (post data model, list, article layout)
- **Phase 4:** Content pages (About, Take Action, real article copy)
- **Phase 5:** Polish (animations, accessibility, SEO, responsive QA)

## Content rules

- Do not invent detailed facts about the case
- Use placeholder text where real, verified facts are not yet available
- Keep code modular and free of unnecessary complexity
