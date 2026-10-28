# Vanreno General Contractors website

A one-page website for Vanreno General Contractors Ltd., built with [Astro](https://astro.build).
It is a plain static site: HTML, one CSS file and a small script. There is no database and no server.

## Run it on your computer

You need [Node.js](https://nodejs.org) version 22.12 or newer.

```bash
npm install      # first time only: downloads the tools
npm run dev      # starts a local preview at http://localhost:4321 that updates as you edit
npm run build    # builds the finished site into the dist/ folder
```

## Where to change things

| What | File |
| --- | --- |
| Services, reviews, "how it works" steps and other copy | `src/data/content.ts` |
| Phone, email, social links, page title and description | `src/data/site.ts` |
| Hero, section headings and the layout | `src/pages/index.astro` |
| Colours, fonts and spacing | `src/styles/global.css` (colours are at the top) |
| Photos | `src/assets/` (converted to WebP automatically on build) |
| Logo and favicon | `public/` |

## Connect the quote form

1. Create a free form at [Formspree](https://formspree.io) and copy its URL (it looks like `https://formspree.io/f/abcdwxyz`).
2. Open `src/data/site.ts` and paste it into `FORM_ENDPOINT`.

Until you do this, the form only shows the thank-you message and **does not send anything**.

## Put it online with Vercel

1. Push this repository to GitHub.
2. On [vercel.com](https://vercel.com), click **Add New → Project** and import the repository.
3. Vercel detects **Astro** by itself. No settings need changing. Click **Deploy**.

Once the real domain is connected, set `site` in `astro.config.mjs` (there's a TODO note there) so share previews use full image links.

## Confirm with client

- **Photos:** most look like stock or AI images and are low resolution. Get real job photos.
- **Form:** where should quote requests be emailed? (needed for the Formspree setup)
- **Domain:** confirm the site will live at vanreno.ca.

The original design handoff notes are in `docs/HANDOFF.md`.
