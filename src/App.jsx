import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import StatsCounter from './components/StatsCounter';
import ServicesSection from './components/ServicesSection';
import ElectricMobilitySection from './components/ElectricMobilitySection';
import CatalogSection from './components/CatalogSection';
import OrderTrackerSection from './components/OrderTrackerSection';
import ContactLocationSection from './components/ContactLocationSection';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f3ee] text-[#0d0d0d] font-sans antialiased overflow-x-hidden selection:bg-amber-500/20 selection:text-black">
      {/* 01 · Minimalist Header */}
      <Navbar />

      <main>
        {/* 02 · Editorial Spacious Hero */}
        <Hero />

        {/* 03 · Endless Subtle Marquee Ticker */}
        <MarqueeTicker />

        {/* 04 · Clean 4-Metric Strip */}
        <StatsCounter />

        {/* 05 · Essential Technical Services (4 Cards) */}
        <ServicesSection />

        {/* 06 · Electric Mobility Showcase (Split Banner) */}
        <ElectricMobilitySection />

        {/* 07 · Featured Products & Accessories (4 Cards) */}
        <CatalogSection />

        {/* 08 · Minimalist Real-Time OS Tracker */}
        <OrderTrackerSection />

        {/* 09 · Clean Location, Hours & Direct Contact */}
        <ContactLocationSection />
      </main>

      {/* 10 · Minimalist Footer */}
      <Footer />

      {/* Discreet WhatsApp Floating Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}
