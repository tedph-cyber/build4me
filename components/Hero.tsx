'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black" />
      
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          <div className="inline-block px-6 py-2 text-xs tracking-[0.5em] uppercase border border-zinc-700 text-zinc-400 mb-12">
            Architecture Portfolio
          </div>
        </motion.div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tighter mb-6">
          Design
          <br />
          <span className="italic font-light">Excellence</span>
        </h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-zinc-400 text-lg md:text-xl tracking-wide max-w-2xl mx-auto"
        >
          Creating spaces that inspire, function beautifully,
          <br />
          and stand the test of time
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20"
        >
          <div className="flex flex-col items-center gap-4 text-zinc-500 text-sm tracking-wider">
            <span>Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 5v14m0 0l-7-7m7 7l7-7"/>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
