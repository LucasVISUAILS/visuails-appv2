<script>
  // VISUAILS — About page, v2 redesign. Photo-led, minimal copy, no smooth
  // scroll, no kicker. See DESIGN.md "Homepage principle" — applied here too.
  import { reveal } from '$lib/actions/reveal.js';
  import { splitText } from '$lib/actions/splitText.js';

  const strip = [
    '/img/lifestyle-glow-05.webp',
    '/img/lifestyle-flash-06.webp',
    '/img/lifestyle-dunes-02.webp',
    '/img/lifestyle-phone-made-09.webp',
    '/img/banners-08.webp'
  ];
</script>

<svelte:head>
  <title>VISUAILS — About us</title>
  <meta name="description" content="VISUAILS is a product-visual studio that combines modern production speed with human judgement, so any brand can get studio-quality product visuals in about a day. Based in Enschede, Netherlands." />
</svelte:head>

<!-- HERO — full-bleed real photo, one line. -->
<section class="hero-editorial">
  <div class="bg" style="background-image:url('/img/banners-07.webp')"></div>
  <div class="fade"></div>
  <div class="hero-editorial-content container">
    <h1 class="display" use:splitText>Great visuals,<br />without the <em>studio</em>.</h1>
    <p class="lead" style="margin-top:1.2rem">Studio-quality product visuals in about a day — modern speed, checked by real people.</p>
    <div class="flex" style="margin-top:1.8rem">
      <a href="/test-sample" class="btn btn-primary btn-lg">Free test sample</a>
      <a href="https://wa.me/31625436130?text=Hi%20VISUAILS%2C%20I%27d%20like%20to%20learn%20more%20about%20you." class="btn btn-wa" target="_blank" rel="noopener">
        <svg class="i" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1.5-4.5A8.38 8.38 0 0 1 3.5 11 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 8.5 8.5z"/></svg>
        WhatsApp
      </a>
    </div>
  </div>
</section>

<!-- HOW WE WORK -->
<section class="section-tight">
  <div class="container">
    <div class="photo-split reveal pending" use:reveal>
      <div class="photo-split-media">
        <img src="/img/custom-models-01.webp" alt="A VISUAILS campaign scene, styled and shot for a client brand" loading="lazy" />
      </div>
      <div>
        <h2>Speed and judgement, <em>together</em>.</h2>
        <p class="lead" style="margin-top:1rem">A small team in Enschede, Netherlands. One photo becomes a full set in about a day — and a real person reviews every image before it reaches you.</p>
        <div class="chip-row" style="margin-top:1.4rem">
          <span class="chip"><span class="dot"></span>Enschede, NL</span>
          <span class="chip"><span class="dot"></span>100% human-reviewed</span>
          <span class="chip"><span class="dot"></span>~24h delivery</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- THREE PRINCIPLES -->
<section class="section-tight">
  <div class="container">
    <h2 style="margin-bottom:2rem">Three things we hold to.</h2>
    <div class="grid grid-3">
      <div class="card card-hover reveal pending" use:reveal>
        <h3>Speed, without the shortcut</h3>
        <p style="margin-top:.6rem;color:var(--ink-3)">Fast delivery, and still worth publishing.</p>
      </div>
      <div class="card card-hover reveal pending" use:reveal>
        <h3>Consistency wins</h3>
        <p style="margin-top:.6rem;color:var(--ink-3)">One coherent look, across your whole range.</p>
      </div>
      <div class="card card-hover reveal pending" use:reveal>
        <h3>Open to everyone</h3>
        <p style="margin-top:.6rem;color:var(--ink-3)">From €19 per visual. No subscription.</p>
      </div>
    </div>
  </div>
</section>

<!-- STRIP — real photography, no copy. -->
<section class="section-tight">
  <div class="container">
    <div class="photo-grid reveal pending" use:reveal>
      <img src={strip[0]} alt="Glow-style lifestyle visual" loading="lazy" class="wide" />
      <img src={strip[1]} alt="Flash-style lifestyle visual" loading="lazy" />
      <img src={strip[2]} alt="Dunes-style lifestyle visual" loading="lazy" />
      <img src={strip[3]} alt="Phone-made-style lifestyle visual" loading="lazy" />
      <img src={strip[4]} alt="Campaign photography" loading="lazy" class="wide" />
    </div>
  </div>
</section>

<!-- CTA -->
<section>
  <div class="container">
    <div class="cta-band reveal pending" use:reveal>
      <h2 class="display" style="font-size:clamp(2.2rem,5vw,3.6rem)">Let's grow <em>together</em>.</h2>
      <p class="lead" style="margin:1.2rem auto 0;text-align:center">Free test sample, or message us on WhatsApp.</p>
      <div class="flex" style="justify-content:center;margin-top:2rem">
        <a href="/test-sample" class="btn btn-primary btn-lg">Free test sample</a>
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
