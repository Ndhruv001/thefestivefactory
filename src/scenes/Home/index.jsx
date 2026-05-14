/**
 * scenes/Home/index.jsx
 * ----------------------
 * Home page — composes all sections in order.
 * Each section is its own module for easy reordering or removal.
 */

import HeroSection          from "./HeroSection";
import MetricsSection       from "./MetricsSection";
import CollectionsSection   from "./CollectionsSection";
import FeaturedProductsSection from "./FeaturedProductsSection";
import WhyUsSection         from "./WhyUsSection";
import HowItWorksSection    from "./HowItWorksSection";
import GallerySection       from "./GallerySection";
import TestimonialsSection  from "./TestimonialsSection";
import BulkOrderCTA         from "./BulkOrderCTA";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MetricsSection />
      <CollectionsSection />
      <FeaturedProductsSection />
      <WhyUsSection />
      <HowItWorksSection />
      <GallerySection />
      <TestimonialsSection />
      <BulkOrderCTA />
    </main>
  );
}