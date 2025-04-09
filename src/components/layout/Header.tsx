import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MenuIcon, X as CloseIcon, PhoneIcon, MailIcon, ClockIcon } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const navigate = useNavigate();
  const handleNavClick = (sectionId: string, path: string) => {
    setIsMenuOpen(false);
    if (path === '/careers') {
      navigate(path);
    } else if (isHome && sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    } else if (path !== location.pathname) {
      navigate(path, {
        state: {
          scrollTo: sectionId
        }
      });
    }
  };
  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
      window.history.replaceState({}, document.title);
    }
  }, [location]);
  const navItems = [{
    label: 'Home',
    sectionId: 'hero',
    path: '/'
  }, {
    label: 'About',
    sectionId: 'about',
    path: '/about'
  }, {
    label: 'Services',
    sectionId: 'services',
    path: '/services'
  }, {
    label: 'Projects',
    sectionId: 'projects',
    path: '/projects'
  }, {
    label: 'News',
    sectionId: 'news',
    path: '/news'
  }, {
    label: 'Events',
    sectionId: 'events',
    path: '/events'
  }, /*{
    label: 'Careers',
    sectionId: 'careers',
    path: '/careers'
  },*/ {
    label: 'Contact',
    sectionId: 'contact',
    path: '/contact'
  }];
  return <header className="w-full bg-white shadow-md">
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div className="flex items-center">
              <PhoneIcon size={16} className="mr-2" />
              <span className="text-sm">(+94) 11 592 5015 / 16</span>
            </div>
            <div className="flex items-center">
              <MailIcon size={16} className="mr-2" />
              <span className="text-sm">info@3gconsultants.lk</span>
            </div>
          </div>
          <div className="flex items-center">
            <ClockIcon size={16} className="mr-2" />
            <span className="text-sm">Mon - Fri: 9:00AM - 5:00PM</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-900">
            3gConsultants
          </Link>
          <nav className="hidden md:flex space-x-8">
            {navItems.map(item => <button key={item.path} onClick={() => handleNavClick(item.sectionId, item.path)} className="text-gray-800 hover:text-blue-700 font-medium cursor-pointer">
                {item.label}
              </button>)}
          </nav>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-800 focus:outline-none">
            <MenuIcon size={24} />
          </button>
        </div>
      </div>
      {isMenuOpen && <div className="md:hidden bg-white fixed inset-0 z-50 overflow-y-auto">
          <div className="p-4 flex justify-end">
            <button onClick={() => setIsMenuOpen(false)} className="text-gray-800 focus:outline-none">
              <CloseIcon size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-6 p-8">
            {navItems.map(item => <button key={item.path} onClick={() => handleNavClick(item.sectionId, item.path)} className="text-xl text-gray-800 hover:text-blue-700 font-medium">
                {item.label}
              </button>)}
          </div>
        </div>}
    </header>;
};
export default Header;