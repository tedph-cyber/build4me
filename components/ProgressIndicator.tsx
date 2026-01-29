'use client';

import { motion, MotionValue } from 'framer-motion';

interface ProgressIndicatorProps {
  scrollYProgress: MotionValue<number>;
}

export default function ProgressIndicator({ scrollYProgress }: ProgressIndicatorProps) {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
