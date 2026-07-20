<script>
  // VISUAILS — Models hub. Ported from /tmp/visuails-web/models.html.
  // Standard-model roster + custom-model teaser, using shared app.css
  // utilities (page-hero, section-head, steps, checklist, cta-band …).
  // Monogram avatars and chip pills are new patterns not in app.css, so
  // they're scoped locally rather than touching the shared stylesheet.
  import { reveal } from '$lib/actions/reveal.js';
  import { magnetic } from '$lib/actions/magnetic.js';
  import ProductScene from '$lib/components/site/ProductScene.svelte';

  const standardModels = [
    { initial: 'A', name: 'Aaron', traits: ['Warm', 'Approachable'] },
    { initial: 'A', name: 'Ava', traits: ['Editorial', 'Elegant'] },
    { initial: 'E', name: 'Elias', traits: ['Refined', 'Classic'] },
    { initial: 'R', name: 'Ryan', traits: ['Sporty', 'Energetic'] },
    { initial: 'L', name: 'Lila', traits: ['Playful', 'Fresh'] },
    { initial: 'S', name: 'Sam', traits: ['Casual', 'Everyday'] },
    { initial: 'M', name: 'Morgan', traits: ['Minimal', 'Modern'] },
    { initial: 'D', name: 'Dasha', traits: ['High-fashion', 'Bold'] },
    { initial: 'R', name: 'Rose', traits: ['Soft', 'Natural'] },
    { initial: 'N', name: 'Noa', traits: ['Clean', 'Contemporary'] },
  ];

  const steps = [
    { n: '01', title: 'Intake', body: "You share references and a brief on the look, age and vibe you're after." },
    { n: '02', title: '2–3 directions', body: 'We design a few distinct model directions for you to react to.' },
    { n: '03', title: 'You choose', body: 'Pick the face that fits your brand best — with a round of refinement.' },
    { n: '04', title: 'Locked in', body: 'We lock the final model so it stays perfectly consistent going forward.' },
    { n: '05', title: 'Used in every order', body: 'From then on, your model appears in every visual you order.' },
  ];
</script>

<svelte:head>
  <title>VISUAILS — Consistent models across every visual</title>
  <meta name="description" content="Pick a standard model from our library or request a custom model that's exclusively yours — the same face and vibe in every catalog, lifestyle and video visual you order." />
</svelte:head>

<section class="page-hero">
  <div class="container">
    <p class="eyebrow-page">Models</p>
    <h1 class="display" style="max-width:22ch">Consistent models, across every visual</h1>
    <p class="lead" style="margin-top:1.2rem">Pick a model from our library — or create a custom model that's exclusively yours. The same face, the same vibe, in every image you order.</p>
    <div class="flex" style="margin-top:1.8rem">
      <a href="#standard" class="btn btn-primary btn-lg">Browse standard models</a>
      <a href="/order-custom" class="btn btn-ghost btn-lg">Request a custom model</a>
    </div>
  </div>
</section>

