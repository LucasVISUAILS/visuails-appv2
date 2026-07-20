<script>
  // VISUAILS — catalog hub, v2 redesign. Photo/icon-led, minimal copy, no
  // smooth scroll, kicker retired. No real "clean product on white"
  // photography exists (see IMAGES.md), so this page stays ProductScene-led
  // throughout rather than switching to real photography like /video does.
  import { reveal } from '$lib/actions/reveal.js';
  import { magnetic } from '$lib/actions/magnetic.js';
  import { compare } from '$lib/actions/compare.js';
  import ProductScene from '$lib/components/site/ProductScene.svelte';
  import { catalogStyles } from '$lib/data/catalogStyles.js';

  const faqs = [
    { q: 'How fast is turnaround?', a: '~24 hours, whether you order five products or five hundred.' },
    { q: 'Can I choose the background colour?', a: 'Pale white, or any hex code — applied behind every product you send.' },
    { q: 'Are the visuals marketplace-compliant?', a: 'Yes — framed and exported for common marketplace requirements. Tell us your platform and we’ll match its specs.' },
    { q: 'What if I need changes?', a: 'Three revision rounds are included, no extra fee.' },
  ];
</script>

<svelte:head>
  <title>Catalog Images — clean, consistent product visuals | VISUAILS</title>
  <meta name="description" content="Clean, consistent catalog visuals with the same lighting, angles and background every time. Marketplace-ready, high-res, human-reviewed and delivered in ~24 hours — from €19 per visual." />
</svelte:head>

<section class="page-hero">
  <div class="container two-col" style="align-items:center">
    <div class="reveal pending" use:reveal>
      <h1 class="display" style="font-size:clamp(2.4rem,5vw,4rem)">Clean, consistent product visuals — built to scale.</h1>
      <p class="lead" style="margin-top:1.2rem">Same lighting, angle and background. Every time. From €19.</p>
      <div class="flex" style="margin-top:1.8rem">
        <span class="magnet-wrap" use:magnetic><span class="magnet-inner"><a href="/order-catalog" class="btn btn-primary btn-lg">Order catalog visuals</a></span></span>
        <a href="/pricing" class="btn btn-ghost btn-lg">See pricing</a>
        <a href="https://wa.me/31625436130?text=Hi%20VISUAILS%2C%20I%27d%20like%20to%20order%20catalog%20visuals%20for%20my%20products." class="btn btn-wa" target="_blank" rel="noopener">
          <svg class="i" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1.5-4.5A8.38 8.38 0 0 1 3.5 11 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 8.5 8.5z"/></svg>
          WhatsApp <span class="rec-badge">Fastest</span>
        </a>
      </div>
      <div class="trust-row" style="margin-top:2.4rem">
        <span class="trust-item"><strong>From €19</strong> per visual</span>
        <span class="trust-item"><strong>~24h</strong> delivery</span>
        <span class="trust-item"><strong>100%</strong> human-reviewed</span>
      </div>
    </div>
    <div class="reveal pending" use:reveal>
      <ProductScene icon="bottle" width="42%" badge="Catalog visual, made consistent" wide />
    </div>
  </div>
</section>

