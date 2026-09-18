import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { products } from '../../data/productsData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: 'Barcode Labels',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Enter a valid phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      errs.email = 'Enter a valid work email';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 75,
        origin: { y: 0.65 },
        colors: ['#FF4D00', '#FF7700', '#FFA07A', '#09090B'],
      });
    }, 700);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-50 relative border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-[#FF4D00] text-xs font-mono font-bold uppercase tracking-wider mb-3 border border-orange-500/25 shadow-xs">
            <Mail className="w-3.5 h-3.5" />
            <span>COMMERCIAL INQUIRIES &amp; FACTORY ACCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight">
            Connect with Our Manufacturing Team
          </h2>
          <p className="mt-3 text-zinc-600 text-sm sm:text-base leading-relaxed">
            Get direct technical consultations, batch sample kits, customized roll slitting specifications, and formal wholesale pricing quotes within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Factory Address Card */}
            <div className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF4D00] flex items-center justify-center mb-4 border border-orange-100 shadow-xs">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-zinc-900 mb-1">
                Production Facility &amp; Head Office
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Ground Floor, House No. 94-95, Block-I, Pocket 9, Sector-16, Rohini, New Delhi - 110085, India
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#FF4D00]">
                <span>Serving Delhi NCR &amp; All India Supply Corridors</span>
              </div>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF4D00] flex items-center justify-center mb-4 border border-orange-100 shadow-xs">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-zinc-900 mb-1">
                Direct Sales &amp; Technical Consultation
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600">
                Mon - Sat: 9:30 AM to 7:00 PM IST
              </p>
              <div className="mt-3 flex flex-col gap-1 text-sm font-bold text-zinc-800 font-mono">
                <a href="tel:+919811000000" className="hover:text-[#FF4D00] transition-colors">
                  +91 98110 00000 (Bulk Commercial Sales)
                </a>
                <a href="tel:+911145000000" className="hover:text-[#FF4D00] transition-colors text-zinc-600">
                  +91 11 4500 0000 (Rohini Office Desk)
                </a>
              </div>
            </div>

            {/* Email Support */}
            <div className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF4D00] flex items-center justify-center mb-4 border border-orange-100 shadow-xs">
                <Mail className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-zinc-900 mb-1">
                Written Inquiries &amp; Purchase Orders
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 mb-2">
                Send rolling tender RFQs and purchase orders directly:
              </p>
              <a
                href="mailto:sales@barcodesworld.in"
                className="text-sm font-bold text-[#FF4D00] hover:text-orange-700 transition-colors"
              >
                sales@barcodesworld.in / info@barcodesworld.in
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-zinc-200 shadow-sm relative overflow-hidden">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-orange-100 text-[#FF4D00] flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Thank You for Your Quotation Request!
                </h3>
                <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                  Our B2B technical sales division has received your request for <strong>{formData.product}</strong>. We will review your specifications and respond with a formal proposal within 2 to 4 business hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      company: '',
                      email: '',
                      phone: '',
                      product: 'Barcode Labels',
                      message: '',
                    });
                  }}
                  className="mt-6 px-6 py-2.5 rounded-xl bg-[#FF4D00] text-white text-xs sm:text-sm font-bold hover:bg-[#E04400] transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-zinc-900 tracking-tight mb-2">
                  Request Factory Direct Quotation
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rajesh Kumar"
                      className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm transition-all focus:outline-none ${
                        errors.name
                          ? 'border-red-400 focus:ring-1 focus:ring-red-500'
                          : 'border-zinc-200 focus:border-[#FF4D00] focus:ring-2 focus:ring-orange-500/20'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Logistics India"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-xs sm:text-sm transition-all focus:border-[#FF4D00] focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Work Email */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm transition-all focus:outline-none ${
                        errors.email
                          ? 'border-red-400 focus:ring-1 focus:ring-red-500'
                          : 'border-zinc-200 focus:border-[#FF4D00] focus:ring-2 focus:ring-orange-500/20'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      Phone / Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm transition-all focus:outline-none ${
                        errors.phone
                          ? 'border-red-400 focus:ring-1 focus:ring-red-500'
                          : 'border-zinc-200 focus:border-[#FF4D00] focus:ring-2 focus:ring-orange-500/20'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Product / Requirement Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                    Product Line of Interest
                  </label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-xs sm:text-sm bg-white focus:border-[#FF4D00] focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                  >
                    {products.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} ({p.categoryName})
                      </option>
                    ))}
                    <option value="Custom Roll Slitting">Custom Roll Slitting &amp; Core Size</option>
                    <option value="Annual Supply Contract">Annual Recurring Supply Contract</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                    Estimated Volume, Roll Sizing &amp; Specifications
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify dimensions (e.g. 50x25mm, 4x6 inch), core size (1 or 3 inch), monthly quantity, or delivery city..."
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-xs sm:text-sm transition-all focus:border-[#FF4D00] focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white font-bold text-sm shadow-lg shadow-orange-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 hover:shadow-orange-500/40 hover:-translate-y-0.5"
                >
                  {loading ? (
                    <span>Submitting Quotation Request...</span>
                  ) : (
                    <>
                      <span>Send Commercial RFQ</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-400 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF4D00]" />
                  <span>Your commercial details remain 100% confidential. Direct factory response.</span>
                </div>
              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
