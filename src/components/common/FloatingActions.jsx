import React, { useState, useEffect } from 'react';
import { Phone, Mail, FileText, ArrowUp } from 'lucide-react';

export default function FloatingActions({ onOpenQuoteModal }) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside aria-label="Quick Actions" className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-2.5 pointer-events-none">
      {/* 1. Request Quote / RFQ Action */}
      <div className="relative flex items-center group pointer-events-auto">
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-zinc-900/95 text-white text-xs font-semibold whitespace-nowrap shadow-xl border border-zinc-700/50 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none hidden sm:block">
          Instant Price Quote
        </span>
        <button
          onClick={() => onOpenQuoteModal ? onOpenQuoteModal('Floating Action Bar') : null}
          aria-label="Request Instant Quote"
          className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FF4D00] to-orange-500 hover:from-[#E04400] hover:to-orange-600 text-white flex items-center justify-center shadow-lg shadow-orange-500/30 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:outline-none"
        >
          <FileText className="w-5 h-5" />
        </button>
      </div>

      {/* 2. Direct Call Action */}
      <div className="relative flex items-center group pointer-events-auto">
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-zinc-900/95 text-white text-xs font-semibold whitespace-nowrap shadow-xl border border-zinc-700/50 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none hidden sm:block">
          Call: +91 98110 00000
        </span>
        <a
          href="tel:+919811000000"
          aria-label="Call Sales Desk"
          className="w-12 h-12 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white flex items-center justify-center shadow-lg shadow-black/30 border border-zinc-700/50 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none"
        >
          <Phone className="w-5 h-5 text-orange-400" />
        </a>
      </div>

      {/* 3. Direct Email Action */}
      <div className="relative flex items-center group pointer-events-auto">
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-zinc-900/95 text-white text-xs font-semibold whitespace-nowrap shadow-xl border border-zinc-700/50 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none hidden sm:block">
          Email: sales@bdoubleu.com
        </span>
        <a
          href="mailto:sales@bdoubleu.com?subject=Inquiry%20for%20Barcode%20Labels%20and%20Ribbons"
          aria-label="Send Email Inquiry"
          className="w-12 h-12 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white flex items-center justify-center shadow-lg shadow-black/30 border border-zinc-700/50 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:outline-none"
        >
          <Mail className="w-5 h-5 text-blue-400" />
        </a>
      </div>

      {/* 4. WhatsApp Quick Chat Action (Primary Attention) */}
      <div className="relative flex items-center group pointer-events-auto">
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-zinc-900/95 text-white text-xs font-semibold whitespace-nowrap shadow-xl border border-zinc-700/50 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none hidden sm:block">
          Chat on WhatsApp
        </span>
        <a
          href="https://wa.me/919811000000?text=Hello%20BDOUBLEU%20Barcode%20World,%20I%20would%20like%20to%20inquire%20about%20barcode%20labels%20and%20rolls."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl shadow-[#25D366]/30 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:outline-none"
        >
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full animate-ping opacity-75" />
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.12-.519-1.821-.755-3.003-2.614-3.094-2.735-.09-.12-1.076-1.429-1.076-2.726 0-1.297.681-1.936.923-2.197.24-.262.527-.327.703-.327.175 0 .351.002.504.01.162.008.379-.061.593.452.22.527.747 1.825.813 1.959.066.134.11.291.02.469-.089.177-.133.288-.264.444-.132.155-.278.347-.397.466-.132.132-.27.275-.116.539.154.263.684 1.127 1.468 1.825 1.009.897 1.859 1.175 2.123 1.307.264.132.418.11.572-.066.155-.177.659-.768.835-1.033.176-.264.352-.22.593-.132.241.088 1.527.72 1.791.852.264.132.44.198.505.308.066.11.066.638-.078 1.043z" />
          </svg>
        </a>
      </div>

      {/* 5. Back to Top Button */}
      {showBackToTop && (
        <div className="relative flex items-center group pointer-events-auto animate-in fade-in zoom-in-75 duration-200">
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-zinc-900/95 text-white text-xs font-semibold whitespace-nowrap shadow-xl border border-zinc-700/50 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none hidden sm:block">
            Back to Top
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="w-10 h-10 rounded-full bg-white text-zinc-700 hover:text-[#FF4D00] hover:border-[#FF4D00] hover:bg-zinc-50 border border-zinc-200 shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      )}
    </aside>
  );
}
