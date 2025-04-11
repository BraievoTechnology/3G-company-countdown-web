import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import BackgroundGradient from '../animations/BackgroundGradient';
import FadeIn from '../animations/FadeIn';
const HeroSection = () => {
  return <section className="relative bg-blue-900 text-white overflow-hidden">
      <BackgroundGradient />
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{
      backgroundImage: "url('https://uploadthingy.s3.us-west-1.amazonaws.com/iyPj1xZT4Yz8MxvqZq7gbL/Web-Cover.jpg')"
    }} />
      <motion.div className="absolute inset-0" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1
    }}>
        {[...Array(3)].map((_, i) => <motion.div key={i} className="absolute w-72 h-72 bg-blue-500 rounded-full" style={{
        left: `${20 + i * 30}%`,
        top: `${20 + i * 20}%`,
        filter: 'blur(100px)',
        opacity: 0.1
      }} animate={{
        y: [0, 50, 0],
        scale: [1, 1.2, 1]
      }} transition={{
        duration: 10 + i * 2,
        repeat: Infinity,
        ease: 'linear'
      }} />)}
      </motion.div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Engineering Excellence for Tomorrow's World
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              3gConsultants delivers innovative engineering solutions with
              precision, expertise, and sustainable practices.
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
  {/*              <Button to="/projects" variant="primary">
                  Our Projects
                </Button>*/}
              </motion.div>
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Button to="/contact" variant="outline" className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-blue-900 hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300">
                  Consult with Us
                </Button>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-900 to-transparent" />
    </section>;
};
export default HeroSection;