<!-- Style cards -->
<section>
  <div class="container">
    <h2 style="margin-bottom:2rem">Pick your catalog style.</h2>
    <div class="grid grid-2">
      {#each catalogStyles as s}
        <div class="card card-hover reveal pending" use:reveal>
          <div class="svc-media"><ProductScene icon={s.cardIcon} width={s.cardWidth} badge="Catalog &middot; {s.name}" wide /></div>
          <div class="svc-body">
            <h3>{s.name}</h3>
            <span class="svc-price">{s.cardPrice}</span>
            <p>{s.cardDesc}</p>
            <div class="flex" style="margin-top:1.2rem">
              <a href="/catalog/{s.slug}" class="btn btn-primary">Explore {s.name}</a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- How it works, photo-split against a ProductScene -->
<section class="section-tight">
  <div class="container">
    <div class="photo-split reveal pending" use:reveal>
      <div class="photo-split-media"><ProductScene icon="jar" width="40%" badge="One photo in, a clean set out" /></div>
      <div>
        <h2>Three steps to a clean grid.</h2>
        <div class="steps" style="grid-template-columns:1fr;margin-top:1.6rem;gap:1.1rem">
          <div class="step"><span class="step-n">01</span><h3>Upload a photo</h3><p>We take it from there.</p></div>
          <div class="step"><span class="step-n">02</span><h3>We make it consistent</h3><p>Same lighting, angle, background — every time.</p></div>
          <div class="step"><span class="step-n">03</span><h3>Delivered in ~24h</h3><p>Ready for your site, ads and social.</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- What you get -->
<section class="section-tight">
  <div class="container two-col">
    <div class="reveal pending" use:reveal>
      <h2>Everything a listing needs.</h2>
      <ul class="checklist" style="margin-top:1.4rem">
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>Consistent lighting &amp; angles</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>Neutral or your chosen background</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>Marketplace-ready framing</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>High-res export</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>~24h delivery, human-reviewed</span></li>
      </ul>
    </div>
    <div class="reveal pending" use:reveal>
      <ProductScene icon="bag" width="40%" badge="One colour, every product" wide />
      <div class="chip-row" style="margin-top:1.2rem">
        <span class="chip"><span class="dot"></span>Pale white</span>
        <span class="chip"><span class="dot"></span>Custom colour — any hex code</span>
      </div>
    </div>
  </div>
</section>

<!-- Before / after -->
<section class="section-tight">
  <div class="container">
    <div class="section-head">
      <h2>One photo in. A clean visual out.</h2>
      <p>Drag to compare.</p>
    </div>
    <div style="max-width:640px;margin:0 auto;text-align:center">
      <div class="reveal-clip-wrap" use:reveal={{ variant: 'clip' }}>
        <div class="reveal-clip-inner">
          <div class="ba" use:compare aria-label="Before and after: a raw bottle photo transformed into a clean catalog visual">
            <div class="ba-layer ba-before-scene" aria-hidden="true"><ProductScene icon="bottle" width="42%" /></div>
            <div class="ba-layer ba-after" aria-hidden="true"><ProductScene icon="bottle" width="42%" /></div>
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

<!-- Quality -->
<section class="section-tight">
  <div class="container two-col">
    <div class="reveal pending" use:reveal>
      <ProductScene icon="bottle" width="40%" badge="Quality-checked by a human" wide />
    </div>
    <div class="reveal pending" use:reveal>
      <h2>Fast means nothing if it isn't right.</h2>
      <p class="lead" style="margin-top:1.2rem">Every visual is generated, then reviewed by a person before it reaches you.</p>
      <div class="chip-row" style="margin-top:1.6rem">
        <span class="chip"><span class="dot"></span>Consistent lighting &amp; framing</span>
        <span class="chip"><span class="dot"></span>Marketplace-ready</span>
        <span class="chip"><span class="dot"></span>Revisions included</span>
      </div>
    </div>
  </div>
</section>

<!-- Mini FAQ -->
<section>
  <div class="container" style="max-width:760px">
    <h2 style="margin-bottom:1.8rem">Catalog questions, answered</h2>
    <div class="faq-stack">
      {#each faqs as f}
        <details class="faq-item">
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      {/each}
    </div>
  </div>
</section>

<!-- Closing CTA -->
<section>
  <div class="container">
    <div class="cta-band reveal pending" use:reveal>
      <h2 class="display" style="font-size:clamp(2.2rem,5vw,3.6rem)">Build a catalog that<br>looks like one brand.</h2>
      <p class="lead" style="margin:1.2rem auto 0;text-align:center">From €19 per visual, delivered in about a day.</p>
      <div class="flex" style="justify-content:center;margin-top:2rem">
        <span class="magnet-wrap" use:magnetic><span class="magnet-inner"><a href="/order-catalog" class="btn btn-primary btn-lg">Order catalog visuals</a></span></span>
        <a href="/pricing" class="btn btn-ghost btn-lg">See pricing</a>
        <a href="https://wa.me/31625436130?text=Hi%20VISUAILS%2C%20I%27d%20like%20to%20order%20catalog%20visuals%20for%20my%20products." class="btn btn-wa" target="_blank" rel="noopener">
          <svg class="i" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1.5-4.5A8.38 8.38 0 0 1 3.5 11 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 8.5 8.5z"/></svg>
          WhatsApp
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  /* Catalog-hub-only patterns not part of the shared app.css system. */
  .chip-row { display: flex; flex-wrap: wrap; gap: .6rem; }
  .chip { display: inline-flex; align-items: center; gap: .5rem; font-size: .84rem; color: var(--ink-2); background: var(--surface-2); border: 1px solid var(--line); border-radius: var(--r-pill); padding: .45rem .9rem; }
  .chip .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); flex: 0 0 auto; }

  .faq-stack { display: flex; flex-direction: column; gap: .7rem; }
  .faq-item { background: var(--surface); border: 1px solid var(--line); border-radius: var(--r-lg); padding: 1.1rem 1.3rem; }
  .faq-item summary { cursor: pointer; list-style: none; font-weight: 600; color: var(--ink); font-size: .98rem; }
  .faq-item summary::-webkit-details-marker { display: none; }
  .faq-item summary::after { content: '+'; float: right; color: var(--accent-bright); font-family: var(--font-display); font-size: 1.2rem; }
  .faq-item[open] summary::after { content: '\2212'; }
  .faq-item p { margin-top: .8rem; color: var(--ink-3); font-size: .92rem; line-height: 1.6; }

  .step { position: relative; border-top: 1px solid var(--line-strong); padding-top: 1.1rem; }
  .step .step-n { font-family: var(--font-display); font-weight: 900; font-size: 1rem; color: var(--accent-bright); }
  .step h3 { font-size: 1.05rem; margin: .5rem 0 .3rem; }
  .step p { font-size: .9rem; color: var(--ink-3); }
</style>
