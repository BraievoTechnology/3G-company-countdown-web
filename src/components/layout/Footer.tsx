import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PhoneIcon, MailIcon, MapPinIcon, FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, SendIcon, ChevronRightIcon } from 'lucide-react';
const Footer = () => {
  const fadeInUpVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    }
  };
  const socialIconVariants = {
    initial: {
      scale: 1
    },
    hover: {
      scale: 1.2,
      rotate: 5
    }
  };
  const linkVariants = {
    initial: {
      x: 0
    },
    hover: {
      x: 5
    }
  };
  return <footer className="relative bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950">
      <motion.div className="absolute inset-0 opacity-50" animate={{
      background: ['radial-gradient(circle at 0% 0%, #1e3a8a 0%, transparent 50%)', 'radial-gradient(circle at 100% 100%, #1e3a8a 0%, transparent 50%)', 'radial-gradient(circle at 0% 0%, #1e3a8a 0%, transparent 50%)']
    }} transition={{
      duration: 10,
      repeat: Infinity,
      ease: 'linear'
    }} />
      <div className="relative border-b border-blue-800">
        <div className="container mx-auto px-4 py-12">
          <motion.div initial="initial" whileInView="animate" viewport={{
          once: true
        }} variants={{
          initial: {
            opacity: 0,
            y: 20
          },
          animate: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8
            }
          }
        }} className="bg-gradient-to-r from-blue-900 to-blue-800 p-8 rounded-2xl shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Stay Updated with Our Newsletter
                </h3>
                <p className="text-blue-200">
                  Get the latest news and updates delivered to your inbox
                </p>
              </div>
              <div className="relative flex-1 max-w-md w-full">
                <input type="email" placeholder="Enter your email" className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 pr-12" />
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-yellow-500 rounded-full text-blue-900">
                  <SendIcon size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div variants={fadeInUpVariants} initial="initial" whileInView="animate" viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <h3 className="text-2xl font-bold text-white mb-6">
              3gConsultants
            </h3>
            <p className="text-blue-200 mb-8 leading-relaxed">
              Engineering excellence through innovation and expertise. Your
              trusted partner in construction and engineering solutions.
            </p>
            <div className="flex space-x-4">
              {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon].map((Icon, index) => <motion.a key={index} href="#" variants={socialIconVariants} initial="initial" whileHover="hover" className="p-2 bg-blue-800/50 rounded-lg hover:bg-blue-800 text-blue-200 hover:text-yellow-500 transition-colors">
                    <Icon size={20} />
                  </motion.a>)}
            </div>
          </motion.div>
          <motion.div variants={fadeInUpVariants} initial="initial" whileInView="animate" viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Projects', 'Contact'].map((item, index) => <motion.li key={index} variants={linkVariants} initial="initial" whileHover="hover">
                    <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="flex items-center text-blue-200 hover:text-yellow-500 transition-colors">
                      <ChevronRightIcon size={16} className="mr-2" />
                      {item}
                    </Link>
                  </motion.li>)}
            </ul>
          </motion.div>
          <motion.div variants={fadeInUpVariants} initial="initial" whileInView="animate" viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }}>
            <h3 className="text-lg font-semibold text-white mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {['Procurement Contract', 'Highways & Transportation', 'Water Resources', 'Environmental Engineering', 'Urban Development'].map((service, index) => <motion.li key={index} variants={linkVariants} initial="initial" whileHover="hover">
                  <Link to={`/services/${service.toLowerCase().replace(' & ', '-').replace(' ', '-')}`} className="flex items-center text-blue-200 hover:text-yellow-500 transition-colors">
                    <ChevronRightIcon size={16} className="mr-2" />
                    {service}
                  </Link>
                </motion.li>)}
            </ul>
          </motion.div>
          <motion.div variants={fadeInUpVariants} initial="initial" whileInView="animate" viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.6
        }}>
            <h3 className="text-lg font-semibold text-white mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <motion.li whileHover={{
              x: 5
            }} className="flex items-start text-blue-200">
                <MapPinIcon size={20} className="mr-3 mt-1 flex-shrink-0 text-yellow-500" />
                <span>
                  456 Engineering Plaza, Suite 300
                  <br />
                  Innovation District, ID 54321
                </span>
              </motion.li>
              <motion.li whileHover={{
              x: 5
            }} className="flex items-center text-blue-200">
                <PhoneIcon size={20} className="mr-3 flex-shrink-0 text-yellow-500" />
                <span>+1 (555) 234-5678</span>
              </motion.li>
              <motion.li whileHover={{
              x: 5
            }} className="flex items-center text-blue-200">
                <MailIcon size={20} className="mr-3 flex-shrink-0 text-yellow-500" />
                <span>info@3gconsultants.com</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
      <div className="relative border-t border-blue-800">
        <div className="container mx-auto px-4 py-6">
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="flex flex-col md:flex-row justify-between items-center text-blue-200 text-sm">
            <p>
              © {new Date().getFullYear()} 3gConsultants. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <motion.a whileHover={{
              x: 3
            }} href="#" className="hover:text-yellow-500">
                Privacy Policy
              </motion.a>
              <motion.a whileHover={{
              x: 3
            }} href="#" className="hover:text-yellow-500">
                Terms of Service
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>;
};
export default Footer;