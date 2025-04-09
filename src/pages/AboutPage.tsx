import SectionTitle from '../components/ui/SectionTitle';
import { CheckCircleIcon, UsersIcon, EyeIcon, TargetIcon } from 'lucide-react';
import WordCarousel from '../components/animations/WordCarousel';
const AboutPage = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
      }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About BuildConstruct
          </h1>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2">
            <span className="text-[50px] font-bold text-blue-900">We</span>
            <span className="text-[50px] font-bold text-blue-900">
              <WordCarousel words={['Create', 'Develop', 'Build']} />
            </span>
            <span className="text-[50px] font-bold text-blue-900">
              Solutions
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="mb-4 text-gray-700">
                Founded in 1995, BuildConstruct began as a small local
                contractor with a vision to transform the construction landscape
                through quality, innovation, and integrity.
              </p>
              <p className="mb-4 text-gray-700">
                Over the past 25+ years, we have grown into a leading
                construction and engineering firm, delivering exceptional
                projects across residential, commercial, and infrastructure
                sectors.
              </p>
              <p className="mb-4 text-gray-700">
                Our journey has been marked by continuous growth, technological
                adoption, and an unwavering commitment to excellence that has
                earned us the trust of clients nationwide.
              </p>
              <p className="text-gray-700">
                Today, BuildConstruct stands as a testament to what can be
                achieved through dedication, expertise, and a client-centered
                approach to construction and engineering.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="Construction team" className="rounded-lg h-64 w-full object-cover" />
              <img src="https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Historical project" className="rounded-lg h-64 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <EyeIcon size={32} className="text-yellow-500 mr-4" />
                <h2 className="text-3xl font-bold text-blue-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 mb-4">
                To be the most trusted and respected construction and
                engineering company, known for excellence, innovation, and
                sustainable practices.
              </p>
              <p className="text-gray-700">
                We envision a future where our projects stand as landmarks of
                quality, durability, and architectural significance,
                contributing positively to communities and the environment.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <TargetIcon size={32} className="text-yellow-500 mr-4" />
                <h2 className="text-3xl font-bold text-blue-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-700 mb-4">
                To deliver exceptional construction and engineering solutions
                that exceed client expectations through technical excellence,
                innovative approaches, and unwavering integrity.
              </p>
              <p className="text-gray-700">
                We are committed to creating value for our clients, providing
                growth opportunities for our employees, and contributing to
                sustainable development in the communities where we operate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Management & Staff */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Team" subtitle="Meet the experienced professionals who lead BuildConstruct to excellence." centered={true} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Robert Smith" className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-bold text-blue-900">Robert Smith</h3>
              <p className="text-yellow-500 font-medium mb-2">CEO & Founder</p>
              <p className="text-gray-600">
                With over 30 years of industry experience, Robert leads
                BuildConstruct with vision and integrity.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" alt="Jennifer Lee" className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-bold text-blue-900">Jennifer Lee</h3>
              <p className="text-yellow-500 font-medium mb-2">Chief Engineer</p>
              <p className="text-gray-600">
                Jennifer brings cutting-edge engineering expertise and
                innovation to every project we undertake.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Michael Johnson" className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-bold text-blue-900">
                Michael Johnson
              </h3>
              <p className="text-yellow-500 font-medium mb-2">
                Operations Director
              </p>
              <p className="text-gray-600">
                Michael ensures that all our projects are delivered on time,
                within budget, and to the highest standards.
              </p>
            </div>
          </div>

          {/* Staff Overview */}
          <div className="mt-16">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <UsersIcon size={32} className="text-yellow-500 mr-4" />
                <h2 className="text-3xl font-bold text-blue-900">Our Staff</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Behind every successful project is our team of over 250
                dedicated professionals, including engineers, architects,
                project managers, and skilled tradespeople.
              </p>
              <p className="text-gray-700 mb-6">
                We invest in continuous training and development for our staff,
                ensuring they stay at the forefront of industry advancements and
                best practices.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <CheckCircleIcon className="text-yellow-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <p>Highly qualified engineers and architects</p>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="text-yellow-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <p>Certified project management professionals</p>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="text-yellow-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <p>Skilled and experienced tradespeople</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default AboutPage;