import React from 'react';
import BrandLogo from './BrandLogo';
import { Mail, Phone, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';
import { products } from '../../data/productsData';
import { targetLocations } from '../../data/locationsData';

export default function Footer({ onNavigateProduct, onNavigateHome, onNavigatePage }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (view) => {
    if (onNavigatePage) {
      onNavigatePage(view);
    } else if (onNavigateHome) {
      onNavigateHome(view);
    }
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 text-xs sm:text-sm border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Column 1: Brand & Statement */}
          <div className="lg:col-span-2 space-y-4">
            <div onClick={() => handleLink('home')} className="cursor-pointer inline-block">
              <BrandLogo light={true} />
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              BDOUBLEU (bw)® / Barcode World is India's leading industrial manufacturer of barcode labels, e-commerce waybill labels, direct thermal rolls, thermal transfer ribbons, and greaseproof food wrapping butter paper rolls.
            </p>
            <div className="flex items-center gap-3 pt-2 text-[11px] font-mono text-[#FF4D00]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> ISO 9001 Standard
              </span>
              <span>•</span>
              <span>FSSAI / FDA Food Grade</span>
            </div>
          </div>

          {/* Column 2: Key Products */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              MANUFACTURED PRODUCTS
            </h4>
            <ul className="space-y-2 text-xs">
              {products.slice(0, 6).map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => {
                      if (onNavigateProduct) {
                        onNavigateProduct(p.id);
                      }
                    }}
                    className="hover:text-[#FF4D00] transition-colors block truncate text-left cursor-pointer"
                  >
                    {p.name}
                  </button>
                </li>
              ))}
              <li>
                <button 
                  onClick={() => handleLink('products')} 
                  className="text-[#FF4D00] font-bold hover:underline cursor-pointer"
                >
                  View All 11+ Products →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Pan-India Delivery Corridors */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              SUPPLY LOCATIONS
            </h4>
            <ul className="space-y-2 text-xs">
              {targetLocations.slice(0, 6).map((loc) => (
                <li key={loc.city}>
                  <button 
                    onClick={() => handleLink('locations')} 
                    className="hover:text-[#FF4D00] transition-colors text-left cursor-pointer"
                  >
                    {loc.city} Supply Hub
                  </button>
                </li>
              ))}
              <li>
                <button 
                  onClick={() => handleLink('locations')} 
                  className="text-[#FF4D00] font-bold hover:underline cursor-pointer"
                >
                  All 10 Hubs →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Facility */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              FACTORY &amp; DESK
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF4D00] shrink-0 mt-0.5" />
                <span>Sector-16, Rohini, New Delhi - 110085, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF4D00] shrink-0" />
                <a href="tel:+919811000000" className="hover:text-white transition-colors">
                  +91 98110 00000
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF4D00] shrink-0" />
                <a href="mailto:sales@barcodesworld.in" className="hover:text-white transition-colors">
                  sales@barcodesworld.in
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} BDOUBLEU® / Barcode World. All Rights Reserved. Precision B2B Labelling &amp; Packaging Solutions.
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <button onClick={() => handleLink('home')} className="hover:text-zinc-300 transition-colors cursor-pointer">
              Home
            </button>
            <button onClick={() => handleLink('about')} className="hover:text-zinc-300 transition-colors cursor-pointer">
              About
            </button>
            <button onClick={() => handleLink('products')} className="hover:text-zinc-300 transition-colors cursor-pointer">
              Products
            </button>
            <button onClick={() => handleLink('industries')} className="hover:text-zinc-300 transition-colors cursor-pointer">
              Industries
            </button>
            <button onClick={() => handleLink('process')} className="hover:text-zinc-300 transition-colors cursor-pointer">
              Process
            </button>
            <button onClick={() => handleLink('why-us')} className="hover:text-zinc-300 transition-colors cursor-pointer">
              Why Us
            </button>
            <button onClick={() => handleLink('locations')} className="hover:text-zinc-300 transition-colors cursor-pointer">
              Locations
            </button>
            <button onClick={() => handleLink('contact')} className="hover:text-zinc-300 transition-colors cursor-pointer">
              Contact
            </button>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-[#FF4D00] text-white flex items-center justify-center transition-all cursor-pointer border border-zinc-800"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
