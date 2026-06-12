'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function TextReveal() {
  const containerRef = useRef(null);

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"]
  });

  const text = "The best ideas begin as questions. Building is simply how I search for the answers."
  const words = text.split(" ");

  return (
    <section 
      ref={containerRef} 
      className="relative w-full py-24 md:py-40 bg-background border-b border-borderLine"
      id="reveal-text"
    >
      {/* Background Grid Noise Overlay */}
      <div className="noise-overlay" />

      {/* Container that stays in viewport while scrolling */}
      <div className="w-full flex items-center justify-center px-6 md:px-12">
        <div className="max-w-[840px] w-full text-center">
          <p className="font-archivo font-medium text-2xl sm:text-4xl lg:text-[36px] leading-[1.25] tracking-[-0.02em] text-center select-none flex flex-wrap justify-center gap-x-[0.3em] gap-y-[0.1em]">
            {words.map((word, index) => {
              const start = index / words.length;
              const end = start + (1 / words.length);

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
