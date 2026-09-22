export type ImageKey = "epoxy" | "vinyl" | "concrete" | "office";

export type Service = {
  slug: string;
  name: string;
  category: "Concrete & Epoxy" | "Resilient & Vinyl" | "Tile & Carpet" | "Sector" | "Repair & Care";
  image: ImageKey;
  title: string;
  description: string;
  intro: string;
  bullets: string[];
  specs: { durability: string; cure: string; maintenance: string; price: string };
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "concrete-floor-polishing",
    name: "Concrete Floor Polishing",
    category: "Concrete & Epoxy",
    image: "concrete",
    title: "Concrete Floor Polishing in Vancouver, BC",
    description:
      "Mechanically polished concrete for Vancouver warehouses, showrooms and retail. Dust-free grinding, densifier, gloss levels 400–3000 grit.",
    intro:
      "Polishing turns the slab you already own into the finished floor. We grind through the surface paste, densify, then refine to the gloss level you want. No coating to peel, and no recoat cycle every few years.",
    bullets: [
      "Dust-extracted planetary grinders — your staff can work the next aisle over",
      "Lithium densifier and stain guard on every job",
      "Gloss from matte 400 grit to mirror 3000 grit",
      "Existing cracks stitched and joints filled before the first pass",
    ],
    specs: { durability: "Heavy industrial", cure: "Same day", maintenance: "Auto-scrub only", price: "$4.25 – $9.00 / sq ft" },
    faqs: [
      { q: "Can you polish an old warehouse slab?", a: "Usually yes. If the slab is structurally sound we can grind out most staining and wear. Badly spalled areas get resurfaced first." },
      { q: "How slippery is polished concrete?", a: "Dry, it tests well. For wet areas we add a clear anti-slip conditioner that keeps the gloss." },
    ],
  },
  {
    slug: "epoxy-floor-coating",
    name: "Epoxy Floor Coating",
    category: "Concrete & Epoxy",
    image: "epoxy",
    title: "Commercial Epoxy Floor Coating in Vancouver, BC",
    description:
      "Seamless 100% solids epoxy coatings for Vancouver warehouses, plants and garages. Chemical resistant, forklift rated, 10-year workmanship warranty.",
    intro:
      "A coating is only as good as the prep underneath it. We shot-blast or diamond grind to a CSP 2–3 profile, moisture test the slab, then roll a 100% solids epoxy that bonds instead of peeling.",
    bullets: [
      "Shot-blast profiling, not acid etching",
      "ASTM F2170 moisture readings before a single pail is opened",
      "Broadcast quartz or flake for grip and light reflectance",
      "Foot traffic in 12 hours, forklifts in 48",
    ],
    specs: { durability: "Extreme industrial", cure: "12 – 48 hours", maintenance: "Low", price: "$6.00 – $12.00 / sq ft" },
    faqs: [
      { q: "Why does epoxy peel?", a: "Almost always moisture or weak prep. We test slab humidity first and install a vapour-blocking primer when the numbers call for it." },
      { q: "Can you work overnight?", a: "Yes. Most of our coating work happens between 6 PM and 6 AM so production keeps running." },
    ],
  },
  {
    slug: "concrete-epoxy-floor-installation",
    name: "Concrete Epoxy Floor Installation",
    category: "Concrete & Epoxy",
    image: "epoxy",
    title: "Concrete Epoxy Floor Installation in Vancouver, BC",
    description:
      "Full epoxy floor build-ups over concrete in Vancouver, BC — primer, body coat, broadcast and topcoat installed by Red Seal crews.",
    intro:
      "A full system, not a paint job. Primer, body coat, aggregate broadcast, then a topcoat chosen for the chemistry your facility actually deals with. We spec the build thickness to your traffic, not to a catalogue.",
    bullets: [
      "Systems from 40 mil coatings to 1/4 inch mortar build-ups",
      "Cove base and drain detailing where washdown happens",
      "Vapour barrier primers for slabs on grade",
      "Line marking and safety zones applied before handover",
    ],
    specs: { durability: "Extreme industrial", cure: "24 – 72 hours", maintenance: "Low", price: "$7.00 – $15.00 / sq ft" },
    faqs: [
      { q: "How thick should the system be?", a: "Offices and showrooms do fine at 40–60 mil. Forklift aisles and wash bays want a troweled mortar build-up." },
      { q: "Do you handle joints?", a: "Yes — joints are filled with semi-rigid polyurea and honoured through the coating so they do not telegraph." },
    ],
  },
  {
    slug: "carpet-tile-installation",
    name: "Carpet Tile Installation",
    category: "Tile & Carpet",
    image: "office",
    title: "Commercial Carpet Tile Installation in Vancouver, BC",
    description:
      "Modular carpet tile installation for Vancouver offices and institutions. Phased night work, tackifier install, tiles swap out individually later.",
    intro:
      "Carpet tile is the practical office floor: one damaged tile comes up, one goes down, nobody reflooring a boardroom. We install on tackifier so the field stays liftable for years.",
    bullets: [
      "Quarter-turn, monolithic or ashlar layouts",
      "Floor flattened to industry tolerance before tiles land",
      "Phased by floor or wing so desks move once",
      "Attic stock labelled and left on site",
    ],
    specs: { durability: "Heavy commercial", cure: "Immediate use", maintenance: "Vacuum + spot", price: "$3.50 – $8.50 / sq ft" },
    faqs: [
      { q: "Can you install around furniture?", a: "Yes. We lift and shift in zones overnight, so staff come back to a finished area." },
      { q: "What about old adhesive?", a: "It gets scraped and skim-coated. Tiles set on cutback residue always telegraph." },
    ],
  },
  {
    slug: "commercial-luxury-vinyl-flooring-installation",
    name: "Luxury Vinyl (LVT / LVP) Installation",
    category: "Resilient & Vinyl",
    image: "vinyl",
    title: "Commercial Luxury Vinyl Flooring Installation in Vancouver, BC",
    description:
      "LVT and LVP installation for Vancouver offices, clinics and retail. Moisture-tested subfloors, glue-down and rigid core, fast return to service.",
    intro:
      "LVT gives you wood or stone looks with commercial wear layers. The trick is flatness — every dip under a plank shows up as a shadow line once the lights go on, so we level first and install second.",
    bullets: [
      "Glue-down, loose lay and rigid core systems",
      "20 mil commercial wear layers for high traffic",
      "Self-levelling to 3 mm in 3 m before install",
      "Welded or capped transitions at every threshold",
    ],
    specs: { durability: "Heavy commercial", cure: "24 hours", maintenance: "Damp mop", price: "$5.50 – $11.00 / sq ft" },
    faqs: [
      { q: "Is LVT alright over concrete on grade?", a: "With a tested slab and the right adhesive, yes. High RH readings call for a moisture barrier first." },
      { q: "Can it handle rolling loads?", a: "Glue-down LVT does. Floating click floors are not the right choice under pallet jacks." },
    ],
  },
  {
    slug: "commercial-sheet-vinyl-flooring-installation",
    name: "Sheet Vinyl Flooring Installation",
    category: "Resilient & Vinyl",
    image: "vinyl",
    title: "Commercial Sheet Vinyl Flooring Installation in Vancouver, BC",
    description:
      "Heat-welded sheet vinyl for Vancouver clinics, kitchens and labs. Seamless hygienic floors with flash-coved base and welded seams.",
    intro:
      "Where water and cleaning chemicals live, sheet vinyl with heat-welded seams beats anything modular. Done right it is one continuous surface from wall to wall, coved up the base.",
    bullets: [
      "Hot-welded seams, no open joints for water to find",
      "Flash cove base with capping strip",
      "Infection-control detailing for clinics and labs",
      "Slip-rated sheet goods for kitchens and washdowns",
    ],
    specs: { durability: "Heavy commercial", cure: "24 hours", maintenance: "Damp mop", price: "$6.00 – $12.00 / sq ft" },
    faqs: [
      { q: "How long do welded seams last?", a: "As long as the sheet does, when the weld is routed and pulled correctly. We weld every seam, including behind equipment." },
      { q: "Can you do coved base?", a: "Yes, with a proper fillet and cap — standard on every clinic and kitchen we do." },
    ],
  },
  {
    slug: "commercial-vinyl-composition-tile-installation",
    name: "Vinyl Composition Tile (VCT) Installation",
    category: "Resilient & Vinyl",
    image: "vinyl",
    title: "Commercial VCT Installation in Vancouver, BC",
    description:
      "Vinyl composition tile installation and finishing for Vancouver schools, warehouses and back-of-house areas. Budget-friendly, endlessly repairable.",
    intro:
      "VCT is still the cheapest hard floor per square foot that survives a school hallway. It needs finish and buffing, but a damaged tile costs a few dollars to replace.",
    bullets: [
      "Full-spread adhesive with proper open time",
      "Five coats of finish and a burnish before handover",
      "Feature strips and colour banding for wayfinding",
      "Boxes of matching attic stock left on site",
    ],
    specs: { durability: "Commercial", cure: "24 hours", maintenance: "Strip + wax cycle", price: "$3.00 – $6.50 / sq ft" },
    faqs: [
      { q: "Does VCT need waxing?", a: "Yes — finish is what protects it. Skip the maintenance program and the tile wears through." },
      { q: "Can you match old tile?", a: "Often. Most standard colour lines are still in production and we can blend patched areas." },
    ],
  },
  {
    slug: "commercial-rubber-flooring-installation",
    name: "Rubber Flooring Installation",
    category: "Resilient & Vinyl",
    image: "vinyl",
    title: "Commercial Rubber Flooring Installation in Vancouver, BC",
    description:
      "Rubber tile and sheet flooring for Vancouver gyms, stairwells and transit areas. Impact absorbing, slip resistant, quiet underfoot.",
    intro:
      "Rubber earns its place where noise, impact and grip matter — stairs, weight rooms, back corridors. It is heavy to install and unforgiving of a bad subfloor, so prep is where we spend the time.",
    bullets: [
      "Sheet, tile and interlocking systems",
      "Stair treads and nosings installed as one piece",
      "Sound ratings for floors over occupied space",
      "Grip surfaces for wet entry zones",
    ],
    specs: { durability: "Heavy commercial", cure: "48 hours", maintenance: "Neutral cleaner", price: "$7.00 – $14.00 / sq ft" },
    faqs: [
      { q: "Will rubber off-gas?", a: "New rubber has a smell for a few days. We ventilate and time installs for weekends where that matters." },
      { q: "Can it go over concrete?", a: "Yes, once the slab is dry, flat and primed." },
    ],
  },
  {
    slug: "commercial-linoleum-flooring-installation",
    name: "Linoleum Flooring Installation",
    category: "Resilient & Vinyl",
    image: "vinyl",
    title: "Commercial Linoleum Flooring Installation in Vancouver, BC",
    description:
      "Natural linoleum installation for Vancouver schools, libraries and healthcare. Linseed-based, low-VOC, decades of service life.",
    intro:
      "Linoleum is linseed oil, wood flour and jute — not vinyl. It handles decades of traffic and suits projects chasing low-emission materials, but it is fussy about moisture and adhesive timing.",
    bullets: [
      "Sheet and tile with welded seams",
      "Low-VOC, bio-based material for green specs",
      "Strict adhesive open-time control for a flat lay",
      "Factory finish means no initial waxing",
    ],
    specs: { durability: "Heavy commercial", cure: "48 – 72 hours", maintenance: "Neutral cleaner", price: "$7.00 – $13.00 / sq ft" },
    faqs: [
      { q: "Linoleum or vinyl?", a: "Linoleum for longevity and green specs, vinyl for wet areas and lower cost. We will walk you through both." },
      { q: "Does it yellow?", a: "There is a temporary amber cast from the linseed after install. Light clears it within days." },
    ],
  },
  {
    slug: "commercial-resilient-flooring-installation",
    name: "Resilient Flooring Installation",
    category: "Resilient & Vinyl",
    image: "vinyl",
    title: "Commercial Resilient Flooring Installation in Vancouver, BC",
    description:
      "Full resilient flooring installation across Vancouver, BC — LVT, sheet vinyl, VCT, rubber and linoleum, installed by Red Seal crews.",
    intro:
      "Resilient covers everything soft-but-hard: vinyl, rubber, linoleum, cork. One crew, one moisture test, one accountable warranty across all of it — useful when a single project uses four different products.",
    bullets: [
      "Single trade for mixed-material floor plans",
      "Consistent subfloor prep across every room type",
      "Transitions detailed between systems, not improvised",
      "One warranty covering the whole scope",
    ],
    specs: { durability: "Commercial to heavy", cure: "24 – 48 hours", maintenance: "Damp mop", price: "$4.50 – $12.00 / sq ft" },
    faqs: [
      { q: "Can you mix products in one project?", a: "That is most projects — LVT in offices, sheet in washrooms, VCT in storage. We plan the transitions up front." },
      { q: "Who handles subfloor prep?", a: "We do. Grinding, patching and levelling are part of our scope." },
    ],
  },
  {
    slug: "commercial-carpet-installation",
    name: "Broadloom Carpet Installation",
    category: "Tile & Carpet",
    image: "office",
    title: "Commercial Carpet Installation in Vancouver, BC",
    description:
      "Broadloom carpet installation for Vancouver offices, hotels and theatres. Direct glue and double-stick systems, seams planned around sightlines.",
    intro:
      "Broadloom still wins on cost per square foot and on pattern. The work is in seam placement and stretch — get those wrong and you see every joint down a corridor within a year.",
    bullets: [
      "Seams planned away from doorways and sightlines",
      "Direct glue-down or double-stick over cushion",
      "Pattern-matched runs for corridors and ballrooms",
      "Power stretch where the specification calls for it",
    ],
    specs: { durability: "Heavy commercial", cure: "Immediate use", maintenance: "Vacuum + extraction", price: "$3.75 – $9.00 / sq ft" },
    faqs: [
      { q: "Carpet or carpet tile?", a: "Tile for offices that change layout, broadloom for hospitality and anywhere pattern runs matter." },
      { q: "Do you remove the old carpet?", a: "Yes, including disposal and adhesive residue removal." },
    ],
  },
  {
    slug: "commercial-tile-flooring-installation",
    name: "Tile Flooring Installation",
    category: "Tile & Carpet",
    image: "office",
    title: "Commercial Tile Flooring Installation in Vancouver, BC",
    description:
      "Porcelain and ceramic tile installation for Vancouver lobbies, washrooms and restaurants. Waterproofing, uncoupling membrane, epoxy grout.",
    intro:
      "Commercial tile lives or dies on what is under it — membrane, mortar coverage, movement joints. We follow TTMAC detail, which is why our floors do not hollow out at the door swing.",
    bullets: [
      "Uncoupling and waterproof membranes where required",
      "Full mortar coverage, back-buttered on large format",
      "Epoxy grout in kitchens and washrooms",
      "Movement joints placed to spec, not skipped",
    ],
    specs: { durability: "Heavy commercial", cure: "72 hours", maintenance: "Very low", price: "$9.00 – $20.00 / sq ft" },
    faqs: [
      { q: "Why do tiles crack later?", a: "Almost always slab movement with no uncoupling layer or missing movement joints. Both are part of our standard build." },
      { q: "Can you tile over existing tile?", a: "Sometimes, if it is sound and bonded. We sound-test the field before deciding." },
    ],
  },
  {
    slug: "commercial-terrazzo-flooring-installation",
    name: "Terrazzo Flooring Installation",
    category: "Tile & Carpet",
    image: "concrete",
    title: "Commercial Terrazzo Flooring Installation in Vancouver, BC",
    description:
      "Epoxy terrazzo installation and restoration for Vancouver lobbies, campuses and transit hubs. Custom aggregate, divider strips, mirror polish.",
    intro:
      "Terrazzo is the longest-lived floor we install — measured in decades, not warranty years. Epoxy matrix, custom aggregate, zinc or brass dividers, ground back to a mirror.",
    bullets: [
      "Custom aggregate and colour matrix blending",
      "Zinc, brass or plastic divider strip layouts",
      "Logos and inlays poured into the field",
      "Restoration and re-polishing of existing terrazzo",
    ],
    specs: { durability: "Lifetime", cure: "5 – 7 days", maintenance: "Neutral cleaner", price: "$22.00 – $45.00 / sq ft" },
    faqs: [
      { q: "Can you repair old terrazzo?", a: "Yes — patch, re-grind and re-polish. Matching aggregate on heritage floors takes a sample and some patience." },
      { q: "How long does install take?", a: "Plan on a week or more per pour area. It is not a fast-track floor." },
    ],
  },
  {
    slug: "commercial-hardwood-flooring-installation",
    name: "Hardwood Flooring Installation",
    category: "Tile & Carpet",
    image: "vinyl",
    title: "Commercial Hardwood Flooring Installation in Vancouver, BC",
    description:
      "Solid and engineered hardwood installation for Vancouver restaurants, boutiques and offices. Acclimatized stock, commercial-grade finish.",
    intro:
      "Wood in a commercial space needs a hard finish and a stable subfloor. We acclimatize the stock on site, check slab moisture, and finish with a commercial waterborne system that holds up to shoes and carts.",
    bullets: [
      "Engineered and solid strip over wood or concrete",
      "On-site acclimatization before a single board is nailed",
      "Commercial waterborne or hardwax oil finishes",
      "Feature borders and directional layouts",
    ],
    specs: { durability: "Commercial", cure: "72 hours", maintenance: "Dry mop + recoat", price: "$9.00 – $18.00 / sq ft" },
    faqs: [
      { q: "Will it survive a restaurant?", a: "In dining rooms, yes with the right finish and a recoat schedule. Not behind the line." },
      { q: "Can hardwood go over concrete?", a: "Engineered can, glued or floated, once slab moisture tests clear." },
    ],
  },
  {
    slug: "commercial-laminate-flooring-installation",
    name: "Laminate Flooring Installation",
    category: "Tile & Carpet",
    image: "vinyl",
    title: "Commercial Laminate Flooring Installation in Vancouver, BC",
    description:
      "AC4/AC5 rated commercial laminate installation in Vancouver, BC. Fast, budget-conscious floors for offices, showrooms and light retail.",
    intro:
      "Laminate is the value play for dry, moderate-traffic spaces. Use a commercial AC rating, keep it out of wet areas, leave a real expansion gap, and it does a good job for years.",
    bullets: [
      "AC4 and AC5 commercial wear ratings only",
      "Acoustic underlay for floors over tenants",
      "Proper perimeter expansion, no pinched boards",
      "Installed in a day or two per suite",
    ],
    specs: { durability: "Light commercial", cure: "Immediate use", maintenance: "Dry mop", price: "$3.50 – $7.00 / sq ft" },
    faqs: [
      { q: "Laminate or LVP for an office?", a: "LVP if there is any moisture risk or rolling load. Laminate if budget rules and the space stays dry." },
      { q: "Can it be repaired?", a: "Individual boards can be swapped, but it is fiddlier than a glue-down plank." },
    ],
  },
  {
    slug: "industrial-flooring-installation",
    name: "Industrial Flooring Installation",
    category: "Sector",
    image: "epoxy",
    title: "Industrial Flooring Installation in Vancouver, BC",
    description:
      "Industrial floor systems for Vancouver plants and production facilities — epoxy mortar, urethane cement, thermal-shock resistant finishes.",
    intro:
      "Production floors take abuse most coatings never see: hot washdowns, dropped steel, chemical spills. We spec urethane cement or epoxy mortar based on what actually hits the floor in your plant.",
    bullets: [
      "Urethane cement for thermal shock and steam cleaning",
      "Chemical resistance matched to your process",
      "Drains, coving and slope corrections built in",
      "Sectional shutdowns so production keeps moving",
    ],
    specs: { durability: "Extreme industrial", cure: "24 – 72 hours", maintenance: "Washdown safe", price: "$9.00 – $18.00 / sq ft" },
    faqs: [
      { q: "Can you work around production?", a: "Yes. We section the plant, coat at night or on weekends, and hand each zone back before the shift starts." },
      { q: "What survives hot washdown?", a: "Urethane cement. Standard epoxy will disbond under repeated steam." },
    ],
  },
  {
    slug: "warehouse-flooring-installation",
    name: "Warehouse Flooring Installation",
    category: "Sector",
    image: "epoxy",
    title: "Warehouse Flooring Installation in Vancouver, BC",
    description:
      "Warehouse floor coatings, joint repair and line marking across Metro Vancouver. Forklift-rated systems installed in phased night shifts.",
    intro:
      "Warehouse floors fail at the joints and the racking lines first. We repair joints with semi-rigid filler, coat or polish the field, then lay down traffic markings that actually last under wheel loads.",
    bullets: [
      "Semi-rigid joint fill that stops edge spalling",
      "Forklift and pallet-jack rated finishes",
      "Aisle, pedestrian and hazard line marking",
      "Phased by bay so shipping never stops",
    ],
    specs: { durability: "Extreme industrial", cure: "12 – 48 hours", maintenance: "Auto-scrub", price: "$4.00 – $10.00 / sq ft" },
    faqs: [
      { q: "Do you move racking?", a: "We coordinate with your rack crew and work around live inventory zone by zone." },
      { q: "Coating or polishing a warehouse?", a: "Polishing if the slab is good and you want low maintenance. Coating if you need chemical resistance or colour zones." },
    ],
  },
  {
    slug: "retail-flooring-installation",
    name: "Retail Flooring Installation",
    category: "Sector",
    image: "office",
    title: "Retail Flooring Installation in Vancouver, BC",
    description:
      "Retail store flooring installation in Vancouver, BC. Overnight fit-outs, landlord-compliant scheduling, finishes that survive opening-day traffic.",
    intro:
      "Retail schedules are brutal and the floor is usually last in line. We work nights and hand the space back clean each morning so fixturing and merchandising keep their dates.",
    bullets: [
      "Overnight and pre-opening install windows",
      "Landlord rules, noise limits and loading bays handled",
      "Brand-standard finishes matched across locations",
      "Fast-cure products so shelving lands on schedule",
    ],
    specs: { durability: "Heavy commercial", cure: "12 – 24 hours", maintenance: "Damp mop", price: "$5.00 – $12.00 / sq ft" },
    faqs: [
      { q: "Can you keep the store open?", a: "For remodels, yes — we hoard off sections and work after hours." },
      { q: "Do you do multi-site rollouts?", a: "Yes, with one spec and one crew lead across the locations." },
    ],
  },
  {
    slug: "office-flooring-installation",
    name: "Office Flooring Installation",
    category: "Sector",
    image: "office",
    title: "Office Flooring Installation in Vancouver, BC",
    description:
      "Office flooring installation across Vancouver, BC — carpet tile, LVT and polished concrete installed floor by floor with minimal downtime.",
    intro:
      "Occupied office towers need a floor crew that respects elevators, freight windows and other tenants. We phase by wing, move furniture in lifts, and keep the dust where it belongs.",
    bullets: [
      "Phased by floor or wing, furniture lifted in place",
      "Freight elevator and after-hours building access managed",
      "Acoustic underlays for tenant floors",
      "Low-VOC materials so staff return next morning",
    ],
    specs: { durability: "Heavy commercial", cure: "Immediate to 24 h", maintenance: "Vacuum / damp mop", price: "$4.00 – $10.00 / sq ft" },
    faqs: [
      { q: "Do we have to move out?", a: "Rarely. Most of our office work happens in occupied buildings, one zone at a time." },
      { q: "How is the smell handled?", a: "Low-VOC adhesives plus overnight ventilation. Staff walk into a neutral space." },
    ],
  },
  {
    slug: "restaurant-flooring-installation",
    name: "Restaurant & Kitchen Flooring",
    category: "Sector",
    image: "epoxy",
    title: "Restaurant & Kitchen Flooring Installation in Vancouver, BC",
    description:
      "Health-code compliant kitchen and dining flooring in Vancouver, BC. Urethane cement, quarry tile, coved base and slip-rated finishes.",
    intro:
      "Kitchens need grease resistance, slope to drain and a coved base a health inspector will sign off on. Dining rooms need to look good. We do both and get you back open fast.",
    bullets: [
      "Urethane cement and quarry tile behind the line",
      "Integral coved base with proper fillet",
      "Slip resistance rated for greasy wet floors",
      "Turnarounds as short as a long weekend",
    ],
    specs: { durability: "Extreme / washdown", cure: "24 – 48 hours", maintenance: "Daily washdown", price: "$10.00 – $20.00 / sq ft" },
    faqs: [
      { q: "How long are we closed?", a: "A typical kitchen is three to four days. We schedule around your slowest week." },
      { q: "Will it pass inspection?", a: "We build to health-authority detail — coved base, sealed penetrations, slope to drain." },
    ],
  },
  {
    slug: "healthcare-flooring-installation",
    name: "Healthcare Flooring Installation",
    category: "Sector",
    image: "vinyl",
    title: "Healthcare Flooring Installation in Vancouver, BC",
    description:
      "Clinic and medical facility flooring in Vancouver, BC. Welded sheet vinyl, flash coving, infection-control protocols and after-hours work.",
    intro:
      "Clinical floors have to be cleanable end to end — welded seams, coved base, no ledge for anything to sit in. We work under infection-control protocols and hand rooms back ready for use.",
    bullets: [
      "Heat-welded sheet vinyl with flash cove base",
      "ICRA containment and negative-air coordination",
      "Conductive and static-control flooring for OR and imaging",
      "Room-by-room phasing around clinic hours",
    ],
    specs: { durability: "Heavy commercial", cure: "24 – 48 hours", maintenance: "Hospital-grade cleaners", price: "$7.00 – $14.00 / sq ft" },
    faqs: [
      { q: "Can you work in an operating clinic?", a: "Yes — evenings, weekends, and sealed containment between finished and active areas." },
      { q: "What about imaging rooms?", a: "Static-dissipative sheet with copper grounding, installed to the equipment supplier's spec." },
    ],
  },
  {
    slug: "gym-flooring-installation",
    name: "Gym & Fitness Flooring",
    category: "Sector",
    image: "vinyl",
    title: "Gym & Fitness Flooring Installation in Vancouver, BC",
    description:
      "Fitness facility flooring in Vancouver, BC — rubber tile, poured urethane, lifting platforms and sport surfaces built for dropped weight.",
    intro:
      "Dropped plates destroy ordinary floors and annoy the tenants below. We build zones: heavy rubber and platforms under the racks, thinner rubber for cardio, sport surface for the studio.",
    bullets: [
      "8–20 mm rubber zoned by activity",
      "Recessed or surface lifting platforms",
      "Acoustic underlay for gyms above occupied space",
      "Poured seamless urethane where hygiene matters",
    ],
    specs: { durability: "Impact rated", cure: "24 – 48 hours", maintenance: "Neutral cleaner", price: "$6.00 – $16.00 / sq ft" },
    faqs: [
      { q: "Will the tenants below hear the weights?", a: "Not the same way, with the right underlay build. We spec thickness to the structure above them." },
      { q: "Tile or rolled rubber?", a: "Tile for zoning and easy repair, rolled for big open floors with fewer seams." },
    ],
  },
  {
    slug: "school-flooring-installation",
    name: "School & Education Flooring",
    category: "Sector",
    image: "office",
    title: "School Flooring Installation in Vancouver, BC",
    description:
      "School and campus flooring installation in Vancouver, BC. Summer-break scheduling, low-VOC materials, durable corridor and classroom finishes.",
    intro:
      "School work is a summer sprint. We plan the sequence in spring, mobilize the day classes end, and finish with weeks of cure time before students come back.",
    bullets: [
      "Summer-break programs with fixed completion dates",
      "Low-VOC and bio-based materials for classrooms",
      "Corridor finishes rated for sustained abuse",
      "Gym, library and lab surfaces under one contract",
    ],
    specs: { durability: "Heavy commercial", cure: "24 – 72 hours", maintenance: "Auto-scrub", price: "$4.00 – $11.00 / sq ft" },
    faqs: [
      { q: "Can you finish before September?", a: "That is the whole plan. We build the schedule backwards from the first day of class." },
      { q: "Do you handle asbestos tile?", a: "Removal goes to a licensed abatement contractor; we start once clearance is issued." },
    ],
  },
  {
    slug: "hotel-flooring-installation",
    name: "Hotel & Hospitality Flooring",
    category: "Sector",
    image: "office",
    title: "Hotel Flooring Installation in Vancouver, BC",
    description:
      "Hotel flooring installation in Vancouver, BC — guest rooms, corridors and ballrooms, phased floor by floor while the property stays open.",
    intro:
      "Hotels do not close. We take a floor at a time, work with the rooms division on blocks, and keep corridors walkable for guests every single night.",
    bullets: [
      "Guest-room turns in a single day per room",
      "Pattern-matched corridor broadloom",
      "Ballroom and pre-function carpet with feature borders",
      "Quiet-hours compliance and guest-safe walkways",
    ],
    specs: { durability: "Heavy commercial", cure: "Immediate to 24 h", maintenance: "Vacuum + extraction", price: "$5.00 – $13.00 / sq ft" },
    faqs: [
      { q: "How many rooms per day?", a: "Typically eight to twelve standard rooms per crew, depending on furniture and removal." },
      { q: "Can guests use the corridor?", a: "Yes. We stage so there is always a clean protected path." },
    ],
  },
  {
    slug: "showroom-flooring-installation",
    name: "Showroom Flooring Installation",
    category: "Sector",
    image: "concrete",
    title: "Showroom Flooring Installation in Vancouver, BC",
    description:
      "Showroom and auto dealership flooring in Vancouver, BC. High-gloss polished concrete and decorative epoxy that carries vehicle loads.",
    intro:
      "A showroom floor is lighting as much as flooring. High gloss bounces light onto the product, and it has to carry vehicles without tyre marking or scuffing under display units.",
    bullets: [
      "Mirror-gloss polish or decorative metallic epoxy",
      "Tyre-mark resistant topcoats",
      "Point loads from vehicles and display rigs accounted for",
      "Installed overnight around active sales floors",
    ],
    specs: { durability: "Heavy commercial", cure: "24 – 48 hours", maintenance: "Dust mop + auto-scrub", price: "$6.00 – $14.00 / sq ft" },
    faqs: [
      { q: "Do tyres stain epoxy?", a: "Cheap topcoats yellow and mark. We use aliphatic polyaspartic topcoats that do not." },
      { q: "Polished concrete in a dealership?", a: "Very common and very low maintenance once densified and guarded." },
    ],
  },
  {
    slug: "commercial-epoxy-floor-repair",
    name: "Epoxy Floor Repair",
    category: "Repair & Care",
    image: "epoxy",
    title: "Commercial Epoxy Floor Repair in Vancouver, BC",
    description:
      "Repair for peeling, bubbled or delaminated epoxy floors in Vancouver, BC. Failure diagnosis, sectional re-coat, 24/7 emergency response.",
    intro:
      "Before we patch anything we find out why it failed — moisture, contamination or a thin prep job. Otherwise the repair lifts the same way the original did.",
    bullets: [
      "Adhesion and moisture testing before quoting",
      "Delaminated sections cut out and rebuilt",
      "Colour-matched re-coats over the existing field",
      "Emergency response for trip hazards and open slab",
    ],
    specs: { durability: "Matches original", cure: "12 – 24 hours", maintenance: "Low", price: "Quoted per area" },
    faqs: [
      { q: "Can you patch just one bay?", a: "Yes. Sectional repairs are most of this work — we feather edges so the patch is not a lip." },
      { q: "Why did the last coating peel?", a: "Nine times out of ten, slab moisture or a surface that was never profiled. We test both." },
    ],
  },
  {
    slug: "commercial-concrete-floor-repair",
    name: "Concrete Floor Repair",
    category: "Repair & Care",
    image: "concrete",
    title: "Commercial Concrete Floor Repair in Vancouver, BC",
    description:
      "Concrete floor and joint repair in Vancouver, BC. Crack routing, spall rebuilds, joint armouring and fast-set patching for live facilities.",
    intro:
      "Cracks and spalled joints get worse under wheels, fast. We rout, fill with structural material, and rebuild joint edges so forklifts stop chewing at them.",
    bullets: [
      "Crack routing and epoxy or polyurea injection",
      "Spall and pothole rebuilds with fast-set mortar",
      "Joint armouring in high-traffic aisles",
      "Return to traffic in as little as two hours",
    ],
    specs: { durability: "Structural", cure: "2 – 24 hours", maintenance: "None", price: "Quoted per area" },
    faqs: [
      { q: "How fast can we drive on it?", a: "Fast-set materials take forklifts in about two hours. Standard mortars want overnight." },
      { q: "Will the repair be visible?", a: "Colour-matched but not invisible. If appearance matters we recommend coating or polishing afterwards." },
    ],
  },
  {
    slug: "commercial-floor-leveling-and-preparation",
    name: "Floor Levelling & Preparation",
    category: "Repair & Care",
    image: "concrete",
    title: "Commercial Floor Levelling & Preparation in Vancouver, BC",
    description:
      "Subfloor grinding, shot blasting, self-levelling and moisture testing in Vancouver, BC — the prep that decides whether a floor lasts.",
    intro:
      "Every flooring failure we get called to fix started here. Grind off what is bonded, blast a profile, pour self-levelling where the slab dips, and test moisture before anything goes down.",
    bullets: [
      "Diamond grinding and shot blasting to CSP profile",
      "Self-levelling underlayment to FF tolerance",
      "ASTM F2170 and F1869 moisture testing with a report",
      "Adhesive residue and old coating removal",
    ],
    specs: { durability: "Substrate", cure: "4 – 24 hours", maintenance: "N/A", price: "$1.50 – $6.00 / sq ft" },
    faqs: [
      { q: "Do we really need moisture testing?", a: "If you want a warranty, yes. Manufacturers void coverage without documented readings." },
      { q: "How flat is flat enough?", a: "Most finishes need 3 mm over 3 m. Large-format tile and LVT want better." },
    ],
  },
  {
    slug: "commercial-floor-coating",
    name: "Commercial Floor Coating",
    category: "Repair & Care",
    image: "epoxy",
    title: "Commercial Floor Coating in Vancouver, BC",
    description:
      "Protective floor coatings for Vancouver, BC facilities — epoxy, polyaspartic and urethane systems specified to your traffic and chemistry.",
    intro:
      "Coating choice is a trade-off between cure speed, chemical resistance and cost. We walk the floor, ask what gets spilled on it, and spec from there instead of defaulting to one product.",
    bullets: [
      "Epoxy, polyaspartic, urethane and hybrid systems",
      "Colour zoning, safety markings and logos",
      "Anti-slip aggregate where grip is required",
      "Single-night turnarounds available",
    ],
    specs: { durability: "Heavy industrial", cure: "2 – 48 hours", maintenance: "Low", price: "$4.50 – $12.00 / sq ft" },
    faqs: [
      { q: "Which coating cures fastest?", a: "Polyaspartic — walkable in a couple of hours, which is why we use it for overnight work." },
      { q: "Can you coat over old coating?", a: "If it is well bonded, after abrading and a test patch. If not, it comes off." },
    ],
  },
  {
    slug: "commercial-concrete-floor-sealing",
    name: "Concrete Floor Sealing",
    category: "Repair & Care",
    image: "concrete",
    title: "Commercial Concrete Floor Sealing in Vancouver, BC",
    description:
      "Penetrating and film-forming concrete sealers in Vancouver, BC. Dust-proofing, stain resistance and moisture control for warehouses and garages.",
    intro:
      "Bare concrete dusts, absorbs oil and stains permanently. A densifier plus sealer stops all three for a fraction of the cost of a coating — the right call for big, plain floors.",
    bullets: [
      "Lithium silicate densifier to harden the surface",
      "Penetrating sealers that do not change the look",
      "Oil and stain repellents for garages and shops",
      "Applied in a single shift over large areas",
    ],
    specs: { durability: "Commercial", cure: "4 – 12 hours", maintenance: "Re-apply 3 – 5 yrs", price: "$1.25 – $3.50 / sq ft" },
    faqs: [
      { q: "Sealer or coating?", a: "Sealer for dust control and budget. Coating when you need chemical resistance, colour or a seamless surface." },
      { q: "Will it get slippery?", a: "Penetrating sealers do not change traction. Film-forming ones can, so we add grit in wet zones." },
    ],
  },
  {
    slug: "commercial-anti-slip-floor-coating",
    name: "Anti-Slip Floor Coating",
    category: "Repair & Care",
    image: "epoxy",
    title: "Commercial Anti-Slip Floor Coating in Vancouver, BC",
    description:
      "Slip-resistant floor coatings for Vancouver ramps, kitchens and entries. Aggregate broadcast systems tested for wet dynamic coefficient of friction.",
    intro:
      "Slip claims are expensive. We grade the aggregate to the job — fine for a lobby that still needs mopping, coarse for a loading ramp in December rain.",
    bullets: [
      "Aggregate graded to traffic type and cleaning method",
      "Wet DCOF targets documented for your records",
      "Ramps, stair nosings, entries and wash bays",
      "Applied in zones without closing the building",
    ],
    specs: { durability: "Heavy commercial", cure: "12 – 24 hours", maintenance: "Deck brush", price: "$5.00 – $10.00 / sq ft" },
    faqs: [
      { q: "Will it be hard to clean?", a: "Coarse grit is. We usually use a finer broadcast indoors so mops still work." },
      { q: "Can you treat just the ramp?", a: "Yes — targeted zones are a common and cheap fix." },
    ],
  },
  {
    slug: "commercial-floor-refinishing",
    name: "Floor Refinishing",
    category: "Repair & Care",
    image: "office",
    title: "Commercial Floor Refinishing in Vancouver, BC",
    description:
      "Refinishing for worn hardwood, terrazzo and coated floors in Vancouver, BC. Screen and recoat, full sand, or re-polish without replacement.",
    intro:
      "Most tired floors do not need replacing. A screen and recoat, or a full sand and finish, gets years back for a fraction of the cost and a fraction of the disruption.",
    bullets: [
      "Screen-and-recoat overnight for light wear",
      "Full sand and finish for deep damage",
      "Dust-containment sanding systems",
      "Low-odour waterborne finishes for occupied buildings",
    ],
    specs: { durability: "Commercial", cure: "24 – 72 hours", maintenance: "Recoat 2 – 4 yrs", price: "$3.50 – $8.00 / sq ft" },
    faqs: [
      { q: "Recoat or full sand?", a: "If the wear has not gone through to bare material, a recoat is enough. We check first." },
      { q: "Can you work overnight?", a: "Yes, with waterborne finishes that are walkable by morning." },
    ],
  },
  {
    slug: "commercial-floor-restoration",
    name: "Floor Restoration",
    category: "Repair & Care",
    image: "concrete",
    title: "Commercial Floor Restoration in Vancouver, BC",
    description:
      "Restoration of damaged commercial floors in Vancouver, BC — terrazzo, polished concrete, tile and stone brought back instead of replaced.",
    intro:
      "Restoration is triage: assess what is salvageable, rebuild what is not, then bring the whole surface back to a consistent finish. Usually cheaper and faster than tear-out.",
    bullets: [
      "Condition survey with photos and a scope by area",
      "Patch, grind and re-polish in one mobilization",
      "Heritage terrazzo and stone matching",
      "Works around occupancy in phases",
    ],
    specs: { durability: "Matches original", cure: "24 – 72 hours", maintenance: "Program dependent", price: "Quoted per area" },
    faqs: [
      { q: "Is restoration cheaper than replacement?", a: "Usually about half, and far less downtime because there is no demolition or disposal." },
      { q: "Can water-damaged floors be saved?", a: "Often, once the substrate is dry. We moisture test before committing." },
    ],
  },
  {
    slug: "commercial-concrete-resurfacing",
    name: "Concrete Resurfacing",
    category: "Repair & Care",
    image: "concrete",
    title: "Commercial Concrete Resurfacing in Vancouver, BC",
    description:
      "Concrete resurfacing and overlays in Vancouver, BC. Rebuild worn, pitted or spalled slabs to a flat, coatable surface without replacement.",
    intro:
      "When a slab is too far gone to polish but sound underneath, an overlay rebuilds the wear surface. Millimetres of new material instead of weeks of demolition.",
    bullets: [
      "Polymer-modified overlays from 3 mm up",
      "Spalled and pitted surfaces made flat and coatable",
      "Slope correction toward drains",
      "Ready for coating or polishing the next day",
    ],
    specs: { durability: "Heavy industrial", cure: "12 – 24 hours", maintenance: "Sealed or coated", price: "$4.00 – $9.00 / sq ft" },
    faqs: [
      { q: "How thin can an overlay go?", a: "About 3 mm feathered, thicker where we are correcting falls." },
      { q: "Will it bond to an old slab?", a: "With shot-blast prep and a scratch coat, yes. Without prep, no overlay holds." },
    ],
  },
  {
    slug: "commercial-floor-maintenance",
    name: "Floor Maintenance Programs",
    category: "Repair & Care",
    image: "office",
    title: "Commercial Floor Maintenance in Vancouver, BC",
    description:
      "Scheduled floor maintenance for Vancouver facilities — polishing, burnishing, deep scrubbing and recoats on a calendar you can budget.",
    intro:
      "Floors fail on a schedule you can predict. A maintenance contract catches wear before it becomes replacement, and gives your facility budget a fixed line instead of a surprise.",
    bullets: [
      "Quarterly, semi-annual or annual visits",
      "Burnishing, deep scrub and recoat cycles",
      "Condition reports after each visit",
      "Priority response for contract clients",
    ],
    specs: { durability: "Program", cure: "Overnight", maintenance: "Included", price: "Annual contract" },
    faqs: [
      { q: "What does a program cost?", a: "It depends on area and finish type. Most clients pay far less than a premature replacement." },
      { q: "Do you maintain floors you did not install?", a: "Yes, after a condition survey." },
    ],
  },
  {
    slug: "commercial-polyaspartic-floor-coating",
    name: "Polyaspartic Floor Coating",
    category: "Concrete & Epoxy",
    image: "epoxy",
    title: "Polyaspartic Floor Coating in Vancouver, BC",
    description:
      "Fast-cure polyaspartic floor coatings in Vancouver, BC. Installed overnight, UV stable, back in service the next morning.",
    intro:
      "Polyaspartic is what we reach for when the floor has to be back in service tomorrow. It cures in hours, handles cold slabs, and unlike epoxy it will not yellow in daylight.",
    bullets: [
      "Walk-on in 2–4 hours, full service in 24",
      "Cures at temperatures epoxy will not",
      "UV stable — no ambering under skylights",
      "Flake and quartz broadcasts for grip and looks",
    ],
    specs: { durability: "Heavy industrial", cure: "2 – 24 hours", maintenance: "Low", price: "$7.00 – $13.00 / sq ft" },
    faqs: [
      { q: "Is it worth the extra cost?", a: "If closing for two days costs more than the price difference, yes. That is most retail and food service." },
      { q: "How long does it last?", a: "Comparable to epoxy, with better colour retention and scratch resistance at the topcoat." },
    ],
  },
  {
    slug: "commercial-polyurethane-floor-coating",
    name: "Polyurethane Floor Coating",
    category: "Concrete & Epoxy",
    image: "epoxy",
    title: "Commercial Polyurethane Floor Coating in Vancouver, BC",
    description:
      "Polyurethane topcoats and urethane cement systems in Vancouver, BC. Abrasion resistance, chemical resistance and thermal shock tolerance.",
    intro:
      "Urethane is the tough skin over an epoxy body coat — better abrasion resistance, better chemical resistance, more flexibility. In food plants, urethane cement handles steam cleaning that would blow epoxy off the slab.",
    bullets: [
      "High-abrasion topcoats over epoxy build",
      "Urethane cement for thermal shock and washdown",
      "Matte through gloss sheen options",
      "Food-plant and brewery compliant systems",
    ],
    specs: { durability: "Extreme industrial", cure: "24 – 48 hours", maintenance: "Washdown safe", price: "$8.00 – $16.00 / sq ft" },
    faqs: [
      { q: "Urethane or epoxy?", a: "Epoxy for the build, urethane for the wear surface. Most good systems use both." },
      { q: "Does it handle hot water?", a: "Urethane cement does — up to boiling washdown when installed at full thickness." },
    ],
  },
  {
    slug: "commercial-waterproof-flooring-installation",
    name: "Waterproof Flooring Installation",
    category: "Repair & Care",
    image: "vinyl",
    title: "Waterproof Flooring Installation in Vancouver, BC",
    description:
      "Waterproof flooring and membrane systems in Vancouver, BC. Washrooms, mechanical rooms, kitchens and balconies sealed to the wall.",
    intro:
      "Waterproof means the assembly, not just the surface. Membrane up the wall, sealed penetrations, coved transitions — otherwise water finds the one seam you skipped and shows up on the ceiling below.",
    bullets: [
      "Liquid-applied membranes under tile and coatings",
      "Coved and sealed wall transitions",
      "Flood testing before the finish goes on",
      "Drain and penetration detailing",
    ],
    specs: { durability: "Heavy commercial", cure: "24 – 72 hours", maintenance: "Low", price: "$8.00 – $16.00 / sq ft" },
    faqs: [
      { q: "Do you flood test?", a: "On every wet room. It is the only honest proof the membrane works." },
      { q: "Can you waterproof an existing washroom?", a: "Yes, but the finish has to come up — the membrane goes under it." },
    ],
  },
  {
    slug: "commercial-soundproof-flooring-installation",
    name: "Soundproof Flooring Installation",
    category: "Repair & Care",
    image: "office",
    title: "Acoustic & Soundproof Flooring Installation in Vancouver, BC",
    description:
      "Acoustic floor assemblies in Vancouver, BC. IIC/STC-rated underlays for multi-tenant offices, gyms and residential over commercial.",
    intro:
      "Strata bylaws and tenant complaints both come down to one number: impact sound. We build the assembly — underlay, isolation, perimeter break — to hit the rating the building requires.",
    bullets: [
      "IIC and STC rated underlay assemblies",
      "Perimeter isolation so the floor never touches the wall",
      "Strata and building-code documentation provided",
      "Works under LVT, hardwood, tile and rubber",
    ],
    specs: { durability: "Commercial", cure: "24 hours", maintenance: "Per finish", price: "$2.00 – $6.00 / sq ft add-on" },
    faqs: [
      { q: "What rating do we need?", a: "Most Vancouver stratas require IIC 55 or better. We build to your bylaw and document it." },
      { q: "Does underlay alone fix footfall noise?", a: "It helps, but the perimeter break matters just as much. Skip it and sound flanks around." },
    ],
  },
  {
    slug: "commercial-static-control-flooring-installation",
    name: "Static Control (ESD) Flooring",
    category: "Repair & Care",
    image: "epoxy",
    title: "ESD & Static Control Flooring Installation in Vancouver, BC",
    description:
      "ESD flooring for Vancouver electronics, server and healthcare facilities. Conductive vinyl, ESD epoxy, copper grounding and resistance testing.",
    intro:
      "ESD flooring only works as a grounded system. Conductive material, copper strip grid, ground connections, and a resistance test on completion with numbers you can hand to an auditor.",
    bullets: [
      "Conductive vinyl tile, sheet and ESD epoxy",
      "Copper grounding grid tied to building ground",
      "ANSI/ESD S20.20 resistance testing and report",
      "Server rooms, clean rooms and electronics assembly",
    ],
    specs: { durability: "Heavy commercial", cure: "24 – 48 hours", maintenance: "ESD-safe cleaners", price: "$9.00 – $18.00 / sq ft" },
    faqs: [
      { q: "Do we get test results?", a: "Yes — point-to-point and point-to-ground readings, documented per ANSI/ESD S20.20." },
      { q: "Can ESD flooring be maintained normally?", a: "No. Standard waxes insulate the surface and kill the performance. We supply the right products." },
    ],
  },
];

export const serviceCategories = [
  "Concrete & Epoxy",
  "Resilient & Vinyl",
  "Tile & Carpet",
  "Sector",
  "Repair & Care",
] as const;

export const getService = (slug: string) => services.find((s) => s.slug === slug);
