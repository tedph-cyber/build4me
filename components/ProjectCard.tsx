'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  location: string;
  year: string;
  description: string;
  image: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Create different parallax speeds for each card based on index
  const yOffset = index % 2 === 0 ? [100, -100] : [-50, 50];
  const rotateOffset = index % 2 === 0 ? [2, -2] : [-2, 2];
  
  const y = useTransform(scrollYProgress, [0, 1], yOffset);
  const rotate = useTransform(scrollYProgress, [0, 1], rotateOffset);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothY = useSpring(y, springConfig);
  const smoothRotate = useSpring(rotate, springConfig);
  const smoothScale = useSpring(scale, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      style={{
        y: smoothY,
        rotate: smoothRotate,
        scale: smoothScale,
      }}
      className="relative w-full mb-32"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
    >
      <motion.div
        animate={{
          rotateY: isHovered ? mousePosition.x : 0,
          rotateX: isHovered ? -mousePosition.y : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div className={`grid ${index % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2'} gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
          <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} space-y-6`}>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1 mb-4 text-xs tracking-[0.3em] uppercase border border-zinc-700 text-zinc-500">
                {project.category}
              </div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4">
                {project.title}
              </h3>
              <div className="flex gap-8 text-sm tracking-wider text-zinc-500 mb-6">
                <span>{project.location}</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                {project.description}
              </p>
            </motion.div>
          </div>

          <motion.div
            className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} relative group`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden aspect-[4/3]">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.div
                className="absolute bottom-8 right-8 text-white text-6xl font-light opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                initial={{ y: 20 }}
                whileHover={{ y: 0 }}
              >
                {String(project.id).padStart(2, '0')}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
