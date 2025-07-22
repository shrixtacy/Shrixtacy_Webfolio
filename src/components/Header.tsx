import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { BarChart2, Moon, Sun, Menu, X } from 'lucide-react';
import type { PortfolioConfig } from '../config/portfolio';
import { Link, useLocation } from 'react-router-dom';

type HeaderProps = {
  config: PortfolioConfig;
};

export default function Header({ config }: HeaderProps) {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Transform values based on scroll - smoother and larger
  const headerHeight = useTransform(scrollY, [0, 150], [72, 64]);
  const headerPadding = useTransform(scrollY, [0, 150], [24, 16]);
  const logoScale = useTransform(scrollY, [0, 150], [1, 0.95]);
  const borderRadius = useTransform(scrollY, [0, 150], [0, 32]);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

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

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-out ${
        isScrolled ? 'px-6 pt-4' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-3/4 max-w-xs z-50 shadow-xl md:hidden flex flex-col"
            style={{ 
              backgroundColor: isDark ? 'rgb(24, 24, 27)' : 'rgb(255, 255, 255)',
              boxShadow: '0 0 25px rgba(0, 0, 0, 0.5)'
            }}
          >
            <div 
              className="p-4 border-b flex justify-between items-center"
              style={{
                borderColor: isDark ? 'rgb(39, 39, 42)' : 'rgb(229, 231, 235)',
                backgroundColor: isDark ? 'rgb(24, 24, 27)' : 'rgb(255, 255, 255)'
              }}
            >
              <span 
                className="font-bold text-xl" 
                style={{ color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }}
              >
                {config.title}
              </span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full"
                style={{ 
                  backgroundColor: isDark ? 'rgb(39, 39, 42)' : 'rgb(243, 244, 246)'
                }}
              >
                <X 
                  className="w-6 h-6" 
                  style={{ color: isDark ? 'rgb(229, 231, 235)' : 'rgb(75, 85, 99)' }}
                />
              </motion.button>
            </div>
            <div 
              className="flex flex-col p-4 space-y-4"
              style={{ backgroundColor: isDark ? 'rgb(24, 24, 27)' : 'rgb(255, 255, 255)' }}
            >
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item);
                    setMobileMenuOpen(false);
                  }}
                  className="capitalize py-2 text-lg font-bold text-left"
                  style={{ color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }}
                >
                  {item}
                </button>
              ))}
              <Link 
                to="/tools-projects" 
                onClick={() => setMobileMenuOpen(false)}
                className="capitalize py-2 text-lg font-bold"
                style={{ color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }}
              >
                Tools & Projects
              </Link>
            </div>
            <div 
              className="mt-auto p-4 border-t"
              style={{
                borderColor: isDark ? 'rgb(39, 39, 42)' : 'rgb(229, 231, 235)',
                backgroundColor: isDark ? 'rgb(24, 24, 27)' : 'rgb(255, 255, 255)'
              }}
            >
              <div className="flex items-center space-x-4">
                {config.social.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: isDark ? 'rgb(229, 231, 235)' : 'rgb(75, 85, 99)' }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.header 
        className={`bg-white dark:bg-zinc-900 md:bg-white/95 md:dark:bg-black/95 backdrop-blur-xl transition-all duration-700 ease-out ${
          isScrolled 
            ? 'mx-auto max-w-5xl rounded-full border border-gray-200/60 dark:border-zinc-700/60 shadow-2xl shadow-black/10 dark:shadow-white/5' 
            : 'border-b border-gray-100 dark:border-zinc-800 shadow-sm'
        }`}
        style={{
          height: headerHeight,
          borderRadius: isScrolled ? borderRadius : 0,
        }}
        animate={{
          scale: isScrolled ? 0.98 : 1,
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div 
          className="max-w-7xl mx-auto transition-all duration-700 ease-out"
          style={{
            paddingLeft: headerPadding,
            paddingRight: headerPadding,
          }}
        >
          <motion.div 
            className="flex justify-between items-center"
            style={{ height: headerHeight }}
          >
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              style={{ scale: logoScale }}
            >
              <BarChart2 className={`text-black dark:text-white transition-all duration-700 ease-out ${
                isScrolled ? 'w-7 h-7' : 'w-9 h-9'
              }`} />
              <span className={`font-bold text-black dark:text-white transition-all duration-700 ease-out ${
                isScrolled ? 'text-xl' : 'text-2xl'
              }`}>{config.title}</span>
            </motion.div>
            
            <nav className={`hidden md:flex transition-all duration-700 ease-out ${
              isScrolled ? 'space-x-7' : 'space-x-9'
            }`}>
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white capitalize transition-all duration-700 ease-out font-medium ${
                    isScrolled ? 'text-base' : 'text-lg'
                  }`}
                >
                  {item}
                </button>
              ))}
              <Link to="/tools-projects">
                <button className={`text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white capitalize transition-all duration-700 ease-out flex items-center space-x-1 font-medium ${
                  isScrolled ? 'text-base' : 'text-lg'
                }`}>
                  <span>Tools & Projects</span>
                </button>
              </Link>
            </nav>

            <div className={`flex items-center transition-all duration-700 ease-out ${
              isScrolled ? 'space-x-3' : 'space-x-4'
            }`}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsDark(!isDark)}
                className={`rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all duration-700 ease-out ${
                  isScrolled ? 'p-2' : 'p-2.5'
                }`}
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? (
                  <Sun className={`text-gray-600 dark:text-gray-300 transition-all duration-700 ease-out ${
                    isScrolled ? 'w-5 h-5' : 'w-6 h-6'
                  }`} />
                ) : (
                  <Moon className={`text-gray-600 dark:text-gray-300 transition-all duration-700 ease-out ${
                    isScrolled ? 'w-5 h-5' : 'w-6 h-6'
                  }`} />
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
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-700 ease-out hidden sm:block"
                  >
                    <Icon className={`transition-all duration-700 ease-out ${
                      isScrolled ? 'w-6 h-6' : 'w-7 h-7'
                    }`} />
                  </motion.a>
                );
              })}
              
              {/* Mobile menu button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 p-2"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                )}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.header>
    </motion.div>
  );
}