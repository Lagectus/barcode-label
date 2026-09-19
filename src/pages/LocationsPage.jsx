import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  MapPin, 
  Truck, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Phone
} from 'lucide-react';
import { targetLocations } from '../data/locationsData';

export default function LocationsPage({ onOpenQuoteModal, onNavigatePage }) {
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
            <span className="text-[#FF4D00] font-bold">PAN-India Supply Hubs</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-[#FF4D00] text-xs font-mono font-bold uppercase tracking-wider mb-5">
              <Truck className="w-3.5 h-3.5" />
              <span>GUARANTEED 24–48 HOUR DISPATCH INFRASTRUCTURE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
              PAN-India Distribution &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] via-orange-500 to-amber-300">
                Supply Corridors.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl mb-8">
              Manufactured in New Delhi and supplied directly to fulfillment centers, plants, and warehouses across India.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal('PAN-India Logistics Inquiry')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white font-bold text-sm shadow-xl shadow-orange-500/30 transition-all cursor-pointer hover:scale-[1.02]"
              >
                <span>Check Delivery to Your Pincode</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigatePage('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-all cursor-pointer"
              >
                <span>Contact Logistics Desk</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Manufacturing Base Card */}
      <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FF4D00] uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>PRIMARY FACTORY &amp; DISPATCH HEADQUARTERS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950">
              Rohini Industrial Cluster, New Delhi
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-3xl">
              Sector-16, Rohini, New Delhi - 110085. Operating round-the-clock converting lines with direct access to Western Peripheral Expressway (KMP), Kundli, Sonipat, and major national transit hubs.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-zinc-700">
              <span className="flex items-center gap-1.5 font-bold text-[#FF4D00]">
                <Clock className="w-3.5 h-3.5" /> Same-Day Delhi NCR Dispatch
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-bold text-zinc-900">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF4D00]" /> 10M+ Daily Roll Capacity
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <button
              onClick={() => onOpenQuoteModal('Delhi NCR Immediate Delivery')}
              className="w-full py-3.5 px-5 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white font-bold text-xs shadow-md shadow-orange-500/20 transition-all cursor-pointer text-center"
            >
              Order Delhi NCR Same-Day Dispatch
            </button>
            <a
              href="tel:+919811000000"
              className="w-full py-3 px-5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-xs transition-all text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF4D00]" />
              <span>+91 98110 00000</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. The 10 Target Delivery Hubs */}
      <section ref={gridRef} className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF4D00] mb-2">
            REGIONAL SUPPLY CORRIDORS
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Key Industrial Transit Hubs
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 mt-2">
            Dedicated freight agreements guarantee scheduled replenishment to these industrial clusters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {targetLocations.map((loc, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-zinc-200 shadow-sm hover:border-[#FF4D00]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#FF4D00]" />
                    <h3 className="text-xl font-bold text-zinc-950">
                      {loc.city}
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-orange-50 text-[#FF4D00] font-mono text-[10px] font-bold">
                    {loc.deliveryTime}
                  </span>
                </div>

                <div className="text-xs font-mono text-zinc-500">
                  {loc.state} • {loc.hubType}
                </div>

                <p className="text-xs text-zinc-600 leading-relaxed">
                  {loc.description}
                </p>

                <div className="pt-3 border-t border-zinc-100">
                  <span className="text-[11px] font-bold text-zinc-800 block mb-1.5">
                    Target Industrial Sectors:
                  </span>
                  <p className="text-[11px] text-zinc-500 leading-normal">
                    {loc.keySectors}
                  </p>
                </div>

                <div className="pt-2 border-t border-zinc-100">
                  <span className="text-[11px] font-bold text-zinc-800 block mb-1.5">
                    High Demand Converting Lines:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {loc.featuredProducts.map((fp, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 text-[10px] font-mono"
                      >
                        {fp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-100">
                <button
                  onClick={() => onOpenQuoteModal(`${loc.city} Freight Quote`)}
                  className="w-full py-2.5 rounded-xl bg-orange-50 hover:bg-[#FF4D00] text-[#FF4D00] hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Request {loc.city} Delivery Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bottom CTA Strip */}
      <section className="py-16 bg-zinc-950 text-white border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 text-[#FF4D00] font-mono text-xs font-bold uppercase tracking-wider">
            OUTSIDE MAJOR HUBS?
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto">
            We Deliver to Every Industrial Pincode in India
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Partnered with leading cargo logistics carriers (TCI, V-Trans, SafeXpress, BlueDart) to deliver full truckloads and pallet consignments securely.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenQuoteModal('Pan-India Logistics RFQ')}
              className="px-8 py-4 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white font-bold text-sm shadow-xl shadow-orange-500/30 transition-all cursor-pointer hover:scale-[1.02]"
            >
              Get Delivery Estimate
            </button>
            <button
              onClick={() => onNavigatePage('contact')}
              className="px-7 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-sm border border-zinc-700 transition-all cursor-pointer"
            >
              Contact Dispatch Office
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
