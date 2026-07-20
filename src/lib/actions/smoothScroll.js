// VISUAILS — Lenis-style smoothed scroll Svelte action.
// Apply to the page-content wrapper. Requires a sibling <div id="scroll-spacer">
// in the layout so the document keeps its real scroll height. See app.css for
// the html.smooth-scroll rules.
//
// Usage (in +layout.svelte):
//   <div id="scroll-spacer"></div>
//   <div id="scroll-content" use:smoothScroll>{@render children()}</div>
//
// ease: higher = snappier / less lag (0.26 ≈ the value tuned on the static site).

export function smoothScroll(node, { ease = 0.26 } = {}) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('requestAnimationFrame' in window)) {
    return { destroy() {} };
  }

  const spacer = document.getElementById('scroll-spacer');
  document.documentElement.classList.add('smooth-scroll');

  let current = window.scrollY;
  let target = window.scrollY;
  let raf = null;

  function resize() { if (spacer) spacer.style.height = node.scrollHeight + 'px'; }
  function onScroll() { target = window.scrollY; }
  function tick() {
    current += (target - current) * ease;
    if (Math.abs(target - current) < 0.05) current = target;
    node.style.transform = `translate3d(0, ${-current}px, 0)`;
    raf = requestAnimationFrame(tick);
  }

  resize();
  const ro = 'ResizeObserver' in window ? new ResizeObserver(resize) : null;
  if (ro) ro.observe(node);
  window.addEventListener('resize', resize);
  window.addEventListener('scroll', onScroll, { passive: true });
  raf = requestAnimationFrame(tick);

  return {
    destroy() {
      cancelAnimationFrame(raf);
      if (ro) ro.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      document.documentElement.classList.remove('smooth-scroll');
      node.style.transform = '';
    },
  };
}
