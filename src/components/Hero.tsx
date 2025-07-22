import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import type { PortfolioConfig } from '../config/portfolio';

type HeroProps = {
  config: PortfolioConfig;
};

export default function Hero({ config }: HeroProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [springs, api] = useSpring(() => ({
    from: { scale: 1 },
    config: { tension: 300, friction: 10 },
  }));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    api.start({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      scale: 1.02,
    });
  };

  const handleMouseLeave = () => {
    api.start({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      scale: 1,
    });
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-zinc-900 overflow-hidden">
      <motion.div 
        style={{ y, opacity }} 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {config.subtitle.split(' ').map((word, i, arr) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="inline-block"
              >
                {i === arr.length - 1 ? (
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                    {word}
                  </span>
                ) : (
                  `${word} `
                )}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            {config.description}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {config.skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <animated.div
                key={index}
                style={springs}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-zinc-800 transform-gpu"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.1
                  }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl"
                    />
                    <Icon className="w-8 h-8 text-black dark:text-white relative z-10" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">{skill.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{skill.description}</p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 text-sm text-gray-800 dark:text-gray-200 rounded-full"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </animated.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}