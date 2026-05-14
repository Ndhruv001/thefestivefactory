/**
 * scenes/Home/BulkOrderCTA.jsx
 * ------------------------------
 * Full-width cinematic CTA section for bulk orders.
 * Dark background with gradient accents, two action buttons.
 */

import { buildWhatsAppLink } from "../../lib/helpers";

export default function BulkOrderCTA() {
  return (
    <section
      id="bulk-orders"
      className="relative py-28 overflow-hidden bg-[#111827]"
    >
      {/* ── Background decorative elements ─────────────────── */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #FF7A7A 0%, transparent 50%), radial-gradient(circle at 80% 50%, #66E3E3 0%, transparent 50%)",
        }}
      />
      {/* Top + bottom borders */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF7A7A]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#66E3E3]/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#FF7A7A] mb-4">
          Bulk & Wholesale Orders
        </p>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F9FAFB] leading-tight mb-5">
          Planning A Festive Event{" "}
          <br className="hidden md:block" />
          Or Bulk Costume Order?
        </h2>

        {/* Subtext */}
        <p className="text-[#9CA3AF] text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Let us help you create memorable celebrations with premium festive
          collections. Minimum 10 pieces. Pan India delivery. Custom options
          available.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary — WhatsApp */}
          <a
            href={buildWhatsAppLink(
              "Hi! I want to place a bulk costume order for a festive event. Can you help?"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2.5
              px-8 py-4 rounded-full
              bg-[#25D366] text-white font-semibold text-sm md:text-base
              shadow-[0_4px_28px_rgba(37,211,102,0.35)]
              hover:shadow-[0_6px_36px_rgba(37,211,102,0.55)]
              hover:scale-105
              transition-all duration-300
            "
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Now
          </a>

          {/* Secondary — Request Catalog */}
          <a
            href={buildWhatsAppLink(
              "Hi! Can you share TheFestiveFactory's full product catalog?"
            )}
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
            📋 Request Catalog
          </a>
        </div>
      </div>
    </section>
  );
}