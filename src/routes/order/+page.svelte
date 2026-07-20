<script>
  // VISUAILS — order hub. Ported from static /order.html: a picker linking to
  // the 4 order flows (catalog, lifestyle, video, custom styling). Reuses
  // ProductScene for tile media and app.css utilities (card, card-hover,
  // reveal, cta-band, link-arrow, chip-row) — no local re-declaration.
  import { reveal } from '$lib/actions/reveal.js';
  import ProductScene from '$lib/components/site/ProductScene.svelte';

  const tiles = [
    { href: '/order-catalog', icon: 'bottle', photo: null, badge: '', name: 'Catalog', body: 'Clean, consistent product shots on a plain background. From €19 / visual.', cta: 'Request catalog' },
    { href: '/order-lifestyle', icon: 'jar', photo: '/img/lifestyle-glow-05.webp', badge: '', name: 'Lifestyle', body: 'Styled scenes and optional models. Starting from €35 / visual.', cta: 'Order lifestyle' },
    { href: '/order-video', icon: 'sneaker', photo: null, badge: '', name: 'Video', body: 'Standard product videos from €49. Bigger campaigns on quote.', cta: 'Order a video' },
    { href: '/order-custom', icon: 'bag', photo: '/img/custom-models-02.webp', badge: '', name: 'Custom styling', body: 'Your own look, model or concept — arranged together over WhatsApp.', cta: 'Discuss custom' },
  ];
</script>

<svelte:head>
  <title>Place your order — VISUAILS</title>
  <meta name="description" content="Order catalog, lifestyle or video visuals from VISUAILS — or arrange custom styling. From €19 per visual, delivered in about 24 hours, every result human-reviewed. Prefer to talk? Order via WhatsApp." />
</svelte:head>

<!-- HERO -->
<section class="page-hero">
  <div class="container">
    <span class="eyebrow-page">Order</span>
    <h1 class="display" style="font-size:clamp(2.4rem,5vw,4rem)">Place your order</h1>
    <p class="lead" style="margin-top:1.2rem">Tell us what we're making — we handle it from idea to finished file. Prefer to talk it through? WhatsApp is always an option.</p>
    <div class="flex" style="margin-top:1.8rem">
      <a href="https://wa.me/31625436130?text=Hi%20VISUAILS%2C%20I%27d%20like%20to%20place%20an%20order." class="btn btn-wa btn-lg" target="_blank" rel="noopener">
        <svg class="i" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1.5-4.5A8.38 8.38 0 0 1 3.5 11 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 8.5 8.5z"/></svg>
        Order via WhatsApp <span class="rec-badge">Fastest</span>
      </a>
    </div>
  </div>
</section>

<!-- HUB -->
<section class="section-tight">
  <div class="container">
    <div class="section-head">
      <h2>What should we <em>make</em> for you?</h2>
      <p>Pick a service and hand it over — concept, production and finishing are on us. Pay-per-order, no subscription.</p>
    </div>
    <div class="hub-grid">
      {#each tiles as t}
        <a href={t.href} class="card card-hover reveal pending" use:reveal>
          <div class="hub-media">
            <ProductScene icon={t.icon} photo={t.photo} width="44%" wide />
          </div>
          <h3>{t.name}</h3>
          <p style="margin-top:.4rem;font-size:.95rem;color:var(--ink-3)">{t.body}</p>
          <span class="link-arrow" style="margin-top:.8rem">{t.cta} <svg viewBox="0 0 24 24" class="i"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- CTA BAND -->
<section class="section-tight">
  <div class="container">
    <div class="cta-band reveal pending" use:reveal>
      <h2 class="display" style="font-size:clamp(2.2rem,5vw,3.6rem)">Not sure which fits?</h2>
      <p class="lead" style="margin:1.2rem auto 0;text-align:center">Send us your product and what you're after — we'll point you to the right option.</p>
      <div class="flex" style="justify-content:center;margin-top:2rem">
        <a href="/test-sample" class="btn btn-ghost btn-lg">Try a free sample first</a>
        <a href="https://wa.me/31625436130?text=Hi%20VISUAILS%2C%20I%27m%20not%20sure%20which%20option%20fits%20%E2%80%94%20can%20you%20help%3F" class="btn btn-wa btn-lg" target="_blank" rel="noopener">
          <svg class="i" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1.5-4.5A8.38 8.38 0 0 1 3.5 11 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 8.5 8.5z"/></svg>
          Ask on WhatsApp <span class="rec-badge">Fastest</span>
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  /* Order-hub-only: 4-tile responsive grid + tile media frame. Not shared
     elsewhere, so kept page-scoped rather than added to app.css. */
  .hub-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: clamp(1rem, 2vw, 1.5rem); }
  .hub-media { margin-bottom: 1rem; }
  .hub-media :global(.vis) { border-radius: var(--r-media); }
</style>
