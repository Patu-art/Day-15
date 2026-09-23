# SITEPRO release audit — Day 15 / Nomad Coffee

Updated 23 September 2026. An independently designed, **unofficial** static frontend concept. This document distinguishes tested code from commercial readiness; it is not a claim that every possible site, business or device requirement has been satisfied.

## Completed and verified in the repo
- [x] Business-specific research: identified the 24 Lever Street Northern Quarter venue, its industrial context and typical coffee/food offering; references and date are in README.
- [x] Purpose and audience: accessible paths to understand café, browse categories and reach map/contact without a generic restaurant template.
- [x] Original visual direction: warm limestone/brick, large typographic serif, monospace wayfinding, custom abstract textile-mill/window illustration rather than unrelated 3D effects. This is an interpretation of the physical venue, **not** an assertion about its actual brand guideline.
- [x] Clear visual hierarchy, navigation, meaningful content, skip link and sticky header; no fabricated reviews, offers, hours, menu prices or booking forms.
- [x] Frontend only by agreement: separate semantic HTML, authored CSS and JS; no backend, secrets, analytics, trackers, databases or web forms.
- [x] Mobile navigation: labelled toggle, Escape close, outside close, nav-link close, correct expanded state.
- [x] Menu categories: functional three-state selector, local image/alt-text swap and pressed state.
- [x] Locally stored image assets, locally authored favicon, no required remote runtime image/font/UI resources. Images are WebP; total of four source files is about 304 KiB after optimisation.
- [x] Lazy loading for non-hero photos; explicit dimensions, request priority for hero; no decorative JS libraries.
- [x] Reduced-motion fallback, focus indicators and accessible nav labels.
- [x] Chromium browser checks at 320, 375, 390, 768, 1024, 1440 px: all displayed/selector images load, no horizontal overflow, no reported uncaught JS errors, working nav/selector and valid internal anchors. See QA_REPORT.md.
- [x] Automated axe WCAG 2.1 A/AA at 390 and 1440 px: no *serious/critical* violations in the observed run. This does not equal full accessibility certification.
- [x] Local simulated Lighthouse mobile audit is recorded in PERFORMANCE_REPORT.md; actual device/field experience can differ.
- [x] Public GitHub Pages smoke test in DEPLOYMENT_REPORT.md verified revised site content and its local image/CSS/JS asset URLs from an external GitHub Actions runner.
- [x] Static frontend security: restrictive meta CSP, no external runtime scripts, no user HTML injection or stored secrets. Public frontend code/images **cannot** be made impossible to copy.
- [x] Transparent demonstration status and image disclaimers; deliberate noindex to avoid impersonating a business before its permission.

## Outstanding external and manual release gates
- [ ] **CRITICAL: confirm no official website currently belongs to this exact Manchester business.** A travel guide gives nomadcoffee.com, but its connection to the Lever Street venue is unverified. Do not pitch as a no-website client until the business confirms it.
- [ ] **CRITICAL: obtain owner-approved true brand photos, logo/fonts (if available) and written reuse rights.** Every image currently shown is illustrative stock, including the interior photo; the original architectural drawing is only a concept.
- [ ] Have the owner verify address/entrance, active Instagram handle, current menu, prices/allergens, services and opening hours before treating copy as official.
- [ ] Human/manual screen-reader test (NVDA/VoiceOver), physical device/touch review, high-contrast and text zoom review, actual on-site owner UX feedback. Automated axe/Lighthouse do not replace these.
- [ ] With permission to launch an official site: replace stock assets and noindex, check approved branding, set canonical and owned social preview, add verified structured business data, publish actual contact/hours and review production host TLS/HSTS/frame protection. GitHub Pages cannot add custom response security headers via HTML.
- [ ] Any paid backend/admin editing, asset access controls or order/payment functionality is **out of scope** because this project was approved frontend-only.

**Current verdict:** technically tested **public concept**; **not** a verified no-website lead or owner-ready commercial handover until the external blockers above are resolved. Never relabel pending work as completed.
