<script>
  // VISUAILS — Gallery. v2 redesign: almost entirely the real photo library
  // in a grid (see DESIGN.md "Homepage principle" / IMAGES.md) instead of
  // ProductScene placeholders. Filter categories now map to the real photo
  // categories that exist (banners + the 4 lifestyle styles) rather than the
  // old catalog/lifestyle/video service split, since there's no real catalog
  // photography in the library (see IMAGES.md).
  import { reveal } from '$lib/actions/reveal.js';

  const photos = [
    ...Array.from({ length: 8 }, (_, i) => ({ src: `/img/banners-0${i + 1}.webp`, tag: 'campaign', alt: `Campaign photography ${i + 1}` })),
    { src: '/img/lifestyle-dunes-01.webp', tag: 'dunes', alt: 'Dunes-style lifestyle visual' },
    { src: '/img/lifestyle-dunes-02.webp', tag: 'dunes', alt: 'Dunes-style lifestyle visual' },
    ...Array.from({ length: 8 }, (_, i) => ({ src: `/img/lifestyle-flash-0${i + 1}.webp`, tag: 'flash', alt: `Flash-style lifestyle visual ${i + 1}` })),
    ...Array.from({ length: 6 }, (_, i) => ({ src: `/img/lifestyle-glow-0${i + 1}.webp`, tag: 'glow', alt: `Glow-style lifestyle visual ${i + 1}` })),
    ...Array.from({ length: 14 }, (_, i) => ({ src: `/img/lifestyle-phone-made-${String(i + 1).padStart(2, '0')}.webp`, tag: 'phone-made', alt: `Phone-made-style lifestyle visual ${i + 1}` })),
  ].map((p, i) => ({ ...p, wide: i % 7 === 0 }));

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'campaign', label: 'Campaign' },
    { key: 'dunes', label: 'Dunes' },
    { key: 'flash', label: 'Flash' },
    { key: 'glow', label: 'Glow' },
    { key: 'phone-made', label: 'Phone-made' },
  ];

  let active = $state('all');
  let filtered = $derived(active === 'all' ? photos : photos.filter((p) => p.tag === active));
</script>

<svelte:head>
  <title>VISUAILS — A look at the styles we produce</title>
  <meta name="description" content="The real VISUAILS photo library — campaign, Dunes, Flash, Glow and Phone-made lifestyle visuals. Get a feel for the range, then start with a free test sample." />
</svelte:head>

<section class="page-hero">
  <div class="container">
    <p class="eyebrow-page">Gallery</p>
    <h1 class="display" style="font-size:clamp(2.4rem,5vw,4rem)">A look at the styles we produce</h1>
    <div class="flex" style="margin-top:1.8rem">
      <a href="/test-sample" class="btn btn-primary btn-lg">Free test sample</a>
      <a href="/order" class="btn btn-ghost btn-lg">Order now</a>
    </div>
  </div>
</section>

<!-- THE LIBRARY -->
<section>
  <div class="container">
    <div class="filter-bar" role="group" aria-label="Filter styles">
      {#each filters as f}
        <button type="button" aria-pressed={active === f.key} onclick={() => (active = f.key)}>{f.label}</button>
      {/each}
    </div>

    <div class="photo-grid">
      {#each filtered as p (p.src)}
        <img src={p.src} alt={p.alt} loading="lazy" class={p.wide ? 'wide' : ''} />
      {/each}
    </div>
  </div>
</section>

<!-- CLOSING CTA -->
<section>
  <div class="container">
    <div class="cta-band reveal pending" use:reveal>
      <h2 class="display" style="font-size:clamp(2.2rem,5vw,3.6rem)">See your own product<br />in <em>this range.</em></h2>
      <p class="lead" style="margin:1.2rem auto 0;text-align:center">Start with a free test sample — one per business, no card needed.</p>
      <div class="flex" style="justify-content:center;margin-top:2rem">
        <a href="/test-sample" class="btn btn-primary btn-lg">Free test sample</a>
        <a href="/order" class="btn btn-ghost btn-lg">Order now</a>
        <a href="https://wa.me/31625436130?text=Hi%20VISUAILS%2C%20I%27d%20like%20to%20see%20a%20sample%20for%20my%20product." class="btn btn-wa" target="_blank" rel="noopener">
          <svg class="i" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1.5-4.5A8.38 8.38 0 0 1 3.5 11 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 8.5 8.5z"/></svg>
          WhatsApp
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  /* Gallery-page-only patterns: filter pills. The tile grid itself is the
     shared .photo-grid pattern from app.css (see DESIGN.md "Components"). */
  .filter-bar { display: flex; flex-wrap: wrap; gap: .6rem; margin-bottom: 1.8rem; }
  .filter-bar button { font: inherit; cursor: pointer; color: var(--ink-2); background: transparent; border: 1px solid var(--line); border-radius: var(--r-pill); padding: .5rem 1.1rem; font-size: .9rem; font-weight: 500; transition: border-color var(--dur) var(--ease), color var(--dur) var(--ease), background var(--dur) var(--ease); }
  .filter-bar button:hover { color: var(--ink); border-color: var(--accent-line); }
  .filter-bar button[aria-pressed="true"] { color: #fff; background: var(--accent); border-color: transparent; }
</style>
