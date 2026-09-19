import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import confetti from 'canvas-confetti';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ChevronDown, 
  ArrowRight, 
  Building2,
  ShieldCheck
} from 'lucide-react';
import { products } from '../data/productsData';

export default function ContactPage({ onNavigatePage }) {
  const headerRef = useRef(null);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    product: 'Amazon & Flipkart Shipping Labels',
    volume: '500–1,000 Rolls',
    dimensions: '4" x 6" (100mm x 150mm)',
    city: 'Delhi NCR',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out', clearProps: 'transform' }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF4D00', '#FF7700', '#FFA07A', '#09090B'],
      });
    }, 700);
  };

  const faqs = [
    {
      q: 'What is the Minimum Order Quantity (MOQ) for custom rolls?',
      a: 'For standard sizes like 4x6" shipping waybills or 50x25mm chromo barcodes, we support trial batches starting from 50 to 100 rolls. For fully custom rotary die-cuts or pre-printed branded logos, MOQs typically range from 200 to 500 rolls depending on core size and cylinder width.'
    },
    {
      q: 'Do you provide free testing sample packs for our printers?',
      a: 'Yes! We ship sample testing packs containing direct thermal rolls, thermal transfer ribbons, and specialty polyester tags to verify peel adhesion, sensor eye-mark detection, and zero-jam feeding on your Zebra, TSC, or Honeywell printers prior to placing a bulk purchase order.'
    },
    {
      q: 'How fast can you dispatch orders to Delhi NCR vs pan-India hubs?',
      a: 'Delhi NCR orders are processed for same-day or 24-hour dispatch from our Rohini manufacturing plant. Shipments to tier-1 metro hubs (Mumbai, Bengaluru, Pune, Hyderabad, Chennai) transit via express air cargo or dedicated surface freight in 24 to 48 hours.'
    },
    {
      q: 'Can you match custom core sizes and roll diameters?',
      a: 'Absolutely. We slit and convert on 0.5" cores (for mobile Bluetooth thermal printers), 1" cores (for desktop printers like TSC 244 Pro / Zebra ZD230), and 3" cores (for high-speed industrial printers like Zebra ZT411 with large outer diameters).'
    },
    {
      q: 'Are your food wrapping butter paper rolls certified for direct food contact?',
      a: 'Yes, our butter paper is converted from 100% virgin sulphate pulp and is strictly FSSAI and FDA certified food-grade, greaseproof, and microwave-safe, making it suitable for restaurants, bakeries, and cloud kitchens.'
    }
  ];

  return (
    <div className="pt-24 bg-zinc-50 min-h-screen text-zinc-900">
      {/* 1. Cinematic Hero Banner */}
      <section ref={headerRef} className="relative bg-zinc-950 text-white py-20 lg:py-24 border-b border-zinc-800 overflow-hidden">
        <img
          src="/contact-banner.jpeg"
          alt="Contact BDOUBLEU Manufacturing Desk"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
        {/* Left-Side Soft Black Overlay for Text Readability */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-[65%] lg:w-[50%] bg-gradient-to-r from-zinc-950/85 via-zinc-950/50 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-6">
            <button 
              onClick={() => onNavigatePage('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-[#FF4D00] font-bold">Contact Factory Desk</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-[#FF4D00] text-xs font-mono font-bold uppercase tracking-wider mb-5">
              <Phone className="w-3.5 h-3.5" />
              <span>DIRECT FACTORY COMMERCIAL SALES</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Connect with Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] via-orange-500 to-amber-300">
                Rohini Manufacturing Plant.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8">
              Speak directly with our converting technicians and sales engineers. Get same-day wholesale quotations, schedule a factory visit, or order prototype testing kits.
            </p>

            <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-300">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                <Clock className="w-3.5 h-3.5 text-[#FF4D00]" /> 2–4 Hour RFQ Turnaround
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                <MapPin className="w-3.5 h-3.5 text-[#FF4D00]" /> Sector-16, Rohini, New Delhi
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Contact Channels Cards */}
      <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-xl space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF4D00] flex items-center justify-center font-bold">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-zinc-400 uppercase">DIRECT PHONE DESK</div>
              <a href="tel:+919811000000" className="text-lg font-bold text-zinc-900 hover:text-[#FF4D00] transition-colors">
                +91 98110 00000
              </a>
              <p className="text-xs text-zinc-500 mt-1">Available Mon–Sat, 9:00 AM – 7:30 PM IST</p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-xl space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF4D00] flex items-center justify-center font-bold">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-zinc-400 uppercase">EMAIL COMMERCIAL DESK</div>
              <a href="mailto:sales@barcodesworld.in" className="text-lg font-bold text-zinc-900 hover:text-[#FF4D00] transition-colors">
                sales@barcodesworld.in
              </a>
              <p className="text-xs text-zinc-500 mt-1">Send your tender specs &amp; bill of quantities</p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-xl space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF4D00] flex items-center justify-center font-bold">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-zinc-400 uppercase">WHATSAPP QUICK CONNECT</div>
              <a 
                href="https://wa.me/919811000000?text=Hi%20BDOUBLEU%20Team,%20I%20need%20a%20wholesale%20quotation%20for%20barcode%20labels." 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg font-bold text-[#FF4D00] hover:underline"
              >
                Chat on WhatsApp →
              </a>
              <p className="text-xs text-zinc-500 mt-1">Instant quote proposals &amp; PDF rate cards</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Form & Map Section */}
      <section ref={formRef} className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Quotation Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-zinc-200 shadow-sm relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-500/10 text-[#FF4D00] text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-orange-500/20">
              <Send className="w-3.5 h-3.5" />
              <span>DIRECT WHOLESALE INQUIRY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight mb-2">
              Request Itemized Quotation
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 mb-8 leading-relaxed">
              Fill out your volume and product specifications below. Our commercial desk will review your requirements and respond with a formal quotation within 2 to 4 hours.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4 bg-orange-50/70 rounded-2xl p-8 border border-orange-200">
                <CheckCircle2 className="w-12 h-12 text-[#FF4D00] mx-auto" />
                <h3 className="text-xl font-bold text-zinc-950">Quotation Request Dispatched!</h3>
                <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our commercial team will connect with you at <strong>{formData.phone}</strong> with wholesale rates and dispatch timelines.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#FF4D00] text-white font-bold text-xs hover:bg-[#E04400] transition-all cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-zinc-800 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rajesh Malhotra"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-xs sm:text-sm focus:border-[#FF4D00] focus:ring-2 focus:ring-orange-500/20 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-800 mb-1.5">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-xs sm:text-sm focus:border-[#FF4D00] focus:ring-2 focus:ring-orange-500/20 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-zinc-800 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="purchasing@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-xs sm:text-sm focus:border-[#FF4D00] focus:ring-2 focus:ring-orange-500/20 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-800 mb-1.5">Company / Plant Name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Logistics India"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-xs sm:text-sm focus:border-[#FF4D00] focus:ring-2 focus:ring-orange-500/20 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-zinc-800 mb-1.5">Primary Product Required</label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-xs sm:text-sm bg-white focus:border-[#FF4D00] focus:ring-2 focus:ring-orange-500/20 outline-none"
                    >
                      {products.map((p) => (
                        <option key={p.id} value={p.name}>{p.name}</option>
                      ))}
                      <option value="Custom Size Die-Cut Rolls">Custom Size Die-Cut Rolls</option>
                      <option value="Other Packaging Media">Other Packaging Media</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-800 mb-1.5">Estimated Order Volume</label>
                    <select
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-xs sm:text-sm bg-white focus:border-[#FF4D00] focus:ring-2 focus:ring-orange-500/20 outline-none"
                    >
                      <option value="Sample Pack (Trial Testing)">Sample Pack (Trial Testing)</option>
                      <option value="100–500 Rolls">100–500 Rolls</option>
                      <option value="500–1,000 Rolls">500–1,000 Rolls</option>
                      <option value="1,000–5,000 Rolls">1,000–5,000 Rolls</option>
                      <option value="5,000+ Rolls (Bulk Contract)">5,000+ Rolls (Bulk Recurring Contract)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-zinc-800 mb-1.5">Dimensions / Size</label>
                    <input
                      type="text"
                      value={formData.dimensions}
                      onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                      placeholder="e.g. 4x6 inch or 50x25mm"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-xs sm:text-sm focus:border-[#FF4D00] focus:ring-2 focus:ring-orange-500/20 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-800 mb-1.5">Delivery Destination City</label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-xs sm:text-sm bg-white focus:border-[#FF4D00] focus:ring-2 focus:ring-orange-500/20 outline-none"
                    >
                      <option value="Delhi NCR">Delhi NCR (Same Day / 24h)</option>
                      <option value="Mumbai">Mumbai / Bhiwandi</option>
                      <option value="Bengaluru">Bengaluru / Peenya</option>
                      <option value="Pune">Pune / Chakan</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Ahmedabad">Ahmedabad / Sanand</option>
                      <option value="Kolkata">Kolkata</option>
                      <option value="Other Location">Other PAN-India Destination</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-800 mb-1.5">Additional Application Notes</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify core diameter (1 or 3 inch), printer model (e.g. Zebra ZT411), adhesive type, or pre-printed logo..."
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-xs sm:text-sm focus:border-[#FF4D00] focus:ring-2 focus:ring-orange-500/20 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-white font-bold text-sm shadow-xl shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? <span>Dispatching Inquiry...</span> : (
                    <>
                      <span>Submit Factory Quotation Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Facility Address & Interactive Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-zinc-950 text-white border border-zinc-800 shadow-xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-[#FF4D00] flex items-center justify-center font-bold border border-orange-500/30">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Rohini Converting Headquarters</h3>
                  <p className="text-xs text-zinc-400">BDOUBLEU® / Barcode World</p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-zinc-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#FF4D00] shrink-0 mt-1" />
                  <span>Sector-16, Rohini, New Delhi - 110085, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#FF4D00] shrink-0" />
                  <span>+91 98110 00000 / Sales Desk</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#FF4D00] shrink-0" />
                  <span>sales@barcodesworld.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#FF4D00] shrink-0" />
                  <span>Monday – Saturday: 9:00 AM – 7:30 PM IST</span>
                </div>
              </div>

              {/* Embedded Interactive Map */}
              <div className="relative h-64 rounded-2xl overflow-hidden border border-zinc-800">
                <iframe
                  title="Rohini Plant Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13996.353381640986!2d77.1121085!3d28.7169421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d015c994519f7%3A0x6a053c9077271424!2sSector%2016%2C%20Rohini%2C%20Delhi%2C%20110085!5e0!3m2!1sen!2sin!4v1710777000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="pt-2 border-t border-zinc-800 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                <span>Direct Truck Bays &amp; Loading Docks</span>
                <span className="text-[#FF4D00] font-bold">24/7 Security</span>
              </div>
            </div>

            {/* Quick Assurance */}
            <div className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF4D00] flex items-center justify-center font-bold shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-900">100% Quality &amp; Tolerance Guarantee</h4>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Direct factory supply guarantees zero-jam feeding and exact die-cut tolerances on every batch.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Frequently Asked Questions Accordion */}
      <section className="py-20 bg-white border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF4D00] mb-2">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Purchasing &amp; Production Details
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-zinc-200 overflow-hidden bg-zinc-50 transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-zinc-900 hover:text-[#FF4D00] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform ${
                      openFaq === idx ? 'rotate-180 text-[#FF4D00]' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-200/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
