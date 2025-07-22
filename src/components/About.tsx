import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { useSpring, animated } from '@react-spring/web';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const slideIn = {
  initial: { x: -60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.8 }
};

export default function About() {
  const [funFactSpring, setFunFactSpring] = useSpring(() => ({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
    config: { mass: 5, tension: 350, friction: 40 }
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

    setFunFactSpring.start({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
    });
  };

  const handleMouseLeave = () => {
    setFunFactSpring.start({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Shriyansh Dash</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Passionate about creating and innovating</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={slideIn}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-zinc-800 dark:to-zinc-900">
              <img
                src="https://i.postimg.cc/jdgpzhhy/Pi7-Tool-IMG-20240907-125042-446.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            {/* Floating Achievement Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-xl"
            >
              <Award className="w-6 h-6 text-purple-500" />
              <p className="text-sm font-medium mt-1 dark:text-white">Award Winning</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-6 -right-6 bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-xl"
            >
              <BookOpen className="w-6 h-6 text-blue-500" />
              <p className="text-sm font-medium mt-1 dark:text-white">Continuous Learner</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={slideIn}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                With a passion for technology and creativity, I've spent years honing my skills across various domains. From web development to data analysis, and from design to digital marketing, I bring a unique blend of technical expertise and creative vision to every project.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Education</h4>
                  <p className="text-gray-600 dark:text-gray-300">Computer Science Engineer</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Experience</h4>
                  <p className="text-gray-600 dark:text-gray-300">2+ years in Web-designing & Graphic Designing </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Problem Solver', 'Creative Thinker', 'Team Player', 'Detail-Oriented'].map((trait, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-4 py-2 bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                >
                  {trait}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Fun Fact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white inline-flex items-center gap-2">
              Fun Fact <Sparkles className="w-6 h-6 text-yellow-400" />
            </h3>
          </div>

          <animated.div
            style={funFactSpring}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative max-w-2xl mx-auto"
          >
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-800">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Sparkles className="w-12 h-12 text-yellow-400" />
                  </motion.div>
                </div>
                <p className="text-xl text-gray-800 dark:text-gray-200 text-center leading-relaxed">
                  I can adapt to any kind of work environment quickly in the most efficient way and I am flexible over any work 😁
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full blur-xl" />
            </div>
          </animated.div>
        </motion.div>
      </div>
    </div>
  );
}