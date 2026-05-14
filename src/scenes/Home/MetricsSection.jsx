/**
 * scenes/Home/MetricsSection.jsx
 * --------------------------------
 * 4-column trust metrics section.
 * Cards animate in with a staggered CSS delay on first view
 * using IntersectionObserver + a data-visible attribute toggle.
 */

import { useEffect, useRef, useState } from "react";
import { TRUST_METRICS } from "../../constants";
import { cn } from "../../lib/helpers";

export default function MetricsSection() {
  /* Use IntersectionObserver so animation fires once when scrolled into view */
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-[#0B0F14] py-20"
    >
      {/* Subtle top separator glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#66E3E3]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {TRUST_METRICS.map((metric, i) => (
            <MetricCard
              key={metric.id}
              metric={metric}
              visible={visible}
              delay={i * 120}   /* stagger: 0ms, 120ms, 240ms, 360ms */
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Individual metric card ───────────────────────────────────── */
function MetricCard({ metric, visible, delay }) {
  return (
    <div
      className={cn(
        "group relative p-6 md:p-8 rounded-2xl text-center",
        "bg-[#111827] border border-white/5",
        "hover:border-[#66E3E3]/30 hover:shadow-[0_0_32px_rgba(102,227,227,0.08)]",
        "transition-all duration-500",
        /* slide-in animation */
        "opacity-0 translate-y-6",
        visible && "!opacity-100 !translate-y-0"
      )}
      style={{
        transitionDelay: visible ? `${delay}ms` : "0ms",
        transitionProperty: "opacity, transform, border-color, box-shadow",
        transitionDuration: "600ms",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {/* Icon */}
      <div className="text-3xl mb-3">{metric.icon}</div>

      {/* Value — gradient on hover */}
      <p
        className="text-3xl md:text-4xl font-bold mb-1.5
                   bg-gradient-to-r from-[#FF7A7A] to-[#66E3E3]
                   bg-clip-text text-transparent"
      >
        {metric.value}
      </p>

      {/* Label */}
      <p className="text-sm text-[#9CA3AF] leading-snug">{metric.label}</p>

      {/* Hover corner accent */}
      <div
        className="absolute top-0 right-0 w-12 h-12 rounded-bl-2xl rounded-tr-2xl
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500
                   bg-gradient-to-bl from-[#66E3E3]/10 to-transparent"
      />
    </div>
  );
}