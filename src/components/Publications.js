'use client';

import { motion } from 'framer-motion';

const POSTS = [
  {
    date: 'Jan 20, 2026',
    title: 'Web3 Meets Banking: A New Era of Secure Customer Engagement',
    description: 'Leveraging LSTM networks to predict smart contract vulnerabilities in decentralised protocolsLeveraging LSTM networks to predict smart contract vulnerabilities in decentralised protocolsLeveraging LSTM networks to predict smart contract vulnerabilities in decentralised protocolsLeveraging LSTM networks to predict smart contract vulnerabilities in decentralised protocols.',
    link: 'https://ieeexplore.ieee.org/document/11337358'
  },
  
];

export default function Publications() {
  return (
    <section className="relative w-full px-6 md:px-12 py-24 border-b border-borderLine bg-background" id="thoughts">
      <div className="max-w-[1180px] w-full mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="border-b border-borderLine pb-8">
          <span className="font-archivo font-extrabold text-[10px] tracking-wider text-accent uppercase">/ WRITING</span>
          <h2 className="font-clash text-3xl md:text-5xl font-normal text-textPrimary tracking-tight mt-2">
            Thoughts &amp; Research
          </h2>
        </div>

        {/* 3-column Thoughts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POSTS.map((post, index) => (
            <motion.a
              key={post.title}
              href={post.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-[#ffffff] border border-borderLine h-[320px] shadow-sm hover:border-textPrimary/35 transition-colors"
            >
              {/* Top Text Details */}
              <div className="space-y-4">
                <span className="font-archivo font-extrabold text-[9px] text-textSecondary opacity-60 tracking-wider uppercase">
                  {post.date}
                </span>
                <h3 className="font-clash text-xl font-normal text-textPrimary tracking-tight group-hover:underline">
                  {post.title}
                </h3>
              </div>

              {/* Description */}
              <p className="font-sans text-xs md:text-sm text-textSecondary font-light leading-relaxed">
                {post.description}
              </p>
            </motion.a>
          ))}

          {/* Third Card: Patterned Callout Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col justify-between p-6 rounded-2xl bg-[#111111] text-[#faf7f3] h-[320px] shadow-lg border border-white/5 overflow-hidden"
          >
            {/* SVG Background Diagonal Lines Pattern matching Majd's */}
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none" 
              style={{
                backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='126' height='126'><path d='M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z' fill='rgb(255, 255, 255)' fill-rule='evenodd'/></svg>")`,
                backgroundSize: '64px auto'
              }}
            />

            {/* Content text */}
            <p className="font-clash text-lg md:text-xl font-normal text-white leading-snug z-10">
              See how we shape modern software structures with clarity and craft— explore the full research archive.
            </p>

            {/* Custom Pill button matching Majd's */}
            <div className="z-10 pt-4">
              <a 
                href="#contact"
                className="group inline-flex items-center gap-3 bg-white text-[#111111] rounded-full pl-5 pr-2 py-2 font-archivo text-[10px] font-semibold tracking-wider uppercase hover:bg-opacity-90 transition-all shadow border border-white/10"
              >
                <span>Read Research</span>
                <div className="w-6 h-6 rounded-full bg-[#111111]/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <svg 
                    className="w-3 h-3 text-[#111111] rotate-45" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
