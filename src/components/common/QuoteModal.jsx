import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { products } from '../../data/productsData';

export default function QuoteModal({ isOpen, initialProduct = '', onClose }) {
  const [productName, setProductName] = useState(initialProduct || 'Barcode Labels');
  const [quantity, setQuantity] = useState('500–1,000 Rolls');
  const [dimensions, setDimensions] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Delhi NCR');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim()) {
      setError('Please provide your name, phone number, and work email.');
      return;
    }

    setError('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 65,
        origin: { y: 0.6 },
        colors: ['#FF4D00', '#FF7700', '#FFA07A', '#09090B'],
      });
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-zinc-200 animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="p-6 bg-zinc-950 text-white flex items-center justify-between border-b border-zinc-800">
          <div>
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF4D00]">
              DIRECT FACTORY QUOTATION
            </div>
            <h3 className="text-xl font-bold tracking-tight mt-0.5">
              Request B2B Wholesale Pricing
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-zinc-800"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-8 text-center space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-orange-100 text-[#FF4D00] flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-bold text-zinc-900">
                Quotation Request Received!
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 max-w-sm mx-auto leading-relaxed">
                Our commercial team will prepare an itemized quote for <strong>{productName}</strong> and contact you at <strong>{phone}</strong> within 2 to 4 business hours.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                  {error}
                </div>
              )}

              {/* Product Selection */}
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">
                  Product Category
                </label>
                <select
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-xs sm:text-sm bg-white focus:border-[#FF4D00] focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                >
                  {products.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                  <option value="Custom Size Die-Cut Rolls">Custom Size Die-Cut Rolls</option>
                  <option value="Full Facility Supply Contract">Full Facility Supply Contract</option>
                </select>
              </div>

              {/* Estimated Quantity & Dimensions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Estimated Quantity
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-xs sm:text-sm bg-white focus:border-[#FF4D00] focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                  >
                    <option value="Sample Pack (Testing)">Sample Pack (Testing)</option>
                    <option value="100–500 Rolls">100–500 Rolls</option>
                    <option value="500–1,000 Rolls">500–1,000 Rolls</option>
                    <option value="1,000–5,000 Rolls">1,000–5,000 Rolls</option>
                    <option value="5,000+ Rolls (Bulk Contract)">5,000+ Rolls (Bulk Contract)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Label Size / Core Size
                  </label>
                  <input
                    type="text"
                    value={dimensions}
                    onChange={(e) => setDimensions(e.target.value)}
                    placeholder="e.g. 50x25mm / 1 inch core"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-xs sm:text-sm focus:border-[#FF4D00] focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-xs sm:text-sm focus:border-[#FF4D00] focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-xs sm:text-sm focus:border-[#FF4D00] focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-xs sm:text-sm focus:border-[#FF4D00] focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Delivery City
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-xs sm:text-sm bg-white focus:border-[#FF4D00] focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                  >
                    <option value="Delhi NCR">Delhi NCR (Same Day / 24h)</option>
                    <option value="Mumbai">Mumbai / Thane / Bhiwandi</option>
                    <option value="Bengaluru">Bengaluru / Karnataka</option>
                    <option value="Pune">Pune / Maharashtra</option>
                    <option value="Hyderabad">Hyderabad / Telangana</option>
                    <option value="Jaipur">Jaipur / Rajasthan</option>
                    <option value="Indore">Indore / MP</option>
                    <option value="Baddi">Baddi / Himachal Pradesh</option>
                    <option value="Other Location">Other PAN-India Hub</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-4 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white font-bold text-sm shadow-lg shadow-orange-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 hover:shadow-orange-500/40"
              >
                {loading ? (
                  <span>Generating Quote...</span>
                ) : (
                  <>
                    <span>Generate Instant Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-400">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF4D00]" />
                <span>100% Direct Factory Wholesale Rates. No Spam.</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
