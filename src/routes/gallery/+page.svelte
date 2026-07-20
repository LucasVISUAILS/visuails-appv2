<script>
  // VISUAILS — Gallery. Ported from /tmp/visuails-web/gallery.html.
  // Style-sample grid with a category filter. Uses ProductScene placeholders
  // (photo prop only where the source had a real background-image url);
  // no lightbox/dialog — items are decorative, not links, matching the
  // source (the vis tiles in gallery.html weren't wrapped in <a>).
  import { reveal } from '$lib/actions/reveal.js';
  import ProductScene from '$lib/components/site/ProductScene.svelte';

  const items = [
    { tag: 'catalog', icon: 'bottle', width: '40%', badge: 'Catalog · Classic' },
    { tag: 'lifestyle', icon: 'jar', width: '46%', badge: 'Lifestyle · Glow', photo: '/img/lifestyle-glow-04.webp' },
    { tag: 'video', icon: 'sneaker', width: '56%', badge: 'Video · Motion' },
    { tag: 'catalog', icon: 'bag', width: '46%', badge: 'Catalog · Custom' },
    { tag: 'lifestyle', icon: 'bottle', width: '42%', badge: 'Lifestyle · Fresh', photo: '/img/lifestyle-dunes-01.webp' },
    { tag: 'catalog', icon: 'jar', width: '46%', badge: 'Catalog · Clean' },
    { tag: 'video', icon: 'bag', width: '44%', badge: 'Video · Loop' },
    { tag: 'lifestyle', icon: 'sneaker', width: '56%', badge: 'Lifestyle · Flash', photo: '/img/lifestyle-flash-04.webp' },
    { tag: 'catalog', icon: 'bottle', width: '42%', badge: 'Catalog · Studio' },
    { tag: 'lifestyle', icon: 'jar', width: '46%', badge: 'Lifestyle · Warm', photo: '/img/lifestyle-phone-made-11.webp' },
    { tag: 'video', icon: 'bottle', width: '40%', badge: 'Video · Reveal' },
    { tag: 'catalog', icon: 'bag', width: '44%', badge: 'Catalog · Minimal' },
  ];

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'catalog', label: 'Catalog' },
    { key: 'lifestyle', label: 'Lifestyle' },
    { key: 'video', label: 'Video' },
  ];

  let active = $state('all');
  let filtered = $derived(active === 'all' ? items : items.filter((i) => i.tag === active));
</script>

<svelte:head>
  <title>VISUAILS — A look at the styles we produce</title>
  <meta name="description" content="Style samples from VISUAILS across catalog, lifestyle and video. Get a feel for the range — then start with a free test sample and see your own product transformed." />
</svelte:head>

<section class="page-hero">
  <div class="container">
    <p class="eyebrow-page">Gallery</p>
    <h1 class="display" style="font-size:clamp(2.4rem,5vw,4rem)">A look at the styles we produce</h1>
    <p class="lead" style="margin-top:1.2rem">A feel for the range — clean catalog, editorial lifestyle, and video. New brand? Start with a free test sample and see your own product transformed.</p>
    <div class="flex" style="margin-top:1.8rem">
      <a href="/test-sample" class="btn btn-primary btn-lg">Free test sample</a>
      <a href="/order" class="btn btn-ghost btn-lg">Order now</a>
    </div>
  </div>
</section>

<!-- FILTERABLE GALLERY -->
<section>
  <div class="container">
    <p class="pill-note" style="margin-bottom:1.4rem">These are style samples that show the range we produce — not client case studies. We're a new studio, so nothing here is dressed up as someone else's results.</p>

    <div class="filter-bar" role="group" aria-label="Filter styles">
      {#each filters as f}
        <button type="button" aria-pressed={active === f.key} onclick={() => (active = f.key)}>{f.label}</button>
      {/each}
    </div>

    <div class="gallery-grid">
      {#each filtered as item (item.badge)}
        <div class="reveal pending" use:reveal>
          <ProductScene photo={item.photo} icon={item.icon} width={item.width} badge={item.badge} />
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CLOSING CTA -->
<section>
  <div class="container">
    <div class="cta-band reveal pending" use:reveal>
      <h2 class="display" style="font-size:clamp(2.2rem,5vw,3.6rem)">See your own product<br />in <em>this range.</em></h2>
      <p class="lead" style="margin:1.2rem auto 0;text-align:center">The best way to judge the quality is on your own product. Start with a free test sample — one per business, no card needed.</p>
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
  /* Gallery-page-only patterns: filter pills + auto-fill tile grid. */
  .pill-note { display: inline-flex; align-items: center; gap: .5rem; padding: .45rem 1rem; border-radius: var(--r-pill); border: 1px solid var(--line); color: var(--ink-3); font-size: .82rem; font-weight: 500; }

  .filter-bar { display: flex; flex-wrap: wrap; gap: .6rem; margin-bottom: 1.8rem; }
  .filter-bar button { font: inherit; cursor: pointer; color: var(--ink-2); background: transparent; border: 1px solid var(--line); border-radius: var(--r-pill); padding: .5rem 1.1rem; font-size: .9rem; font-weight: 500; transition: border-color var(--dur) var(--ease), color var(--dur) var(--ease), background var(--dur) var(--ease); }
  .filter-bar button:hover { color: var(--ink); border-color: var(--accent-line); }
  .filter-bar button[aria-pressed="true"] { color: #fff; background: var(--accent); border-color: transparent; }

  .gallery-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1.1rem; }
</style>
