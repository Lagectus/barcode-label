import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  ChevronDown, 
  Package, 
  Printer, 
  FileText, 
  Sparkles, 
  Layers, 
  Tag 
} from 'lucide-react';
import BrandLogo from './BrandLogo';

const featuredProductItems = [
  {
    id: 'barcode-labels',
    name: 'Barcode Labels Manufacturer in India',
    category: 'Chromo & Semi-Gloss',
    desc: 'High-density 1D/2D scan accuracy for inventory & logistics',
    icon: Tag,
    badge: 'HOT',
  },
  {
    id: 'shipping-labels',
    name: 'Flipkart / Amazon Shipping Labels',
    category: 'E-Commerce Marketplace',
    desc: '4x6" Waybill rolls & fanfolds for high-speed dispatch',
    icon: Package,
    badge: 'FLAGSHIP',
  },
  {
    id: 'direct-thermal-labels',
    name: 'Direct Thermal Label Manufacturer',
    category: 'Retail & POS',
    desc: 'Ribbon-free heat sensitive rolls for retail price & billing',
    icon: Layers,
    badge: 'FAST',
  },
  {
    id: 'mrp-labels',
    name: 'MRP Label Manufacturer in India',
    category: 'Compliance Packaging',
    desc: 'Pre-printed & blank regulatory batch & expiry pricing stickers',
    icon: Tag,
    badge: null,
  },
  {
    id: 'butter-paper-rolls',
    name: 'Butter Paper Rolls Manufacturer',
    category: 'Food Packaging',
    desc: '100% virgin pulp, FSSAI & FDA approved greaseproof sheets',
    icon: FileText,
    badge: 'SAFE',
  },
  {
    id: 'thermal-transfer-ribbons',
    name: 'Thermal Transfer Ribbon Manufacturer in India',
    category: 'Printing Consumables',
    desc: 'Wax, Wax-Resin & Full Resin formulations with silicone backcoating',
    icon: Printer,
    badge: 'POPULAR',
  },
  {
    id: 'polyester-jewelry-labels',
    name: 'Barcode Labels, Polyester & Jewelry Labels',
    category: 'Specialty Synthetic',
    desc: 'Weatherproof PET labels & non-sticky dumbbell tags',
    icon: Sparkles,
    badge: null,
  },
  {
    id: 'barcode-printers',
    name: 'Barcode Printer',
    category: 'Hardware Systems',
    desc: 'Industrial & desktop barcode printers (TSC, Zebra, Honeywell)',
    icon: Printer,
    badge: 'HARDWARE',
  },
  {
    id: 'food-wrapping-paper',
    name: 'Food and Burger Wrapping Paper Rolls',
    category: 'Food Packaging',
    desc: 'Oil-resistant barrier rolls & sheets for takeaway burgers',
    icon: FileText,
    badge: null,
  },
  {
    id: 'food-wrapping-butter-paper',
    name: 'Food Wrapping Butter Paper Manufacturer in India',
    category: 'Food Service',
    desc: 'Hygienic pure vegetable parchment sheets & rolls for bakeries',
    icon: FileText,
    badge: null,
  },
];

