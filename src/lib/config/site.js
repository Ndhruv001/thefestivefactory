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
    number: "919999999999", // Replace with real number (country code + number)
    defaultMessage:
      "Hi! I'm interested in bulk costume orders from TheFestiveFactory. Can you share your catalog?",
  },

  email: "hello@thefestivefactory.in",
  phone: "+91 99999 99999",

  // ── Social Links ─────────────────────────────────────────
  social: {
    instagram: "https://instagram.com/thefestivefactory",
    facebook: "https://facebook.com/thefestivefactory",
    youtube: "https://youtube.com/@thefestivefactory",
  },

  // ── Business Info ─────────────────────────────────────────
  address: "Mumbai, Maharashtra, India",
  businessHours: "Mon - Sat: 10:00 AM - 7:00 PM",

  // ── SEO ───────────────────────────────────────────────────
  seo: {
    title: "TheFestiveFactory — Premium Festive Costume Manufacturer India",
    keywords:
      "Santa costume manufacturer India, Janmashtami dress supplier, school fancy dress wholesale, mascot costume manufacturer",
  },
};