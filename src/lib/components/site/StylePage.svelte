<script>
  // VISUAILS — shared template for the 4 lifestyle style pages
  // (Dunes / Flash / Glow / Phone-made). One component, driven by the
  // `style` data object from $lib/data/styles.js — see
  // src/routes/lifestyle/[slug]/+page.svelte for how it's wired up.
  //
  // v2 redesign: photo-led, one eyebrow max (the back-link in the hero),
  // no smooth scroll, copy cut hard. `style.heroPhoto` / `style.cardPhoto` /
  // `style.grid[].photo` already point at the real, style-correct photos
  // (dunes/flash/glow/phone-made) via styles.js — used directly, no
  // generic placeholders where a real shot exists.
  import { reveal } from '$lib/actions/reveal.js';
  import { magnetic } from '$lib/actions/magnetic.js';
  import ProductScene from './ProductScene.svelte';

  let { style } = $props();
</script>

<svelte:head>
  <title>{style.name} — Lifestyle style | VISUAILS</title>
  <meta name="description" content="{style.name}: a signature VISUAILS lifestyle style. From €35 / visual. Produced in about 24 hours, every image checked by hand." />
</svelte:head>

<section class="page-hero">
  <div class="container">
    <p class="eyebrow-page"><a href="/lifestyle" style="color:inherit">&larr; Lifestyle styles</a></p>
    <h1 class="display">{style.name}.</h1>
    <p style="margin-top:1rem;font-family:var(--font-display);font-size:clamp(1.35rem,2.3vw,1.9rem);color:var(--ink);max-width:34ch;line-height:1.25">{style.tagline}</p>
    <div class="flex" style="margin-top:1.8rem">
      <span class="magnet-wrap" use:magnetic><span class="magnet-inner"><a href="/order-lifestyle" class="btn btn-primary btn-lg">Order {style.name}</a></span></span>
      <a href="https://wa.me/31625436130?text=Hi%20VISUAILS%2C%20I%27d%20like%20to%20talk%20about%20the%20{style.name}%20style." class="btn btn-wa" target="_blank" rel="noopener">
        <svg class="i" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1.5-4.5A8.38 8.38 0 0 1 3.5 11 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 8.5 8.5z"/></svg>
        WhatsApp
      </a>
    </div>
    <div class="trust-row" style="margin-top:2rem">
      <span class="trust-item"><strong>€35</strong> / visual</span>
      <span class="trust-item"><strong>~24h</strong> delivery</span>
      <span class="trust-item"><strong>100%</strong> checked by hand</span>
    </div>
  </div>
</section>

<!-- Media band — mask reveal on the signature photo -->
<section class="section-tight">
  <div class="container">
    <div class="reveal-mask" use:reveal={{ variant: 'mask' }} style="aspect-ratio:21/10;border-radius:var(--r-media);overflow:hidden">
      <div class="rm-inner" style="background-image:url('{style.heroPhoto}')"></div>
    </div>
  </div>
</section>

<!-- Mood — photo + one line, not a wall of text -->
<section class="section-tight">
  <div class="container">
    <div class="photo-split reveal pending" use:reveal>
      <div class="photo-split-media">
        <img src={style.grid[0].photo} alt="{style.name}-style example" loading="lazy" />
      </div>
      <div>
        <h2>What {style.name} <em>feels</em> like.</h2>
        <p class="lead" style="margin-top:1rem">{style.moodParagraphs[0]}</p>
      </div>
    </div>
  </div>
</section>

<!-- Steps -->
<section class="section-tight">
  <div class="container">
    <h2 style="margin-bottom:2rem">How {style.name} comes together.</h2>
    <div class="steps">
      {#each style.steps as s, i}
        <div class="reveal pending" use:reveal={{}}>
          <span class="step-n">No. {i + 1}</span><h3>{s.title}</h3><p>{s.body}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Photo grid — the range, in frames -->
<section class="section-tight">
  <div class="container">
    <div class="grid grid-3">
      {#each style.grid as g}
        <div class="reveal pending" use:reveal>
          <ProductScene photo={g.photo} icon={g.icon} width={g.width} badge="{style.name}" />
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Best for / what you get -->
<section>
  <div class="container two-col" style="align-items:start">
    <div class="reveal pending" use:reveal>
      <h2 style="font-size:1.7rem">Best <em>for</em></h2>
      <ul class="checklist" style="margin-top:1.2rem">
        {#each style.bestFor as item}
          <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>{item}</span></li>
        {/each}
      </ul>
    </div>
    <div class="reveal pending" use:reveal>
      <h2 style="font-size:1.7rem">What you <em>get</em></h2>
      <ul class="checklist" style="margin-top:1.2rem">
        {#each style.whatYouGet as item}
          <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>{item}</span></li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<!-- Closing CTA -->
<section class="section-tight">
  <div class="container">
    <div class="cta-band reveal pending" use:reveal>
      <h2 class="display" style="font-size:clamp(2rem,4.5vw,3.2rem)">Make {style.name} <em>yours.</em></h2>
      <div class="flex" style="justify-content:center;margin-top:1.8rem">
        <span class="magnet-wrap" use:magnetic><span class="magnet-inner"><a href="/order-lifestyle" class="btn btn-primary btn-lg">Order {style.name}</a></span></span>
        <a href="/test-sample" class="btn btn-ghost btn-lg">Free test sample</a>
      </div>
    </div>
  </div>
</section>

<style>
  /* app.css's shared .step-n carries an italic mark from the v1 serif system
     — v2 has no italics anywhere (see DESIGN.md "Typography"), so it's
     overridden locally rather than touched globally. */
  .step-n { font-style: normal; }
</style>
