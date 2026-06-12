'use client';

const NOTEBOOK_ENTRIES = [
  {
    page: '01',
    date: 'June 2026',
    title: 'The advantage of not knowing enough',
    thoughts: "The advantage of being a student is that you don't know what is supposed to be impossible. You try things anyway. Sometimes the project fails, sometimes it works, but every attempt teaches something new. Looking back, many of the things I've built started with curiosity rather than expertise."

  },
  {
    page: '02',
    date: 'May 2026',
    title: 'Learning outside the classroom',
    thoughts: "Most of what I've learned about building software didn't come from lectures or exams. It came from debugging at midnight, breaking things unintentionally, participating in hackathons, and trying to turn random ideas into working products. The internet teaches concepts, but building teaches understanding."
  },
  {
    page: '03',
    date: 'April 2026',
    title: 'Why I keep building',
    thoughts: "The best part of building isn't launching a project. It's the moment an idea starts becoming real. Watching something move from a notebook, to a prototype, to something another person can actually use is what keeps me coming back to new projects."

  },
  {
    page: '04',
    date: 'March 2026',
    title: 'Still figuring things out',
    thoughts: "I don't have everything figured out yet and that's probably the most exciting part. There are still technologies I want to learn, products I want to build, and problems I want to solve. Every project feels like another step toward understanding what kind of engineer I want to become."
  }
];

export default function Philosophy() {
  return (
    <section className="relative w-full py-24 md:py-36 bg-background border-t border-borderLine" id="notebook">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20 md:space-y-28">
        
        {/* Title */}
        <div className="max-w-xl space-y-4">
          <p className="font-mono text-xs uppercase tracking-widest text-textSecondary">/ NOTEBOOK</p>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-textPrimary">
            Notebook
          </h2>
          <p className="text-sm text-textSecondary font-light leading-relaxed">
            Short thought entries, reflections on technology, and notes recorded in my personal journal.
          </p>
        </div>

        {/* Notebook grid (simulating notebook sheets) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {NOTEBOOK_ENTRIES.map((entry, idx) => (
            <article 
              key={idx}
              className="p-8 rounded-xl border border-borderLine bg-[#121214]/20 flex flex-col justify-between h-80 relative overflow-hidden"
              style={{
                // Light notebook rules pattern backdrop (subtle lines)
                background: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px)',
                backgroundSize: '100% 24px'
              }}
            >
              {/* Sheet Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-[9px] text-[#555] border-b border-borderLine/50 pb-2">
                  <span>PAGE_0{entry.page}</span>
                  <span>LOGFILE_DATE // {entry.date.toUpperCase()}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-lg md:text-xl font-serif text-textPrimary leading-snug">
                  {entry.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs md:text-sm text-textSecondary font-light leading-relaxed">
                  {entry.thoughts}
                </p>
              </div>

              {/* Sheet Footer */}
              <div className="flex items-center gap-1.5 font-mono text-[8px] text-[#444] pt-3 border-t border-borderLine/50">
                <span>SYSTEM_NOTE_VERIFIED // STATUS_RECORDED</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
