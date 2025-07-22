import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import ParallaxBackground from './ParallaxBackground';
import FloatingElements from './FloatingElements';
import FloatingCursor from './FloatingCursor';
import { portfolioConfig } from '../config/portfolio';
import { Download, Github } from 'lucide-react';

export default function ToolsProjects() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference on initial load
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);

    // Listen for changes in system preference
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-black transition-colors duration-200">
      <FloatingCursor />
      <ParallaxBackground />
      <FloatingElements />
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 origin-left z-50"
      />

      <Header config={portfolioConfig} />
      
      <main className="relative pt-20">
        <section className="min-h-screen py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 mb-4">
                Tools & Projects
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Explore my tools and projects that showcase my skills and passion for development
              </p>
            </motion.div>

            {/* Tools Section */}
            <div className="mb-24">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                Tools
              </h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl overflow-hidden"
              >
                <div className="p-8 flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      Kiro IDE
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-2xl">
                      A powerful integrated development environment designed to enhance your coding experience with advanced features and intuitive interface.
                    </p>
                  </div>
                  
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://drive.google.com/file/d/10tbFyIJ5aYVwShnThn7dKh75BMXmI21m/view?usp=sharing" // Replace with your actual Google Drive link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Projects Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                Projects
              </h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl overflow-hidden"
              >
                <div className="p-8 flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      Virtual Mouse Project
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-2xl">
                      A computer vision-based project that allows users to control their mouse cursor using hand gestures, providing an innovative way to interact with computers.
                    </p>
                  </div>
                  
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/shrixtacy/Virtual-Mouse" // Replace with your actual GitHub repo link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Access Project
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}