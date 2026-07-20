<script>
  // VISUAILS — homepage, v2 redesign. Photo-led, minimal copy, no smooth
  // scroll, no kicker spam. See DESIGN.md "Homepage principle".
  import { reveal } from '$lib/actions/reveal.js';
  import { magnetic } from '$lib/actions/magnetic.js';
  import { splitText } from '$lib/actions/splitText.js';
  import { compare } from '$lib/actions/compare.js';

  const services = [
    { href: '/catalog', name: 'Catalog', photo: '/img/banners-06.webp' },
    { href: '/lifestyle', name: 'Lifestyle', photo: '/img/lifestyle-glow-01.webp' },
    { href: '/video', name: 'Video', photo: '/img/banners-03.webp' }
  ];

  const strip = [
    '/img/lifestyle-flash-04.webp',
    '/img/lifestyle-dunes-01.webp',
    '/img/lifestyle-phone-made-05.webp',
    '/img/lifestyle-glow-04.webp',
    '/img/banners-02.webp'
  ];
</script>

<svelte:head>
  <title>VISUAILS — Product-visual studio for e-commerce brands</title>
  <meta name="description" content="One photo in, a campaign out, in about 24 hours. Catalog, lifestyle and video visuals from a single product photo." />
</svelte:head>

<!-- HERO — full-bleed real photo, one line, one button. -->
<section class="hero-editorial">
  <div class="bg" style="background-image:url('/img/banners-05.webp')"></div>
  <div class="fade"></div>
  <div class="hero-editorial-content container">
    <h1 class="display" use:splitText>Look like the brand<br />you're <em>becoming</em>.</h1>
    <div class="flex" style="margin-top:1.8rem">
      <span class="magnet-wrap" use:magnetic><span class="magnet-inner"><a href="/order" class="btn btn-primary btn-lg">Order now</a></span></span>
      <a href="/test-sample" class="btn btn-ghost btn-lg">Free sample</a>
    </div>
  </div>
</section>

<!-- THE OFFER — one line, then the photo does the rest. -->
<section class="section-tight">
  <div class="container">
    <div class="reveal-mask photo-moment-frame" use:reveal={{ variant: 'mask' }}>
      <div class="rm-inner" style="background-image:url('/img/lifestyle-glow-02.webp')"></div>
    </div>
    <p class="lead" style="margin-top:1.4rem;max-width:38ch">One product photo in. A publish-ready campaign out, in about 24 hours.</p>
  </div>
</section>

<!-- THREE SERVICES — photo tiles, name + arrow, nothing else. -->
<section>
  <div class="container">
    <h2 style="margin-bottom:2rem">Three ways we build your image.</h2>
    <div class="grid grid-3">
      {#each services as s}
        <a href={s.href} class="reveal pending" use:reveal style="display:block">
          <div class="photo-band" style="aspect-ratio:3/4">
            <img src={s.photo} alt="{s.name} example" loading="lazy" />
            <div class="scrim"></div>
            <div class="caption">
              <h3 style="color:#fff">{s.name} &rarr;</h3>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- MODELS — real portrait, one line. -->
<section class="section-tight">
  <div class="container">
    <div class="photo-split reverse reveal pending" use:reveal>
      <div class="photo-split-media">
        <img src="/img/custom-models-02.webp" alt="A VISUAILS model, styled consistently across a campaign" loading="lazy" />
      </div>
      <div>
        <h2>One face.<br /><em>Every campaign.</em></h2>
        <p class="lead" style="margin-top:1rem">The same model, locked to your brand, across your whole collection.</p>
        <div style="margin-top:1.2rem"><a class="link-arrow" href="/models">Browse the models &rarr;</a></div>
      </div>
    </div>
  </div>
</section>

<!-- STRIP — a fast run of real photography, no copy at all. -->
<section class="section-tight">
  <div class="container">
    <div class="photo-grid reveal pending" use:reveal>
      <img src={strip[0]} alt="Flash-style lifestyle visual" loading="lazy" class="wide" />
      <img src={strip[1]} alt="Dunes-style lifestyle visual" loading="lazy" />
      <img src={strip[2]} alt="Phone-made-style lifestyle visual" loading="lazy" />
      <img src={strip[3]} alt="Glow-style lifestyle visual" loading="lazy" />
      <img src={strip[4]} alt="Campaign photography" loading="lazy" class="wide" />
    </div>
  </div>
</section>

<!-- PROOF — the before/after, still the strongest single argument. -->
<section>
  <div class="container two-col">
    <div class="reveal pending" use:reveal>
      <h2>One photo. <em>The rest is ours.</em></h2>
      <p class="lead" style="margin-top:1rem">Drag the slider. This is the entire brief we need from you.</p>
      <div class="flex" style="margin-top:1.6rem">
        <a href="/test-sample" class="btn btn-primary">Try it free</a>
      </div>
    </div>
    <div class="reveal-clip-wrap" use:reveal={{ variant: 'clip' }}>
      <div class="reveal-clip-inner">
        <div class="ba" use:compare>
          <div class="ba-layer ba-before-scene" aria-hidden="true"><img src="/img/lifestyle-flash-01.webp" alt="Plain, flat product photo before VISUAILS" /></div>
          <div class="ba-layer ba-after" aria-hidden="true"><img src="/img/lifestyle-glow-01.webp" alt="The same product in a styled scene after VISUAILS" /></div>
          <span class="ba-tag tag-before">Before</span><span class="ba-tag tag-after">After</span>
          <div class="ba-handle" aria-hidden="true"></div>
          <div class="ba-knob" aria-hidden="true"><svg class="i" viewBox="0 0 24 24" style="width:18px;height:18px"><path d="M8 7l-4 5 4 5M16 7l4 5-4 5"/></svg></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CLOSING CTA -->
<section class="section-tight">
  <div class="container">
    <div class="cta-band reveal pending" use:reveal>
      <h2 class="display" style="font-size:clamp(2.2rem,5vw,3.8rem)">Start with one<br /><em>free sample.</em></h2>
      <div class="flex" style="justify-content:center;margin-top:1.8rem">
        <span class="magnet-wrap" use:magnetic><span class="magnet-inner"><a href="/test-sample" class="btn btn-primary btn-lg">Claim your free sample</a></span></span>
        <a href="/order" class="btn btn-ghost btn-lg">Order now</a>
      </div>
    </div>
  </div>
</section>
