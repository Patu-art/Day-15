# Day 15 — Marleo Little Sicily

An independently made, frontend-only SITEPRO concept website for Marleo Little Sicily, Manchester, created for the 100 Days Local Business Website Challenge. This is **not an official Marleo website**.

## Run and deploy
Open `index.html` using VS Code Live Server or any static HTTP server. GitHub Pages serves from the repository root on the main branch. No npm install, external UI libraries, database, backend, credentials or API keys are required for the website.

## Project structure
- `index.html` — semantic content, SEO metadata, accessible labels and local image references.
- `css/style.css` — theme, custom UI, fluid grid, breakpoints, motion and reduced-motion fallbacks.
- `js/main.js` — mobile navigation, real menu highlight filters, progressive scroll reveals and progress indicator.
- `assets/favicon.svg` — authored local vector favicon.
- `assets/photos/` — locally hosted illustrative photo assets. Only six final sources are referenced by the page; other research candidates and original stock downloads are temporary, not website dependencies.
- `.github/workflows/site-qa.yml` — GitHub Actions browser QA, see its recorded report when successful.

## Brand, factual details, and limitations
Research snapshot: 23 September 2026. Independent 2026 news coverage reported Marleo's move from Pollard Yard to a Northern Quarter café. Some third-party online sources differ between **93** and **95 Oldham Street**. This concept uses **95 Oldham Street**, found on a current delivery listing. Verify the exact entrance/address and current opening hours directly with the owner before sharing as an official website.

The descriptions of focaccia, arancini, cannoli and coffee are editorial menu highlights, not an exhaustive or live menu. The demo invents no prices, testimonials, promotions, reservation capacity or operating hours. The delivery menu link is a third-party platform and availability can change.

**Photography is illustrative, NOT imagery of Marleo's own products or venue.** The site displays this warning and provides licensing credits. Replace with owner-approved, appropriately sized Marleo photos before commercial handover.

## Photographic assets and licenses
- Hero, `focaccia-candidate-c.jpg`: [focaccia sandwich with vegan cheese, tomatoes and basil by Anna Korcheva](https://commons.wikimedia.org/wiki/File:Sandwich_with_vegan_cheese,_tomatoes_and_basil.jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Displayed with responsive CSS cropping; photo is illustrative and does **not** show Mortazza menu ingredients.
- Focaccia highlight, `focaccia-candidate.jpg`: [Potenza from Fabio's café](https://commons.wikimedia.org/wiki/File:Potenza_-_Fabio%27s_2026-02-12.jpg), Wikimedia Commons CC0 dedication. This photo shows food from **a different café**, not Marleo.
- Arancini highlight, `arancini-candidate-b.jpg`: [Arancini (veggie) from Nanninella](https://commons.wikimedia.org/wiki/File:Arancini_(veggie)_-_Nanninella_2025-10-21.jpg), Wikimedia Commons CC0 dedication. Food from **a different restaurant**.
- Cannoli highlight, `cannoli-candidate-b.jpg`: [Sicilian cannoli by mat's eye](https://commons.wikimedia.org/wiki/File:Cannoli_siciliani_(7472226896).jpg), [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), displayed with responsive CSS cropping.
- Coffee `coffee.webp` and bread `bread.webp`: locally hosted stock photography downloaded from Unsplash, subject to the [Unsplash License](https://unsplash.com/license). Both are illustrative; not brand photography.

## QA / handover checklist
1. Open the live GitHub Pages site and verify hero, menu images, CSS, all six image paths, menu filters, sticky nav, mobile menu close and contact/directions links.
2. Validate 320 / 375 / 390 / 768 / 1024 / 1440 px screens, keyboard, Escape nav closing, visible focus, reduced motion, no horizontal overflow and readable copy.
3. Inspect GitHub Actions site QA run and published report, or run the same Playwright script yourself. Browser QA success is only confirmed if that run reports success.
4. Confirm address, Instagram handle, menu/allergens, latest prices, opening hours and site copy with the owner.
5. Replace illustrative samples with owner-approved real assets under `assets/photos/`; preserve local paths; compress to WebP/JPEG and update alt text. Remove photo credits for photos no longer used only when appropriate.
6. Ask permission before commercial use of Marleo brand identifiers, logo or real business content.

## Research
- https://themanc.com/eats/marleo-little-sicily-northern-quarter-manchester/
- https://secretmanchester.com/marleo-sicilian-northern-quarter-manchester/
- https://www.ubereats.com/gb/store/marleo-little-sicily/BJf3F6VOUtqgbUz4yNpkZA
- https://marleo.co.uk/ (old Pollard Yard information; should not be used for the new premises)
