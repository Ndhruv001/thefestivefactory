/**
 * scenes/Home/HeroSection.jsx
 * ----------------------------
 * Full-screen cinematic hero section.
 * - Dark overlay on a festive background image
 * - Headline, subheadline, CTA buttons
 * - Trust badge pills at the bottom
 * - CSS keyframe animations (no framer-motion)
 */

import { buildWhatsAppLink, scrollToSection } from "../../lib/helpers";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Background Image ─────────────────────────────────── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1800&q=80')",
        }}
      />

      {/* ── Layered dark overlays for depth ──────────────────── */}
      <div className="absolute inset-0 bg-[#0B0F14]/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14]/40 via-transparent to-[#0B0F14]" />

      {/* ── Ambient gradient orbs (decorative) ───────────────── */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #FF7A7A, transparent)" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #66E3E3, transparent)" }}
      />

      {/* ── Main Content ─────────────────────────────────────── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F9FAFB] leading-tight mb-6"
          style={{ animation: "fadeSlideUp 0.7s ease 0.15s both" }}
        >
          Crafting Celebrations{" "}
          <span
            className="bg-gradient-to-r from-[#FF7A7A] to-[#66E3E3] bg-clip-text text-transparent"
          >
            That People Remember
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-base sm:text-lg md:text-xl text-[#9CA3AF] max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeSlideUp 0.7s ease 0.28s both" }}
        >
          Manufacturer-backed festive costumes and themed collections for
          schools, event organizers, retailers, and celebrations across India.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{ animation: "fadeSlideUp 0.7s ease 0.4s both" }}
        >
          {/* Primary */}
          <button
            onClick={() => scrollToSection("collections")}
            className="
              inline-flex items-center gap-2.5
              px-8 py-4 rounded-full
              bg-gradient-to-r from-[#FF7A7A] to-[#66E3E3]
              text-white font-semibold text-sm md:text-base
              shadow-[0_4px_32px_rgba(255,122,122,0.35)]
              hover:shadow-[0_6px_40px_rgba(255,122,122,0.5)]
              hover:scale-105
              transition-all duration-300
            "
          >
            Explore Collections
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Secondary */}
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2.5
              px-8 py-4 rounded-full
              border border-white/20 bg-white/5 backdrop-blur-sm
              text-[#F9FAFB] font-semibold text-sm md:text-base
              hover:bg-white/10 hover:border-white/30
              transition-all duration-300
            "
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Inquiry
          </a>
        </div>

        
      </div>

      {/* ── Keyframe styles ───────────────────────────────────── */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}