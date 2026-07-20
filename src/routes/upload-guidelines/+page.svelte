<script>
  // VISUAILS — upload guidelines. Ported from static /upload-guidelines.html.
  import { reveal } from '$lib/actions/reveal.js';
  import ProductScene from '$lib/components/site/ProductScene.svelte';
</script>

<svelte:head>
  <title>Upload guidelines — VISUAILS</title>
  <meta name="description" content="Simple tips for the product photos you send us, so your visuals come out sharp, accurate and fast." />
</svelte:head>

<section class="page-hero"><div class="container">
  <span class="eyebrow-page">Getting the best results</span>
  <h1 class="display">How to shoot photos we can work magic with</h1>
  <p class="lead" style="margin-top:1.1rem">You don't need a studio — just a clear photo and a few simple habits.</p>
  <div class="flex" style="margin-top:1.8rem">
    <a href="/test-sample" class="btn btn-primary btn-lg">Try a free test sample</a>
    <a href="/order" class="btn btn-ghost btn-lg">Start an order</a>
  </div>
</div></section>

<section><div class="container">
  <div class="grid grid-2">
    <div class="card reveal pending" use:reveal>
      <h3 style="color:var(--success)">Do</h3>
      <ul class="checklist" style="margin-top:1rem">
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5" /></svg><span>Keep it clear &amp; sharp — in focus, no motion blur.</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5" /></svg><span>Use a neutral, uncluttered background.</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5" /></svg><span>Light it well and evenly — daylight works great.</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5" /></svg><span>Show the full product, plus a few close-ups of key details.</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5" /></svg><span>Send the highest resolution you have.</span></li>
      </ul>
    </div>
    <div class="card reveal pending" use:reveal style="border-color:oklch(0.7 0.14 25 / 0.35)">
      <h3 style="color:oklch(0.78 0.15 25)">Avoid</h3>
      <ul class="checklist" style="margin-top:1rem">
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:oklch(0.78 0.15 25)"><path d="M18 6L6 18M6 6l12 12" /></svg><span>Blurry, dark or low-light shots.</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:oklch(0.78 0.15 25)"><path d="M18 6L6 18M6 6l12 12" /></svg><span>Busy or distracting backgrounds.</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:oklch(0.78 0.15 25)"><path d="M18 6L6 18M6 6l12 12" /></svg><span>Heavy filters or strong colour casts.</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:oklch(0.78 0.15 25)"><path d="M18 6L6 18M6 6l12 12" /></svg><span>Tiny, low-res screenshots.</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:oklch(0.78 0.15 25)"><path d="M18 6L6 18M6 6l12 12" /></svg><span>Cropping part of the product out of frame.</span></li>
      </ul>
    </div>
  </div>
  <div class="two-col" style="margin-top:2.5rem">
    <div class="reveal pending" use:reveal>
      <ProductScene icon="bottle" width="44%" badge="Not ideal — dull &amp; flat" wide className="not-ideal" />
    </div>
    <div class="reveal pending" use:reveal>
      <ProductScene icon="bottle" width="44%" badge="Great — clear &amp; well lit" wide />
    </div>
  </div>
</div></section>

<section class="section-tight"><div class="container"><div class="cta-band reveal pending" use:reveal>
  <h2 class="display" style="font-size:clamp(2rem,4.5vw,3rem)">Got a photo ready? Let's see it transformed.</h2>
  <p class="lead" style="margin:1rem auto 0;text-align:center">Start with one free test sample — no card needed.</p>
  <div class="flex" style="justify-content:center;margin-top:1.8rem">
    <a href="/test-sample" class="btn btn-primary btn-lg">Free test sample</a>
    <a href="/order" class="btn btn-ghost btn-lg">Order now</a>
  </div>
</div></div></section>

<style>
  /* Desaturated treatment for the "not ideal" example — mirrors the static
     site's .ba-before-scene filter, scoped here since it's only used once. */
  :global(.not-ideal) { filter: saturate(.4) brightness(.92) contrast(.92); }
</style>
