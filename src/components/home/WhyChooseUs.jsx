import React from 'react';
import { ShieldCheck, Cpu, Sliders, Truck, RefreshCw, Headphones, ArrowRight } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'ANSI Grade-A Scan Quality',
    desc: 'Every master roll is batch-verified on optical barcode analyzers, ensuring flawless 100% first-pass read rates across automated conveyor scanners and handheld terminals.',
    tag: 'Zero Downtime'
  },
  {
    icon: Sliders,
    title: 'Custom Slitting & Core Sizing',
    desc: 'Complete versatility across 0.5", 1", and 3" cores, custom slit widths from 20mm to 300mm, perforated fanfolds, and specialized freezer-grade adhesive formulations.',
    tag: 'Custom Engineered'
  },
  {
    icon: Cpu,
    title: 'Direct Factory Converting',
    desc: 'Eliminate trading layers and distributor margins. We own and operate high-capacity rotary die-cutters, slitting rewinding machinery, and flexo printing presses in New Delhi.',
    tag: 'Direct Pricing'
  },
  {
    icon: Truck,
    title: 'PAN-India Buffer Stock & JIT',
    desc: 'We maintain dedicated raw stock reserves for enterprise clients to absorb festive e-commerce surges, ensuring your dispatch lines never experience roll stockouts.',
    tag: '24–48h Dispatch'
  },
  {
    icon: RefreshCw,
    title: 'Complete Substrate Range',
    desc: 'From thermal top-coated paper and chromo art paper to extreme-durability silver polyester, food-grade butter paper, and thermal transfer ribbons under one roof.',
    tag: 'Single-Source Supply'
  },
  {
    icon: Headphones,
    title: 'Dedicated Technical B2B Support',
    desc: 'Our printing engineers advise on the exact substrate-to-ribbon pairing (Wax, Wax-Resin, Resin) to protect thermal printheads and optimize cost per printed label.',
    tag: 'Expert Engineering'
  }
];

export default function WhyChooseUs({ onOpenQuoteModal }) {
  return (
    <section id="why-us" className="py-24 bg-zinc-50 border-b border-zinc-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-[#FF4D00] text-xs font-mono font-bold uppercase tracking-wider mb-3 border border-orange-500/25 shadow-xs">
            <span>THE BDOUBLEU® ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight">
            Why India's Leading Supply Chains Trust Us
          </h2>
          <p className="mt-3 text-zinc-600 text-sm sm:text-base leading-relaxed">
            Reliability isn't a buzzword in high-speed logistics—it's the difference between on-time delivery and costly warehouse bottlenecks.
          </p>
        </div>

        {/* 6 Core Strength Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm hover:border-[#FF4D00]/50 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF4D00] flex items-center justify-center border border-orange-100 group-hover:bg-[#FF4D00] group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-500 bg-zinc-100 px-3 py-1 rounded-md">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900 tracking-tight mb-3 group-hover:text-[#FF4D00] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center text-xs font-bold text-[#FF4D00]">
                  <span>Factory Guaranteed Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Strip */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenQuoteModal('Enterprise Supply Contract')}
            className="inline-flex items-center gap-2 text-sm font-bold text-zinc-800 hover:text-[#FF4D00] transition-colors group cursor-pointer"
          >
            <span>Discuss your annual rolling contract requirements</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
