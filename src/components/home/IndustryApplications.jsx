import React from 'react';
import { industries } from '../../data/industriesData';
import { ArrowUpRight, Building2 } from 'lucide-react';

export default function IndustryApplications({ onOpenQuoteModal }) {
  return (
    <section id="industries" className="py-24 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-[#FF4D00] text-xs font-mono font-bold uppercase tracking-wider mb-3 border border-orange-500/25 shadow-xs">
            <Building2 className="w-3.5 h-3.5" />
            <span>INDUSTRIES &amp; APPLICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight">
            Powering Mission-Critical Operations
          </h2>
          <p className="mt-3 text-zinc-600 text-sm sm:text-base leading-relaxed">
            From tier-1 e-commerce automated fulfillment centers to hygienic food service counters and harsh industrial fabrication plants, our labels and packaging rolls are engineered for demanding operating conditions.
          </p>
        </div>

        {/* Industry Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => (
            <div
              key={ind.id}
              onClick={() => onOpenQuoteModal(`${ind.title} Labelling`)}
              className="group relative rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-lg cursor-pointer aspect-[16/11] flex flex-col justify-end p-6 sm:p-7 hover:border-[#FF4D00]/60 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300"
            >
              {/* Background Image with Zoom on Hover */}
              <img
                src={ind.image}
                alt={ind.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-85"
              />

              {/* Dark & Flame Orange Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent transition-opacity duration-300 group-hover:from-zinc-950/95 group-hover:via-orange-950/30" />

              {/* Top Corner Arrow Button */}
              <div className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#FF4D00] group-hover:rotate-45 border border-white/20 shadow-md">
                <ArrowUpRight className="w-5 h-5" />
              </div>

              {/* Content Box */}
              <div className="relative z-10 text-white">
                <div className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#FF4D00] mb-1">
                  {ind.stats}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-orange-300 transition-colors">
                  {ind.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed line-clamp-2">
                  {ind.description}
                </p>

                {/* Sub-Tags */}
                <div className="mt-3 flex flex-wrap gap-1.5 pt-2.5 border-t border-white/15">
                  {ind.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-semibold px-2.5 py-0.5 rounded-md bg-white/15 text-zinc-200 backdrop-blur-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
