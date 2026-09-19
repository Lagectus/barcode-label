import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  Award, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Check, 
  Truck, 
  DollarSign, 
  Cpu, 
  Phone
} from 'lucide-react';

export default function WhyUsPage({ onOpenQuoteModal, onNavigatePage }) {
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
      gsap.fromTo(
        gridRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out', clearProps: 'transform' }
      );
    });

    return () => ctx.revert();
  }, []);

  const advantages = [
    {
      icon: DollarSign,
      title: 'Direct Factory Wholesale Pricing',
      desc: 'By dealing directly with our Rohini converting plant, you bypass broker markups and trader commissions, cutting packaging procurement costs by 20% to 30%.',
      metric: 'Save 20–30% On Procurement'
    },
    {
      icon: Cpu,
      title: 'Zero-Jam Hardware Calibration',
      desc: 'Precision slit edges and micro-perforated gap sensors eliminate glue oozing that ruins thermal printheads in Zebra, TSC, Honeywell, and Godex printers.',
      metric: '0.01% Feed Jam Failure Rate'
    },
    {
      icon: TrendingUp,
      title: '10M+ Daily Converting Volume',
      desc: 'Our multi-shift rotary capacity and 30-day raw stock buffer ensure we absorb festive surges like Diwali Big Billion Days without delivery delays.',
      metric: '300% Peak Surge Scalability'
    },
    {
      icon: ShieldCheck,
      title: 'ANSI Grade A Optical Verification',
      desc: 'Every production lot is optically scanned using RJS barcode verifiers to guarantee 100% first-pass read rates on conveyor belt barcode scanners.',
      metric: '100% Scan First-Pass Rate'
    },
    {
      icon: Truck,
      title: 'PAN-India Express Corridors',
      desc: 'With dedicated dispatch fleets, we deliver in 24 hours across Delhi NCR and 48 hours to major distribution hubs in Mumbai, Bengaluru, Pune, and beyond.',
      metric: '99.4% On-Time In-Full (OTIF)'
    },
    {
      icon: Award,
      title: 'Free Technical Audits & Prototyping',
      desc: 'Our application specialists visit your facility, analyze your printer fleet, and formulate custom adhesive/ribbon pairings for your exact environment.',
      metric: 'Free Prototyping in 48 Hours'
    }
  ];

  const comparisonRows = [
    { feature: 'Pricing Structure', bd: 'Direct Factory Floor Rates (Zero Middlemen)', others: 'Trader / Distributor Markup (20–30% higher)' },
    { feature: 'Raw Material Quality', bd: 'Certified European & Avery Dennison Substrates', others: 'Unbranded mix-and-match scrap paper' },
    { feature: 'Printer Jam Protection', bd: 'Clean edge slitting; zero adhesive bleed', others: 'Rough knife cuts; gums up thermal printheads' },
    { feature: 'Barcode Scan Grading', bd: 'ANSI Grade A verified (4.0 read accuracy)', others: 'No scan verification before dispatch' },
    { feature: 'Festive Surge Buffer', bd: 'Dedicated 30-day jumbo roll raw stock reserve', others: 'Frequent stockouts during peak e-commerce demand' },
    { feature: 'Food Safety Compliance', bd: 'FSSAI & FDA certified virgin greaseproof pulp', others: 'Recycled pulp with chemical bleaching' },
  ];

  return (
    <div className="pt-24 bg-zinc-50 min-h-screen text-zinc-900">
      {/* 1. Cinematic Hero Banner */}
      <section ref={headerRef} className="relative bg-zinc-950 text-white py-20 lg:py-24 border-b border-zinc-800 overflow-hidden">
        <div className="absolute inset-0 technical-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-6">
            <button 
              onClick={() => onNavigatePage('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-[#FF4D00] font-bold">Why Choose Us</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-[#FF4D00] text-xs font-mono font-bold uppercase tracking-wider mb-5">
              <Award className="w-3.5 h-3.5" />
              <span>THE BDOUBLEU® ADVANTAGE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Why 500+ Enterprises <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] via-orange-500 to-amber-300">
                Rely on Barcode World.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl mb-8">
              Direct-manufacturer economics, zero-jam precision cutting, and 24–48h nationwide dispatch.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal('Enterprise Supply Contract')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white font-bold text-sm shadow-xl shadow-orange-500/30 transition-all cursor-pointer hover:scale-[1.02]"
              >
                <span>Request Enterprise Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigatePage('about')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-all cursor-pointer"
              >
                <span>About Our Plant</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The 6 Pillars of Differentiation */}
      <section ref={gridRef} className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF4D00] mb-2">
            CORE VALUE PROPOSITION
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Engineered Advantages That Drive ROI
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm hover:border-[#FF4D00]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF4D00] flex items-center justify-center font-bold border border-orange-100">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-950 tracking-tight">
                    {adv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {adv.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100">
                  <span className="inline-block px-3 py-1.5 rounded-lg bg-orange-500/10 text-[#FF4D00] font-mono text-xs font-bold border border-orange-500/20">
                    ★ {adv.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Direct Comparison Table */}
      <section className="py-20 bg-white border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF4D00] mb-2">
              HEAD-TO-HEAD BENCHMARK
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              BDOUBLEU® vs Traditional Middlemen
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-zinc-200 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-zinc-950 text-white font-mono">
                  <th className="p-4 sm:p-5">Manufacturing Criteria</th>
                  <th className="p-4 sm:p-5 text-[#FF4D00]">BDOUBLEU® / Barcode World</th>
                  <th className="p-4 sm:p-5 text-zinc-400">Typical Local Traders</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 bg-white">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-orange-50/40">
                    <td className="p-4 sm:p-5 font-bold text-zinc-900">{row.feature}</td>
                    <td className="p-4 sm:p-5 text-zinc-900 font-semibold flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#FF4D00] shrink-0" />
                      <span>{row.bd}</span>
                    </td>
                    <td className="p-4 sm:p-5 text-zinc-500">
                      {row.others}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA Strip */}
      <section className="py-16 bg-zinc-950 text-white border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 text-[#FF4D00] font-mono text-xs font-bold uppercase tracking-wider">
            SWITCH TO DIRECT MANUFACTURING
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto">
            Ready for Guaranteed Uptime on Your Production Floor?
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Send us your current roll specs or sample labels. We will analyze your material cost and provide a guaranteed lower wholesale quote within 2 business hours.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenQuoteModal('Cost Comparison Request')}
              className="px-8 py-4 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white font-bold text-sm shadow-xl shadow-orange-500/30 transition-all cursor-pointer hover:scale-[1.02]"
            >
              Get Free Cost Comparison
            </button>
            <a
              href="tel:+919811000000"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-sm border border-zinc-700 transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#FF4D00]" />
              <span>Talk to Sales: +91 98110 00000</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
