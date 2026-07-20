// Tell adapter-static to prerender every route by default — without this,
// a fully static build ("strict" mode, no server) rejects any page that
// doesn't explicitly opt in. The two [slug] routes (catalog, lifestyle,
// video) already declare their own `export const prerender = true` plus
// `entries()` in their +page.js, which still works fine alongside this.
export const prerender = true;
