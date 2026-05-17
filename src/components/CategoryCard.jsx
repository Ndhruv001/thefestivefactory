/**
 * components/CategoryCard.jsx
 * ----------------------------
 * Card used in the "Festive Collections" grid.
 * On hover: image zooms, gradient overlay intensifies, glow border appears.
 *
 * Props:
 *  - collection {object} — from COLLECTIONS constant
 *    { id, title, description, image, tag, href }
 */

import { Link } from "react-router-dom";

export default function CategoryCard({ collection }) {
  const { title, description, image, tag, href } = collection;

  return (
    <Link
      to={href}
      className="
        group relative overflow-hidden rounded-2xl
        border border-white/10 hover:border-[#66E3E3]/40
        shadow-lg hover:shadow-[0_0_32px_rgba(102,227,227,0.15)]
        transition-all duration-500
        cursor-pointer block
      "
    >
      {/* ── Background image with zoom on hover ─── */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />

        {/* Dark gradient overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t from-[#0B0F14] via-[#0B0F14]/60 to-transparent
            group-hover:via-[#0B0F14]/70
            transition-all duration-500
          "
        />

        {/* Tag badge */}
        {tag && (
          <span
            className="
              absolute top-3 left-3
              px-2.5 py-1 rounded-full
              text-[10px] font-semibold tracking-wider uppercase
              bg-gradient-to-r from-[#FF7A7A]/90 to-[#66E3E3]/90
              text-white backdrop-blur-sm
            "
          >
            {tag}
          </span>
        )}
      </div>

      {/* ── Content ────────────────────────────────── */}
      <div className="p-5 bg-[#111827] group-hover:bg-[#111827]/90 transition-colors">
        <h3 className="text-lg font-bold text-[#F9FAFB] mb-1.5 group-hover:text-[#66E3E3] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-[#9CA3AF] leading-relaxed">{description}</p>

        {/* Arrow indicator */}
        <div className="mt-3 flex items-center gap-1 text-[#66E3E3] text-xs font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          Explore Collection
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
