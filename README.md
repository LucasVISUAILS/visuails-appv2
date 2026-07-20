# VISUAILS — SvelteKit rebuild

Full restart of the SvelteKit migration, per `/impeccable` + shadcn-svelte.
Read `PRODUCT.md` and `DESIGN.md` first — every design decision below traces
back to one of those two files.

## Why a restart

The previous SvelteKit pass (homepage + lifestyle pages) worked and shipped
bug-fixed, but it was built ad hoc, page by page, without a written product
brief or design system doc. This rebuild starts from `/impeccable init`
instead: PRODUCT.md captures who this is for and why, DESIGN.md captures the
visual system with contrast verified rather than assumed, and shadcn-svelte
is wired in from day one (via `components.json` + the token bridge in
`src/app.css`) instead of bolted on later.

The visual identity itself — near-black + coral, Instrument Serif + Inter,
the mask/clip-reveal motion system — is **kept**, not reinvented. It was
already shipped and validated; DESIGN.md explains why identity-preservation
wins over a from-scratch aesthetic pass.

## Local setup (same flow as before)

1. Install [Node.js](https://nodejs.org) (LTS) if you haven't already.
2. Copy this whole folder to your machine (e.g. `visuails-app-v2`, as a
   sibling of your existing `visuails-app` — nothing here overwrites that).
3. Open a terminal in the folder and run:
   ```
   npm install
   npm run dev
   ```
4. Open `http://localhost:5173`.
5. Copy your product photos into `static/img/` (same filenames as before —
   `banners-01.webp`, `lifestyle-glow-01.webp`, `lifestyle-flash-02.webp`,
   `custom-models-01.webp`, plus the full `lifestyle-*` set once the style
   pages are ported over — see Roadmap below). Until then the pages that
   reference a missing photo will just show a broken-image icon; nothing
   else breaks.

## Adding shadcn-svelte components

`components.json` is already configured (New York style, tokens wired to
the VISUAILS palette in `src/app.css`). To add a component:

```
npx shadcn-svelte@latest add accordion
```

Run `npx shadcn-svelte@latest init` first if the CLI asks — it will detect
`components.json` and should need no new answers. Because the CLI has real
network access on your machine (this sandbox doesn't), it will always fetch
whatever's current — if its output disagrees with anything hand-authored
here, trust the CLI's output and tell me so I can reconcile `app.css`.

Per DESIGN.md, shadcn is for the *functional* surfaces (order forms,
contact form, FAQ accordion, pricing comparison) — the marketing pages stay
bespoke editorial CSS.

## What's built in this pass

- `PRODUCT.md`, `DESIGN.md` — the written brief and design system.
- Full scaffold: SvelteKit + adapter-static, Tailwind, shadcn-svelte config.
- `src/app.css` — design tokens (with the `--ink-faint` contrast fix — see
  DESIGN.md "Color"), base styles, shared page-chrome utilities, the full
  motion system.
- `src/lib/actions/*` — reveal, magnetic, smoothScroll, splitText, compare.
  Carried over unchanged: this logic was already tested and, for `compare`,
  the subject of a bug fix in the previous pass.
- `src/lib/components/site/ProductScene.svelte` — the photo/placeholder
  component.
- `src/routes/+layout.svelte` — header, nav, footer, grain, convbar.
- `src/routes/+page.svelte` — homepage, rebuilt: no more locally-duplicated
  utility CSS (everything shared now lives in `app.css` once), and the
  kicker label is used more deliberately (removed from the before/after
  section — see DESIGN.md "Kicker system").

## Roadmap (not yet built)

1. Lifestyle hub + the 4 style pages (dunes/flash/glow/phone-made) —
   already built once, just needs re-porting into this clean base plus a
   shadcn `Accordion`/`Tabs` pass where it earns its place.
2. Catalog + video service pages.
3. Models, custom-models, pricing, gallery.
4. Functional pages — shadcn does the heavy lifting here: order flows
   (form + validation), test-sample, contact, FAQ (`Accordion`).
5. Static/legal pages (about, how-it-works, privacy, terms, cookie-policy).
6. Full parity + accessibility pass against PRODUCT.md's WCAG AA target.

Each phase gets delivered the same way the last migration was: built here,
zipped or pushed straight to your machine, you run it locally and report
back what you see (this sandbox has no network access to run/verify a
SvelteKit build itself).
