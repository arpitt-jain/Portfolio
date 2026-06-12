'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const heroTitleRef = useRef(null);
  
  // Track scroll inside the hero intro for the sticky 3D card rotation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Track scroll for the hero title section
  const { scrollYProgress: titleScroll } = useScroll({
    target: heroTitleRef,
    offset: ["start start", "end start"]
  });

  const titleScale = useTransform(titleScroll, [0, 1], [1, 0.85]);
  const titleOpacity = useTransform(titleScroll, [0, 0.8], [1, 0]);
  const titleY = useTransform(titleScroll, [0, 1], [0, 150]);

  // Map scroll progress to 3D rotation of the profile card
  const rotateY = useTransform(scrollYProgress, [0.3, 0.7], [0, 180]);
  const cardScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.9]);
  const cardTranslateY = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  return (
    <div ref={containerRef} className="relative w-full bg-background" id="home">
      {/* Background Grid Noise Overlay */}
      <div className="noise-overlay" />

      {/* SECTION 1: HERO TITLE (100vh) */}
      <section ref={heroTitleRef} className="relative w-full h-screen flex flex-col justify-between px-6 md:px-12 py-12 overflow-hidden border-b border-borderLine">
        {/* Empty top spacer for nav spacing */}
        <div className="h-20" />

        {/* Massive Centered Title Area */}
        <div className="relative max-w-[1180px] w-full mx-auto flex items-center justify-center flex-grow">
          {/* Floating Shape 1 (Top-Left overlay) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[10%] left-[5%] md:left-[15%] z-20 pointer-events-none"
          >
            <img 
              src="https://framerusercontent.com/images/OLDYsHB9RMavvQrkVRNy08ZXYE.png" 
              alt="3D Glass Shape Left" 
              className="w-24 h-24 md:w-36 md:h-36 object-contain animate-pulse"
              style={{ animationDuration: '6s' }}
            />
          </motion.div>

          {/* Huge Heading H1 */}
          <motion.h1 
            style={{ scale: titleScale, opacity: titleOpacity, y: titleY }}
            className="font-archivo font-extrabold text-[46px] sm:text-[120px] lg:text-[174px] leading-[0.88] tracking-[-0.03em] text-textPrimary text-center select-none uppercase z-10"
          >
            <span className="block opacity-90">SOFTWARE</span>
            <span className="block opacity-95">ENGINEER</span>
          </motion.h1>

          {/* Floating Shape 2 (Bottom-Right overlay) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-[10%] right-[5%] md:right-[15%] z-20 pointer-events-none"
          >
            <img 
              src="https://framerusercontent.com/images/lIIjRX5gxRdY7UWw5wqIXicPOA.png" 
              alt="3D Glass Shape Right" 
              className="w-28 h-28 md:w-40 md:h-40 object-contain animate-pulse"
              style={{ animationDuration: '8s' }}
            />
          </motion.div>
        </div>

        {/* Hero Bottom Bar Info */}
        <div className="max-w-[1180px] w-full mx-auto flex items-center justify-between font-archivo text-[11px] font-semibold tracking-wider text-textPrimary border-t border-borderLine/30 pt-6">
          <div>©2026</div>
          <div className="opacity-60">/CREATING SINCE 2022</div>
        </div>
      </section>

      {/* SECTION 2: INTRO / ABOUT (100vh scrolling) */}
      <section className="relative w-full min-h-screen px-6 md:px-12 flex items-center border-b border-borderLine" id="about">
        <div className="max-w-[1180px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start py-24">
          
          {/* Sticky Left Column: Portrait Card with 3D Scroll Rotation */}
          <div className="lg:col-span-5 flex justify-center lg:sticky lg:top-36 h-auto lg:h-[600px] items-center">
            <motion.div 
              style={{ scale: cardScale, y: cardTranslateY }}
              className="relative w-full max-w-[380px] aspect-[4/5] perspective-container z-10"
            >
              {/* Spinning 3D Card */}
              <motion.div 
                style={{ rotateY }}
                className="w-full h-full relative perspective-card"
              >
                {/* Front Side: Portrait Photo */}
                <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-white border border-borderLine shadow-xl perspective-card-back">
                  <img 
                    src="/Arpit.webp" 
                    alt="Arpit Jain" 
                    className="w-full h-full object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 font-archivo text-[10px] font-semibold tracking-widest text-[#faf7f3]">
                    ARPIT JAIN
                  </div>
                </div>

                {/* Back Side: Visual System/Code representation */}
                <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-[#111111] border border-white/10 shadow-2xl flex flex-col justify-between p-6 perspective-card-front text-[#faf7f3]">
                  {/* Mock editor header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="font-mono text-[9px] text-white/50 tracking-wider">SYSTEM_STACK // ONLINE</span>
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                  </div>

                  {/* Terminal simulation lines */}
                  <div className="flex-grow py-6 space-y-4 font-mono text-[10px] text-white/80">
                    <p className="text-[#eb4d6d]">const builder = new Developer(&apos;Arpit Jain&apos;);</p>
                    <p className="text-white/40">// Class of 2027 // K.R. Mangalam University</p>
                    <p>builder.specializeIn([</p>
                    <p className="pl-4 text-green-400">&apos;Artificial Intelligence&apos;,</p>
                    <p className="pl-4 text-green-400">&apos;Fullstack Systems&apos;,</p>
                    <p className="pl-4 text-green-400">&apos;Product Architecture&apos;</p>
                    <p>]);</p>
                    <p className="text-[#09f]">await builder.deploySolutions();</p>
                  </div>

                  {/* System statistics footer */}
                  <div className="flex justify-between font-mono text-[9px] text-white/40 border-t border-white/10 pt-4">
                    <span>STATUS: ACTIVE</span>
                    <span>LOC: DELHI // IN</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Bio Content */}
          <div className="lg:col-span-7 space-y-12 lg:pt-16">
            <div className="space-y-4">
              <span className="font-archivo font-extrabold text-xs tracking-wider text-accent uppercase">/ Hey!</span>
              <h2 className="font-clash text-4xl sm:text-5xl lg:text-6xl font-normal text-textPrimary tracking-tight leading-[1.1]">
                I'm Arpit jain, Software & AI enthusiast.
              </h2>
            </div>

            <div className="space-y-4 text-base md:text-lg text-textSecondary font-medium leading-relaxed max-w-2xl">
              <p>
              Currently pursuing my B.Tech at K.R. Mangalam University (Class of 2027), I enjoy turning ideas into products that solve real-world problems. My interests lie across artificial intelligence, software development, fintech, and emerging technologies.
              </p>
              <p>
              Over the past few years, I've built applications ranging from personal finance tools and healthcare platforms to AI-powered systems, while also contributing to research in blockchain and banking. Whether it's a hackathon, a side project, or a research paper, I'm always exploring new ways technology can create meaningful impact.
              </p>
            </div>

            {/* Pill CTA button with arrow and Resume button */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="#works"
                className="group inline-flex items-center gap-4 bg-[#111111] text-[#faf7f3] rounded-full pl-6 pr-3 py-3 font-archivo text-xs font-semibold tracking-wider uppercase hover:bg-opacity-95 transition-all shadow-lg border border-white/5"
              >
                <span>Get Started</span>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <svg 
                    className="w-4 h-4 text-white rotate-45" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>

              <a 
                href="/Arpit.pdf"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-4 bg-transparent text-[#111111] rounded-full pl-6 pr-3 py-3 font-archivo text-xs font-semibold tracking-wider uppercase hover:bg-[#111111] hover:text-[#faf7f3] transition-all shadow-sm border border-[#111111]"
              >
                <span>Resume</span>
                <div className="w-8 h-8 rounded-full bg-[#111111]/5 group-hover:bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <svg 
                    className="w-4 h-4 text-[#111111] group-hover:text-[#faf7f3]" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2-8H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
