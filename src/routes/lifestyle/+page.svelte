<script>
  // VISUAILS — lifestyle hub: the 4 style cards + supporting sections.
  // Ported from lifestyle.html.
  import { reveal } from '$lib/actions/reveal.js';
  import { magnetic } from '$lib/actions/magnetic.js';
  import { compare } from '$lib/actions/compare.js';
  import ProductScene from '$lib/components/site/ProductScene.svelte';
  import { styles } from '$lib/data/styles.js';

  const marqueeItems = [
    { icon: 'bottle', width: '42%', label: 'Phone-made' },
    { icon: 'jar', width: '46%', label: 'Glow' },
    { icon: 'sneaker', width: '56%', label: 'Flash' },
    { icon: 'bag', width: '46%', label: 'Dunes' },
    { icon: 'jar', width: '44%', label: 'Editorial' },
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
    <p class="lead" style="margin-top:1.2rem">Real, styled scenes with natural lighting — and optional consistent models. From €35 per visual.</p>
    <div class="flex" style="margin-top:1.8rem">
      <span class="magnet-wrap" use:magnetic><span class="magnet-inner"><a href="/order-lifestyle" class="btn btn-primary btn-lg">Order lifestyle visuals</a></span></span>
      <a href="/pricing" class="btn btn-ghost btn-lg">See pricing</a>
      <a href="https://wa.me/31625436130?text=Hi%20VISUAILS%2C%20I%27d%20like%20to%20order%20lifestyle%20visuals%20for%20my%20products." class="btn btn-wa" target="_blank" rel="noopener">
        <svg class="i" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1.5-4.5A8.38 8.38 0 0 1 3.5 11 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 8.5 8.5z"/></svg>
        WhatsApp <span class="rec-badge">Fastest</span>
      </a>
    </div>
    <div class="trust-row" style="margin-top:2.4rem">
      <span class="trust-item"><strong>From €35</strong> per lifestyle visual</span>
      <span class="trust-item"><strong>~24h</strong> delivery</span>
      <span class="trust-item"><strong>100%</strong> human-reviewed</span>
    </div>
  </div>
</section>

<!-- Style cards -->
<section>
  <div class="container">
    <div class="section-head">
      <span class="kicker">Four lifestyle styles</span>
      <h2 style="margin-top:.8rem">Choose the mood that matches your brand.</h2>
    </div>
    <div class="grid grid-2">
      {#each styles as s}
        <div class="svc card-hover reveal pending" use:reveal>
          <div class="svc-media"><ProductScene photo={s.cardPhoto} icon={s.cardIcon} width="44%" badge="Lifestyle &middot; {s.name}" wide /></div>
          <div class="svc-body">
            <h3><em>{s.name}</em></h3>
            <span class="svc-price">€35 / visual</span>
            <p>{s.cardDesc}</p>
            <div class="flex" style="margin-top:1.2rem">
              <a href="/lifestyle/{s.slug}" class="btn btn-primary">Explore {s.name}</a>
              <a href="https://wa.me/31625436130?text=Hi%20VISUAILS%2C%20I%27d%20like%20to%20order%20a%20{s.name}%20lifestyle%20visual." class="btn btn-wa" target="_blank" rel="noopener">
                <svg class="i" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1.5-4.5A8.38 8.38 0 0 1 3.5 11 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 8.5 8.5z"/></svg>
                Order via WhatsApp
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Features -->
<section class="section-tight">
  <div class="container two-col">
    <div class="reveal pending" use:reveal>
      <span class="kicker" style="color:var(--accent-bright)">Every style includes</span>
      <h2 style="margin-top:1rem">Made to look real — and ready to publish.</h2>
      <p class="lead" style="margin-top:1.2rem">Whichever mood you pick, each lifestyle visual comes with the same production standard, so your feed and product pages stay coherent from the first order.</p>
    </div>
    <div class="reveal pending card" use:reveal style="border-color:var(--accent-line)">
      <ul class="checklist">
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>High-res export</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>Natural product integration</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>Consistent visual style</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>E-commerce ready</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>~24h delivery</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>Human-reviewed</span></li>
      </ul>
    </div>
  </div>
</section>

<!-- Models teaser -->
<section>
  <div class="container two-col">
    <div class="reveal pending" use:reveal>
      <ProductScene photo="/img/banners-01.webp" icon="bag" width="46%" badge="Consistent model &middot; whole collection" wide />
    </div>
    <div class="reveal pending" use:reveal>
      <span class="kicker" style="color:var(--accent-bright)">Add a consistent model</span>
      <h2 style="margin-top:1rem">Same face, across the whole collection.</h2>
      <p class="lead" style="margin-top:1.2rem">Want your product worn or held? Add a consistent model that carries the same face across an entire collection — or let VISUAILS choose a model that fits your brand. Either way, your campaign feels like one coherent shoot.</p>
      <div class="flex" style="margin-top:1.6rem">
        <a href="/models" class="btn btn-primary">Explore models</a>
        <a href="/models" class="link-arrow">See how consistent models work <svg viewBox="0 0 24 24" class="i"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
    </div>
  </div>
</section>

<!-- Before / after -->
<section class="section-tight">
  <div class="container">
    <div class="section-head">
      <h2>One product photo. A styled scene out.</h2>
      <p>Drag to compare a plain product shot with a finished lifestyle visual.</p>
    </div>
    <div style="max-width:640px;margin:0 auto;text-align:center">
      <div class="reveal-clip-wrap" use:reveal={{ variant: 'clip' }}>
        <div class="reveal-clip-inner">
          <div class="ba" use:compare aria-label="Before and after: a plain jar photo transformed into a styled lifestyle visual">
            <div class="ba-layer ba-before-scene" aria-hidden="true"><ProductScene icon="jar" width="46%" /></div>
            <div class="ba-layer ba-after" aria-hidden="true"><ProductScene icon="jar" width="46%" /></div>
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

<!-- Marquee -->
<section class="section-tight">
  <div class="container">
    <div class="section-head" style="margin-bottom:1.8rem">
      <h2>A feel for the lifestyle range</h2>
      <p>From effortless phone-made to punchy editorial flash. <a href="/gallery" class="link-arrow" style="font-size:1rem">See the full gallery <svg viewBox="0 0 24 24" class="i"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></p>
    </div>
  </div>
  <div class="marquee">
    <div class="marquee-track">
      {#each marqueeItems as m}
        <div class="marquee-item"><ProductScene icon={m.icon} width={m.width} badge="Lifestyle &middot; {m.label}" /></div>
      {/each}
    </div>
  </div>
</section>

<!-- Closing CTA -->
<section>
  <div class="container">
    <div class="cta-band reveal pending" use:reveal>
      <h2 class="display" style="font-size:clamp(2.2rem,5vw,3.6rem)">Put your product<br>in a scene that sells.</h2>
      <p class="lead" style="margin:1.2rem auto 0;text-align:center">Order styled lifestyle visuals from €35 each — with optional consistent models. Prefer to talk it through? We usually reply on WhatsApp within the hour.</p>
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
