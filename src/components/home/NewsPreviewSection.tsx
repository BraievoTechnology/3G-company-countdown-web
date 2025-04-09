import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CalendarIcon, ClockIcon } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
const latestNews = [{
  id: 1,
  title: 'BuildConstruct Wins Excellence in Construction Award',
  excerpt: 'Our City Center Tower project was recognized for outstanding design and sustainable construction practices.',
  image: 'https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  date: 'June 15, 2023',
  readTime: '5 min read'
}, {
  id: 2,
  title: 'Breaking Ground on New Coastal Protection System',
  excerpt: 'Innovative coastal protection system designed to protect communities from rising sea levels.',
  image: 'https://images.unsplash.com/photo-1574155376612-bfa4ed8aabfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  date: 'May 22, 2023',
  readTime: '4 min read'
}, {
  id: 3,
  title: 'BuildConstruct Expands Sustainable Construction Practices',
  excerpt: 'New eco-friendly construction methods implemented across all projects, reducing carbon footprint.',
  image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  date: 'April 10, 2023',
  readTime: '6 min read'
}];
const NewsPreviewSection = () => {
  return <section id="news" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Latest News & Updates" subtitle="Stay informed about our latest projects and industry insights" centered={true} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {latestNews.map((news, index) => <motion.div key={news.id} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.2,
          ease: 'easeOut'
        }} viewport={{
          once: true
        }} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <motion.img whileHover={{
              scale: 1.1
            }} transition={{
              duration: 0.3
            }} src={news.image} alt={news.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <CalendarIcon size={14} className="mr-2" />
                  <span className="mr-4">{news.date}</span>
                  <ClockIcon size={14} className="mr-2" />
                  <span>{news.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3 line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {news.excerpt}
                </p>
                <Link to={`/news/${news.id}`} className="inline-flex items-center text-yellow-500 font-medium hover:text-yellow-600 transition-colors">
                  Read More <ArrowRightIcon size={16} className="ml-2" />
                </Link>
              </div>
            </motion.div>)}
        </div>
        <div className="text-center">
          <Button to="/news" variant="secondary">
            View All News
          </Button>
        </div>
      </div>
    </section>;
};
export default NewsPreviewSection;