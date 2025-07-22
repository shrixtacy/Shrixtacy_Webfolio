import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import type { WordPressPost } from '../services/wordpress';

interface BlogCardProps {
  post: WordPressPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-zinc-800"
    >
      {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
        <img
          src={post._embedded['wp:featuredmedia'][0].source_url}
          alt={post.title.rendered}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          {formatDate(post.date)}
        </div>
        <h3 
          className="text-xl font-semibold text-gray-900 dark:text-white mb-2"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <div
          className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
        >
          Read More
          <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </div>
    </motion.article>
  );
}