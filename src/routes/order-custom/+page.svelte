<script>
  // VISUAILS — custom styling. Ported from static /order-custom.html: this
  // page never posts to a backend in the source either — it builds a
  // pre-filled WhatsApp deep link from the form fields and hands off there,
  // which works fully client-side on a static site with no server involved.
  // Preserved as-is (same field set feeding the same message template,
  // including the source's own quirk of collecting a WhatsApp number field
  // that isn't actually included in the generated message text).
  import { reveal } from '$lib/actions/reveal.js';

  let name = $state('');
  let brand = $state('');
  let type = $state('');
  let idea = $state('');

  let waText = $derived(
    `Hi VISUAILS, I'm interested in custom styling.\n\nName: ${name}\nBusiness: ${brand}\nLooking for: ${type}\nIn mind: ${idea}`
  );
  let waHref = $derived(`https://wa.me/31625436130?text=${encodeURIComponent(waText)}`);
</script>

<svelte:head>
  <title>Custom styling — VISUAILS</title>
  <meta name="description" content="Arrange a custom catalog style, lifestyle style or custom model entirely over WhatsApp — then we look at style and budget together." />
</svelte:head>

<section class="page-hero" style="padding-bottom:0">
  <div class="container">
    <p class="eyebrow-page"><a href="/order" style="color:inherit">&larr; All ordering options</a></p>
  </div>
</section>

<section id="custom" class="ord-anchor section-tight">
  <div class="container narrow">
    <div class="section-head">
      <span class="kicker">Custom styling</span>
      <h2 style="margin-top:.8rem">Something more custom?</h2>
      <p>Custom styling is arranged entirely over WhatsApp — we then look at style and budget together.</p>
    </div>
    <div class="card reveal pending" use:reveal style="padding:clamp(1.4rem,3vw,2.4rem)">
      <form onsubmit={(e) => e.preventDefault()}>
        <div class="row-2">
          <div class="field">
            <label for="cu-name">Name <span class="req">*</span></label>
            <input class="input" type="text" id="cu-name" name="name" autocomplete="name" bind:value={name} required />
          </div>
          <div class="field">
            <label for="cu-brand">Brand or business name <span class="req">*</span></label>
            <input class="input" type="text" id="cu-brand" name="brand" autocomplete="organization" bind:value={brand} required />
          </div>
        </div>
        <div class="field">
          <label for="cu-type">What are you looking for? <span class="req">*</span></label>
          <select class="select" id="cu-type" name="type" bind:value={type} required>
            <option value="" disabled selected>Choose one&hellip;</option>
            <option value="Custom catalog style">Custom catalog style</option>
            <option value="Custom lifestyle style">Custom lifestyle style</option>
            <option value="Custom model">Custom model</option>
            <option value="Something else">Something else</option>
          </select>
        </div>
        <div class="field">
          <label for="cu-idea">Tell us what you have in mind <span class="req">*</span></label>
          <textarea class="textarea" id="cu-idea" name="idea" style="min-height:90px" placeholder="A few lines on the look, references or goal." bind:value={idea} required></textarea>
        </div>
        <div class="field">
          <label for="cu-wa">WhatsApp number <span class="req">*</span></label>
          <input class="input" type="tel" id="cu-wa" name="whatsapp" autocomplete="tel" placeholder="+31 6 &hellip;" required />
        </div>
        <p class="hint" style="margin-bottom:1.2rem">Custom styling is arranged entirely over WhatsApp — we then look at style and budget together.</p>
        <a href={waHref} class="btn btn-wa btn-lg btn-block" target="_blank" rel="noopener">
          <svg class="i" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1.5-4.5A8.38 8.38 0 0 1 3.5 11 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 8.5 8.5z" /></svg>
          Continue on WhatsApp
        </a>
      </form>
    </div>
  </div>
</section>

<section class="section-tight">
  <div class="container">
    <div class="section-head">
      <h2 style="font-size:1.4rem">Looking for something else?</h2>
    </div>
    <div class="chip-row">
      <a href="/order-catalog" class="chip">Catalog</a>
      <a href="/order-lifestyle" class="chip">Lifestyle</a>
      <a href="/order-video" class="chip">Video</a>
    </div>
  </div>
</section>

<style>
  /* Order-form controls — page-scoped (see order-catalog/+page.svelte for
     the same block; duplicated per-route rather than added to app.css). */
  .narrow { max-width: 820px; }
  .field { display: flex; flex-direction: column; gap: 0.45rem; margin-bottom: 1.1rem; }
  .field label { font-size: 0.88rem; font-weight: 600; color: var(--ink); }
  .req { color: var(--accent-bright); }
  .hint { font-size: 0.8rem; color: var(--ink-3); }
  .input, .textarea, .select { width: 100%; padding: 0.85rem 1rem; background: var(--surface); border: 1px solid var(--line-strong); border-radius: var(--r-sm); color: var(--ink); transition: border-color 0.22s var(--ease), box-shadow 0.22s var(--ease); font-size: 0.98rem; font-family: var(--font-body); }
  .input::placeholder, .textarea::placeholder { color: var(--ink-3); }
  .input:focus, .textarea:focus, .select:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }
  .select option { background: var(--surface); color: var(--ink); }
  .textarea { resize: vertical; font-family: var(--font-body); }
  .row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1.1rem; }
  @media (max-width: 620px) { .row-2 { grid-template-columns: 1fr; } }
  .chip-row { display: flex; flex-wrap: wrap; gap: 0.5rem; }
  .chip { display: inline-flex; align-items: center; gap: 0.45rem; padding: 0.4rem 0.9rem; border-radius: var(--r-pill); border: 1px solid var(--line); font-size: 0.8rem; color: var(--ink-2); }
  a.chip { transition: border-color var(--dur) var(--ease), color var(--dur) var(--ease); }
  a.chip:hover { border-color: var(--accent-line); color: var(--ink); }
  .ord-anchor { scroll-margin-top: 100px; }
</style>
