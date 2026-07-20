# Design

## Visual Theme

Studio Editorial — a warm near-black studio, not a cold dark-mode default. The site reads like a print campaign for a photography studio: generous negative space, one full-bleed photo per idea, a single italic serif doing the emotional work, a coral accent used sparingly enough that it still reads as a decision. This is an **existing, shipped identity** (validated across the static site and the SvelteKit homepage/lifestyle pages already in production) — this rebuild preserves it rather than re-deriving it from scratch. `Instrument Serif` and `Inter` both appear on impeccable's font reflex-reject list in isolation, and the kicker/eyebrow pattern is a flagged AI-grammar tell when used as default scaffolding — both are kept here under the skill's identity-preservation exception, with the kicker specifically formalized below as a deliberate, named, sparingly-used system rather than default per-section grammar.

Reference points named explicitly (per impeccable's "name a real reference" rule): a Aesop / Cereal-magazine-style product editorial for the palette restraint and photography-first layout; the coral-on-near-black commitment is closer to a Mailchimp-yellow full-palette confidence than a Stripe-purple restraint — the accent is meant to be noticed, not hedged.

## Color

Strategy: **Committed** — one saturated accent (coral) carries CTAs, glows, and small marks against a near-black field; the field itself is a warm near-black, not neutral gray, so the whole page (not just the accent) carries the brand's warmth.

```
--bg:          #0F0E0C   near-black, warm (not pure #000)
--bg-deep:     #0A0908   footer / deepest recess
--bg-raise:    #151311   raised surface
--surface:     #171512   card surface
--surface-2:   #1D1A17   hover / raised-further surface

--ink:         #F4EFE7   primary text (warm ivory, not pure white)
--ink-2:       rgba(238,229,217,.74)
--ink-3:       rgba(238,229,217,.55)   verified 5.2:1 on --bg
--ink-faint:   rgba(238,229,217,.52)   RAISED from .4 → .52; .4 measured 3.3:1 (fails AA
                                        normal text), .52 measures ~4.6:1

--brand / --accent:  #FF5B2E
--accent-2:          #FF6E43
--accent-bright:     #FF8A5C
--accent-soft:       rgba(255,91,46,.12)
--accent-line:       rgba(255,91,46,.34)
--success:           #63C79A

--line:         rgba(244,239,231,.1)
--line-strong:  rgba(244,239,231,.18)
```

Contrast was checked pairwise against `--bg`, not assumed: `--ink-2` and `--ink-3` both clear 4.5:1; `--ink-faint` did not at its original .4 opacity (3.3:1) and was raised to .52 (~4.6:1) — it now only carries small/secondary text (footer legal line, badges), never a CTA or a heading.

shadcn-svelte's HSL bridge tokens (`--background`, `--foreground`, `--primary`, …) are derived from the same palette above so any shadcn primitive added later (dialogs, selects, accordions, form inputs) inherits this identity instead of shadcn's default slate theme. See `src/app.css`.

## Typography

- Display: `Instrument Serif` italic — headlines and any word that needs emotional weight (`<em>` inline). Kept as committed identity (see Visual Theme).
- Body: `Inter` — UI chrome, paragraphs, labels. Kept as committed identity.
- Scale is fluid (`clamp()`), ratio well above 1.25× between steps: hero 3–5.6rem, h1 2.5–4.2rem, h2 2.1–3.3rem, h3 1.2–1.45rem, body 1.0625rem.
- Line-height on the ivory-on-near-black body copy is 1.6–1.62 (above the 1.5 default) to compensate for light-on-dark's lighter apparent weight, per impeccable's dark-mode type guidance.

## Kicker system (formalized, not default scaffolding)

The small tracked uppercase label (`.kicker`, `.eyebrow-page`) is a **named, deliberate** VISUAILS device — a single coral dot + label that marks "a new idea is starting," used the way a magazine spread uses a running head, not as automatic per-section furniture. Rule going forward: at most once per fold, skipped on sections whose headline is strong enough to stand alone (this rebuild removes it from 1–2 homepage sections that had it out of habit rather than need — e.g. the transformation/proof section now opens straight on the headline).

## Components

- **Buttons**: pill radius, gradient-fill primary (`#FF7346`→`#FF5B2E`), ghost (bordered) secondary, WhatsApp variant with brand-green icon. Lift 2px + brighten on hover, no bounce.
- **Product-scene placeholder (`.vis` / `ProductScene.svelte`)**: bright studio-gradient card with a floating SVG product icon and a bottom "floor" shadow, used until a real photo exists for that slot; swaps to the real photo automatically via a `photo` prop, no separate component.
- **Cards**: flat surface + 1px hairline border + border-brighten on hover. No side-stripe accents, no nested cards, no drop shadows standing in for depth (depth comes from the coral radial glow behind CTA bands instead).
- **Before/after slider (`.ba` / `use:compare`)**: drag or arrow-key controlled, real interaction (not a CSS-only hover trick) — this was a shipped bug in the previous pass (missing on `/lifestyle`) and is being kept as a first-class, always-wired component in this rebuild.

## Layout

- `--container: 1240px`, fluid inline padding via `clamp()`.
- Photography-led sections (hero, mask-reveal "photo moment," sticky-pinned models section) get full-bleed treatment with no container constraint; copy-led sections sit inside the 1240px container.
- Section rhythm varies deliberately: tight sections (`.section-tight`) between dense content blocks, full `section` padding around photography and CTA bands — not a single uniform spacing value repeated top to bottom.

## Motion

One well-orchestrated set of techniques, reused deliberately rather than invented per-page: Lenis-style smoothed scroll (ease 0.26), mask-reveal on hero photography, clip-path reveal on before/after proof, kinetic split-text on the hero headline, magnetic CTA buttons, a fixed film-grain overlay. Every technique degrades to its fully-visible static state under `prefers-reduced-motion` or missing `IntersectionObserver`/`requestAnimationFrame` support — verified in the action source, not assumed.

## shadcn-svelte usage

Bespoke editorial CSS stays the default for brand-forward, photography-led surfaces (home, lifestyle, catalog, video, models — anywhere the page's job is to *sell a feeling*). shadcn-svelte is reserved for surfaces that are functionally register `product` even though they live on a `brand` site: order forms, the contact form, the FAQ accordion, pricing plan comparison, and any dialog/toast/select the checkout-style flows need. Those components inherit the palette above via the HSL bridge in `app.css`, so they read as VISUAILS, not as default shadcn.
