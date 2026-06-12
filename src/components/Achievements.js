'use client';

import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    quote: "Arpit completely changed how we approach AI agent integration. His understanding of fullstack systems and LLMs helped us deploy our prototype in days.",
    author: "Dr. Ananya Sen",
    role: "ML Research Director",
    img: "https://framerusercontent.com/images/kAftuUN9iRKwIt9M6RqZo9NS314.jpg"
  },
  {
    quote: "I’ve worked with dozens of student builders, but Arpit stands out. Everything he builds feels intentional, from clean data indexing to smooth UI micro-interactions.",
    author: "Prof. R. Sharma",
    role: "CS Mentor, KRMU",
    img: "https://framerusercontent.com/images/HqoHkPp6dpJFdgMqUKIaAXmy7o.jpg"
  },
  {
    quote: "Arpit saved us weeks of engineering. His expense-tracking prototype is clean, fast, and structured in a way that makes local caching scaling incredibly simple.",
    author: "Daniel K.",
    role: "Indie Maker & Partner",
    img: "https://framerusercontent.com/images/Y9KmJAQ4w53hsc4jJojfokLZ7D8.jpg"
  },
  {
    quote: "The visual quality is insane. Clean file structure, smooth transitions, and super easy to read codebase. He has deep technical expertise and professional execution.",
    author: "Omar H.",
    role: "Frontend Engineer",
    img: "https://framerusercontent.com/images/HH8KrojyxZx6X20z1r13CSwiiWE.jpg"
  }
];

export default function Achievements() {
  return (
    <section className="relative w-full px-6 md:px-12 py-24 border-b border-borderLine bg-background" id="testimonials">
      <div className="max-w-[1180px] w-full mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="border-b border-borderLine pb-8">
          <span className="font-archivo font-extrabold text-[10px] tracking-wider text-accent uppercase">/ FEEDBACK</span>
          <h2 className="font-clash text-3xl md:text-5xl font-normal text-textPrimary tracking-tight mt-2">
            Testimonials
          </h2>
        </div>

        {/* 4-column Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((test, index) => (
            <motion.div
              key={test.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between p-6 rounded-2xl bg-[#111111] text-[#faf7f3] h-[340px] shadow-lg border border-white/5 hover:translate-y-[-4px] transition-transform duration-300"
            >
              {/* Quote */}
              <p className="font-sans text-xs md:text-sm font-light leading-relaxed text-white/80">
                &ldquo;{test.quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
                  <img 
                    src={test.img} 
                    alt={test.author} 
                    className="w-full h-full object-cover grayscale"
                  />
                </div>

                {/* Name / Role */}
                <div className="space-y-0.5">
                  <h4 className="font-clash text-xs font-medium text-white tracking-tight">
                    {test.author}
                  </h4>
                  <p className="font-sans text-[10px] text-white/50">
                    {test.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
