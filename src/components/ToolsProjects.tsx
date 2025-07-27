import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import ParallaxBackground from './ParallaxBackground';
import FloatingElements from './FloatingElements';
import FloatingCursor from './FloatingCursor';
import { portfolioConfig } from '../config/portfolio';
import { Download, Github, ExternalLink } from 'lucide-react';

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
                <div className="p-4 sm:p-8 flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      Kiro IDE
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-2xl text-sm sm:text-base">
                      A powerful integrated development environment designed to enhance your coding experience with advanced features and intuitive interface.
                    </p>
                  </div>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://drive.google.com/file/d/10tbFyIJ5aYVwShnThn7dKh75BMXmI21m/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Download
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* AI Code Generation Tools Section */}
            <div className="mb-24">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                AI Code Generation Tools
              </h2>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Lovable */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                      Lovable
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      Natural language "vibe" coding—generate full-stack web apps conversationally.
                    </p>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://lovable.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Site
                    </motion.a>
                  </div>
                </motion.div>

                {/* Bolt.new */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                      Bolt.new
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      Flexible vibe coding—build apps from prompts; focus on fast MVPs and rapid UI.
                    </p>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://bolt.new"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Site
                    </motion.a>
                  </div>
                </motion.div>

                {/* Cursor */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                      Cursor
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      AI code editor/IDE with advanced contextual code completion, Q&A, and debugging.
                    </p>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://cursor.so"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Site
                    </motion.a>
                  </div>
                </motion.div>

                {/* Replit */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                      Replit
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      AI-enabled online IDE for coding, debugging, and deploying in Real Time.
                    </p>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://replit.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500 to-green-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Site
                    </motion.a>
                  </div>
                </motion.div>

                {/* v0 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                      v0
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      Vibe coding with a focus on building fast and transparency in each building step.
                    </p>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://v0.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Site
                    </motion.a>
                  </div>
                </motion.div>

                {/* Base44 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                      Base44
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      Vibe/no-code platform focusing on security controls and workflows.
                    </p>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://base44.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-pink-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Site
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Presentation Tools Section */}
            <div className="mb-24">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                Presentation Tools
              </h2>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Gamma App */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                      Gamma App
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      Create, refine and customize decks in under a minute, PowerPoint export
                    </p>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://gamma.app/ai-powerpoint"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Site
                    </motion.a>
                  </div>
                </motion.div>

                {/* Presentations.AI */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                      Presentations.AI
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      ChatGPT-style instant slide creation, smart templates, export to PPT, brand sync, multilingual, analytics
                    </p>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://presentations.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Site
                    </motion.a>
                  </div>
                </motion.div>

                {/* Canva */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                      Canva
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      The traditional method for creating presentations and designs
                    </p>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://canva.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Site
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Research Tools Section */}
            <div className="mb-24">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                Research Tools
              </h2>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {/* MyMap.AI */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                      MyMap.AI
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      Market Analysis Tool - Enter topic, generate market trends, competitors, opportunities, real-time data, export, team share
                    </p>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://mymap.ai/market-analysis-tool"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Site
                    </motion.a>
                  </div>
                </motion.div>

                {/* Perplexity */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                  className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                      Perplexity
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      AI-powered research and search engine for comprehensive information gathering
                    </p>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://perplexity.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500 to-red-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Site
                    </motion.a>
                  </div>
                </motion.div>

                {/* Claude */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                      Claude
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      Advanced AI assistant for research, analysis, and comprehensive information processing
                    </p>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://claude.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Site
                    </motion.a>
                  </div>
                </motion.div>

                {/* DeepSeek */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                      DeepSeek
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      AI research assistant for deep analysis and comprehensive research tasks
                    </p>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://deepseek.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Site
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Image Generation Tools Section */}
            <div className="mb-24">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                Image Generation Tools
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Leonardo.AI */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                      Leonardo.AI
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      HD images, multiple styles, 150 daily tokens
                    </p>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://leonardo.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Site
                    </motion.a>
                  </div>
                </motion.div>

                {/* Recraft AI */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                  className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                      Recraft AI
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      10,000/mo free images, upscaling, commercial use allowed
                    </p>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://recraft.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Site
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Video Generation Tools Section */}
            <div className="mb-24">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                Video Generation Tools
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                {/* RenderForest */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                      RenderForest
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      Professional video creation platform with templates and AI-powered tools
                    </p>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://renderforest.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Site
                    </motion.a>
                  </div>
                </motion.div>

                {/* InVideo AI */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                  className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                      InVideo AI
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      AI-powered video creation tool for quick and professional video generation
                    </p>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://invideo.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Site
                    </motion.a>
                  </div>
                </motion.div>
              </div>
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
                <div className="p-4 sm:p-8 flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      Virtual Mouse Project
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-2xl text-sm sm:text-base">
                      A computer vision-based project that allows users to control their mouse cursor using hand gestures, providing an innovative way to interact with computers.
                    </p>
                  </div>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/shrixtacy/Virtual-Mouse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
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