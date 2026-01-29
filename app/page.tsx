'use client';

import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import ProgressIndicator from '@/components/ProgressIndicator';
import { projects } from '@/data/projects';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white">
      {/* Progress indicator */}
      <ProgressIndicator scrollYProgress={scrollYProgress} />

      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <section className="relative px-6 md:px-12 lg:px-24 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6">
            Selected Works
          </h2>
          <div className="w-24 h-px bg-white" />
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