<!-- STANDARD MODELS -->
<section id="standard">
  <div class="container">
    <div class="section-head">
      <h2>Standard models</h2>
      <p>A library of consistent faces you can reuse across your whole range. Standard models are included in the visual price — no extra fee.</p>
    </div>
    <div class="grid models-grid">
      {#each standardModels as m}
        <div class="card card-hover model-card reveal pending" use:reveal>
          <div class="monogram" aria-hidden="true">{m.initial}</div>
          <h3>{m.name}</h3>
          <div class="chip-row">
            {#each m.traits as t}<span class="chip"><span class="dot"></span>{t}</span>{/each}
          </div>
          <a href="/order-lifestyle" class="link-arrow">Use this model <svg viewBox="0 0 24 24" class="i"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
      {/each}

      <div class="card card-hover model-card model-choose reveal pending" use:reveal>
        <div class="monogram monogram-accent" aria-hidden="true">
          <svg viewBox="0 0 24 24" class="i"><path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4-6.3-4.6L5.7 21.4 8 14 2 9.4h7.6z"/></svg>
        </div>
        <h3>Let VISUAILS choose a model</h3>
        <p style="font-size:.95rem;color:var(--ink-3)">Not sure who fits? Tell us your product and vibe, and we'll match a model from the library for you.</p>
        <a href="/order-lifestyle" class="link-arrow" style="color:var(--accent-bright)">Let us pick <svg viewBox="0 0 24 24" class="i"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
    </div>
    <p class="pill-note" style="margin-top:1.8rem">Standard models are included in the price of your visuals — no extra model fee.</p>
  </div>
</section>

<!-- CUSTOM MODEL TEASER -->
<section id="custom" class="section-tight">
  <div class="container two-col">
    <div class="reveal pending" use:reveal>
      <span class="kicker" style="color:var(--accent-bright)">Custom model</span>
      <h2 style="margin-top:1rem">Your own custom model</h2>
      <p class="lead" style="margin-top:1.2rem">A unique, exclusive model designed for your brand — then reused across every visual you ever order. One consistent face your customers will recognise.</p>
      <div class="chip-row" style="margin-top:1.6rem">
        <span class="chip"><span class="dot"></span>Exclusive to your brand</span>
        <span class="chip"><span class="dot"></span>Reused across every order</span>
        <span class="chip"><span class="dot"></span>Locked in for consistency</span>
      </div>
      <div class="flex" style="margin-top:1.8rem">
        <span class="magnet-wrap" use:magnetic><span class="magnet-inner"><a href="/order-custom" class="btn btn-primary">Start your custom model</a></span></span>
        <a href="https://wa.me/31625436130?text=Hi%20VISUAILS%2C%20I%27d%20like%20to%20discuss%20a%20custom%20model%20for%20my%20brand." class="btn btn-wa" target="_blank" rel="noopener">
          <svg class="i" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1.5-4.5A8.38 8.38 0 0 1 3.5 11 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 8.5 8.5z"/></svg>
          Discuss on WhatsApp
        </a>
      </div>
      <div style="margin-top:1.2rem"><a class="link-arrow" href="/custom-models">See directions &amp; full details <svg viewBox="0 0 24 24" class="i"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
    </div>
    <div class="reveal pending" use:reveal>
      <ProductScene photo="/img/banners-04.webp" icon="jar" width="44%" badge="One consistent face" wide />
    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section>
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
      <h2 class="display" style="font-size:clamp(2.2rem,5vw,3.6rem)">One face. Every visual.<br />Perfectly <em>consistent.</em></h2>
      <p class="lead" style="margin:1.2rem auto 0;text-align:center">Start with a standard model today, or design a custom model that's exclusively yours. Not sure which fits? We're happy to help you decide.</p>
      <div class="flex" style="justify-content:center;margin-top:2rem">
        <a href="/order-custom" class="btn btn-primary btn-lg">Request a custom model</a>
        <a href="#standard" class="btn btn-ghost btn-lg">Browse standard models</a>
        <a href="https://wa.me/31625436130?text=Hi%20VISUAILS%2C%20I%27d%20like%20to%20talk%20about%20models%20for%20my%20brand." class="btn btn-wa" target="_blank" rel="noopener">
          <svg class="i" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1.5-4.5A8.38 8.38 0 0 1 3.5 11 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 8.5 8.5z"/></svg>
          WhatsApp
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  /* Models-page-only patterns: monogram avatars, trait chips, auto-fit
     roster grid. Not shared elsewhere, so kept local rather than added
     to app.css. */
  .models-grid { grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); }

  .model-card { display: flex; flex-direction: column; gap: .9rem; }
  .model-choose { border-color: var(--accent-line); }

  .monogram {
    width: 60px; height: 60px; border-radius: 50%;
    display: grid; place-items: center;
    font-family: var(--font-display); font-style: italic; font-size: 1.5rem;
    color: var(--ink); background: var(--surface-2); border: 1px solid var(--line-strong);
  }
  .monogram-accent {
    background: var(--accent-soft); border: 1px solid var(--accent-line); color: var(--accent-bright);
  }
  .monogram-accent svg { width: 26px; height: 26px; }

  .chip-row { display: flex; flex-wrap: wrap; gap: .5rem; }
  .chip { display: inline-flex; align-items: center; gap: .45rem; padding: .4rem .85rem; border-radius: var(--r-pill); border: 1px solid var(--line); font-size: .8rem; color: var(--ink-2); }
  .chip .dot { width: 5px; height: 5px; border-radius: 50%; background: var(--accent); }

  .pill-note { display: inline-flex; align-items: center; gap: .5rem; padding: .45rem 1rem; border-radius: var(--r-pill); border: 1px solid var(--line); color: var(--ink-3); font-size: .82rem; font-weight: 500; }
  .measure { max-width: 66ch; }
</style>
