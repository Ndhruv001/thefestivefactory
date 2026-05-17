/**
 * constants/index.js
 * ------------------
 * All static data constants for TheFestiveFactory.
 * Keep data here, UI stays in components/scenes.
 */

// ── Navigation Links ─────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Bulk Orders", href: "/#bulk-orders" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/contact" },
];

// ── Trust Metrics (Hero badges + Metrics section) ─────────────────────────────
export const TRUST_METRICS = [
  {
    id: "orders",
    value: "5000+",
    label: "Orders Delivered",
    icon: "📦",
  },
  {
    id: "schools",
    value: "100+",
    label: "Schools & Events Served",
    icon: "🏫",
  },
  {
    id: "delivery",
    value: "Pan India",
    label: "Delivery Network",
    icon: "🚚",
  },
  {
    id: "manufacturing",
    value: "In-House",
    label: "Manufacturing",
    icon: "🏭",
  },
];

// ── Hero Badge Tags ────────────────────────────────────────────────────────────
export const HERO_BADGES = [
  "Bulk Orders Supported",
  "Pan India Delivery",
  "Custom Manufacturing",
  "Wholesale Available",
];

// ── Festive Collections ───────────────────────────────────────────────────────
export const COLLECTIONS = [
  {
    id: "christmas",
    title: "Christmas Collection",
    description: "Santa suits, elf costumes, reindeer outfits and more.",
    image: "/home/collections/christmas.webp",
    tag: "Most Popular",
    href: "/collections/christmas",
  },
  {
    id: "janmashtami",
    title: "Janmashtami Collection",
    description: "Krishna & Radha outfits, flutes, peacock crowns and sets.",
    image: "/home/collections/janmashtami.webp",
    tag: "Festive Special",
    href: "/collections/janmashtami",
  },
  {
    id: "halloween",
    title: "Halloween Collection",
    description: "Vampires, witches, skeletons and spooky party costumes.",
    image: "/home/collections/halloween.webp",
    tag: "Trending",
    href: "/collections/halloween",
  },
  {
    id: "school-fancy",
    title: "School Fancy Dress",
    description: "Freedom fighters, scientists, global leaders & storybook characters.",
    image: "/home/collections/school-fancy.webp",
    tag: "School Favourite",
    href: "/collections/school-fancy-dress",
  },
  {
    id: "holi",
    title: "Holi Collection",
    description: "Vibrant traditional wear for Holi celebrations and events.",
    image: "/home/collections/holi.webp",
    tag: "Seasonal",
    href: "/collections/holi",
  },
  {
    id: "mascot",
    title: "Mascot Costumes",
    description: "Custom mascots for brands, schools, events, and sports teams.",
    image: "/home/collections/mascot.webp",
    tag: "Custom Made",
    href: "/collections/mascot",
  },
  {
    id: "religious",
    title: "Religious Costumes",
    description: "Devotional costumes for Ram Navami, Diwali, Navratri and more.",
    image: "/home/collections/religious.webp",
    tag: "Cultural",
    href: "/collections/religious",
  },
  {
    id: "festival-event",
    title: "Festival Event Wear",
    description: "Stage-ready festive wear for large corporate and social events.",
    image: "/home/collections/festival-event.webp",
    tag: "Bulk Ready",
    href: "/collections/festival-event",
  },
];

// ── Featured Products ─────────────────────────────────────────────────────────
export const FEATURED_PRODUCTS = [
  {
    id: "santa-premium",
    name: "Santa Claus Premium Suit",
    tag: "Christmas • Adult",
    image: "/home/featured_products/santa.webp",
  },
  {
    id: "krishna-set",
    name: "Krishna Janmashtami Set",
    tag: "Janmashtami • Kids & Adult",
    image: "/home/featured_products/krishna.webp",
  },
  {
    id: "halloween-vampire",
    name: "Halloween Vampire Costume",
    tag: "Halloween • All Sizes",
    image: "/home/featured_products/holi.webp",
  },
  {
    id: "freedom-fighter",
    name: "School Freedom Fighter Outfit",
    tag: "Fancy Dress • Kids",
    image: "/home/featured_products/mascot.webp",
  },
];

// ── Why Choose Us Points ──────────────────────────────────────────────────────
export const WHY_US_POINTS = [
  {
    icon: "🏭",
    title: "Manufacturer-Backed Production",
    desc: "Direct from our factory — no middlemen, better pricing.",
  },
  {
    icon: "📦",
    title: "Bulk Order Capability",
    desc: "We handle orders from 10 to 10,000 pieces efficiently.",
  },
  {
    icon: "✂️",
    title: "Custom Costume Development",
    desc: "From sketch to stage — fully custom costumes for your brand.",
  },
  {
    icon: "🧵",
    title: "Premium Fabrics & Stitching",
    desc: "Stage-quality materials that last multiple uses.",
  },
  {
    icon: "⚡",
    title: "Fast Festive-Season Handling",
    desc: "We're built for the rush — peak-season ready logistics.",
  },
  {
    icon: "🤝",
    title: "Wholesale & Event Friendly",
    desc: "Special pricing for schools, NGOs, and event companies.",
  },
];

// ── How Ordering Works ────────────────────────────────────────────────────────
export const ORDER_STEPS = [
  {
    step: "01",
    title: "Browse Collection",
    desc: "Explore our festive catalog and shortlist your costumes.",
  },
  {
    step: "02",
    title: "Share Requirement",
    desc: "Send us your list, quantity, and occasion via WhatsApp.",
  },
  {
    step: "03",
    title: "Receive Quote",
    desc: "Get a custom quote or our full digital catalog instantly.",
  },
  {
    step: "04",
    title: "Confirm Order",
    desc: "Finalise quantity, sizes, and advance payment to begin.",
  },
  {
    step: "05",
    title: "Delivery & Support",
    desc: "Pan India dispatch with post-delivery customer support.",
  },
];

// ── Testimonials ──────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Event Coordinator, Mumbai",
    text: "TheFestiveFactory delivered 200 Santa suits in 5 days. Absolutely impeccable quality — our corporate Christmas party was a hit!",
    avatar: "PS",
  },
  {
    id: 2,
    name: "Rajan Mehta",
    role: "Teacher, Delhi Public School",
    text: "We've ordered fancy dress costumes from them for 3 years. Reliable, premium, and always on time for Annual Day.",
    avatar: "RM",
  },
  {
    id: 3,
    name: "Anita Desai",
    role: "Retailer, Pune",
    text: "Best wholesale costume supplier in India. The margins are great and the quality keeps my customers coming back.",
    avatar: "AD",
  },
  {
    id: 4,
    name: "Vikram Nair",
    role: "Festive Event Organizer",
    text: "Custom mascot costumes delivered exactly as per our brief. The team was responsive throughout. Highly recommend!",
    avatar: "VN",
  },
];