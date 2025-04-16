import  { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  MenuIcon,
  X as CloseIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const navigate = useNavigate()
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
      setIsSticky(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const handleNavClick = (sectionId: string, path: string) => {
    setIsMenuOpen(false)
    if (path === '/careers') {
      navigate(path)
    } else if (isHome && sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
        })
      }
    } else if (path !== location.pathname) {
      navigate(path, {
        state: {
          scrollTo: sectionId,
        },
      })
    }
  }
  useEffect(() => {
    const scrollTo = location.state?.scrollTo
    if (scrollTo) {
      const element = document.getElementById(scrollTo)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
        })
      }
      window.history.replaceState({}, document.title)
    }
  }, [location])
  const navItems = [
    {
      label: 'Home',
      sectionId: 'hero',
      path: '/',
    },
    {
      label: 'About',
      sectionId: 'about',
      path: '/about',
    },
    {
      label: 'Services',
      sectionId: 'services',
      path: '/services',
    },
    {
      label: 'Projects',
      sectionId: 'projects',
      path: '/projects',
    },
    {
      label: 'News',
      sectionId: 'news',
      path: '/news',
    },
    {
      label: 'Events',
      sectionId: 'events',
      path: '/events',
    },
/*    {
      label: 'Careers',
      sectionId: 'careers',
      path: '/careers',
    },*/
    {
      label: 'Contact',
      sectionId: 'contact',
      path: '/contact',
    },
  ]
  const headerVariants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
    exit: {
      y: -100,
      opacity: 0,
    },
  }
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 35,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 35,
      },
    },
  }
  const navItemVariants = {
    closed: {
      opacity: 0,
      y: 20,
    },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 300,
        damping: 35,
      },
    }),
  }
  return (
      <header className="w-full">
        <motion.div
            initial="initial"
            animate="animate"
            variants={headerVariants}
            className="bg-blue-900 text-white py-2"
        >
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
              <span className="text-sm">Mon - Fri: 8:00AM - 5:00PM</span>
            </div>
          </div>
        </motion.div>
        <motion.div
            animate={{
              y: isSticky ? 0 : -1,
              opacity: 1,
            }}
            initial={{
              opacity: 0,
            }}
            className={`${isSticky ? 'fixed top-0 left-0 right-0 shadow-lg' : 'relative'} bg-white/95 backdrop-blur-md z-50 ${isScrolled ? 'rounded-b-2xl' : ''}`}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
              >
                <Link to="/" className="text-2xl font-bold text-blue-900">
                  3G Consultants
                </Link>
              </motion.div>
              <nav className="hidden md:flex space-x-8">
                {navItems.map((item, index) => (
                    <motion.button
                        key={item.path}
                        onClick={() => handleNavClick(item.sectionId, item.path)}
                        className="text-gray-800 hover:text-blue-700 font-medium cursor-pointer"
                        whileHover={{
                          scale: 1.1,
                          transition: {
                            type: 'spring',
                            stiffness: 400,
                            damping: 10,
                          },
                        }}
                        initial={{
                          opacity: 0,
                          y: -20,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: {
                            delay: index * 0.1,
                          },
                        }}
                    >
                      {item.label}
                    </motion.button>
                ))}
              </nav>
              <motion.button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden text-gray-800 focus:outline-none"
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
              >
                <MenuIcon size={24} />
              </motion.button>
            </div>
          </div>
        </motion.div>
        <AnimatePresence>
          {isMenuOpen && (
              <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={mobileMenuVariants}
                  className="md:hidden bg-white fixed inset-0 z-50 overflow-y-auto"
              >
                <div className="p-4 flex justify-end">
                  <motion.button
                      onClick={() => setIsMenuOpen(false)}
                      className="text-gray-800 focus:outline-none"
                      whileHover={{
                        scale: 1.1,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                  >
                    <CloseIcon size={24} />
                  </motion.button>
                </div>
                <div className="flex flex-col items-center space-y-6 p-8">
                  {navItems.map((item, index) => (
                      <motion.button
                          key={item.path}
                          custom={index}
                          variants={navItemVariants}
                          onClick={() => handleNavClick(item.sectionId, item.path)}
                          className="text-xl text-gray-800 hover:text-blue-700 font-medium"
                          whileHover={{
                            scale: 1.1,
                            transition: {
                              type: 'spring',
                              stiffness: 400,
                              damping: 10,
                            },
                          }}
                      >
                        {item.label}
                      </motion.button>
                  ))}
                </div>
              </motion.div>
          )}
        </AnimatePresence>
      </header>
  )
}
export default Header