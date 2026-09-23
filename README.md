# Day 15 — Nomad Coffee (Manchester)
Frontend-only, independently made **website concept**, NOT the café's official website. Created for the 100 Days Local Business Website Challenge. Replaces the earlier Marleo concept in Day-15.

## Design system
Industrial Northern Quarter inspiration, editorial typography, deep green, terracotta and concrete tones. Core journeys: quickly understand the café, browse real menu categories without invented prices, understand the atmosphere, get directions or open its Instagram.

## Run
Open index.html in VS Code Live Server or any static local server. GitHub Pages should serve main / root. No npm, server or API keys required.

## Structure
- index.html: semantic homepage, metadata, accessible navigation and real links.
- css/style.css: component styles, fluid grids, responsive breakpoints, focus states, reduced-motion fallback.
- js/main.js: functional mobile menu, 3-way menu-highlight selector, scroll indicator and progressive reveal.
- assets/nomad/{interior,coffee,sandwich,pastry}.webp: local **illustrative Unsplash stock photography**; NOT photographs of Nomad's venue or exact items.
- assets/nomad/favicon.svg: locally authored icon.
- .github/workflows/site-qa.yml: automated responsive browser QA.

## Verified public background (23 Sept 2026)
Nomad Coffee, 24 Lever Street, Manchester M1 1DW. Coffee, sandwiches and pastries; published sources describe large windows, exposed brick and space to sit. Independently check new opening hours, items and services directly with the owner before handover. Instagram handle @nomadcoffeemanc is listed in directory coverage but owner verification is still required.

Research:
- https://tasteofmanchester.com/news/brews-all-round-nomad-coffee-opens-on-lever-street-in-the-northern-quarter/
- https://www.manchestersfinest.com/places/nomad/
- https://thatsup.co.uk/manchester/cafe/nomad-coffee
- https://propercoffee.app/manchester/nomad-coffee
- https://www.thehandbook.com/things-to-do-in-manchester-uk/ (lists nomadcoffee.com but this site's ownership/association with the Manchester venue could not be independently verified; verify directly before pitching a "no website" claim).

## Stock photography and commercial handover
All four local images are sample images obtained via images.unsplash.com under https://unsplash.com/license. They do **not** show Nomad's real interior or dishes. The hero, food highlight, space and visit alt text and footer disclose that. Replace them with authorised real brand/venue photos before claiming this is an official site. In particular, illustrative cafe interiors must not be presented as genuine photographs of the venue.

Do not invent prices, operating hours, reviews, bookings, food composition or offers. Confirm the actual business's domain status, brand assets, location, menu/allergens and Instagram with the owner prior to outreach/commercial handover.

## QA
Run the GitHub Actions site QA. Inspect 320, 390, 768 and 1440 px views, mobile nav, anchor links, selector, complete local images, browser errors and reduced motion. Do not claim final deploy QA passed until the workflow proves it.
