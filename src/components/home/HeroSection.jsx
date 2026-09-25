import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const CAROUSEL_PRODUCTS = [
  {
    id: 'barcode-labels',
    name: 'Industrial Barcode Labels',
    image: '/products/Barcode-labels/bar-code-1.jpg',
    bgImage: '/products/bg-banner/Printed-labels.jpg',
  },
  {
    id: 'shipping-labels',
    name: 'Amazon & Flipkart Shipping Labels',
    image: '/products/Flipkart-Amazon-shipping-label/51-iGkEwLWL._AC_UF1000,1000_QL80_.jpg',
    bgImage: '/products/bg-banner/images.jpg',
  },
  {
    id: 'direct-thermal-labels',
    name: 'Direct Thermal Label Rolls',
    image: '/products/Direct-Thermal-Label/direct-thermal-labels.jpg',
    bgImage: '/products/bg-banner/images (1).jpg',
  },
  {
    id: 'colored-barcode',
    name: 'Polyester & Jewelry Labels',
    image: '/products/Barcode_Labels_Polyster_Jewellery/1.png',
    bgImage: '/products/Barcode_Labels_Polyster_Jewellery/bg-banner.jpeg',
  },
  {
    id: 'flipkart-waybills',
    name: 'Flipkart & Meesho Waybill Rolls',
    image: '/products/Flipkart-Amazon-shipping-label/1-500-flipktshippinglabelspack1-smartson-original-imah8hzxgzurfpgy.webp',
    bgImage: '/products/Flipkart-Amazon-shipping-label/bg-banner.jpeg',
  },
  {
    id: 'bulk-thermal-rolls',
    name: 'Direct Thermal Bulk Packs',
    image: '/products/Direct-Thermal-Label/Direct-Thermal-Label-Rolls.jpg',
    bgImage: '/products/Direct-Thermal-Label/BG-BANNER.jpeg',
  },
  {
    id: 'butter-paper',
    name: 'Food-Grade Butter Paper',
    image: '/products/butter-paper.jpg',
    bgImage: '/products/Butter-Paper-Rolls/bg-banner.jpeg',
  },
  {
    id: 'ribbons',
    name: 'Thermal Transfer Ribbons',
    image: '/products/Thermal-Transfer-Ribbon/1a.png',
    bgImage: '/products/bg-banner/label-ribbons.jpg',
  },
  {
    id: 'printers',
    name: 'Industrial Barcode Printers',
    image: '/products/Barcode-Printer/p1.png',
    bgImage: '/products/Barcode-Printer/bg-banner.jpeg',
  },
  {
    id: 'burger-paper',
    name: 'Food & Burger Wrapping Paper',
    image: '/products/Food_and_Burger_Rolls/b1.png',
    bgImage: '/products/Food_and_Burger_Rolls/bg-banner.jpeg',
  },
];

