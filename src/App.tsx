import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Socials from './components/Socials';
import Contact from './components/Contact';
import FloatingCursor from './components/FloatingCursor';
import ParallaxBackground from './components/ParallaxBackground';
import FloatingElements from './components/FloatingElements';
import ErrorBoundary from './components/ErrorBoundary';
import { useMousePosition } from './hooks/useMousePosition';
import { portfolioConfig } from './config/portfolio';
import { motion, useScroll } from 'framer-motion';

export default function App() {
  const { scrollYProgress } = useScroll();
  useMousePosition();

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-black transition-colors duration-200">
      <FloatingCursor />
      <ParallaxBackground />
      <FloatingElements />
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <ErrorBoundary>
        <Header config={portfolioConfig} />
        
        <main className="relative">
          <ErrorBoundary>
            <section id="hero" className="min-h-screen">
              <Hero config={portfolioConfig} />
            </section>
          </ErrorBoundary>
          
          <ErrorBoundary>
            <section id="about" className="min-h-screen">
              <About />
            </section>
          </ErrorBoundary>

          <ErrorBoundary>
            <section id="skills" className="min-h-screen">
              <Skills config={portfolioConfig} />
            </section>
          </ErrorBoundary>

          <ErrorBoundary>
            <section id="experience" className="min-h-screen">
              <Experience config={portfolioConfig} />
            </section>
          </ErrorBoundary>

          <ErrorBoundary>
            <section id="blog" className="min-h-screen">
              <Blog />
            </section>
          </ErrorBoundary>

          <ErrorBoundary>
            <section id="testimonials" className="min-h-screen">
              <Testimonials />
            </section>
          </ErrorBoundary>

          <ErrorBoundary>
            <section id="socials" className="min-h-screen">
              <Socials />
            </section>
          </ErrorBoundary>
          
          <ErrorBoundary>
            <section id="contact" className="min-h-screen">
              <Contact config={portfolioConfig} />
            </section>
          </ErrorBoundary>
        </main>
      </ErrorBoundary>
    </div>
  );
}