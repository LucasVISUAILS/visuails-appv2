// VISUAILS — video style data, ported verbatim from the static site
// (video-motion.html, video-lifestyle.html, video-campaign.html). Drives
// both the /video hub cards and the /video/[slug] template, same
// data-driven pattern as $lib/data/styles.js (lifestyle) and
// $lib/data/catalogStyles.js (catalog). None of the three source pages used
// a real background-image, so — like catalog — this uses icon fields
// instead of photo fields.

// grid: the 3x3 product-scene grid on each style page.
function grid(photos, icons) {
  const widths = { bottle: '42%', sneaker: '54%', jar: '46%', bag: '46%' };
  return icons.map((icon, i) => ({ photo: photos[i] ?? null, icon, width: widths[icon] }));
}

export const videoStyles = [
  {
    slug: 'motion',
    name: 'Motion',
    tagline: 'Eight seconds of undivided attention.',
    priceTrust: '€49',
    priceUnit: ' / video',
    ctaLabel: 'Order Motion',
    ctaHref: '/order-video',
    ctaExternal: false,
    heroIcon: 'bottle',
    heroWidth: '26%',
    cardIcon: 'bottle',
    cardWidth: '42%',
    cardPrice: 'From €49 / video',
    cardDesc: 'Our standard product video: an 8-second clip highlighting your product with subtle motion and a clean, minimal presentation. Fixed per-video price. ~24h.',
    moodTitle: 'What Motion feels like.',
    moodParagraphs: [
      'Motion is the product video distilled: eight seconds, one product, one clean move. A slow rotation, a light sweep, a settle — enough movement to hold the eye, never enough to distract from the thing being sold.',
      "It's the difference between a product page that sits still and one that breathes.",
    ],
    steps: [
      { title: 'Lock the frame', body: 'One clean composition, camera perfectly still.' },
      { title: 'Add subtle motion', body: 'Light drift, gentle rotation or reveal — never distracting from the product.' },
      { title: 'Loop it seamlessly', body: 'The last frame ties back to the first, so it never visibly restarts.' },
    ],
    grid: grid(
      [],
      ['bottle', 'sneaker', 'jar', 'bag', 'bottle', 'sneaker', 'jar', 'bag', 'bottle']
    ),
    craft: [
      { title: 'One move per film', body: 'Each video commits to a single, deliberate camera or light movement. Restraint is the style.' },
      { title: 'Loop-clean endings', body: 'Start and end frames are matched so the film loops seamlessly on product pages and feeds.' },
      { title: 'Material-aware motion', body: 'Glass turns differently than fabric. Speed and light are tuned to what the product is made of.' },
      { title: 'Stills-matched grading', body: 'Your videos share a grade with your catalog set, so page and feed read as one production.' },
    ],
    why: [
      { title: 'Life without noise', body: "Motion that finishes what a static photo can't quite say." },
      { title: 'Every format, one shoot', body: 'Cut for square, portrait and wide from the same source file.' },
      { title: 'Ready for the scroll', body: '8 seconds, built to hold attention without demanding it.' },
    ],
    bestFor: [
      'Product pages that need life',
      'Social feeds and simple ads',
      'Email headers and launch teasers',
      'Marketplaces that support video',
    ],
    whatYouGet: [
      '8-second clean product film',
      'Seamless loop, subtle motion',
      'Format cut for your channel',
      '~24h delivery, checked by hand',
    ],
  },
  {
    slug: 'lifestyle',
    name: 'Lifestyle Video',
    tagline: 'The scene, set in motion.',
    priceTrust: '€59',
    priceUnit: ' / video',
    ctaLabel: 'Order Lifestyle Video',
    ctaHref: '/order-video',
    ctaExternal: false,
    heroIcon: 'jar',
    heroWidth: '26%',
    cardIcon: 'jar',
    cardWidth: '46%',
    cardPrice: 'From €59 / video',
    cardDesc: 'Short-form lifestyle video with subtle motion and a styled scene — made for social media and advertising. Fixed per-video price. ~24h.',
    moodTitle: 'What Lifestyle Video feels like.',
    moodParagraphs: [
      'Lifestyle Video takes a styled scene and lets it live: steam rising, light shifting, a model turning toward the lens. Short-form film built for the way people actually watch — sound off, thumb hovering.',
      'It carries the same styling discipline as our lifestyle stills, so your motion and your images belong to the same world.',
    ],
    steps: [
      { title: 'Build the scene', body: 'The same styled world as your lifestyle stills, brought into motion.' },
      { title: 'Direct light movement', body: 'Natural gesture and light that feels observed, not staged.' },
      { title: 'Cut for the channel', body: "Trimmed and formatted for wherever it's actually going to run." },
    ],
    grid: grid(
      [],
      ['bottle', 'sneaker', 'jar', 'bag', 'bottle', 'sneaker', 'jar', 'bag', 'bottle']
    ),
    craft: [
      { title: 'Story in a breath', body: 'Each film lands one beat — reveal, use, or mood — inside a few seconds. No plot required, no attention wasted.' },
      { title: 'Scene continuity', body: 'Sets, light and models match your lifestyle stills, extending your campaign instead of starting a new one.' },
      { title: 'Vertical-first direction', body: 'Framed and paced for 9:16 feeds first, with 1:1 and 16:9 cuts available.' },
      { title: 'Motion with manners', body: 'Movement is smooth and intentional — engineered to feel expensive, not busy.' },
    ],
    why: [
      { title: 'Continuity with your stills', body: 'The same model, light and mood — now moving.' },
      { title: 'Built for short-form', body: 'Paced for Reels, TikTok and Shorts, not a trimmed-down ad.' },
      { title: 'One shoot, two assets', body: 'Stills and motion delivered from the same styled scene.' },
    ],
    bestFor: [
      'Reels, TikTok and Shorts',
      'Ads that need warmth and context',
      'Launches carrying stills and film together',
      'Brands building a recognisable world',
    ],
    whatYouGet: [
      'Short-form styled scene in motion',
      'Continuity with your lifestyle stills',
      'Consistent models available',
      '~24h delivery, checked by hand',
    ],
  },
  {
    slug: 'campaign',
    name: 'Campaign',
    tagline: 'Your biggest moment, produced properly.',
    priceTrust: 'Quoted per project',
    priceUnit: '',
    ctaLabel: 'Get a campaign quote',
    ctaHref: 'https://wa.me/31625436130?text=Hi%20VISUAILS%2C%20I%27d%20like%20a%20quote%20for%20a%20campaign%20video.',
    ctaExternal: true,
    heroIcon: 'sneaker',
    heroWidth: '26%',
    cardIcon: 'sneaker',
    cardWidth: '56%',
    cardPrice: 'Custom quote',
    cardDesc: 'Bigger, multi-shot campaign pieces built around a brief — more products, longer edits and a tailored look. Priced per project. ~24h+.',
    moodTitle: 'What Campaign feels like.',
    moodParagraphs: [
      'Campaign is the full production: multiple shots, a narrative arc, edits cut to land a launch. When a drop deserves more than a loop, this is the format that carries it.',
      'We scope every campaign against your brief — products, story, channels, length — and agree the price before a single frame is made.',
    ],
    steps: [
      { title: 'Scope the campaign', body: 'Shots, channels and deliverables agreed on WhatsApp before anything starts.' },
      { title: 'Shoot the sequence', body: 'A multi-shot film, graded as one continuous story.' },
      { title: 'Deliver every cut', body: "Every channel's format, exported from one finished campaign." },
    ],
    grid: grid(
      [],
      ['bottle', 'sneaker', 'jar', 'bag', 'bottle', 'sneaker', 'jar', 'bag', 'bottle']
    ),
    craft: [
      { title: 'A brief, taken seriously', body: 'We start from what the campaign must achieve, not from a template. Shot list and story are built to your launch.' },
      { title: 'Multi-shot construction', body: 'Openers, details, hero moments and end cards — sequenced with pace that fits your channel.' },
      { title: 'Edit, grade, deliver', body: 'Cut lengths for feed, stories and site, all sharing one grade with your stills.' },
      { title: 'A fixed price, up front', body: 'Scoped over a short WhatsApp conversation. You approve the number before we start.' },
    ],
    why: [
      { title: 'One partner for the whole campaign', body: 'Stills, motion and every cut, from a single brief.' },
      { title: 'One grade, every channel', body: 'Consistent colour and mood across every format you ship.' },
      { title: 'Priced before you commit', body: 'A clear quote, agreed on WhatsApp, before any work starts.' },
    ],
    bestFor: [
      'Product launches and seasonal drops',
      'Brand films and store takeovers',
      'Campaigns spanning stills and film',
      'Teams that need one partner for all of it',
    ],
    whatYouGet: [
      'A scoped, multi-shot campaign film',
      "Cuts for every channel you're on",
      'One grade across your whole campaign',
      'A clear, agreed price before work starts',
    ],
  },
];

export function getVideoStyle(slug) {
  return videoStyles.find((s) => s.slug === slug);
}
