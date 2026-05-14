/**
 * scenes/Home/CollectionsSection.jsx
 * ------------------------------------
 * Festive Collections grid — 8 category cards in a responsive grid.
 * Cards stagger in when the section scrolls into view.
 */

import { useEffect, useRef, useState } from "react";
import { COLLECTIONS } from "../../constants";
import CategoryCard from "../../components/CategoryCard";
import SectionHeading from "../../components/SectionHeading";
import { cn } from "../../lib/helpers";

export default function CollectionsSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="collections"
      ref={ref}
      className="bg-[#111827] py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-14">
          <SectionHeading
            eyebrow="Our Collections"
            title="Every Festival. Every Occasion."
            subtitle="From Christmas to Janmashtami — browse premium festive collections designed for schools, events, and bulk orders."
          />
        </div>

        {/* Collections grid */}
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
                transitionDelay: visible ? `${i * 80}ms` : "0ms",
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <CategoryCard collection={collection} />
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-12 text-center">
          <a
            href="/collections"
            className="
              inline-flex items-center gap-2
              px-8 py-3.5 rounded-full
              border border-[#66E3E3]/40 text-[#66E3E3]
              text-sm font-semibold
              hover:bg-[#66E3E3]/10
              transition-all duration-300
            "
          >
            View All Collections
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}