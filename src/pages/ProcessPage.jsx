import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  ArrowRight, 
  Settings, 
  Check
} from 'lucide-react';
import { manufacturingProcess } from '../data/processData';

export default function ProcessPage({ onOpenQuoteModal, onNavigatePage }) {
  const headerRef = useRef(null);
  const stepsRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
      gsap.fromTo(
        stepsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out', clearProps: 'transform' }
      );
    });

    return () => ctx.revert();
  }, []);

  const machineryFleet = [
    { name: 'Rotary Die-Cutters', spec: 'Magnetic cylinder lines with computerized depth tension', tol: '±0.15mm depth' },
    { name: 'UV Flexo Presses', spec: 'Multi-color printing with instant UV radiation curing', tol: 'Delta E < 1.5' },
    { name: 'Slitter-Rewinders', spec: 'High-speed web slitting for 1" and 3" industrial cores', tol: 'Zero-jam edge' },
    { name: 'Optical QC Verifiers', spec: 'ANSI Grade A/B 1D & 2D optical scan grading cameras', tol: '100% Verification' },
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
            <span className="text-[#FF4D00] font-bold">Manufacturing Process</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-[#FF4D00] text-xs font-mono font-bold uppercase tracking-wider mb-5">
              <Settings className="w-3.5 h-3.5" />
              <span>ROHINI ROTARY CONVERTING FACILITY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Precision Converting from <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] via-orange-500 to-amber-300">
                Jumbo Rolls to Shippers.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8">
              Explore our disciplined 6-stage manufacturing workflow governed by tight ISO 9001:2015 engineering tolerances, clean-tear micro-perforations, and automated barcode verifiers.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal('Production Process Audit')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white font-bold text-sm shadow-xl shadow-orange-500/30 transition-all cursor-pointer hover:scale-[1.02]"
              >
                <span>Request Factory Tour / Samples</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigatePage('products')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-all cursor-pointer"
              >
                <span>Explore Products</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Machinery Fleet Bar */}
      <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {machineryFleet.map((m, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-lg space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <strong className="text-xs font-bold text-zinc-900">{m.name}</strong>
                <span className="px-2 py-0.5 rounded bg-orange-50 text-[#FF4D00] font-mono text-[10px] font-bold">
                  {m.tol}
                </span>
              </div>
              <p className="text-[11px] text-zinc-500 leading-tight">{m.spec}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The 6-Step Manufacturing Process */}
      <section ref={stepsRef} className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF4D00] mb-2">
            STEP-BY-STEP CONVERTING DISCIPLINE
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            How Every BDOUBLEU® Roll Is Made
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {manufacturingProcess.map((proc) => (
            <div
              key={proc.step}
              className="group flex flex-col justify-between p-7 rounded-3xl bg-white border border-zinc-200 shadow-sm hover:border-[#FF4D00]/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-2xl bg-zinc-950 text-[#FF4D00] font-mono font-extrabold text-lg flex items-center justify-center shadow-md">
                    {proc.step}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-zinc-400">
                    STAGE {proc.step} / 06
                  </span>
                </div>

                {/* Subtitle & Title */}
                <div>
                  <div className="text-xs font-mono font-bold text-[#FF4D00] uppercase mb-1">
                    {proc.subtitle}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-950 tracking-tight">
                    {proc.title}
                  </h3>
                </div>

                {/* Image */}
                <div className="relative h-44 rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200">
                  <img
                    src={proc.image}
                    alt={proc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Machinery info */}
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                  <span className="text-[#FF4D00]">⚙</span>
                  <span className="truncate">{proc.machinery}</span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {proc.description}
                </p>

                {/* Specs List */}
                <div className="pt-2 border-t border-zinc-100 space-y-1.5">
                  {proc.specs.map((sp, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-zinc-700">
                      <Check className="w-3.5 h-3.5 text-[#FF4D00] shrink-0" />
                      <span>{sp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Benchmark Pill */}
              <div className="pt-4 mt-6 border-t border-zinc-100 flex items-center justify-between text-xs">
                <span className="text-zinc-500">Benchmark:</span>
                <span className="font-mono font-bold text-[#FF4D00]">{proc.benchmark}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bottom Factory Guarantee CTA */}
      <section className="py-16 bg-zinc-950 text-white border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 text-[#FF4D00] font-mono text-xs font-bold uppercase tracking-wider">
            100% QUALITY &amp; TOLERANCE GUARANTEE
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto">
            Experience Factory-Direct Converting Reliability
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Eliminate printer head clogging, adhesive bleeding, and label jam rejections. Contact us for custom production trials.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenQuoteModal('Production Trial Request')}
              className="px-8 py-4 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white font-bold text-sm shadow-xl shadow-orange-500/30 transition-all cursor-pointer hover:scale-[1.02]"
            >
              Request Sample Trial Pack
            </button>
            <button
              onClick={() => onNavigatePage('contact')}
              className="px-7 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-sm border border-zinc-700 transition-all cursor-pointer"
            >
              Contact Plant Engineers
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
