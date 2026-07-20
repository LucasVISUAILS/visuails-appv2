<script>
  // VISUAILS — Custom Models. Ported from /tmp/visuails-web/custom-models.html.
  // Shares the monogram/chip patterns with /models (scoped locally here too —
  // small enough duplication that a shared component isn't worth it yet).
  import { reveal } from '$lib/actions/reveal.js';
  import { magnetic } from '$lib/actions/magnetic.js';
  import ProductScene from '$lib/components/site/ProductScene.svelte';

  const directions = [
    { initial: 'E', name: 'Editorial minimal', body: 'Restrained studio light, quiet posture, neutral wardrobe — a face that lets the product lead.' },
    { initial: 'S', name: 'Streetwear energy', body: 'Direct gaze, bold stance, contrast light — built for drops and hype moments.' },
    { initial: 'Q', name: 'Quiet luxury', body: 'Soft neutrals, unhurried posture, refined detail — the vocabulary of premium goods.' },
    { initial: 'W', name: 'Warm & approachable', body: 'Open expression, natural light, everyday ease — for brands that sell to real life.' },
    { initial: 'H', name: 'High-fashion editorial', body: 'Sculptural pose, hard shadow, magazine intensity — for brands with an edge.' },
    { initial: 'R', name: 'Retro Americana', body: "Warm film tones, nostalgic styling, a face that feels like it's always been part of the brand." },
    { initial: 'C', name: 'Coastal & sun-worn', body: 'Sun-bleached warmth, relaxed shoulders, golden-hour ease — built for Dunes-style scenes.' },
    { initial: 'M', name: 'Monochrome studio', body: 'Single-tone wardrobe, graphic shadow, a face built to repeat cleanly across a grid.' },
    { initial: 'B', name: 'Bold colour-block', body: 'Saturated wardrobe, confident colour pairing, unmistakable at thumbnail size.' },
  ];

  const examples = ['/img/custom-models-01.webp', '/img/custom-models-02.webp', '/img/custom-models-03.webp'];

  const steps = [
    { n: '01', title: 'Intake', body: "You share references and a brief on the look, age and vibe you're after." },
    { n: '02', title: '2–3 directions', body: 'We design a few distinct model directions for you to react to.' },
    { n: '03', title: 'You choose', body: 'Pick the face that fits your brand best — with a round of refinement.' },
    { n: '04', title: 'Locked in', body: 'We lock the final model so it stays perfectly consistent going forward.' },
    { n: '05', title: 'Used in every order', body: 'From then on, your model appears in every visual you order.' },
  ];
</script>

<svelte:head>
  <title>Custom Models — a face exclusively yours | VISUAILS</title>
  <meta name="description" content="Design a custom model exclusively for your brand: a short intake, 2-3 directions, one round of refinement, then locked in and reused in every visual you order." />
</svelte:head>

<!-- HERO -->
<section class="page-hero">
  <div class="container two-col" style="align-items:center">
    <div>
      <p class="eyebrow-page"><a href="/models" style="color:inherit">&larr; Models</a></p>
      <h1 class="display" style="font-size:clamp(2.4rem,5vw,4rem)">A face that exists <em>only</em> for your brand.</h1>
      <p class="lead" style="margin-top:1.2rem">Continue the identity you already have, or create the one you always wanted. We design a model exclusively for you, then it appears in every visual you order — this month and next year.</p>
      <div class="flex" style="margin-top:1.8rem">
        <span class="magnet-wrap" use:magnetic><span class="magnet-inner"><a href="/order-custom" class="btn btn-primary btn-lg">Start your custom model</a></span></span>
        <a href="https://wa.me/31625436130?text=Hi%20VISUAILS%2C%20I%27d%20like%20to%20discuss%20a%20custom%20model%20for%20my%20brand." class="btn btn-wa" target="_blank" rel="noopener">
          <svg class="i" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1.5-4.5A8.38 8.38 0 0 1 3.5 11 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 8.5 8.5z"/></svg>
          Discuss on WhatsApp
        </a>
      </div>
      <div class="trust-row" style="margin-top:2.4rem">
        <span class="trust-item"><strong>One-time</strong> design fee</span>
        <span class="trust-item"><strong>Exclusive</strong> to your brand</span>
        <span class="trust-item"><strong>Locked</strong> forever, reused free</span>
      </div>
    </div>
    <div>
      <ProductScene photo="/img/custom-models-03.webp" icon="jar" width="44%" badge="One consistent face, everywhere" wide />
    </div>
  </div>
</section>

<!-- WHY CUSTOM -->
<section class="section-tight">
  <div class="container">
    <div class="section-head">
      <span class="kicker">Why go custom</span>
      <h2 style="margin-top:1rem">Your model, not <em>a</em> model.</h2>
      <p>Standard models are shared across brands — a great starting point, included in every order. A custom model is designed once, for you alone, and never appears anywhere else.</p>
    </div>
    <div class="arrow-rows" style="grid-template-columns:repeat(2,1fr)">
      <div class="arow reveal pending" use:reveal><h3>Built from your brief</h3><p>Age, vibe, styling, do's and don'ts — the model reflects the brand you're building, not a generic library entry.</p></div>
      <div class="arow reveal pending" use:reveal><h3>Exclusive, by design</h3><p>Once locked, your model is reserved to your brand. No other business can order the same face.</p></div>
      <div class="arow reveal pending" use:reveal><h3>Consistent, forever</h3><p>The same face, expression range and presence in every catalog, lifestyle and video visual — order after order, year after year.</p></div>
      <div class="arow reveal pending" use:reveal><h3>Reused at no extra cost</h3><p>The design fee is one-time. Every order after that runs at the normal per-visual price — no ongoing model fee.</p></div>
    </div>
  </div>
