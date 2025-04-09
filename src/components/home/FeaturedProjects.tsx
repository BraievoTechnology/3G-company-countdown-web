import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
const projects = [
  {
    id: 1,
    contents: [
      {
        title: "Ace Healthcare Derma",
        category: "Commercial Building",
        description:
            "Cosmetic and Derma Formulation Plant for Ace Healthcare (Pvt) Ltd, Horana",
      },
      {
        title: "Amrith",
        category: "Residential Building",
        description:
            "Residence for Amrith De Soysa and Shihani De Soysa at Park Road, Colombo",
      },
      {
        title: "Bank of Ceylon Kandy",
        category: "Commercial Building",
        description:
            "Rennovation / Modification of Bank of Ceylon Holiday Home at Kandy",
      },
    ],
    images: [
      "/src/assets/images/Horana2.jpg",
      "/src/assets/images/Armith.jpg",
      "/src/assets/images/BOCKandy.jpg",
    ],
    link: "/projects/parkview-plaza",
  },
  {
    id: 2,
    contents: [
      {
        title: "Bank of Ceylon Trinco",
        category: "Commercial Building",
        description: "Building for Bank of Ceylon City Branch at Trincomalee",
      },
      {
        title: "Renovation of Ceylon College",
        category: "Commercial Building",
        description: "Renovation of Ceylon College of Physicians building",
      },
      {
        title: "Colombo Urban Regeneration",
        category: "Urban Ruler and Regional Development",
        description: "Colombo Urban Regeneration Project, Sri Lanka",
      },
    ],
    images: [
      "/src/assets/images/BOCTrinco.jpg",
      "/src/assets/images/ccp.jpg",
      "/src/assets/images/ColomboUrbanRegeneration.jpg",
    ],
    link: "/projects/riverside-bridge",
  },
  {
    id: 3,
    contents: [
      {
        title: "Ceypetco Fuel Station",
        category: "Urban Ruler and Regional Development.",
        description:
            "Fuel Station for Sri Lanka Transport Board at Baseline Road, Orugodawatta",
      },
      {
        title: "Dr. Sanjeewa",
        category: "Residential Building",
        description: "Residence for DR.Ranil Sanjeewa and DR.Gayathri Kanchana",
      },
      {
        title: "Widening and Improvements",
        category: "Road & Infastructure",
        description: "Widening and Improvements to Galle-Udugama road",
      },
    ],
    images: [
      "/src/assets/images/Fuel.jpg",
      "/src/assets/images/Sanjeewa.jpg",
      "/src/assets/images/galle-udugama.jpg",
    ],
    link: "/projects/green-valley-residences",
  },
];
const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [project.images.length]);
  const content = project.contents[currentIndex];
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
        <motion.div className="absolute inset-0 transition-opacity duration-500 bg-black opacity-40 group-hover:opacity-70" />
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
              className="absolute inset-0 object-cover object-center w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
        </AnimatePresence>
        <motion.div className="absolute inset-0 z-10 flex flex-col justify-between p-8">
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
              <motion.span className="inline-block px-3 py-1 text-sm font-medium text-white rounded-full bg-blue-900/80">
                {content.category}
              </motion.span>
              <motion.h3 className="text-3xl font-bold text-white md:text-4xl">
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
              <motion.p className="text-lg leading-relaxed text-white">
                {content.description}
              </motion.p>
              <motion.div className="flex items-center font-semibold text-yellow-400 group/link">
         {/*       <Link
                    to={project.link}
                    className="flex items-center hover:text-yellow-300"
                >
                  Read More
                  <ArrowRightIcon
                      size={20}
                      className="ml-2 transition-transform duration-300 transform group-hover/link:translate-x-1"
                  />
                </Link>*/}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
  );
};
const FeaturedProjects = () => {
  return (
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <SectionTitle
              title="Featured Projects"
              subtitle="Explore some of our most impactful work across various sectors."
              centered={true}
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-12 text-center">
{/*            <Button to="/projects" variant="secondary">
              View All Projects
            </Button>*/}
          </div>
        </div>
      </section>
  );
};
export default FeaturedProjects;