export default function Navbar({ 
  onOpenQuoteModal, 
  onNavigateProduct, 
  onNavigateHome,
  onNavigatePage,
  currentView = 'home' 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const navRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 180);
  };

  const navLinks = [
    { name: 'Home', view: 'home', href: '#/' },
    { name: 'About', view: 'about', href: '#/about' },
    { name: 'Products', view: 'products', href: '#/products', hasDropdown: true },
    { name: 'Contact', view: 'contact', href: '#/contact' },
  ];

  const handleNavLinkClick = (e, link) => {
    e.preventDefault();
    if (onNavigatePage) {
      onNavigatePage(link.view);
    } else if (onNavigateHome) {
      onNavigateHome(link.view);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar - Hidden on Mobile */}
      <div className={`hidden md:block transition-all duration-300 text-xs border-b ${
        isScrolled 
          ? 'h-0 opacity-0 overflow-hidden border-transparent' 
          : 'h-9 bg-zinc-950 text-zinc-300 border-zinc-800'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#FF4D00] font-bold tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF4D00]" /> Direct Industrial Manufacturer • BDOUBLEU®
            </span>
            <span className="text-zinc-700">|</span>
            <span className="text-zinc-400">
              Bulk Roll Supply: Barcode Labels • Thermal Ribbons • Butter Paper
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="tel:+919811000000" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3 h-3 text-[#FF4D00]" />
              <span>+91 98110 00000 / Sales Desk</span>
            </a>
            <span className="text-zinc-700">•</span>
            <a href="mailto:sales@barcodesworld.in" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3 h-3 text-[#FF4D00]" />
              <span>sales@barcodesworld.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        ref={navRef}
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md shadow-zinc-950/5 py-2.5 border-b border-zinc-200'
            : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-zinc-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official Brand Logo */}
          <a 
            href="#/" 
            onClick={(e) => {
              e.preventDefault();
              if (onNavigatePage) onNavigatePage('home');
              else if (onNavigateHome) onNavigateHome('hero');
            }}
            className="flex items-center focus:outline-none cursor-pointer"
          >
            <BrandLogo />
          </a>

          {/* Right Section: Desktop Navigation Links & Action CTA */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = currentView === link.view;

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative group py-2"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        onClick={() => {
                          if (onNavigatePage) onNavigatePage('products');
                          else if (onNavigateHome) onNavigateHome('products');
                        }}
                        className={`inline-flex items-center gap-1 text-sm font-semibold transition-colors cursor-pointer ${
                          isActive || dropdownOpen ? 'text-[#FF4D00] font-bold' : 'text-zinc-700 hover:text-[#FF4D00]'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-[#FF4D00]' : 'text-zinc-400'}`} />
                      </button>
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-[#FF4D00] transition-all duration-300 ${isActive || dropdownOpen ? 'w-full' : 'w-0 group-hover:w-full'}`} />

                      {/* Mega Dropdown Panel */}
                      {dropdownOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-[65%] xl:-translate-x-[62%] pt-2 w-[760px] xl:w-[780px] animate-in fade-in zoom-in-95 duration-200 z-50">
                          <div className="bg-white rounded-2xl shadow-2xl border border-zinc-200 p-5 overflow-hidden">
                            {/* Dropdown Header */}
                            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-zinc-100">
                              <div>
                                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF4D00]">
                                  DIRECT CONVERTING FACILITY
                                </div>
                                <h4 className="text-sm font-bold text-zinc-900 mt-0.5">
                                  Complete Product Range (10 Production Lines)
                                </h4>
                              </div>
                              <span className="text-xs text-zinc-600 font-mono font-semibold bg-orange-50 text-[#FF4D00] border border-orange-200/60 px-2.5 py-1 rounded-md">
                                10 Active Lines
                              </span>
                            </div>

                            {/* 2-Column Product Grid (10 Products: 5 Left, 5 Right) */}
                            <div className="grid grid-cols-2 gap-2">
                              {featuredProductItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                  <button
                                    key={item.id}
                                    onClick={() => {
                                      setDropdownOpen(false);
                                      if (onNavigateProduct) {
                                        onNavigateProduct(item.id);
                                      }
                                    }}
                                    className="group/item flex items-center text-left gap-3 p-2.5 rounded-xl hover:bg-orange-50/80 border border-transparent hover:border-orange-200 transition-all duration-200 cursor-pointer w-full"
                                  >
                                    <div className="w-9 h-9 rounded-lg bg-zinc-100 text-zinc-700 group-hover/item:bg-[#FF4D00] group-hover/item:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                                      <Icon className="w-4.5 h-4.5" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <div className="flex items-center gap-1.5">
                                        <span className="text-xs font-bold text-zinc-900 group-hover/item:text-[#FF4D00] transition-colors truncate">
                                          {item.name}
                                        </span>
                                        {item.badge && (
                                          <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-extrabold uppercase bg-orange-100 text-[#FF4D00] shrink-0">
                                            {item.badge}
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-[11px] text-zinc-500 leading-tight mt-0.5 line-clamp-1 group-hover/item:text-zinc-600">
                                        {item.desc}
                                      </p>
                                    </div>
                                  </button>
                                );
                              })}
                            </div>

                            {/* Dropdown Footer CTA */}
                            <div className="mt-3.5 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs bg-zinc-50/70 -mx-5 -mb-5 p-3.5 px-5">
                              <span className="text-zinc-500">Need custom roll dimensions or bespoke core sizes?</span>
                              <div className="flex items-center gap-3">
                                <button
                                  onClick={() => {
                                    setDropdownOpen(false);
                                    if (onNavigatePage) onNavigatePage('products');
                                    else if (onNavigateHome) onNavigateHome('products');
                                  }}
                                  className="font-bold text-zinc-800 hover:text-[#FF4D00] transition-colors cursor-pointer"
                                >
                                  View Catalog
                                </button>
                                <span className="text-zinc-300">•</span>
                                <button
                                  onClick={() => {
                                    setDropdownOpen(false);
                                    onOpenQuoteModal('Custom Barcode & Packaging Specification');
                                  }}
                                  className="inline-flex items-center gap-1 text-[#FF4D00] font-bold hover:text-orange-700 cursor-pointer"
                                >
                                  <span>Get Instant Quote</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavLinkClick(e, link)}
                    className={`text-sm font-semibold transition-colors relative group py-1 cursor-pointer ${
                      isActive ? 'text-[#FF4D00] font-bold' : 'text-zinc-700 hover:text-[#FF4D00]'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-[#FF4D00] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </a>
                );
              })}
            </div>

            {/* Action CTA Button */}
            <button
              onClick={() => onOpenQuoteModal()}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white text-sm font-bold shadow-md shadow-orange-500/30 transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/40 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal()}
              className="sm:hidden px-3 py-1.5 rounded-xl bg-[#FF4D00] text-white text-xs font-bold shadow-xs cursor-pointer"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-zinc-700 hover:bg-zinc-100 focus:outline-none transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-zinc-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="py-1">
                      <button
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-base font-semibold text-zinc-800 hover:text-[#FF4D00] hover:bg-orange-50/60 transition-colors"
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180 text-[#FF4D00]' : 'text-zinc-400'}`} />
                      </button>

                      {/* Mobile Products Accordion */}
                      {mobileDropdownOpen && (
                        <div className="pl-3 pr-1 py-2 space-y-1 bg-zinc-50 rounded-xl my-1 border border-zinc-150 max-h-72 overflow-y-auto">
                          {featuredProductItems.map((item) => (
                            <button
                              key={item.id}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileDropdownOpen(false);
                                if (onNavigateProduct) {
                                  onNavigateProduct(item.id);
                                }
                              }}
                              className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-zinc-700 hover:text-[#FF4D00] hover:bg-white transition-colors text-left cursor-pointer"
                            >
                              <span className="truncate pr-2">{item.name}</span>
                              {item.badge ? (
                                <span className="px-1.5 py-0.2 rounded text-[8px] font-mono font-bold uppercase bg-orange-100 text-[#FF4D00] shrink-0">
                                  {item.badge}
                                </span>
                              ) : (
                                <ArrowRight className="w-3 h-3 text-zinc-400 shrink-0" />
                              )}
                            </button>
                          ))}
                          <div className="pt-2 border-t border-zinc-200/80 px-3">
                            <button
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileDropdownOpen(false);
                                if (onNavigatePage) onNavigatePage('products');
                                else if (onNavigateHome) onNavigateHome('products');
                              }}
                              className="text-xs font-bold text-[#FF4D00] flex items-center gap-1 cursor-pointer py-1"
                            >
                              <span>View All 10 Products Catalog</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                const isActive = currentView === link.view;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleNavLinkClick(e, link);
                    }}
                    className={`px-3 py-2 rounded-xl text-base font-semibold transition-colors ${
                      isActive 
                        ? 'bg-orange-50 text-[#FF4D00] font-bold' 
                        : 'text-zinc-800 hover:text-[#FF4D00] hover:bg-orange-50/60'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              <div className="pt-4 border-t border-zinc-100 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FF4D00] text-white font-bold text-sm shadow-md shadow-orange-500/25 cursor-pointer"
                >
                  <span>Get an Instant Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-xs text-center text-zinc-500 pt-1">
                  Direct Factory Desk: <a href="tel:+919811000000" className="text-[#FF4D00] font-bold">+91 98110 00000</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
