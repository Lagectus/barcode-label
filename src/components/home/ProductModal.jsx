import { X, Check, ArrowRight } from 'lucide-react';

export default function ProductModal({ product, onClose, onOpenQuoteModal }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/70 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-zinc-200 animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="relative h-48 sm:h-64 bg-zinc-950 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-zinc-900/80 hover:bg-zinc-900 text-white flex items-center justify-center transition-colors border border-white/20 cursor-pointer"
            aria-label="Close Product Details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="inline-block px-3 py-1 rounded-md bg-[#FF4D00] text-white font-mono text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
              {product.categoryName}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {product.name}
            </h3>
            <p className="text-xs sm:text-sm text-orange-300 font-semibold mt-1">
              {product.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6">
          {/* Description */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
              PRODUCT OVERVIEW
            </h4>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Technical Specifications Grid */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-3">
              TECHNICAL SPECIFICATIONS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-zinc-50 p-4 rounded-2xl border border-zinc-200">
              {Object.entries(product.specifications).map(([key, val], idx) => (
                <div key={idx} className="text-xs">
                  <span className="font-semibold text-zinc-500 block">{key}</span>
                  <span className="font-bold text-zinc-900 font-mono text-xs sm:text-sm">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features List */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-3">
              MANUFACTURING &amp; PERFORMANCE ADVANTAGES
            </h4>
            <ul className="space-y-2">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                  <Check className="w-4 h-4 text-[#FF4D00] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Target Applications Tags */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
              PRIMARY INDUSTRY APPLICATIONS
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((app, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-orange-50 text-orange-950 border border-orange-200 text-xs font-semibold"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-zinc-50 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-zinc-500">
            Bulk wholesale rolls available in custom core sizes (25mm / 40mm / 76mm).
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-zinc-300 text-zinc-700 font-bold text-xs sm:text-sm hover:bg-zinc-100 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuoteModal(product.name);
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/30 transition-colors cursor-pointer"
            >
              <span>Get Wholesale Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
