import  { useState } from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, SearchIcon, MapPinIcon, ClockIcon, HeartIcon, GraduationCapIcon, UsersIcon, TrendingUpIcon } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
const jobCategories = ['All', 'Engineering', 'Construction', 'Project Management', 'Design', 'Administration'];
const employmentTypes = ['All', 'Full-time', 'Contract', 'Part-time', 'Internship'];
const jobOpenings = [{
  id: 1,
  title: 'Senior Structural Engineer',
  category: 'Engineering',
  location: 'New York, NY',
  employmentType: 'Full-time',
  experience: '5-8 years',
  description: 'Lead structural engineering projects and mentor junior engineers while ensuring compliance with building codes and safety standards.',
  requirements: ["Bachelor's degree in Structural Engineering or Civil Engineering", 'Professional Engineering (PE) license required', 'Experience with structural analysis software (ETABS, SAP2000)', 'Strong knowledge of building codes and standards', 'Proven track record of managing complex structural projects', 'Excellent leadership and communication skills']
}, {
  id: 2,
  title: 'Project Manager',
  category: 'Project Management',
  location: 'Los Angeles, CA',
  employmentType: 'Contract',
  experience: '4-6 years',
  description: 'Oversee construction projects from inception to completion, managing timelines, budgets, and stakeholder relationships.',
  requirements: ["Bachelor's degree in Construction Management or related field", 'PMP certification preferred', 'Experience with project management software', 'Strong financial management and budgeting skills', 'Excellent stakeholder management abilities', 'Knowledge of construction methodologies and best practices']
}, {
  id: 3,
  title: 'Architectural Designer',
  category: 'Design',
  location: 'Chicago, IL',
  employmentType: 'Full-time',
  experience: '3-5 years',
  description: 'Create innovative architectural designs while collaborating with engineers and clients to meet project requirements.',
  requirements: ["Master's degree in Architecture", 'Proficiency in AutoCAD, Revit, and 3D modeling software', 'Strong portfolio demonstrating design capabilities', 'Experience with sustainable design practices', 'Knowledge of building codes and regulations', 'Excellent visualization and presentation skills']
}, {
  id: 4,
  title: 'Construction Site Supervisor',
  category: 'Construction',
  location: 'Houston, TX',
  employmentType: 'Full-time',
  experience: '5+ years',
  description: 'Supervise construction sites, ensure safety compliance, and coordinate with subcontractors to meet project deadlines.',
  requirements: ["Bachelor's degree in Construction Management or related field", 'OSHA certification required', 'Experience managing large construction crews', 'Strong knowledge of construction safety regulations', 'Proven track record of completing projects on schedule', 'Excellent problem-solving and leadership skills']
}, {
  id: 5,
  title: 'Administrative Coordinator',
  category: 'Administration',
  location: 'Miami, FL',
  employmentType: 'Part-time',
  experience: '2-4 years',
  description: 'Provide administrative support to project teams, manage office operations, and coordinate with various departments.',
  requirements: ["Bachelor's degree in Business Administration or related field", 'Proficiency in Microsoft Office Suite', 'Experience with office management systems', 'Strong organizational and multitasking abilities', 'Excellent written and verbal communication skills', 'Knowledge of construction industry terminology preferred']
}, {
  id: 6,
  title: 'Engineering Intern',
  category: 'Engineering',
  location: 'Boston, MA',
  employmentType: 'Internship',
  experience: '0-1 years',
  description: 'Support engineering team in design, analysis, and documentation of various construction projects.',
  requirements: ["Currently pursuing Bachelor's degree in Engineering", 'Strong academic performance', 'Basic knowledge of CAD software', 'Excellent analytical and problem-solving skills', 'Strong desire to learn and grow in the construction industry', 'Effective communication skills']
}];
const benefits = [{
  icon: <HeartIcon className="w-6 h-6" />,
  title: 'Health & Wellness',
  description: 'Comprehensive medical, dental, and vision coverage for you and your family'
}, {
  icon: <GraduationCapIcon className="w-6 h-6" />,
  title: 'Learning & Development',
  description: 'Professional development programs and certification support'
}, {
  icon: <UsersIcon className="w-6 h-6" />,
  title: 'Work-Life Balance',
  description: 'Flexible working hours and paid time off'
}, {
  icon: <TrendingUpIcon className="w-6 h-6" />,
  title: 'Career Growth',
  description: 'Clear career progression paths and mentorship opportunities'
}];
const CareersPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeEmploymentType, setActiveEmploymentType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const filteredJobs = jobOpenings.filter(job => {
    const matchesCategory = activeCategory === 'All' || job.category === activeCategory;
    const matchesEmploymentType = activeEmploymentType === 'All' || job.employmentType === activeEmploymentType;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesEmploymentType && matchesSearch;
  });
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
      }} />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl max-w-3xl">
            Build your career with a company that values innovation,
            sustainability, and excellence in engineering and construction.
          </p>
        </div>
      </section>

      {/* Job Search Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Current Opportunities" subtitle="Explore our open positions and find your perfect role" centered={true} />
          <div className="mb-8">
            <div className="relative max-w-md mx-auto mb-8">
              <input type="text" placeholder="Search positions..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {jobCategories.map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 rounded-full transition-colors duration-200 ${activeCategory === category ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    {category}
                  </button>)}
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Employment Type
              </h3>
              <div className="flex flex-wrap gap-2">
                {employmentTypes.map(type => <button key={type} onClick={() => setActiveEmploymentType(type)} className={`px-4 py-2 rounded-full transition-colors duration-200 ${activeEmploymentType === type ? 'bg-yellow-500 text-blue-900' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    {type}
                  </button>)}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            {filteredJobs.map(job => <motion.div key={job.id} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-grow mb-4 md:mb-0 md:mr-8">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <BriefcaseIcon size={16} className="mr-2 text-yellow-500" />
                        {job.category}
                      </div>
                      <div className="flex items-center">
                        <MapPinIcon size={16} className="mr-2 text-yellow-500" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <ClockIcon size={16} className="mr-2 text-yellow-500" />
                        {job.employmentType}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="mt-4">
                      <h4 className="font-semibold text-blue-900 mb-2">
                        Requirements:
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        {job.requirements.map((requirement, index) => <li key={index} className="pl-2">
                            {requirement}
                          </li>)}
                      </ul>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Button to={`/careers/apply/${job.id}`} variant="secondary">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Why Work With Us" subtitle="Join a team that values your growth and well-being" centered={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {benefits.map((benefit, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-900">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Application Process" subtitle="Your journey to joining our team" centered={true} />
          <div className="max-w-3xl mx-auto mt-12">
            <div className="space-y-8">
              {['Submit your application with resume and cover letter', 'Initial screening and review by our HR team', 'Technical assessment and interviews', 'Final interview with department leaders', 'Job offer and onboarding'].map((step, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-700 font-medium">{step}</p>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our team of passionate professionals and help us build a better
            future through innovative engineering and construction solutions.
          </p>
          <Button variant="primary" to="/contact">
            Contact Our Recruitment Team
          </Button>
        </div>
      </section>
    </div>;
};
export default CareersPage;