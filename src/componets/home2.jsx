import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Home2
 = () => {
  const [mapZoomed, setMapZoomed] = useState(false)

  return (
    <div className="min-h-screen bg-secondary-900">
      {/* Hero Section */}
      <div className="relative md:h-[120vh] h-[100vh]">
        {/* Navbar */}
        <Navbar />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 via-black/40 to-[#111827] z-10" />
        <div 
          className="absolute inset-0 md:h-[120vh] h-[100vh] bg-cover bg-center z-0"
          style={{backgroundImage: "url('https://sweatboxapg.com/wp-content/uploads/2021/12/13.jpg')"}}
        />
        
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-white text-center px-4 mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-8 tracking-tight"
          >
            YOU CONTROL<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">YOUR BODY</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 sm:space-x-4"
          >
            <Link 
              to="/programs" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-orange-500/30"
            >
              Explore Programs
            </Link>
            <Link
              to="/trainers"
              className="bg-white/10 backdrop-blur-sm text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-white/20 transition-all"
            >
              Meet Trainers
            </Link>
          </motion.div>
        </div>

        {/* Concave curve */}
        <div className="absolute  bottom-0 left-0 right-0 z-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220" className="w-full">
            <path 
              fill="#111827" 
              fillOpacity="1" 
              d="M0,160L48,165.3C96,171,192,181,288,165.3C384,149,480,107,576,101.3C672,96,768,128,864,138.7C960,149,1056,139,1152,122.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Activities Section */}
      <div className="pb-20 sm:pb-32  px-4 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6">OUR BEST <span className="text-orange-500">ACTIVITIES</span></h2>
            <p className="text-gray-400 text-base sm:text-xl max-w-2xl mx-auto">Transform your body and mind with our comprehensive fitness programs</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {[
              {
                title: "Weight Loss and Nutrition Plans",
                description: "Personalized nutrition and training plans for sustainable weight management",
                icon: "🥗",
                image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
              },
              {
                title: "HIIT Training",
                description: "High-Intensity Interval Training for maximum results",
                icon: "⚡",
                image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712"
              },
              {
                title: "Muscle Toning and Hypertrophy",
                description: "Specialized programs for muscle development and definition",
                icon: "💪",
                image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
              },
              {
                title: "Bio-Mechanics Analysis",
                description: "Professional assessment of movement patterns and form",
                icon: "📊",
                image: "https://images.unsplash.com/photo-1576678927484-cc907957088c"
              }
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-secondary-800 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="relative z-20 p-6 sm:p-8">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{activity.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{activity.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Welcome Video Section */}
      <div className="bg-secondary-800 py-12 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6">WELCOME TO <span className="text-orange-500">SWEATBOX</span></h2>
            <p className="text-gray-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
              At SWEATBOX, our goal is to improve the quality of our client's lives and to set a new standard of professionalism and care.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="aspect-video rounded-3xl overflow-hidden shadow-2xl"
          >
            <video
              className="w-full h-full object-cover"
              controls
              poster="https://images.unsplash.com/photo-1534367610401-9f5ed68180aa"
            >
              <source src="/videos/welcome.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-12 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-8 sm:mb-16">GYM <span className="text-orange-500">GALLERY</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="group rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                <img src="https://images.unsplash.com/photo-1613685044678-0a9ae422cf5a" alt="Transformation" className="w-full h-60 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
                <h3 className="absolute bottom-6 left-6 right-6 text-white text-xl sm:text-2xl font-bold z-20">TRANSFORMATION GALLERY</h3>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="group rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f" alt="Family" className="w-full h-60 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
                <h3 className="absolute bottom-6 left-6 right-6 text-white text-xl sm:text-2xl font-bold z-20">SWEAT BOX FAMILY GALLERY</h3>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="group rounded-3xl overflow-hidden shadow-xl sm:col-span-2 md:col-span-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                <img src="https://images.unsplash.com/photo-1534367610401-9f5ed68180aa" alt="Workout" className="w-full h-60 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
                <h3 className="absolute bottom-6 left-6 right-6 text-white text-xl sm:text-2xl font-bold z-20">SWEAT BOX WORKOUT GALLERY</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className={`relative h-[300px] sm:h-[500px] w-full transition-all duration-500 ${mapZoomed ? 'h-[500px] sm:h-[800px]' : ''}`}>
        <button
          onClick={() => setMapZoomed(!mapZoomed)}
          className="absolute top-4 right-4 z-20 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-100 transition-colors"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mapZoomed ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4M12 4v16" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            )}
          </svg>
        </button>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.802548850809!2d121.04711597580637!3d14.553732185543607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8f8a00a8445%3A0xb0b0ea0d65598d5!2sBonifacio%20Global%20City%2C%20Taguig%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1690856671364!5m2!1sen!2sph"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </div>

      {/* Contact Info */}
      <div className="bg-secondary-800 py-8 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="text-white text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">CONTACT</h3>
            <p className="flex items-center justify-center sm:justify-start gap-3 text-base sm:text-lg mb-2">
              <span className="text-xl sm:text-2xl">📞</span> 091 300 4932
            </p>
            <p className="flex items-center justify-center sm:justify-start gap-3 text-base sm:text-lg">
              <span className="text-xl sm:text-2xl">✉️</span> sweatboxgym@gmail.com
            </p>
          </div>
          <div className="text-white text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">OPENING HOURS</h3>
            <p className="text-base sm:text-lg">Monday-Sunday: 5am to 11pm</p>
          </div>
          <div className="flex gap-6">
            <Link to="#" className="text-white hover:text-orange-500 transition-colors">
              <i className="fab fa-facebook-f text-2xl sm:text-3xl"></i>
            </Link>
            <Link to="#" className="text-white hover:text-orange-500 transition-colors">
              <i className="fab fa-instagram text-2xl sm:text-3xl"></i>
            </Link>
            <Link to="#" className="text-white hover:text-orange-500 transition-colors">
              <i className="fab fa-twitter text-2xl sm:text-3xl"></i>
            </Link>
          </div>
        </div>+--
      </div>
    </div>
  )
}

export default Home2


const Navbar = () => {
 
  return (
 <>
 </>
  )
}
