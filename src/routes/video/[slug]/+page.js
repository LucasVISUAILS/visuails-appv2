// VISUAILS — data + prerender wiring for the 3 video style pages.
// adapter-static needs every dynamic-route value listed via entries().
import { error } from '@sveltejs/kit';
import { videoStyles, getVideoStyle } from '$lib/data/videoStyles.js';

export const prerender = true;

export function entries() {
  return videoStyles.map((s) => ({ slug: s.slug }));
}

export function load({ params }) {
  const style = getVideoStyle(params.slug);
  if (!style) error(404, 'Style not found');
  return { style };
}
