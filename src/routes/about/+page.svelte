<script>
  // VISUAILS — About page. Ported from /tmp/visuails-web/about.html.
  // Header/footer/nav live in +layout.svelte; this file is page content only.
  import { reveal } from '$lib/actions/reveal.js';
  import ProductScene from '$lib/components/site/ProductScene.svelte';
</script>

<svelte:head>
  <title>VISUAILS — About us</title>
  <meta name="description" content="VISUAILS is a product-visual studio that combines modern production speed with human judgement, so any brand can get studio-quality product visuals in about a day. Based in Enschede, Netherlands." />
</svelte:head>

<!-- HERO -->
<section class="page-hero">
  <div class="container">
    <span class="eyebrow-page">About VISUAILS</span>
    <h1 class="display" style="font-size:clamp(2.4rem,5vw,4rem)">Great product visuals, without the studio</h1>
    <p class="lead" style="margin-top:1.2rem">VISUAILS started with a simple frustration: professional product photos are slow, expensive, and hard to keep consistent. We combine the speed of modern production with the judgement of real people, so any brand can get studio-quality visuals in about a day.</p>
    <div class="flex" style="margin-top:1.8rem">
      <a href="/test-sample" class="btn btn-primary btn-lg">Free test sample</a>
      <a href="https://wa.me/31625436130?text=Hi%20VISUAILS%2C%20I%27d%20like%20to%20learn%20more%20about%20you." class="btn btn-wa" target="_blank" rel="noopener">
        <svg class="i" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1.5-4.5A8.38 8.38 0 0 1 3.5 11 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 8.5 8.5z"/></svg>
        WhatsApp
      </a>
    </div>
  </div>
</section>

<!-- WHAT WE BELIEVE -->
<section class="section-tight">
  <div class="container">
    <div class="section-head">
      <span class="kicker">What we believe</span>
      <h2 style="margin-top:0.8rem">Three principles behind every visual</h2>
    </div>
    <div class="grid grid-3">
      <div class="card card-hover reveal pending" use:reveal>
        <h3>Speed shouldn't cost quality</h3>
        <p style="margin-top:.6rem">Fast delivery only matters if the result is worth publishing. We built our process so a quick turnaround and a careful, human-checked finish come together — not one at the expense of the other.</p>
      </div>
      <div class="card card-hover reveal pending" use:reveal>
        <h3>Consistency wins</h3>
        <p style="margin-top:.6rem">Shoppers trust a shop that looks like it has its act together. We keep lighting, framing and style steady across your whole range, so your catalogue reads as one coherent brand.</p>
      </div>
      <div class="card card-hover reveal pending" use:reveal>
        <h3>Accessible to everyone</h3>
        <p style="margin-top:.6rem">Great visuals shouldn't be reserved for brands with big budgets. Starting at €19 per visual and with no subscription, a small shop can look as polished as a household name.</p>
      </div>
    </div>
  </div>
</section>

<!-- HOW WE WORK -->
<section>
  <div class="container two-col">
    <div class="reveal pending" use:reveal>
      <span class="kicker" style="color:var(--accent-bright)">How we work</span>
      <h2 style="margin-top:1rem">A product-visual studio for modern e-commerce brands.</h2>
      <p class="lead" style="margin-top:1.2rem">We're a small, focused team based in Enschede, Netherlands. Our studio produces your set quickly, and a real person selects and reviews every image before it reaches you — checking accuracy, consistency and detail.</p>
      <p style="margin-top:1rem;color:var(--ink-3);max-width:66ch">That balance is the whole idea. That's how one photo becomes a full set of visuals in about a day. People give us the taste and judgement to make sure each one actually looks like your brand made it. Neither works as well alone.</p>
      <div class="chip-row" style="margin-top:1.6rem">
        <span class="chip"><span class="dot"></span>Based in Enschede, NL</span>
        <span class="chip"><span class="dot"></span>100% human-reviewed</span>
        <span class="chip"><span class="dot"></span>~24h typical delivery</span>
      </div>
    </div>
    <div class="reveal pending" use:reveal>
      <ProductScene icon="bottle" width="42%" badge="Studio speed &middot; Human control" wide />
    </div>
  </div>
</section>

<!-- VISUAL GALLERY -->
<section class="section-tight">
  <div class="container">
    <div class="grid grid-3">
      <div class="reveal pending" use:reveal>
        <ProductScene photo="/img/lifestyle-glow-03.webp" icon="jar" width="46%" badge="Lifestyle &middot; Glow" />
      </div>
      <div class="reveal pending" use:reveal>
        <ProductScene icon="sneaker" width="56%" badge="Catalog &middot; Classic" />
      </div>
      <div class="reveal pending" use:reveal>
        <ProductScene icon="bag" width="46%" badge="Catalog &middot; Custom" />
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section>
  <div class="container">
    <div class="cta-band reveal pending" use:reveal>
      <h2 class="display" style="font-size:clamp(2.2rem,5vw,3.6rem)">Let's grow together</h2>
      <p class="lead" style="margin:1.2rem auto 0;text-align:center">Try a free test sample to see the quality for yourself, or message us on WhatsApp — we usually reply within the hour.</p>
      <div class="flex" style="justify-content:center;margin-top:2rem">
        <a href="/test-sample" class="btn btn-primary btn-lg">Free test sample &mdash; no card needed</a>
        <a href="https://wa.me/31625436130?text=Hi%20VISUAILS%2C%20I%27d%20like%20to%20talk%20about%20visuals%20for%20my%20brand." class="btn btn-wa" target="_blank" rel="noopener">
          <svg class="i" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1.5-4.5A8.38 8.38 0 0 1 3.5 11 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 8.5 8.5z"/></svg>
          WhatsApp
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  /* About-page-only: the "chip" row used in the "How we work" section.
     Not part of app.css yet — small enough to keep page-scoped. */
  .chip-row { display: flex; flex-wrap: wrap; gap: .5rem; }
  .chip { display: inline-flex; align-items: center; gap: .45rem; padding: .4rem .9rem; border-radius: var(--r-pill); border: 1px solid var(--line); font-size: .8rem; color: var(--ink-2); }
  .chip .dot { width: 5px; height: 5px; border-radius: 50%; background: var(--accent); }
</style>
