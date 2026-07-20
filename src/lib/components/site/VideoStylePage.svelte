<script>
  // VISUAILS — shared template for the 3 video style pages (Motion /
  // Lifestyle Video / Campaign). v2 redesign: real photography leads every
  // section (see IMAGES.md — banners/lifestyle stills are fine as video
  // thumbnails/posters), kicker used at most once (the breadcrumb back to
  // /video), copy cut hard. Driven by `style` from $lib/data/videoStyles.js
  // — see src/routes/video/[slug]/+page.svelte for how it's wired up.
  import { reveal } from '$lib/actions/reveal.js';
  import { magnetic } from '$lib/actions/magnetic.js';

  let { style } = $props();

  const waName = $derived(style.name.replaceAll(' ', '%20'));
  const metaPrice = $derived(`${style.priceTrust}${style.priceUnit}`);

  // Poster / strip photography per style — real stills standing in for
  // video thumbnails, per IMAGES.md.
  const media = {
    motion: {
      hero: '/img/banners-04.webp',
      strip: ['/img/banners-02.webp', '/img/banners-05.webp', '/img/banners-01.webp', '/img/banners-06.webp'],
    },
    lifestyle: {
      hero: '/img/lifestyle-glow-03.webp',
      strip: ['/img/lifestyle-glow-01.webp', '/img/lifestyle-glow-05.webp', '/img/lifestyle-flash-06.webp', '/img/lifestyle-dunes-01.webp'],
    },
    campaign: {
      hero: '/img/banners-08.webp',
      strip: ['/img/banners-03.webp', '/img/custom-models-01.webp', '/img/banners-07.webp', '/img/model-02.webp'],
    },
  };
  const m = $derived(media[style.slug] ?? media.motion);
</script>

<svelte:head>
  <title>{style.name} — Video style | VISUAILS</title>
  <meta name="description" content="{style.name}: a signature VISUAILS video style. {metaPrice}. Produced in about 24 hours, every image checked by hand." />
</svelte:head>

<section class="page-hero">
  <div class="container two-col" style="align-items:center">
    <div class="reveal pending" use:reveal>
      <span class="eyebrow-page"><a href="/video" style="color:inherit">Video styles</a></span>
      <h1 class="display" style="margin-top:1rem">{style.name}.</h1>
      <p style="margin-top:1rem;font-family:var(--font-display);font-size:clamp(1.35rem,2.3vw,1.9rem);color:var(--ink);max-width:34ch;line-height:1.25">{style.tagline}</p>
      <div class="flex" style="margin-top:1.8rem">
        <span class="magnet-wrap" use:magnetic>
          <span class="magnet-inner">
            {#if style.ctaExternal}
              <a href={style.ctaHref} class="btn btn-primary btn-lg" target="_blank" rel="noopener">{style.ctaLabel}</a>
            {:else}
              <a href={style.ctaHref} class="btn btn-primary btn-lg">{style.ctaLabel}</a>
            {/if}
          </span>
        </span>
        <a href="https://wa.me/31625436130?text=Hi%20VISUAILS%2C%20I%27d%20like%20to%20talk%20about%20the%20{waName}%20style." class="btn btn-wa" target="_blank" rel="noopener">
          <svg class="i" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1.5-4.5A8.38 8.38 0 0 1 3.5 11 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 8.5 8.5z"/></svg>
          WhatsApp
        </a>
      </div>
      <div class="trust-row" style="margin-top:2rem">
        <span class="trust-item"><strong>{style.priceTrust}</strong>{style.priceUnit}</span>
        <span class="trust-item"><strong>~24h</strong> delivery</span>
        <span class="trust-item"><strong>100%</strong> checked by hand</span>
      </div>
    </div>
    <div class="reveal-mask photo-moment-frame" use:reveal={{ variant: 'mask' }} style="aspect-ratio:4/5">
      <div class="rm-inner" style="background-image:url('{m.hero}')"></div>
    </div>
  </div>
</section>

<!-- Mood + how it's made -->
<section class="section-tight">
  <div class="container two-col" style="align-items:start">
    <div class="reveal pending" use:reveal>
      <h2>What {style.name} <em>feels</em> like.</h2>
      {#each style.moodParagraphs as p}
        <p class="lead" style="margin-top:1rem">{p}</p>
      {/each}
    </div>
    <div class="steps" style="grid-template-columns:1fr;gap:1.1rem">
      {#each style.steps as s, i}
        <div class="reveal pending step" use:reveal><span class="step-n">{String(i + 1).padStart(2, '0')}</span><h3>{s.title}</h3><p>{s.body}</p></div>
      {/each}
    </div>
  </div>
</section>

<!-- Real photography strip — the style, in one glance -->
<section class="section-tight">
  <div class="container">
    <div class="photo-grid reveal pending" use:reveal>
      {#each m.strip as src, i}
        <img {src} alt="{style.name} example still" loading="lazy" class={i === 0 || i === m.strip.length - 1 ? 'wide' : ''} />
      {/each}
    </div>
  </div>
</section>

<!-- Craft + why choose it, condensed into one section -->
<section>
  <div class="container">
    <h2 style="margin-bottom:2rem">What goes into every frame.</h2>
    <div class="arrow-rows" style="grid-template-columns:repeat(2,1fr)">
      {#each style.craft as c}
        <div class="reveal pending" use:reveal><h3>{c.title}</h3><p>{c.body}</p></div>
      {/each}
    </div>
    <div class="grid grid-3" style="margin-top:clamp(2.5rem,5vw,4rem)">
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
      <p class="lead" style="margin:1rem auto 0;text-align:center">Free test sample, or place your order today.</p>
      <div class="flex" style="justify-content:center;margin-top:1.8rem">
        <span class="magnet-wrap" use:magnetic>
          <span class="magnet-inner">
            {#if style.ctaExternal}
              <a href={style.ctaHref} class="btn btn-primary btn-lg" target="_blank" rel="noopener">{style.ctaLabel}</a>
            {:else}
              <a href={style.ctaHref} class="btn btn-primary btn-lg">{style.ctaLabel}</a>
            {/if}
          </span>
        </span>
        <a href="/test-sample" class="btn btn-ghost btn-lg">Free test sample</a>
      </div>
    </div>
  </div>
</section>

<style>
  .step { position: relative; border-top: 1px solid var(--line-strong); padding-top: 1.1rem; }
  .step .step-n { font-family: var(--font-display); font-weight: 900; font-size: 1rem; color: var(--accent-bright); }
  .step h3 { font-size: 1.05rem; margin: .5rem 0 .3rem; }
  .step p { font-size: .9rem; color: var(--ink-3); }
</style>
