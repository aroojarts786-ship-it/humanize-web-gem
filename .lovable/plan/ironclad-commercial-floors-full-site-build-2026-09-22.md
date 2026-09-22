# Ironclad Commercial Floors — full site build

A complete rebuild of ironcladcommercialfloors.ca: a commercial flooring contractor site for Vancouver, BC, with every page from the sitemap, tight human-sounding copy (shorter than the original), and strong search-engine setup on every page.

## Business details carried over

- Ironclad Commercial Floors, 783 E 60th Ave, Vancouver, BC V5X 2A5
- Phone (604) 540-3999, info@ironcladcommercialfloors.ca
- Mon–Fri 7:00 AM – 6:00 PM, 24/7 emergency repair
- Service area: Vancouver, Burnaby, Surrey, Richmond, Coquitlam, New Westminster

## Pages

Main: Home, Services, Projects, Locations, About, Blog, Contact

High-intent landing pages: flooring installation, flooring repair, flooring replacement, commercial epoxy, garage epoxy, plus the long-form About and Contact variants — all Vancouver BC.

Location pages (11): Vancouver, Burnaby, New Westminster, Coquitlam, Port Coquitlam, Downtown Vancouver, Gastown, Yaletown, Mount Pleasant, Metrotown, Queensborough.

Service pages (40): polishing, epoxy coating, carpet tile, LVT, sheet vinyl, VCT, rubber, linoleum, resilient, carpet, tile, terrazzo, hardwood, laminate, industrial, warehouse, retail, office, restaurant, healthcare, gym, school, hotel, showroom, epoxy repair, concrete repair, leveling, coating, sealing, anti-slip, refinishing, restoration, resurfacing, maintenance, polyaspartic, polyurethane, waterproof, soundproof, static control.

Blog (3): polished concrete vs epoxy for Vancouver warehouses; subfloor moisture testing in the BC climate; overnight flooring with zero downtime.

Every URL matches the sitemap exactly.

## Content approach

Each service and location page gets its own hand-written specifics — no repeated boilerplate paragraph swapped by name. Shorter than the original site: a clear intro, four to six real benefit points, a short process, a short FAQ, and a call to action. Plain contractor voice, no filler adjectives, varied sentence lengths.

## Design

Industrial, high-contrast direction: deep charcoal base, safety-amber accent, strong condensed headings, concrete-texture section breaks. Defined once as a design system so all 60+ pages stay consistent. Generated photography for hero and service imagery (epoxy pours, polished concrete, vinyl install, warehouse floors).

## Search setup

- Unique title, description, and social preview text per page
- Self-referencing canonical on every page
- Structured data: local business on home/contact, service markup on service pages, article markup on blog posts, breadcrumbs on deep pages
- robots.txt and a sitemap.xml matching the page list
- Server-rendered pages so content is visible to crawlers without JavaScript

## Technical notes

- Service, location, and blog pages are single dynamic routes driven by content data files (`src/data/services.ts`, `locations.ts`, `posts.ts`) so all 54 URLs prerender from one template each; named landing pages get their own route files.
- Shared layout in `__root.tsx` (header with service/location menus, footer with full link map); per-route `head()` for meta, canonical, and JSON-LD.
- Static site, no backend. The quote form opens the user's email client / links to phone unless you want submissions stored — say the word and I will add a database-backed form.

## Build order

1. Design system + shared header/footer + home page
2. Service data + service template + services index
3. Location data + location template + locations index
4. High-intent landing pages, about, projects, contact
5. Blog data + posts + index
6. robots.txt, sitemap.xml, metadata and structured-data pass
