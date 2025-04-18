import React, { useState } from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import { motion } from 'framer-motion'
const projectCategories = ['All', 'Ongoing', 'Completed']
const projects = [
  {
    id: 1,
    title: '50TPD Knitting & Knit Processing Plant',
    status: 'Ongoing',
    image:
      'https://uploadthingy.s3.us-west-1.amazonaws.com/wtupUAoJxwnobWTGuRys7D/DJI_0375.jpg',
    year: '2025',
  },
  {
    id: 2,
    title:
      'The Star Innovation Center – A Global Landmark in Sustainable Building Concept',
    status: 'Completed',
    image:
      'https://uploadthingy.s3.us-west-1.amazonaws.com/8cRPTxqZYNnGGPi3oUd5b4/1721638265449.jpg',
    year: '2017',
  },
  {
    id: 3,
    title:
      'Cosmetic and Derma Formulation Plant for Ace Healthcare (Pvt) Ltd, Horana',
    status: 'Completed',
    image:
      'https://uploadthingy.s3.us-west-1.amazonaws.com/mL1m8TshKYB4GNSn1ZcZuz/AceHealthcareDerma.jpg',
    year: '2016 to 2018',
  },
  {
    id: 4,
    title:
      'Residence for Amrith De Soysa and Shihani De Soysa at Park Road, Colombo',
    status: 'Completed',
    image:
      'https://uploadthingy.s3.us-west-1.amazonaws.com/2ajW6G5YXBJKF9quMK7CUp/Amrith3.jpg',
    year: '2018 to 2020',
  },
  {
    id: 5,
    title: 'Rennovation / Modification of Bank of Ceylon Holiday Home at Kandy',
    status: 'Completed',
    image:
      'https://uploadthingy.s3.us-west-1.amazonaws.com/enBqd157KWkKnPSn9fenmu/BOCKandy10.jpg',
    year: '2020',
  },
  {
    id: 6,
    title: 'Building for Bank of Ceylon City Branch at Trincomalee',
    status: 'Ongoing',
    image:
      'https://uploadthingy.s3.us-west-1.amazonaws.com/uUTu3EvNS4hoGtNGVkFthx/BOCTrinco.jpg',
    year: '2019',
  },
  {
    id: 7,
    title: 'Renovation of Ceylon College of Physicians Building',
    status: 'Completed',
    image:
      'https://uploadthingy.s3.us-west-1.amazonaws.com/dEugyLFXt8p15EwMhocS21/ccp.jpg',
    year: '2020',
  },
  {
    id: 8,
    title: 'Colombo Urban Regeneration Project, Sri Lanka',
    status: 'Completed',
    image:
      'https://uploadthingy.s3.us-west-1.amazonaws.com/4Ue86DSuSWufzgS5LxtZow/ColomboUrbanRegeneration.jpg',
    year: '2019',
  },
  {
    id: 9,
    title:
      'Fuel Station for Sri Lanka Transport Board at Baseline Road, Orugodawatta',
    status: 'Completed',
    image:
      'https://uploadthingy.s3.us-west-1.amazonaws.com/xeAekRncX8k6uBpNM6E238/CTBFuel.jpg',
    year: '2018',
  },
  {
    id: 10,
    title: 'Residence for Dr. Ranil Sanjeewa and Dr. Gayathri Kanchana',
    status: 'Completed',
    image:
      'https://uploadthingy.s3.us-west-1.amazonaws.com/kmmeY1hETXwTE6XTqShp1R/Sanjeewa.jpg',
    year: '2020 to 2021',
  },
  {
    id: 11,
    title: 'Widening and Improvements to Galle-udugama Road',
    status: 'Completed',
    image:
      'https://uploadthingy.s3.us-west-1.amazonaws.com/oqErTLCAXbkm2fjSjKNjw8/GalleUdugama2.jpg',
    year: '2014 to 2015',
  },
  {
    id: 12,
    title:
      'Factory & Office Building for Ideal Motors (Pvt) Ltd., Mount Lavinia',
    status: 'Completed',
    image:
      'https://uploadthingy.s3.us-west-1.amazonaws.com/tx2EwoYUkr9EegzxVYHzH6/IdeaalMotors8.jpg',
    year: '2018 to 2020',
  },
  {
    id: 13,
    title:
      'Infrastructure for Modern Research & Development Building at Malabe',
    status: 'Completed',
    image:
      'https://uploadthingy.s3.us-west-1.amazonaws.com/wJg6aWAMp7RUE2pC1oB1t9/1.jpg',
    year: '2018 to 2019',
  },
  {
    id: 14,
    title: 'Residential Development at Kinsey Road, Borella',
    status: 'Completed',
    image:
      'https://uploadthingy.s3.us-west-1.amazonaws.com/hPp8yHRLhaj9fgPRzWrjTr/1.jpg',
    year: '2018 to 2020',
  },
  {
    id: 15,
    title:
      'Implementation of Landslide Ground Subsidence Rectification in Uva Provincial Roads',
    status: 'Ongoing',
    image:
      'https://uploadthingy.s3.us-west-1.amazonaws.com/cioTkdxUUeGFUCCZ7QUuCG/crip.jpg',
    year: '2018',
  },
  {
    id: 16,
    title:
      'Reduction of Landslide Vulnerability by Mitigation Measures Project',
    status: 'Completed',
    image:
      'https://uploadthingy.s3.us-west-1.amazonaws.com/fafkRQFLeBREsDwj6G6ML6/1.jpg',
    year: '2019',
  },
  {
    id: 17,
    title:
      'Refurbishment of Emergency Entrance & Ground Floor at Lanka Hospitals',
    status: 'Completed',
    image:
      'https://uploadthingy.s3.us-west-1.amazonaws.com/5FsM68FBiiym385Q23zaPu/1.jpg',
    year: '2018',
  },
  {
    id: 18,
    title:
      'Widening and Improvement of Manampitiya Aralaganwila, Maduruoya Road',
    status: 'Completed',
    image:
      'https://uploadthingy.s3.us-west-1.amazonaws.com/uoexXmqGXtYzeERRUncXaV/Aralaganwila.jpg',
    year: '2017 to 2019',
  },
  {
    id: 19,
    title: 'Factory Building for Star Garment (Passive House Concept)',
    status: 'Completed',
    image:
      'https://uploadthingy.s3.us-west-1.amazonaws.com/93y55ZjiTwGga4QQBNd87A/2.jpg',
    year: '2016 to 2017',
  },
  {
    id: 20,
    title: 'Apartment Building for Dr. V. Swarnakumar at Wellawatte, Sri Lanka',
    status: 'Ongoing',
    image:
      'https://uploadthingy.s3.us-west-1.amazonaws.com/vBsgJ5pQCNhaBiVJraWSpC/_09_0096.jpg',
    year: '2019',
  },
  {
    id: 21,
    title: "Refurbishment of Thai Ambassador's Residence at Colombo, Sri Lanka",
    status: 'Completed',
    image:
      'https://uploadthingy.s3.us-west-1.amazonaws.com/tF51A9bDcyp3Bt2mTepQi1/thai1.jpg',
    year: '2018',
  },
  {
    id: 22,
    title:
      'Toll Facilities for Outer Circular Highway Ns-1, Kaduwela to Kadawatha',
    status: 'Completed',
    image:
      'https://uploadthingy.s3.us-west-1.amazonaws.com/2ET9D13gyZJx7464qJjf1D/Kaduwela-TOll.jpg',
    year: '2014 to 2015',
  },
  {
    id: 23,
    title:
      'Toll Facilities for Central Expressway Project Section Ii, Mirigama to Kurunegala',
    status: 'Ongoing',
    image:
      'https://uploadthingy.s3.us-west-1.amazonaws.com/uoJsFF8F4o33B1o6xMFNhD/CEP3.jpg',
    year: '2018',
  },
  {
    id: 24,
    title: 'Waskaduwa Meditation Centre Waskaduwa, Sri Lanka',
    status: 'Completed',
    image:
      'https://uploadthingy.s3.us-west-1.amazonaws.com/qDtuy1XHuo5hUZNvM9w6pW/0.jpg',
    year: '2018 to 2020',
  },
  {
    id: 25,
    title: 'Waterstone Resort Project Ella, Sri Lanka',
    status: 'Completed',
    image:
      'https://uploadthingy.s3.us-west-1.amazonaws.com/fg8AfoKaUukugz6d3rtqk1/0.jpg',
    year: '2018 to 2020',
  },
  {
    id: 26,
    title: 'Widening and Improvements to Weligatte-bundala-kirinda Road',
    status: 'Completed',
    image:
      'https://uploadthingy.s3.us-west-1.amazonaws.com/cLNo4fqTWWdZJ1nCqxmu9B/1.jpg',
    year: '2014 to 2015',
  },
]
const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      className="bg-white rounded-lg overflow-hidden border-2 border-gray-100 hover:border-gray-200 transition-all duration-300"
    >
      <div className="relative aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span
            className={`text-sm font-medium px-3 py-1 rounded-full ${project.status === 'Ongoing' ? 'bg-yellow-500/90 text-blue-900' : 'bg-green-500/90 text-white'}`}
          >
            {project.status}
          </span>
          <span className="text-sm text-gray-500">{project.year}</span>
        </div>
        <h3 className="text-xl font-bold text-blue-900 mb-3">
          {project.title}
        </h3>
      </div>
    </motion.div>
  )
}
const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.status === activeCategory)
  return (
    <div className="w-full">
      <section className="relative bg-black text-white py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl max-w-3xl">
            Explore our portfolio of completed and ongoing projects across
            various sectors.
          </p>
        </div>
      </section>
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Project Portfolio"
            subtitle="Browse our diverse range of projects showcasing our expertise and innovation."
            centered={true}
          />
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors duration-200 ${activeCategory === category ? 'bg-[#f1c235] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
export default ProjectsPage