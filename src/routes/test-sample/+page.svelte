<script>
  // VISUAILS — free test sample. Ported from static /test-sample.html: a
  // 2-step request wizard (style/model/product -> contact) inside one
  // <form>, steps kept mounted the whole time (class toggle, not {#if}) so
  // field values survive stepping back and forth.
  //
  // NOTE: adapter-static means there is no backend anywhere in this project
  // (same as the current live static site). This form submits as a plain
  // GET to /thank-you, mirroring order-catalog.html's
  // `<form action="thank-you.html" method="get">` pattern — the static
  // source instead used `onclick="location.href='thank-you.html'"` on the
  // final button without submitting any field data, so this is a faithful
  // improvement. No data is actually received or stored either way, and a
  // GET form can't carry the uploaded photo regardless — replace with a
  // real form endpoint (Formspree, a Cloudflare Pages Function, etc.)
  // before launch.
  import { reveal } from '$lib/actions/reveal.js';
  import ProductScene from '$lib/components/site/ProductScene.svelte';

  const styles = [
    { value: 'Phone-made', icon: 'bottle', vb: '0 0 120 150', w: '42%' },
    { value: 'Glow', icon: 'jar', vb: '0 0 120 130', w: '46%' },
    { value: 'Flash', icon: 'sneaker', vb: '0 0 160 110', w: '54%' },
    { value: 'Dunes', icon: 'bag', vb: '0 0 120 130', w: '46%' },
  ];
  const roster = ['Aaron', 'Ava', 'Lila', 'Sam', 'Morgan', 'Dasha', 'Elias', 'Ryan', 'Rose'];

  let step = $state(1);
</script>

<svelte:head>
  <title>Test VISUAILS with 1 product — free sample</title>
  <meta name="description" content="Upload one product photo and let VISUAILS turn it into a professional e-commerce visual. See how it works before you order — 1 free sample per business, human quality-checked." />
</svelte:head>

<!-- HERO -->
<section class="page-hero"><div class="container">
  <span class="eyebrow-page">Free test sample</span>
  <h1 class="display" style="font-size:clamp(2.4rem,5vw,4rem)">Test VISUAILS with <span class="accent-word">1 product</span></h1>
  <p class="lead" style="margin-top:1.2rem">Upload one product photo and let us turn it into a professional e-commerce visual. Perfect if you want to see how VISUAILS works before ordering.</p>
  <div class="chip-row" style="margin-top:1.8rem">
    <span class="chip"><span class="dot"></span>1 sample per business</span>
    <span class="chip"><span class="dot"></span>&euro;0.99 verification</span>
    <span class="chip"><span class="dot"></span>Human quality-checked</span>
  </div>
</div></section>

<!-- WHAT YOU GET -->
<section class="section-tight">
  <div class="container two-col">
    <div class="reveal pending" use:reveal>
      <span class="kicker">What you get</span>
      <h2 style="margin-top:1rem">One product, turned into a publish-ready visual.</h2>
      <p style="margin-top:1.1rem;color:var(--ink-3);max-width:52ch">We take your single product photo and create one clean, professional e-commerce visual — the same pipeline and human review used on every paid order. It's the honest way to judge the quality before you commit to anything.</p>
      <ul class="checklist" style="margin-top:1.4rem">
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5" /></svg><span>One high-resolution visual, delivered by email download link.</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5" /></svg><span>A real look at our lighting, framing and finish.</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5" /></svg><span>Reviewed by a person before it reaches you.</span></li>
        <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5" /></svg><span>No subscription, no card up front — 1 sample per business.</span></li>
      </ul>
    </div>
    <div class="reveal pending" use:reveal>
      <ProductScene icon="bottle" width="42%" badge="Your sample &middot; Human-checked" wide />
    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section>
  <div class="container">
    <div class="section-head">
      <h2>How the sample works</h2>
      <p>Four short steps from your photo to a finished visual in your inbox.</p>
    </div>
    <div class="steps">
      <div class="step reveal pending" use:reveal><div class="step-n">01</div><h3>Upload product photo</h3><p>Share one clear photo of the product you'd like us to work with.</p></div>
      <div class="step reveal pending" use:reveal><div class="step-n">02</div><h3>Choose a style</h3><p>Pick the look and, if you like, a model — or let us choose for you.</p></div>
      <div class="step reveal pending" use:reveal><div class="step-n">03</div><h3>We create it</h3><p>Produced in our studio, then quality-checked by hand.</p></div>
      <div class="step reveal pending" use:reveal><div class="step-n">04</div><h3>Receive by email</h3><p>Your finished visual arrives as a download link, usually within ~24 hours.</p></div>
    </div>
  </div>
