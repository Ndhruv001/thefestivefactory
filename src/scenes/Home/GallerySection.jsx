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
    src: "/home/gallery/gallery_1.webp",
    alt: "Festive celebration",
    span: "tall",
  },
  {
    id: 2,
    src: "/home/gallery/gallery_2.webp",
    alt: "Mascot costume event",
    span: "normal",
  },
  {
    id: 3,
    src: "/home/gallery/gallery_3.webp",
    alt: "Fancy dress competition",
    span: "normal",
  },
  {
    id: 4,
    src: "/home/gallery/gallery_4.webp",
    alt: "Fancy dress competition",
    span: "tall",
  },
  {
    id: 5,
    src: "/home/gallery/gallery_5.webp",
    alt: "Christmas event setup",
    span: "normal",
  },
  {
    id: 6,
    src: "/home/gallery/gallery_6.webp",
    alt: "Janmashtami celebration",
    span: "normal",
  },
  {
    id: 7,
    src: "/home/gallery/gallery_7.webp",
    alt: "Festive stage performance",
    span: "tall",
  },
  {
    id: 8,
    src: "/home/gallery/gallery_8.webp",
    alt: "School annual day costumes",
    span: "normal",
  },
];

export default function GallerySection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" ref={ref} className="bg-[#111827] py-24">
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
                visible && "!opacity-100 !scale-100",
              )}
              style={{
                transitionDuration: "600ms",
                transitionDelay: visible ? `${i * 75}ms` : "0ms",
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={img.span === "tall" ? 900 : 600}
                  className={cn(
                    "w-full object-cover",
                    "transition-transform duration-700",
                    "group-hover:scale-[1.02]",
                    "will-change-transform",
                    img.span === "tall" ? "h-72" : "h-48",
                  )}
                />
              </div>

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
