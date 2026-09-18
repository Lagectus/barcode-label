import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft, Sparkles, Play, Pause } from 'lucide-react';

const showcaseItems = [
  {
    id: '01',
    title: 'Flipkart & Amazon Waybill Labels',
    category: 'E-Commerce Marketplace Solutions',
    badge: 'FLAGSHIP PRODUCT',
    headline: 'High-Throughput 4x6" Waybill Rolls for E-Commerce Hubs',
    description: 'Designed specifically to meet the rigorous specifications of Amazon Easy Ship, Flipkart Smart Fulfillment, and national 3PL networks. Our labels feature top-coated thermal face paper that resists friction, moisture, and fading during pan-India courier transit.',
    specs: [
      { label: 'Standard Dimensions', value: '4" x 6" (100mm x 150mm)' },
      { label: 'Adhesive Grade', value: 'Hot-Melt Aggressive Tack' },
      { label: 'Perforation Line', value: 'Micro-Perforated Easy-Tear' },
      { label: 'Core Diameter', value: '1 Inch (25mm) / 3 Inch (76mm)' }
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    stat: '100% Marketplace Compliant'
  },
  {
    id: '02',
    title: 'Thermal Transfer Ribbons',
    category: 'High-Speed Printing Consumables',
    badge: 'PRECISION INK FOIL',
    headline: 'Wax, Wax-Resin & Full Resin Engineered Foils',
    description: 'Manufactured with advanced anti-static silicone backings that extend thermal printhead life by up to 30%. From high-speed retail shipping labels to solvent-resistant automotive rating plates, our ribbons deliver dense optical black bar edges at up to 14 inches per second.',
    specs: [
      { label: 'Formulations', value: 'Wax / Premium Wax-Resin / Pure Resin' },
      { label: 'Print Speed', value: 'Up to 14 IPS (Inches Per Second)' },
      { label: 'Backcoating', value: 'Patented Static Dissipative Silicone' },
      { label: 'Printer Brands', value: 'Zebra, TSC, Honeywell, Citizen, Godex' }
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    stat: '30% Longer Printhead Life'
  },
  {
    id: '03',
    title: 'Food-Grade Butter Paper Rolls',
    category: 'Sanitary Food Packaging',
    badge: '100% VIRGIN PULP',
    headline: 'Greaseproof & Oven-Safe Bio-Cellulose Rolls',
    description: 'Produced in cleanroom conditions using 100% virgin sulphate pulp. FSSAI and US FDA compliant for direct food contact. Designed to prevent grease seepage for burgers, rotis, sandwiches, and bakery delicacies without altering taste or aroma.',
    specs: [
      { label: 'GSM Range', value: '28 GSM to 45 GSM High Tensile' },
      { label: 'Certifications', value: 'FSSAI & FDA Direct Food Contact' },
      { label: 'Heat Endurance', value: 'Microwave & Oven Safe to 220°C' },
      { label: 'Grease Barrier', value: 'KIT Value 5 to KIT Value 8' }
    ],
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80',
    stat: 'FSSAI / FDA Certified Safe'
  },
  {
    id: '04',
    title: 'Polyester & Non-Residue Jewelry Labels',
    category: 'Specialty Industrial Tagging',
    badge: 'HARSH ENVIRONMENT',
    headline: 'Extreme Endurance Synthetic Substrates & Dumbbell Tags',
    description: 'Engineered for luxury jewellery showrooms, electronics rating plates, and chemical drums. Our dumbbell tags feature glue-free center loops that touch gold or silver without leaving sticky residue, while our silver polyester labels withstand 150°C and industrial solvents.',
    specs: [
      { label: 'Substrate', value: 'Matte Silver PET / Gloss White Mylar' },
      { label: 'Temperature', value: '-40°C to +150°C Continuous' },
      { label: 'Cleaning Resistance', value: 'Ultrasonic Bath & Steam Safe' },
      { label: 'Adhesive Loop', value: 'Adhesive-Deadened Non-Sticky Stem' }
    ],
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80',
    stat: 'Zero Glue Residue on Jewelry'
  }
];

export default function CinematicShowcase({ onOpenQuoteModal }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic carousel cycling every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % showcaseItems.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, activeIdx]);

  const currentItem = showcaseItems[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % showcaseItems.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
  };

  return (
    <section className="py-24 bg-white border-b border-zinc-200 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-[#FF4D00] text-xs font-mono font-bold uppercase tracking-wider mb-3 border border-orange-500/25 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#FF4D00]" />
              <span>CINEMATIC PRODUCT SPOTLIGHT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight">
              High-Precision Manufacturing Focus
            </h2>
            <p className="mt-3 text-zinc-600 max-w-xl text-sm sm:text-base">
              Explore four of our most demanded production lines powering India's retail, logistics, and food service supply chains.
            </p>
          </div>

          {/* Interactive Step Switcher Tabs & Autoplay Indicator */}
          <div className="flex items-center gap-3">
            {/* Play/Pause indicator */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="px-3.5 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
              title={isPaused ? "Resume Auto Carousel" : "Pause Auto Carousel"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-[#FF4D00] fill-[#FF4D00]" />
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#FF4D00] fill-[#FF4D00]" />
                  <span>Auto-Playing</span>
                </>
              )}
            </button>

            {/* Slide tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-zinc-100 border border-zinc-200">
              {showcaseItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    activeIdx === idx
                      ? 'bg-[#FF4D00] text-white shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cinematic Showcase Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-zinc-50 rounded-3xl border border-zinc-200 p-6 sm:p-10 lg:p-12 shadow-sm transition-all"
        >
          
          {/* Left Column: Large Image Carousel Area */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-zinc-950 border border-zinc-800 group">
              <img
                key={currentItem.id}
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-full object-cover object-center transition-all duration-700 ease-out animate-in fade-in zoom-in-95 opacity-90"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent pointer-events-none" />

              {/* Floating Stat Badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white z-20">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF4D00] block font-bold">
                    QUALITY CERTIFIED
                  </span>
                  <span className="text-base sm:text-lg font-bold">
                    {currentItem.stat}
                  </span>
                </div>
                <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-xs font-mono font-bold border border-white/30">
                  {currentItem.id}
                </span>
              </div>

              {/* Arrow navigation overlays */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-[#FF4D00] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer backdrop-blur-xs z-30"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-[#FF4D00] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer backdrop-blur-xs z-30"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Continuous Animated Progress Track */}
            <div className="mt-4 flex items-center gap-2">
              {showcaseItems.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer overflow-hidden relative ${
                    activeIdx === idx ? 'w-16 bg-orange-100' : 'w-4 bg-zinc-200 hover:bg-zinc-300'
                  }`}
                  title={`Slide 0${idx + 1}`}
                >
                  {activeIdx === idx && (
                    <div
                      key={`progress-${activeIdx}-${isPaused}`}
                      className="h-full bg-[#FF4D00] rounded-full"
                      style={{
                        animation: isPaused ? 'none' : 'progressFill 4.5s linear forwards',
                        width: isPaused ? '100%' : undefined,
                      }}
                    />
                  )}
                </div>
              ))}
              <span className="text-[11px] font-mono text-zinc-400 ml-2 font-semibold">
                0{activeIdx + 1} / 0{showcaseItems.length}
              </span>
            </div>
          </div>

          {/* Right Column: Detailed Specification & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-[#FF4D00] text-xs font-mono font-bold uppercase tracking-wider mb-2">
                {currentItem.badge}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
                {currentItem.title}
              </h3>
              <div className="text-sm font-semibold text-[#FF4D00] mt-1">
                {currentItem.category}
              </div>
            </div>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              {currentItem.description}
            </p>

            {/* Technical Parameters Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {currentItem.specs.map((spec, sIdx) => (
                <div
                  key={sIdx}
                  className="p-3.5 rounded-2xl bg-white border border-zinc-200 shadow-xs"
                >
                  <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">
                    {spec.label}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-zinc-900 font-mono mt-0.5 block">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal(currentItem.title)}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white text-xs sm:text-sm font-bold shadow-lg shadow-orange-500/25 transition-all cursor-pointer hover:shadow-orange-500/40"
              >
                <span>Request Sample Roll</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-zinc-700 hover:text-[#FF4D00] transition-colors cursor-pointer"
              >
                <span>Next Showcase Product</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
