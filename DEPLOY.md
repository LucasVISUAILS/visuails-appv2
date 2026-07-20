# Deploying visuails-app-v2 to GitHub + Cloudflare Pages

I can't push to GitHub myself from here — this sandbox has no network access to
github.com, and even if it did I don't hold your GitHub credentials (and never
should). Everything below runs on your own machine, in Command Prompt, inside
the `visuails-app-v2` folder. It's already a git repo with one commit — you're
just adding a remote and pushing.

## 1. Create the GitHub repo

Go to https://github.com/new, create a new **empty** repository (no README, no
`.gitignore`, no license — this project already has its own). Name it whatever
you like, e.g. `visuails-app`. Copy the repo URL it gives you afterwards
(something like `https://github.com/<you>/visuails-app.git`).

## 2. Push what's already committed

In Command Prompt, in the `visuails-app-v2` folder:

```
git remote add origin https://github.com/<you>/visuails-app.git
git branch -M main
git push -u origin main
```

If this is the first time you've pushed from this machine, Windows will pop up
a browser window asking you to sign in to GitHub — that's normal, sign in and
it'll continue.

## 3. Add your product photos, commit, push again

The site references image paths like `/img/banners-01.webp` that don't exist
yet on disk (same as every previous delivery in this project). Copy your
photos into `visuails-app-v2/static/img/` (create that folder if it isn't
there), then:

```
git add static/img
git commit -m "Add product imagery"
git push
```

## 4. Deploy to Cloudflare Pages (same flow as the original static site)

1. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect
   to Git**, pick the repo you just pushed.
2. Build settings:
   - Framework preset: **SvelteKit**
   - Build command: `npm run build`
   - Build output directory: `build`
3. Deploy. Cloudflare will run `npm install && npm run build` on its own
   servers (real network access, unlike this sandbox) — this is the first time
   this project actually gets compiled, so it's worth watching the build log
   the first time in case something needs a fix. Tell me what it says if it
   fails and I'll patch it blind and you re-push.
4. Once it's green, Cloudflare gives you a `*.pages.dev` URL immediately;
   point your real domain at it under **Custom domains** when you're ready to
   cut over from the current live static site.

## Before you cut over from the live site

- Run `npm run build` locally at least once and click through the real pages
  — this is the first real compile of this project; I've done everything I
  can to author it correctly, but only a real build catches real syntax
  errors.
- The order/test-sample/contact forms don't submit anywhere yet (flagged
  page-by-page in code comments) — same limitation as the current live site,
  but worth fixing before this replaces it for real leads.
- URLs changed shape: the old site was `catalog-classic.html`,
  `lifestyle-dunes.html`, etc.; this rebuild uses clean nested routes
  (`/catalog/classic`, `/lifestyle/dunes`). If the old site is indexed by
  Google, add redirects (Cloudflare Pages supports a `_redirects` file) from
  the old `.html` paths to the new ones before switching the domain over, or
  you'll lose that SEO equity.
