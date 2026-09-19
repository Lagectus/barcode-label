import React, { useState, useEffect } from 'react';
import Navbar from './components/common/Navbar';
import HeroSection from './components/home/HeroSection';
import TrustStrip from './components/home/TrustStrip';
import InteractiveStorySection from './components/home/InteractiveStorySection';
import StatsCounter from './components/home/StatsCounter';
import ProductCatalog from './components/home/ProductCatalog';
import CinematicShowcase from './components/home/CinematicShowcase';
import IndustryApplications from './components/home/IndustryApplications';
import ManufacturingTimeline from './components/home/ManufacturingTimeline';
import WhyChooseUs from './components/home/WhyChooseUs';
import ConversionCTA from './components/home/ConversionCTA';
import ContactSection from './components/home/ContactSection';
import Footer from './components/common/Footer';
import QuoteModal from './components/common/QuoteModal';
import FloatingActions from './components/common/FloatingActions';
import ProductDetailPage from './components/product/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import IndustriesPage from './pages/IndustriesPage';
import ProcessPage from './pages/ProcessPage';
import WhyUsPage from './pages/WhyUsPage';
import LocationsPage from './pages/LocationsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [currentProductId, setCurrentProductId] = useState('barcode-labels');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState('');

  // Synchronize routing with window.location.hash
  useEffect(() => {
    const handleHashRouting = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.startsWith('#/product/')) {
        const pId = hash.replace('#/product/', '').trim();
        if (pId) {
          setCurrentProductId(pId);
          setCurrentView('product');
          return;
        }
      }
      if (hash === '#/about' || hash === '#about') {
        setCurrentView('about');
        return;
      }
      if (hash === '#/products' || hash === '#products') {
        setCurrentView('products');
        return;
      }
      if (hash === '#/industries' || hash === '#industries') {
        setCurrentView('industries');
        return;
      }
      if (hash === '#/process' || hash === '#process') {
        setCurrentView('process');
        return;
      }
      if (hash === '#/why-us' || hash === '#why-us') {
        setCurrentView('why-us');
        return;
      }
      if (hash === '#/locations' || hash === '#locations') {
        setCurrentView('locations');
        return;
      }
      if (hash === '#/contact' || hash === '#contact') {
        setCurrentView('contact');
        return;
      }
      setCurrentView('home');
    };

    handleHashRouting();
    window.addEventListener('hashchange', handleHashRouting);
    return () => window.removeEventListener('hashchange', handleHashRouting);
  }, []);

  const handleNavigatePage = (view) => {
    setCurrentView(view);
    if (view === 'home') {
      window.location.hash = '#/';
    } else {
      window.location.hash = `#/${view}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateProduct = (productId) => {
    setCurrentProductId(productId);
    setCurrentView('product');
    window.location.hash = `#/product/${productId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (productName = '') => {
    setSelectedProductForQuote(productName);
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
    setSelectedProductForQuote('');
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-orange-100 selection:text-orange-950 flex flex-col font-sans">
      {/* 1. Sticky Navigation Bar with Full Dedicated Navlink Routing */}
      <Navbar 
        onOpenQuoteModal={handleOpenQuoteModal} 
        onNavigateProduct={handleNavigateProduct}
        onNavigatePage={handleNavigatePage}
        currentView={currentView}
      />

      <main className="flex-grow">
        {/* Dedicated Individual Product Detail Page */}
        {currentView === 'product' && (
          <ProductDetailPage
            productId={currentProductId}
            onNavigateHome={() => handleNavigatePage('home')}
            onNavigateProduct={handleNavigateProduct}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {/* Dedicated About Page */}
        {currentView === 'about' && (
          <AboutPage
            onOpenQuoteModal={handleOpenQuoteModal}
            onNavigatePage={handleNavigatePage}
          />
        )}

        {/* Dedicated Products Catalog Page */}
        {currentView === 'products' && (
          <ProductsPage
            onOpenQuoteModal={handleOpenQuoteModal}
            onNavigateProduct={handleNavigateProduct}
            onNavigatePage={handleNavigatePage}
          />
        )}

        {/* Dedicated Industry Solutions Page */}
        {currentView === 'industries' && (
          <IndustriesPage
            onOpenQuoteModal={handleOpenQuoteModal}
            onNavigateProduct={handleNavigateProduct}
            onNavigatePage={handleNavigatePage}
          />
        )}

        {/* Dedicated Manufacturing Process Page */}
        {currentView === 'process' && (
          <ProcessPage
            onOpenQuoteModal={handleOpenQuoteModal}
            onNavigatePage={handleNavigatePage}
          />
        )}

        {/* Dedicated Why Us Advantage Page */}
        {currentView === 'why-us' && (
          <WhyUsPage
            onOpenQuoteModal={handleOpenQuoteModal}
            onNavigatePage={handleNavigatePage}
          />
        )}

        {/* Dedicated Pan-India Locations Page */}
        {currentView === 'locations' && (
          <LocationsPage
            onOpenQuoteModal={handleOpenQuoteModal}
            onNavigatePage={handleNavigatePage}
          />
        )}

        {/* Dedicated Contact & Factory Desk Page */}
        {currentView === 'contact' && (
          <ContactPage
            onNavigatePage={handleNavigatePage}
          />
        )}

        {/* Full Cinematic Home View */}
        {currentView === 'home' && (
          <>
            {/* 2. Cinematic Hero with Fully Visible Background Image */}
            <HeroSection onOpenQuoteModal={handleOpenQuoteModal} />

            {/* 3. Brand & Manufacturing Trust Strip */}
            <TrustStrip />

            {/* 4. Interactive Pinned About Story (01-04) */}
            <InteractiveStorySection onOpenQuoteModal={handleOpenQuoteModal} />

            {/* 5. Company Statistics (0 -> Final Value GSAP Counters) */}
            <StatsCounter />

            {/* 6. Product Catalog & 11 Verified Product Lines */}
            <ProductCatalog 
              onOpenQuoteModal={handleOpenQuoteModal} 
              onNavigateProduct={handleNavigateProduct}
            />

            {/* 7. Cinematic Product Showcase Spotlight */}
            <CinematicShowcase 
              onOpenQuoteModal={handleOpenQuoteModal} 
              onNavigateProduct={handleNavigateProduct}
            />

            {/* 8. Industries & Applications */}
            <IndustryApplications onOpenQuoteModal={handleOpenQuoteModal} />

            {/* 9. Manufacturing Process Timeline (01-06) */}
            <ManufacturingTimeline onOpenQuoteModal={handleOpenQuoteModal} />

            {/* 10. Why Choose Us (Verified Core Values) */}
            <WhyChooseUs onOpenQuoteModal={handleOpenQuoteModal} />

            {/* 11. Bottom Conversion Call To Action Strip */}
            <ConversionCTA onOpenQuoteModal={handleOpenQuoteModal} />

            {/* 13. Interactive Contact Form with Validation & Confetti */}
            <ContactSection />
          </>
        )}
      </main>

      {/* 14. Premium Multi-Column Footer with Dedicated Navlink Routing */}
      <Footer 
        onNavigateProduct={handleNavigateProduct}
        onNavigatePage={handleNavigatePage}
      />

      {/* 15. Interactive Request-For-Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        initialProduct={selectedProductForQuote}
        onClose={handleCloseQuoteModal}
      />

      {/* 16. Floating Quick Actions (WhatsApp, RFQ, Back-To-Top) */}
      <FloatingActions onOpenQuoteModal={handleOpenQuoteModal} />
    </div>
  );
}
