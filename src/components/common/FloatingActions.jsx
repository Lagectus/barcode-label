import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp, FileText } from 'lucide-react';

export default function FloatingActions({ onOpenQuoteModal }) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Quick Quote Pill Action */}
      <button
        onClick={() => onOpenQuoteModal()}
        className="pointer-events-auto flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FF4D00] text-white font-bold text-xs shadow-xl shadow-orange-500/30 border border-orange-400/30 hover:bg-[#E04400] transition-all duration-200 hover:scale-105 cursor-pointer group"
      >
        <FileText className="w-3.5 h-3.5 text-white" />
        <span>Quick RFQ</span>
      </button>

      {/* WhatsApp Quick Chat Action */}
      <a
        href="https://wa.me/919811000000?text=Hello%20BDOUBLEU%20Barcode%20World,%20I%20would%20like%20to%20inquire%20about%20barcode%20labels%20and%20rolls."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="pointer-events-auto w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg shadow-emerald-600/30 transition-all duration-200 hover:scale-110 cursor-pointer"
      >
        <MessageSquare className="w-6 h-6" />
      </a>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="pointer-events-auto w-10 h-10 rounded-full bg-white text-zinc-700 hover:text-[#FF4D00] hover:border-[#FF4D00] hover:bg-zinc-50 border border-zinc-200 shadow-md flex items-center justify-center transition-all duration-200 hover:scale-105 cursor-pointer animate-in fade-in zoom-in-75"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
