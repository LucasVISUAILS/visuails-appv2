<!--
  VISUAILS — Pricing. Ported from /tmp/visuails-web/pricing.html.

  NOTE: the plan cards, add-on list, volume tiers and FAQ accordion below are
  built with plain semantic HTML + this file's scoped <style> block, not a
  fabricated shadcn component — the real shadcn-svelte CLI isn't runnable in
  this sandbox, so hand-rolling something that *claims* to be shadcn would be
  dishonest. Per DESIGN.md ("shadcn-svelte usage"), this page's plan
  comparison and FAQ accordion are exactly the kind of functionally-`product`
  surface earmarked for a real shadcn upgrade (Tabs / pricing-table primitive,
  Accordion) once `npx shadcn-svelte@latest add …` can actually be run
  locally. Treat this as a faithful, accessible placeholder for that pass.
-->
<script>
  import { reveal } from '$lib/actions/reveal.js';
  import ProductScene from '$lib/components/site/ProductScene.svelte';

  const plans = [
    {
      name: 'Catalog', price: '€19', unit: 'from / visual', accent: false,
      desc: 'Clean product shots on a controlled background.',
      features: ['Consistent lighting & background', 'Marketplace & webshop ready', '3 revision rounds'],
      cta: 'Order catalog',
    },
    {
      name: 'Lifestyle', price: '€35', unit: 'from / visual', accent: true,
      desc: 'Your product in styled, real-world scenes.',
      features: ['Natural light, styled scenes', 'Standard models included', '3 revision rounds'],
      cta: 'Order lifestyle',
    },
    {
      name: 'Video', price: '€49', unit: '/ video', accent: false,
      desc: 'Product videos with subtle motion for feeds and ads.',
      features: ['Motion from €49, Lifestyle from €59', 'Campaign videos quoted per project', 'Human review before delivery'],
      cta: 'Order a video',
    },
  ];

  const addons = [
    { name: 'Multi Format Export', desc: 'Delivered in 1:1, 4:5, 9:16 and 16:9.', price: '+€19.99' },
    { name: '4K Export', desc: 'Higher resolution instead of the standard 2K.', price: '+€9.99' },
    { name: 'Priority delivery', desc: 'Jump to the top of the queue.', price: '+€29.99' },
  ];

  const tiers = [
    { n: '1–24', desc: 'Standard per-visual price' },
    { n: '25–99', desc: 'Volume discount available' },
    { n: '100+', desc: 'Best rate — contact for a quote' },
  ];

  const included = ['Human review on every visual', '2K export', '~24h delivery', '3 revision rounds'];

  const faqs = [
    { q: 'What payment methods do you accept?', a: 'We invoice you directly. iDEAL and other instant options are coming soon — let us know your preference when you order.' },
    { q: 'How does VAT and reverse-charge work?', a: "We're based in the Netherlands (VAT NL005407575B96). EU businesses with a valid VAT number can add it at checkout for reverse-charge and faster invoicing." },
    { q: 'What counts as one "visual"?', a: 'One finished image. Multi Format Export delivers it in several aspect ratios — still one visual, not four.' },
    { q: 'How does custom pricing work?', a: 'A custom style or model is a one-time design fee, then the normal per-visual price on every order after. Video is quoted per project, scoped over a short WhatsApp intake.' },
  ];
</script>

<svelte:head>
  <title>VISUAILS — Simple, transparent pricing</title>
  <meta name="description" content="Pay per visual with VISUAILS — catalog from €19, lifestyle from €35, and custom video. No subscriptions, no hidden fees. Human review, 2K export, ~24h delivery and 3 revision rounds always included." />
</svelte:head>

<section class="page-hero">
  <div class="container">
    <p class="eyebrow-page">Pricing</p>
    <h1 class="display" style="font-size:clamp(2.4rem,5vw,4rem)">Simple, transparent pricing</h1>
    <p class="lead" style="margin-top:1.2rem">Pay per visual. No subscriptions, no hidden fees.</p>
    <div class="flex" style="margin-top:1.8rem">
      <a href="/order" class="btn btn-primary btn-lg">Order now</a>
      <a href="/test-sample" class="btn btn-ghost btn-lg">Free test sample</a>
    </div>
  </div>
