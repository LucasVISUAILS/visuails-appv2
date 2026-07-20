<script>
  // VISUAILS — editorial homepage. Rebuilt per /impeccable (PRODUCT.md /
  // DESIGN.md at project root). Global utilities (kicker, flex, two-col,
  // section-head, grid-3, svc, cta-band, link-arrow) now live in app.css —
  // no local re-declaration, unlike the first migration pass.
  import { reveal } from '$lib/actions/reveal.js';
  import { magnetic } from '$lib/actions/magnetic.js';
  import { splitText } from '$lib/actions/splitText.js';
  import { compare } from '$lib/actions/compare.js';

  const roster = ['A', 'E', 'L', 'R', 'S', 'M'];
  const services = [
    { href: '/catalog', name: 'Catalog', price: 'From €19 / visual', body: 'Clean, consistent product photography for your shop, marketplaces and ads. The same light, the same frame — your whole range as one set.', cta: 'Explore catalog' },
    { href: '/lifestyle', name: 'Lifestyle', price: 'From €35 / visual', body: 'Your product in styled, real-world scenes — with models that stay consistent across your entire collection. Four signature styles.', cta: 'Explore lifestyle' },
    { href: '/video', name: 'Video', price: 'From €49 / video', body: 'Short, clean product films with subtle motion — for product pages, social and campaigns that stop the scroll.', cta: 'Explore video' },
  ];
</script>

<svelte:head>
  <title>VISUAILS — Product-visual studio for e-commerce brands</title>
  <meta name="description" content="Send one photo, get a campaign back in about a day. Campaign-grade catalog, lifestyle and video visuals from a single product photo, checked by hand, from €19 per visual." />
</svelte:head>

