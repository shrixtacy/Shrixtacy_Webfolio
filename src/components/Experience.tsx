import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import type { PortfolioConfig } from '../config/portfolio';

type ExperienceProps = {
  config: PortfolioConfig;
};

export default function Experience({ config }: ExperienceProps) {
  const experiences = [
    {
      title: "Data Analyst",
      company: "Apiman Labs",
      period: "2024 - Present",
      description: "Led the team in extracting, storing, and managing student and company data, focusing on growth analysis and data-driven decision-making.",
      technologies: ["Spreadsheet", "PowerBI", "Tableu", "Data Management"]
    },
    {
      title: "Digital Marketing Head",
      company: "Apiman Labs",
      period: "2024 - 2024",
      description: "Managed social media pages and orchestrated email communications, including WhatsApp automations for bulk messaging and other digital marketing initiatives.",
      technologies: ["Meta","Google ads" , "Socialmedia Manager", "Aisensy", "Mailchimp"]
    },
    {
      title: "Content Creation & Graphic Designing",
      company: "Career Vision Hub",
      period: "2023 - 2024",
      description:"Designed eye-catching social media panels and content, and edited YouTube videos to boost engagement." ,
      technologies: ["Figma", "Canva", "Inkscape", "Capcut", "Adobe Premier Pro"]
    }
  ];

  return (
    <div className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Building digital solutions that make a difference</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-zinc-800"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-gray-100 dark:bg-zinc-800 rounded-lg">
                    <Briefcase className="w-6 h-6 text-black dark:text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}