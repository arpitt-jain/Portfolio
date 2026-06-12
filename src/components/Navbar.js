'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', target: 'home' },
    { name: 'About Me', target: 'about' },
    { name: 'Skills', target: 'services' },
    { name: 'Works', target: 'works' },
    { name: 'Contact', target: 'contact' },
  ];

  const handleScroll = (targetId) => {
    const element = document.getElementById(targetId);

    if (!element) {
      console.warn(`Section not found: ${targetId}`);
      return;
    }

    setIsOpen(false);

    setTimeout(() => {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 250);
  };

  return (
    <div className="fixed top-[30px] left-0 right-0 z-50 flex justify-center px-6">
      <motion.nav
        animate={{ height: isOpen ? 'auto' : '54px' }}
        transition={{
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="bg-[#111111] text-[#faf7f3] rounded-[20px] px-6 py-4 flex flex-col justify-between shadow-2xl border border-white/10 w-full max-w-[320px] overflow-hidden"
      >
        {/* Top Row */}
        <div className="flex items-center justify-between w-full h-6 shrink-0">
          <button
            onClick={() => handleScroll('home')}
            className="font-archivo font-extrabold text-[12px] tracking-widest uppercase text-[#faf7f3] hover:opacity-80 transition-opacity"
          >
            ARPIT JAIN
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center gap-[4px] w-9 h-8 rounded-lg bg-white/5 hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span
              className={`w-1.5 h-1.5 rounded-full bg-white transition-all duration-300 ${
                isOpen
                  ? 'rotate-45 translate-x-[5px] translate-y-[1px]'
                  : ''
              }`}
            />
            <span
              className={`w-1.5 h-1.5 rounded-full bg-white transition-all duration-300 ${
                isOpen ? 'opacity-0 scale-0' : ''
              }`}
            />
            <span
              className={`w-1.5 h-1.5 rounded-full bg-white transition-all duration-300 ${
                isOpen
                  ? '-rotate-45 -translate-x-[5px] translate-y-[1px]'
                  : ''
              }`}
            />
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-4 font-sans text-xs font-semibold tracking-wide uppercase pt-4 pb-2 border-t border-white/10 mt-4"
            >
              {links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScroll(link.target)}
                  className="text-left transition-colors duration-200 py-1 text-white/60 hover:text-white"
                >
                  {link.name}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}