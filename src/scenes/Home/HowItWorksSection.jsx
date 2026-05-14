/**
 * scenes/Home/HowItWorksSection.jsx
 * -----------------------------------
 * 5-step horizontal (desktop) / vertical (mobile) ordering flow.
 * Uses ORDER_STEPS constant. Stagger-in animation on scroll.
 */

import { useEffect, useRef, useState } from "react";
import { ORDER_STEPS } from "../../constants";
import SectionHeading from "../../components/SectionHeading";
import { cn } from "../../lib/helpers";

export default function HowItWorksSection() {
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

        {/* Heading — centered */}
        <div className="mb-16">
          <SectionHeading
            eyebrow="Simple Process"
            title="How Ordering Works"
            subtitle="No confusing checkout. Just a simple WhatsApp-first inquiry flow."
            centered
          />
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div
            className="
              hidden lg:block
              absolute top-10 left-[10%] right-[10%] h-px
              bg-gradient-to-r from-transparent via-[#66E3E3]/20 to-transparent
            "
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {ORDER_STEPS.map((step, i) => (
              <div
                key={step.step}
                className={cn(
                  "relative flex flex-col items-center text-center p-6 rounded-2xl",
                  "bg-[#111827] border border-white/5",
                  "hover:border-[#66E3E3]/25 hover:shadow-[0_0_24px_rgba(102,227,227,0.07)]",
                  "transition-all duration-400",
                  "opacity-0 translate-y-6",
                  visible && "!opacity-100 !translate-y-0"
                )}
                style={{
                  transitionDelay: visible ? `${i * 110}ms` : "0ms",
                  transitionDuration: "550ms",
                  transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                {/* Step number bubble */}
                <div
                  className="
                    w-14 h-14 rounded-full mb-5 flex items-center justify-center
                    bg-gradient-to-br from-[#FF7A7A]/20 to-[#66E3E3]/20
                    border border-[#66E3E3]/20
                    text-xl font-bold
                    bg-clip-text
                  "
                >
                  <span
                    className="text-lg font-black bg-gradient-to-r from-[#FF7A7A] to-[#66E3E3] bg-clip-text text-transparent"
                  >
                    {step.step}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-[#F9FAFB] font-semibold text-sm mb-2">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="text-[#9CA3AF] text-xs leading-relaxed">
                  {step.desc}
                </p>

                {/* Arrow between steps — desktop */}
                {i < ORDER_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-10 z-10 text-[#66E3E3]/30 text-lg">
                    ›
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}