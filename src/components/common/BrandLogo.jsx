import React from 'react';

export default function BrandLogo({ className = "h-11", light = false }) {
  return (
    <div className={`flex items-center gap-3.5 select-none group cursor-pointer ${className}`}>
      {/* Actual Client Logo Image from public/logo.png */}
      <div className={`relative flex items-center justify-center p-1 rounded-xl transition-transform duration-300 group-hover:scale-105 ${
        light ? 'bg-white shadow-md shadow-black/20' : 'bg-transparent'
      }`}>
        <img
          src="/logo.png"
          alt="BDOUBLEU (bw) - Barcode World"
          className="h-10 sm:h-12 w-auto object-contain max-w-[150px]"
        />
      </div>

      {/* Accompanying Industrial Tagline */}
      <div className="hidden sm:flex flex-col justify-center border-l border-slate-300/80 pl-3">
        <div className="flex items-center gap-1 leading-tight">
          <span className={`font-black tracking-tight text-sm ${light ? 'text-white' : 'text-slate-900'}`}>
            BARCODE
          </span>
          <span className="font-black tracking-tight text-sm text-orange-600">
            WORLD
          </span>
        </div>
        <span className={`text-[8.5px] font-mono font-bold tracking-[0.16em] uppercase ${
          light ? 'text-orange-400' : 'text-slate-600'
        }`}>
          BY BDOUBLEU®
        </span>
      </div>
    </div>
  );
}
