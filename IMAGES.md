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
- **`custom-models-04.webp`, `-05.webp`** (2) — two more real custom-model
  examples (added later), square-cropped like `-01`–`-03`. Used in the
  "Real output, not a mockup" grid on `/custom-models`.
- **`model-aaron.webp`, `model-ava.webp`, `model-dana.webp`,
  `model-elias.webp`, `model-fabi.webp`, `model-lisa.webp`,
  `model-maegan.webp`, `model-rae.webp`, `model-ryan.webp`,
  `model-seme.webp`** (10) — real, named standard-model headshots (square
  crop, 480x480), one per model in the `/models` "Standard models" roster.
  These replaced the earlier placeholder letter-monogram avatars.
- **`catalog-before.webp`, `catalog-after.webp`** (2) — a real before/after
  pair for the `/catalog` page's compare slider: a raw phone photo of a
  garment on a table (before) and the same garment as a clean flat-lay
  catalog shot (after). This is the one real "clean product" pair
  available — use it instead of `ProductScene` wherever this exact
  before/after moment appears.
- **`logo-mark.png`** — the orange VISUAILS "V" mark, transparent
  background, used small (~20px) next to the wordmark in the header and
  footer brand links. Also the source for the favicon set in `static/`
  (`favicon.ico`, `favicon-32/48/192/512.png`, `apple-touch-icon.png`) —
  orange mark on white, per brand.

Aside from catalog's before/after pair above, there is still **no dedicated
"clean product on white" catalog photography** in this set (everything else
here is lifestyle/campaign/portrait) — for other catalog moments, keep
using the `ProductScene` SVG-icon placeholder system
(`icon="bottle|sneaker|jar|bag"`), since that's a closer match to "your
product, shot cleanly" than repurposing a moody lifestyle photo would be.
For video pages, reusing `banners-*` or a relevant `lifestyle-*` still as a
thumbnail/poster image is fine and encouraged.

Any `/img/` path NOT in the list above will 404 in production — svelte.config.js
is configured to warn (not fail the build) on a missing `/img/` asset, but
don't rely on that; only reference filenames that are actually listed here.
