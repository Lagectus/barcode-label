import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Truck, 
  Printer, 
  Layers, 
  Cpu, 
  Sparkles, 
  Send, 
  CheckCircle2 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { products } from '../../data/productsData';

export default function ProductDetailPage({ 
  productId, 
  onNavigateHome, 
  onNavigateProduct, 
  onOpenQuoteModal 
}) {
  const [activeTab, setActiveTab] = useState('specs');
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    rolls: '500–1,000 Rolls',
    dimensions: '',
    city: 'Delhi NCR',
    message: '',
  });

  const bannerRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  // Find product by id or aliases, or fallback to first product
  const product = products.find((p) => p.id === productId || (p.aliases && p.aliases.includes(productId))) || products[0];

  // Related products from same category or next products
  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  // Alternate visual gallery images for the product
  const galleryImages = product.gallery && product.gallery.length > 0
    ? product.gallery
    : [product.image];

  useEffect(() => {
    setSelectedImageIdx(0);
  }, [productId]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bannerRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.2, ease: 'power3.out' }
      );
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.35, ease: 'power3.out', clearProps: 'transform' }
      );
    });

    return () => ctx.revert();
  }, [product.id]);

  const handleQuickQuoteSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
      confetti({
        particleCount: 65,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#FF4D00', '#FF7700', '#FFA07A', '#09090B'],
      });
    }, 600);
  };

  return (
    <div className="pt-24 bg-zinc-50 min-h-screen">
      {/* 1. Fully Animated Hero Banner */}
      <section
        ref={bannerRef}
        className="relative bg-zinc-950 text-white overflow-hidden py-16 lg:py-24 border-b border-zinc-800"
      >
        {/* Banner Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={product.banner || '/products/Barcode-labels/bg-banner.jpeg'}
            alt={`${product.name} Banner`}
            className="w-full h-full object-cover object-center"
          />
          {/* Left-Side Soft Black Overlay for Text Readability */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-[65%] lg:w-[50%] bg-gradient-to-r from-zinc-950/85 via-zinc-950/50 to-transparent pointer-events-none" />
        </div>

        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 mb-6 flex-wrap drop-shadow-sm">
            <button
              onClick={onNavigateHome}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span>/</span>
            <a
              href="#products"
              onClick={onNavigateHome}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Products Catalog
            </a>
            <span>/</span>
            <span className="text-[#FF4D00] font-bold truncate">
              {product.name}
            </span>
          </div>

          <div className="max-w-2xl">
            {/* Title & Key Selling Proposition */}
            <div ref={titleRef}>
              {/* Category & Status Eyebrow */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-950/70 border border-orange-500/40 text-[#FF4D00] text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4D00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4D00]"></span>
                </span>
                <span>{product.categoryName} • DIRECT FACTORY LINE</span>
              </div>

              {/* Main Product Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                {product.name}
              </h1>

              {/* Tagline */}
              <div className="text-base sm:text-lg font-semibold text-[#FF8533] mb-4 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                {product.tagline}
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-zinc-200 max-w-xl leading-relaxed mb-8 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                {product.description}
              </p>

              {/* Quick Spec Highlights */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 shadow-sm">
                  <Truck className="w-4 h-4 text-[#FF4D00]" />
                  <span>24–48h Dispatch</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-[#FF4D00]" />
                  <span>ANSI Grade A (4.0)</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 shadow-sm">
                  <Layers className="w-4 h-4 text-[#FF4D00]" />
                  <span>Custom Core 1" &amp; 3"</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenQuoteModal(product.name)}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white font-bold text-sm shadow-xl shadow-orange-500/30 transition-all cursor-pointer hover:scale-[1.02]"
                >
                  <span>Request Instant Factory Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onNavigateHome}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-900 text-white font-bold text-sm border border-zinc-700 shadow-md transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to All Products</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Product Details & Technical Deep Dive */}
      <section ref={contentRef} className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
            
            {/* Left Column: Visual Gallery & Built-In RFQ Form */}
            <div className="lg:col-span-6 space-y-8">
              {/* Main Product Image Container */}
              <div className="relative rounded-3xl overflow-hidden bg-zinc-100 border border-zinc-200 shadow-xl aspect-[4/3]">
                <img
                  src={galleryImages[selectedImageIdx]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-all duration-500"
                />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-zinc-900 font-mono text-xs font-bold tracking-wider uppercase shadow-md border border-zinc-200">
                    {product.categoryName}
                  </span>
                </div>

                {/* Bottom Bar */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10">
                  <span className="text-xs font-mono font-bold bg-zinc-950/80 px-3 py-1 rounded-lg border border-zinc-800">
                    {product.popular ? '★ HIGH DEMAND INDUSTRIAL ROLL' : 'CUSTOM MANUFACTURED'}
                  </span>
                  <span className="text-xs font-mono text-zinc-300">
                    Image {selectedImageIdx + 1} of {galleryImages.length}
                  </span>
                </div>
              </div>

              {/* Gallery Thumbnails */}
              <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIdx(idx)}
                    className={`relative w-24 h-20 rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
                      selectedImageIdx === idx
                        ? 'border-[#FF4D00] shadow-md shadow-orange-500/20 scale-105'
                        : 'border-zinc-200 opacity-70 hover:opacity-100 hover:border-zinc-300'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Fast On-Page RFQ Calculator / Quote Block */}
              <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-500/10 text-[#FF4D00] text-xs font-mono font-bold uppercase tracking-wider mb-3 border border-orange-500/20">
                  <Send className="w-3.5 h-3.5" />
                  <span>DIRECT ROLL INQUIRY</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 tracking-tight mb-2">
                  Request Quotation for {product.name}
                </h3>
                <p className="text-xs text-zinc-500 mb-5">
                  Receive an itemized factory wholesale proposal within 2 to 4 business hours.
                </p>

                {formSubmitted ? (
                  <div className="py-8 text-center space-y-3 bg-orange-50/70 rounded-2xl p-6 border border-orange-200">
                    <CheckCircle2 className="w-10 h-10 text-[#FF4D00] mx-auto" />
                    <h4 className="text-base font-bold text-zinc-900">RFQ Successfully Received!</h4>
                    <p className="text-xs text-zinc-600 max-w-sm mx-auto">
                      Our commercial team will contact you at <strong>{formData.phone}</strong> with wholesale rates within 2 to 4 business hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-bold text-[#FF4D00] hover:underline cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleQuickQuoteSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Ramesh Sharma"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-xs focus:border-[#FF4D00] focus:ring-2 focus:ring-orange-500/20 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 mb-1">Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-xs focus:border-[#FF4D00] focus:ring-2 focus:ring-orange-500/20 outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 mb-1">Estimated Quantity</label>
                        <select
                          value={formData.rolls}
                          onChange={(e) => setFormData({ ...formData, rolls: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-xs bg-white focus:border-[#FF4D00] focus:ring-2 focus:ring-orange-500/20 outline-none"
                        >
                          <option value="Sample Pack (Testing)">Sample Pack (Testing)</option>
                          <option value="100–500 Rolls">100–500 Rolls</option>
                          <option value="500–1,000 Rolls">500–1,000 Rolls</option>
                          <option value="1,000–5,000 Rolls">1,000–5,000 Rolls</option>
                          <option value="5,000+ Rolls (Bulk Contract)">5,000+ Rolls (Bulk Contract)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 mb-1">Required Size / Dimensions</label>
                        <input
                          type="text"
                          value={formData.dimensions}
                          onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                          placeholder="e.g. 50x25mm or 4x6 inch"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-xs focus:border-[#FF4D00] focus:ring-2 focus:ring-orange-500/20 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1">Delivery City</label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-xs bg-white focus:border-[#FF4D00] focus:ring-2 focus:ring-orange-500/20 outline-none"
                      >
                        <option value="Delhi NCR">Delhi NCR (Same Day / 24h)</option>
                        <option value="Mumbai">Mumbai / Maharashtra</option>
                        <option value="Bengaluru">Bengaluru / Karnataka</option>
                        <option value="Pune">Pune</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Other Location">Other PAN-India Destination</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={formLoading}
                      className="w-full py-3.5 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {formLoading ? <span>Processing RFQ...</span> : (
                        <>
                          <span>Submit Wholesale Proposal Request</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Tabbed Specification & Technical Data (Sticky Scroll with Left Column) */}
            <div className="lg:col-span-6 relative">
              <div className="lg:sticky lg:top-28 space-y-6">
                {/* Tabs Navigation */}
              <div className="flex items-center gap-2 border-b border-zinc-200 pb-2 overflow-x-auto scrollbar-none">
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === 'specs'
                      ? 'bg-[#FF4D00] text-white shadow-sm'
                      : 'bg-white text-zinc-600 hover:text-zinc-950 border border-zinc-200'
                  }`}
                >
                  Technical Specifications
                </button>
                <button
                  onClick={() => setActiveTab('features')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === 'features'
                      ? 'bg-[#FF4D00] text-white shadow-sm'
                      : 'bg-white text-zinc-600 hover:text-zinc-950 border border-zinc-200'
                  }`}
                >
                  Key Advantages
                </button>
                <button
                  onClick={() => setActiveTab('applications')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === 'applications'
                      ? 'bg-[#FF4D00] text-white shadow-sm'
                      : 'bg-white text-zinc-600 hover:text-zinc-950 border border-zinc-200'
                  }`}
                >
                  Industry Applications
                </button>
              </div>

              {/* Tab 1: Specifications */}
              {activeTab === 'specs' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm">
                    <h3 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-[#FF4D00]" />
                      <span>Engineering Parameters &amp; Material Specifications</span>
                    </h3>
                    <div className="divide-y divide-zinc-100">
                      {Object.entries(product.specifications).map(([key, val], idx) => (
                        <div key={idx} className="py-3 sm:py-3.5 flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm gap-1">
                          <span className="font-semibold text-zinc-500">{key}</span>
                          <span className="font-bold text-zinc-900 font-mono text-left sm:text-right">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Converting Notes */}
                  <div className="p-5 rounded-2xl bg-orange-50/80 border border-orange-200/90 text-xs text-orange-950 flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#FF4D00] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-bold">Rotary Die-Cut Flexibility:</strong>
                      <span>All rolls can be customized in terms of label gap (2mm/3mm), edge perforation, black eye-mark sensor lines, and core diameter (25mm / 40mm / 76mm).</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Features */}
              {activeTab === 'features' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm">
                    <h3 className="text-lg font-bold text-zinc-900 mb-5 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-[#FF4D00]" />
                      <span>Performance Advantages for Production Lines</span>
                    </h3>
                    <ul className="space-y-3.5">
                      {product.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-700">
                          <div className="w-5 h-5 rounded-full bg-orange-100 text-[#FF4D00] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Tab 3: Applications */}
              {activeTab === 'applications' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm">
                    <h3 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-[#FF4D00]" />
                      <span>Primary Indian Operating Sectors</span>
                    </h3>
                    <div className="flex flex-wrap gap-2.5 mb-6">
                      {product.applications.map((app, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 rounded-xl bg-orange-50 text-orange-950 border border-orange-200 text-xs sm:text-sm font-semibold"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      Engineered for high-volume retail POS, e-commerce dispatch, FMCG inventory, and cold-chain storage.
                    </p>
                  </div>
                </div>
              )}

              {/* Compatible Thermal Printers Section */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  <Printer className="w-4 h-4 text-[#FF4D00]" />
                  <span>HARDWARE &amp; DISPENSER COMPATIBILITY</span>
                </div>
                <h4 className="text-base font-bold text-zinc-900 mb-3">
                  Calibrated for Leading Industrial Thermal Printers
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 mb-4 leading-relaxed">
                  Our rolls are cut with clean edge slitting to guarantee smooth feed without gumming printheads on:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono font-bold text-zinc-800 text-center">
                  <div className="p-2.5 rounded-xl bg-zinc-100 border border-zinc-200">Zebra</div>
                  <div className="p-2.5 rounded-xl bg-zinc-100 border border-zinc-200">TSC Auto ID</div>
                  <div className="p-2.5 rounded-xl bg-zinc-100 border border-zinc-200">Honeywell</div>
                  <div className="p-2.5 rounded-xl bg-zinc-100 border border-zinc-200">Godex / TVS</div>
                </div>
              </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Related Production Lines Carousel / Grid */}
      <section className="py-16 bg-white border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF4D00] mb-1">
                COMPLEMENTARY CONVERTING LINES
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
                Explore Related Industrial Products
              </h3>
            </div>
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#FF4D00] hover:text-orange-700 cursor-pointer"
            >
              <span>View All 11+ Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onNavigateProduct(rel.id)}
                className="group relative flex flex-col justify-between bg-zinc-50 rounded-3xl border border-zinc-200 overflow-hidden cursor-pointer hover:border-[#FF4D00]/50 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden bg-zinc-950">
                  <img
                    src={rel.image}
                    alt={rel.name}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-white/95 text-zinc-900 font-mono text-[10px] font-bold uppercase shadow-sm">
                      {rel.categoryName}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-mono font-bold text-[#FF4D00] uppercase mb-1">
                      {rel.tagline}
                    </div>
                    <h4 className="text-lg font-bold text-zinc-900 group-hover:text-[#FF4D00] transition-colors">
                      {rel.name}
                    </h4>
                    <p className="text-xs text-zinc-600 mt-2 line-clamp-2 leading-relaxed">
                      {rel.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-zinc-200 flex items-center justify-between text-xs font-bold text-[#FF4D00]">
                    <span>View Product Page</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
