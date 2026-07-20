// VISUAILS — data + prerender wiring for the 4 lifestyle style pages.
// adapter-static needs every dynamic-route value listed via entries().
import { error } from '@sveltejs/kit';
import { styles, getStyle } from '$lib/data/styles.js';

export const prerender = true;

export function entries() {
  return styles.map((s) => ({ slug: s.slug }));
}

export function load({ params }) {
  const style = getStyle(params.slug);
  if (!style) error(404, 'Style not found');
  return { style };
}
