/**
 * scenes/Home/TestimonialsSection.jsx
 * -------------------------------------
 * Dark card testimonials from schools, event organizers, and retailers.
 * Uses TESTIMONIALS constant.
 */

import { useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "../../constants";
import SectionHeading from "../../components/SectionHeading";
import { cn } from "../../lib/helpers";

export default function TestimonialsSection() {
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
      className="bg-[#0B0F14] py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-14">
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted By Schools, Events & Retailers"
            subtitle="Don't take our word for it — hear from the people who celebrate with us."
            centered
          />
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              className={cn(
                "group relative p-6 rounded-2xl",
                "bg-[#111827] border border-white/5",
                "hover:border-[#FF7A7A]/20 hover:shadow-[0_0_28px_rgba(255,122,122,0.07)]",
                "transition-all duration-400",
                "opacity-0 translate-y-6",
                visible && "!opacity-100 !translate-y-0"
              )}
              style={{
                transitionDelay: visible ? `${i * 100}ms` : "0ms",
                transitionDuration: "600ms",
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {/* Quote mark */}
              <div
                className="text-5xl font-serif leading-none mb-4
                           bg-gradient-to-r from-[#FF7A7A] to-[#66E3E3]
                           bg-clip-text text-transparent opacity-60"
              >
                "
              </div>

              {/* Text */}
              <p className="text-[#D1D5DB] text-sm leading-relaxed mb-6">
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* Avatar initials */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center
                             bg-gradient-to-br from-[#FF7A7A]/30 to-[#66E3E3]/30
                             border border-white/10
                             text-xs font-bold text-[#F9FAFB] flex-shrink-0"
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-[#F9FAFB] font-semibold text-sm">{t.name}</p>
                  <p className="text-[#6B7280] text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}