export default function HeroSection({ onOpenQuoteModal }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Dynamic Typewriter Animation
  const TYPING_PHRASES = [
    'Every Single Day.',
    'Dispatched in 24–48 Hours.',
    'Die-Cut to ±0.15mm.',
    '100% ANSI Grade A.',
  ];
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = TYPING_PHRASES[phraseIdx];
    let timeout;

    if (!isDeleting && typedText === fullText) {
      // Pause at end of phrase
      timeout = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && typedText === '') {
      // Switch to next phrase
      setIsDeleting(false);
      setPhraseIdx((prev) => (prev + 1) % TYPING_PHRASES.length);
    } else {
      const speed = isDeleting ? 40 : 90;
      timeout = setTimeout(() => {
        setTypedText(
          isDeleting
            ? fullText.substring(0, typedText.length - 1)
            : fullText.substring(0, typedText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, phraseIdx]);

  const heroRef = useRef(null);
  const leftColRef = useRef(null);
  const carouselWrapperRef = useRef(null);

  const total = CAROUSEL_PRODUCTS.length;

  // Infinite Next & Prev
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Autoplay functionality (every 4 seconds, pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  // Entrance animations using GSAP
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftColRef.current ? leftColRef.current.children : [],
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
      );

      if (carouselWrapperRef.current) {
        gsap.fromTo(
          carouselWrapperRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.9, delay: 0.3, ease: 'power3.out' }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Card dimensions
  const CARD_WIDTH = 210; // px
  const CARD_GAP = 16; // px
  const STEP = CARD_WIDTH + CARD_GAP;

  // Duplicated array to allow smooth circular display
  const displayProducts = [
    ...CAROUSEL_PRODUCTS,
    ...CAROUSEL_PRODUCTS,
    ...CAROUSEL_PRODUCTS,
  ];

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 bg-zinc-950 select-none"
    >
      {/* Dynamic Background Banner Images with Smooth Crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {CAROUSEL_PRODUCTS.map((prod, idx) => (
          <img
            key={prod.id}
            src={prod.bgImage}
            alt={`${prod.name} Banner`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-in-out ${
              idx === activeIndex
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105 pointer-events-none'
            }`}
          />
        ))}
        {/* Soft Left-Side Gradient Overlay for Content Readability */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-[65%] lg:w-[55%] bg-gradient-to-r from-zinc-950/95 via-zinc-950/75 to-transparent pointer-events-none z-10" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div ref={leftColRef} className="lg:col-span-6 xl:col-span-6 max-w-xl lg:self-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider uppercase text-zinc-300 mb-4 drop-shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#FF4D00] shrink-0" />
              <span>
                <strong className="font-black text-white">BARCODE WORLD</strong> · CERTIFIED MANUFACTURING · DIRECT FACTORY RATES
              </span>
            </div>

            {/* Main Headline with Real-time Typing Animation */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              <span className="block text-white">Ten Million</span>
              <span className="block text-white">Labels.</span>

              {/* Live Typing Text */}
              <div className="flex flex-wrap items-center mt-2 min-h-[50px] sm:min-h-[64px]">
                {/* Animated Typing Text with Blinking Cursor */}
                <span className="inline-flex items-center text-[#FF4D00]">
                  <span>{typedText}</span>
                  <span className="inline-block w-[3px] sm:w-[4px] h-[0.85em] bg-[#FF4D00] ml-1.5 animate-pulse" />
                </span>
              </div>
            </h1>

            {/* Subhead */}
            <p className="text-sm sm:text-base text-zinc-100 max-w-lg leading-relaxed mb-8 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              Barcode labels, thermal rolls, ribbons and food-grade butter paper — die-cut to ±0.15mm and dispatched PAN-India in 24–48 hours.
            </p>

            {/* CTA Buttons & Scroll Indicator Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                onClick={() => onOpenQuoteModal && onOpenQuoteModal()}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white font-bold text-sm sm:text-base shadow-xl shadow-orange-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Request Factory Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#products"
                className="inline-flex items-center px-6 py-3.5 rounded-xl bg-black/40 hover:bg-white/10 text-white font-bold text-sm sm:text-base border border-zinc-700 hover:border-zinc-500 backdrop-blur-md transition-all duration-200 cursor-pointer"
              >
                <span>Explore All Products</span>
              </a>

              {/* Scroll Indicator */}
              <div className="hidden sm:flex flex-col items-center gap-1 select-none pointer-events-none opacity-50 ml-2">
                <span className="text-[9px] font-mono tracking-widest text-zinc-400 font-bold">SCROLL</span>
                <div className="w-4 h-6 rounded-full border border-zinc-500 flex items-start justify-center p-0.5">
                  <div className="w-1 h-1.5 bg-zinc-300 rounded-full animate-bounce" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Infinite Carousel with Dynamic Background Sync */}
          <div
            ref={carouselWrapperRef}
            className="lg:col-span-6 xl:col-span-6 relative w-full lg:self-center mt-12 sm:mt-16 lg:mt-0 lg:pt-6 xl:pt-10 pb-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative flex items-center">
              
              {/* Left Arrow Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous Product"
                className="absolute -left-3 sm:-left-5 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-zinc-950/85 hover:bg-zinc-900 border border-zinc-700 hover:border-[#FF4D00] text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xl backdrop-blur-md cursor-pointer hover:scale-110 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Carousel Viewport */}
              <div className="w-full overflow-hidden px-1 py-4">
                <div
                  className="flex gap-4 transition-transform duration-700 ease-out will-change-transform"
                  style={{
                    transform: `translateX(-${activeIndex * STEP}px)`,
                  }}
                >
                  {displayProducts.map((product, idx) => {
                    const isCardActive = (idx % total) === activeIndex;
                    return (
                      <div
                        key={`${product.id}-${idx}`}
                        onClick={() => {
                          setActiveIndex(idx % total);
                          if (onOpenQuoteModal) onOpenQuoteModal(product.name);
                        }}
                        style={{ width: `${CARD_WIDTH}px` }}
                        className={`group/card relative shrink-0 h-[225px] sm:h-[235px] rounded-2xl backdrop-blur-md p-3.5 flex flex-col items-center justify-between text-center transition-all duration-300 cursor-pointer overflow-hidden ${
                          isCardActive
                            ? 'bg-white/[0.12] border-2 border-[#FF4D00] shadow-[0_0_25px_rgba(255,77,0,0.3)] scale-[1.03]'
                            : 'bg-white/[0.06] hover:bg-white/[0.10] border border-white/15 hover:border-zinc-400 shadow-xl shadow-black/80 opacity-85 hover:opacity-100'
                        }`}
                      >
                        {/* Product Image Stage */}
                        <div className="relative w-full h-[140px] rounded-xl bg-black/50 overflow-hidden flex items-center justify-center p-1 border border-white/5">
                          <img
                            src={product.image}
                            alt={product.name}
                            loading="lazy"
                            className="w-full h-full object-contain filter drop-shadow-lg group-hover/card:scale-105 transition-transform duration-300 pointer-events-none"
                          />
                        </div>

                        {/* Product Title */}
                        <p className={`text-xs sm:text-sm font-bold tracking-tight leading-snug px-1 line-clamp-2 transition-colors ${
                          isCardActive ? 'text-[#FF4D00]' : 'text-white group-hover/card:text-[#FF4D00]'
                        }`}>
                          {product.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Arrow Button */}
              <button
                onClick={handleNext}
                aria-label="Next Product"
                className="absolute -right-3 sm:-right-5 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-zinc-950/85 hover:bg-zinc-900 border border-zinc-700 hover:border-[#FF4D00] text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xl backdrop-blur-md cursor-pointer hover:scale-110 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Link: Explore 11+ Products */}
            <div className="flex items-center justify-start pl-2 mt-3">
              <a
                href="#products"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF4D00] hover:text-orange-400 transition-colors"
              >
                <span>Explore 11+ Products</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
