import { useState } from 'react'
import { motion } from 'framer-motion'

const Footer = () => {

  return (
<>
 {/* Contact Section */}
 <div className="bg-secondary-900 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white">
              GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600">TOUCH</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-secondary-800 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
              <div className="space-y-4">
                <a href="tel:+639130004932" className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-colors">
                  <i className="fas fa-phone-alt w-5"></i>
                  <span>+63 913 000 4932</span>
                </a>
                <a href="mailto:sweatboxgym@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-colors">
                  <i className="fas fa-envelope w-5"></i>
                  <span>sweatboxgym@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <i className="fas fa-map-marker-alt w-5"></i>
                  <span>Bonifacio Global City, Taguig</span>
                </div>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-secondary-800 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Training Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-300">
                  <span>Monday - Friday</span>
                  <span className="text-orange-400">5:00 AM - 11:00 PM</span>
                </div>
                <div className="h-px bg-gray-700"></div>
                <div className="flex justify-between text-gray-300">
                  <span>Saturday - Sunday</span>
                  <span className="text-orange-400">5:00 AM - 11:00 PM</span>
                </div>
              </div>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-secondary-800 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
              <div className="flex gap-4">
                <a 
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                >
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a 
                  href="https://instagram.com"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white hover:from-purple-700 hover:to-pink-600 transition-colors"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a 
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
</>

  )
}
export default Footer
