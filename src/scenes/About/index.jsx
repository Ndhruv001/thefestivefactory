/**
 * scenes/About/index.jsx
 * -----------------------
 * About page — brand story, vision, manufacturing capability, quality focus.
 * NOT a boring corporate page — tells a story with visuals.
 */

import { buildWhatsAppLink } from "../../lib/helpers";
import SectionHeading from "../../components/SectionHeading";

export default function About() {
  return (
    <main className="bg-[#0B0F14] min-h-screen">
      <AboutHero />
      <BrandStory />
      <ManufacturingSection />
      <ValuesSection />
      <FutureVision />
    </main>
  );
}

/* ── Hero ────────────────────────────────────────────────────── */
function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 60%, #66E3E3 0%, transparent 60%)",
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#66E3E3] mb-4">
          Our Story
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F9FAFB] leading-tight mb-6">
          We Don't Just Sell Costumes.
          <br />
          <span className="bg-gradient-to-r from-[#FF7A7A] to-[#66E3E3] bg-clip-text text-transparent">
            We Craft Celebrations.
          </span>
        </h1>
        <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto leading-relaxed">
          TheFestiveFactory was born from a simple belief — that every celebration
          deserves a costume worthy of the memory.
        </p>
      </div>
    </section>
  );
}

/* ── Brand story ─────────────────────────────────────────────── */
function BrandStory() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden h-80 lg:h-[460px] order-2 lg:order-1">
            <img
              src="/about/about.webp"
              alt="TheFestiveFactory manufacturing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0F14]/60 to-transparent" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Who We Are"
              title="Built For India's Festive Spirit"
            />
            <div className="mt-6 space-y-4 text-[#9CA3AF] text-sm leading-relaxed">
              <p>
                India celebrates like nowhere else on earth. From Janmashtami
                processions to Christmas school plays, from Navratri stages to
                Halloween parties — every occasion is a full production.
              </p>
              <p>
                TheFestiveFactory was created to serve that spirit. We are a
                manufacturer-backed costume brand that understands the urgency
                of festive seasons, the trust schools place in their costume
                suppliers, and the quality that event organizers demand.
              </p>
              <p>
                We built our operations to handle bulk without compromising on
                craft — and that's what makes us different from every reseller
                in the market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Manufacturing capability ─────────────────────────────────── */
function ManufacturingSection() {
  const MANUFACTURING_POINTS = [
    { icon: "✂️", title: "In-House Cutting & Stitching", desc: "Every costume is cut, stitched and quality-checked under our roof." },
    { icon: "🎨", title: "Custom Dyeing & Printing", desc: "We match festival-accurate colors for every occasion's aesthetic." },
    { icon: "📦", title: "Bulk Packaging & Dispatch", desc: "Efficient fulfillment for 10 to 10,000 piece orders." },
    { icon: "🔍", title: "Multi-Point QC", desc: "Every piece passes three quality checkpoints before it ships." },
  ];

  return (
    <section className="bg-[#111827] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionHeading
            eyebrow="Manufacturing"
            title="From Fabric To Festival"
            subtitle="Our in-house production capability means better quality, faster turnaround, and lower costs for you."
            centered
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {MANUFACTURING_POINTS.map((point) => (
            <div
              key={point.title}
              className="p-6 rounded-2xl bg-[#0B0F14] border border-white/5
                         hover:border-[#66E3E3]/20 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{point.icon}</div>
              <h4 className="text-[#F9FAFB] font-semibold text-sm mb-2">{point.title}</h4>
              <p className="text-[#9CA3AF] text-xs leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Values ───────────────────────────────────────────────────── */
function ValuesSection() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading
          eyebrow="Our Values"
          title="What We Stand For"
          centered
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "🎯",
              title: "Quality First",
              desc: "We use stage-grade fabrics that survive multiple washes, wearings, and event rushes.",
            },
            {
              icon: "🤝",
              title: "Partnership Mindset",
              desc: "Schools, event firms, and retailers aren't just customers — they're long-term partners.",
            },
            {
              icon: "⚡",
              title: "Festive-Season Ready",
              desc: "We plan capacity months ahead so you get delivery when it matters most.",
            },
          ].map((v) => (
            <div
              key={v.title}
              className="p-7 rounded-2xl bg-[#111827] border border-white/5
                         hover:border-[#FF7A7A]/20 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{v.icon}</div>
              <h4 className="text-[#F9FAFB] font-semibold mb-2">{v.title}</h4>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Future vision + CTA ─────────────────────────────────────── */
function FutureVision() {
  return (
    <section className="bg-[#111827] py-24 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <SectionHeading
          eyebrow="Vision"
          title="The Future Of TheFestiveFactory"
          subtitle="We're building India's most trusted festive brand — expanding collections, launching an online catalog, and partnering with event agencies nationwide."
          centered
        />
        <a
          href={buildWhatsAppLink(
            "Hi! I want to know more about TheFestiveFactory and explore a partnership."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-10 inline-flex items-center gap-2.5
            px-8 py-4 rounded-full
            bg-gradient-to-r from-[#FF7A7A] to-[#66E3E3]
            text-white font-semibold text-sm
            hover:opacity-90 hover:scale-105
            transition-all duration-300
          "
        >
          Partner With Us
        </a>
      </div>
    </section>
  );
}