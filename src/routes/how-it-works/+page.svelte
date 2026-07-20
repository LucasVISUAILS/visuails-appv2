<script>
  // VISUAILS — How it works page. Ported from /tmp/visuails-web/how-it-works.html.
  // Header/footer/nav live in +layout.svelte; this file is page content only.
  import { reveal } from '$lib/actions/reveal.js';
  import { compare } from '$lib/actions/compare.js';
  import ProductScene from '$lib/components/site/ProductScene.svelte';

  const details = [
    { title: 'Turnaround', body: "Around 24 hours from brief to download for standard orders. Busy periods or a brand-new custom style can take a little longer — we'll always tell you." },
    { title: 'Revisions', body: "Three revision rounds are included as standard. Your feedback shapes the final result — we'd rather get it right than get it fast." },
    { title: 'Consistency', body: 'Order after order, we hold the same lighting, angle and framing — so your catalogue looks like one considered set, not a patchwork.' },
    { title: 'Two ways to order', body: 'Use the on-site forms, or order over WhatsApp — whichever suits you. For custom styles and models, WhatsApp is the way we work through the details together.' },
    { title: 'Formats & resolution', body: 'High-resolution files, e-commerce ready. 2K export is included; 4K and multi-format exports are available as options.' },
  ];
</script>

<svelte:head>
  <title>How it works — VISUAILS</title>
  <meta name="description" content="From one product photo to publish-ready catalog, lifestyle and video visuals — generated, human-reviewed and delivered in about 24 hours." />
</svelte:head>

<!-- HERO -->
<section class="page-hero">
  <div class="container">
    <span class="eyebrow-page">How it works</span>
    <h1 class="display" style="font-size:clamp(2.2rem,4.8vw,3.8rem)">From one photo to publish-ready visuals</h1>
    <p class="lead" style="margin-top:1.1rem">The whole point of VISUAILS is that it feels effortless on your side. You send a product photo; we handle generation, selection and a human quality check; you get files that are ready to publish.</p>
    <div class="flex" style="margin-top:1.8rem">
      <a href="/order" class="btn btn-primary btn-lg">Start an order</a>
      <a href="/test-sample" class="btn btn-ghost btn-lg">Try a free sample</a>
    </div>
  </div>
</section>

<!-- STEPS -->
<section>
  <div class="container">
    <div class="steps">
      <div class="step reveal pending" use:reveal>
        <div class="step-n">01</div>
        <h3>Upload &amp; brief</h3>
        <p>Share a product photo or screenshot and a short note on the look you're after — style, background, and any must-haves. It takes about five minutes. Not sure what to send? Our <a href="/upload-guidelines">upload guidelines</a> cover it.</p>
      </div>
      <div class="step reveal pending" use:reveal>
        <div class="step-n">02</div>
        <h3>We produce &amp; review</h3>
        <p>Our pipeline creates your visuals with consistent lighting, framing and composition. Then a real person checks every single image for accuracy, artefacts and on-brand consistency — nothing ships on autopilot.</p>
      </div>
      <div class="step reveal pending" use:reveal>
        <div class="step-n">03</div>
        <h3>Download &amp; use</h3>
        <p>You receive high-resolution, e-commerce-ready files by download link — typically within about 24 hours. Something not right? Revisions are included.</p>
      </div>
    </div>
  </div>
</section>

