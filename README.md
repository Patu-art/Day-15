# Nomad Coffee — Day 15 independent concept

**An unofficial frontend-only concept for the independent coffee shop at 24 Lever Street, Manchester, built for the 100 Days Challenge. This is not the business's website or an offer made on its behalf.**

[Live concept](https://patu-art.github.io/Day-15/) · [Portfolio](https://patu-art.github.io/Portfolio/) · [Challenge log](https://patu-art.github.io/Portfolio/challenge.html)

## Design

Nomad is set in Manchester's Northern Quarter, in a spacious industrial café with exposed brickwork and large windows. The earlier green/orange design felt like a generic coffee landing page. This revision draws from Lever Street's former textile/warehouse setting: warm limestone paper, brick ink, architectural window geometry, serif editorial headings and precise utilitarian monospace labels. This is an **interpretation**, not a claim to reproduce Nomad's actual branding, fonts or signage.

The site prioritizes a short visitor journey: understand the café → browse representative coffee/food categories → see the space concept → get accurate directions. No generic filler sections, fake awards, invented prices, online bookings or fabricated customer testimonials.

## File map

- `index.html` — semantic page, metadata, clearly labelled illustrative images, venue location, real external navigation.
- `css/style.css` — self-contained design system with desktop, tablet and narrow mobile breakpoints, keyboard focus and reduced-motion styles.
- `js/main.js` — accessible mobile menu with Escape, genuinely functional food highlights and an optional scroll-progress effect.
- `assets/nomad/` — **locally hosted** optimized concept images and authored favicon; source scripts and private credentials are not shipped.
- `QA_REPORT.md` — scripted browser and automated WCAG results.
- `DEPLOYMENT_REPORT.md` — independently queried public GitHub Pages smoke test.
- `PERFORMANCE_REPORT.md` — locally simulated Lighthouse results, if workflow completes.
- `.github/workflows/site-qa.yml` — automated Chromium/axe regressions and screenshot artifacts.
- `.github/workflows/deployment-smoke.yml` — public deployment smoke test.
- `.github/workflows/performance-audit.yml` — local Lighthouse report generation.

## Run and publish

Open `index.html` via VS Code Live Server or another simple HTTP server. The same root is deployed using GitHub Pages at https://patu-art.github.io/Day-15/. No npm, backend, authentication, database, API keys or remote images are required **at runtime**.

The demo has `noindex,nofollow` metadata because it is not owner-authorized and should not compete with the café in search results. Production SEO (crawlability, official structured data, business ownership, canonical, approved OG image) must be implemented **after** owner permission, not misrepresented as finished here.

## Confirmed and outstanding business research

- Taste of Manchester (19 Dec 2024): https://tasteofmanchester.com/news/brews-all-round-nomad-coffee-opens-on-lever-street-in-the-northern-quarter/
- Current listing for 24 Lever St: https://thatsup.co.uk/manchester/cafe/nomad-coffee
- 24 Lever Street building story / former textile factory: https://www.sheilabird.com/work/24-lever-street/

**Eligibility is not conclusively settled:** An online guide attributes `nomadcoffee.com` to the Manchester business (https://www.thehandbook.com/things-to-do-in-manchester-uk/), but I did not establish the domain's ownership or that it actually belongs to the Lever Street venue. Independently check the business's Instagram bio/owner or business directory ownership before making ANY "you have no website" sales claim. Similar-named Nomad Coffee operations elsewhere must not be conflated with this venue.

Nomad's exact opening hours, current menu, dietary information, accessibility details, social handle and photo usage rights should be confirmed with the business prior to handover. Until then this is an independent, noncommercial mockup.

## Stock-photo disclosure and owner content

The interior, coffee, sandwich and pastry WebP files are **illustrative Unsplash stock**, not photographs of Nomad, its staff, premises, exact drinks or food. The visual is editorial reference only. The page discloses this in the hero, menu and footer; image alt text also makes the distinction. The local stock downloads were taken from images.unsplash.com under https://unsplash.com/license.

Before pitching the design as ready for the actual business, seek permission to use real business photography and identifiable marks, replace images with verified owner-approved compressed images, correct all descriptive details, and remove stock disclaimers only after replacement. Do not scrape or download the business's Instagram media without rights to reuse it.

## Security / privacy constraints

The page is static, without third-party runtime scripts, analytics, cookies, databases, user-controlled HTML rendering, email capture or client credentials. A restrictive **meta** Content Security Policy applies to scripts, styles and images. Real HTTP response security headers such as HSTS and frame-ancestors cannot be set per-site by a GitHub Pages repository's HTML; a controlled reverse proxy/host is needed if the owner requires them.

Publicly deployed HTML, CSS, JS and images **cannot be made uncopyable**. Keep secrets and write operations server-side if a backend is commissioned in future; do not pretend CSS anti-select or obfuscation is security.

## SITEPRO release gate

The technical concept can be complete independently; the **commercial SITEPRO handover** remains blocked by (1) verifying no official site already belongs to the venue, (2) owner-approved authentic photos and identity, and (3) owner-confirmed current business and menu details. Those require business cooperation and cannot be honestly checked off by code alone. Review `SITEPRO_AUDIT.md` for a section-by-section record.
