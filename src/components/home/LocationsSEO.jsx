import React, { useState } from 'react';
import { targetLocations } from '../../data/locationsData';
import { MapPin, Clock, ChevronDown, HelpCircle, Check, ArrowRight } from 'lucide-react';

const faqs = [
  {
    q: 'Are you a direct Barcode Labels Manufacturer in India or a trader?',
    a: 'BDOUBLEU® / Barcode World is a primary manufacturer operating high-speed rotary die-cutters, precision slitting rewinders, and flexo printing presses in Rohini, New Delhi. We convert raw master rolls directly into finished barcode label rolls and sheets, offering direct factory pricing without intermediary margins.'
  },
  {
    q: 'Do your shipping labels comply with Flipkart and Amazon automated fulfillment specifications?',
    a: 'Yes. As a dedicated Flipkart / Amazon Shipping Label Manufacturer in India, our 4x6" and 4x4" direct thermal and fanfold waybill labels are certified to adhere to poly mailers, corrugated boxes, and plastic courier flyers without curling, peeling, or jamming automated sorting scanners.'
  },
  {
    q: 'What is the difference between Direct Thermal Labels and Thermal Transfer Labels?',
    a: 'Direct Thermal Labels have a heat-sensitive chemical coating and print without any ribbon, making them ideal for short-to-medium lifespan shipping and retail waybills. Thermal Transfer Labels require a Thermal Transfer Ribbon (Wax, Wax-Resin, or Resin) and provide long-lasting, scratch-resistant prints suitable for industrial inventory, outdoor asset tracking, and chemical drums.'
  },
  {
    q: 'Are your Butter Paper Rolls certified for direct food contact and hot food wrapping?',
    a: 'Yes. As a certified Food Wrapping Butter Paper Manufacturer in India, our butter paper rolls and burger wrapping sheets are manufactured from 100% virgin pulp, compliant with FSSAI and US FDA regulations. They are oven and microwave safe up to 220°C and possess high grease resistance (KIT Value 5–8).'
  },
  {
    q: 'What are your delivery timelines across Delhi, Mumbai, Bengaluru, and other hubs?',
    a: 'We offer same-day or 24-hour dispatch across Delhi NCR (Delhi, Noida, Gurgaon) and 24 to 48 hours transit to major logistics hubs including Mumbai, Pune, Bengaluru, Hyderabad, Jaipur, Indore, and Baddi via our established express logistics partners.'
  }
];