</section>

<!-- INPUT GUIDANCE -->
<section class="section-tight">
  <div class="container">
    <div class="section-head">
      <h2>Give us a good photo, get a great result</h2>
      <p>The clearer your input, the better the visual we can build from it.</p>
    </div>
    <div class="grid grid-2">
      <div class="card reveal pending" use:reveal>
        <h3 style="color:var(--success)">Do</h3>
        <ul class="checklist" style="margin-top:1rem">
          <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5" /></svg><span>Clear, sharp and in focus</span></li>
          <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5" /></svg><span>Neutral, uncluttered background</span></li>
          <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5" /></svg><span>Good, even lighting</span></li>
          <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5" /></svg><span>The whole product in frame</span></li>
        </ul>
      </div>
      <div class="card reveal pending" use:reveal>
        <h3 style="color:var(--ink-3)">Don't</h3>
        <ul class="checklist" style="margin-top:1rem">
          <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--ink-3)"><path d="M18 6L6 18M6 6l12 12" /></svg><span>Blurry or low-resolution shots</span></li>
          <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--ink-3)"><path d="M18 6L6 18M6 6l12 12" /></svg><span>Dark or heavily shadowed photos</span></li>
          <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--ink-3)"><path d="M18 6L6 18M6 6l12 12" /></svg><span>Busy or distracting backgrounds</span></li>
          <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--ink-3)"><path d="M18 6L6 18M6 6l12 12" /></svg><span>Heavy filters or watermarks</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- REQUEST WIZARD -->
