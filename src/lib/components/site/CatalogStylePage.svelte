<script>
  // VISUAILS — shared template for the 2 catalog style pages (Classic /
  // Custom Brand). One component, driven by the `style` data object from
  // $lib/data/catalogStyles.js — see src/routes/catalog/[slug]/+page.svelte
  // for how it's wired up. Mirrors StylePage.svelte's (lifestyle) structure;
  // the media band uses a plain ProductScene icon instead of a mask-reveal
  // photo, since neither source catalog page used a real background-image.
  import { reveal } from '$lib/actions/reveal.js';
  import { magnetic } from '$lib/actions/magnetic.js';
  import ProductScene from './ProductScene.svelte';

  let { style } = $props();

  const waName = $derived(style.name.replaceAll(' ', '%20'));
</script>

<svelte:head>
  <title>{style.name} — Catalog style | VISUAILS</title>
  <meta name="description" content="{style.name}: a signature VISUAILS catalog style. {style.metaPrice}. Produced in about 24 hours, every image checked by hand." />
</svelte:head>

<section class="page-hero">
  <div class="container">
    <p class="eyebrow-page"><a href="/catalog" style="color:inherit">Catalog styles</a></p>
    <h1 class="display">{style.name}.</h1>
    <p style="margin-top:1rem;font-family:var(--font-display);font-size:clamp(1.35rem,2.3vw,1.9rem);color:var(--ink);max-width:34ch;line-height:1.25">{style.tagline}</p>
    <div class="flex" style="margin-top:1.8rem">
      <span class="magnet-wrap" use:magnetic><span class="magnet-inner"><a href={style.orderHref} class="btn btn-primary btn-lg">Order {style.name}</a></span></span>
      <a href="https://wa.me/31625436130?text=Hi%20VISUAILS%2C%20I%27d%20like%20to%20talk%20about%20the%20{waName}%20style." class="btn btn-wa" target="_blank" rel="noopener">
        <svg class="i" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1.5-4.5A8.38 8.38 0 0 1 3.5 11 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 8.5 8.5z"/></svg>
        WhatsApp
      </a>
    </div>
    <div class="trust-row" style="margin-top:2rem">
      <span class="trust-item"><strong>{style.priceTrust}</strong> / visual</span>
      <span class="trust-item"><strong>~24h</strong> delivery</span>
      <span class="trust-item"><strong>100%</strong> checked by hand</span>
    </div>
  </div>
</section>

<!-- Media band — the source page had no real photo here, only the SVG
     placeholder, so a plain fade-reveal on a cine-format ProductScene
     replaces the lifestyle template's mask-reveal photo. -->
<section class="section-tight">
  <div class="container">
    <div class="reveal pending" use:reveal>
      <ProductScene icon={style.heroIcon} width={style.heroWidth} badge="Catalog &middot; {style.name}" cine />
    </div>
  </div>
</section>

<!-- Mood -->
<section class="section-tight">
  <div class="container two-col" style="align-items:start">
    <div class="reveal pending" use:reveal><span class="kicker">The mood</span><h2 style="margin-top:1rem">What {style.name} <em>feels</em> like.</h2></div>
    <div class="reveal pending" use:reveal>
      {#each style.moodParagraphs as p, i}
        <p class="lead" style={i > 0 ? 'margin-top:1rem' : ''}>{p}</p>
      {/each}
    </div>
  </div>
</section>

<!-- Steps -->
<section class="section-tight">
  <div class="container">
    <div class="section-head"><span class="kicker">How it's made</span><h2 style="margin-top:1rem">How {style.name} comes together.</h2></div>
    <div class="steps">
      {#each style.steps as s, i}
        <div class="reveal pending" use:reveal={{}}>
          <span class="step-n">No. {i + 1}</span><h3>{s.title}</h3><p>{s.body}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- 3x3 product-scene grid -->
<section class="section-tight">
  <div class="container">
    <div class="grid grid-3">
      {#each style.grid as g}
        <div class="reveal pending" use:reveal>
          <ProductScene photo={g.photo} icon={g.icon} width={g.width} badge="Catalog &middot; {style.name}" />
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Craft -->
<section>
  <div class="container">
    <div class="section-head"><span class="kicker">The craft</span><h2 style="margin-top:1rem">What goes <em>into</em> every frame.</h2></div>
    <div class="arrow-rows" style="grid-template-columns:repeat(2,1fr)">
      {#each style.craft as c}
        <div class="reveal pending" use:reveal><h3>{c.title}</h3><p>{c.body}</p></div>
      {/each}
    </div>
  </div>
</section>

<!-- Why choose it -->
<section>
  <div class="container">
    <div class="section-head"><span class="kicker">Why choose it</span><h2 style="margin-top:1rem">Why brands choose <em>{style.name}</em>.</h2></div>
    <div class="grid grid-3">
      {#each style.why as w}
        <div class="card reveal pending" use:reveal><h3 style="font-size:1.1rem">{w.title}</h3><p style="margin-top:.6rem;font-size:.92rem;color:var(--ink-3)">{w.body}</p></div>
      {/each}
    </div>
  </div>
</section>

<!-- Best for / what you get -->
<section class="section-tight">
  <div class="container two-col" style="align-items:start">
    <div class="reveal pending" use:reveal>
      <h2 style="font-size:1.7rem">Best <em>for</em></h2>
      <ul class="checklist" style="margin-top:1.2rem">
        {#each style.bestFor as item}
          <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>{item}</span></li>
        {/each}
      </ul>
    </div>
    <div class="reveal pending" use:reveal>
      <h2 style="font-size:1.7rem">What you <em>get</em></h2>
      <ul class="checklist" style="margin-top:1.2rem">
        {#each style.whatYouGet as item}
          <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>{item}</span></li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<!-- Closing CTA -->
<section class="section-tight">
  <div class="container">
    <div class="cta-band reveal pending" use:reveal>
      <h2 class="display" style="font-size:clamp(2rem,4.5vw,3.2rem)">Make {style.name} <em>yours.</em></h2>
      <p class="lead" style="margin:1rem auto 0;text-align:center">Start with a free test sample in this style, or place your order today.</p>
      <div class="flex" style="justify-content:center;margin-top:1.8rem">
        <span class="magnet-wrap" use:magnetic><span class="magnet-inner"><a href={style.orderHref} class="btn btn-primary btn-lg">Order {style.name}</a></span></span>
        <a href="/test-sample" class="btn btn-ghost btn-lg">Free test sample</a>
      </div>
    </div>
  </div>
</section>