export default function LocationsSEO({ onOpenQuoteModal }) {
  const [selectedCityIdx, setSelectedCityIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const currentCity = targetLocations[selectedCityIdx];

  return (
    <section id="locations" className="py-24 bg-white border-b border-zinc-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-[#FF4D00] text-xs font-mono font-bold uppercase tracking-wider mb-3 border border-orange-500/25 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-[#FF4D00]" />
            <span>PAN-INDIA DISTRIBUTION NETWORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight">
            Strategic Supply Corridors Across India
          </h2>
          <p className="mt-3 text-zinc-600 text-sm sm:text-base leading-relaxed">
            BDOUBLEU® maintains dedicated freight lanes and buffer inventory reserves to supply manufacturing plants, distribution warehouses, and e-commerce fulfillment centers in all 10 key industrial regions.
          </p>
        </div>

        {/* City Selector Tabs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-8">
          {targetLocations.map((loc, idx) => (
            <button
              key={loc.city}
              onClick={() => setSelectedCityIdx(idx)}
              className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                selectedCityIdx === idx
                  ? 'bg-[#FF4D00] text-white border-[#FF4D00] shadow-md shadow-orange-500/25 -translate-y-0.5'
                  : 'bg-zinc-50 text-zinc-700 hover:bg-zinc-100 border-zinc-200'
              }`}
            >
              <div className="text-xs sm:text-sm font-bold truncate">
                {loc.city}
              </div>
              <div
                className={`text-[10px] truncate mt-0.5 ${
                  selectedCityIdx === idx ? 'text-orange-100' : 'text-zinc-500'
                }`}
              >
                {loc.deliveryTime}
              </div>
            </button>
          ))}
        </div>

        {/* Active City Information Panel */}
        <div className="p-8 sm:p-10 rounded-3xl bg-zinc-50 border border-zinc-200 shadow-sm mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-orange-100 text-orange-950 border border-orange-200">
                  {currentCity.hubType}
                </span>
                <span className="text-xs font-semibold text-zinc-600 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#FF4D00]" /> {currentCity.deliveryTime}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
                Barcode Labels &amp; Packaging Supply for {currentCity.city}
              </h3>

              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                {currentCity.description}
              </p>

              <div className="pt-2">
                <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-2">
                  KEY INDUSTRIAL SECTORS SERVED
                </div>
                <div className="text-xs sm:text-sm font-semibold text-zinc-800">
                  {currentCity.keySectors}
                </div>
              </div>

              <div className="pt-2">
                <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-2">
                  POPULAR BULK PRODUCTS IN {currentCity.city.toUpperCase()}
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentCity.featuredProducts.map((p, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-white border border-zinc-200 text-xs font-medium text-zinc-700 shadow-xs"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Dispatch Action Card */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200 shadow-sm flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF4D00] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-100">
                  REGIONAL ROUTE
                </span>
                <h4 className="text-lg font-bold text-zinc-900 mt-2.5">
                  Request Direct Dispatch to {currentCity.city}
                </h4>
                <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                  Bulk shipments dispatched from our central production lines with tracked freight consignments.
                </p>
              </div>

              <div className="space-y-2 text-xs text-zinc-600 py-2.5 border-y border-zinc-100">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#FF4D00] shrink-0" />
                  <span>Doorstep factory &amp; warehouse delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#FF4D00] shrink-0" />
                  <span>GST compliant invoice &amp; e-way bills included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#FF4D00] shrink-0" />
                  <span>Bulk freight discounts on recurring supply contracts</span>
                </div>
              </div>

              <button
                onClick={() => onOpenQuoteModal(`Supply to ${currentCity.city}`)}
                className="w-full py-3 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white text-xs sm:text-sm font-bold shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get Quotation for {currentCity.city}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Technical B2B SEO FAQ Section: Left Q/A, Right Image */}
        <div className="mt-16 sm:mt-20">
          <div className="max-w-2xl mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#FF4D00] mb-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
              Manufacturer Clarifications &amp; Technical Guidance
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 mt-2">
              Key operational parameters, tolerances, and procurement guidelines directly from our Rohini converting plant.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Side: Q/A Accordion */}
            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-zinc-200 overflow-hidden transition-all bg-white shadow-xs hover:border-[#FF4D00]/40"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold text-zinc-900 leading-snug">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#FF4D00]' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-4 animate-in fade-in duration-200">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Side: High-Impact Factory Visual Image Card */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="relative rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-200 shadow-xl group">
                <img
                  src="/faq-guidance.jpg"
                  alt="BDOUBLEU Manufacturing Facility & Rotary Slitting Lines"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover object-center group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/95 text-zinc-900 font-mono text-[11px] font-bold uppercase shadow-sm border border-zinc-200">
                    ROHINI PLANT FLOOR
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FF4D00] text-white font-mono text-[11px] font-bold uppercase shadow-sm">
                    ISO 9001:2015
                  </span>
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-5 left-5 right-5 text-white z-10 space-y-2">
                  <div className="text-[11px] font-mono font-bold text-[#FF4D00] uppercase tracking-wider">
                    DIRECT FACTORY CONVERTING
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                    Zero-Jamming Rotary Slitting &amp; Converting Facility
                  </h4>
                  <p className="text-xs text-zinc-300 line-clamp-2">
                    Operating computerized web guides, magnetic cylinders, and optical ANSI barcode inspection cameras for 100% scan accuracy.
                  </p>

                  <div className="pt-2 flex items-center justify-between border-t border-zinc-800 text-xs">
                    <span className="text-zinc-400">Tolerance: <strong className="text-white font-mono">±0.15mm</strong></span>
                    <button
                      onClick={() => onOpenQuoteModal('Factory Technical Guidance RFQ')}
                      className="text-[#FF4D00] font-bold hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <span>Ask an Engineer</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
