/**
 * scenes/Contact/index.jsx
 * -------------------------
 * Contact page — split layout.
 * Left: inquiry form (non-functional UI; submits via WhatsApp link).
 * Right: contact details, WhatsApp, business hours, map placeholder.
 */

import { useState } from "react";
import { SITE_CONFIG } from "../../lib/config/site";
import { buildWhatsAppLink } from "../../lib/helpers";
import SectionHeading from "../../components/SectionHeading";

export default function Contact() {
  return (
    <main className="bg-[#0B0F14] min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page header */}
        <div className="mb-16 text-center">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's Plan Your Next Celebration"
            subtitle="Send us your requirements and we'll get back on WhatsApp within a few hours."
            centered
          />
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <InquiryForm />
          <ContactInfo />
        </div>
      </div>
    </main>
  );
}

/* ── Inquiry Form ─────────────────────────────────────────────── */
function InquiryForm() {
  /* Form state — on submit we build a WhatsApp message from the fields */
  const [form, setForm] = useState({
    name: "",
    phone: "",
    occasion: "",
    quantity: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /**
   * Build a pre-filled WhatsApp message from form values
   * and open it in a new tab instead of a traditional form POST.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const msg =
      `Hi TheFestiveFactory! Here are my details:\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Occasion: ${form.occasion}\n` +
      `Quantity needed: ${form.quantity}\n` +
      `Message: ${form.message}`;
    window.open(buildWhatsAppLink(msg), "_blank", "noopener,noreferrer");
  };

  /* Shared input class */
  const inputCls =
    "w-full bg-[#0B0F14] border border-white/10 rounded-xl px-4 py-3 " +
    "text-[#F9FAFB] text-sm placeholder-[#4B5563] " +
    "focus:outline-none focus:border-[#66E3E3]/50 focus:ring-1 focus:ring-[#66E3E3]/30 " +
    "transition-colors duration-200";

  return (
    <div className="bg-[#111827] border border-white/5 rounded-3xl p-7 md:p-10">
      <h3 className="text-[#F9FAFB] font-bold text-lg mb-6">Send An Inquiry</h3>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Name */}
        <div>
          <label className="block text-xs font-medium text-[#9CA3AF] mb-1.5">
            Your Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Priya Sharma"
            className={inputCls}
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-medium text-[#9CA3AF] mb-1.5">
            WhatsApp / Phone *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className={inputCls}
          />
        </div>

        {/* Occasion */}
        <div>
          <label className="block text-xs font-medium text-[#9CA3AF] mb-1.5">
            Occasion / Festival
          </label>
          <select
            name="occasion"
            value={form.occasion}
            onChange={handleChange}
            className={inputCls + " cursor-pointer"}
          >
            <option value="">Select occasion</option>
            <option>Christmas</option>
            <option>Janmashtami</option>
            <option>Halloween</option>
            <option>School Fancy Dress</option>
            <option>Holi</option>
            <option>Navratri / Diwali</option>
            <option>Corporate Event</option>
            <option>Custom / Other</option>
          </select>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-xs font-medium text-[#9CA3AF] mb-1.5">
            Approximate Quantity
          </label>
          <input
            type="text"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            placeholder="e.g. 50 pieces"
            className={inputCls}
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-medium text-[#9CA3AF] mb-1.5">
            Additional Requirements
          </label>
          <textarea
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Describe your costume needs, sizes, event date..."
            className={inputCls + " resize-none"}
          />
        </div>

        {/* Submit — opens WhatsApp */}
        <button
          type="submit"
          className="
            w-full py-3.5 rounded-xl
            bg-gradient-to-r from-[#FF7A7A] to-[#66E3E3]
            text-white font-semibold text-sm
            hover:opacity-90 hover:scale-[1.02]
            transition-all duration-300
            shadow-[0_4px_24px_rgba(255,122,122,0.25)]
          "
        >
          Send via WhatsApp →
        </button>

        <p className="text-center text-[#6B7280] text-xs">
          This will open WhatsApp with your inquiry pre-filled.
        </p>
      </form>
    </div>
  );
}

/* ── Contact Info panel ───────────────────────────────────────── */
function ContactInfo() {
  return (
    <div className="flex flex-col gap-5">

      {/* WhatsApp CTA card */}
      <a
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group flex items-center gap-5 p-7
          bg-[#25D366]/10 border border-[#25D366]/20
          rounded-2xl
          hover:bg-[#25D366]/15 hover:border-[#25D366]/40
          transition-all duration-300
        "
      >
        <div className="w-14 h-14 rounded-2xl bg-[#25D366] flex items-center justify-center flex-shrink-0 shadow-[0_4px_20px_rgba(37,211,102,0.4)]">
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
        <div>
          <p className="text-[#F9FAFB] font-bold text-base mb-0.5">Chat on WhatsApp</p>
          <p className="text-[#9CA3AF] text-sm">Fastest response — usually within 2 hours.</p>
          <p className="text-[#25D366] text-sm font-semibold mt-1 group-hover:underline">
            +{SITE_CONFIG.whatsapp.number} →
          </p>
        </div>
      </a>

      {/* Other contact details */}
      <div className="bg-[#111827] border border-white/5 rounded-2xl p-7 space-y-5">
        <ContactRow icon="📧" label="Email">
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="text-[#66E3E3] hover:underline text-sm"
          >
            {SITE_CONFIG.email}
          </a>
        </ContactRow>
        <ContactRow icon="📞" label="Phone">
          <span className="text-[#D1D5DB] text-sm">{SITE_CONFIG.phone}</span>
        </ContactRow>
        <ContactRow icon="📍" label="Location">
          <span className="text-[#D1D5DB] text-sm">{SITE_CONFIG.address}</span>
        </ContactRow>
        <ContactRow icon="🕐" label="Business Hours">
          <span className="text-[#D1D5DB] text-sm">{SITE_CONFIG.businessHours}</span>
        </ContactRow>
      </div>

      {/* Response time note */}
      <div className="bg-[#111827] border border-white/5 rounded-2xl p-6 text-center">
        <p className="text-[#9CA3AF] text-xs leading-relaxed">
          💡 <strong className="text-[#F9FAFB]">Pro tip:</strong> For fastest response,
          use the WhatsApp button. Include your occasion, quantity, and delivery
          date in your first message.
        </p>
      </div>
    </div>
  );
}

/* ── Internal helper: row item ─────────────────────────────────── */
function ContactRow({ icon, label, children }) {
  return (
    <div className="flex items-start gap-4">
      <span className="text-xl flex-shrink-0 mt-0.5">{icon}</span>
      <div>
        <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-0.5">
          {label}
        </p>
        {children}
      </div>
    </div>
  );
}