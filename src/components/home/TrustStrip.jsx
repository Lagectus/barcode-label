import React from 'react';
import { ShieldCheck, Cpu, Truck, BarChart3 } from 'lucide-react';

export default function TrustStrip() {
  const highlights = [
    {
      icon: Cpu,
      title: 'High-Speed Precision Die-Cutting',
      desc: 'Rotary cylinder tolerances within ±0.15mm for zero-jam roll feeding'
    },
    {
      icon: ShieldCheck,
      title: 'ANSI Grade-A Scan Guarantee',
      desc: 'Tested on optical 1D/2D high-speed automated verifiers'
    },
    {
      icon: Truck,
      title: 'PAN-India 24–48h Dispatch',
      desc: 'Express logistics hubs across Delhi NCR, Mumbai & Bengaluru'
    },
    {
      icon: BarChart3,
      title: 'Direct Factory Pricing',
      desc: 'Zero middleman markup on high-volume wholesale contracts'
    }
  ];

  return (
    <section className="bg-zinc-50 border-y border-zinc-200/80 py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group flex items-start gap-4 p-4 rounded-2xl bg-white border border-zinc-200 shadow-sm hover:border-[#FF4D00]/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-11 h-11 rounded-xl bg-orange-50 text-[#FF4D00] flex items-center justify-center shrink-0 border border-orange-100 group-hover:bg-[#FF4D00] group-hover:text-white transition-colors duration-300 shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 leading-snug group-hover:text-[#FF4D00] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
