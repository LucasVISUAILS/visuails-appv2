// VISUAILS — reveal-on-scroll Svelte action.
// Ported from the tested vanilla-JS motion system on the static site.
// Progressive enhancement: content is fully visible by default (see app.css);
// this only flips to the animated state when motion is allowed AND supported.
//
// Usage:
//   <div use:reveal>…</div>                     // simple fade-up (default)
//   <div class="reveal-mask" use:reveal={{ variant: 'mask' }}>…</div>
//   <div class="reveal-clip-wrap" use:reveal={{ variant: 'clip' }}>
//     <div class="reveal-clip-inner">…</div>    // clip-path animates on the INNER
//   </div>
//
// The clip variant observes the (unclipped) wrapper but toggles `.in` on the
// inner element — a Chromium IntersectionObserver quirk stops re-firing
// callbacks for a target that already carries a full-edge clip-path.

export function reveal(node, options = {}) {
  const opts = { variant: 'up', threshold: 0.2, rootMargin: '0px 0px -8% 0px', ...options };
  const target = opts.variant === 'clip'
    ? node.querySelector('.reveal-clip-inner') || node
    : node;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    target.classList.add('in');
    return { destroy() {} };
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: opts.threshold, rootMargin: opts.rootMargin });

  io.observe(node);

  // Failsafe: reveal anyway if something kept it hidden (paused tab, no scroll).
  const failsafe = setTimeout(() => target.classList.add('in'), 2400);

  return {
    destroy() {
      io.disconnect();
      clearTimeout(failsafe);
    },
  };
}
