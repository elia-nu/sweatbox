import { motion, AnimatePresence } from 'framer-motion'
import Hero from './hero'
import Footer from './commen/footer'
import MapComponent from './map'
const Home = () => {


  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-300/30 to-secondary-900/30">
      {/* Hero Section */}
      <Hero />

      {/* Activities Section */}
      <div className="pb-32 px-4 bg-secondary-900 md:pb-72 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 pt-10">
              ELITE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600">PROGRAMS</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Unlock your full potential with our scientifically-backed training methodologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Weight Loss and Nutrition Plans",
                description: "We have teamed up with Nutritionists who provide clients with customized analyses, meal plans and nutrition counselling to manage weight gain/loss, learn about appropriate portion size and balanced nutrition, as well as how to prevent/control chronic conditions",
                icon: "🧬",
                image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
              },
              {
                title: "HIIT (High-Intensity Interval Training)",
                description: "Most of our group classes and personal training plans incorporate HIIT, meaning we alternate short periods of intense exercise with short recovery periods in one session for maximum impact.",
                icon: "⚡",
                image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712"
              },
              {
                title: "Muscle Toning and Hypertrophy",
                description: "For clients who want to increase the size of their muscles and increase muscle definition and leanness, we offer individualized training programs to achieve hypertrophy.",
                icon: "💪",
                image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
              },
              {
                title: "General Bio-Mechanics Analysis",
                description: "We offer clients an initial, detailed examination of various everyday movements like squatting, dead-lifting (picking up things), walking up stairs, lunging, and running (gait) to assess their mobility and any limitations.",
                icon: "🎯",
                image: "https://images.unsplash.com/photo-1576678927484-cc907957088c"
              }
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative  bg-secondary-800/50 backdrop-blur-sm rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 px-10 py-10 " />
                <motion.img 
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={activity.image} 
                  alt={activity.title}
                  className="absolute inset-0 w-full h-full  object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="relative z-20 p-8">
                  <div className="text-6xl mb-6">{activity.icon}</div>
                  
                  <h3 className="text-2xl font-bold text-primary-4--00 mb-3">{activity.title}</h3>
                  <p className="text-gray-300">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Welcome Video Section */}
      <div className="bg-secondary-800/50 backdrop-blur-md py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              WELCOME TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600">SWEATBOX</span>
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Experience fitness redefined. Where innovation meets dedication to forge the strongest version of you.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-orange-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              poster="https://images.unsplash.com/photo-1534367610401-9f5ed68180aa"
            >
              <source src="https://sweatboxapg.com/wp-content/uploads/2022/04/Untitled.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </div>
      <GallerySection/> 

     
<Owner/>
<MapComponent/>
<Footer/>
     
    </div>
  )
}

export default Home




const Owner = () => {
  return (
    <div className="py-24 px-4 bg-secondary-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            MEET OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600">OWNER & HEAD COACH</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img 
              src="https://sweatboxapg.com/wp-content/uploads/2022/05/g-768x471.jpg.webp" 
              alt="Head Coach"
              className="w-full h-auto w-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h3 className="text-4xl font-bold mb-6">John Smith</h3>
            <div className="space-y-6 text-gray-300">
              <p>With over 15 years of experience in fitness and performance training, Coach John has transformed countless lives through his innovative training methodologies.</p>
              <p>• Certified Strength & Conditioning Specialist (CSCS)</p>
              <p>• Former Professional Athlete</p>
              <p>• Sports Nutrition Specialist</p>
              <p>• Performance Enhancement Specialist</p>
              <p className="italic">"My mission is to help every individual unlock their full potential and achieve what they once thought was impossible."</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full font-bold text-white"
            >
              Book a Session
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
const GallerySection = () => {
  return (
    <div className="relative py-32 pb-60 px-4 bg-gradient-to-b from-secondary-600 to-secondary-700">
      {/* Background SVG Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <svg className="absolute -bottom-1 left-0 w-full rotate-180" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path 
          fill="#111827" 
          fillOpacity="1" 
          d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <svg className="absolute -top-24 left-0 w-full rotate-180" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path 
          fill="#4b5563" 
          fillOpacity="1" 
          d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      {/* Enhanced decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-orange-400 font-bold tracking-wider mb-4 block">JOIN US TODAY</span>
          <h2 className="text-6xl md:text-7xl font-black text-center text-white mb-6 tracking-tight">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-purple-600">COMMUNITY</span>
          </h2>
          <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Join our thriving community of dedicated fitness enthusiasts and transform your life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              title: "SUCCESS STORIES",
              subtitle: "Real transformations from real people",
              image: "https://sweatboxapg.com/wp-content/uploads/2022/06/photo_2022-06-02_10-32-43-768x768.jpg.webp",
              delay: 0
            },
            {
              title: "SWEATBOX FAMILY",
              subtitle: "More than a gym, we're a family",
              image: "https://sweatboxapg.com/wp-content/uploads/2022/05/f13.jpg.webp",
              delay: 0.2
            },
            {
              title: "TRAINING MOMENTS",
              subtitle: "Capturing the journey to greatness",
              image: "https://sweatboxapg.com/wp-content/uploads/2022/05/w4.jpg.webp",
              delay: 0.4
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group rounded-3xl overflow-hidden shadow-2xl shadow-orange-500/10 bg-secondary-800/50 backdrop-blur-sm hover:shadow-orange-500/20 transition-all duration-500"
            >
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                <motion.img 
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}


