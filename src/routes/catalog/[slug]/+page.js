// VISUAILS — data + prerender wiring for the 2 catalog style pages.
// adapter-static needs every dynamic-route value listed via entries().
import { error } from '@sveltejs/kit';
import { catalogStyles, getCatalogStyle } from '$lib/data/catalogStyles.js';

export const prerender = true;

export function entries() {
  return catalogStyles.map((s) => ({ slug: s.slug }));
}

export function load({ params }) {
  const style = getCatalogStyle(params.slug);
  if (!style) error(404, 'Style not found');
  return { style };
}
