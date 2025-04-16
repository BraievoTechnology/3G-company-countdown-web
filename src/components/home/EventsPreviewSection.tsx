
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarIcon, MapPinIcon, ClockIcon } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const upcomingEvents = [{
  id: 1,
  title: 'Sustainable Construction Workshop',
  date: 'July 15, 2023',
  time: '9:00 AM - 4:00 PM',
  location: 'BuildConstruct HQ',
  image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
}, {
  id: 2,
  title: 'Green Valley Residences Open House',
  date: 'July 28, 2023',
  time: '10:00 AM - 2:00 PM',
  location: 'Green Valley Site',
  image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
}];
const EventsPreviewSection = () => {
  return <section id="events" className="py-20 bg-blue-900 relative overflow-hidden">
      <motion.div className="absolute inset-0" animate={{
      background: ['radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)', 'radial-gradient(circle at 100% 100%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)', 'radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)']
    }} transition={{
      duration: 10,
      repeat: Infinity,
      ease: 'linear'
    }} />
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle title="Upcoming Events" subtitle="Join us at our upcoming events and stay connected" centered={true} className="text-white [&>div>p]:text-blue-100" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {upcomingEvents.map((event, index) => <motion.div key={event.id} initial={{
          opacity: 0,
          x: index % 2 === 0 ? -20 : 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.2
        }} className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-blue-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex flex-col md:flex-row h-full">
                <div className="md:w-2/5 h-full">
                  <motion.img whileHover={{
                scale: 1.1
              }} transition={{
                duration: 0.3
              }} src={event.image} alt={event.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:w-3/5">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {event.title}
                  </h3>
                  <div className="space-y-2 text-blue-100">
                    <div className="flex items-center">
                      <CalendarIcon size={16} className="mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <ClockIcon size={16} className="mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon size={16} className="mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <motion.div initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} transition={{
                delay: 0.3
              }} className="mt-6">
                    <Link to={`/events/${event.id}`} className="inline-block px-6 py-2 bg-yellow-500 text-blue-900 rounded-lg font-medium hover:bg-yellow-400 transition-colors">
                      Learn More
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>)}
        </div>
        <div className="text-center">
          <Button to="/events" variant="primary">
            View All Events
          </Button>
        </div>
      </div>
    </section>;
};
export default EventsPreviewSection;