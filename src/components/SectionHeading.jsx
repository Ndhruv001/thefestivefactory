/**
 * components/SectionHeading.jsx
 * ------------------------------
 * Reusable section title + subtitle block used across all sections.
 *
 * Props:
 *  - eyebrow  {string}  small label above the heading (e.g. "Our Collections")
 *  - title    {string}  main bold heading
 *  - subtitle {string}  optional muted paragraph below title
 *  - centered {boolean} whether to center-align (default: false)
 *  - light    {boolean} use light text colors for dark backgrounds (default: true)
 */

import { cn } from "../lib/helpers";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = true,
}) {
  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center")}>
      {/* ── Eyebrow label ───────────────────────────── */}
      {eyebrow && (
        <p
          className="
            inline-block mb-3
            text-xs font-semibold tracking-[0.2em] uppercase
            bg-gradient-to-r from-[#FF7A7A] to-[#66E3E3]
            bg-clip-text text-transparent
          "
        >
          {eyebrow}
        </p>
      )}

      {/* ── Main heading ────────────────────────────── */}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4",
          light ? "text-[#F9FAFB]" : "text-[#0B0F14]"
        )}
      >
        {title}
      </h2>

      {/* ── Subtitle ────────────────────────────────── */}
      {subtitle && (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed",
            light ? "text-[#9CA3AF]" : "text-[#374151]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}