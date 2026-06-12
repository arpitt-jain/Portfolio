'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiBookOpen, FiCpu, FiCompass, FiCode, FiLayers } from 'react-icons/fi';

const EXPERIMENTS = [
  {
    id: '01',
    title: 'Learning Foundations',
    subtitle: 'EXPERIMENT_01 // COMPUTER_SCIENCE_FUNDAMENTALS',
    icon: FiBookOpen,
    color: 'from-blue-500 to-cyan-500',
    date: '2022 - 2023',
    description: 'Mastered core algorithms, data structures, and software principles. Focused on optimization, time complexities, and building low-level utilities.',
    achievements: [
      'Top 5% in competitive coding challenges.',
      'Designed a custom compilers and assembly parser.',
      'Contributed to open source systems tooling.'
    ],
    milestone: 'Acquired core developer mental-models.'
  },
  {
    id: '02',
    title: 'Building Products',
    subtitle: 'EXPERIMENT_02 // SYSTEM_ARCHITECTURES',
    icon: FiCode,
    color: 'from-purple-500 to-blue-500',
    date: '2023 - 2024',
    description: 'Transitioned from scripting to designing complete systems. Developed full-stack SaaS MVPs, REST/GraphQL APIs, and database structures.',
    achievements: [
      'Shipped 3 production-grade SaaS platforms.',
      'Reduced API latency by 40% via Redis caching layers.',
      'Integrated real-time WebSockets to synchronize user collaborative spaces.'
    ],
    milestone: 'Mastered production deployments and user value.'
  },
  {
    id: '03',
    title: 'Artificial Intelligence',
    subtitle: 'EXPERIMENT_03 // ML_MODELS_AND_NEURAL_NETS',
    icon: FiCpu,
    color: 'from-purple-600 to-indigo-500',
    date: '2024 - 2025',
    description: 'Dived deep into deep learning, computer vision, and NLP. Developed applications utilizing Retrieval-Augmented Generation (RAG) and optimized local weights.',
    achievements: [
      'Trained an object detection model with 94.6% mAP accuracy.',
      'Built a hybrid vector search query RAG engine parsing complex PDFs.',
      'Fine-tuned open LLM checkpoints on custom datasets.'
    ],
    milestone: 'Constructed automated reasoning layers.'
  },
  {
    id: '04',
    title: 'Research & Publications',
    subtitle: 'EXPERIMENT_04 // ACADEMIC_DISCOVERY',
    icon: FiLayers,
    color: 'from-pink-500 to-purple-600',
    date: '2025 - Present',
    description: 'Engaged in formal ML research under academic faculty. Investigating model latency optimizations, pruning pathways, and synthetic data pipelines.',
    achievements: [
      'Co-authored preprints on efficient RAG retrievals.',
      'Presented findings in academic lab seminars.',
      'Created benchmarking suites for local AI systems evaluation.'
    ],
    milestone: 'Formalized scientific research process.'
  },
  {
    id: '05',
    title: 'Future Vision',
    subtitle: 'EXPERIMENT_05 // INTELLIGENT_AGENTS',
    icon: FiCompass,
    color: 'from-orange-500 to-pink-500',
    date: '2026 & Beyond',
    description: 'Designing autonomous multi-agent networks capable of reasoning, coding, and collaborating autonomously on complex engineering pipelines.',
    achievements: [
      'Prototyping dynamic reinforcement learning workflows.',
      'Building agentic compiler integrations.',
      'Aiming to bridge the gap between engineering execution and high-level strategy.'
    ],
    milestone: 'Architecting general autonomous frameworks.'
  }
];

export default function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full py-24 md:py-32 bg-[#050505] overflow-hidden" 
      id="timeline"
    >
      {/* Background Dots */}
      <div className="absolute inset-0 grid-dots pointer-events-none opacity-20" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-20 md:mb-28">
          <p className="font-mono text-xs text-blue-400 tracking-widest uppercase mb-3">BUILDER_EVOLUTION_LOG</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">Research Journey</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Path Container */}
        <div className="relative">
          {/* Main vertical line background */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/10" />

          {/* Scrolling colored path */}
          <motion.div 
            style={{ height: pathHeight }}
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 origin-top shadow-[0_0_10px_rgba(139,92,246,0.5)]" 
          />

          {/* Cards */}
          <div className="space-y-16 md:space-y-24">
            {EXPERIMENTS.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              const IconComponent = exp.icon;

              return (
                <div 
                  key={exp.id} 
                  className={`flex flex-col md:flex-row items-stretch ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Outer spacer/content on opposite side */}
                  <div className="hidden md:block w-1/2" />

                  {/* Icon node in center */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-[#0B0B0B] border border-white/10 z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                  </div>

                  {/* Actual Timeline Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full md:w-[45%] pl-10 md:pl-0"
                  >
                    <div className="p-6 rounded-xl border border-white/10 bg-[#0B0B0B]/40 hover:bg-[#0B0B0B]/80 backdrop-blur-sm transition-all duration-300 relative group">
                      {/* Hover subtle glow border */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 border border-transparent group-hover:border-white/15 transition-all duration-500 pointer-events-none" />

                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-[10px] text-[#A8A8A8] border border-white/5 bg-white/5 px-2 py-0.5 rounded-md">
                          {exp.subtitle}
                        </span>
                        <span className="font-mono text-xs text-blue-400 font-semibold">{exp.date}</span>
                      </div>

                      {/* Title & Icon */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${exp.color} text-white`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-glow-blue transition-all">
                          {exp.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-xs md:text-sm text-[#A8A8A8] mb-4 leading-relaxed font-light">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="border-t border-white/5 pt-4 mb-4">
                        <h4 className="font-mono text-[10px] text-purple-400 uppercase tracking-widest mb-2.5">KEY_ACHIEVEMENTS</h4>
                        <ul className="space-y-1.5">
                          {exp.achievements.map((ach, i) => (
                            <li key={i} className="text-[11px] md:text-xs text-[#888] flex items-start gap-1.5">
                              <span className="text-blue-500 font-bold font-mono mt-0.5">&gt;</span>
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Milestone Badge */}
                      <div className="flex items-center gap-2 border-t border-white/5 pt-3 mt-3">
                        <span className="font-mono text-[9px] text-green-500 bg-green-500/5 px-2 py-0.5 rounded-md border border-green-500/10">
                          MILESTONE_UNLOCKED
                        </span>
                        <span className="text-[10px] text-[#A8A8A8] font-mono italic">
                          "{exp.milestone}"
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
