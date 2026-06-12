'use client';

import { motion } from 'framer-motion';

const SERVICES = [
  {
    title: 'Frontend Development',
    tags: ['UI Dev', 'Responsive Layouts', 'Web Performance']
  },
  {
    title: 'Fullstack Engineering',
    tags: ['API Integration', 'Database Design', 'System Architecture']
  },
  {
    title: 'AI & Machine Learning',
    tags: ['LLM Agents', 'Neural Networks', 'Intelligent Workflows']
  }
];

const PROJECTS = [
  {
    name: 'FinPilot AI',
    category: 'Artificial Intelligence / Finance',
    description: 'An AI-powered personal finance platform designed to help users track expenses, understand spending behavior, and make smarter financial decisions.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    link: '#contact'
  },
  {
    name: 'Expense Tracker',
    category: 'Personal Productivity / Web App',
    description: 'A modern expense tracking application designed for simplicity, client caching, and daily financial awareness.',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    link: '#contact'
  },
  {
    name: 'CureLink AI',
    category: 'Healthcare Technology / Geolocative',
    description: 'A medicine discovery platform that helps users locate the availability of medicines in nearby pharmacies and medical stores.',
    img: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80',
    link: '#contact'
  }
];

export default function ProjectDatabase() {
  return (
    <div className="relative w-full bg-background">
      {/* SECTION 3: SERVICES (Min-height: min-content) */}
      <section className="relative w-full px-6 md:px-12 py-24 border-b border-borderLine" id="services">
        <div className="max-w-[1180px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Sticky Left Title */}
          <div className="lg:col-span-4 lg:sticky lg:top-36">
            <h2 className="font-clash text-3xl md:text-5xl font-normal text-textPrimary tracking-tight">
            Areas of Interest
            </h2>
            <p className="font-sans text-xs text-textSecondary mt-2 tracking-wide uppercase font-medium">
              / CAPABILITIES & EXPERTISE
            </p>
          </div>

          {/* Right Column Services Rows */}
          <div className="lg:col-span-8 divide-y divide-borderLine border-t border-b border-borderLine">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-black/[0.01] transition-colors px-2"
              >
                {/* Title */}
                <h3 className="font-clash text-xl md:text-2xl font-normal text-textPrimary">
                  {service.title}
                </h3>
                
                {/* Tags stack */}
                <div className="flex flex-wrap gap-2.5">
                  {service.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-4 py-1.5 rounded-full border border-borderLine bg-[#ffffff] font-sans text-[10px] font-semibold text-textSecondary uppercase tracking-wider shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: FEATURED PROJECTS (Works grid) */}
      <section className="relative w-full px-6 md:px-12 py-24 border-b border-borderLine" id="works">
        <div className="max-w-[1180px] w-full mx-auto space-y-16">
          
          {/* Section Header */}
          <div className="flex items-end justify-between border-b border-borderLine pb-8">
            <div className="space-y-2">
              <span className="font-archivo font-extrabold text-[10px] tracking-wider text-accent uppercase">/ PORTFOLIO</span>
              <h2 className="font-clash text-3xl md:text-5xl font-normal text-textPrimary tracking-tight">
                Featured Projects
              </h2>
            </div>
            
            {/* CTA to talk */}
            <a 
              href="#contact" 
              className="font-archivo text-xs font-semibold tracking-wider text-textPrimary hover:underline uppercase hidden sm:block"
            >
              Start a Project →
            </a>
          </div>

          {/* Grid Layout (2 columns responsive) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
            {PROJECTS.map((project, index) => (
              <motion.a
                key={project.name}
                href={project.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col gap-6"
              >
                {/* Visual Image container */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#ffffff] border border-borderLine shadow-sm">
                  <img 
                    src={project.img} 
                    alt={project.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/[0.02] pointer-events-none" />
                </div>

                {/* Info and Titles */}
                <div className="space-y-2 px-1">
                  <div className="flex items-center justify-between">
                    <span className="font-archivo font-extrabold text-[9px] text-accent tracking-wider uppercase">
                      {project.category}
                    </span>
                    <span className="font-mono text-[9px] text-textSecondary opacity-60">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-clash text-2xl font-normal text-textPrimary tracking-tight group-hover:underline">
                    {project.name}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-textSecondary font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
