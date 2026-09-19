import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { storySteps } from '../../data/storyData';
import { Check, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function InteractiveStorySection({ onOpenQuoteModal }) {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Synchronize active step as user scrolls past each card
      storySteps.forEach((_, index) => {
        ScrollTrigger.create({
          trigger: `#story-card-${index}`,
          start: 'top 55%',
          end: 'bottom 45%',
          onEnter: () => setActiveStep(index),
          onEnterBack: () => setActiveStep(index),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 bg-white border-b border-zinc-200"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl" />
        <div className="absolute inset-0 technical-grid opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 text-[#FF4D00] text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-orange-500/25 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FF4D00]" />
            <span>ABOUT BDOUBLEU® / BARCODE WORLD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            Precision Barcode Labels. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] via-orange-600 to-zinc-900">
              100% Scan Accuracy Guaranteed.
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-xl">
            Factory-converted barcode rolls and thermal ribbons engineered for zero-jam printing and instant 1D/2D scanner reads.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 relative">
          
          {/* LEFT COLUMN: Sticky Card follows right column scroll */}
          <div className="lg:col-span-6 relative">
            <div className="lg:sticky lg:top-28 space-y-4">
              
              {/* Single Image Card - 1:1 Square Ratio Matching Exact Image Dimensions */}
              <div className="relative rounded-3xl overflow-hidden bg-white shadow-xl border border-zinc-200 aspect-square w-full">
                
                {/* Smooth Image Cross-fade based on activeStep */}
                {storySteps.map((step, idx) => (
                  <div
                    key={step.step}
                    className={`absolute inset-0 transition-all duration-500 ease-out ${
                      activeStep === idx
                        ? 'opacity-100 scale-100 filter-none pointer-events-auto'
                        : 'opacity-0 scale-105 filter blur-xs pointer-events-none'
                    }`}
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      loading="lazy"
                      className="w-full h-full object-contain object-center rounded-3xl"
                    />
                  </div>
                ))}
              </div>

              {/* Dual Facility Real Photo Switcher (1.jpeg & 2.jpeg) */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setActiveStep(0)}
                  className={`group relative rounded-2xl overflow-hidden border-2 transition-all p-2 flex items-center gap-3 text-left cursor-pointer ${
                    activeStep % 2 === 0
                      ? 'border-[#FF4D00] bg-orange-50/80 shadow-md shadow-orange-500/10'
                      : 'border-zinc-200 bg-white hover:border-zinc-300'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-zinc-900 border border-zinc-200">
                    <img src="/1.jpeg" alt="Converting Plant Floor" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="min-w-0 pr-1">
                    <div className="text-xs font-bold text-zinc-900 group-hover:text-[#FF4D00] transition-colors truncate">
                      Facility Plant 01
                    </div>
                    <div className="text-[11px] text-zinc-500 font-mono">
                      Converting Lines
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveStep(1)}
                  className={`group relative rounded-2xl overflow-hidden border-2 transition-all p-2 flex items-center gap-3 text-left cursor-pointer ${
                    activeStep % 2 === 1
                      ? 'border-[#FF4D00] bg-orange-50/80 shadow-md shadow-orange-500/10'
                      : 'border-zinc-200 bg-white hover:border-zinc-300'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-zinc-900 border border-zinc-200">
                    <img src="/2.jpeg" alt="Slitting & Finishing Lines" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="min-w-0 pr-1">
                    <div className="text-xs font-bold text-zinc-900 group-hover:text-[#FF4D00] transition-colors truncate">
                      Facility Plant 02
                    </div>
                    <div className="text-[11px] text-zinc-500 font-mono">
                      Slitting & Logistics
                    </div>
                  </div>
                </button>
              </div>

              {/* Helper indicator bar */}
              <div className="p-3.5 rounded-2xl bg-orange-50/80 border border-orange-200/90 text-xs text-orange-950 flex items-center justify-between shadow-xs">
                <span className="flex items-center gap-2 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#FF4D00] shrink-0" />
                  Hover or scroll through the cards to update live specifications
                </span>
                <span className="font-mono font-bold text-[#FF4D00] text-xs">
                  0{activeStep + 1} / 04
                </span>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: 4 Cards (Hover updates left visual immediately) */}
          <div className="lg:col-span-6 space-y-6">
            {storySteps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.step}
                  id={`story-card-${idx}`}
                  onMouseEnter={() => setActiveStep(idx)}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer relative ${
                    isActive
                      ? 'bg-orange-50/20 border-[#FF4D00] shadow-xl shadow-orange-500/10 -translate-y-1'
                      : 'bg-white border-zinc-200 hover:border-orange-300 hover:bg-zinc-50/60 shadow-sm'
                  }`}
                >
                  {/* Top Accent Line for active card */}
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF4D00] rounded-t-2xl shadow-xs" />
                  )}

                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-sm transition-colors ${
                          isActive
                            ? 'bg-[#FF4D00] text-white shadow-md shadow-orange-500/30'
                            : 'bg-zinc-100 text-zinc-600'
                        }`}
                      >
                        {step.step}
                      </span>
                      <span className="text-xs font-mono font-bold tracking-widest text-[#FF4D00] uppercase">
                        {step.eyebrow}
                      </span>
                    </div>

                    {isActive && (
                      <span className="text-xs font-bold text-[#FF4D00] bg-orange-100/90 px-3 py-0.5 rounded-full flex items-center gap-1 border border-orange-200">
                        <Check className="w-3 h-3" /> Live View
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs sm:text-sm font-semibold text-[#FF4D00] mb-3">
                    {step.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Highlight Pill */}
                  <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-700 flex items-start gap-2.5 shadow-xs mb-4">
                    <ShieldCheck className="w-4 h-4 text-[#FF4D00] shrink-0 mt-0.5" />
                    <span>{step.highlight}</span>
                  </div>

                  {/* Card Action Link */}
                  <div className="flex items-center justify-between pt-2.5 border-t border-zinc-100 text-xs">
                    <span className="text-zinc-400 font-medium font-mono">
                      Phase {step.step} • {step.tag}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenQuoteModal(`${step.title} Consultation`);
                      }}
                      className="inline-flex items-center gap-1.5 font-bold text-[#FF4D00] hover:text-orange-700 transition-colors cursor-pointer"
                    >
                      <span>Discuss Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Bottom Story CTA */}
            <div className="pt-4">
              <button
                onClick={() => onOpenQuoteModal('Industrial Supply Discussion')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FF4D00] hover:text-orange-700 transition-colors group cursor-pointer"
              >
                <span>Speak directly with our technical manufacturing team in Rohini, New Delhi</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
