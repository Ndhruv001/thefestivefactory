/**
 * scenes/Home/GallerySection.jsx
 * --------------------------------
 * Masonry-style gallery section using CSS columns.
 * Shows schools, events, stage performances, festive setups.
 * Images fade in with stagger on scroll.
 */

import { useEffect, useRef, useState } from "react";
import SectionHeading from "../../components/SectionHeading";
import { cn } from "../../lib/helpers";

/**
 * Gallery images — replace src URLs with actual customer/event photos.
 * Heights vary to create natural masonry flow.
 */
const GALLERY_IMAGES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=80",
    alt: "Christmas event setup",
    span: "tall",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
    alt: "School annual day performance",
    span: "normal",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
    alt: "Fancy dress competition",
    span: "normal",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1615380547900-f5ced4d2ad87?w=600&q=80",
    alt: "Holi celebration event",
    span: "tall",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1509557965875-b88c97176f69?w=600&q=80",
    alt: "Halloween party costumes",
    span: "normal",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
    alt: "Festive stage performance",
    span: "normal",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1599408894213-32f9c3c9ec16?w=600&q=80",
    alt: "Janmashtami celebration",
    span: "tall",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    alt: "Mascot costume event",
    span: "normal",
  },
];

export default function GallerySection() {
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
      id="gallery"
      ref={ref}
      className="bg-[#111827] py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-14">
          <SectionHeading
            eyebrow="Gallery"
            title="Celebrations We've Powered"
            subtitle="Schools, events, stage performances, and festive setups — all dressed by TheFestiveFactory."
          />
        </div>

        {/* CSS Columns masonry grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={img.id}
              className={cn(
                "break-inside-avoid overflow-hidden rounded-2xl group relative",
                "opacity-0 scale-95 transition-all",
                visible && "!opacity-100 !scale-100"
              )}
              style={{
                transitionDuration: "600ms",
                transitionDelay: visible ? `${i * 75}ms` : "0ms",
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={cn(
                  "w-full object-cover rounded-2xl",
                  "transition-transform duration-700 group-hover:scale-105",
                  img.span === "tall" ? "h-72" : "h-48"
                )}
              />

              {/* Hover overlay with label */}
              <div
                className="
                  absolute inset-0 rounded-2xl
                  bg-gradient-to-t from-[#0B0F14]/80 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  flex items-end p-3
                "
              >
                <p className="text-white text-xs font-medium">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}