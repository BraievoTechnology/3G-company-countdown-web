"use client";
import React from "react";
import SectionTitle from "../Components/ui/SectionTitle";
import { EyeIcon, TargetIcon } from "lucide-react";
import { motion } from "framer-motion";
import WordCarousel from "../Components/animations/WorldCarousel";
import imageOne from "../../../public/imageOne.jpg";
import imageTwo from "../../../public/imageTwo.jpg";
import imageThree from "../../../public/construction-workers-sunset.jpg";
import imageFour from "../../../public/portrait-engineers-work-hours-job-site.jpg";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import Image from "next/image";
import Button from "../Components/ui/Button";
const teamMembers = [
  {
    name: "Ch.QS Prasad Jasinghe",
    role: "Managing Director/ Co-Founder",
    shortBio: "(MRICS, AIQSSL, MCIArb, B.Sc. (Hons) QS, Dip. Arb)",
    fullBio:
      "Mr. Prasad Jasinghe, Co-founder and Managing Director, is a Chartered Quantity Surveyor with over 22 years of experience in project management, adjudication and arbitration, contracts, and procurement across both local and international markets. A graduate of the University of Moratuwa, he holds esteemed professional credentials including MRICS, AIQSSL, MCIArb, a B.Sc. (Hons) in Quantity Surveying, and a Diploma in Arbitration from ICLP. His leadership and expertise continue to drive the company’s sustained growth and reputation for excellence.",
    image: "/assets/staticimages/prasad.jpg ",
  },
  {
    name: "Ch.QS Saman Gamage",
    role: "Director/ Co-Founder",
    shortBio:
      "(MRICS, AIQSSL, MCIArb, M.Sc. Commercial Law & Dispute Resolution, B.Sc. (Hons) QS, Dip. Arb)",
    fullBio:
      "Mr. Saman Gamage, Co-founder and Director of 3G Consultants, is a Chartered Quantity Surveyor with over 26 years of experience in project management, contracts, dispute resolution, and procurement across both local and international markets. A graduate of the University of Moratuwa, he holds professional credentials including MRICS, AIQSSL, MCIArb, B.Sc. (Hons) in Quantity Surveying, an M.Sc. in Construction Law & Dispute Resolution from the University of Moratuwa, and a Diploma in Arbitration from ICLP. His strategic leadership and technical expertise have been instrumental in building the firm’s strong industry presence and reputation for professional excellence.",
    image: "/assets/staticimages/saman.jpg",
  },
];
/*const regularStaff = [
  {
    name: "Sarah Thompson",
    position: "Senior Project Engineer",
    description:
      "Specializes in structural engineering with 8 years of experience in commercial projects.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "David Chen",
    position: "Environmental Specialist",
    description:
      "Expert in environmental impact assessments and sustainable design practices.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "Emily Rodriguez",
    position: "Project Coordinator",
    description:
      "Manages project timelines and client communications for major infrastructure projects.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "James Wilson",
    position: "Safety Manager",
    description:
      "Ensures compliance with safety regulations and implements safety training programs.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "Maria Garcia",
    position: "Quality Control Engineer",
    description:
      "Oversees quality assurance processes and maintains quality standards across projects.",
    image:
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "Alex Turner",
    position: "BIM Specialist",
    description:
      "Leads Building Information Modeling implementation for complex construction projects.",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "Lisa Chang",
    position: "Cost Estimator",
    description:
      "Provides detailed cost analysis and budgeting for construction projects.",
    image:
      "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "Marcus Brown",
    position: "Materials Engineer",
    description:
      "Specializes in construction materials testing and specifications.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "Rachel Kim",
    position: "Procurement Specialist",
    description:
      "Manages supplier relationships and procurement processes for construction materials.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "Tom Martinez",
    position: "Site Supervisor",
    description:
      "Coordinates on-site construction activities and manages construction crews.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
];*/
const TeamMemberCard = ({ member }: { member: (typeof teamMembers)[0] }) => {
  return (
    <motion.div
      className="relative group bg-white overflow-hidden rounded-lg shadow-lg"
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
      whileHover={{
        scale: 1.02,
      }}
    >
      <div className="relative h-full">
        <div className="aspect-square w-full overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-black">{member.name}</h3>
          <p className="text-black font-medium mt-1">{member.role}</p>
          <p className="text-gray-600 text-sm mt-3">{member.shortBio}</p>
        </div>
        <motion.div
          className="absolute inset-0 bg-[#ffbe00] p-6 flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-300"
          initial={{
            opacity: 0,
          }}
          whileHover={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <div className="text-black">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-black font-medium">{member.role}</p>
            </div>
            <div className="overflow-y-auto max-h-[60vh] scrollbar-hide mt-4">
              <p className="text-black text-sm leading-relaxed">
                {member.fullBio}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
/*const StaffCard = ({ member }: { member: (typeof regularStaff)[0] }) => {
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
      transition={{
        duration: 0.5,
      }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative">
        <div className="w-40 h-40 mx-auto mt-8 rounded-full overflow-hidden">
          {/!* eslint-disable-next-line @next/next/no-img-element *!/}
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-blue-900 mb-1">
            {member.name}
          </h3>
          <p className="text-yellow-500 text-sm font-medium mb-3">
            {member.position}
          </p>
          <p className="text-gray-600 text-sm">{member.description}</p>
        </div>
      </div>
    </motion.div>
  );
};*/
const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="w-full">
        <section className="relative bg-black mt-[-105px] text-white py-34">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
            }}
          ></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          </div>
        </section>

        <section className="py-16 bg-[#f5f5f5]">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center gap-2 text-center sm:text-left justify-center sm:justify-start mb-5">
              <span className="text-3xl sm:text-[50px] font-bold text-[#ffbe00]">
                We
              </span>
              <span className="text-3xl sm:text-[50px] font-bold text-[#ffbe00]">
                <WordCarousel words={["Create", "Develop", "Build"]} />
              </span>
              <span className="text-3xl sm:text-[50px] font-bold text-[#ffbe00]">
                Solutions
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="mb-4 mt-4 text-black text-justify leading-loose text-[16px]">
                  Being a market thought leader since 2014, 3G Consultants (Pvt)
                  Ltd, has been making innovative waves in the rapidly
                  developing construction industry in Sri Lanka. Specializing in
                  Quantity Surveying and Cost Consultancy services, Construction
                  Procurement and Claims Management, Highway Engineering, Water
                  Resource Engineering, Water Supply, and Sewerage Engineering
                  and more, 3G Consultant (Pvt) Ltd, has roared in the industry
                  by providing exceptional service to its clientele.
                </p>
                <p className="mb-4 text-black text-justify leading-loose text-[16px]">
                  Providing an array of services such as Geometric Surveys,
                  Feasibility Studies, Action Plans, Sociological, and
                  Environmental Studies, Engineering Design, Economic and
                  Financial evaluations, Quantity Surveying and Estimation,
                  Various types of procurement, Tender and Contract
                  documentation, Construction Supervision, Value Engineering,
                  Post Contract Administration, Claims Management and Dispute
                  Resolution, and Management Studies related to the construction
                  industry, our qualified and experienced team of experts has
                  contributed to many national & international projects with an
                  unwavering commitment to client’s success. That’s what sets us
                  apart. We are here for the long-haul.
                </p>
                <p className="mb-4 text-black text-justify leading-loose text-[16px]">
                  Our team can seamlessly work with multi-disciplined teams both
                  locally and internationally as they come from a vast array of
                  technical backgrounds and have worked with many different
                  organizations throughout the years and understands the types
                  of projects we will be called to produce. We have our own
                  internal procedures in which we are fully equipped and
                  trained, and we adhere to the industry’s highest quality
                  standards. We understand compliance and we are able to hit the
                  ground running with any project we are integrated with the
                  help of our state-of-the-art software solutions we use at 3G
                  Consultants (Pvt) Ltd.
                </p>
                <p className="text-black text-justify leading-loose text-[16px]">
                  We take pride in focusing on reducing risk and improving the
                  value we provide for customers while delivering an
                  all-inclusive suite of construction consulting expertise in
                  all market sectors while improving and conserving natural
                  environments.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Image
                  src={imageOne}
                  alt="Construction team"
                  className="rounded-lg w-full h-48 sm:h-64 object-cover"
                />
                <Image
                  src={imageTwo}
                  alt="Historical project"
                  className="rounded-lg w-full h-48 sm:h-64 object-cover"
                />
                <Image
                  src={imageThree}
                  alt="Historical project"
                  className="rounded-lg w-full h-48 sm:h-64 object-cover"
                />
                <Image
                  src={imageFour}
                  alt="Historical project"
                  className="rounded-lg w-full h-48 sm:h-64 object-cover"
                />
              </div>
              <div>
                <Button variant="primary">
                  <a
                    href="https://3gconsultantstorage.blob.core.windows.net/3g-blob/3GCorporate Profile.pdf"
                    download
                  >
                    Download Our Profile
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#ffbe00]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <EyeIcon size={32} className="text-yellow-500 mr-4" />
                  <h2 className="text-3xl font-bold text-black">Our Vision</h2>
                </div>
                <p className="text-gray-700 mb-4 italic font-semibold">
                  "To be a world-class engineering consultancy firm committed to
                  total customer satisfaction and enriching shareholder's
                  value..."
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <TargetIcon size={32} className="text-yellow-500 mr-4" />
                  <h2 className="text-3xl font-bold text-black">Our Mission</h2>
                </div>
                <p className="text-gray-700 mb-4 italic font-semibold">
                  "Our Mission is to strengthen our position as a market leader
                  and become the 'go-to' consultancy, for project and
                  construction management both locally and globally, by building
                  on our strengths - innovative thinking, excellent quality
                  assurance, timely completion, state of the art technology, and
                  exhibiting the highest standards of expertise..."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#f5f5f5]">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Director Board"
              subtitle="Meet the experienced professionals who lead BuildConstruct to excellence."
              centered={true}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto justify-center">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} member={member} />
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default AboutPage;
