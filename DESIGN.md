# Design (v2 — full visual redesign)

This replaces the v1 DESIGN.md from the previous pass. That version kept the
"editorial serif + kicker" identity under impeccable's identity-preservation
exception. The user has since said, in their own words, they are not
satisfied with how that looked — so this version treats typography, motion,
and homepage composition as open again, while holding one thing fixed
because it was explicitly requested: **the VISUAILS color scheme does not
change.**

## What's different from v1

- **No smooth scroll, anywhere.** The Lenis-style fixed-position scroll
  hijack (`smoothScroll.js`, `#scroll-content`/`#scroll-spacer`) is removed
  from the layout entirely. The page scrolls natively. This was raised
  twice before ("iets minder smooth scroll") and now explicitly: off.
- **New typography.** `Instrument Serif` + `Inter` are gone. See
  "Typography" below.
- **The kicker is gone as a system.** v1 formalized the small tracked
  uppercase label as a "deliberate, named device." In practice it still
  read as template furniture. Headlines now carry their sections alone.
- **Homepage: photo-led, not copy-led.** Real campaign photography (see
  `IMAGES.md` — 44 real photos, not placeholders) replaces most of the
  homepage's prose. Copy is cut to what's load-bearing: one line per idea,
  not a paragraph.
- **Color is unchanged.** Same near-black / ivory / coral tokens as before
  — this was an explicit, hard constraint from the user, not a design
  choice being reconsidered.

## Visual Theme

Think campaign lookbook or a fashion brand's seasonal drop page, not a SaaS
marketing site. Full-bleed photography carries most sections; text sits
tight and confident beside or over it, never competing with it for
attention. Reference named explicitly: the candid-but-art-directed
streetwear/fashion campaign photography already commissioned for VISUAILS
(see the actual photos in `static/img/`) IS the reference — the site should
look like it was built around these specific photos, not like a template
that photos were dropped into afterward.

## Color (unchanged)

```
--bg:          #0F0E0C
--bg-deep:     #0A0908
--bg-raise:    #151311
--surface:     #171512
--surface-2:   #1D1A17

--ink:         #F4EFE7
--ink-2:       rgba(238,229,217,.74)
--ink-3:       rgba(238,229,217,.55)
--ink-faint:   rgba(238,229,217,.52)   (kept at the contrast-verified value from v1)

--brand / --accent:  #FF5B2E
--accent-2:          #FF6E43
--accent-bright:     #FF8A5C
```

Coral is used more sparingly now than v1's "committed" strategy implied in
practice — against full-bleed photography, a little coral (a button, a
small mark, a line) goes further than a coral-tinted gradient band. Let the
photography carry the warmth; coral is the one confident interruption per
screen (primary CTA, an active state), not ambient decoration.

## Typography

Single family, committed weight/size contrast, per impeccable's "a single
well-chosen family is stronger than a timid pair" guidance:

**Archivo** — a grotesk with a genuine black weight and a condensed cut,
used at two extremes: **Black (900)**, tight tracking, often condensed, for
display headlines — it reads like campaign-poster type, which fits
photography-led pages better than an italic serif ever did. **Regular/
Medium (400/500)** for body copy and UI chrome. Not on impeccable's
reflex-reject list; not the "editorial-typographic" lane v1 was flagged for
(no italic serif, no small-caps metadata rows, no ruled columns).

- Display: `font-weight: 900`, `letter-spacing: -0.02em to -0.03em`,
  `text-transform` left as-is (sentence case, not full caps — full caps at
  display size reads as shouting).
- Small labels / eyebrows, where still used (rare — see below): all-caps,
  `letter-spacing: .08em`, `font-weight: 700`, used only where the layout
  needs a tiny wayfinding mark (e.g. a photo credit line), never as
  decorative section furniture.
- Body: `font-weight: 400`, line-height 1.6 (unchanged from v1's dark-mode
  reasoning — light text on dark needs the extra breathing room).

## Homepage principle

Minimal text, maximum photography. Concretely: every homepage section leads
with a real photo (full-bleed or large-format), and copy is cut to a single
short line — a claim, not an explanation. Where the old homepage had a
paragraph, this one has a sentence; where it had a sentence, this one may
have three words. The "services" and "proof" ideas still need to exist, but
as photo-led moments (a styled scene with a one-line caption + link) not as
card grids with body paragraphs.

## Motion (kept, minus smooth scroll)

- Mask-reveal and clip-path-reveal on photography: kept, they're a photo
  effect, not a scroll gimmick.
- Magnetic CTA button: kept, subtle.
- Kinetic split-text headline: kept, but the headline it's applied to is
  now much shorter (per the homepage principle above), so the effect reads
  as a single confident beat, not a paragraph typing itself in piece by
  piece.
- Smooth scroll: **removed**. Native browser scroll, full stop.
- Film grain overlay: kept — it's a two-line CSS filter, not a performance
  or usability concern, and it's part of the "shot on film" photography
  feel that the actual photos already have.

## Components

- **Buttons**: unchanged shape (pill, gradient-fill primary, ghost
  secondary) — this wasn't part of the complaint.
- **Photo bands**: new default pattern — a full-viewport-width photo with a
  short headline overlaid (bottom-left, on a dark gradient scrim) or set
  beside it in a tight two-column layout on desktop, single column
  (photo-then-headline) on mobile.
- **Product-scene placeholder (`ProductScene.svelte`)**: kept, but now used
  ONLY where no real photo exists (catalog/product-only shots — see
  `IMAGES.md`). Everywhere a real lifestyle/banner/model photo is
  available, use it instead of the SVG icon.

## shadcn-svelte usage (unchanged from v1)

Bespoke CSS for brand-forward pages, shadcn-svelte reserved for
functionally-`product` surfaces (order forms, contact, FAQ accordion,
pricing comparison) — see v1's reasoning, still holds.
