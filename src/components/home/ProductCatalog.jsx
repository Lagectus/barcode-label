import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { products, productCategories } from '../../data/productsData';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import { Search, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ProductCatalog({ onOpenQuoteModal, onNavigateProduct }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const catalogRef = useRef(null);
  const gridRef = useRef(null);

  // Filter products based on category and search query
  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered card entry animation
      gsap.fromTo(
        '.product-card-item',
        { opacity: 0, y: 30, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
          },
        }
      );
    }, catalogRef);

    return () => ctx.revert();
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="products"
      ref={catalogRef}
      className="py-24 bg-zinc-50 relative border-b border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-[#FF4D00] text-xs font-mono font-bold uppercase tracking-wider mb-3 border border-orange-500/20 shadow-xs">
              <Layers className="w-3.5 h-3.5" />
              <span>PRECISION PRODUCT CATALOG</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight">
              Industrial Labelling &amp; Packaging Range
            </h2>
            <p className="mt-3 text-zinc-600 max-w-2xl text-sm sm:text-base">
              Engineered for high-throughput automated fulfillment, retail POS, food safety, and harsh manufacturing environments across India.
            </p>
          </div>

          {/* Live Search Input */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search labels, ribbons, butter paper..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-zinc-200 text-xs sm:text-sm text-zinc-800 placeholder-zinc-400 focus:border-[#FF4D00] focus:ring-2 focus:ring-orange-500/20 outline-none transition-all shadow-xs"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {productCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === category.id
                  ? 'bg-[#FF4D00] text-white shadow-md shadow-orange-500/30'
                  : 'bg-white text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 border border-zinc-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card-item">
              <ProductCard
                product={product}
                onViewDetails={(p) => {
                  if (onNavigateProduct) {
                    onNavigateProduct(p.id);
                  } else {
                    setActiveModalProduct(p);
                  }
                }}
                onGetQuote={(pName) => onOpenQuoteModal(pName)}
              />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-16 text-center bg-white rounded-3xl border border-zinc-200 p-8">
            <p className="text-base text-zinc-600 font-medium">
              No products found matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-5 py-2.5 rounded-xl bg-[#FF4D00] text-white text-xs font-bold shadow-sm hover:bg-[#E04400] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Custom Manufacturing Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-zinc-950 text-white border border-zinc-800 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF4D00]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF4D00] bg-orange-500/15 border border-orange-500/30 px-3 py-1 rounded-md">
              CUSTOM CONVERTING &amp; DIE-MAKING
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3 tracking-tight">
              Require Bespoke Roll Diameters, Pre-Printing, or Custom Adhesives?
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
              We manufacture customized rotary die-cuts, multi-color company branding, cold-storage deep-freeze adhesives, and non-standard core sizes (25mm, 40mm, 76mm) for high-volume enterprise orders.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal('Custom Sizing & Converting')}
            className="relative z-10 whitespace-nowrap px-7 py-3.5 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white text-xs sm:text-sm font-bold shadow-lg shadow-orange-500/30 transition-all hover:scale-[1.02] cursor-pointer"
          >
            Request Custom Specification
          </button>
        </div>
      </div>

      {/* Product Spec Modal */}
      {activeModalProduct && (
        <ProductModal
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
          onOpenQuoteModal={onOpenQuoteModal}
        />
      )}
    </section>
  );
}
