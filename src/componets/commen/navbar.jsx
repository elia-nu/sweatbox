import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const Navbar = ({ scrollPosition }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isScrolled = scrollPosition > 150
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const navArray = [
   

    { to: "/about", text: "About" },
    { to: "/Coaches & Trainers", text: "Coaches & Trainers" },
    { to: "/services", text: "Services" },
    { to: "/gallery", text: "Gallery" },

    { to: "/contact", text: "Contact" }
  ]
  return (
    <motion.nav 
    initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5 }}
      className={`
        transition-all duration-300 w-full bg-cover z-20 bg-center bg-no-repeat bg-fixed
        ${isHomePage 
          ? 'pt-10'
          : 'bg-gradient-to-b from-black/80 to-secondary-200/80 backdrop-blur-md shadow-lg'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            whileHover={{ scale: 1.05 }}    
            className="flex-shrink-0"   
          >
            <Link to="/" className="text-white flex items-center text-2xl font-bold">
              <img 
                src="https://sweatboxapg.com/wp-content/uploads/2021/12/cropped-Logo-70x70.png.webp" 
                alt="SWEAT BOX" 
                className="h-12 w-12 mr-3" 
              />
              SWEAT BOX
            </Link>
          </motion.div>
          
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
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
            </motion.button>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navArray.map((item) => (
                <motion.div
                  key={item.to}
                  whileHover={{ scale: 1.1 }}
                >
                  <Link 
                    to={item.to}
                    className="text-white hover:text-orange-500 transition-colors font-medium"
                  >
                    {item.text}
                  </Link>
                </motion.div>
              ))}
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link 
                  to="/dashboard" 
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full hover:from-orange-600 hover:to-red-700 transition-all font-medium"
                >
                  Member Portal
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-secondary-800/95 backdrop-blur-sm rounded-lg mt-2">
                {navArray.map((item) => (
                  <Link 
                    key={item.to}
                    to={item.to}
                    className="text-white block px-3 py-2 rounded-md hover:bg-secondary-700 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.text}
                  </Link>
                ))}
                <Link 
                  to="/dashboard" 
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-white block px-3 py-2 rounded-md hover:from-orange-600 hover:to-red-700 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Member Portal
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
export default Navbar