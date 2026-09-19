import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  Search, 
  ArrowRight, 
  Check, 
  Package
} from 'lucide-react';
import { products, productCategories } from '../data/productsData';

export default function ProductsPage({ onOpenQuoteModal, onNavigateProduct, onNavigatePage }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
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

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 bg-zinc-50 min-h-screen text-zinc-900">
      {/* 1. Cinematic Hero Banner */}
      <section ref={headerRef} className="relative bg-zinc-950 text-white py-20 lg:py-24 border-b border-zinc-800 overflow-hidden">
        <img
          src="/products/Barcode-labels/bg-banner.jpeg"
          alt="Industrial Products Catalog Banner"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
        {/* Left-Side Soft Black Overlay for Text Readability */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-[65%] lg:w-[50%] bg-gradient-to-r from-zinc-950/85 via-zinc-950/50 to-transparent pointer-events-none" />

        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 mb-6 drop-shadow-sm">
            <button 
              onClick={() => onNavigatePage('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-[#FF4D00] font-bold">Industrial Product Catalog</span>
          </div>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-[#FF4D00] text-xs font-mono font-bold uppercase tracking-wider mb-5">
              <Package className="w-3.5 h-3.5" />
              <span>11+ DIRECT CONVERTING LINES • WHOLESALE FACTORY SUPPLY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Industrial Barcode Labels &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] via-orange-500 to-amber-300">
                Packaging Consumables.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8">
              Explore our complete factory catalog of high-density barcode labels, Amazon/Flipkart shipping waybills, thermal ribbons, greaseproof butter paper rolls, and specialty synthetic labels.
            </p>

            {/* Quick Specs Ticker */}
            <div className="flex flex-wrap gap-3 text-xs font-mono text-zinc-300">
              <span className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                ✓ 100% Zero-Jam Guarantee
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                ✓ Custom Cores (1", 3")
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                ✓ 24–48h PAN-India Dispatch
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Filter & Search Controls */}
      <section className="sticky top-16 sm:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-zinc-200 py-4 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {productCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#FF4D00] text-white shadow-md shadow-orange-500/20'
                      : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200 border border-zinc-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px] sm:min-w-[280px]">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, sizes, specs..."
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-zinc-200 text-xs sm:text-sm bg-white focus:border-[#FF4D00] focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-400 hover:text-zinc-700 cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Product Grid */}
      <section ref={gridRef} className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-950">
              Showing {filteredProducts.length} Industrial Products
            </h2>
            <p className="text-xs text-zinc-500 mt-0.5">
              Click any product to view full technical specifications, die-cut details &amp; instant RFQ.
            </p>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-3xl border border-zinc-200 p-8">
            <Package className="w-12 h-12 text-zinc-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-zinc-900">No products match your search criteria</h3>
            <p className="text-xs text-zinc-500 mt-1 max-w-sm mx-auto">
              Try adjusting your search terms or select another product category.
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#FF4D00] text-white text-xs font-bold cursor-pointer hover:bg-[#E04400]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="group relative flex flex-col justify-between bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-sm hover:border-[#FF4D00]/50 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image Section */}
                <div 
                  onClick={() => onNavigateProduct(p.id)}
                  className="relative h-56 overflow-hidden bg-zinc-100 cursor-pointer"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-100"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-white/95 text-zinc-900 font-mono text-[10px] font-bold uppercase shadow-sm">
                      {p.categoryName}
                    </span>
                    {p.popular && (
                      <span className="px-2.5 py-1 rounded-full bg-[#FF4D00] text-white font-mono text-[10px] font-bold uppercase shadow-sm">
                        ★ TOP CONVERTING
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-[11px] font-mono font-bold text-[#FF4D00] uppercase tracking-wider mb-1">
                      {p.tagline}
                    </div>
                    <h3 
                      onClick={() => onNavigateProduct(p.id)}
                      className="text-lg font-bold text-zinc-900 group-hover:text-[#FF4D00] transition-colors cursor-pointer"
                    >
                      {p.name}
                    </h3>
                    <p className="text-xs text-zinc-600 mt-2 line-clamp-2 leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  {/* Feature Highlights */}
                  <div className="pt-2 border-t border-zinc-100 space-y-1.5">
                    {p.features.slice(0, 2).map((f, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-[11px] text-zinc-600">
                        <Check className="w-3.5 h-3.5 text-[#FF4D00] shrink-0" />
                        <span className="truncate">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-zinc-100 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onNavigateProduct(p.id)}
                      className="py-2.5 px-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <span>Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onOpenQuoteModal(p.name)}
                      className="py-2.5 px-3 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white font-bold text-xs shadow-sm shadow-orange-500/20 transition-all cursor-pointer text-center"
                    >
                      Quick RFQ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. Substrate Comparison Table */}
      <section className="py-20 bg-white border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF4D00] mb-2">
              TECHNICAL GUIDE
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Label Material Selection Matrix
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 mt-2">
              Compare printing methods, durability ratings, and recommended enterprise environments.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-zinc-200 shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-zinc-950 text-white font-mono">
                  <th className="p-4 sm:p-5">Material Substrate</th>
                  <th className="p-4 sm:p-5">Printing Technology</th>
                  <th className="p-4 sm:p-5">Ribbon Required</th>
                  <th className="p-4 sm:p-5">Durability / Life</th>
                  <th className="p-4 sm:p-5">Primary Use Case</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 bg-white text-zinc-700">
                <tr className="hover:bg-orange-50/50">
                  <td className="p-4 sm:p-5 font-bold text-zinc-900">Direct Thermal (Top-Coated)</td>
                  <td className="p-4 sm:p-5">Direct Thermal Printhead</td>
                  <td className="p-4 sm:p-5 text-zinc-500 font-mono">None (Heat-Activated)</td>
                  <td className="p-4 sm:p-5">6–12 Months (Indoor)</td>
                  <td className="p-4 sm:p-5">Amazon &amp; Flipkart Waybills, Logistics, Retail MRP</td>
                </tr>
                <tr className="hover:bg-orange-50/50">
                  <td className="p-4 sm:p-5 font-bold text-zinc-900">Chromo / Semi-Gloss Paper</td>
                  <td className="p-4 sm:p-5">Thermal Transfer</td>
                  <td className="p-4 sm:p-5 text-[#FF4D00] font-bold">Wax / Wax-Resin Ribbon</td>
                  <td className="p-4 sm:p-5">2–5 Years (High Contrast)</td>
                  <td className="p-4 sm:p-5">Inventory Barcodes, Carton Tracking, Warehouse Bins</td>
                </tr>
                <tr className="hover:bg-orange-50/50">
                  <td className="p-4 sm:p-5 font-bold text-zinc-900">Silver / White Polyester (PET)</td>
                  <td className="p-4 sm:p-5">Thermal Transfer</td>
                  <td className="p-4 sm:p-5 text-[#FF4D00] font-bold">Pure Resin Ribbon</td>
                  <td className="p-4 sm:p-5">5–10+ Years (Extreme Heat/Oil)</td>
                  <td className="p-4 sm:p-5">Electronics Serial Plates, Automotive Components, Jewelry</td>
                </tr>
                <tr className="hover:bg-orange-50/50">
                  <td className="p-4 sm:p-5 font-bold text-zinc-900">Virgin Butter Paper (Greaseproof)</td>
                  <td className="p-4 sm:p-5">UV Flexographic / Plain</td>
                  <td className="p-4 sm:p-5 text-zinc-500 font-mono">None (Food Wrapping)</td>
                  <td className="p-4 sm:p-5">FSSAI / FDA Certified</td>
                  <td className="p-4 sm:p-5">Burger Wrapping, Bakery Sheets, Cloud Kitchens</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Custom Prototyping CTA */}
      <section className="py-16 bg-zinc-950 text-white border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 text-[#FF4D00] font-mono text-xs font-bold uppercase tracking-wider">
            NEED A BESPOKE SIZE OR PRE-PRINTED ROLL?
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto">
            We Manufacture Custom Die-Cut Sizes in Any Dimension
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Specify your roll outer diameter, inner core (25mm / 40mm / 76mm), pre-printed logo layout, or specialized adhesive. We provide free prototypes within 24–48 hours.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenQuoteModal('Custom Prototyping RFQ')}
              className="px-8 py-4 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white font-bold text-sm shadow-xl shadow-orange-500/30 transition-all cursor-pointer hover:scale-[1.02]"
            >
              Request Custom Prototyping
            </button>
            <button
              onClick={() => onNavigatePage('contact')}
              className="px-7 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-sm border border-zinc-700 transition-all cursor-pointer"
            >
              Contact Engineering Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
