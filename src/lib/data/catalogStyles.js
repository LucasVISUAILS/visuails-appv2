// VISUAILS — catalog style data, ported verbatim from the static site
// (catalog-classic.html, catalog-custom.html). Drives both the /catalog hub
// cards and the /catalog/[slug] template so every style page is one shared
// component + data, same pattern as $lib/data/styles.js (lifestyle).
//
// Neither source page used a real background-image on its `.vis` elements
// (both media band and grid render the SVG placeholder icon only), so —
// unlike the lifestyle styles — there is no `heroPhoto` / `cardPhoto` here.
// Icon fields drive ProductScene's placeholder rendering directly.

// grid: the 3x3 product-scene grid on each style page. Mirrors the helper in
// $lib/data/styles.js — `photos` stays empty for catalog since the source
// pages never wired real images into the grid.
function grid(photos, icons) {
  const widths = { bottle: '42%', sneaker: '54%', jar: '46%', bag: '46%' };
  return icons.map((icon, i) => ({ photo: photos[i] ?? null, icon, width: widths[icon] }));
}

export const catalogStyles = [
  {
    slug: 'classic',
    name: 'Classic',
    tagline: 'Clean. Consistent. Relentlessly so.',
    priceTrust: '€19',
    metaPrice: 'From €19 / visual',
    orderHref: '/order-catalog',
    heroIcon: 'bottle',
    heroWidth: '26%',
    cardIcon: 'bottle',
    cardWidth: '42%',
    cardPrice: 'From €19 / visual',
    cardDesc: 'Clean, consistent, grid-ready product visuals. Same lighting, angle and background — every single time. From €19/visual.',
    moodTitle: 'What Classic feels like.',
    moodParagraphs: [
      'Classic is the backbone of a serious shop: pure, even light, true-to-life colour and a frame that never moves. Every product photographed as if it stood in the same studio, on the same morning, under the same hands.',
      "It sounds simple. It isn't. Consistency at catalogue scale is a discipline — one we obsess over so your grid looks like one decision, not fifty compromises.",
    ],
    steps: [
      { title: 'Frame', body: 'The same angle and crop, locked per product type — so every listing sits flush on the grid.' },
      { title: 'Light', body: 'One soft, even studio setup, repeated exactly, product after product.' },
      { title: 'Match', body: 'Every new product is measured against the last, so the range never visibly drifts.' },
    ],
    grid: grid(
      [],
      ['bottle', 'sneaker', 'jar', 'bag', 'bottle', 'sneaker', 'jar', 'bag', 'bottle']
    ),
    craft: [
      { title: 'A locked lighting recipe', body: 'One softbox setup, codified. Shadow depth, highlight roll-off and white balance are fixed values in our system — not judgement calls made shot by shot.' },
      { title: 'An angle system, not an angle', body: 'Front, three-quarter and detail views follow fixed camera geometry, so a product added next year sits perfectly beside one from today.' },
      { title: 'Colour held to the product', body: 'We finish against your source photo, not taste. Whites stay white, your brand colour stays your brand colour — marketplace-safe.' },
      { title: 'Crops for every channel', body: 'Framing margins are built for shop grids, Amazon, Bol and ad cut-outs, so one set works everywhere without rework.' },
    ],
    why: [
      { title: 'Marketplace-proof', body: 'Built to meet the strict image rules of Amazon, Bol, Zalando and more.' },
      { title: 'Restock-ready', body: 'New products slot into the existing set without a visible seam.' },
      { title: 'Zero art direction needed', body: 'Send a photo, get back the same considered frame — every single time.' },
    ],
    bestFor: [
      'Webshops that live or die by a clean grid',
      'Marketplace sellers with strict image rules',
      'Brands photographing a whole range in one go',
      'Restocks — new products matching old sets, perfectly',
    ],
    whatYouGet: [
      'Consistent lighting, angle and background',
      'Pure white or neutral studio backdrop',
      'High-resolution, marketplace-ready files',
      'Delivery in ~24 hours, checked by hand',
    ],
  },
  {
    slug: 'custom',
    name: 'Custom Brand',
    tagline: 'A catalog look that is unmistakably yours.',
    priceTrust: 'Designed once — then from €19',
    metaPrice: 'Designed once — then from €19 / visual',
    orderHref: '/order-custom',
    heroIcon: 'bag',
    heroWidth: '26%',
    cardIcon: 'bag',
    cardWidth: '46%',
    cardPrice: 'Custom pricing',
    cardDesc: 'A catalog look designed around your brand — colours, props, backgrounds and framing that are unmistakably yours. We design your style first, so the first order takes a little longer; after that every new product is fast and on-brand.',
    moodTitle: 'What Custom Brand feels like.',
    moodParagraphs: [
      'Off-white and evenly lit is safe. But some brands need their catalogue itself to carry identity: a signature backdrop tone, a shadow with attitude, a prop language that says this is us before the logo does.',
      'We design that look with you once — colours, surfaces, framing rules — write it down as a system, and then produce every future product in it. First order takes longer. Every order after is fast, and unmistakably yours.',
    ],
    steps: [
      { title: 'Define', body: 'We set your palette, props, framing and background as one documented style.' },
      { title: 'Prove', body: 'The first products are shot against that style and checked with you before it’s locked.' },
      { title: 'Repeat', body: 'Every new product after that follows the same rules automatically.' },
    ],
    grid: grid(
      [],
      ['bottle', 'sneaker', 'jar', 'bag', 'bottle', 'sneaker', 'jar', 'bag', 'bottle']
    ),
    craft: [
      { title: 'A design session, not a template', body: 'We start from your brand: palette, references, competitors to avoid. Two or three directions, one round of refinement, then the look is locked.' },
      { title: 'A written style system', body: 'Backdrop values, shadow behaviour, camera height, prop rules — documented so the hundredth product matches the first.' },
      { title: 'Owned, not rented', body: "The style we build is yours. We don't reuse it, resell it, or let it drift." },
      { title: 'Fast forever after', body: 'Once the system exists, new products flow through it at normal catalog speed and price.' },
    ],
    why: [
      { title: 'Unmistakably yours', body: "Props, colour and framing that competitors simply can't copy." },
      { title: 'Documented, not remembered', body: 'The style is written down, so it never drifts between orders.' },
      { title: 'Fast after the first order', body: 'The design work happens once; every order after runs at normal speed.' },
    ],
    bestFor: [
      'Brands whose shop is their storefront and their stage',
      'Founders tired of looking like every other seller',
      'Ranges where recognition matters more than neutrality',
      'Teams planning years of product drops',
    ],
    whatYouGet: [
      'A custom catalog style, designed with you',
      'Documented rules for perfect repeatability',
      'Exclusivity — your look stays yours',
      'Normal per-visual pricing after the first order',
    ],
  },
];

export function getCatalogStyle(slug) {
  return catalogStyles.find((s) => s.slug === slug);
}
