<script>
  // VISUAILS — Custom Models. v2 redesign: leans on model-01/02/03 and
  // custom-models-01/02/03 heavily (see IMAGES.md), one eyebrow max, copy
  // cut hard. Real-examples grid now renders the finished photography
  // directly (photo-band) instead of wrapping it in the ProductScene
  // studio-card frame, which is built for icon placeholders, not finished
  // shots.
  import { reveal } from '$lib/actions/reveal.js';
  import { magnetic } from '$lib/actions/magnetic.js';

  const directions = [
    { initial: 'E', name: 'Editorial minimal', body: 'Restrained studio light, quiet posture, neutral wardrobe.' },
    { initial: 'S', name: 'Streetwear energy', body: 'Direct gaze, bold stance, contrast light — for drops and hype.' },
    { initial: 'Q', name: 'Quiet luxury', body: 'Soft neutrals, unhurried posture, refined detail.' },
    { initial: 'W', name: 'Warm & approachable', body: 'Open expression, natural light, everyday ease.' },
    { initial: 'H', name: 'High-fashion editorial', body: 'Sculptural pose, hard shadow, magazine intensity.' },
    { initial: 'R', name: 'Retro Americana', body: 'Warm film tones, nostalgic styling.' },
    { initial: 'C', name: 'Coastal & sun-worn', body: 'Sun-bleached warmth, golden-hour ease — built for Dunes.' },
    { initial: 'M', name: 'Monochrome studio', body: 'Single-tone wardrobe, graphic shadow.' },
    { initial: 'B', name: 'Bold colour-block', body: 'Saturated wardrobe, unmistakable at thumbnail size.' },
  ];

  const examples = ['/img/custom-models-01.webp', '/img/custom-models-02.webp', '/img/custom-models-03.webp'];

  const steps = [
    { n: '01', title: 'Intake', body: 'You share references and a brief on the look you want.' },
    { n: '02', title: '2–3 directions', body: 'We design a few directions for you to react to.' },
    { n: '03', title: 'You choose', body: 'Pick the face that fits, with one round of refinement.' },
    { n: '04', title: 'Locked in', body: 'We lock the model so it stays perfectly consistent.' },
    { n: '05', title: 'Used in every order', body: 'Your model appears in every visual from then on.' },
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
      <p class="lead" style="margin-top:1.2rem">Design a model exclusively for you — it appears in every visual you order, this month and next year.</p>
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
    <div class="photo-split-media" style="aspect-ratio:4/5">
      <img src="/img/custom-models-03.webp" alt="A VISUAILS custom model portrait" loading="lazy" />
    </div>
  </div>
</section>

<!-- WHY CUSTOM -->
<section class="section-tight">
  <div class="container">
    <div class="photo-split reverse reveal pending" use:reveal>
      <div class="photo-split-media">
        <img src="/img/model-03.webp" alt="A VISUAILS model portrait" loading="lazy" />
      </div>
      <div>
        <h2>Your model, not <em>a</em> model.</h2>
        <p class="lead" style="margin-top:1rem">Standard models are shared across brands. A custom model is designed once, for you alone, and never appears anywhere else.</p>
      </div>
    </div>
    <div class="arrow-rows" style="grid-template-columns:repeat(2,1fr);margin-top:clamp(2.5rem,5vw,4rem)">
      <div class="arow reveal pending" use:reveal><h3>Built from your brief</h3><p>Age, vibe, styling, do's and don'ts.</p></div>
      <div class="arow reveal pending" use:reveal><h3>Exclusive, by design</h3><p>No other business can order the same face.</p></div>
      <div class="arow reveal pending" use:reveal><h3>Consistent, forever</h3><p>The same face in every visual, order after order.</p></div>
      <div class="arow reveal pending" use:reveal><h3>Reused at no extra cost</h3><p>One-time fee. Every order after runs at the normal price.</p></div>
    </div>
  </div>
</section>

<!-- DIRECTIONS GALLERY -->
<section>
  <div class="container">
    <h2 style="margin-bottom:.6rem">A few directions to <em>spark ideas.</em></h2>
    <p class="lead" style="margin-bottom:2rem">Illustrative starting points, not a fixed menu — tell us your references and we'll design 2–3 real directions.</p>
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
    <h2 style="margin-bottom:2rem">Real output, not a mockup.</h2>
    <div class="grid grid-3">
      {#each examples as photo, i}
        <div class="reveal pending" use:reveal>
          <div class="photo-band square">
            <img src={photo} alt="Custom model example {i + 1}" loading="lazy" />
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section class="section-tight">
  <div class="container">
    <h2 style="margin-bottom:2rem">How a custom model comes together</h2>
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
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>A few <strong>references</strong> for the look.</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>The <strong>age, vibe and look</strong> you want.</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>Any <strong>styling</strong> direction.</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>Your <strong>do's and don'ts.</strong></span></li>
      </ul>
    </div>
    <div class="card reveal pending" use:reveal style="border-color:var(--accent-line)">
      <h3>Pricing &amp; timing</h3>
      <p class="measure" style="margin-top:1rem">A <strong>one-time design fee</strong>, then the normal visual price forever. The first order takes a little longer; every one after that runs at the usual speed.</p>
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
     convention for these small bits. v2: no italics (see DESIGN.md). */
  .models-grid { grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); }
  .model-card { display: flex; flex-direction: column; gap: .9rem; }

  .monogram {
    width: 60px; height: 60px; border-radius: 50%;
    display: grid; place-items: center;
    font-family: var(--font-display); font-weight: 900; font-size: 1.3rem;
    color: var(--ink); background: var(--surface-2); border: 1px solid var(--line-strong);
  }

  .measure { max-width: 66ch; }
</style>
