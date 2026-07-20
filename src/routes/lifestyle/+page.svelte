<script>
  // VISUAILS — lifestyle hub. v2 redesign: photo-led, one eyebrow max,
  // real style photography instead of ProductScene wherever it exists
  // (styles.js already carries the correct real photo per style).
  import { reveal } from '$lib/actions/reveal.js';
  import { magnetic } from '$lib/actions/magnetic.js';
  import { compare } from '$lib/actions/compare.js';
  import ProductScene from '$lib/components/site/ProductScene.svelte';
  import { styles } from '$lib/data/styles.js';

  const marqueeItems = [
    { src: '/img/lifestyle-phone-made-06.webp', label: 'Phone-made' },
    { src: '/img/lifestyle-glow-03.webp', label: 'Glow' },
    { src: '/img/lifestyle-flash-05.webp', label: 'Flash' },
    { src: '/img/lifestyle-dunes-02.webp', label: 'Dunes' },
    { src: '/img/banners-02.webp', label: 'Campaign' },
  ];
</script>

<svelte:head>
  <title>Lifestyle Images — your product in scenes that sell | VISUAILS</title>
  <meta name="description" content="Real, styled lifestyle scenes with natural lighting — and optional consistent models. High-res, e-commerce ready and human-reviewed, delivered in ~24 hours. From €35 per visual." />
</svelte:head>

<section class="page-hero">
  <div class="container">
    <span class="eyebrow-page">Lifestyle Images</span>
    <h1 class="display" style="font-size:clamp(2.4rem,5vw,4rem);margin-top:1rem">Your product, in scenes that sell</h1>
    <p class="lead" style="margin-top:1.2rem">Four signature styles. From €35 per visual.</p>
    <div class="flex" style="margin-top:1.8rem">
      <span class="magnet-wrap" use:magnetic><span class="magnet-inner"><a href="/order-lifestyle" class="btn btn-primary btn-lg">Order lifestyle visuals</a></span></span>
      <a href="/pricing" class="btn btn-ghost btn-lg">See pricing</a>
      <a href="https://wa.me/31625436130?text=Hi%20VISUAILS%2C%20I%27d%20like%20to%20order%20lifestyle%20visuals%20for%20my%20products." class="btn btn-wa" target="_blank" rel="noopener">
        <svg class="i" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1.5-4.5A8.38 8.38 0 0 1 3.5 11 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 8.5 8.5z"/></svg>
        WhatsApp <span class="rec-badge">Fastest</span>
      </a>
    </div>
    <div class="trust-row" style="margin-top:2.4rem">
      <span class="trust-item"><strong>From €35</strong> per visual</span>
      <span class="trust-item"><strong>~24h</strong> delivery</span>
      <span class="trust-item"><strong>100%</strong> human-reviewed</span>
    </div>
  </div>
</section>

<!-- Style cards — the photo does the pitching -->
<section>
  <div class="container">
    <h2 style="margin-bottom:2rem">Four moods. Pick yours.</h2>
    <div class="grid grid-2">
      {#each styles as s}
        <a href="/lifestyle/{s.slug}" class="reveal pending" use:reveal style="display:block">
          <div class="photo-band tall">
            <img src={s.cardPhoto} alt="{s.name} lifestyle example" loading="lazy" />
            <div class="scrim"></div>
            <div class="caption">
              <h3 style="color:#fff;font-size:1.6rem"><em>{s.name}</em> &rarr;</h3>
              <p style="font-size:.92rem">{s.tagline} &middot; €35 / visual</p>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- Models teaser -->
<section class="section-tight">
  <div class="container">
    <div class="photo-split reveal pending" use:reveal>
      <div class="photo-split-media">
        <img src="/img/model-02.webp" alt="A VISUAILS model, styled consistently across a campaign" loading="lazy" />
      </div>
      <div>
        <h2>Add a consistent <em>model.</em></h2>
        <p class="lead" style="margin-top:1rem">Same face, across your whole collection — or let us choose one that fits.</p>
        <div class="flex" style="margin-top:1.4rem">
          <a href="/models" class="btn btn-primary">Explore models</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Before / after -->
<section class="section-tight">
  <div class="container">
    <h2 style="text-align:center">One photo in. A styled scene out.</h2>
    <div style="max-width:640px;margin:2rem auto 0;text-align:center">
      <div class="reveal-clip-wrap" use:reveal={{ variant: 'clip' }}>
        <div class="reveal-clip-inner">
          <div class="ba" use:compare aria-label="Before and after: a plain product photo transformed into a styled lifestyle visual">
            <div class="ba-layer ba-before-scene" aria-hidden="true"><ProductScene icon="jar" width="46%" /></div>
            <div class="ba-layer ba-after" aria-hidden="true"><img src="/img/lifestyle-glow-05.webp" alt="The same product in a styled Glow-lit scene" /></div>
            <span class="ba-tag tag-before">Before</span>
            <span class="ba-tag tag-after">After</span>
            <div class="ba-handle" aria-hidden="true"></div>
            <div class="ba-knob" aria-hidden="true">
              <svg class="i" viewBox="0 0 24 24" style="width:18px;height:18px"><path d="M8 7l-4 5 4 5M16 7l4 5-4 5"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Marquee — a fast run of the real range -->
<section class="section-tight">
  <div class="container">
    <div class="section-head" style="margin-bottom:1.8rem">
      <h2>The range, in motion</h2>
      <p><a href="/gallery" class="link-arrow" style="font-size:1rem">See the full gallery <svg viewBox="0 0 24 24" class="i"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></p>
    </div>
  </div>
  <div class="marquee">
    <div class="marquee-track">
      {#each marqueeItems as m}
        <div class="marquee-item">
          <img src={m.src} alt="{m.label} lifestyle example" loading="lazy" style="width:100%;height:100%;object-fit:cover" />
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Closing CTA -->
<section>
  <div class="container">
    <div class="cta-band reveal pending" use:reveal>
      <h2 class="display" style="font-size:clamp(2.2rem,5vw,3.6rem)">Put your product<br>in a scene that sells.</h2>
      <div class="flex" style="justify-content:center;margin-top:2rem">
        <span class="magnet-wrap" use:magnetic><span class="magnet-inner"><a href="/order-lifestyle" class="btn btn-primary btn-lg">Order lifestyle visuals</a></span></span>
        <a href="/models" class="btn btn-ghost btn-lg">Explore models</a>
        <a href="https://wa.me/31625436130?text=Hi%20VISUAILS%2C%20I%27d%20like%20to%20talk%20about%20lifestyle%20visuals%20for%20my%20brand." class="btn btn-wa" target="_blank" rel="noopener">
          <svg class="i" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1.5-4.5A8.38 8.38 0 0 1 3.5 11 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 8.5 8.5z"/></svg>
          WhatsApp
        </a>
      </div>
    </div>
  </div>
</section>
