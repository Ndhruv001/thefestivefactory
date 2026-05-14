/**
 * tailwind.config.js
 * -------------------
 * Tailwind CSS configuration for TheFestiveFactory.
 * Extends the default theme with brand colors and font families.
 */

/** @type {import('tailwindcss').Config} */
export default {
  /* Scan all source files for class usage */
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      /* ── Brand colors ──────────────────────────────── */
      colors: {
        brand: {
          coral:  "#FF7A7A",   // gradient start
          aqua:   "#66E3E3",   // gradient end
          bg:     "#0B0F14",   // deep charcoal background
          card:   "#111827",   // card / section background
          text:   "#F9FAFB",   // primary text
          muted:  "#9CA3AF",   // secondary / muted text
        },
      },

      /* ── Font families ─────────────────────────────── */
      fontFamily: {
        display: ["Outfit", "system-ui", "sans-serif"],
        body:    ["Inter", "system-ui", "sans-serif"],
      },

      /* ── Background gradients (shorthand) ──────────── */
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #FF7A7A 0%, #66E3E3 100%)",
        "dark-radial":
          "radial-gradient(ellipse at center, #111827 0%, #0B0F14 100%)",
      },

      /* ── Custom animation ───────────────────────────── */
      keyframes: {
        fadeSlideUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-slide-up": "fadeSlideUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },

  plugins: [],
};