</section>

<!-- DIRECTIONS GALLERY -->
<section>
  <div class="container">
    <div class="section-head">
      <span class="kicker">What's possible</span>
      <h2 style="margin-top:1rem">A few directions to <em>spark ideas.</em></h2>
      <p>These are illustrative starting points, not a fixed menu — your custom model can lean anywhere your brand does. Tell us the references and we'll design 2–3 real directions around them.</p>
    </div>
    <div class="grid models-grid">
      {#each directions as d}
        <div class="card model-card reveal pending" use:reveal>
          <div class="monogram" aria-hidden="true">{d.initial}</div>
          <h3>{d.name}</h3>
          <p style="font-size:.9rem;color:var(--ink-3)">{d.body}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- REAL EXAMPLES -->
<section class="section-tight">
  <div class="container">
    <div class="section-head">
      <span class="kicker">What you actually get</span>
      <h2 style="margin-top:1rem">Real output, not a mockup.</h2>
      <p>Three finished custom models, generated end-to-end — this is the level of realism and consistency every custom model ships with.</p>
    </div>
    <div class="grid grid-3">
      {#each examples as photo}
        <div class="card example-scene reveal pending" use:reveal style="padding:0;overflow:hidden">
          <ProductScene {photo} badge="Generated example" />
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section class="section-tight">
  <div class="container">
    <div class="section-head">
      <h2>How a custom model comes together</h2>
      <p>A short, collaborative process — then your model is locked in for every future order.</p>
    </div>
    <div class="steps">
      {#each steps as s}
        <div class="step reveal pending" use:reveal>
          <span class="step-n">{s.n}</span>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- WHAT YOU PROVIDE + PRICING -->
<section class="section-tight">
  <div class="container two-col" style="align-items:start">
    <div class="card reveal pending" use:reveal>
      <h3>What you provide</h3>
      <ul class="checklist" style="margin-top:1.2rem">
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>A few <strong>references</strong> for the look you have in mind.</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>The <strong>age, vibe and look</strong> that fits your brand.</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>Any <strong>clothing</strong> or styling direction.</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>Your <strong>do's and don'ts</strong> — anything to include or avoid.</span></li>
      </ul>
    </div>
    <div class="card reveal pending" use:reveal style="border-color:var(--accent-line)">
      <h3>Pricing &amp; timing</h3>
      <p class="measure" style="margin-top:1rem">A custom model is a <strong>one-time design fee</strong>, then it's yours to reuse across every future order at the normal visual price. Because we design the model up front, the <strong>first order has a longer lead time</strong> — after that, every order runs at the usual speed.</p>
      <div class="flex" style="margin-top:1.6rem">
        <a href="/order-custom" class="btn btn-primary">Start your custom model</a>
        <a href="/pricing" class="link-arrow">See pricing <svg viewBox="0 0 24 24" class="i"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
    </div>
  </div>
</section>

<!-- CLOSING CTA -->
<section>
  <div class="container">
    <div class="cta-band reveal pending" use:reveal>
      <h2 class="display" style="font-size:clamp(2.2rem,5vw,3.6rem)">Design the face of <em>your</em> brand.</h2>
      <p class="lead" style="margin:1.2rem auto 0;text-align:center">Start with a short intake over WhatsApp, or fill in the request form — we'll take it from there.</p>
      <div class="flex" style="justify-content:center;margin-top:2rem">
        <a href="/order-custom" class="btn btn-primary btn-lg">Start your custom model</a>
        <a href="/models" class="btn btn-ghost btn-lg">Browse standard models</a>
        <a href="https://wa.me/31625436130?text=Hi%20VISUAILS%2C%20I%27d%20like%20to%20discuss%20a%20custom%20model%20for%20my%20brand." class="btn btn-wa" target="_blank" rel="noopener">
          <svg class="i" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1.5-4.5A8.38 8.38 0 0 1 3.5 11 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 8.5 8.5z"/></svg>
          WhatsApp
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  /* Same local monogram/measure patterns as /models — kept scoped per-page
     rather than shared, per the project's current no-shared-component-yet
     convention for these small bits. */
  .models-grid { grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); }
  .model-card { display: flex; flex-direction: column; gap: .9rem; }

  .monogram {
    width: 60px; height: 60px; border-radius: 50%;
    display: grid; place-items: center;
    font-family: var(--font-display); font-style: italic; font-size: 1.5rem;
    color: var(--ink); background: var(--surface-2); border: 1px solid var(--line-strong);
  }

  .measure { max-width: 66ch; }

  /* Real-examples grid: force the ProductScene placeholder to a square
     frame, matching the source's `.vis.square` treatment. */
  .example-scene :global(.vis) { aspect-ratio: 1; border-radius: 0; }
</style>
