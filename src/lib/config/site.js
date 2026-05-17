/**
 * lib/config/site.js
 * ------------------
 * Central configuration for TheFestiveFactory website.
 * Update this file to change WhatsApp number, social links, metadata.
 */

export const SITE_CONFIG = {
  name: "TheFestiveFactory",
  tagline: "Celebrate Every Occasion",
  description:
    "Manufacturer-backed festive costumes and themed collections for schools, event organizers, retailers, and celebrations across India.",

  // ── Contact ──────────────────────────────────────────────
  whatsapp: {
    number: "918882362297", // Replace with real number (country code + number)
    defaultMessage:
      "Hi! I'm interested in bulk costume orders from TheFestiveFactory. Can you share your catalog?",
  },

  email: "info.thefestivefactory@gmail.com",
  phone: "+91 88823 62297",

  // ── Social Links ─────────────────────────────────────────
  social: {
    instagram: "",
    facebook: "",
    youtube: "",
  },

  // ── Business Info ─────────────────────────────────────────
  address: "Paharganj, New Delhi, India",
  businessHours: "Mon - Sat: 10:00 AM - 8:00 PM",

  // ── SEO ───────────────────────────────────────────────────
  seo: {
    title: "TheFestiveFactory — Premium Festive Costume Manufacturer India",
    keywords:
      "Santa costume manufacturer India, Janmashtami dress supplier, school fancy dress wholesale, mascot costume manufacturer",
  },
};
