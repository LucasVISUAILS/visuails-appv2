<script>
  // VISUAILS — catalog hub: the 2 style cards + supporting sections.
  // Ported from catalog.html. Structure mirrors /lifestyle's hub (hero,
  // style cards, features checklist, before/after, closing CTA), with two
  // extra catalog-specific sections kept from the source content: the
  // "how it works" steps and the human-review "quality" band.
  import { reveal } from '$lib/actions/reveal.js';
  import { magnetic } from '$lib/actions/magnetic.js';
  import { compare } from '$lib/actions/compare.js';
  import ProductScene from '$lib/components/site/ProductScene.svelte';
  import { catalogStyles } from '$lib/data/catalogStyles.js';

  const faqs = [
    { q: 'How fast is turnaround?', a: 'Catalog visuals are typically delivered within about 24 hours of your brief. Larger batches may take a little longer, but the wait barely changes whether you order five products or five hundred.' },
    { q: 'Can I choose the background colour?', a: 'Yes. Choose Pale white, or give us your exact brand colour as a hex code — we apply it behind every product you send, so your whole range lines up neatly.' },
    { q: 'Are the visuals marketplace-compliant?', a: "We frame and export catalog visuals for common marketplace requirements — clean neutral backgrounds, consistent product framing and high-resolution files. If a specific platform has particular specs, tell us in your brief and we'll match them." },
    { q: 'What if I need changes?', a: "Three revision rounds are included as standard. Share your feedback and we'll refine the visual until it's right — no surprise fees." },
  ];
</script>

<svelte:head>
  <title>Catalog Images — clean, consistent product visuals | VISUAILS</title>
  <meta name="description" content="Clean, consistent catalog visuals with the same lighting, angles and background every time. Marketplace-ready, high-res, human-reviewed and delivered in ~24 hours — from €19 per visual." />
</svelte:head>

<section class="page-hero">
  <div class="container two-col" style="align-items:center">
    <div class="reveal pending" use:reveal>
      <span class="eyebrow-page">Catalog Images</span>
      <h1 class="display" style="font-size:clamp(2.4rem,5vw,4rem);margin-top:1rem">Clean, consistent product visuals — built for scalable e-commerce</h1>
      <p class="lead" style="margin-top:1.2rem">Consistent lighting, angles and background. Every time. From €19 per visual.</p>
      <div class="flex" style="margin-top:1.8rem">
        <span class="magnet-wrap" use:magnetic><span class="magnet-inner"><a href="/order-catalog" class="btn btn-primary btn-lg">Order catalog visuals</a></span></span>
        <a href="/pricing" class="btn btn-ghost btn-lg">See pricing</a>
        <a href="https://wa.me/31625436130?text=Hi%20VISUAILS%2C%20I%27d%20like%20to%20order%20catalog%20visuals%20for%20my%20products." class="btn btn-wa" target="_blank" rel="noopener">
          <svg class="i" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1.5-4.5A8.38 8.38 0 0 1 3.5 11 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 8.5 8.5z"/></svg>
          WhatsApp <span class="rec-badge">Fastest</span>
        </a>
      </div>
      <div class="trust-row" style="margin-top:2.4rem">
        <span class="trust-item"><strong>From €19</strong> per catalog visual</span>
        <span class="trust-item"><strong>~24h</strong> delivery</span>
        <span class="trust-item"><strong>100%</strong> human-reviewed</span>
      </div>
    </div>
    <div class="reveal pending" use:reveal>
      <ProductScene icon="bottle" width="42%" badge="Catalog visual, made consistent" wide />
    </div>
  </div>
</section>

<!-- How it works -->
<section class="section-tight">
  <div class="container">
    <div class="section-head">
      <h2>How it works (catalog)</h2>
      <p>From one clear photo to a grid-ready visual — in three simple steps.</p>
    </div>
    <div class="steps">
      <div class="reveal pending" use:reveal><span class="step-n">01</span><h3>Upload a photo</h3><p>Upload a clear product photo — we take care of the rest.</p></div>
      <div class="reveal pending" use:reveal><span class="step-n">02</span><h3>We make it consistent</h3><p>We turn it into a clean, consistent catalog visual — same lighting, angles and composition every time.</p></div>
      <div class="reveal pending" use:reveal><span class="step-n">03</span><h3>Delivered in ~24h</h3><p>Delivered within ~24 hours — ready for your website, ads and social.</p></div>
    </div>
  </div>
</section>

<!-- Style cards -->
<section>
  <div class="container">
    <div class="section-head">
      <span class="kicker">Two catalog styles</span>
      <h2 style="margin-top:.8rem">Pick the look that fits your shelf.</h2>
    </div>
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

<!-- What you get -->
<section class="section-tight">
  <div class="container two-col">
    <div class="reveal pending" use:reveal>
      <span class="kicker" style="color:var(--accent-bright)">What you get</span>
      <h2 style="margin-top:1rem">Everything a marketplace listing needs.</h2>
      <ul class="checklist" style="margin-top:1.4rem">
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>Consistent lighting &amp; angles</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>Pure white / neutral (or your chosen) background</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>Marketplace-ready framing</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>High-res export</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>~24h delivery</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>Human-reviewed</span></li>
      </ul>
    </div>
    <div class="reveal pending card" use:reveal style="border-color:var(--accent-line)">
      <h3>Pick one background colour — for the whole range</h3>
      <p style="margin-top:.8rem;color:var(--ink-3)">Choose a consistent background colour that's applied behind every product you send us. It's a small choice that makes a big difference: your listings line up neatly on the shelf and instantly read as one coherent brand.</p>
      <div class="chip-row" style="margin-top:1.4rem">
        <span class="chip"><span class="dot"></span>Pale white</span>
        <span class="chip"><span class="dot"></span>Custom colour — any hex code</span>
      </div>
      <p style="margin-top:1.2rem;font-size:.9rem;color:var(--ink-3)">A real consistency win — one colour behind every product, order after order.</p>
    </div>
  </div>
</section>

<!-- Before / after -->
<section class="section-tight">
  <div class="container">
    <div class="section-head">
      <h2>One photo in. A clean catalog visual out.</h2>
      <p>Drag to compare a raw product photo with a finished VISUAILS catalog visual.</p>
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
      <span class="kicker" style="color:var(--accent-bright)">Refined to perfection</span>
      <h2 style="margin-top:1rem">Fast means nothing if it isn't right.</h2>
      <p class="lead" style="margin-top:1.2rem">Every catalog visual is generated, selected and manually reviewed by a person before it reaches you — so your listings stay sharp, aligned and genuinely consistent across the whole range.</p>
      <div class="chip-row" style="margin-top:1.6rem">
        <span class="chip"><span class="dot"></span>Consistent lighting &amp; framing</span>
        <span class="chip"><span class="dot"></span>High-resolution export</span>
        <span class="chip"><span class="dot"></span>Marketplace-ready</span>
        <span class="chip"><span class="dot"></span>Revisions included</span>
      </div>
    </div>
  </div>
</section>

<!-- Mini FAQ -->
<section>
  <div class="container" style="max-width:760px">
    <div class="section-head">
      <h2>Catalog questions, answered</h2>
      <p>The details that matter when you're building a consistent catalog.</p>
    </div>
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
      <p class="lead" style="margin:1.2rem auto 0;text-align:center">Order clean, consistent catalog visuals from €19 each — delivered in about a day. Prefer to talk it through? We usually reply on WhatsApp within the hour.</p>
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
</style>