</section>

<!-- MAIN PRICING -->
<section>
  <div class="container">
    <div class="section-head">
      <h2>Pay per visual</h2>
      <p>No subscriptions. Order five or five hundred at the same short wait.</p>
    </div>
    <div class="grid grid-3">
      {#each plans as p}
        <div class="card plan-card reveal pending" use:reveal style={p.accent ? 'border-color:var(--accent-line)' : ''}>
          <h3>{p.name}</h3>
          <div class="price-big">{p.price} <small>{p.unit}</small></div>
          <p style="font-size:.95rem;color:var(--ink-3)">{p.desc}</p>
          <ul class="checklist" style="margin-top:1.1rem">
            {#each p.features as f}
              <li><svg viewBox="0 0 24 24" class="i" style="stroke:var(--success)"><path d="M20 6L9 17l-5-5"/></svg><span>{f}</span></li>
            {/each}
          </ul>
          <a href="/order" class="btn btn-primary btn-block" style="margin-top:1.4rem">{p.cta}</a>
        </div>
      {/each}
    </div>
    <p class="pill-note" style="margin-top:1.8rem">A custom style or model is a one-time design fee, then the normal visual price.</p>
  </div>
</section>

<!-- ADD-ONS -->
<section class="section-tight">
  <div class="container narrow">
    <div class="section-head">
      <h2>Add-ons</h2>
    </div>
    <div class="addon-list reveal pending" use:reveal>
      {#each addons as a}
        <div class="addon">
          <div>
            <div style="font-weight:600">{a.name}</div>
            <div style="font-size:.92rem;color:var(--ink-3)">{a.desc}</div>
          </div>
          <div class="addon-price">{a.price}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- VOLUME -->
<section class="section-tight">
  <div class="container narrow">
    <div class="section-head">
      <h2>Volume</h2>
    </div>
    <div class="tier-row reveal pending" use:reveal>
      {#each tiers as t}
        <div class="tier">
          <div class="tn">{t.n}</div>
          <div style="font-size:.92rem;color:var(--ink-3)">{t.desc}</div>
        </div>
      {/each}
    </div>
    <p class="pill-note" style="margin-top:1.4rem"><a href="https://wa.me/31625436130?text=Hi%20VISUAILS%2C%20I%27d%20like%20a%20volume%20quote." class="link-arrow" style="font-size:1rem" target="_blank" rel="noopener">Contact us for a volume quote <svg viewBox="0 0 24 24" class="i"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></p>
  </div>
</section>

<!-- ALWAYS INCLUDED -->
<section>
  <div class="container">
    <div class="card reveal pending" use:reveal style="padding:clamp(1.6rem,3vw,2.6rem)">
      <div class="section-head" style="margin-bottom:1.4rem">
        <h2>Always included</h2>
      </div>
      <div class="grid included-grid">
        {#each included as item}
          <div class="chip"><span class="dot"></span>{item}</div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- FREE TEST SAMPLE -->
<section class="section-tight">
  <div class="container">
    <div class="card reveal pending" use:reveal style="border-color:var(--accent-line)">
      <div class="two-col" style="align-items:center">
        <div>
          <h2>Free test sample</h2>
          <p class="measure" style="margin-top:1rem">See your own product transformed before you commit. One free sample per business — a €0.99 verification is the only thing you pay.</p>
          <div class="flex" style="margin-top:1.6rem">
            <a href="/test-sample" class="btn btn-primary">Request your free test sample</a>
          </div>
        </div>
        <div>
          <ProductScene icon="bottle" width="42%" badge="1 free sample per business" wide />
        </div>
      </div>
    </div>
    <p class="pill-note" style="margin-top:1.4rem">Have a VAT number? You can provide it at checkout to speed up invoicing — it's optional.</p>
  </div>
</section>

<!-- FAQ -->
<section>
  <div class="container narrow">
    <div class="section-head">
      <h2>Pricing FAQ</h2>
    </div>
    <div class="acc reveal pending" use:reveal>
      {#each faqs as f}
        <details class="acc-item">
          <summary class="acc-q"><span>{f.q}</span><span class="acc-icon" aria-hidden="true"><svg viewBox="0 0 24 24" class="i" style="width:14px;height:14px"><path d="M12 5v14M5 12h14"/></svg></span></summary>
          <div class="acc-body-inner"><p>{f.a}</p></div>
        </details>
      {/each}
    </div>
  </div>
</section>

<!-- CLOSING CTA -->
<section>
  <div class="container">
    <div class="cta-band reveal pending" use:reveal>
      <h2 class="display" style="font-size:clamp(2.2rem,5vw,3.6rem)">Transparent pricing.<br />No <em>surprises.</em></h2>
      <div class="flex" style="justify-content:center;margin-top:2rem">
        <a href="/test-sample" class="btn btn-primary btn-lg">Free test sample — no card needed</a>
        <a href="/order" class="btn btn-ghost btn-lg">Order now</a>
        <a href="https://wa.me/31625436130?text=Hi%20VISUAILS%2C%20I%27ve%20got%20a%20question%20about%20pricing." class="btn btn-wa" target="_blank" rel="noopener">
          <svg class="i" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1.5-4.5A8.38 8.38 0 0 1 3.5 11 8.5 8.5 0 0 1 12 3a8.38 8.38 0 0 1 8.5 8.5z"/></svg>
          WhatsApp
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  /* Pricing-page-only patterns (plan price display, add-on rows, volume
     tiers, narrow container, plain-HTML FAQ accordion) — see the top-of-file
     comment re: shadcn upgrade candidacy. */
  .container.narrow { max-width: 760px; }

  .plan-card { display: flex; flex-direction: column; }
  .price-big { font-family: var(--font-display); font-weight: 400; font-size: 2.6rem; line-height: 1; color: var(--ink); margin: .3rem 0 .2rem; }
  .price-big small { font-family: var(--font-body); font-size: .85rem; font-weight: 500; color: var(--ink-3); }

  .pill-note { display: inline-flex; align-items: center; gap: .5rem; padding: .45rem 1rem; border-radius: var(--r-pill); border: 1px solid var(--line); color: var(--ink-3); font-size: .82rem; font-weight: 500; }
  .measure { max-width: 60ch; }

  .addon-list { display: flex; flex-direction: column; gap: .9rem; margin-top: 1.3rem; }
  .addon { display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; padding: 1rem 1.2rem; border: 1px solid var(--line); border-radius: var(--r-lg); }
  .addon-price { font-family: var(--font-display); font-size: 1.1rem; color: var(--ink); white-space: nowrap; }

  .tier-row { display: flex; gap: .8rem; flex-wrap: wrap; margin-top: 1.2rem; }
  .tier { flex: 1 1 160px; border: 1px solid var(--line); border-radius: var(--r-lg); padding: 1rem 1.2rem; }
  .tier .tn { font-family: var(--font-display); font-size: 1.3rem; color: var(--ink); }

  .included-grid { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
  .chip { display: inline-flex; align-items: center; gap: .45rem; padding: .4rem .85rem; border-radius: var(--r-pill); border: 1px solid var(--line); font-size: .85rem; color: var(--ink-2); }
  .chip .dot { width: 5px; height: 5px; border-radius: 50%; background: var(--accent); }

  /* Plain <details>/<summary> accordion — no JS required, upgrade path to
     shadcn Accordion once the CLI can run locally. */
  .acc-item { box-shadow: inset 0 -1px 0 var(--line); }
  .acc-item + .acc-item { margin-top: 0; }
  .acc-q { width: 100%; display: flex; justify-content: space-between; align-items: center; gap: 1rem; padding: 1.35rem 0; text-align: left; font-family: var(--font-body); font-size: 1.05rem; font-weight: 600; color: var(--ink); cursor: pointer; list-style: none; }
  .acc-q::-webkit-details-marker { display: none; }
  .acc-icon { flex: 0 0 auto; width: 28px; height: 28px; border-radius: 50%; border: 1px solid var(--line-strong); display: grid; place-items: center; transition: transform .4s var(--ease), background .4s var(--ease), color .4s var(--ease), border-color .4s var(--ease); }
  .acc-item[open] .acc-icon { transform: rotate(45deg); background: var(--accent); border-color: var(--accent); color: #fff; }
  .acc-body-inner { padding-bottom: 1.35rem; color: var(--ink-2); max-width: 70ch; }
</style>
