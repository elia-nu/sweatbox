import { useState } from 'react'
import { motion } from 'framer-motion'

const MapComponent = () => {
  const [mapZoomed, setMapZoomed] = useState(false)
  return (
    <>
      {/* Map Section */}
      <motion.div 
        layout
        className={`relative ${mapZoomed ? 'h-[800px]' : 'h-[400px]'} transition-all duration-500`}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setMapZoomed(!mapZoomed)}
          className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mapZoomed ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4M12 4v16" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            )}
          </svg>
        </motion.button>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.802548850809!2d121.04711597580637!3d14.553732185543607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8f8a00a8445%3A0xb0b0ea0d65598d5!2sBonifacio%20Global%20City%2C%20Taguig%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1690856671364!5m2!1sen!2sph"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
      </motion.div>
    </>
  )
}

export default MapComponent
