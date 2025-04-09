import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { CalendarIcon, MapPinIcon, ClockIcon } from 'lucide-react';
const upcomingEvents = [{
  id: 1,
  title: 'Sustainable Construction Workshop',
  description: 'Join us for a comprehensive workshop on sustainable construction practices and green building technologies.',
  date: 'July 15, 2023',
  time: '9:00 AM - 4:00 PM',
  location: 'BuildConstruct Headquarters',
  address: '123 Construction Way, Building City',
  image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
}, {
  id: 2,
  title: 'Community Open House: Green Valley Residences',
  description: 'Tour our newest residential development and learn about the sustainable features incorporated into these modern homes.',
  date: 'July 28, 2023',
  time: '10:00 AM - 2:00 PM',
  location: 'Green Valley Site',
  address: '456 Valley Road, Green Heights',
  image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
}, {
  id: 3,
  title: 'Industry Networking Event',
  description: 'Connect with professionals from across the construction and engineering industries at our quarterly networking reception.',
  date: 'August 10, 2023',
  time: '6:00 PM - 9:00 PM',
  location: 'Metropolitan Hotel',
  address: '789 Downtown Avenue, Building City',
  image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80'
}, {
  id: 4,
  title: 'Construction Technology Expo',
  description: 'Explore the latest innovations in construction technology, from advanced materials to digital tools transforming the industry.',
  date: 'September 5, 2023',
  time: '10:00 AM - 6:00 PM',
  location: 'City Convention Center',
  address: '101 Convention Plaza, Building City',
  image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
}];
const pastEvents = [{
  id: 101,
  title: 'Annual Charity Build Day',
  date: 'May 20, 2023',
  location: 'Community Center',
  image: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
}, {
  id: 102,
  title: 'Infrastructure Innovation Summit',
  date: 'April 12, 2023',
  location: 'Grand Hotel Conference Center',
  image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1412&q=80'
}, {
  id: 103,
  title: 'Career Fair for Engineering Students',
  date: 'March 3, 2023',
  location: 'State University',
  image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
}];
const EventsPage = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
      }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Events & Updates
          </h1>
          <p className="text-xl max-w-3xl">
            Stay connected with BuildConstruct through our industry events,
            workshops, and community gatherings.
          </p>
        </div>
      </section>
      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Upcoming Events" subtitle="Join us at these upcoming events to learn, connect, and grow with BuildConstruct." centered={true} />
          <div className="space-y-12 mt-12">
            {upcomingEvents.map(event => <div key={event.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="h-64 lg:h-auto">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center">
                        <CalendarIcon size={20} className="text-yellow-500 mr-2" />
                        <span className="text-gray-700">{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <ClockIcon size={20} className="text-yellow-500 mr-2" />
                        <span className="text-gray-700">{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPinIcon size={20} className="text-yellow-500 mr-2" />
                        <span className="text-gray-700">{event.location}</span>
                      </div>
                    </div>
                    <Button to={`/events/${event.id}`} variant="secondary">
                      Event Details
                    </Button>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Past Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Past Events" subtitle="Explore highlights from our previous events and activities." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {pastEvents.map(event => <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {event.title}
                  </h3>
                  <div className="flex items-center mb-2">
                    <CalendarIcon size={16} className="text-yellow-500 mr-2" />
                    <span className="text-gray-600">{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon size={16} className="text-yellow-500 mr-2" />
                    <span className="text-gray-600">{event.location}</span>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive invitations to upcoming
            events and the latest news from BuildConstruct.
          </p>
          <div className="max-w-lg mx-auto">
            <form className="flex flex-col md:flex-row gap-4">
              <input type="email" placeholder="Your email address" className="flex-grow px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500" required />
              <Button type="submit" variant="primary">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>;
};
export default EventsPage;