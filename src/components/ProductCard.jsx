/**
 * components/ProductCard.jsx
 * ---------------------------
 * Card for the "Featured Products" section.
 * Shows costume image, name, tag, and a "Request Quote" WhatsApp CTA.
 * NOT ecommerce — triggers a WhatsApp inquiry.
 *
 * Props:
 *  - product {object} — from FEATURED_PRODUCTS constant
 *    { id, name, tag, image }
 */

import { buildWhatsAppLink } from "../lib/helpers";

export default function ProductCard({ product }) {
  const { name, tag, image } = product;

  /* Build a product-specific WhatsApp message */
  const inquiryMessage = `Hi! I'm interested in the "${name}" from TheFestiveFactory. Can you share pricing and availability?`;

  return (
    <div
      className="
        group relative bg-[#111827]
        rounded-2xl overflow-hidden
        border border-white/5 hover:border-[#FF7A7A]/30
        shadow-lg hover:shadow-[0_0_28px_rgba(255,122,122,0.12)]
        transition-all duration-500
      "
    >
      {/* ── Product image ─────────────────────────── */}
      <div className="relative overflow-hidden h-72">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#111827] to-transparent" />
      </div>

      {/* ── Details ───────────────────────────────── */}
      <div className="p-5">
        {/* Tag */}
        <p className="text-[10px] font-semibold tracking-widest uppercase text-[#66E3E3] mb-1.5">
          {tag}
        </p>

        {/* Name */}
        <h3 className="text-base font-bold text-[#F9FAFB] mb-4 leading-snug">
          {name}
        </h3>

        {/* CTA */}
        <a
          href={buildWhatsAppLink(inquiryMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center justify-center gap-2
            w-full py-2.5 rounded-xl
            border border-[#FF7A7A]/40 text-[#FF7A7A]
            text-sm font-semibold
            hover:bg-[#FF7A7A]/10
            transition-all duration-200
          "
        >
          Request Quote
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 2h7l3.5 3.5v13a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 017 18.5v-13L8.5 2z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 9h4M10 12h4M10 15h2" />
          </svg>
        </a>
      </div>
    </div>
  );
}