'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'works', 'thoughts', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Me', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Works', href: '#works', id: 'works' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <div className="fixed top-[30px] left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <motion.nav 
        animate={{ height: isOpen ? 'auto' : '54px' }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto bg-[#111111] text-[#faf7f3] rounded-[20px] px-6 py-4 flex flex-col justify-between shadow-2xl border border-white/10 w-full max-w-[320px] overflow-hidden"
      >
        {/* Main Capsule Row (Always Name + Three dots) */}
        <div className="flex items-center justify-between w-full h-6 shrink-0">
          {/* Logo / Brand Name */}
          <a 
            href="#home" 
            onClick={() => setIsOpen(false)}
            className="font-archivo font-extrabold text-[12px] tracking-widest uppercase text-[#faf7f3] hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            ARPIT JAIN
          </a>

          {/* Three-dots Menu Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center gap-[4px] w-9 h-8 rounded-lg bg-white/5 hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span className={`w-1.5 h-1.5 rounded-full bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-x-[5px] translate-y-[1px]' : ''}`} />
            <span className={`w-1.5 h-1.5 rounded-full bg-white transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : ''}`} />
            <span className={`w-1.5 h-1.5 rounded-full bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-x-[5px] translate-y-[1px]' : ''}`} />
          </button>
        </div>

        {/* Dropdown Menu Option List (Triggered on Click) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-4 font-sans text-xs font-semibold tracking-wide uppercase pt-4 pb-2 border-t border-white/10"
            >
              {links.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`transition-colors duration-200 py-1 ${
                      isActive ? 'text-white' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              
              <div className="h-[1px] bg-white/10 my-2" />
              
              {/* Location details */}
              <div className="flex items-center gap-2 text-[9px] font-archivo text-white/40 tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span>IN // HARYANA</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.nav>
    </div>
  );
}
