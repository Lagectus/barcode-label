import React, { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { manufacturingProcess } from '../../data/processData';
import { Cog, ShieldCheck, CheckCircle2, Cpu, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ManufacturingTimeline({ onOpenQuoteModal }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const trackWrapperRef = useRef(null);
  const progressBarRef = useRef(null);
  const [activeStage, setActiveStage] = useState(1);

  // Layout effect (not useEffect): ScrollTrigger pin:true wraps this section in a
  // pin-spacer, so the teardown must run synchronously during the commit phase,
  // before React removes the section from <main>.
  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const wrapper = trackWrapperRef.current;
    if (!section || !track || !wrapper) return;

    const ctx = gsap.context(() => {
      const getScrollDistance = () => {
        return Math.max(0, track.scrollWidth - wrapper.clientWidth);
      };

      const tween = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${Math.max(getScrollDistance(), 1400)}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (progressBarRef.current) {
              progressBarRef.current.style.width = `${Math.min(100, Math.max(0, self.progress * 100))}%`;
            }
            const stageNum = Math.min(
              6,
              Math.max(1, Math.ceil(self.progress * manufacturingProcess.length))
            );
            setActiveStage(stageNum);
          },
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="h-screen min-h-[640px] max-h-[920px] flex flex-col justify-between pt-24 pb-8 bg-zinc-50 border-b border-zinc-200 relative overflow-hidden"
    >
      {/* Background Subtle Tech Pattern */}
      <div className="absolute inset-0 technical-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header & Live Progress */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-[#FF4D00] text-xs font-mono font-bold uppercase tracking-wider mb-2 border border-orange-500/20 shadow-xs">
              <Cog className="w-3.5 h-3.5 text-[#FF4D00] animate-spin" />
              <span>STANDARDIZED QUALITY PIPELINE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 tracking-tight">
              End-to-End Manufacturing Workflow
            </h2>
          </div>

          {/* Live Stage Progress Indicator */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <div className="text-right">
              <div className="text-xs font-mono font-bold text-[#FF4D00]">
                STAGE 0{activeStage} / 06
              </div>
              <div className="text-[11px] text-zinc-500 font-medium">
                {manufacturingProcess[activeStage - 1]?.title || 'Converting Quality'}
              </div>
            </div>
            <div className="w-32 sm:w-44 h-2 bg-zinc-200 rounded-full overflow-hidden">
              <div
                ref={progressBarRef}
                className="h-full bg-[#FF4D00] rounded-full transition-all duration-75 w-[16%]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Middle Track: Pinned Horizontal Scrolling Cards */}
      <div
        ref={trackWrapperRef}
        className="w-full overflow-hidden relative z-10 py-2 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div
          ref={trackRef}
          className="flex gap-6 sm:gap-8 items-stretch will-change-transform"
        >
          {/* 6 Stage Cards */}
          {manufacturingProcess.map((item) => (
            <div
              key={item.step}
              className="w-[330px] sm:w-[380px] lg:w-[410px] flex-shrink-0 group relative flex flex-col justify-between bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#FF4D00]/50 transition-all duration-300 select-none"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF4D00] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

              <div>
                {/* Photo Area */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-zinc-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-mono font-bold text-[#FF4D00] uppercase tracking-wider">
                      {item.subtitle}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-600 font-mono text-[10px] font-bold">
                      STAGE 0{item.step}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono font-medium mt-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#FF4D00] shrink-0" />
                    <span className="truncate">{item.machinery}</span>
                  </div>

                  <p className="text-xs text-zinc-600 mt-2.5 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  {/* Specification Badges */}
                  <div className="mt-3.5 pt-3 border-t border-zinc-100 flex flex-wrap gap-1.5">
                    {item.specs.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-lg bg-zinc-50 text-zinc-700 text-[10px] sm:text-[11px] font-medium border border-zinc-200"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quality Benchmark Footer */}
              <div className="p-3.5 px-5 sm:px-6 bg-zinc-50/80 border-t border-zinc-100 flex items-center justify-between text-xs">
                <span className="text-zinc-500 font-medium">Quality Target:</span>
                <span className="font-bold text-zinc-900 font-mono flex items-center gap-1.5 text-[11px] sm:text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4D00] shrink-0" />
                  <span className="text-[#FF4D00] truncate">{item.benchmark}</span>
                </span>
              </div>
            </div>
          ))}

          {/* Concluding CTA Slide (7th Card) */}
          <div className="w-[330px] sm:w-[380px] lg:w-[410px] flex-shrink-0 flex flex-col justify-between p-7 rounded-3xl bg-zinc-950 text-white border border-zinc-800 shadow-xl relative overflow-hidden select-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-[#FF4D00] text-xs font-mono font-bold uppercase tracking-wider border border-orange-500/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>FINAL STAGE VALIDATION</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white leading-snug">
                Want to Test Sample Rolls on Your Production Lines?
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                We manufacture complimentary trial batches calibrated for your specific thermal printer model (Zebra, TSC, Honeywell) and automated packaging dispensers.
              </p>

              <div className="space-y-2 text-xs text-zinc-300 font-mono pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4D00]" />
                  <span>100% Free Prototyping</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4D00]" />
                  <span>Dispatched within 24–48 Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4D00]" />
                  <span>Custom Core Sizes (1" &amp; 3")</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-zinc-800">
              <button
                onClick={() => onOpenQuoteModal && onOpenQuoteModal('Complimentary Trial Roll Batch')}
                className="w-full py-3.5 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white font-bold text-xs sm:text-sm shadow-xl shadow-orange-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
              >
                <span>Request Free Trial Rolls</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Hint */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between text-xs text-zinc-400 font-mono relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-ping" />
          <span>SCROLL DOWN TO SLIDE STAGES LEFT</span>
        </div>
        <div className="hidden sm:block text-zinc-500">
          ISO 9001:2015 ROTARY CONVERTING
        </div>
      </div>
    </section>
  );
}
