<script>
  // VISUAILS — product-scene placeholder (the ".vis" system from the static
  // site): a bright studio-gradient card with a floating SVG product icon,
  // used wherever there's no real photo yet. Pass `photo` to render a real
  // image instead — the icon/glow are hidden automatically (same escape
  // hatch as the static site's `.vis[style*="background-image"]` rule).
  //
  // Usage:
  //   <ProductScene icon="bottle" width="42%" badge="Catalog · Classic" />
  //   <ProductScene photo="/img/lifestyle-glow-01.webp" badge="Lifestyle · Glow" />

  let { photo = null, icon = 'bottle', width = '46%', badge = '', wide = false, cine = false, className = '' } = $props();
</script>

<div
  class="vis {wide ? 'wide' : ''} {cine ? 'cine' : ''} {className}"
  style={photo ? `background-image:url('${photo}')` : ''}
>
  {#if !photo}
    <div class="vis-glow"></div>
    <div class="vis-obj" style="width:{width}">
      <svg viewBox={icon === 'bottle' ? '0 0 120 150' : icon === 'sneaker' ? '0 0 160 110' : '0 0 120 130'}>
        <use href="#p-{icon}" />
      </svg>
    </div>
  {/if}
  <div class="vis-floor"></div>
  {#if badge}<span class="vis-badge">{badge}</span>{/if}
</div>
