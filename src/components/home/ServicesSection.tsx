import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BuildingIcon, DropletIcon, LeafIcon, HomeIcon, BuildingIcon as UrbanIcon, Briefcase as BriefcaseIcon } from 'lucide-react';
const services = [{
  id: 'procurement and contracts',
  title: 'Procurement and Contracts',
  subtitle: 'Procurement involves making purchasing decisions under conditions of scarcity. To ensure project success, a legally binding contract is essential, as it defines the rights and obligations of all parties involved. Effective Contract Administration is key to successfully delivering the project.',
  icon: <BuildingIcon className="w-8 h-8" />,
  link: '/services/construction',
  image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
}, {
  id: 'highways and transportation engineering',
  title: 'Highways and Transportation Engineering',
  subtitle: 'Sri Lanka’s ongoing infrastructure developments, particularly in roads and related works, have opened up valuable opportunities for the firm to demonstrate its expertise in recent Highways and Transportation projects.',
  icon: <HomeIcon className="w-8 h-8" />,
  link: '/services/real-estate',
  image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
}, {
  id: 'water resources engineering',
  title: 'Water Resources Engineering',
  subtitle: '3G Consultants (Pvt) Ltd. places high importance on water conservation and has consistently focused on sustainable water resource management, strictly following international standards in Water Resource Engineering.',
  icon: <LeafIcon className="w-8 h-8" />,
  link: '/services/technology',
  image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
}, {
  id: 'environmental and climate resilience engineering',
  title: 'Environmental and Climate Resilience Engineering',
  subtitle: 'Sri Lanka, known for its rich biodiversity, offers ideal conditions for diverse flora and fauna. 3G Consultants (Pvt) Ltd. is committed to environmental protection and strongly values sustainable development and conservation.',
  icon: <DropletIcon className="w-8 h-8" />,
  link: '/services/export',
  image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
}, {
  id: 'urban, rural and regional development',
  title: 'Urban, Rural and Regional Development',
  subtitle: 'To meet the growing population and rising living standards, numerous Urban, Rural, and Regional development projects are being initiated. 3G Consultants (Pvt) Ltd. believes that well-planned, innovative design is essential for these projects, especially when considering future expansion needs.',
  icon: <BriefcaseIcon className="w-8 h-8" />,
  link: '/services/procurement',
  image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
}, {
  id: 'commercial and housing development',
  title: 'Commercial and Housing Development',
  subtitle: 'In many developing countries, there is a growing trend to adopt modern living standards by embracing Western-inspired architectural styles and advanced technologies, seen in developments like luxury housing, IT parks, educational cities, waterfronts, high-rise buildings, and iconic structures.',
  icon: <UrbanIcon className="w-8 h-8" />,
  link: '/services/investment',
  image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
}];
const ServiceIcon = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return <motion.div className="mb-4 p-3 bg-white/10 backdrop-blur-sm rounded-lg w-fit" whileHover={{
    scale: 1.1,
    rotate: [0, -10, 10, -10, 10, 0],
    transition: {
      rotate: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  }} animate={{
    y: [0, -5, 0]
  }} transition={{
    y: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }}>
      {children}
    </motion.div>;
};
const ServiceCard = ({
  service
}: {
  service: (typeof services)[0];
}) => {
  return <motion.div className="group relative flex-1 min-w-[200px] transition-all duration-500 rounded-none hover:rounded-[20px] overflow-hidden hover:flex-[1.5]" initial={{
    scale: 0.95
  }} whileHover={{
    scale: 1
  }} transition={{
    scale: {
      duration: 0.3,
      ease: 'easeOut'
    }
  }} style={{
    perspective: '1000px'
  }}>
      <Link to={service.link} className="block h-full">
        <motion.div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${service.image})`,
        transformStyle: 'preserve-3d'
      }} initial={{
        scale: 1
      }} whileHover={{
        scale: [1, 1.3, 1.2]
      }} transition={{
        scale: {
          duration: 2,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut'
        }
      }} />
        <motion.div className="absolute inset-0" initial={{
        opacity: 0,
        background: 'linear-gradient(to bottom, rgba(23, 37, 84, 0) 0%, rgba(23, 37, 84, 0.8) 50%, rgba(23, 37, 84, 0.95) 100%)',
        y: '100%'
      }} whileHover={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} />
        <div className="relative h-full p-6 md:p-8 flex flex-col justify-between z-10">
          <div className="text-white">
            <ServiceIcon>{service.icon}</ServiceIcon>
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              {service.title}
            </h3>
            <motion.p className="text-sm text-blue-100 whitespace-pre-line" initial={{
            opacity: 0
          }} whileHover={{
            opacity: 1
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }}>
              {service.subtitle}
            </motion.p>
          </div>
          <motion.div className="flex items-center text-yellow-400 font-medium" initial={{
          opacity: 0,
          x: 0
        }} whileHover={{
          opacity: 1,
          x: 5
        }} transition={{
          duration: 0.3
        }}>
            Learn more
            <span className="ml-2">→</span>
          </motion.div>
        </div>
      </Link>
    </motion.div>;
};
const ServicesSection = () => {
  return <section className="relative h-screen w-full overflow-hidden flex items-center" style={{
    backgroundColor: '#061934'
  }}>
      <motion.div className="absolute inset-0 z-0" animate={{
      background: ['radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)', 'radial-gradient(circle at 100% 100%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)', 'radial-gradient(circle at 0% 100%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)', 'radial-gradient(circle at 100% 0%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)', 'radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)']
    }} transition={{
      duration: 20,
      repeat: Infinity,
      ease: 'linear'
    }} />
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => <motion.div key={i} className="absolute w-[500px] h-[500px] rounded-full opacity-[0.05] bg-blue-400" style={{
        left: `${20 + i * 30}%`,
        top: `${10 + i * 20}%`
      }} animate={{
        scale: [1, 1.2, 1],
        x: [0, 50, 0],
        y: [0, 30, 0]
      }} transition={{
        duration: 15 + i * 2,
        repeat: Infinity,
        ease: 'linear'
      }} />)}
      </div>
      <div className="relative z-10 flex flex-nowrap h-[80vh] w-full">
        {services.map(service => <ServiceCard key={service.id} service={service} />)}
      </div>
    </section>;
};
export default ServicesSection;