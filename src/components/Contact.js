'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', project: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', project: '' });
      }, 3000);
    }
  };

  return (
    <section className="relative w-full px-6 md:px-12 py-24 bg-background border-b border-borderLine" id="contact">
      <div className="max-w-[1180px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        {/* Left Column: Heading and email link */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-4">
            <span className="font-archivo font-extrabold text-[10px] tracking-wider text-accent uppercase">/ INQUIRIES</span>
            <h2 className="font-clash text-4xl sm:text-5xl lg:text-6xl font-normal text-textPrimary tracking-tight mt-2">
              Let’s talk.
            </h2>
            <p className="font-sans text-xs md:text-sm text-textSecondary font-light leading-relaxed max-w-md">
              Have a project, research collaboration, or just want to chat? Fill out the form and I’ll get back to you soon.
            </p>
          </div>

          {/* Direct contact link */}
          <div className="space-y-2 pt-6">
            <span className="font-archivo font-extrabold text-[9px] text-[#555] tracking-wider uppercase block">
              DIRECT EMAIL
            </span>
            <a 
              href="mailto:arpitjain.contact@gmail.com" 
              className="font-clash text-xl md:text-2xl font-normal text-textPrimary hover:underline"
            >
              arpitj9906@gmail.com
            </a>
          </div>

          {/* Socials Grid */}
          <div className="space-y-2 pt-6">
            <span className="font-archivo font-extrabold text-[9px] text-[#555] tracking-wider uppercase block">
              SOCIAL CHANNELS
            </span>
            <div className="flex gap-4 font-sans text-xs text-textSecondary">
              <a href="https://www.linkedin.com/in/arpit-jainnn/" target="_blank" rel="noreferrer" className="hover:text-textPrimary transition-colors">
                LinkedIn
              </a>
              <span>/</span>
              <a href="https://github.com/arpitt-jain" target="_blank" rel="noreferrer" className="hover:text-textPrimary transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-8 bg-[#ffffff] border border-borderLine p-8 rounded-2xl shadow-sm">
            {/* Input Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="font-archivo font-extrabold text-[9px] text-textSecondary tracking-wider uppercase block">
                Name
              </label>
              <input 
                type="text" 
                id="name"
                required
                placeholder="Your name" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b border-borderLine py-3 text-xs md:text-sm text-textPrimary placeholder:text-textSecondary/40 focus:outline-none focus:border-textPrimary transition-colors"
              />
            </div>

            {/* Input Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="font-archivo font-extrabold text-[9px] text-textSecondary tracking-wider uppercase block">
                Email
              </label>
              <input 
                type="email" 
                id="email"
                required
                placeholder="your.email@example.com" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-borderLine py-3 text-xs md:text-sm text-textPrimary placeholder:text-textSecondary/40 focus:outline-none focus:border-textPrimary transition-colors"
              />
            </div>

            {/* Input Project Description */}
            <div className="space-y-2">
              <label htmlFor="project" className="font-archivo font-extrabold text-[9px] text-textSecondary tracking-wider uppercase block">
                Your Project
              </label>
              <textarea 
                id="project"
                rows="4"
                placeholder="Describe your project, goals, or message..." 
                value={formData.project}
                onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                className="w-full bg-transparent border-b border-borderLine py-3 text-xs md:text-sm text-textPrimary placeholder:text-textSecondary/40 focus:outline-none focus:border-textPrimary resize-none transition-colors"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit"
                disabled={submitted}
                className="group flex items-center gap-4 bg-[#111111] text-[#faf7f3] rounded-full pl-6 pr-3 py-2.5 font-archivo text-xs font-semibold tracking-wider uppercase hover:bg-opacity-95 transition-all shadow border border-white/5 disabled:opacity-50"
              >
                <span>{submitted ? 'Submitted!' : 'Submit'}</span>
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
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
