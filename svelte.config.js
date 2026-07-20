import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    // Static build, same deploy shape as the current GitHub -> Cloudflare
    // Pages flow. Dynamic routes ([slug]) opt in via `prerender = true` +
    // `entries()` in their +page.js.
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    prerender: {
      handleHttpError: ({ path, message }) => {
        // The real product photos aren't uploaded to static/img/ yet (same
        // gap flagged since the first delivery in this project) — don't let
        // a missing photo fail the whole build. Any OTHER broken link still
        // fails loudly, since that would be a real bug, not a missing asset.
        if (path.startsWith('/img/')) {
          console.warn(`Missing image (expected until real photos are uploaded): ${path}`);
          return;
        }
        throw new Error(message);
      }
    }
  }
};

export default config;
