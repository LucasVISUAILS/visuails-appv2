// VISUAILS — magnetic button Svelte action.
// Moves the inner `.magnet-inner` toward the cursor when it's close, then
// springs back. Desktop + motion-safe only.
//
// Usage:
//   <span class="magnet-wrap" use:magnetic>
//     <span class="magnet-inner"><a class="btn btn-primary" href="/order">Order now</a></span>
//   </span>

export function magnetic(node, { strength = 0.4, range = 80 } = {}) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !window.matchMedia('(hover: hover)').matches) {
    return { destroy() {} };
  }

  const inner = node.querySelector('.magnet-inner') || node;

  function onMove(e) {
    const r = node.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    inner.style.transform = dist < range + r.width / 2
      ? `translate(${dx * strength}px, ${dy * strength}px)`
      : 'translate(0,0)';
  }
  function onLeave() { inner.style.transform = 'translate(0,0)'; }

  window.addEventListener('mousemove', onMove);
  node.addEventListener('mouseleave', onLeave);

  return {
    destroy() {
      window.removeEventListener('mousemove', onMove);
      node.removeEventListener('mouseleave', onLeave);
    },
  };
}
