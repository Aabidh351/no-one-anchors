export type Service = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  scope: string[];
};

export type ProductItem = { name: string; spec: string };

export type ProductCategory = {
  slug: string;
  name: string;
  description: string;
  items: ProductItem[];
};

export type Port = {
  name: string;
  country: string;
  code: string;
  lat: number;
  lng: number;
  services: string[];
  responseTime: string;
};

export type Certification = {
  name: string;
  issuer: string;
  scope: string;
};

export type NewsPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type GalleryImage = {
  id: string;
  url: string;
  caption: string;
  category: string;
};

export const services: Service[] = [
  {
    slug: "deck-engine-stores",
    name: "Deck & Engine Stores",
    summary: "Ropes, paints, lubricants, filters, and consumables delivered to berth or anchorage.",
    description:
      "Full-range deck and engine room stores sourced from approved manufacturers, packed to your vessel's stowage plan and delivered on schedule to berth, anchorage, or via launch.",
    scope: [
      "Mooring lines & rigging hardware",
      "Marine paints & coatings",
      "Lubricants & engine consumables",
      "Filters, gaskets & general spares",
    ],
  },
  {
    slug: "provisions",
    name: "Provisions & Catering Supply",
    summary: "Fresh, frozen, and dry provisions sourced and quality-checked before loading.",
    description:
      "Full crew provisioning from local and imported suppliers, cold-chain checked from purchase to loading, with menus adapted to crew nationality and dietary requirements on request.",
    scope: [
      "Fresh produce & meat",
      "Frozen & dry goods",
      "Bonded stores (duty-free)",
      "Special dietary & religious provisioning",
    ],
  },
  {
    slug: "safety-equipment",
    name: "Safety & Life-Saving Equipment",
    summary: "LSA/FFE supply, servicing, and certification coordination.",
    description:
      "Supply and statutory servicing of life-saving and fire-fighting equipment, coordinated with class-approved service stations so certificates stay current at every port call.",
    scope: [
      "Life rafts & lifeboats servicing",
      "Fire extinguishers & suits",
      "EPIRBs, SARTs & pyrotechnics",
      "Certificate tracking & renewal reminders",
    ],
  },
  {
    slug: "technical-spares",
    name: "Technical & Spare Parts",
    summary: "OEM and equivalent spares sourced and expedited against class survey deadlines.",
    description:
      "Sourcing of OEM and class-equivalent spares for main engine, auxiliary machinery, and deck equipment, with airfreight and customs handling arranged against tight survey windows.",
    scope: [
      "OEM & equivalent parts sourcing",
      "Airfreight & customs clearance",
      "Emergency spare expediting",
      "Vendor documentation for class",
    ],
  },
  {
    slug: "bunkering",
    name: "Bunkering Coordination",
    summary: "Fuel and lubricant bunkering arranged with quality documentation on every delivery.",
    description:
      "Bunker stem coordination across our port network, with quantity surveying and bunker delivery note verification so fuel quality is on record before the vessel sails.",
    scope: [
      "Fuel oil & lubricant stems",
      "Independent quantity surveying",
      "BDN & quality documentation",
      "Off-spec dispute support",
    ],
  },
  {
    slug: "husbandry",
    name: "Husbandry & Port Agency",
    summary: "Crew changes, customs formalities, and vessel-side coordination while alongside.",
    description:
      "General husbandry covering crew changes, medical landings, customs and immigration formalities, and waste disposal coordination — one point of contact for everything alongside.",
    scope: [
      "Crew change logistics",
      "Customs & immigration formalities",
      "Medical landing coordination",
      "Waste & slop disposal",
    ],
  },
];

export const productCategories: ProductCategory[] = [
  {
    slug: "deck-stores",
    name: "Deck Stores",
    description: "Rigging, ropes, paints, and general deck consumables.",
    items: [
      { name: "Polypropylene mooring line", spec: "Ø24–64mm, various lengths" },
      { name: "Wire rope slings", spec: "Certified, various SWL" },
      { name: "Marine enamel & primer", spec: "20L drums, full colour range" },
      { name: "Chain hooks & shackles", spec: "Grade 80, certified" },
    ],
  },
  {
    slug: "engine-stores",
    name: "Engine Room Stores",
    description: "Lubricants, filters, and consumables for main and auxiliary machinery.",
    items: [
      { name: "Marine lubricating oil", spec: "Multiple viscosity grades, drums or bulk" },
      { name: "Fuel & oil filters", spec: "OEM and equivalent, most major makers" },
      { name: "Gasket & sealing material sets", spec: "Sheet & pre-cut, by engine model" },
      { name: "Cleaning chemicals", spec: "Bilge, tank & general purpose" },
    ],
  },
  {
    slug: "safety-equipment",
    name: "Safety Equipment",
    description: "LSA/FFE items with certification on request.",
    items: [
      { name: "SOLAS lifejackets", spec: "Adult & child, approved types" },
      { name: "CO2 fire extinguishers", spec: "Serviced & tagged" },
      { name: "Pyrotechnic sets", spec: "Rockets, flares, smoke signals" },
      { name: "Immersion suits", spec: "Multiple sizes, SOLAS approved" },
    ],
  },
  {
    slug: "provisions",
    name: "Provisions",
    description: "Fresh, frozen, and dry stores.",
    items: [
      { name: "Fresh produce packs", spec: "Custom to crew size & nationality" },
      { name: "Frozen meat & seafood", spec: "Cold-chain verified" },
      { name: "Dry & tinned goods", spec: "Bulk case packs" },
      { name: "Bonded stores", spec: "Duty-free, where applicable" },
    ],
  },
];

