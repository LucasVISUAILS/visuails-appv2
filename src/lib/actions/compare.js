// VISUAILS — before/after compare slider Svelte action.
// Ported from the tested vanilla-JS .ba slider. Drag / arrow-key controllable.
// The action sets the CSS var --pos on the node; CSS clips the .ba-after layer.
//
// Usage:
//   <div class="ba" use:compare> … .ba-before / .ba-after / .ba-handle / .ba-knob … </div>

export function compare(node) {
  let pos = 50;
  let dragging = false;

  function set(x) {
    const rect = node.getBoundingClientRect();
    pos = Math.max(0, Math.min(100, ((x - rect.left) / rect.width) * 100));
    node.style.setProperty('--pos', pos + '%');
  }
  function down(e) { dragging = true; set((e.touches ? e.touches[0] : e).clientX); }
  function move(e) { if (dragging) set((e.touches ? e.touches[0] : e).clientX); }
  function up() { dragging = false; }
  function key(e) {
    if (e.key === 'ArrowLeft') { pos = Math.max(0, pos - 4); node.style.setProperty('--pos', pos + '%'); }
    if (e.key === 'ArrowRight') { pos = Math.min(100, pos + 4); node.style.setProperty('--pos', pos + '%'); }
  }

  node.setAttribute('tabindex', '0');
  node.setAttribute('role', 'slider');
  node.setAttribute('aria-label', 'Before and after comparison');
  node.addEventListener('mousedown', down);
  node.addEventListener('touchstart', down, { passive: true });
  window.addEventListener('mousemove', move);
  window.addEventListener('touchmove', move, { passive: true });
  window.addEventListener('mouseup', up);
  window.addEventListener('touchend', up);
  node.addEventListener('keydown', key);

  return {
    destroy() {
      node.removeEventListener('mousedown', down);
      node.removeEventListener('touchstart', down);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('touchend', up);
      node.removeEventListener('keydown', key);
    },
  };
}