<!-- HUMAN-REVIEWED -->
<section class="section-tight">
  <div class="container two-col">
    <div class="reveal pending" use:reveal>
      <div class="reveal-clip-wrap" use:reveal={{ variant: 'clip' }}>
        <div class="reveal-clip-inner">
          <div class="ba" use:compare aria-label="Before and after: a raw product photo transformed into a VISUAILS visual">
            <div class="ba-layer ba-before-scene" aria-hidden="true"><ProductScene icon="bottle" width="44%" /></div>
            <div class="ba-layer ba-after" aria-hidden="true"><ProductScene icon="bottle" width="44%" /></div>
            <span class="ba-tag tag-before">Before</span><span class="ba-tag tag-after">After</span>
            <div class="ba-handle" aria-hidden="true"></div>
            <div class="ba-knob" aria-hidden="true"><svg class="i" viewBox="0 0 24 24" style="width:18px;height:18px"><path d="M8 7l-4 5 4 5M16 7l4 5-4 5"/></svg></div>
          </div>
        </div>
      </div>
    </div>
    <div class="reveal pending" use:reveal>
      <span class="kicker" style="color:var(--accent-bright)">What "human-reviewed" really means</span>
      <h2 style="margin-top:1rem">A person signs off on every visual.</h2>
      <p class="lead" style="margin-top:1.1rem">AI does the heavy lifting, but it isn't left to decide alone. Before anything reaches you, a person checks that the product is accurate, the lighting and framing are consistent with the rest of your set, and there are no odd artefacts. That's the difference between a raw AI tool and a finished result you can publish.</p>
      <div class="chip-row" style="margin-top:1.4rem">
        <span class="chip"><span class="dot"></span>Accuracy check</span>
        <span class="chip"><span class="dot"></span>Consistency across your set</span>
        <span class="chip"><span class="dot"></span>Artefact clean-up</span>
      </div>
    </div>
  </div>
</section>

<!-- DETAILS -->
<section>
  <div class="container">
    <div class="section-head"><h2>The details that matter</h2><p>Everything you'd want to know before your first order.</p></div>
    <div class="grid grid-auto">
      {#each details as d}
        <div class="card reveal pending" use:reveal>
          <h3 style="font-size:1.05rem">{d.title}</h3>
          <p style="margin-top:.5rem;font-size:.95rem;color:var(--ink-3)">{d.body}</p>
        </div>
      {/each}
      <div class="card reveal pending" use:reveal>
        <h3 style="font-size:1.05rem">Your rights</h3>
        <p style="margin-top:.5rem;font-size:.95rem;color:var(--ink-3)">You receive commercial usage rights to your delivered visuals, and you keep the rights to your own product and brand assets. Details in our <a href="/terms">terms</a>.</p>
      </div>
    </div>
  </div>
</section>

<!-- FAQ TEASER -->
<section class="section-tight">
  <div class="container">
    <div style="text-align:center;max-width:60ch;margin:0 auto 1.4rem"><h2>Still have a question?</h2><p style="margin-top:.6rem">Our FAQ covers ordering, delivery, pricing, VAT and usage rights.</p></div>
    <div class="flex" style="justify-content:center"><a href="/faq" class="btn btn-ghost btn-lg">Read the FAQ</a></div>
  </div>
</section>

<!-- CTA -->
<section>
  <div class="container">
    <div class="cta-band reveal pending" use:reveal>
      <h2 class="display" style="font-size:clamp(2rem,4.5vw,3.2rem)">See it on your own product.</h2>
      <p class="lead" style="margin:1rem auto 0;text-align:center">One free test sample per business — no card, no commitment.</p>
      <div class="flex" style="justify-content:center;margin-top:1.8rem">
        <a href="/test-sample" class="btn btn-primary btn-lg">Free test sample</a>
        <a href="/order" class="btn btn-ghost btn-lg">Order now</a>
        <a href="https://wa.me/31625436130" class="btn btn-wa" target="_blank" rel="noopener"><svg class="i" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1.5-4.5A8.38 8.38 0 0 1 3.5 11 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 8.5 8.5z"/></svg> WhatsApp</a>
      </div>
    </div>
  </div>
</section>

<style>
  /* How-it-works-only: the chip row (also used, independently, on /about)
     and the auto-fit detail-card grid. Small enough to keep page-scoped
     rather than promoting to app.css. */
  .chip-row { display: flex; flex-wrap: wrap; gap: .5rem; }
  .chip { display: inline-flex; align-items: center; gap: .45rem; padding: .4rem .9rem; border-radius: var(--r-pill); border: 1px solid var(--line); font-size: .8rem; color: var(--ink-2); }
  .chip .dot { width: 5px; height: 5px; border-radius: 50%; background: var(--accent); }
  .grid-auto { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }
</style>