export const ports: Port[] = [
  { name: "Chattogram", country: "Bangladesh", code: "CGP", lat: 22.3569, lng: 91.7832, services: ["Provisions", "Deck & Engine Stores", "Husbandry"], responseTime: "Under 4 hrs" },
  { name: "Singapore", country: "Singapore", code: "SIN", lat: 1.2644, lng: 103.8200, services: ["Bunkering", "Technical Spares", "Safety Equipment"], responseTime: "Under 3 hrs" },
  { name: "Colombo", country: "Sri Lanka", code: "CMB", lat: 6.9497, lng: 79.8420, services: ["Provisions", "Husbandry", "Bunkering"], responseTime: "Under 6 hrs" },
  { name: "Chittagong Anchorage", country: "Bangladesh", code: "CGP-A", lat: 22.1667, lng: 91.7500, services: ["Deck & Engine Stores", "Provisions"], responseTime: "Under 5 hrs" },
  { name: "Port Klang", country: "Malaysia", code: "PKG", lat: 3.0000, lng: 101.4000, services: ["Bunkering", "Technical Spares"], responseTime: "Under 6 hrs" },
];

export const certifications: Certification[] = [
  { name: "ISO 9001:2015", issuer: "Bureau Veritas", scope: "Quality management for marine supply operations" },
  { name: "ISSA Membership", issuer: "International Ship Suppliers & Services Association", scope: "Global ship supply standards" },
  { name: "ISO 22000", issuer: "Bureau Veritas", scope: "Food safety management for provisioning" },
  { name: "Flag State Approval", issuer: "Multiple flag administrations", scope: "Approved supplier status" },
];

export const newsPosts: NewsPost[] = [
  {
    slug: "provisioning-lead-times-2026",
    title: "Provisioning lead times ahead of the coming quarter",
    date: "2026-08-14",
    excerpt: "What to expect for fresh-produce lead times across our port network this quarter.",
    body: "Full article content goes here — replace with your real content.",
  },
  {
    slug: "issa-membership-renewed",
    title: "ISSA membership renewed for another term",
    date: "2026-06-02",
    excerpt: "Our ISSA membership has been renewed, reaffirming our commitment to global supply standards.",
    body: "Full article content goes here — replace with your real content.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Stores were on the quay before we finished berthing. That kind of timing is rare and it matters when your port stay is six hours.",
    name: "M. Andersen",
    role: "Chief Officer",
    company: "Nordic Bulk Carriers",
  },
  {
    quote:
      "We've used them for husbandry across three ports now. Same standard every time, which is the whole point of a preferred supplier.",
    name: "R. Fernando",
    role: "Fleet Superintendent",
    company: "Colombo Tanker Group",
  },
];

export const galleryImages: GalleryImage[] = [
  { id: "g1", url: "https://images.unsplash.com/photo-1585713181935-d5f622cc2415?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Deck stores warehouse, Chattogram", category: "Warehouse" },
  { id: "g2", url: "https://images.unsplash.com/photo-1552207802-77bcb0d13122?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Engine room spares racking", category: "Warehouse" },
  { id: "g3", url: "https://images.unsplash.com/photo-1575528941322-c74397246f19?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Cold storage for provisions", category: "Warehouse" },
  { id: "g4", url: "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Launch delivery at anchorage", category: "Operations" },
  { id: "g5", url: "https://images.unsplash.com/photo-1670121180583-39ab653a071c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Stores craned aboard at berth", category: "Operations" },
  { id: "g6", url: "https://images.unsplash.com/photo-1678182451047-196f22a4143e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Night delivery, Singapore anchorage", category: "Operations" },
  { id: "g7", url: "https://images.unsplash.com/photo-1634638022845-1ab614a94128?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Loading manifest check before dispatch", category: "Operations" },
  { id: "g8", url: "https://images.unsplash.com/photo-1634638026221-4c1c4cf9f881?q=80&w=1207&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Supply launch fleet at dock", category: "Operations" },
  { id: "g9", url: "https://images.unsplash.com/photo-1692969094159-c2941ce80c4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Fresh provisions ready for loading", category: "Provisions" },
  { id: "g10", url: "https://images.unsplash.com/photo-1661756977826-c66970f2a2cb?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Cold-chain inspection before dispatch", category: "Provisions" },
  { id: "g11", url: "https://images.unsplash.com/photo-1674489519519-601feb49ece8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Dry stores packed for stowage", category: "Provisions" },
  { id: "g12", url: "https://images.unsplash.com/photo-1703585752869-0bffd1c7709b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Life raft servicing bay", category: "Safety Equipment" },
  { id: "g13", url: "https://images.unsplash.com/photo-1634638021403-70f46d19fc02?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Fire extinguisher tagging and testing", category: "Safety Equipment" },
  { id: "g14", url: "https://images.unsplash.com/photo-1601311852860-1d8f42381551?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Immersion suits, pre-delivery check", category: "Safety Equipment" },
  { id: "g15", url: "https://images.unsplash.com/photo-1700114339471-9e90a155d4b7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Duty desk team, Singapore office", category: "Team" },
  { id: "g16", url: "https://images.unsplash.com/photo-1592963219751-3800a144a41e?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Port agents at Colombo office", category: "Team" },
  { id: "g17", url: "https://images.unsplash.com/photo-1651649503984-5b5f3514d6f0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Warehouse crew, Chattogram", category: "Team" },
  { id: "g18", url: "https://images.unsplash.com/photo-1671190365057-b9a8f79d306f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Chattogram port, early morning berth", category: "Ports" },
  { id: "g19", url: "https://images.unsplash.com/photo-1617099588165-314858f77ece?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Singapore anchorage at dusk", category: "Ports" },
  { id: "g20", url: "https://images.unsplash.com/photo-1651648748768-ca7be3854c71?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Port Klang terminal overview", category: "Ports" },
];