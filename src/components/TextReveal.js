'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function TextReveal() {
  const containerRef = useRef(null);

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const text = "The best ideas begin as questions. Building is simply how I search for the answers."
  const words = text.split(" ");

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[80vh] bg-background border-b border-borderLine"
      id="reveal-text"
    >
      {/* Background Grid Noise Overlay */}
      <div className="noise-overlay" />

      {/* Sticky container that stays in viewport while scrolling */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-25 md:px-20">
        <div className="max-w-[640px] w-full text-center">
          <p className="font-archivo font-medium text-2xl sm:text-4xl lg:text-[36px] leading-[1.25] tracking-[-0.02em] text-center select-none flex flex-wrap justify-center gap-x-[0.3em] gap-y-[0.1em]">
            {words.map((word, index) => {
              const start = 0.2 + (index / words.length) * 0.5;
              const end = start + (1.5 / words.length) * 0.5;

              return (
                <Word 
                  key={index} 
                  word={word} 
                  progress={scrollYProgress} 
                  start={start} 
                  end={end} 
                />
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

function Word({ word, progress, start, end }) {
  const color = useTransform(progress, [start, end], ["rgba(17, 17, 17, 0.1)", "rgba(17, 17, 17, 1)"]);
  return (
    <motion.span 
      style={{ color }}
      className="inline-block transition-colors duration-200"
    >
      {word}
    </motion.span>
  );
}
