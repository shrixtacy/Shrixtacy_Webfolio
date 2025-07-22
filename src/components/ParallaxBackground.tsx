import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [360, 0]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"
      />
    </div>
  );
}