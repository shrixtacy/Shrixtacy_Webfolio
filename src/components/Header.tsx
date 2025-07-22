import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart2, Moon, Sun, Wrench } from 'lucide-react';
import type { PortfolioConfig } from '../config/portfolio';
import { Link, useLocation } from 'react-router-dom';

type HeaderProps = {
  config: PortfolioConfig;
};

export default function Header({ config }: HeaderProps) {
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

  const location = useLocation();
  
  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = ['about', 'skills', 'experience', 'socials'];
  const isHomePage = location.pathname === '/';

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <BarChart2 className="w-8 h-8 text-black dark:text-white" />
            <span className="font-bold text-xl text-black dark:text-white">{config.title}</span>
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white capitalize transition-colors"
              >
                {item}
              </button>
            ))}
            <Link to="/tools-projects">
              <button className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white capitalize transition-colors flex items-center space-x-1">
                <span>Tools & Projects</span>
              </button>
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              )}
            </motion.button>

            {config.social.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.header>
  );
}