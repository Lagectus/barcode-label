import { ArrowRight, ShieldCheck, Mail } from 'lucide-react';

export default function ConversionCTA({ onOpenQuoteModal }) {
  return (
    <section className="py-20 bg-zinc-950 text-white relative overflow-hidden border-t border-zinc-800">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-900 to-orange-950/50" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#FF4D00]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 technical-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 text-[#FF4D00] text-xs font-mono font-bold uppercase tracking-wider mb-5 border border-orange-500/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>DIRECT FACTORY ENGAGEMENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Looking for Reliable Labelling &amp; Packaging Solutions?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto">
            Let's discuss your roll dimensions, monthly consumption volumes, and technical specifications directly with our engineering team in Rohini, New Delhi.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white font-bold text-base shadow-xl shadow-orange-500/30 transition-all duration-200 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Get a Custom Factory Quote</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-base border border-white/20 transition-all duration-200 active:scale-[0.98]"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Us</span>
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-zinc-800 flex flex-wrap items-center justify-center gap-8 text-xs sm:text-sm text-zinc-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF4D00]" /> Free Material Samples for Testing
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF4D00]" /> Dedicated Account Manager
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF4D00]" /> Guaranteed 24-Hour RFQ Turnaround
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
