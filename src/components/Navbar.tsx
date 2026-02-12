"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center font-bold text-navy text-sm">A</div>
            <span className="text-white font-bold text-xl">AlamoAnswer</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {["How It Works", "Features", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-gray-300 hover:text-gold transition-colors text-sm font-medium"
              >
                {item}
              </a>
            ))}
            <a
              href="#demo"
              className="bg-gold hover:bg-gold-light text-navy font-semibold px-5 py-2 rounded-lg transition-colors text-sm"
            >
              Get Started
            </a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-navy border-t border-white/10 px-4 pb-4 space-y-3">
          {["How It Works", "Features", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-gold py-2 text-sm"
            >
              {item}
            </a>
          ))}
          <a href="#demo" onClick={() => setOpen(false)} className="block bg-gold text-navy font-semibold px-5 py-2 rounded-lg text-center text-sm">
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
