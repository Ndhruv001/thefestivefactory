/**
 * App.jsx
 * --------
 * Root application component.
 * Sets up React Router with all page routes.
 * Wraps every page with Navbar, WhatsAppButton, and Footer.
 *
 * Routes:
 *   /                → Home
 *   /collections     → Collections listing
 *   /about           → About page
 *   /contact         → Contact page
 *
 * Note: Place your logo PNG at src/assets/logo.png
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ── Layout components ──────────────────────────────────────── */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

/* ── Page scenes ────────────────────────────────────────────── */
import Home from "./scenes/Home";
import Collections from "./scenes/Collections";
import About from "./scenes/About";
import Contact from "./scenes/Contact";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      {/* Global sticky navbar */}
      <ScrollToTop />
      <div className="min-h-dvh overflow-x-hidden">
      <Navbar />

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Collection sub-pages — reuse Collections for now, extend later */}
        <Route path="/collections/:slug" element={<Collections />} />
      </Routes>

      {/* Global footer */}
      <Footer />

      {/* Sticky WhatsApp floating button — always visible */}
      <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
