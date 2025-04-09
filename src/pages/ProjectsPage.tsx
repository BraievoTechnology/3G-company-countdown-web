import  { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
const projectCategories = ['All', 'Ongoing', 'Completed'];
const projects = [{
  id: 1,
  title: 'City Center Tower',
  status: 'Ongoing',
  description: 'A 30-story commercial tower featuring sustainable design and state-of-the-art facilities.',
  image: 'https://images.unsplash.com/photo-1486744328743-c1151100a95a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  year: '2022'
}, {
  id: 2,
  title: 'Riverside Bridge',
  status: 'Completed',
  description: 'A 500-meter cable-stayed bridge connecting two communities across the river.',
  image: 'https://images.unsplash.com/photo-1545126634-40e8a2a3141a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  year: '2021'
}, {
  id: 3,
  title: 'Green Valley Residences',
  status: 'Ongoing',
  description: 'A luxury residential complex with 200 units, featuring gardens, pools, and smart home technology.',
  image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  year: '2023'
}, {
  id: 4,
  title: 'Metro Line Extension',
  status: 'Completed',
  description: 'A 12-kilometer extension of the city metro system, including 5 new stations.',
  image: 'https://images.unsplash.com/photo-1565515369578-91962d314e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  year: '2020'
}, {
  id: 5,
  title: 'Coastal Protection System',
  status: 'Ongoing',
  description: 'A comprehensive coastal protection system designed to mitigate flooding and erosion.',
  image: 'https://images.unsplash.com/photo-1574155376612-bfa4ed8aabfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  year: '2022'
}, {
  id: 6,
  title: 'Downtown Revitalization',
  status: 'Completed',
  description: 'A comprehensive urban renewal project transforming a historic downtown area.',
  image: 'https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  year: '2021'
}, {
  id: 7,
  title: 'Tech Innovation Campus',
  status: 'Ongoing',
  description: 'A modern campus for tech companies featuring collaborative spaces and sustainable design.',
  image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
  year: '2023'
}, {
  id: 8,
  title: 'Lakeside Apartments',
  status: 'Completed',
  description: 'A premium apartment complex overlooking the lake with recreational facilities.',
  image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  year: '2022'
}, {
  id: 9,
  title: 'Solar Farm Installation',
  status: 'Completed',
  description: 'A 50-acre solar farm generating clean energy for the surrounding communities.',
  image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  year: '2021'
}];
const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(project => project.status === activeCategory);
  return <div className="w-full">
      <section className="relative bg-blue-900 text-white py-24">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
      }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl max-w-3xl">
            Explore our portfolio of completed and ongoing projects across
            various sectors.
          </p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Project Portfolio" subtitle="Browse our diverse range of projects showcasing our expertise and innovation." centered={true} />
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {projectCategories.map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-6 py-2 rounded-full transition-colors duration-200 ${activeCategory === category ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {category}
              </button>)}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-sm font-medium ${project.status === 'Ongoing' ? 'text-yellow-500' : 'text-green-500'}`}>
                      {project.status}
                    </span>
                    <span className="text-sm text-gray-500">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
};
export default ProjectsPage;