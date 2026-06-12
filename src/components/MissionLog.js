'use client';

import { motion } from 'framer-motion';

const JOURNEY_TIMELINE = [
  {
    year: '2023',
    title: 'The Beginning',
    detail: 'Started Computer Science journey.',
    narrative: 'I entered college with curiosity and a growing interest in technology. Most of my time was spent learning programming fundamentals, understanding how software works, and exploring different areas of computer science.'
  },
  {
    year: '2024',
    title: 'Building My First Projects',
    detail: 'Turned learning into building.',
    narrative: 'After spending time learning the basics, I started creating small web applications and experimenting with different technologies. This was the year I realized that building projects teaches more than any tutorial ever could.'
  },
  {
    year: '2025',
    title: 'Hackathons & New Challenges',
    detail: 'Learning under pressure.',
    narrative: 'Hackathons introduced me to fast-paced problem solving, teamwork, and rapid product development. They taught me how to take an idea from concept to prototype within a limited amount of time.'
  },
  {
    year: '2025',
    title: 'Research & Publication',
    detail: 'Contributing beyond the classroom.',
    narrative: 'Published my research paper, Web3 Meets Banking: A New Era of Secure Customer Engagement, exploring how blockchain technologies can improve trust, security, and customer interaction in modern banking systems.'
  },
  {
    year: '2026',
    title: 'Building Products That Matter',
    detail: 'From projects to real-world solutions.',
    narrative: 'Focused on creating products such as FinPilot AI and CureLink AI, exploring how technology can solve practical challenges in personal finance and healthcare. This phase strengthened my interest in building software that people can genuinely benefit from.'
  },
  {
    year: '2027',
    title: 'Looking Ahead',
    detail: 'Still learning. Still building.',
    narrative: 'As I approach graduation from K.R. Mangalam University, my focus remains the same: keep learning, keep building, and keep exploring new ideas. The journey is only beginning.'
  }
];

export default function MissionLog() {
  return (
    <section className="relative w-full py-24 md:py-36 bg-background border-t border-borderLine" id="journey">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20 md:space-y-28">
        
        {/* Title */}
        <div className="max-w-xl space-y-4">
          <p className="font-mono text-xs uppercase tracking-widest text-textSecondary">/ JOURNEY</p>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-textPrimary">
            The Path So Far
          </h2>
          <p className="text-sm text-textSecondary font-light leading-relaxed">
          A few milestones, lessons, and moments that shaped my journey so far.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-borderLine pl-6 md:pl-10 space-y-12 max-w-4xl mx-auto">
          {JOURNEY_TIMELINE.map((item, idx) => (
            <div key={idx} className="relative group space-y-2">
              
              {/* Year Dot indicator */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-2 h-2 rounded-full bg-textSecondary group-hover:bg-textPrimary border border-background transition-colors duration-300" />
              
              {/* Timeline Info */}
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                  <span className="font-mono text-xs font-semibold text-textPrimary tracking-wider">{item.year}</span>
                  <h3 className="text-base md:text-lg font-serif text-textPrimary">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-[#A8A8A8] font-light italic pl-4 border-l border-borderLine/30">
                  {item.detail}
                </p>
              </div>

              {/* Detail Log Text */}
              <p className="text-xs md:text-sm text-textSecondary font-light leading-relaxed max-w-2xl">
                {item.narrative}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
