import { motion, AnimatePresence } from "framer-motion";
import Hero from "./hero";
import Footer from "./commen/footer";
import MapComponent from "./map";
import Welcome from "./welcome";
import Programs from "./programs";
import Owner from "./owner";
const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-300/30 to-secondary-900/30">
      {/* Hero Section */}
      <Hero />

      <Programs />
      <Welcome />

      <GallerySection />

      <Owner />

      <MapComponent />
    </div>
  );
};

export default Home;

const GallerySection = () => {
  return (
    <div className="relative py-16 md:py-32 pb-32 md:pb-60 px-4 bg-gradient-to-b from-secondary-600 to-secondary-700">
      {/* Background SVG Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <svg
        className="absolute -bottom-1 left-0 w-full rotate-180 hidden md:block"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="#111827"
          fillOpacity="1"
          d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <svg
        className="absolute -top-24 left-0 w-full rotate-180 hidden md:block"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="#4b5563"
          fillOpacity="1"
          d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      {/* Enhanced decorative elements */}
      <div className="absolute top-20 left-10 w-32 md:w-64 h-32 md:h-64 bg-orange-500/10 rounded-full blur-[50px] md:blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 md:w-64 h-32 md:h-64 bg-purple-500/10 rounded-full blur-[50px] md:blur-[100px] animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-orange-400 font-bold tracking-wider mb-2 md:mb-4 block text-sm md:text-base">
            JOIN US TODAY
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center text-white mb-4 md:mb-6 tracking-tight">
            OUR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-purple-600">
              COMMUNITY
            </span>
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed px-4">
            Join our thriving community of dedicated fitness enthusiasts and
            transform your life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 px-4">
          {[
            {
              title: "SUCCESS STORIES",
              subtitle: "Real transformations from real people",
              image:
                "https://sweatboxapg.com/wp-content/uploads/2022/06/photo_2022-06-02_10-32-43-768x768.jpg.webp",
              delay: 0,
            },
            {
              title: "SWEATBOX FAMILY",
              subtitle: "More than a gym, we're a family",
              image:
                "https://sweatboxapg.com/wp-content/uploads/2022/05/f13.jpg.webp",
              delay: 0.2,
            },
            {
              title: "TRAINING MOMENTS",
              subtitle: "Capturing the journey to greatness",
              image:
                "https://sweatboxapg.com/wp-content/uploads/2022/05/w4.jpg.webp",
              delay: 0.4,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-orange-500/10 bg-secondary-800/50 backdrop-blur-sm hover:shadow-orange-500/20 transition-all duration-500"
            >
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 z-20">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
