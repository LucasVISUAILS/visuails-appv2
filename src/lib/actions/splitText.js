// VISUAILS — kinetic split-text Svelte action.
// Splits an element's top-level text into per-word spans (keeping inline
// elements like <em> intact as one atomic word so their styling survives),
// then reveals word-by-word when the line scrolls into view.
//
// Usage:
//   <h1 class="display" use:splitText>Look like the brand you're <em class="accent-word">becoming</em>.</h1>

export function splitText(node, { stagger = 45 } = {}) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  node.classList.add('split-line');
  if (reduce) {
    node.classList.add('in');
    return { destroy() {} };
  }

  const nodes = Array.prototype.slice.call(node.childNodes);
  const frag = document.createDocumentFragment();
  let i = 0;

  nodes.forEach((child) => {
    if (child.nodeType === Node.TEXT_NODE) {
      child.textContent.split(/(\s+)/).filter((w) => w.length).forEach((w) => {
        if (/^\s+$/.test(w)) { frag.appendChild(document.createTextNode(w)); return; }
        const span = document.createElement('span');
        span.className = 'split-word';
        span.textContent = w;
        span.style.transitionDelay = (i * stagger) + 'ms';
        i++;
        frag.appendChild(span);
      });
    } else {
      const span = document.createElement('span');
      span.className = 'split-word';
      span.style.transitionDelay = (i * stagger) + 'ms';
      i++;
      span.appendChild(child.cloneNode(true));
      frag.appendChild(span);
    }
  });

  node.innerHTML = '';
  node.appendChild(frag);

  let io = null;
  let failsafe = null;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { node.classList.add('in'); io.unobserve(node); }
      });
    }, { threshold: 0.4 });
    io.observe(node);
    failsafe = setTimeout(() => node.classList.add('in'), 2400);
  } else {
    node.classList.add('in');
  }

  return {
    destroy() {
      if (io) io.disconnect();
      if (failsafe) clearTimeout(failsafe);
    },
  };
}
