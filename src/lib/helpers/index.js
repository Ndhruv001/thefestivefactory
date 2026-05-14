/**
 * lib/helpers/index.js
 * --------------------
 * Shared utility/helper functions used across the application.
 */

import { SITE_CONFIG } from "../config/site";

/**
 * Builds a WhatsApp deep-link URL.
 * @param {string} [message] - Optional custom message. Falls back to default.
 * @returns {string} WhatsApp URL
 */
export function buildWhatsAppLink(message) {
  const text = encodeURIComponent(
    message || SITE_CONFIG.whatsapp.defaultMessage
  );
  return `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${text}`;
}

/**
 * Joins class names conditionally (lightweight clsx alternative).
 * @param {...(string|undefined|null|false)} classes
 * @returns {string}
 *
 * Usage: cn("base-class", isActive && "active-class")
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Truncates a string to the given max length and appends ellipsis.
 * @param {string} str
 * @param {number} maxLen
 * @returns {string}
 */
export function truncate(str, maxLen = 80) {
  if (!str || str.length <= maxLen) return str;
  return str.slice(0, maxLen).trimEnd() + "…";
}

/**
 * Smoothly scrolls to a section by its element ID.
 * @param {string} id - The HTML element id (without #)
 */
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}