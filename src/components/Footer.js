'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Works', href: '#works' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative w-full bg-[#111111] text-[#faf7f3] pt-24 pb-12 px-6 md:px-12 overflow-hidden border-t border-white/5">
      {/* Footer Content Grid */}
      <div className="max-w-[1180px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
        
        {/* Left Side: Massive Header Statement */}
        <div className="lg:col-span-8 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-clash text-4xl sm:text-5xl lg:text-[64px] leading-[1.0] font-normal text-white max-w-xl tracking-tight"
          >
            The journey <br />
            has just begun. 
          </motion.h2>
        </div>

        {/* Right Side: Quick Links list */}
        <div className="lg:col-span-4 space-y-6">
          <div className="space-y-1">
            <span className="font-archivo font-extrabold text-[9px] text-white/40 tracking-wider uppercase block">
              / QUICK LINKS
            </span>
            <div className="h-[1px] bg-white/10 w-full" />
          </div>

          <ul className="space-y-3 font-sans text-sm">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="text-white/60 hover:text-white transition-colors duration-300 block py-1 font-medium tracking-wide"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Giant watermark branding logo in the center background */}
      <div className="w-full text-center select-none pointer-events-none mt-20 relative z-0">
        <h1 
          className="font-archivo font-extrabold text-[15vw] sm:text-[18vw] lg:text-[22vw] leading-none tracking-[-0.04em] uppercase text-white/[0.03] select-none block"
          style={{ transform: 'translateY(15%)' }}
        >
          ARPIT
        </h1>
      </div>

      {/* Copyright bottom bar */}
      <div className="max-w-[1180px] w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[10px] text-white/40 tracking-wider border-t border-white/5 pt-8 mt-12 relative z-10 uppercase">
        <div>
          © {new Date().getFullYear()} ARPIT JAIN. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span>IN / DELHI</span>
        </div>
      </div>
    </footer>
  );
}
