'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TextReveal from '@/components/TextReveal';
import ProjectDatabase from '@/components/ProjectDatabase';
import Publications from '@/components/Publications';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Philosophy from '@/components/Philosophy';
import MissionLog from '@/components/MissionLog';
import Timeline from '@/components/Timeline';

export default function Home() {
  return (
    <main className="min-h-screen relative bg-background text-textPrimary selection:bg-textPrimary/10 selection:text-textPrimary overflow-x-hidden">
      <Navbar />
      <Hero />
      <TextReveal />
      <ProjectDatabase />
      <Publications />
      <MissionLog/>
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  );
}
