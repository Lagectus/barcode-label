import { ArrowRight, Eye, Sparkles } from 'lucide-react';

export default function ProductCard({ product, onViewDetails, onGetQuote }) {
  return (
    <div className="group relative flex flex-col justify-between h-full bg-white rounded-2xl border border-zinc-200 overflow-hidden card-hover-shadow transition-all duration-300 hover:border-[#FF4D00]/50 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1">
      
      {/* Top Animated Flame Orange Accent Line (reveals on hover) */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF4D00] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-30" />

      {/* Card Header & Image Area */}
      <div className="flex flex-col flex-1">
        {/* Large Product Image Area */}
        <div className="relative h-56 sm:h-60 overflow-hidden bg-zinc-100 flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-108 opacity-100"
          />

          {/* Category Badge */}
          <div className="absolute top-3.5 left-3.5 z-10">
            <span className="px-3 py-1 rounded-full bg-white/95 text-zinc-900 font-mono text-[11px] font-bold tracking-wider uppercase shadow-sm border border-zinc-200 backdrop-blur-xs">
              {product.categoryName}
            </span>
          </div>

          {/* Popular Tag */}
          {product.popular && (
            <div className="absolute top-3.5 right-3.5 z-10">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FF4D00] text-white font-mono text-[10px] font-bold tracking-wider uppercase shadow-md shadow-orange-500/30">
                <Sparkles className="w-3 h-3" />
                HIGH DEMAND
              </span>
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="p-6 flex flex-col flex-1 justify-between">
          <div>
            <div className="text-xs font-mono font-bold text-[#FF4D00] uppercase tracking-wider mb-1.5 line-clamp-1 min-h-[1.125rem]">
              {product.tagline}
            </div>

            <h3 className="text-xl font-bold text-zinc-900 tracking-tight leading-snug group-hover:text-[#FF4D00] transition-colors line-clamp-2 min-h-[3.25rem] flex items-start">
              {product.name}
            </h3>

            <p className="text-xs sm:text-sm text-zinc-600 mt-2 leading-relaxed line-clamp-2 min-h-[2.5rem]">
              {product.description}
            </p>
          </div>

          {/* Quick Specs Pill Badges */}
          <div className="mt-4 pt-3 border-t border-zinc-100 flex flex-wrap items-center gap-1.5 min-h-[2.25rem]">
            {product.applications.slice(0, 2).map((app, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-zinc-100 text-zinc-600 text-[11px] font-medium whitespace-nowrap"
              >
                {app}
              </span>
            ))}
            <span className="px-2.5 py-1 rounded-lg bg-orange-50 text-[#FF4D00] text-[11px] font-semibold border border-orange-100 whitespace-nowrap">
              Custom Sizes
            </span>
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="p-6 pt-0 flex items-center gap-2.5 mt-auto">
        <button
          onClick={() => onViewDetails(product)}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 text-zinc-700 font-bold text-xs sm:text-sm transition-all duration-200 active:scale-98 cursor-pointer"
        >
          <Eye className="w-4 h-4 text-zinc-500" />
          <span>View Specs</span>
        </button>

        <button
          onClick={() => onGetQuote(product.name)}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/25 transition-all duration-200 active:scale-98 cursor-pointer group-hover:shadow-lg group-hover:shadow-orange-500/35"
        >
          <span>Get Quote</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
