import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  Briefcase, 
  ArrowRight, 
  ShieldCheck, 
  Check
} from 'lucide-react';
import { industries } from '../data/industriesData';

export default function IndustriesPage({ onOpenQuoteModal, onNavigatePage }) {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out', clearProps: 'transform' }
      );
    });

    return () => ctx.revert();
  }, []);

  const complianceStandards = [
    { title: 'ISO 9001:2015', desc: 'Standardized rotary die-cut converting & tension control' },
    { title: 'FSSAI Food Grade', desc: '100% virgin greaseproof paper for QSR & bakeries' },
    { title: 'ANSI Grade A (4.0)', desc: 'Full optical barcode scan readability verification' },
    { title: 'RoHS / REACH Compliant', desc: 'Non-toxic thermal top-coats & BPA-free adhesives' },
  ];

  return (
    <div className="pt-24 bg-zinc-50 min-h-screen text-zinc-900">
      {/* 1. Cinematic Hero Banner */}
      <section ref={headerRef} className="relative bg-zinc-950 text-white py-20 lg:py-24 border-b border-zinc-800 overflow-hidden">
        <div className="absolute inset-0 technical-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-6">
            <button 
              onClick={() => onNavigatePage('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-[#FF4D00] font-bold">Industry Solutions</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-[#FF4D00] text-xs font-mono font-bold uppercase tracking-wider mb-5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>MISSION-CRITICAL PACKAGING CONVERTING</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Engineered for India’s <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] via-orange-500 to-amber-300">
                Core Industrial Sectors.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8">
              From automated e-commerce fulfillment and hospital laboratories to extreme-heat automotive engine bays and food service QSRs, our media is calibrated for maximum resilience and first-pass scan accuracy.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal('Industry Solutions Proposal')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white font-bold text-sm shadow-xl shadow-orange-500/30 transition-all cursor-pointer hover:scale-[1.02]"
              >
                <span>Request Sector Testing Kit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigatePage('products')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-all cursor-pointer"
              >
                <span>View All Products</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Compliance Bar */}
      <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {complianceStandards.map((comp, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-lg flex items-center gap-3.5"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF4D00] flex items-center justify-center font-bold shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <strong className="block text-xs font-bold text-zinc-900">{comp.title}</strong>
                <span className="text-[11px] text-zinc-500 leading-tight block">{comp.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Deep-Dive Industry Cards */}
      <section ref={cardsRef} className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF4D00] mb-2">
            TAILORED APPLICATION ENGINEERING
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            How BDOUBLEU® Powers Every Industry
          </h2>
        </div>

        <div className="space-y-10">
          {industries.map((ind, idx) => (
            <div
              key={ind.id}
              className={`p-6 sm:p-10 rounded-3xl bg-white border border-zinc-200 shadow-sm hover:border-[#FF4D00]/50 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Half */}
              <div className={`lg:col-span-5 relative ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden bg-zinc-950 aspect-[4/3] border border-zinc-100 shadow-md">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/95 text-zinc-900 font-mono text-xs font-bold shadow-sm">
                      SECTOR 0{idx + 1}
                    </span>
                  </div>

                  {/* Bottom Stat */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="inline-block px-3 py-1 rounded-md bg-[#FF4D00] text-white font-mono text-xs font-bold">
                      {ind.stats}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Half */}
              <div className={`lg:col-span-7 space-y-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex flex-wrap gap-2">
                  {ind.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg bg-orange-50 text-orange-900 font-mono text-xs font-semibold border border-orange-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
                  {ind.title}
                </h3>

                <p className="text-sm text-zinc-600 leading-relaxed">
                  {ind.description}
                </p>

                <div className="pt-2 border-t border-zinc-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF4D00] shrink-0" />
                    <span>Calibrated for High-Speed Dispensers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF4D00]" />
                    <span>Zero-Jam Clean Edge Slitting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF4D00]" />
                    <span>Extreme Ambient &amp; Moisture Durability</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF4D00]" />
                    <span>Wholesale Custom Rolls &amp; Fanfolds</span>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenQuoteModal(`${ind.title} Contract RFQ`)}
                    className="px-5 py-2.5 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white font-bold text-xs shadow-md shadow-orange-500/25 transition-all cursor-pointer"
                  >
                    Request Sector Pricing
                  </button>
                  <button
                    onClick={() => onNavigatePage('products')}
                    className="px-5 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-xs transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Matching Products</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="py-16 bg-zinc-950 text-white border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 text-[#FF4D00] font-mono text-xs font-bold uppercase tracking-wider">
            FREE APPLICATION ASSESSMENT
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto">
            Need Expert Advice for Your Packaging Line?
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Our material engineers evaluate your printer hardware, ambient warehouse temperatures, and carton substrates to recommend the optimal label and ribbon pairing.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenQuoteModal('Application Assessment')}
              className="px-8 py-4 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white font-bold text-sm shadow-xl shadow-orange-500/30 transition-all cursor-pointer hover:scale-[1.02]"
            >
              Book Free Technical Audit
            </button>
            <button
              onClick={() => onNavigatePage('contact')}
              className="px-7 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-sm border border-zinc-700 transition-all cursor-pointer"
            >
              Contact Sales Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