<!-- HERO — full-bleed photo, gradual fade, minimal copy. This is the one
     section that keeps the eyebrow + kicker device (DESIGN.md "Kicker
     system") — it's the page's single "new idea starts here" marker. -->
<section class="hero-editorial">
  <div class="bg" style="background-image:url('/img/banners-01.webp')"></div>
  <div class="fade"></div>
  <div class="hero-editorial-content container">
    <p class="eyebrow-page">Product-visual studio &middot; Enschede, NL</p>
    <h1 class="display" use:splitText style="max-width:15ch">Look like the brand you're <em class="accent-word">becoming</em>.</h1>
    <p class="lead" style="margin-top:1.6rem">One product photo in. A publish-ready campaign out, in about 24 hours.</p>
    <div class="flex" style="margin-top:2.2rem">
      <span class="magnet-wrap" use:magnetic><span class="magnet-inner"><a href="/order" class="btn btn-primary btn-lg">Order now</a></span></span>
      <a href="/test-sample" class="btn btn-ghost btn-lg">Free test sample</a>
    </div>
  </div>
  <div class="hero-editorial-cue" aria-hidden="true"><span>Scroll</span><span class="cue-line"></span></div>
</section>

<!-- BIG PHOTO MOMENT — mask reveal, no kicker: the photo is the statement. -->
<section class="section-tight">
  <div class="container">
    <div class="reveal-mask photo-moment-frame" use:reveal={{ variant: 'mask' }}>
      <div class="rm-inner" style="background-image:url('/img/lifestyle-glow-01.webp')"></div>
    </div>
  </div>
</section>

<!-- SERVICES -->
<section>
  <div class="container">
    <div class="section-head">
      <span class="kicker">The work</span>
      <h2 style="margin-top:1rem">Three ways we <em>build</em> your image.</h2>
    </div>
    <div class="grid-3">
      {#each services as s}
        <a href={s.href} class="svc reveal pending" use:reveal>
          <div class="svc-body">
            <h3>{s.name}</h3>
            <span class="svc-price">{s.price}</span>
            <p>{s.body}</p>
            <span class="link-arrow">{s.cta} &rarr;</span>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- MODELS — sticky pinned photo -->
<div class="pin-wrap">
  <div class="pin-stage">
    <div class="bg" style="background-image:url('/img/custom-models-01.webp')"></div>
    <div class="scrim"></div>
    <div class="container">
      <div class="pin-copy">
        <span class="kicker">The faces of your brand</span>
        <h2 style="margin-top:1rem">One face. <em>Every campaign.</em></h2>
        <p class="lead" style="margin-top:1rem;color:rgba(244,239,231,.85)">Big brands are recognisable because the same face carries every campaign. With VISUAILS, yours does too.</p>
      </div>
    </div>
  </div>
  <div class="pin-scroll-copy">
    <div class="container">
      <div class="reveal pending" use:reveal>
        <h3>VISUAILS <em>models</em></h3>
        <p style="margin-top:.8rem;color:var(--ink-2);max-width:56ch">Choose a model from our roster and we lock the choice to your brand — the same face, every lifestyle visual, this month and next year. Included in every lifestyle order.</p>
        <div class="roster" aria-hidden="true">
          {#each roster as r}<span class="face">{r}</span>{/each}<span class="face more">+4</span>
        </div>
        <div style="margin-top:1.4rem"><a class="link-arrow" href="/models">Browse the models &rarr;</a></div>
      </div>
    </div>
  </div>
</div>

<!-- TRANSFORMATION — before/after with clip-path reveal. No kicker here on
     purpose (DESIGN.md "Kicker system"): the headline carries the section,
     and the slider itself is the proof, not a label above it. -->
<section>
  <div class="container two-col">
    <div class="reveal pending" use:reveal>
      <h2>One photo. <em>The rest is ours.</em></h2>
      <p class="lead" style="margin-top:1.2rem">Drag the slider — the same product, before and after VISUAILS. This is the entire brief we need from you: one clear photo of your product.</p>
      <div class="flex" style="margin-top:1.8rem">
        <a href="/test-sample" class="btn btn-primary">Try it free on your product</a>
        <a href="/gallery" class="link-arrow">See more work &rarr;</a>
      </div>
    </div>
    <div class="reveal-clip-wrap" use:reveal={{ variant: 'clip' }}>
      <div class="reveal-clip-inner">
        <div class="ba" use:compare>
          <div class="ba-layer ba-before-scene" aria-hidden="true"><img src="/img/lifestyle-flash-02.webp" alt="Plain, flat product photo before VISUAILS" /></div>
          <div class="ba-layer ba-after" aria-hidden="true"><img src="/img/lifestyle-glow-01.webp" alt="The same product in a styled golden-hour lifestyle scene after VISUAILS" /></div>
          <span class="ba-tag tag-before">Before</span><span class="ba-tag tag-after">After</span>
          <div class="ba-handle" aria-hidden="true"></div>
          <div class="ba-knob" aria-hidden="true"><svg class="i" viewBox="0 0 24 24" style="width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.8"><path d="M8 7l-4 5 4 5M16 7l4 5-4 5"/></svg></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FINAL CTA -->
<section class="section-tight">
  <div class="container">
    <div class="cta-band reveal pending" use:reveal>
      <h2 class="display" style="font-size:clamp(2.2rem,5vw,3.8rem)">Start with one free sample.<br /><em>Judge us on the work.</em></h2>
      <p class="lead" style="margin:1.2rem auto 0;text-align:center">One free visual per business, made from your own product photo. No card, no commitment — just proof.</p>
      <div class="flex" style="justify-content:center;margin-top:2rem">
        <span class="magnet-wrap" use:magnetic><span class="magnet-inner"><a href="/test-sample" class="btn btn-primary btn-lg">Claim your free sample</a></span></span>
        <a href="/order" class="btn btn-ghost btn-lg">Order now</a>
      </div>
    </div>
  </div>
</section>

<style>
  /* Homepage-only, not shared elsewhere: the model-roster avatar row. */
  .roster { display: flex; gap: .55rem; flex-wrap: wrap; margin-top: 1.4rem; }
  .roster .face { width: 52px; height: 52px; border-radius: 50%; display: grid; place-items: center; font-family: var(--font-display); font-style: italic; font-size: 1.15rem; color: var(--ink); background: var(--surface-2); border: 1px solid var(--line-strong); }
  .roster .face.more { font-family: var(--font-body); font-style: normal; font-size: .72rem; color: var(--ink-3); }
</style>
