import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRightIcon } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
const projects = [
  {
    id: 1,
    contents: [
      {
        title: '50TPD Knitting & Knit Processing Plant',
        category: 'Commercial Building',
        description:
          'Textile Manufacturing BOI Zone, Punnaikuda, Eravur, Batticaloa',
      },
      {
        title: 'Ace Healthcare Derma',
        category: 'Commercial Building',
        description:
          'Cosmetic and Derma Formulation Plant for Ace Healthcare (Pvt) Ltd, Horana',
      },
      {
        title: 'Amrith',
        category: 'Residential Building',
        description:
          'Residence for Amrith De Soysa and Shihani De Soysa at Park Road, Colombo',
      },
      {
        title: 'Bank of Ceylon Kandy',
        category: 'Commercial Building',
        description:
          'Rennovation / Modification of Bank of Ceylon Holiday Home at Kandy',
      },
    ],
    images: [
      'https://uploadthingy.s3.us-west-1.amazonaws.com/wtupUAoJxwnobWTGuRys7D/DJI_0375.jpg',
      'https://uploadthingy.s3.us-west-1.amazonaws.com/vUjkmq8jroYBp7wderSLkK/AceHealthcareDerma.jpg',
      'https://uploadthingy.s3.us-west-1.amazonaws.com/aTUVhALqL7kGeTCLbC92CV/Amrith3.jpg',
      'https://uploadthingy.s3.us-west-1.amazonaws.com/2vkpGRhamnc2b1C1dW7xt4/BOCKandy10.jpg',
    ],
    link: '/projects/parkview-plaza',
  },
  {
    id: 2,
    contents: [
      {
        title: 'The Star Innovation Center',
        category: 'Commercial Building',
        description: 'Star Innovation Center project, completed in 2017 in Colombo',
      },
      {
        title: 'Bank of Ceylon Trinco',
        category: 'Commercial Building',
        description: 'Building for Bank of Ceylon City Branch at Trincomalee',
      },
      {
        title: 'Renovation of Ceylon College',
        category: 'Commercial Building',
        description: 'Renovation of Ceylon College of Physicians building',
      },
      {
        title: 'Colombo Urban Regeneration',
        category: 'Urban Ruler and Regional Development',
        description: 'Colombo Urban Regeneration Project, Sri Lanka',
      },
    ],
    images: [
      'https://uploadthingy.s3.us-west-1.amazonaws.com/8cRPTxqZYNnGGPi3oUd5b4/1721638265449.jpg',
      'https://uploadthingy.s3.us-west-1.amazonaws.com/2QNFtGL86zMtM3TMkDcZ1p/BOCTrinco.jpg',
      'https://uploadthingy.s3.us-west-1.amazonaws.com/d149ikBw6vjt911SLX8dZn/ccp.jpg',
      'https://uploadthingy.s3.us-west-1.amazonaws.com/sSyHRK27oJNo9YuWnGnrrH/ColomboUrbanRegeneration.jpg',
    ],
    link: '/projects/riverside-bridge',
  },
  {
    id: 3,
    contents: [
      {
        title: 'Ceypetco Fuel Station',
        category: 'Urban Ruler and Regional Development.',
        description:
          'Fuel Station for Sri Lanka Transport Board at Baseline Road, Orugodawatta',
      },
      {
        title: 'Dr. Sanjeewa',
        category: 'Residential Building',
        description: 'Residence for DR.Ranil Sanjeewa and DR.Gayathri Kanchana',
      },
      {
        title: 'Widening and Improvements',
        category: 'Road & Infastructure',
        description: 'Widening and Improvements to Galle-Udugama road',
      },
    ],
    images: [
      'https://uploadthingy.s3.us-west-1.amazonaws.com/qg8dtPGCSeG86cYW9feaLH/CTBFuel.jpg',
      'https://uploadthingy.s3.us-west-1.amazonaws.com/ev1Sb6gthoYWdiKMD5Ypsx/Sanjeewa.jpg',
      'https://uploadthingy.s3.us-west-1.amazonaws.com/ccRTtJBq7zyrNu4g2J9NwL/GalleUdugama2.jpg',
    ],
    link: '/projects/green-valley-residences',
  },
]
const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % project.images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [project.images.length])
  const content = project.contents[currentIndex]
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      viewport={{
        once: true,
      }}
      className="group relative h-[400px] md:h-[450px] lg:h-[400px] w-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500"
    >
      <motion.div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
      <motion.div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={project.images[currentIndex]}
          alt={content.title}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
      </AnimatePresence>
      <motion.div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="space-y-4"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <motion.span className="inline-block text-sm font-medium bg-[#f1c235] px-3 py-1 rounded-full text-black">
              {content.category}
            </motion.span>
            <motion.h3 className="text-3xl md:text-4xl font-bold text-white">
              {content.title}
            </motion.h3>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="space-y-4"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >
            <motion.p className="text-white text-lg leading-relaxed">
              {content.description}
            </motion.p>
            <motion.div className="flex items-center text-yellow-400 font-semibold group/link">
              <Link
                to={project.link}
                className="flex items-center hover:text-yellow-300"
              >
                Read More
                <ArrowRightIcon
                  size={20}
                  className="ml-2 transform transition-transform duration-300 group-hover/link:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
const FeaturedProjects = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Featured Projects"
          subtitle="Explore some of our most impactful work across various sectors."
          centered={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button to="/projects" variant="secondary">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
export default FeaturedProjects