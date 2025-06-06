import React from "react";

import { motion } from "framer-motion";
import Button from "@/app/Components/ui/Button";
import img1 from "../../../../public/construction-worker.jpg";
import img2 from "../../../../public/building-exterior.jpg";
import img3 from "../../../../public/construction-workers.jpg";
import img4 from "../../../../public/modern-architecture.jpg";

import {
  CheckCircleIcon,
  ScaleIcon,
  GlobeIcon,
  BuildingIcon,
  BriefcaseIcon,
} from "lucide-react";
import Image from "next/image";
const AboutPreview = () => {
  const highlights = [
    "Innovative sustainable solutions",
    "Expert team of professional engineers",
    "Global project experience",
  ];

  const stats = [
    {
      icon: <BuildingIcon className="w-6 h-6 text-black" />,
      value: "125+",
      label: "Projects Completed",
      animation: {
        y: [0, -5, 0],
        rotate: [0, -10, 10, -10, 0],
      },
    },
    {
      icon: <ScaleIcon className="w-6 h-6 text-black" />,
      value: "50+",
      label: "Claims Managed",
      animation: {
        scale: [1, 1.2, 1],
        rotate: [0, 0, 0],
      },
    },
    {
      icon: <GlobeIcon className="w-6 h-6 text-black" />,
      value: "7+",
      label: "Countries Served",
      animation: {
        rotate: [0, 360],
      },
    },
    {
      icon: <BriefcaseIcon className="w-6 h-6 text-black" />,
      value: "10+",
      label: "Years Experience",
      animation: {
        scale: [1, 1.2, 1],
        y: [0, -5, 0],
      },
    },
  ];
  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-[#ffbe00] mb-6 leading-tight md:leading-snug lg:leading-normal"
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
                transition={{
                  duration: 0.5,
                }}
              >
                Engineering Solutions for a Sustainable Future
              </motion.h2>
              <motion.p
                className="text-lg text-black mb-6"
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
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
              >
                3G Consultants has been at the forefront of engineering
                consultancy for over two decades. Our expertise spans across
                infrastructure development, environmental engineering, and
                sustainable design solutions.
              </motion.p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
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
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    whileInView={{
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="w-12 h-12 mx-auto mb-3 bg-[#ffbe00] rounded-full flex items-center justify-center text-[#ffbe00]"
                  >
                    <motion.div
                      animate={stat.animation}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {stat.icon}
                    </motion.div>
                  </motion.div>
                  <motion.span
                    className="block text-2xl font-bold text-black"
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1 + 0.2,
                    }}
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-sm text-gray-600">{stat.label}</span>
                </motion.div>
              ))}
            </div>
            <motion.div className="space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <CheckCircleIcon
                    className="text-[#f1c235] mr-3 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-black">{item}</span>
                </motion.div>
              ))}
            </motion.div>
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
              transition={{
                duration: 0.5,
                delay: 0.6,
              }}
            >
              <Button to="/about" variant="primary">
                Discover Our Story
              </Button>
            </motion.div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <motion.div
                className="relative overflow-hidden rounded-xl h-64"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image
                  src={img1}
                  alt="Engineering workspace"
                  fill
                  className="object-cover rounded-xl"
                />
              </motion.div>

              <motion.div
                className="relative overflow-hidden rounded-xl h-40"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image
                  src={img2}
                  alt="Building exterior"
                  fill
                  className="object-cover rounded-xl"
                />
              </motion.div>
            </div>

            <div className="space-y-4 mt-8">
              <motion.div
                className="relative overflow-hidden rounded-xl h-40"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image
                  src={img3}
                  alt="Construction workers"
                  fill
                  className="object-cover rounded-xl"
                />
              </motion.div>

              <motion.div
                className="relative overflow-hidden rounded-xl h-64"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image
                  src={img4}
                  alt="Modern architecture"
                  fill
                  className="object-cover rounded-xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutPreview;
