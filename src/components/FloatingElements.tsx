import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-10 w-16 h-16 border-2 border-purple-500/20 rounded-lg"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-20 h-20 border-2 border-blue-500/20 rounded-full"
        animate={{
          y: [0, -30, 0],
          rotate: -360,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-12 h-12 border-2 border-pink-500/20 rotate-45"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [45, 405, 45],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}