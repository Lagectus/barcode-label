import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  Building2, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Phone,
  Factory,
  Check
} from 'lucide-react';

export default function AboutPage({ onOpenQuoteModal, onNavigatePage }) {
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out', clearProps: 'transform' }
      );
    });

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: '15+', label: 'Years Manufacturing Excellence', sub: 'Established legacy in Delhi NCR' },
    { value: '10M+', label: 'Daily Label Converting Capacity', sub: 'High-speed rotary lines' },
    { value: '500+', label: 'Enterprise Supply Clients', sub: 'Marketplaces, FMCG, Pharma' },
    { value: '99.4%', label: 'On-Time Dispatch Rate (OTIF)', sub: 'PAN-India delivery corridor' },
  ];

  const milestones = [
    { year: '2010', title: 'Foundation in Rohini, Delhi', desc: 'Started with single rotary press dedicated to retail barcode tags.' },
    { year: '2015', title: 'E-Commerce Marketplace Expansion', desc: 'Installed high-speed 4x6" waybill slitting lines for rapid courier label dispatch.' },
    { year: '2019', title: 'FSSAI Food-Grade Conversion Plant', desc: 'Added dedicated clean facility for greaseproof butter paper and QSR wrapping sheets.' },
    { year: '2023', title: 'ISO 9001:2015 & ANSI Verifiers', desc: 'Automated optical camera inspection and high-density barcode read verification.' },
    { year: '2026', title: 'PAN-India 10-Corridor Fleet', desc: 'Serving 10+ major industrial clusters with guaranteed 24-48 hour replenishment.' },
  ];

  return (
    <div className="pt-24 bg-zinc-50 min-h-screen text-zinc-900">
      {/* 1. Cinematic Hero Banner */}
      <section ref={headerRef} className="relative bg-zinc-950 text-white py-20 lg:py-24 border-b border-zinc-800 overflow-hidden">
        <img
          src="/contact-banner.jpeg"
          alt="About BDOUBLEU Manufacturing Banner"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
        {/* Left-Side Soft Black Overlay for Text Readability */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-[65%] lg:w-[50%] bg-gradient-to-r from-zinc-950/85 via-zinc-950/50 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-6">
            <button 
              onClick={() => onNavigatePage('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-[#FF4D00] font-bold">About BDOUBLEU®</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-[#FF4D00] text-xs font-mono font-bold uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DIRECT INDUSTRIAL MANUFACTURER • BDOUBLEU®</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Precision Label Converting. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] via-orange-500 to-amber-300">
                Built for Scale &amp; Reliability.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8">
              Headquartered in Rohini, New Delhi, BDOUBLEU® (Barcode World) is an engineering-driven converting powerhouse producing millions of barcode labels, shipping waybills, thermal ribbons, and food wrapping rolls daily for India’s fastest-growing enterprise supply chains.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal('Corporate / Factory RFQ')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white font-bold text-sm shadow-xl shadow-orange-500/30 transition-all cursor-pointer hover:scale-[1.02]"
              >
                <span>Request Wholesale Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigatePage('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-all cursor-pointer"
              >
                <Building2 className="w-4 h-4 text-[#FF4D00]" />
                <span>Visit Rohini Plant</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Numbers Grid */}
      <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((st, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-xl space-y-2 hover:border-[#FF4D00]/50 transition-all"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#FF4D00] tracking-tight">
                {st.value}
              </div>
              <div className="text-sm font-bold text-zinc-900 leading-tight">
                {st.label}
              </div>
              <div className="text-xs text-zinc-500">
                {st.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Company Story & Facility Overview */}
      <section ref={contentRef} className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Factory Visual Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-200 shadow-2xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
                alt="BDOUBLEU Manufacturing Facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FF4D00] text-white font-mono text-[11px] font-bold uppercase mb-2">
                  <Factory className="w-3.5 h-3.5" />
                  ROHINI INDUSTRIAL FACILITY
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white">
                  25,000+ Sq. Ft. Converting &amp; Slitting Plant
                </h3>
                <p className="text-xs text-zinc-300 mt-1">
                  Equipped with multi-color UV flexographic presses, magnetic cylinder rotary die-cutters, and computerized slitter-rewinders.
                </p>
              </div>
            </div>

            {/* Float Badge */}
            <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 p-4 rounded-2xl bg-white border border-zinc-200 shadow-xl max-w-xs">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF4D00] flex items-center justify-center font-bold shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-xs">
                <strong className="block font-bold text-zinc-900">Zero-Jamming Calibrated</strong>
                <span className="text-zinc-500">Certified for Zebra, TSC, Honeywell &amp; Godex</span>
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Architecture */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF4D00]">
              <span>OUR PHILOSOPHY</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
              We Don't Just Cut Labels. <br />
              We Power Automated Supply Chains.
            </h2>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              When an automated fulfillment center processes 50,000 orders an hour, a single label tear or misaligned barcode gap can shut down an entire packaging conveyor. That's why every roll manufactured at BDOUBLEU® adheres to strict micrometer tolerances and high-tack emulsion standards.
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Direct-from-manufacturer wholesale economics — zero trader markups',
                'ANSI Grade-A verified barcode acuity for instantaneous 1D/2D scanner reads',
                'Certified food-grade virgin paper converting (FSSAI/FDA compliant)',
                'Dedicated contingency stock buffers for e-commerce mega-sale events',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 text-[#FF4D00] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-zinc-800 font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => onNavigatePage('process')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer"
              >
                <span>View Converting Process</span>
                <ArrowRight className="w-4 h-4 text-[#FF4D00]" />
              </button>
              <button
                onClick={() => onNavigatePage('products')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-50 hover:bg-orange-100 text-[#FF4D00] font-bold text-xs sm:text-sm border border-orange-200 transition-all cursor-pointer"
              >
                <span>Browse Product Lines</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Company Evolution Timeline */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF4D00] mb-2">
            OUR JOURNEY
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            15+ Years of Converting Innovation
          </h2>
        </div>

        <div className="relative border-l-2 border-orange-500/30 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-10">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#FF4D00] shadow-md group-hover:scale-125 transition-transform" />

              <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm hover:border-[#FF4D00]/50 transition-all">
                <span className="inline-block px-2.5 py-0.5 rounded bg-orange-50 text-[#FF4D00] font-mono text-xs font-bold mb-2">
                  {m.year}
                </span>
                <h4 className="text-base font-bold text-zinc-900 mb-1">
                  {m.title}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Plant Visit / RFQ Conversion Strip */}
      <section className="py-16 bg-zinc-950 text-white border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 text-[#FF4D00] font-mono text-xs font-bold uppercase tracking-wider">
            PARTNER DIRECTLY WITH THE MANUFACTURER
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto">
            Ready to Cut Middleman Costs and Guarantee Zero-Jam Printing?
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Contact our commercial sales desk in Rohini, New Delhi for custom roll prototyping, sample testing packs, or wholesale price contract schedules.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenQuoteModal('Wholesale Contract Inquiry')}
              className="px-8 py-4 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white font-bold text-sm shadow-xl shadow-orange-500/30 transition-all cursor-pointer hover:scale-[1.02]"
            >
              Request Wholesale Quote
            </button>
            <a
              href="tel:+919811000000"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-sm border border-zinc-700 transition-all"
            >
              <Phone className="w-4 h-4 text-[#FF4D00]" />
              <span>Call Factory Sales: +91 98110 00000</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
