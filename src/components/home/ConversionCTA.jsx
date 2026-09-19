import { ArrowRight, ShieldCheck, Mail } from 'lucide-react';

export default function ConversionCTA({ onOpenQuoteModal }) {
  return (
    <section className="py-10 sm:py-14 relative overflow-hidden border-t border-zinc-200">
      {/* Background Banner Image */}
      <img
        src="/hm-bn.jpeg"
        alt="Barcode World & Packaging Factory Range"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />

      {/* Ambient overlay to keep left/right products clearly visible while ensuring text clarity */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white/60 sm:bg-gradient-to-r sm:from-white/25 sm:via-white/85 sm:to-white/25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl lg:max-w-3xl mx-auto text-center bg-white/92 backdrop-blur-md rounded-2xl sm:rounded-3xl px-6 py-6 sm:px-10 sm:py-7 border border-white/90 shadow-xl shadow-zinc-900/10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-[#FF4D00] text-[11px] font-mono font-bold uppercase tracking-wider mb-2.5 border border-orange-500/20 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF4D00]" />
            <span>DIRECT FACTORY ENGAGEMENT</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-950 leading-snug">
            Looking for Reliable Labelling &amp; Packaging Solutions?
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-xl mx-auto font-medium">
            Let's discuss your roll dimensions, monthly consumption volumes, and technical specifications directly with our engineering team in Rohini, New Delhi.
          </p>

          <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/30 transition-all duration-200 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Get a Custom Factory Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs sm:text-sm border border-zinc-900 shadow-sm transition-all duration-200 active:scale-[0.98]"
            >
              <Mail className="w-3.5 h-3.5 text-orange-400" />
              <span>Contact Us</span>
            </a>
          </div>

          <div className="mt-4 pt-3.5 border-t border-zinc-200/70 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-zinc-600 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D00]" /> Free Material Samples
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D00]" /> Dedicated Account Manager
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D00]" /> 24-Hour RFQ Turnaround
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
