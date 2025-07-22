import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const testimonials = [
    {
      quote: "An exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are outstanding.",
      author: "Smaranika Tripathy",
      title: "Assistant Manager , BVPL",
      image: "https://i.ibb.co/LYwkt9M/Pi7-Tool-Whats-App-Image-2024-11-19-at-9-27-19-AM-2.jpg",
      rating: 5
    },
    {
      quote: "Working with them was a game-changer for our project. Their technical expertise and communication skills made the development process smooth and efficient.",
      author: "Debashish Dash",
      title: "Facility Manager, CNBT BVG",
      image: "https://i.ibb.co/Jc2hFL7/Pi7-Tool-Whats-App-Image-2024-11-19-at-9-27-19-AM-1.jpg",
      rating: 5
    },
    {
      quote: "Their innovative approach to problem-solving and dedication to quality made our collaboration incredibly successful.",
      author: "Amaresh Pati",
      title: "Founder, APIMAN",
      image: "https://i.ibb.co/mqqx5Nb/Pi7-Tool-Whats-App-Image-2024-11-19-at-9-27-19-AM.jpg",
      rating: 5
    }
  ];

  return (
    <div className="py-20 bg-white dark:bg-black relative overflow-hidden">
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
          className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div style={{ y }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block mb-4"
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
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white relative z-10">
                Client Testimonials
              </h2>
            </div>
          </motion.div>
          <p className="text-xl text-gray-600 dark:text-gray-300">What others say about working with me</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group bg-gray-50 dark:bg-zinc-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-zinc-800 relative overflow-hidden"
            >
              {/* Hover effect gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-colors duration-300" />

              <div className="relative">
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 15 }}
                  className="mb-6"
                >
                  <Quote className="w-8 h-8 text-black dark:text-white" />
                </motion.div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{testimonial.quote}"</p>

                <motion.div 
                  className="flex items-center"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="relative">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-sm"
                    />
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover relative z-10"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.author}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{testimonial.title}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}