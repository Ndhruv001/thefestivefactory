/**
 * scenes/Home/WhyUsSection.jsx
 * ------------------------------
 * Split layout: decorative left panel + 6 trust-point cards on right.
 * Uses WHY_US_POINTS constant.
 */

import { useEffect, useRef, useState } from "react";
import { WHY_US_POINTS } from "../../constants";
import SectionHeading from "../../components/SectionHeading";
import { cn } from "../../lib/helpers";

export default function WhyUsSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-[#111827] py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: Visual panel ────────────────────────── */}
          <div
            className={cn(
              "relative rounded-3xl overflow-hidden h-80 lg:h-[520px]",
              "opacity-0 -translate-x-8 transition-all duration-700",
              visible && "!opacity-100 !translate-x-0"
            )}
          >
            <img
              src="/home/why_choose_us/manufacturer.webp"
              alt="Premium festive costume manufacturing"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/80 via-[#0B0F14]/20 to-transparent" />

            {/* Floating stat card */}
            <div
              className="
                absolute bottom-6 left-6 right-6
                bg-[#0B0F14]/80 backdrop-blur-md
                rounded-2xl border border-white/10
                p-5 flex items-center gap-4
              "
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF7A7A] to-[#66E3E3] flex items-center justify-center text-xl flex-shrink-0">
                🏭
              </div>
              <div>
                <p className="text-[#F9FAFB] font-bold text-base">In-House Manufacturing</p>
                <p className="text-[#9CA3AF] text-sm">From raw fabric to finished costume — all under one roof.</p>
              </div>
            </div>
          </div>

          {/* ── Right: Trust points ───────────────────────── */}
          <div
            className={cn(
              "opacity-0 translate-x-8 transition-all duration-700 delay-150",
              visible && "!opacity-100 !translate-x-0"
            )}
          >
            <SectionHeading
              eyebrow="Why Choose Us"
              title="The TheFestiveFactory Difference"
              subtitle="We don't just sell costumes — we manufacture celebrations. Here's what sets us apart."
            />

            {/* Points grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_US_POINTS.map((point, i) => (
                <div
                  key={point.title}
                  className={cn(
                    "group p-5 rounded-2xl",
                    "bg-[#0B0F14] border border-white/5",
                    "hover:border-[#66E3E3]/25 hover:bg-[#0B0F14]",
                    "transition-all duration-300",
                    "opacity-0 translate-y-4",
                    visible && "!opacity-100 !translate-y-0"
                  )}
                  style={{
                    transitionDelay: visible ? `${200 + i * 80}ms` : "0ms",
                    transitionDuration: "500ms",
                  }}
                >
                  <span className="text-2xl mb-3 block">{point.icon}</span>
                  <h4 className="text-[#F9FAFB] font-semibold text-sm mb-1.5 group-hover:text-[#66E3E3] transition-colors">
                    {point.title}
                  </h4>
                  <p className="text-[#9CA3AF] text-xs leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}