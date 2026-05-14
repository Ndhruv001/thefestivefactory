/**
 * scenes/Home/FeaturedProductsSection.jsx
 * -----------------------------------------
 * Showcases 4 hero costume pieces.
 * NOT ecommerce — each card triggers a WhatsApp quote request.
 */

import { useEffect, useRef, useState } from "react";
import { FEATURED_PRODUCTS } from "../../constants";
import ProductCard from "../../components/ProductCard";
import SectionHeading from "../../components/SectionHeading";
import { cn } from "../../lib/helpers";

export default function FeaturedProductsSection() {
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
            eyebrow="Featured Costumes"
            title="Costumes That Steal The Show"
            subtitle="Premium-quality festive costumes used by schools, event organizers, and retailers across India."
          />
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PRODUCTS.map((product, i) => (
            <div
              key={product.id}
              className={cn(
                "opacity-0 translate-y-8 transition-all",
                visible && "!opacity-100 !translate-y-0"
              )}
              style={{
                transitionDuration: "600ms",
                transitionDelay: visible ? `${i * 100}ms` : "0ms",
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}