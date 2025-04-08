import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
const projects = [{
  id: 1,
  contents: [{
    title: 'Parkview Plaza Phase 1',
    category: 'Commercial Development',
    description: 'Initial construction phase of our landmark commercial tower with sustainable design principles.'
  }, {
    title: 'Parkview Plaza Phase 2',
    category: 'Commercial Development',
    description: 'Expansion phase incorporating smart building technology and green spaces.'
  }, {
    title: 'Parkview Plaza Completion',
    category: 'Commercial Development',
    description: 'Final phase delivering state-of-the-art office spaces and retail environments.'
  }],
  images: ['https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80', 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'],
  link: '/projects/parkview-plaza'
}, {
  id: 2,
  contents: [{
    title: 'Riverside Bridge Planning',
    category: 'Transportation',
    description: 'Initial design and environmental impact assessment for the cable-stayed bridge project.'
  }, {
    title: 'Riverside Bridge Construction',
    category: 'Transportation',
    description: 'Main construction phase implementing innovative engineering solutions.'
  }, {
    title: 'Riverside Bridge Completion',
    category: 'Transportation',
    description: 'Final phase delivering a sustainable connection between communities.'
  }],
  images: ['https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', 'https://images.unsplash.com/photo-1545126634-40e8a2a3141a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80', 'https://images.unsplash.com/photo-1506755594592-349d12a96644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'],
  link: '/projects/riverside-bridge'
}, {
  id: 3,
  contents: [{
    title: 'Green Valley Initial Phase',
    category: 'Housing Development',
    description: 'Groundbreaking of our sustainable residential complex with modern amenities.'
  }, {
    title: 'Green Valley Construction',
    category: 'Housing Development',
    description: 'Development of smart homes with integrated green technologies.'
  }, {
    title: 'Green Valley Community',
    category: 'Housing Development',
    description: 'Completion of our flagship eco-friendly residential development.'
  }],
  images: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80'],
  link: '/projects/green-valley-residences'
}];
const ProjectCard = ({
  project
}: {
  project: (typeof projects)[0];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % project.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [project.images.length]);
  const content = project.contents[currentIndex];
  return <motion.div whileHover={{
    scale: 1.02
  }} transition={{
    duration: 0.3
  }} viewport={{
    once: true
  }} className="group relative h-[400px] md:h-[450px] lg:h-[400px] w-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500">
      <motion.div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
      <AnimatePresence mode="wait">
        <motion.img key={currentIndex} src={project.images[currentIndex]} alt={content.title} initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: 0.7
      }} className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />
      </AnimatePresence>
      <motion.div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
        <AnimatePresence mode="wait">
          <motion.div key={currentIndex} className="space-y-4" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} transition={{
          duration: 0.5
        }}>
            <motion.span className="inline-block text-sm font-medium bg-blue-900/80 px-3 py-1 rounded-full text-white">
              {content.category}
            </motion.span>
            <motion.h3 className="text-3xl md:text-4xl font-bold text-white">
              {content.title}
            </motion.h3>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.div key={currentIndex} className="space-y-4" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }}>
            <motion.p className="text-white text-lg leading-relaxed">
              {content.description}
            </motion.p>
            <motion.div className="flex items-center text-yellow-400 font-semibold group/link">
              <Link to={project.link} className="flex items-center hover:text-yellow-300">
                Read More
                <ArrowRightIcon size={20} className="ml-2 transform transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>;
};
const FeaturedProjects = () => {
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Featured Projects" subtitle="Explore some of our most impactful work across various sectors." centered={true} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map(project => <ProjectCard key={project.id} project={project} />)}
        </div>
        <div className="mt-12 text-center">
          <Button to="/projects" variant="secondary">
            View All Projects
          </Button>
        </div>
      </div>
    </section>;
};
export default FeaturedProjects;