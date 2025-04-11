
import { Link } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { CalendarIcon, ClockIcon, ArrowRightIcon } from 'lucide-react';
const newsArticles = [{
  id: 1,
  title: 'BuildConstruct Wins Excellence in Construction Award',
  excerpt: 'Our City Center Tower project was recognized for outstanding design and sustainable construction practices at the annual industry awards.',
  image: 'https://images.unsplash.com/photo-1486744328743-c1151100a95a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  date: 'June 15, 2023',
  readTime: '5 min read'
}, {
  id: 2,
  title: 'Breaking Ground on New Coastal Protection System',
  excerpt: 'BuildConstruct has begun work on an innovative coastal protection system designed to protect communities from rising sea levels and storm surges.',
  image: 'https://images.unsplash.com/photo-1574155376612-bfa4ed8aabfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  date: 'May 22, 2023',
  readTime: '4 min read'
}, {
  id: 3,
  title: 'BuildConstruct Expands Sustainable Construction Practices',
  excerpt: 'Our company has implemented new eco-friendly construction methods across all projects, reducing carbon footprint by 30%.',
  image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  date: 'April 10, 2023',
  readTime: '6 min read'
}, {
  id: 4,
  title: 'New Partnership with Green Energy Solutions',
  excerpt: 'BuildConstruct announces strategic partnership to integrate renewable energy systems into all future construction projects.',
  image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  date: 'March 5, 2023',
  readTime: '3 min read'
}, {
  id: 5,
  title: 'BuildConstruct Completes Metro Line Extension Ahead of Schedule',
  excerpt: 'The 12-kilometer metro extension project was completed three months ahead of schedule and under budget, setting a new standard for infrastructure projects.',
  image: 'https://images.unsplash.com/photo-1565515369578-91962d314e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  date: 'February 18, 2023',
  readTime: '5 min read'
}, {
  id: 6,
  title: 'BuildConstruct Hosts Annual Construction Technology Summit',
  excerpt: 'Industry leaders gathered to discuss innovations in construction technology and sustainable building practices at our annual summit.',
  image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  date: 'January 25, 2023',
  readTime: '4 min read'
}];
const upcomingEvents = [{
  id: 1,
  title: 'Sustainable Construction Workshop',
  date: 'July 15, 2023',
  location: 'BuildConstruct Headquarters'
}, {
  id: 2,
  title: 'Community Open House: Green Valley Residences',
  date: 'July 28, 2023',
  location: 'Green Valley Site'
}, {
  id: 3,
  title: 'Industry Networking Event',
  date: 'August 10, 2023',
  location: 'Metropolitan Hotel'
}];
const NewsPage = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
      }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            News & Updates
          </h1>
          <p className="text-xl max-w-3xl">
            Stay informed about BuildConstruct's latest projects, achievements,
            and industry insights.
          </p>
        </div>
      </section>
      {/* News Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Latest News" subtitle="Keep up with our recent developments and industry insights." centered={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map(article => <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <div className="flex items-center mr-4">
                      <CalendarIcon size={14} className="mr-1" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center">
                      <ClockIcon size={14} className="mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Link to={`/news/${article.id}`} className="flex items-center text-yellow-500 font-medium hover:text-yellow-600">
                    Read More <ArrowRightIcon size={16} className="ml-2" />
                  </Link>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Upcoming Events" subtitle="Join us at these upcoming events and stay connected with BuildConstruct." />
          <div className="space-y-6">
            {upcomingEvents.map(event => <div key={event.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-2 md:mb-0">
                    <CalendarIcon size={16} className="mr-2 text-yellow-500" />
                    <span>{event.date}</span>
                    <span className="mx-2">•</span>
                    <span>{event.location}</span>
                  </div>
                </div>
                <Button to={`/events/${event.id}`} variant="outline" className="mt-4 md:mt-0 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
                  Event Details
                </Button>
              </div>)}
          </div>
          <div className="mt-10 text-center">
            <Button to="/events" variant="secondary">
              View All Events
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default NewsPage;