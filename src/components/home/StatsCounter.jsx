import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, Factory, Users, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function StatsCounter() {
  const sectionRef = useRef(null);
  const counter0Ref = useRef(null);
  const counter1Ref = useRef(null);
  const counter2Ref = useRef(null);
  const counter3Ref = useRef(null);

  useEffect(() => {
    const statsConfig = [
      { ref: counter0Ref, target: 15 },
      { ref: counter1Ref, target: 10 },
      { ref: counter2Ref, target: 1200 },
      { ref: counter3Ref, target: 10 },
    ];

    const ctx = gsap.context(() => {
      statsConfig.forEach((item) => {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: item.target,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            if (item.ref.current) {
              item.ref.current.textContent = Math.floor(obj.val).toLocaleString();
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const statsDisplay = [
    {
      ref: counter0Ref,
      suffix: '+',
      label: 'Years of Manufacturing',
      sublabel: 'Serving Indian B2B supply chains & brands',
      icon: Factory,
    },
    {
      ref: counter1Ref,
      suffix: 'M+',
      label: 'Daily Label Output',
      sublabel: 'Rotary die-cut capacity at Delhi plant',
      icon: Layers,
    },
    {
      ref: counter2Ref,
      suffix: '+',
      label: 'Enterprise Clients',
      sublabel: 'Logistics, retail, FMCG & pharma leaders',
      icon: Users,
    },
    {
      ref: counter3Ref,
      suffix: '+',
      label: 'PAN-India Delivery Hubs',
      sublabel: 'Delhi NCR, Mumbai, Bengaluru, Pune & beyond',
      icon: MapPin,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-zinc-950 text-white relative overflow-hidden border-y border-zinc-800"
    >
      {/* Brand Flame Orange Background Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FF4D00]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {statsDisplay.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-[#FF4D00]/60 transition-all duration-300 group hover:-translate-y-1 shadow-xl hover:shadow-orange-500/10 overflow-hidden"
              >
                {/* Top Corner Accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-[#FF4D00] transition-colors duration-300" />

                <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-[#FF4D00] border border-orange-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#FF4D00] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex items-baseline gap-1 font-mono font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
                  <span ref={stat.ref}>0</span>
                  <span className="text-[#FF4D00]">{stat.suffix}</span>
                </div>

                <div className="mt-3 text-base font-bold text-zinc-100">
                  {stat.label}
                </div>
                <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                  {stat.sublabel}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
