# Handoff: Vanreno General Contractors website

## Overview
One-page rebuild of vanreno.ca, built around their "no middleman" selling point. The goal is quote requests. The palette is black #0C0E0C and logo green #1BE24F. The type is Instrument Sans.

## About the design files
These are **design references built in HTML**, not production code. Rebuild them in a real stack. If there's no existing codebase, use **Astro or Next.js (static export) + Tailwind**, deployed on Vercel.
- `*.dc.html`: the source prototype. All copy and data arrays are in the script at the bottom.
- `preview.html`: a clickable preview. Unzip the folder first, because some images load from the asset folder next to it.
- The asset folder holds the logo and photos.
- `support.js`: prototype runtime only. **Do not ship it.**

## Fidelity
**High fidelity.** Colours, type, spacing, copy and interactions are final. Exact values are inline in the prototype. Copy comes from the client's current site. **Don't add services, reviews, prices or claims.**

## Shared conventions
- **Easing:** `cubic-bezier(.16,.84,.3,1)` throughout.
- **Hero load animation:** text rises in, staggered about 100ms between elements; the hero image eases from a slight zoom.
- **Scroll reveal:** `[data-reveal]` elements fade up 28–36px as they enter the viewport, staggered about 80ms between siblings.
- **Reduced motion:** respect `prefers-reduced-motion`.
- **Shape:** square corners. Max width 1440px. Side padding clamp(18px, 4vw, 48px).
- **Mobile (below 1000px):** nav hides, and a sticky bottom bar (Call + Quote) appears. Pad the footer so the bar doesn't cover it.
- **Footer:** includes "Powered by Backpack Digital Media" (https://backpackdigitalmedia.com).

## To finish at build time
- Connect the form to email (e.g. Formspree or Resend).
- Add a page title and description, Open Graph image, favicon, and LocalBusiness JSON-LD.
- Convert images to WebP or AVIF and lazy-load them below the fold.

## Sections
1. **Hero:** "No middleman."
2. **Project picker:** "What are you …", which selects across their services.
3. **How it works:** "One team, start to finish."
4. **Reviews:** all six reviews.
5. **Contact:** "Get a quick quote." with the form.

## Tokens
- **Black:** #0C0E0C / #1A1D19 / #252924
- **Green:** #1BE24F, darker #11A83A for text on light backgrounds
- **Light background:** #F1F2EE
- **Lines:** #DADDD6 / #C9CEC6
- **Muted text:** #4B5149 / #9DA39B

## Contact
604-210-2710 · info@vanreno.ca · Instagram @vanreno_gc · Facebook · YouTube @VanrenoGeneralContractorsLtd · LinkedIn

## Confirm with client
- **Photos:** most look like stock or AI images and are low resolution. Get real job photos.
