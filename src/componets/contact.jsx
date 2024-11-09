import React from 'react';
import { motion } from 'framer-motion';
import MapComponent from './map';
import Footer from './commen/footer';
import Navbar from './commen/navbar';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black/70 to-black/80 backdrop-blur-xl">

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600">TOUCH</span>
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary-800/50 backdrop-blur-sm p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="font-semibold text-orange-500">Address:</span><br />
                  Bonifacio Global City, Taguig, Metro Manila
                </p>
                <p>
                  <span className="font-semibold text-orange-500">Phone:</span><br />
                  +63 123 456 7890
                </p>
                <p>
                  <span className="font-semibold text-orange-500">Email:</span><br />
                  info@sweatboxapg.com
                </p>
                <p>
                  <span className="font-semibold text-orange-500">Hours:</span><br />
                  Monday - Friday: 6am - 10pm<br />
                  Saturday - Sunday: 8am - 8pm
                </p>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary-800/50 backdrop-blur-sm p-8 rounded-2xl"
            >
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 bg-secondary-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 bg-secondary-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-3 bg-secondary-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white h-32"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                >
                  Send Message
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      <MapComponent />
      <Footer />
    </div>
  );
};

export default Contact;
