/**
 * scenes/Collections/index.jsx
 * ------------------------------
 * Dedicated /collections page.
 * - Hero banner
 * - Full 8-category grid (reuses CategoryCard)
 * - Inline CTA at the bottom
 */

import { useEffect, useRef, useState } from "react";
import { COLLECTIONS } from "../../constants";
import CategoryCard from "../../components/CategoryCard";
import SectionHeading from "../../components/SectionHeading";
import { buildWhatsAppLink, cn } from "../../lib/helpers";

export default function Collections() {
  return (
    <main className="bg-[#0B0F14] min-h-screen">
      <CollectionsHero />
      <CollectionsGrid />
      <CollectionsCTA />
    </main>
  );
}

/* ── Hero banner ──────────────────────────────────────────────── */
function CollectionsHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient wash */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 40%, #FF7A7A 0%, transparent 55%), radial-gradient(circle at 70% 60%, #66E3E3 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#66E3E3] mb-4">
          All Collections
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F9FAFB] leading-tight mb-5">
          Festive Collections
          <br />
          <span className="bg-gradient-to-r from-[#FF7A7A] to-[#66E3E3] bg-clip-text text-transparent">
            For Every Occasion
          </span>
        </h1>
        <p className="text-[#9CA3AF] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Browse our complete range of premium festive costumes. From Christmas
          to Janmashtami — crafted for schools, events, and bulk orders.
        </p>
      </div>
    </section>
  );
}

/* ── Collections grid ─────────────────────────────────────────── */
function CollectionsGrid() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COLLECTIONS.map((collection, i) => (
            <div
              key={collection.id}
              className={cn(
                "opacity-0 translate-y-8 transition-all",
                visible && "!opacity-100 !translate-y-0"
              )}
              style={{
                transitionDuration: "600ms",
                transitionDelay: visible ? `${i * 70}ms` : "0ms",
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <CategoryCard collection={collection} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Bottom CTA ───────────────────────────────────────────────── */
function CollectionsCTA() {
  return (
    <section className="border-t border-white/5 py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <SectionHeading
          eyebrow="Can't Find It?"
          title="We Make Custom Too"
          subtitle="Don't see the costume you need? We manufacture custom festive wear from scratch."
          centered
        />
        <a
          href={buildWhatsAppLink(
            "Hi! I need a custom costume that I couldn't find in your catalog. Can we discuss?"
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-8 inline-flex items-center gap-2.5
            px-8 py-4 rounded-full
            bg-gradient-to-r from-[#FF7A7A] to-[#66E3E3]
            text-white font-semibold text-sm
            shadow-[0_4px_28px_rgba(255,122,122,0.3)]
            hover:opacity-90 hover:scale-105
            transition-all duration-300
          "
        >
          Request Custom Costume
        </a>
      </div>
    </section>
  );
}