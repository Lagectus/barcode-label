import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle2, Sparkles, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection({ onOpenQuoteModal }) {
  const heroRef = useRef(null);
  const videoContainerRef = useRef(null);
  const contentRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleLine1Ref = useRef(null);
  const titleLine2Ref = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const badgeRef = useRef(null);
  const cardRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        videoContainerRef.current,
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.inOut' }
      )
      .fromTo(
        eyebrowRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.7'
      )
      .fromTo(
        [titleLine1Ref.current, titleLine2Ref.current],
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
        '-=0.4'
      )
      .fromTo(
        descRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.4'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.3'
      )
      .fromTo(
        badgeRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.6 },
        '-=0.3'
      )
      .fromTo(
        cardRef.current,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power2.out' },
        '-=0.7'
      )
      .fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.2'
      );

      // Scroll Parallax
      gsap.to(videoContainerRef.current, {
        scale: 1.08,
        y: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(contentRef.current, {
        y: -40,
        opacity: 0.85,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 bg-zinc-950"
    >
      {/* Background Image - Fully Visible High-Resolution Industrial Facility */}
      <div
        ref={videoContainerRef}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2400&q=85"
          alt="Industrial Barcode Labels Converting Plant"
          className="w-full h-full object-cover object-center"
        />

        {/* Ambient Dark Directional Overlay: Right side has low opacity so factory image is 100% visible, left side balances text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/92 via-zinc-950/75 to-zinc-950/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/60" />

        {/* Brand Flame Orange Ambient Glow */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#FF4D00]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Hero Foreground Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 xl:col-span-8">
            {/* Eyebrow */}
            <div
              ref={eyebrowRef}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/35 text-orange-400 text-xs font-mono font-bold tracking-wider uppercase mb-6 shadow-sm backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4D00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4D00]"></span>
              </span>
              <span>BDOUBLEU® CERTIFIED MANUFACTURING • DIRECT FACTORY RATES</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 drop-shadow-sm">
              <span ref={titleLine1Ref} className="block text-white">
                Advanced Labelling &amp;
              </span>
              <span ref={titleLine2Ref} className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] via-orange-400 to-amber-200">
                Packaging Solutions
              </span>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-zinc-200 block mt-2">
                for High-Volume Indian Supply Chains
              </span>
            </h1>

            {/* Supporting Statement */}
            <p
              ref={descRef}
              className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed mb-8"
            >
              <strong className="text-white">BDOUBLEU (bw)® / Barcode World</strong> engineers industrial-grade <strong className="text-white">Barcode Labels</strong>, <strong className="text-white">Flipkart &amp; Amazon Shipping Labels</strong>, <strong className="text-white">Direct Thermal Rolls</strong>, <strong className="text-white">Thermal Transfer Ribbons</strong>, and <strong className="text-white">Food Grade Butter Paper</strong> with ±0.15mm precision rotary die-cutting and PAN-India JIT dispatch.
            </p>

            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <button
                onClick={() => onOpenQuoteModal()}
                className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white font-bold text-base shadow-xl shadow-orange-500/30 transition-all duration-300 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer overflow-hidden"
              >
                <span className="relative z-10">Request Factory Quote</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-200 group-hover:translate-x-1" />
                <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
              </button>

              <a
                href="#products"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/25 backdrop-blur-md shadow-sm transition-all duration-200 hover:border-orange-400 hover:text-[#FF4D00] active:scale-[0.98]"
              >
                <span>Explore 11+ Products</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div
              ref={badgeRef}
              className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-zinc-300 pt-6 border-t border-zinc-800"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF4D00] shrink-0" />
                <span className="font-semibold text-zinc-200">ANSI Grade A (4.0) Scan Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF4D00] shrink-0" />
                <span className="font-semibold text-zinc-200">Amazon &amp; Flipkart Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF4D00] shrink-0" />
                <span className="font-semibold text-zinc-200">Direct Manufacturer Pricing</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Telemetry HUD Card */}
          <div ref={cardRef} className="lg:col-span-5 xl:col-span-4 hidden lg:block">
            <div className="relative rounded-3xl bg-zinc-950/90 backdrop-blur-md p-6 text-white shadow-2xl shadow-black/60 border border-zinc-800 overflow-hidden group">
              {/* Industrial HUD Corners */}
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />

              {/* Ambient Glow */}
              <div className="absolute -top-12 -right-12 w-44 h-44 bg-[#FF4D00]/25 rounded-full blur-3xl pointer-events-none" />

              {/* Header Telemetry */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-400">
                    OPTICAL QC STATION #02
                  </span>
                </div>
                <span className="text-[10px] font-mono bg-orange-500/20 text-[#FF4D00] border border-orange-500/30 px-2 py-0.5 rounded font-bold">
                  ANSI A (4.0)
                </span>
              </div>

              {/* Inspection Visual Showcase */}
              <div className="relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 aspect-[4/3] mb-4 flex items-center justify-center p-3">
                {/* Barcode Mockup Image */}
                <img
                  src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80"
                  alt="Industrial barcode label rolls inspection"
                  className="w-full h-full object-cover rounded-lg opacity-90 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-zinc-950/30 pointer-events-none" />

                {/* Corner Quality Badge */}
                <div className="absolute top-2.5 right-2.5 z-10">
                  <div className="text-center bg-zinc-950/85 backdrop-blur-md px-3 py-1 rounded-full border border-orange-500/30 shadow-md">
                    <span className="text-[10px] font-mono text-[#FF4D00] font-bold">100% QUALITY VERIFIED</span>
                  </div>
                </div>

                {/* Bottom Spec Badge */}
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-mono text-zinc-400 px-2 py-1 rounded bg-zinc-950/80 backdrop-blur-sm border border-zinc-800">
                  <span>LOT: #DEL-2026-B8</span>
                  <span className="text-[#FF4D00]">TOLERANCE: ±0.15mm</span>
                </div>
              </div>

              {/* High-Impact Production Metrics */}
              <div className="space-y-2.5 mb-5">
                <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800/80 flex items-center justify-between hover:border-orange-500/30 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <Cpu className="w-4 h-4 text-[#FF4D00]" />
                    <div>
                      <div className="text-[11px] text-zinc-400">Daily Label Production</div>
                      <div className="text-base font-bold text-white font-mono">10,000,000+ Units</div>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-orange-500/10 text-[#FF4D00] border border-orange-500/20 font-mono font-semibold">
                    HIGH-SPEED
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800/80 flex items-center justify-between hover:border-orange-500/30 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#FF4D00]" />
                    <div>
                      <div className="text-[11px] text-zinc-400">PAN-India Dispatch Time</div>
                      <div className="text-base font-bold text-white font-mono">24 – 48 Hours</div>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono font-semibold">
                    EXPRESS
                  </span>
                </div>
              </div>

              {/* Bottom Interactive Trigger */}
              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                <span className="text-zinc-400">Need custom roll dimensions?</span>
                <button
                  onClick={() => onOpenQuoteModal('Custom Barcode Label')}
                  className="text-[#FF4D00] font-bold hover:text-orange-400 transition-colors flex items-center gap-1.5 group/btn cursor-pointer"
                >
                  <span>Request Free Sample</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Continuous Animated Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none"
      >
        <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 mb-1.5 font-bold">
          SCROLL TO EXPLORE
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-zinc-600 flex items-start justify-center p-1 bg-zinc-950/50 backdrop-blur-sm shadow-sm">
          <div className="w-1.5 h-2.5 bg-[#FF4D00] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
