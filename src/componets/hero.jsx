import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './commen/navbar'
const Hero = () => {
  const [mapZoomed, setMapZoomed] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const navArray = [

    { to: "/about", text: "About" },
    { to: "/Coaches & Trainers", text: "Coaches & Trainers" },
    { to: "/services", text: "Services" },
    { to: "/gallery", text: "Gallery" },
    { to: "/contact", text: "Contact" },
    { to: "/dashboard", text: "Member Login", special: true }
    
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black/90 to-black/60">
      {/* Hero Section */}
        <div className="relative md:h-[120vh] h-[100vh]">
        {/* Navbar */}
        <nav className="absolute top-16 left-0 right-0 z-30 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white flex flex-row items-center text-2xl font-bold">
              <img src="https://sweatboxapg.com/wp-content/uploads/2021/12/cropped-Logo-70x70.png.webp" alt="SWEAT BOX" className="mr-2" />
              SWEAT BOX
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navArray.map((item) => (
                <Link 
                  key={item.to}
                  to={item.to} 
                  className={`${
                    item.special 
                      ? "bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600" 
                      : "text-white hover:text-orange-500"
                  } transition-colors font-medium`}
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-secondary-800/95 backdrop-blur-sm rounded-lg mt-2">
              {[
                { to: '/programs', text: 'Programs' },
                { to: '/trainers', text: 'Trainers' },
                { to: '/schedule', text: 'Schedule' },
                { to: '/contact', text: 'Contact' }
              ].map(item => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-white block px-3 py-2 rounded-md hover:bg-secondary-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.text}
                </Link>
              ))}
              <Link 
                to="/dashboard" 
                className="bg-orange-500 text-white block px-3 py-2 rounded-md hover:bg-orange-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Member Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>



        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 md:h-[120vh] h-[100vh] bg-cover bg-center z-0"
      
        />
        
        <div className="relative z-20 h-full flex flex-col justify-center  items-center text-white text-center px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter">
              YOU CONTROL<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 animate-gradient-x">
                YOUR DESTINY
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your body and mind with our cutting-edge training programs
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link 
                to="/programs" 
                className="group relative px-8 py-4 rounded-full overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 animate-gradient-x"></span>
                <span className="relative flex items-center gap-2 text-white font-bold text-lg">
                  Start Your Journey
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </span>
              </Link>
              <Link
                to="/trainers"
                className="px-8 py-4 rounded-full text-lg font-bold border-2 border-white/20 hover:border-white/40 backdrop-blur-sm transition-all hover:scale-105"
              >
                Meet Our Team
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Modern wave separator */}
        <div className="absolute -bottom-1 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 120" className="w-full">
            <path 
              fill="#111827" 
              fillOpacity="1" 
              d="M0,64L48,69.3C96,75,192,85,288,90.7C384,96,480,96,576,90.7C672,85,768,75,864,69.3C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

    </div>
  )
}

export default Hero



