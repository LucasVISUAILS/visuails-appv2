# Real photography available in static/img/

44 real, optimized photos (all `.webp`) — this is actual VISUAILS-style
campaign photography (candid, cinematic, editorial — think a fashion
lookbook, not stock photos). Use these generously; they are the product.
Do NOT fall back to `ProductScene` SVG-icon placeholders for lifestyle,
banner, or model imagery when a real photo exists below — placeholders are
only still appropriate for literal "plain product on white" shots (catalog
pages, before/after "before" states) where no real photo applies.

- **`banners-01.webp` … `banners-08.webp`** (8) — general campaign / hero
  photography, moody and cinematic, not tied to one lifestyle style. Best
  for the homepage hero, page heroes, and anywhere a strong full-bleed
  opening image is needed.
- **`lifestyle-dunes-01.webp`, `-02.webp`** (2) — the "Dunes" style: warm,
  sun-washed, quiet.
- **`lifestyle-flash-01.webp` … `-08.webp`** (8) — the "Flash" style:
  hard on-camera flash, night, high contrast.
- **`lifestyle-glow-01.webp` … `-06.webp`** (6) — the "Glow" style: golden
  hour, warm bloom.
- **`lifestyle-phone-made-01.webp` … `-14.webp`** (14) — the "Phone-made"
  style: candid, natural daylight, unstaged-looking.
- **`model-01.webp`, `model-02.webp`, `model-03.webp`** (3) — close, direct
  portrait shots. Use for the Models / Custom Models pages and anywhere a
  face carries the section.
- **`custom-models-01.webp`, `-02.webp`, `-03.webp`** (3) — same 3 portraits,
  duplicated at a larger crop for use as full-bleed section backgrounds
  (the homepage's models section, custom-models hero, etc.) — pick
  whichever of the two versions fits the aspect ratio of the slot you're
  filling.

There is **no dedicated "clean product on white" catalog photography** in
this set (everything here is lifestyle/campaign/portrait) — for catalog
pages specifically, keep using the `ProductScene` SVG-icon placeholder
system (`icon="bottle|sneaker|jar|bag"`), since that's a closer match to
"your product, shot cleanly" than repurposing a moody lifestyle photo would
be. For video pages, reusing `banners-*` or a relevant `lifestyle-*` still
as a thumbnail/poster image is fine and encouraged.

Any `/img/` path NOT in the list above will 404 in production — svelte.config.js
is configured to warn (not fail the build) on a missing `/img/` asset, but
don't rely on that; only reference filenames that are actually listed here.