<section>
  <div class="container narrow">
    <div class="section-head">
      <h2>Request your free sample</h2>
      <p>Two quick steps. Tell us the look you want, then where to send it.</p>
    </div>
    <div class="card reveal pending" use:reveal style="padding:clamp(1.4rem,3vw,2.4rem)">
      <form action="/thank-you" method="get">
        <div class="progress" aria-hidden="true"><i style="width:{(step / 2) * 100}%"></i></div>

        <!-- STEP 1 -->
        <div class:hidden-step={step !== 1}>
          <h3 style="margin-bottom:.4rem">Step 1 &middot; Style, model &amp; product</h3>
          <p class="hint" style="margin-bottom:1.4rem">Choose the look you're after and upload your product photo.</p>

          <div class="field">
            <label>Choose a style <span class="req">*</span></label>
            <div class="choice-grid">
              {#each styles as s, i}
                <label class="choice">
                  <input type="radio" name="style" value={s.value} required={i === 0} />
                  <div class="choice-media vis"><div class="vis-glow"></div><div class="vis-obj" style="width:{s.w}"><svg viewBox={s.vb}><use href="#p-{s.icon}" /></svg></div><div class="vis-floor"></div></div>
                  <div class="choice-label">{s.value}</div>
                </label>
              {/each}
            </div>
          </div>

          <div class="field">
            <label>Choose a model <span class="req">*</span></label>
            <span class="hint" style="margin-bottom:.3rem">Optional for most products — handy for apparel and accessories.</span>
            <div class="choice-grid">
              {#each roster as m, i}
                <label class="choice">
                  <input type="radio" name="model" value={m} required={i === 0} />
                  <div class="choice-media vis mono"><div class="vis-glow"></div><div class="mono-av">{m[0]}<small>{m}</small></div></div>
                  <div class="choice-label">{m}</div>
                </label>
              {/each}
              <label class="choice">
                <input type="radio" name="model" value="VISUAILS choose" />
                <div class="choice-media vis mono"><div class="vis-glow"></div><div class="mono-av"><svg viewBox="0 0 24 24" class="i" style="width:26px;height:26px;color:var(--accent-bright)"><path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4-6.3-4.6L5.7 21.4 8 14 2 9.4h7.6z" /></svg></div></div>
                <div class="choice-label">Let VISUAILS choose</div>
              </label>
            </div>
          </div>

          <div class="field">
            <label for="ts-upload">Upload product photo <span class="req">*</span></label>
            <label class="dropzone" for="ts-upload">
              <svg viewBox="0 0 24 24" class="i"><path d="M12 16V4M6 10l6-6 6 6M4 20h16" /></svg>
              <div><strong>Click to upload</strong> or drag a photo here</div>
              <div class="hint" style="margin-top:.4rem">Upload clear product photos to help us create accurate results.</div>
              <input type="file" id="ts-upload" name="photo" accept="image/*" multiple hidden />
            </label>
          </div>

          <div class="field">
            <label for="ts-notes">Anything we should know?</label>
            <textarea class="textarea" id="ts-notes" name="notes" placeholder="Optional — colours to keep true, angle you prefer, anything specific about the product."></textarea>
          </div>

          <div class="flex" style="justify-content:flex-end;margin-top:.4rem">
            <button type="button" class="btn btn-primary" onclick={() => (step = 2)}>Next
              <svg viewBox="0 0 24 24" class="i"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </button>
          </div>
        </div>

        <!-- STEP 2 -->
        <div class:hidden-step={step !== 2}>
          <h3 style="margin-bottom:.4rem">Step 2 &middot; Details &amp; contact</h3>
          <p class="hint" style="margin-bottom:1.4rem">Where should we send your finished sample?</p>

          <div class="row-2">
            <div class="field">
              <label for="ts-name">Name <span class="req">*</span></label>
              <input class="input" type="text" id="ts-name" name="name" autocomplete="name" required />
            </div>
            <div class="field">
              <label for="ts-brand">Brand or store name <span class="req">*</span></label>
              <input class="input" type="text" id="ts-brand" name="brand" autocomplete="organization" required />
            </div>
          </div>

          <h4 style="margin:.6rem 0 1rem">Contact</h4>
          <div class="row-2">
            <div class="field">
              <label for="ts-email">Email <span class="req">*</span></label>
              <input class="input" type="email" id="ts-email" name="email" autocomplete="email" required />
            </div>
            <div class="field">
              <label for="ts-phone">Phone <span class="req">*</span></label>
              <input class="input" type="tel" id="ts-phone" name="phone" autocomplete="tel" placeholder="+31 6 &hellip;" required />
              <span class="hint">Please include your country code.</span>
            </div>
          </div>

          <p class="hint" style="margin:.4rem 0 1.4rem">Your sample will be delivered via a download link to your email. If needed, we'll reach out via WhatsApp or email.</p>

          <div class="flex" style="justify-content:space-between;margin-top:.4rem">
            <button type="button" class="btn btn-ghost" onclick={() => (step = 1)}>
              <svg viewBox="0 0 24 24" class="i" style="transform:rotate(180deg)"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              Back
            </button>
            <button type="submit" class="btn btn-primary">Request sample</button>
          </div>
        </div>
      </form>
    </div>
    <p class="hint" style="text-align:center;margin-top:1rem">1 sample per business &middot; a &euro;0.99 verification may be requested to prevent abuse.</p>
  </div>
</section>

<!-- CTA BAND -->
<section>
  <div class="container">
    <div class="cta-band reveal pending" use:reveal>
      <h2 class="display" style="font-size:clamp(2.2rem,5vw,3.6rem)">Rather just talk it through?</h2>
      <p class="lead" style="margin:1.2rem auto 0;text-align:center">Send us your product on WhatsApp and we'll help you pick a style. We usually reply within the hour.</p>
      <div class="flex" style="justify-content:center;margin-top:2rem">
        <a href="/order" class="btn btn-ghost btn-lg">Place a full order</a>
        <a href="https://wa.me/31625436130?text=Hi%20VISUAILS%2C%20I%27d%20like%20to%20try%20a%20free%20test%20sample." class="btn btn-wa btn-lg" target="_blank" rel="noopener">
          <svg class="i" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1.5-4.5A8.38 8.38 0 0 1 3.5 11 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 8.5 8.5z" /></svg>
          WhatsApp <span class="rec-badge">Fastest</span>
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  /* Order-form controls — page-scoped (see order-catalog/+page.svelte for
     the same block; duplicated per-route rather than added to app.css). */
  .narrow { max-width: 820px; }
  .hidden-step { display: none; }
  .field { display: flex; flex-direction: column; gap: 0.45rem; margin-bottom: 1.1rem; }
  .field label { font-size: 0.88rem; font-weight: 600; color: var(--ink); }
  .req { color: var(--accent-bright); }
  .hint { font-size: 0.8rem; color: var(--ink-3); }
  .input, .textarea { width: 100%; padding: 0.85rem 1rem; background: var(--surface); border: 1px solid var(--line-strong); border-radius: var(--r-sm); color: var(--ink); transition: border-color 0.22s var(--ease), box-shadow 0.22s var(--ease); font-size: 0.98rem; font-family: var(--font-body); }
  .input::placeholder, .textarea::placeholder { color: var(--ink-3); }
  .input:focus, .textarea:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }
  .textarea { min-height: 110px; resize: vertical; }
  .row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1.1rem; }
  @media (max-width: 620px) { .row-2 { grid-template-columns: 1fr; } }
  .choice-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 0.8rem; }
  .choice { position: relative; border-radius: var(--r-sm); overflow: hidden; cursor: pointer; border: 1px solid var(--line-strong); transition: transform 0.24s var(--ease), border-color 0.24s var(--ease); background: var(--surface); display: block; }
  .choice:hover { transform: translateY(-2px); border-color: var(--accent-line); }
  .choice input { position: absolute; opacity: 0; pointer-events: none; }
  .choice .choice-media { aspect-ratio: 1; }
  .choice .choice-label { padding: 0.6rem 0.7rem; font-size: 0.85rem; color: var(--ink); font-weight: 500; }
  .choice:has(input:checked) { border-color: var(--accent); box-shadow: 0 0 0 1px var(--accent); }
  .choice:has(input:checked)::after { content: "\2713"; position: absolute; top: 8px; right: 8px; width: 24px; height: 24px; border-radius: 50%; background: var(--accent); color: #fff; display: grid; place-items: center; font-size: 0.8rem; font-weight: 700; z-index: 5; }
  .choice .mono-av { position: relative; z-index: 2; display: grid; place-items: center; width: 100%; height: 100%; font-family: var(--font-display); font-style: italic; font-weight: 400; font-size: 1.4rem; color: var(--accent-bright); }
  .choice .mono-av small { position: absolute; bottom: 8px; font-size: 0.58rem; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-3); font-family: var(--font-body); font-style: normal; }
  .dropzone { display: block; border-radius: var(--r-sm); padding: 1.8rem; text-align: center; color: var(--ink-3); border: 1.5px dashed var(--line-strong); transition: border-color 0.22s var(--ease), background 0.22s var(--ease); cursor: pointer; background: var(--surface); }
  .dropzone:hover { border-color: var(--accent-line); background: var(--accent-soft); }
  .dropzone svg { width: 30px; height: 30px; margin: 0 auto 0.6rem; color: var(--accent-bright); }
  .progress { height: 3px; background: var(--surface-2); border-radius: var(--r-pill); overflow: hidden; margin-bottom: 1.6rem; }
  .progress > i { display: block; height: 100%; background: var(--accent); transition: width 0.5s var(--ease); }
  .chip-row { display: flex; flex-wrap: wrap; gap: 0.5rem; }
  .chip { display: inline-flex; align-items: center; gap: 0.45rem; padding: 0.4rem 0.9rem; border-radius: var(--r-pill); border: 1px solid var(--line); font-size: 0.8rem; color: var(--ink-2); }
  .chip .dot { width: 5px; height: 5px; border-radius: 50%; background: var(--accent); }
</style>
