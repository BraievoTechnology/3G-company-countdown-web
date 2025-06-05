"use client";
import React, { useEffect, useState } from "react";

import SectionTitle from "../Components/ui/SectionTitle";
import Button from "../Components/ui/Button";
import {
  BuildingIcon,
  DropletIcon,
  LeafIcon,
  BriefcaseIcon,
  MapIcon,
  TrafficCone,
  ChevronDownIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import { useRouter } from "next/navigation";

const accordionData = [
  {
    title: "Quantity Surveying & Cost Consultancy",
    items: [
      "Budget Estimation & Cost Planning",
      "BOQs & Tender Documentation",
      "Value Engineering & Life Cycle Costing",
      "Interim Payment Certificates (IPC)",
      "Variation Assessments & Final Accounts",
    ],
  },
  {
    title: "Project Management & Contract Administration",
    items: [
      "Project Planning & Scheduling",
      "Contract Administration (FIDIC & Local)",
      "Progress Monitoring & Reporting",
      "Stakeholder Coordination & Communication",
      "Risk Management & Mitigation Strategies",
    ],
  },
  {
    title: "Procurement & Commercial Management",
    items: [
      "Procurement Planning & Tender Strategy",
      "Bid Evaluation & Contractor Selection",
      "Commercial Risk Assessment",
      "Contract Negotiation Support",
      "Supply Chain Oversight & Value Assurance",
    ],
  },
  {
    title: "Design Coordination & Construction Supervision",
    items: [
      "Multidisciplinary Design Reviews",
      "Buildability Assessments",
      "Technical Specifications & Site Instructions",
      "On-site Quality Control",
      "Compliance & Safety Monitoring",
    ],
  },
  {
    title: "Claims Management & Dispute Resolution",
    items: [
      "Preparation & Review of EOT & Cost Claims",
      "Contractual Entitlement Analysis",
      "Dispute Avoidance Strategies",
      "Claims for Employers, Contractors & Subcontractors",
      "Arbitration, Adjudication & Mediation Support",
    ],
  },
  {
    title: "Feasibility Studies & Development Appraisals",
    items: [
      "Site & Market Feasibility Analysis",
      "Financial Viability & ROI Forecasting",
      "Cost-Benefit & Risk Evaluation",
      "Budgeting for Concept Design Options",
      "Development Strategy & Phasing Recommendations",
    ],
  },
];

const AccordionItem = ({
  title,
  items,
  isOpen,
  onClick,
}: {
  title: string;
  items: string[];
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-[#f5f5f5] last:border-b-0">
      <button
        className="w-full py-6 px-4 flex justify-between items-center hover:bg-gray-200/50 transition-colors"
        onClick={onClick}
      >
        <h3 className="text-xl text-black">{title}</h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <ChevronDownIcon className="w-6 h-6 text-[#ffbe00]" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className="overflow-hidden"
      >
        <div className="p-4 bg-gray-200/30">
          <ul className="space-y-3">
            {items.map((item, index) => (
              <motion.li
                key={index}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="flex items-start"
              >
                <span className="w-2 h-2 mt-2 mr-3 bg-[#ffbe00] rounded-full flex-shrink-0" />
                <span className="text-gray-600">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

const services = [
  {
    id: "procurement",
    title: "Procurement and Contracts",
    description:
      "Procurement involves making buying decisions under scarcity. Whereas, in order to secure and make the project a reality, it is vital to have a proper contract between parties. A contract is a legally binding agreement between at least two parties that defines and governs the rights and obligations of the two or many parties involved. A contract is legally enforceable since it fulfils the requirements and approval of the law. A sound Contract Administration will create a path to deliver the project to a definite success.",
    icon: <BriefcaseIcon size={48} className="text-[#ffbe00]" />,
    link: "/services/procurement",
    image: "/assets/staticimages/1.jpg",
  },
  {
    id: "highways",
    title: "Highways and Transportation Engineering",
    description:
      "Sri Lanka, been a developing country that has initiated many infrastructure developments projects, mainly in urban and rural road development projects together with other supportive infrastructure development projects such as earthwork & paving, electrification, landscaping, widening, up-gradation and drainage and beyond. This has created many opportunities for our firm to demonstrate our talent in recent Highways and Transportation projects.",
    icon: <TrafficCone size={48} className="text-[#ffbe00]" />,
    link: "/services/highways",
    image: "/assets/staticimages/2.jpg",
  },
  {
    id: "water",
    title: "Water Resources Engineering",
    description:
      "It’s said that “Water is more precious than gold”. We at 3G Consultants (Pvt) Ltd. has always highly valued the conservation of natural resources such as water. Sustainable management of water resources has been a key concern of 3G Consultants (Pvt) Ltd. since the beginnings and has always been one of our focused areas of solution delivery thanks to the importance we have placed on Water Resource Engineering. Therefore, we always adhere and respect the international standards and regulations when it comes to water resource engineering.",
    icon: <DropletIcon size={48} className="text-[#ffbe00]" />,
    link: "/services/water",
    image: "/assets/staticimages/3.jpg",
  },
  {
    id: "environmental",
    title: "Environmental and Climate Resilience Engineering",
    description:
      "Sri Lanka is an island nation, exhibiting remarkable biological diversity and considered to be the richest country in the Asian region in terms of species concentration. Ecological, climatic, soil and topographical variability across the country provides favourable conditions for many types of species of flora and fauna in most localities. We at 3G Consultants (Pvt) Ltd., believe that it’s our responsibility to protect the environment and we have always cherished the idea of sustainable development and conservation of the environment.",
    icon: <LeafIcon size={48} className="text-[#ffbe00]" />,
    link: "/services/environmental",
    image: "/assets/staticimages/4.jpg",
  },
  {
    id: "urban",
    title: "Urban, Rural and Regional Development",
    description:
      "With the ever-increasing population and need of enhancing living standards, there are many Urban, Rural, and Regional development projects launched to support major developments in the country. When it comes to such projects, it’s not only crucial but also timely to consider the need for future expansion. We believe that a well-planned innovative design plays a pivotal role in such urban development projects.",
    icon: <MapIcon size={48} className="text-[#ffbe00]" />,
    link: "/services/urban",
    image: "/assets/staticimages/5.jpg",
  },
  {
    id: "housing",
    title: "Commercial and Housing Development",
    description:
      "It’s become a trend in most of the developing countries to imitate the western world by acquiring modern living standards with modern architectural features and latest technologies such as luxury housing developments, educational cities, IT parks, condominiums, waterfront developments, iconic buildings, luxury hotels, high rise buildings, townships, luxury Villas and more.",
    icon: <BuildingIcon size={48} className="text-[#ffbe00]" />,
    link: "/services/housing",
    image: "/assets/staticimages/6.jpg",
  },
];
const ServicesPage = () => {
  const router = useRouter();
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  useEffect(() => {
    // Wait for router to be ready
    if (!router.isReady) return;

    const hash = router.asPath.split("#")[1];
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => {
          requestAnimationFrame(() => {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          });
        }, 500);
      }
    }
  }, [router.isReady, router.asPath]);
  return (
    <>
      <Header />
      <div className="w-full">
        {/* Hero Section */}
        <section className="relative bg-black text-white py-24">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
            }}
          ></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center sm:text-left">
              Our Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl text-center sm:text-left mx-auto sm:mx-0">
              Comprehensive construction and engineering solutions tailored to
              meet your specific project needs.
            </p>
          </div>
        </section>
        {/* Services Overview */}
        <section className="py-16 bg-[#f5f5f5] relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <SectionTitle
              title="What We Offer"
              subtitle="3G Consultants: Trusted to deliver clarity, control, and commercial confidence across every phase of construction."
              className="text-white [&>div>p]:text-black"
            />
            {/* New Accordion Section */}
            <div className="max-w-3xl mb-20 bg-[#f5f5f5] rounded-xl overflow-hidden">
              {accordionData.map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  items={item.items}
                  isOpen={openAccordion === index}
                  onClick={() =>
                    setOpenAccordion(openAccordion === index ? null : index)
                  }
                />
              ))}
            </div>
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 items-center scroll-mt-[100px]`}
                >
                  {/* Text Section */}
                  <div
                    className={`${index % 2 === 1 ? "lg:order-2" : ""} w-full`}
                  >
                    <div className="flex items-center mb-4">
                      {service.icon}
                      <h2 className="text-2xl md:text-3xl font-bold text-[#ffbe00] ml-3">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-black leading-relaxed text-justify text-base md:text-lg">
                      {service.description}
                    </p>
                  </div>

                  {/* Image Section */}
                  <div
                    className={`${index % 2 === 1 ? "lg:order-1" : ""} w-full`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-lg w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16 bg-[#ffbe00]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-black mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-black mb-8 max-w-2xl mx-auto">
              Our team of experts can develop a tailored approach to meet your
              specific project requirements.
            </p>
            <Button to="/contactpage" variant="secondary">
              Contact Us for a Consultation
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default ServicesPage;
