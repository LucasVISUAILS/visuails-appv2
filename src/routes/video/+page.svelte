<script>
  // VISUAILS — video hub: the 3 video-format cards + supporting sections.
  // Ported from video.html.
  import { reveal } from '$lib/actions/reveal.js';
  import { magnetic } from '$lib/actions/magnetic.js';
  import ProductScene from '$lib/components/site/ProductScene.svelte';
  import { videoStyles } from '$lib/data/videoStyles.js';

  const showcase = [
    { icon: 'bottle', width: '40%', label: 'Motion &middot; Bottle' },
    { icon: 'jar', width: '46%', label: 'Lifestyle &middot; Jar' },
    { icon: 'sneaker', width: '56%', label: 'Campaign &middot; Sneaker' },
    { icon: 'bag', width: '46%', label: 'Campaign &middot; Bag' },
  ];
</script>

<svelte:head>
  <title>Product &amp; Campaign Videos — short product videos that move | VISUAILS</title>
  <meta name="description" content="8-second, clean product videos with subtle motion — made for product pages, social and simple ads. Human-reviewed and delivered in ~24 hours. Standard product videos from €49; larger campaigns on quote." />
</svelte:head>

<section class="page-hero">
  <div class="container two-col" style="align-items:center">
    <div class="reveal pending" use:reveal>
      <span class="eyebrow-page">Product &amp; Campaign Videos</span>
      <h1 class="display" style="font-size:clamp(2.4rem,5vw,4rem);margin-top:1rem">Short product videos that move — literally</h1>
      <p class="lead" style="margin-top:1.2rem">8-second, clean product videos with subtle motion, made for product pages, social and simple ads. Standard product videos from <strong>€49</strong> — bigger campaigns on quote.</p>
      <div class="flex" style="margin-top:1.8rem">
        <span class="magnet-wrap" use:magnetic><span class="magnet-inner"><a href="/order-video" class="btn btn-primary btn-lg">Get visuals</a></span></span>
        <a href="https://wa.me/31625436130?text=Hi%20VISUAILS%2C%20I%27d%20like%20to%20talk%20about%20a%20product%20video." class="btn btn-wa" target="_blank" rel="noopener">
          <svg class="i" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1.5-4.5A8.38 8.38 0 0 1 3.5 11 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 8.5 8.5z"/></svg>
          WhatsApp <span class="rec-badge">Fastest</span>
        </a>
      </div>
      <div class="trust-row" style="margin-top:2.4rem">
        <span class="trust-item"><strong>8s</strong> clean product videos</span>
        <span class="trust-item"><strong>~24h</strong> delivery</span>
        <span class="trust-item"><strong>100%</strong> human-reviewed</span>
      </div>
    </div>
    <div class="reveal pending" use:reveal>
      <ProductScene icon="sneaker" width="52%" badge="Motion &middot; 8-second loop" wide />
    </div>
  </div>
</section>

<!-- Video cards -->
<section>
  <div class="container">
    <div class="section-head">
      <span class="kicker">Three video formats</span>
      <h2 style="margin-top:0.8rem">Motion made for product pages, social and ads.</h2>
    </div>
    <div class="grid grid-3">
      {#each videoStyles as s}
        <div class="card card-hover svc reveal pending" use:reveal>
          <div class="svc-media"><ProductScene icon={s.cardIcon} width={s.cardWidth} badge="Video &middot; {s.name}" wide /></div>
          <div class="svc-body">
            <h3>{s.name}</h3>
            <span class="svc-price">{s.cardPrice}</span>
            <p>{s.cardDesc}</p>
            <a href="/video/{s.slug}" class="link-arrow" style="margin-top:1rem">Get started <svg viewBox="0 0 24 24" class="i"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- What you get -->
<section class="section-tight">
  <div class="container two-col">
    <div class="reveal pending" use:reveal>
      <span class="kicker" style="color:var(--accent-bright)">What you get</span>
      <h2 style="margin-top:1rem">Clean motion, ready to publish.</h2>
      <ul class="checklist" style="margin-top:1.4rem">
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>8-second product video with subtle motion</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>Clean, minimal product presentation</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>Sized for product pages, social and simple ads</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>Consistent visual style across your range</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>~24h delivery</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>Human-reviewed before every delivery</span></li>
      </ul>
    </div>
    <div class="reveal pending card" use:reveal style="border-color:var(--accent-line)">
      <h3>Two ways to buy video</h3>
      <p style="margin-top:.8rem;color:var(--ink-2)"><strong>Standard product videos</strong> (Motion &amp; Lifestyle) have a fixed per-video price — order them just like images, from €49 per video.</p>
      <p style="margin-top:.6rem;color:var(--ink-2)"><strong>Campaign videos</strong> are bigger, multi-shot productions scoped to your brief, so they're quoted per project.</p>
      <div class="flex" style="margin-top:1.4rem">
        <a href="/order-video" class="btn btn-primary">Order a product video</a>
        <a href="https://wa.me/31625436130?text=Hi%20VISUAILS%2C%20I%27d%20like%20a%20quote%20for%20a%20campaign%20video." class="btn btn-wa" target="_blank" rel="noopener">
          <svg class="i" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1.5-4.5A8.38 8.38 0 0 1 3.5 11 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 8.5 8.5z"/></svg>
          Quote a campaign
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Showcase row -->
<section class="section-tight">
  <div class="container">
    <div class="section-head" style="margin-bottom:1.8rem">
      <h2>A look at product motion</h2>
      <p>Subtle movement, clean presentation — the same style across your whole range.</p>
    </div>
    <div class="grid grid-4">
      {#each showcase as v}
        <div class="reveal pending" use:reveal>
          <ProductScene icon={v.icon} width={v.width} badge={v.label} />
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Closing CTA -->
<section>
  <div class="container">
    <div class="cta-band reveal pending" use:reveal>
      <h2 class="display" style="font-size:clamp(2.2rem,5vw,3.6rem)">Give your product<br>a little movement.</h2>
      <p class="lead" style="margin:1.2rem auto 0;text-align:center">Short, clean product videos with subtle motion — delivered in about a day. Order a standard product video from €49, or get a bigger campaign scoped fast on WhatsApp.</p>
      <div class="flex" style="justify-content:center;margin-top:2rem">
        <span class="magnet-wrap" use:magnetic><span class="magnet-inner"><a href="/order-video" class="btn btn-primary btn-lg">Get visuals</a></span></span>
        <a href="/contact" class="btn btn-ghost btn-lg">Contact us</a>
        <a href="https://wa.me/31625436130?text=Hi%20VISUAILS%2C%20I%27d%20like%20to%20talk%20about%20a%20product%20video." class="btn btn-wa" target="_blank" rel="noopener">
          <svg class="i" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1.5-4.5A8.38 8.38 0 0 1 3.5 11 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 8.5 8.5z"/></svg>
          WhatsApp
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  /* Video-hub-only pattern: a 4-up showcase grid (app.css only ships
     .grid-2 / .grid-3). */
  .grid-4 { grid-template-columns: repeat(4, 1fr); }
  @media (max-width: 900px) { .grid-4 { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 520px) { .grid-4 { grid-template-columns: 1fr; } }
</style>
