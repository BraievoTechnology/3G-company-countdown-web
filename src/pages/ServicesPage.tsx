import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { BuildingIcon, DropletIcon, LeafIcon, BriefcaseIcon, MapIcon } from 'lucide-react';
const services = [{
  id: 'procurement',
  title: 'Procurement and Contracts',
  description: 'Procurement involves making purchasing decisions under conditions of scarcity. To ensure project success, a legally binding contract is essential, as it defines the rights and obligations of all parties involved. Effective Contract Administration is key to successfully delivering the project.',
  icon: <BriefcaseIcon size={48} className="text-yellow-500" />,
  link: '/services/procurement',
  image: 'https://images.unsplash.com/photo-1664575197229-3bbebc281874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
}, {
  id: 'highways',
  title: 'Highways and Transportation Engineering',
  description: "Sri Lanka's ongoing infrastructure developments, particularly in roads and related works, have opened up valuable opportunities for the firm to demonstrate its expertise in recent Highways and Transportation projects.",
  icon: <div size={48} className="text-yellow-500" />,
  link: '/services/highways',
  image: 'https://images.unsplash.com/photo-1545126634-40e8a2a3141a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
}, {
  id: 'water',
  title: 'Water Resources Engineering',
  description: '3G Consultants (Pvt) Ltd. places high importance on water conservation and has consistently focused on sustainable water resource management, strictly following international standards in Water Resource Engineering.',
  icon: <DropletIcon size={48} className="text-yellow-500" />,
  link: '/services/water',
  image: 'https://images.unsplash.com/photo-1574155376612-bfa4ed8aabfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
}, {
  id: 'environmental',
  title: 'Environmental and Climate Resilience Engineering',
  description: 'Sri Lanka, known for its rich biodiversity, offers ideal conditions for diverse flora and fauna. 3G Consultants (Pvt) Ltd. is committed to environmental protection and strongly values sustainable development and conservation.',
  icon: <LeafIcon size={48} className="text-yellow-500" />,
  link: '/services/environmental',
  image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
}, {
  id: 'urban',
  title: 'Urban, Rural and Regional Development',
  description: 'To meet the growing population and rising living standards, numerous Urban, Rural, and Regional development projects are being initiated. 3G Consultants (Pvt) Ltd. believes that well-planned, innovative design is essential for these projects, especially when considering future expansion needs.',
  icon: <MapIcon size={48} className="text-yellow-500" />,
  link: '/services/urban',
  image: 'https://images.unsplash.com/photo-1486744328743-c1151100a95a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
}, {
  id: 'housing',
  title: 'Commercial and Housing Development',
  description: 'In many developing countries, there is a growing trend to adopt modern living standards by embracing Western-inspired architectural styles and advanced technologies, seen in developments like luxury housing, IT parks, educational cities, waterfronts, high-rise buildings, and iconic structures.',
  icon: <BuildingIcon size={48} className="text-yellow-500" />,
  link: '/services/housing',
  image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
}];
const ServicesPage = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
      }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl">
            Comprehensive construction and engineering solutions tailored to
            meet your specific project needs.
          </p>
        </div>
      </section>
      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="What We Offer" subtitle="BuildConstruct provides a wide range of services across the construction and engineering spectrum." />
          <div className="space-y-16">
            {services.map((service, index) => <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    {service.icon}
                    <h2 className="text-3xl font-bold text-blue-900 ml-4">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <Button to={service.link} variant="secondary">
                    Learn More
                  </Button>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img src={service.image} alt={service.title} className="rounded-lg shadow-lg w-full h-80 object-cover" />
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Our team of experts can develop a tailored approach to meet your
            specific project requirements.
          </p>
          <Button to="/contact" variant="primary">
            Contact Us for a Consultation
          </Button>
        </div>
      </section>
    </div>;
};
export default ServicesPage;
//test commit