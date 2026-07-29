# Kentaro Hiromitsu — Academic Website

Personal academic website for Kentaro Hiromitsu, Ph.D.

The site is built with Next.js and published automatically with GitHub Pages.
Every push to the `main` branch rebuilds and republishes the site.

## Editing on GitHub

1. Open the file you want to change.
2. Select the pencil icon (`Edit this file`).
3. Edit the text.
4. Select `Commit changes`.

The main content files are:

- `app/page.tsx` — Home
- `app/biography/page.tsx` — Biography
- `app/publications/page.tsx` — Publications
- `app/contact/page.tsx` — Contact
- `app/globals.css` — Colours, spacing and responsive design

For larger changes, the repository can be cloned and edited locally. See
`EDITING_GUIDE.md` for the portrait controls.

## Local preview

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Publication

GitHub Actions builds the static site and deploys it to GitHub Pages whenever
the `main` branch is updated.
