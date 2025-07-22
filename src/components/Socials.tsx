import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Github, Linkedin, Mail } from 'lucide-react';
import { useSpring, animated } from '@react-spring/web';

const socials = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/obs1ruct/',
    color: 'from-pink-500 to-purple-500'
  },
  {
    name: 'Github',
    icon: Github,
    url: 'https://github.com/shrixtacy',
    color: 'from-gray-700 to-gray-900'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/shriyanshdash/',
    color: 'from-blue-600 to-blue-800'
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:shriyanshdash12@gmail.com',
    color: 'from-red-500 to-red-700'
  }
];

export default function Socials() {
  const [springs, api] = useSpring(() => ({
    scale: 1,
    rotate: 0,
  }));

  const handleMouseEnter = () => {
    api.start({
      scale: 1.1,
      rotate: 5,
      config: {
        tension: 300,
        friction: 10
      }
    });
  };

  const handleMouseLeave = () => {
    api.start({
      scale: 1,
      rotate: 0,
      config: {
        tension: 300,
        friction: 10
      }
    });
  };

  return (
    <section className="py-20 bg-white dark:bg-black relative overflow-hidden">
      {/* Background decorative elements */}
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
          className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Connect With Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Let's stay in touch across all platforms</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <animated.a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={springs}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="block"
                >
                  <div className={`relative group bg-gradient-to-br ${social.color} p-6 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2`}>
                    {/* Animated background effect */}
                    <div className="absolute inset-0 bg-white dark:bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    
                    <div className="relative z-10 flex flex-col items-center">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="mb-4"
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-white">{social.name}</h3>
                      
                      {/* Hover effect text */}
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="mt-2 text-sm text-white/80"
                      >
                        Connect →
                      </motion.p>
                    </div>

                    {/* Decorative dots */}
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white/10 rounded-full blur-lg" />
                    <div className="absolute -top-2 -left-2 w-16 h-16 bg-black/10 rounded-full blur-lg" />
                  </div>
                </animated.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}